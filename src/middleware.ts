import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add CSP header (all on one line)
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data: *.amazon.com *.amazon.co.uk *.ssl-images-amazon.com placehold.co via.placeholder.com; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self';"
  );

  return response;
}

export const config = {
  matcher: '/:path*',
}; 