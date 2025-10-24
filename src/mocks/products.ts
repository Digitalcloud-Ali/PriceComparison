import { getPlaceholderImage } from '@/utils/placeholder';

export const MOCK_PRODUCTS = [
  // Electronics - Smartphones
  {
    id: 'B0CHX3QBCH',
    title: 'Apple iPhone 15 Pro Max (256GB) - Natural Titanium',
    price: 1199.99,
    originalPrice: 1299.99,
    image: getPlaceholderImage(800, 600, 'iPhone 15 Pro Max', 'smartphones'),
    images: [
      getPlaceholderImage(800, 600, 'iPhone 15 Pro Max - Front', 'smartphones'),
      getPlaceholderImage(800, 600, 'iPhone 15 Pro Max - Back', 'smartphones'),
      getPlaceholderImage(800, 600, 'iPhone 15 Pro Max - Side', 'smartphones')
    ],
    description: 'The most powerful iPhone ever with A17 Pro chip',
    brand: 'apple',
    category: 'electronics',
    subcategory: 'smartphones',
    isPrime: true,
    primeDeliveryDays: 1,
    rating: 4.8,
    reviewCount: 2345,
    stockStatus: 'IN_STOCK',
    soldCount: 15000,
    features: [
      'A17 Pro chip for breakthrough performance',
      'Pro camera system with 48MP main camera',
      'Titanium design with Action button',
      'All-day battery life',
      'USB-C connectivity'
    ],
    specifications: {
      'Display': '6.7-inch Super Retina XDR display',
      'Processor': 'A17 Pro chip',
      'Storage': '256GB',
      'Camera': '48MP main, 12MP ultra wide, 12MP telephoto',
      'Battery': 'Up to 29 hours video playback'
    },
    tags: ['smartphone', 'ios', 'mobile phone', '5G', 'premium']
  },

  // Electronics - Laptops
  {
    id: 'B0BSHDVMQ2',
    title: 'MacBook Pro 16-inch M3 Max (2024)',
    price: 2899.99,
    originalPrice: 3199.99,
    image: getPlaceholderImage(800, 600, 'MacBook Pro', 'laptops'),
    images: [
      getPlaceholderImage(800, 600, 'MacBook Pro - Front', 'laptops'),
      getPlaceholderImage(800, 600, 'MacBook Pro - Side', 'laptops')
    ],
    brand: 'apple',
    category: 'electronics',
    subcategory: 'laptops',
    isPrime: true,
    primeDeliveryDays: 1,
    rating: 4.9,
    reviewCount: 856,
    stockStatus: 'IN_STOCK',
    soldCount: 5000,
    features: [
      'M3 Max chip with 16-core CPU',
      '32-core GPU',
      '32GB unified memory',
      '1TB SSD storage',
      'Liquid Retina XDR display'
    ]
  },

  // Electronics - Headphones
  {
    id: 'B0BDHWDR12',
    title: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: getPlaceholderImage(800, 600, 'Sony WH-1000XM5', 'electronics'),
    brand: 'sony',
    category: 'electronics',
    subcategory: 'headphones',
    isPrime: true,
    primeDeliveryDays: 1,
    rating: 4.7,
    reviewCount: 3421,
    stockStatus: 'IN_STOCK',
    soldCount: 12000
  },

  // Fashion - Men's Clothing
  {
    id: 'B07DJXY1V2',
    title: "Levi's Men's 501 Original Fit Jeans",
    price: 49.99,
    originalPrice: 69.99,
    image: getPlaceholderImage(800, 600, 'Levi\'s 501 Original Fit Jeans', 'fashion'),
    brand: 'levis',
    category: 'fashion',
    subcategory: 'mens-clothing',
    isPrime: true,
    primeDeliveryDays: 2,
    rating: 4.5,
    reviewCount: 12543,
    stockStatus: 'IN_STOCK',
    soldCount: 25000
  },

  // Home & Kitchen
  {
    id: 'B08RCNWTQ1',
    title: 'Ninja DZ201 Foodi 8 Quart 6-in-1 DualZone Air Fryer',
    price: 179.99,
    originalPrice: 199.99,
    image: getPlaceholderImage(800, 600, 'Ninja DZ201 Foodi', 'home'),
    brand: 'ninja',
    category: 'home',
    subcategory: 'kitchen-appliances',
    isPrime: true,
    primeDeliveryDays: 1,
    rating: 4.8,
    reviewCount: 34567,
    stockStatus: 'IN_STOCK',
    soldCount: 18000
  },

  // Sports & Outdoors
  {
    id: 'B092HQR26D',
    title: 'NordicTrack Commercial Studio Cycle',
    price: 1499.99,
    originalPrice: 1799.99,
    image: getPlaceholderImage(800, 600, 'NordicTrack Commercial Studio Cycle', 'sports'),
    brand: 'nordictrack',
    category: 'sports',
    subcategory: 'exercise',
    isPrime: true,
    primeDeliveryDays: 3,
    rating: 4.6,
    reviewCount: 2345,
    stockStatus: 'IN_STOCK',
    soldCount: 3000
  },

  // Electronics - Gaming
  {
    id: 'B09DGH6CLV',
    title: 'PlayStation 5 Console - God of War Ragnarök Bundle',
    price: 499.99,
    originalPrice: 559.99,
    image: getPlaceholderImage(800, 600, 'PlayStation 5 Console', 'electronics'),
    images: [
      getPlaceholderImage(800, 600, 'PlayStation 5 Console - Front', 'electronics'),
      getPlaceholderImage(800, 600, 'PlayStation 5 Console - Back', 'electronics')
    ],
    description: 'Next-gen gaming with lightning-fast loading',
    brand: 'sony',
    category: 'electronics',
    subcategory: 'gaming',
    isPrime: true,
    primeDeliveryDays: 1,
    rating: 4.9,
    reviewCount: 12453,
    stockStatus: 'IN_STOCK',
    soldCount: 35000,
    features: [
      '4K HDR gaming',
      'Ultra-high speed SSD',
      'Includes God of War Ragnarök full game',
      'DualSense wireless controller',
      '3D Audio technology'
    ]
  },

  // Fashion - Shoes
  {
    id: 'B07NPRV2WX',
    title: 'Nike Air Max 270 React',
    price: 129.99,
    originalPrice: 159.99,
    image: getPlaceholderImage(800, 600, 'Nike Air Max 270 React', 'fashion'),
    brand: 'nike',
    category: 'fashion',
    subcategory: 'shoes',
    isPrime: true,
    primeDeliveryDays: 2,
    rating: 4.6,
    reviewCount: 8765,
    stockStatus: 'IN_STOCK',
    soldCount: 42000,
    features: [
      'Nike React technology',
      'Max Air 270 unit',
      'Lightweight mesh upper',
      'Durable rubber outsole'
    ]
  },

  // Beauty & Personal Care
  {
    id: 'B084DXYN2H',
    title: 'Dyson Airwrap Multi-Styler Complete Long',
    price: 599.99,
    originalPrice: 649.99,
    image: getPlaceholderImage(800, 600, 'Dyson Airwrap Multi-Styler', 'beauty'),
    brand: 'dyson',
    category: 'beauty',
    subcategory: 'hair-care',
    isPrime: true,
    primeDeliveryDays: 1,
    rating: 4.7,
    reviewCount: 15678,
    stockStatus: 'IN_STOCK',
    soldCount: 8900,
    features: [
      'Coanda airflow technology',
      'Multiple styling attachments',
      'Intelligent heat control',
      'No extreme heat damage'
    ]
  },

  // Home & Kitchen - Appliances
  {
    id: 'B08XMZM5BL',
    title: 'KitchenAid Professional 600 Stand Mixer',
    price: 429.99,
    originalPrice: 499.99,
    image: getPlaceholderImage(800, 600, 'KitchenAid Professional 600 Stand Mixer', 'home'),
    brand: 'kitchenaid',
    category: 'home',
    subcategory: 'kitchen-appliances',
    isPrime: true,
    primeDeliveryDays: 2,
    rating: 4.8,
    reviewCount: 23456,
    stockStatus: 'IN_STOCK',
    soldCount: 15600,
    features: [
      '6-quart capacity',
      '10 speed settings',
      'Bowl-lift design',
      'Includes multiple attachments'
    ]
  },

  // Toys & Games
  {
    id: 'B07PXGQC1Q',
    title: 'LEGO Star Wars Millennium Falcon',
    price: 159.99,
    originalPrice: 169.99,
    image: getPlaceholderImage(800, 600, 'LEGO Star Wars Millennium Falcon', 'toys'),
    brand: 'lego',
    category: 'toys',
    subcategory: 'building-toys',
    isPrime: true,
    primeDeliveryDays: 1,
    rating: 4.9,
    reviewCount: 9876,
    stockStatus: 'IN_STOCK',
    soldCount: 12400,
    features: [
      '1,353 pieces',
      'Includes 7 minifigures',
      'Detailed interior',
      'Opening cockpit'
    ]
  }
];

