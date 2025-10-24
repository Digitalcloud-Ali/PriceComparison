#!/bin/bash

# Environment variables setup script
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

# Create .env file
echo "Creating .env file for $ENV environment..."

# Load environment configuration
eval $(parse_yaml $CONFIG_FILE)

# Generate .env file
cat > "$ROOT_DIR/.env" << EOL
NODE_ENV=${environments_${ENV}_node_env}
NEXT_PUBLIC_SITE_URL=https://${environments_${ENV}_domain}
NEXT_PUBLIC_AMAZON_UK_AFFILIATE_ID=${AMAZON_UK_AFFILIATE_ID}
AMAZON_ACCESS_KEY=${AMAZON_ACCESS_KEY}
AMAZON_SECRET_KEY=${AMAZON_SECRET_KEY}
EOL

echo "Environment variables set successfully!" 