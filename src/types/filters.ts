export interface Brand {
  id: string;
  name: string;
  productCount: number;
}

export interface FilterOptions {
  priceRange: [number, number];
  brands?: string[];
  isPrime?: boolean;
  freeShipping?: boolean;
  nextDayDelivery?: boolean;
  ratings?: number[];
  colors?: string[];
  sizes?: string[];
  features?: string[];
  conditions?: string[];
} 