// Add price history data
export const MOCK_PRICE_HISTORY = {
  'B0CHX3QBCH': [
    { date: '2024-01-01', price: 1299.99 },
    { date: '2024-01-15', price: 1249.99 },
    { date: '2024-02-01', price: 1199.99 }
  ],
  'B09DGH6CLV': [
    { date: '2024-01-01', price: 559.99 },
    { date: '2024-01-15', price: 529.99 },
    { date: '2024-02-01', price: 499.99 }
  ],
  'B07NPRV2WX': [
    { date: '2024-01-01', price: 159.99 },
    { date: '2024-01-20', price: 144.99 },
    { date: '2024-02-01', price: 129.99 }
  ]
};

// Add review data
export const MOCK_REVIEWS = {
  'B0CHX3QBCH': [
    {
      id: '1',
      rating: 5,
      title: 'Best iPhone Ever',
      content: 'Amazing camera and battery life. The titanium design feels premium.',
      author: 'John D.',
      date: '2024-02-20',
      verified: true
    },
    {
      id: '2',
      rating: 4,
      title: 'Great but Expensive',
      content: 'Excellent phone but the price is steep.',
      author: 'Sarah M.',
      date: '2024-02-18',
      verified: true
    }
  ],
  'B09DGH6CLV': [
    {
      id: '1',
      rating: 5,
      title: 'Amazing Gaming Experience',
      content: 'The PS5 is incredibly fast and the graphics are stunning.',
      author: 'Mike R.',
      date: '2024-02-15',
      verified: true
    },
    {
      id: '2',
      rating: 5,
      title: 'Worth Every Penny',
      content: 'God of War looks and plays amazingly on PS5.',
      author: 'Sarah K.',
      date: '2024-02-10',
      verified: true
    }
  ]
}; 