import { Brand } from '@/types/filters';

export const MOCK_BRANDS: Record<string, Brand[]> = {
  electronics: [
    { id: 'samsung', name: 'Samsung', productCount: 245 },
    { id: 'apple', name: 'Apple', productCount: 189 },
    { id: 'sony', name: 'Sony', productCount: 156 },
    { id: 'lg', name: 'LG', productCount: 134 },
    { id: 'lenovo', name: 'Lenovo', productCount: 98 },
  ],
  fashion: [
    { id: 'nike', name: 'Nike', productCount: 312 },
    { id: 'adidas', name: 'Adidas', productCount: 287 },
    { id: 'puma', name: 'Puma', productCount: 165 },
    { id: 'levis', name: "Levi's", productCount: 143 },
    { id: 'gap', name: 'GAP', productCount: 121 },
  ],
  // Add more categories...
};

export const AVAILABLE_FILTERS = {
  electronics: {
    priceRanges: [
      { min: 0, max: 100 },
      { min: 100, max: 500 },
      { min: 500, max: 1000 },
      { min: 1000, max: 2000 },
    ],
    colors: ['#000000', '#FFFFFF', '#C0C0C0', '#FFD700', '#0000FF'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    features: [
      'Bluetooth',
      'Wi-Fi',
      'USB-C',
      'Wireless Charging',
      'Water Resistant',
      'Voice Control',
    ],
    conditions: ['New', 'Renewed', 'Used - Like New', 'Used - Good'],
  },
  // Add more categories...
}; 