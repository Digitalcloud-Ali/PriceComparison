import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '@/types/product';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | null>
) {
  const { id } = req.query;

  // Mock data for development
  const mockProduct: Product = {
    id: id as string,
    title: 'Apple iPhone 15 Pro Max (256GB) - Natural Titanium',
    price: 1199.99,
    image: 'https://m.media-amazon.com/images/I/81dT7CUY6GL._AC_UY218_.jpg',
    description: 'The most powerful iPhone ever with A17 Pro chip',
    originalPrice: 1299.99,
    brand: 'apple',
    category: 'electronics',
    isPrime: true,
    primeDeliveryDays: 1,
    rating: 4.8,
    reviewCount: 2345,
    stockStatus: 'IN_STOCK',
    priceHistory: [
      { date: '2024-01-01', price: 1299.99 },
      { date: '2024-02-01', price: 1249.99 },
      { date: '2024-03-01', price: 1199.99 },
    ],
  };

  res.status(200).json(mockProduct);
} 