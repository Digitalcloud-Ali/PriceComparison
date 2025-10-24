import { MARKETS, MarketRegion, DEFAULT_MARKET } from '@/config/markets';

export function getCurrentMarket(): MarketRegion {
  return DEFAULT_MARKET;
}

export function getMarketConfig() {
  return MARKETS[DEFAULT_MARKET];
}

export function getAffiliateId() {
  return process.env.NEXT_PUBLIC_AMAZON_US_AFFILIATE_ID;
}

export function getApiCredentials() {
  return {
    accessKey: process.env.AMAZON_US_ACCESS_KEY,
    secretKey: process.env.AMAZON_US_SECRET_KEY,
  };
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function getAmazonUrl(productId: string): string {
  const market = getMarketConfig();
  const affiliateId = getAffiliateId();
  return `https://www.${market.domain}/dp/${productId}?tag=${affiliateId}`;
} 