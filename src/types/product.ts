export interface PricePoint {
  date: string;
  price: number;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  images?: string[];
  description?: string;
  features?: string[];
  originalPrice?: number;
  brand?: string;
  category?: string;
  isPrime?: boolean;
  primeDeliveryDays?: number;
  rating?: number;
  reviewCount?: number;
  stockStatus?: 'IN_STOCK' | 'LOW_STOCK' | 'OUT_OF_STOCK';
  soldCount?: number;
  priceHistory?: PricePoint[];
}

export interface Deal extends Product {
  discount: number;
  originalPrice: number;
}

export interface HotSale extends Product {
  soldCount: number;
} 