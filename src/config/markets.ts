export type MarketRegion = 'US';

interface Market {
  name: string;
  domain: string;
  currency: string;
  currencySymbol: string;
  locale: string;
  apiBaseUrl: string;
}

export const MARKETS: Record<MarketRegion, Market> = {
  US: {
    name: 'United States',
    domain: 'amazon.com',
    currency: 'USD',
    currencySymbol: '$',
    locale: 'en-US',
    apiBaseUrl: 'https://webservices.amazon.com',
  },
};

export const DEFAULT_MARKET: MarketRegion = 'US'; 