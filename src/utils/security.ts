import crypto from 'crypto';

export function generateCSP() {
  const nonce = crypto.randomBytes(16).toString('base64');

  return {
    nonce,
    header: `
      default-src 'self';
      script-src 'self' 'nonce-${nonce}' 'unsafe-inline' *.amazon.co.uk;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: *.amazon.co.uk *.ssl-images-amazon.com;
      font-src 'self';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      block-all-mixed-content;
      upgrade-insecure-requests;
    `.replace(/\s+/g, ' ').trim(),
  };
}

export function validateInput(input: string): boolean {
  // Basic XSS prevention
  const xssPattern = /<[^>]*>|javascript:|data:|vbscript:|on\w+=/i;
  return !xssPattern.test(input);
}

export function sanitizeUrl(url: string): string {
  const allowedProtocols = ['http:', 'https:'];
  try {
    const parsedUrl = new URL(url);
    if (!allowedProtocols.includes(parsedUrl.protocol)) {
      throw new Error('Invalid protocol');
    }
    return parsedUrl.toString();
  } catch {
    return '';
  }
}

export function rateLimit(key: string, limit: number, window: number): boolean {
  if (typeof localStorage === 'undefined') return true;

  const now = Date.now();
  const requests = JSON.parse(localStorage.getItem(key) || '[]') as number[];
  const validRequests = requests.filter(time => now - time < window);

  if (validRequests.length >= limit) {
    return false;
  }

  validRequests.push(now);
  localStorage.setItem(key, JSON.stringify(validRequests));
  return true;
} 