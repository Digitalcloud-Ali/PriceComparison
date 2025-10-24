import { getPlaceholderImage } from '@/utils/placeholder';

// Gaming Products
export const GAMING_PRODUCTS = [
  {
    id: 'XBOX_X',
    title: 'Xbox Series X',
    price: 499.99,
    originalPrice: 549.99,
    image: getPlaceholderImage(800, 600, 'Xbox Series X', 'gaming'),
    brand: 'microsoft',
    category: 'electronics',
    subcategory: 'gaming',
    isPrime: true,
    features: [
      '4K Gaming',
      '120 FPS',
      '1TB SSD',
      'Xbox Game Pass Compatible'
    ]
  },
  {
    id: 'SWITCH_OLED',
    title: 'Nintendo Switch OLED Model',
    price: 349.99,
    originalPrice: 379.99,
    image: getPlaceholderImage(800, 600, 'Nintendo Switch OLED Model', 'gaming'),
    brand: 'nintendo',
    category: 'electronics',
    subcategory: 'gaming'
  }
];

// Smart Home Products
export const SMART_HOME_PRODUCTS = [
  {
    id: 'ECHO5',
    title: 'Echo (5th Gen)',
    price: 99.99,
    originalPrice: 129.99,
    image: getPlaceholderImage(800, 600, 'Echo (5th Gen)', 'electronics'),
    brand: 'amazon',
    category: 'electronics',
    subcategory: 'smart-home'
  }
];

// Premium Fashion
export const PREMIUM_FASHION = [
  {
    id: 'COACH_BAG1',
    title: 'COACH Willow Shoulder Bag',
    price: 299.99,
    originalPrice: 395.00,
    image: getPlaceholderImage(800, 600, 'COACH Willow Shoulder Bag', 'fashion'),
    brand: 'coach',
    category: 'fashion',
    subcategory: 'handbags'
  }
];

// Kitchen Appliances
export const KITCHEN_APPLIANCES = [
  {
    id: 'VITAMIX_PRO',
    title: 'Vitamix Professional Series 750',
    price: 599.99,
    originalPrice: 699.99,
    image: getPlaceholderImage(800, 600, 'Vitamix Professional Series 750', 'home'),
    brand: 'vitamix',
    category: 'home',
    subcategory: 'kitchen-appliances'
  }
]; 