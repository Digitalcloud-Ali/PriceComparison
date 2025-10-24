#!/bin/bash

# Environment variables
ENV=$1
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
CONFIG_FILE="$ROOT_DIR/deployment.yml"

# Check if environment is provided
if [ -z "$ENV" ]; then
  echo "Usage: $0 <environment>"
  echo "Available environments: production, staging, development"
  exit 1
fi

# Load environment configuration
eval $(parse_yaml $CONFIG_FILE)

# Set environment variables
export NODE_ENV=${environments_${ENV}_node_env}
export DOMAIN=${environments_${ENV}_domain}
export BRANCH=${environments_${ENV}_branch}

# Build steps
echo "Starting deployment for $ENV environment..."

# Install dependencies
echo "Installing dependencies..."
npm ci

# Run tests
echo "Running tests..."
npm run test

# Build application
echo "Building application..."
npm run build

# Run database migrations if needed
if [ -f "$ROOT_DIR/prisma/schema.prisma" ]; then
  echo "Running database migrations..."
  npx prisma migrate deploy
fi

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod

echo "Deployment completed successfully!" 