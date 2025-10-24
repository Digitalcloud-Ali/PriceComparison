import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '@/types/product';

// This is a mock implementation for development
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const { query } = req.query;

  // Mock data for development
  const mockProducts: Product[] = [
    {
      id: '1',
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
    },
    {
      id: '2',
      title: 'Samsung Galaxy S24 Ultra (512GB) - Titanium Gray',
      price: 1299.99,
      image: 'https://m.media-amazon.com/images/I/71YdE55GwjL._AC_UY218_.jpg',
      description: 'Galaxy AI and 200MP camera system',
      originalPrice: 1399.99,
      brand: 'samsung',
      category: 'electronics',
      isPrime: true,
      primeDeliveryDays: 2,
      rating: 4.7,
      reviewCount: 1876,
      stockStatus: 'IN_STOCK',
    },
    // Add more mock products as needed
  ];

  res.status(200).json(mockProducts);
} 