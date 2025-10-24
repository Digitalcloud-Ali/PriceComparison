import { Category } from '@/types/category';

export const CATEGORIES: Record<string, Category> = {
  electronics: {
    name: 'Electronics',
    slug: 'electronics',
    description: 'Explore the latest electronics and gadgets',
    subcategories: [
      {
        name: 'Smartphones',
        slug: 'smartphones',
        subcategories: [
          { name: 'Apple iPhones', slug: 'apple' },
          { name: 'Samsung Galaxy', slug: 'samsung' },
          { name: 'Google Pixel', slug: 'google' },
          { name: 'OnePlus', slug: 'oneplus' },
          { name: 'Xiaomi', slug: 'xiaomi' }
        ]
      },
      {
        name: 'Laptops',
        slug: 'laptops',
        subcategories: [
          { name: 'Gaming Laptops', slug: 'gaming' },
          { name: 'Business Laptops', slug: 'business' },
          { name: 'MacBooks', slug: 'macbooks' },
          { name: 'Chromebooks', slug: 'chromebooks' },
          { name: 'Budget Laptops', slug: 'budget' }
        ]
      },
      {
        name: 'Audio',
        slug: 'audio',
        subcategories: [
          { name: 'Headphones', slug: 'headphones' },
          { name: 'Wireless Earbuds', slug: 'earbuds' },
          { name: 'Speakers', slug: 'speakers' },
          { name: 'Soundbars', slug: 'soundbars' },
          { name: 'Home Audio', slug: 'home-audio' }
        ]
      },
      {
        name: 'Gaming',
        slug: 'gaming',
        subcategories: [
          { name: 'Consoles', slug: 'consoles' },
          { name: 'Games', slug: 'games' },
          { name: 'Accessories', slug: 'accessories' },
          { name: 'Gaming PCs', slug: 'gaming-pcs' },
          { name: 'VR Gaming', slug: 'vr-gaming' }
        ]
      }
    ]
  },
  fashion: {
    name: 'Fashion',
    slug: 'fashion',
    description: 'Discover trending fashion and accessories',
    subcategories: [
      {
        name: "Men's Fashion",
        slug: 'mens',
        subcategories: [
          { name: 'Clothing', slug: 'clothing' },
          { name: 'Shoes', slug: 'shoes' },
          { name: 'Watches', slug: 'watches' },
          { name: 'Accessories', slug: 'accessories' },
          { name: 'Sportswear', slug: 'sportswear' }
        ]
      },
      {
        name: "Women's Fashion",
        slug: 'womens',
        subcategories: [
          { name: 'Clothing', slug: 'clothing' },
          { name: 'Shoes', slug: 'shoes' },
          { name: 'Handbags', slug: 'handbags' },
          { name: 'Jewelry', slug: 'jewelry' },
          { name: 'Accessories', slug: 'accessories' }
        ]
      },
      {
        name: 'Kids Fashion',
        slug: 'kids',
        subcategories: [
          { name: 'Boys Clothing', slug: 'boys' },
          { name: 'Girls Clothing', slug: 'girls' },
          { name: 'Baby Clothing', slug: 'baby' },
          { name: 'Kids Shoes', slug: 'shoes' },
          { name: 'School Uniforms', slug: 'uniforms' }
        ]
      }
    ]
  },
  home: {
    name: 'Home & Kitchen',
    slug: 'home',
    description: 'Everything for your home',
    subcategories: [
      {
        name: 'Kitchen',
        slug: 'kitchen',
        subcategories: [
          { name: 'Small Appliances', slug: 'small-appliances' },
          { name: 'Cookware', slug: 'cookware' },
          { name: 'Kitchen Tools', slug: 'tools' },
          { name: 'Dining', slug: 'dining' },
          { name: 'Storage', slug: 'storage' }
        ]
      },
      {
        name: 'Furniture',
        slug: 'furniture',
        subcategories: [
          { name: 'Living Room', slug: 'living-room' },
          { name: 'Bedroom', slug: 'bedroom' },
          { name: 'Home Office', slug: 'office' },
          { name: 'Dining Room', slug: 'dining-room' },
          { name: 'Patio', slug: 'patio' }
        ]
      },
      {
        name: 'Smart Home',
        slug: 'smart-home',
        subcategories: [
          { name: 'Security', slug: 'security' },
          { name: 'Lighting', slug: 'lighting' },
          { name: 'Thermostats', slug: 'thermostats' },
          { name: 'Speakers', slug: 'speakers' },
          { name: 'Cameras', slug: 'cameras' }
        ]
      }
    ]
  },
  beauty: {
    name: 'Beauty & Personal Care',
    slug: 'beauty',
    description: 'Beauty, health, and personal care products',
    subcategories: [
      {
        name: 'Skincare',
        slug: 'skincare',
        subcategories: [
          { name: 'Face', slug: 'face' },
          { name: 'Body', slug: 'body' },
          { name: 'Sun Care', slug: 'sun-care' },
          { name: 'K-Beauty', slug: 'k-beauty' },
          { name: 'Natural', slug: 'natural' }
        ]
      },
      {
        name: 'Makeup',
        slug: 'makeup',
        subcategories: [
          { name: 'Face', slug: 'face' },
          { name: 'Eyes', slug: 'eyes' },
          { name: 'Lips', slug: 'lips' },
          { name: 'Brushes', slug: 'brushes' },
          { name: 'Sets', slug: 'sets' }
        ]
      },
      {
        name: 'Hair Care',
        slug: 'hair-care',
        subcategories: [
          { name: 'Shampoo', slug: 'shampoo' },
          { name: 'Styling', slug: 'styling' },
          { name: 'Hair Color', slug: 'color' },
          { name: 'Hair Tools', slug: 'tools' },
          { name: 'Treatments', slug: 'treatments' }
        ]
      }
    ]
  },
  sports: {
    name: 'Sports & Outdoors',
    slug: 'sports',
    description: 'Sports, fitness, and outdoor gear',
    subcategories: [
      {
        name: 'Exercise & Fitness',
        slug: 'fitness',
        subcategories: [
          { name: 'Cardio Equipment', slug: 'cardio' },
          { name: 'Strength Training', slug: 'strength' },
          { name: 'Yoga', slug: 'yoga' },
          { name: 'Accessories', slug: 'accessories' },
          { name: 'Recovery', slug: 'recovery' }
        ]
      },
      {
        name: 'Outdoor Recreation',
        slug: 'outdoor',
        subcategories: [
          { name: 'Camping', slug: 'camping' },
          { name: 'Hiking', slug: 'hiking' },
          { name: 'Cycling', slug: 'cycling' },
          { name: 'Water Sports', slug: 'water-sports' },
          { name: 'Winter Sports', slug: 'winter-sports' }
        ]
      },
      {
        name: 'Team Sports',
        slug: 'team-sports',
        subcategories: [
          { name: 'Basketball', slug: 'basketball' },
          { name: 'Football', slug: 'football' },
          { name: 'Soccer', slug: 'soccer' },
          { name: 'Baseball', slug: 'baseball' },
          { name: 'Volleyball', slug: 'volleyball' }
        ]
      }
    ]
  },
  toys: {
    name: 'Toys & Games',
    slug: 'toys',
    description: 'Toys, games, and entertainment for all ages',
    subcategories: [
      {
        name: 'Kids Toys',
        slug: 'kids-toys',
        subcategories: [
          { name: 'Action Figures', slug: 'action-figures' },
          { name: 'Building Toys', slug: 'building-toys' },
          { name: 'Dolls', slug: 'dolls' },
          { name: 'Educational', slug: 'educational' },
          { name: 'Remote Control', slug: 'remote-control' }
        ]
      },
      {
        name: 'Games',
        slug: 'games',
        subcategories: [
          { name: 'Board Games', slug: 'board-games' },
          { name: 'Card Games', slug: 'card-games' },
          { name: 'Puzzles', slug: 'puzzles' },
          { name: 'Family Games', slug: 'family-games' },
          { name: 'Strategy Games', slug: 'strategy-games' }
        ]
      },
      {
        name: 'Outdoor Play',
        slug: 'outdoor-play',
        subcategories: [
          { name: 'Playsets', slug: 'playsets' },
          { name: 'Sports Toys', slug: 'sports-toys' },
          { name: 'Swimming Pools', slug: 'pools' },
          { name: 'Ride-On Toys', slug: 'ride-on' },
          { name: 'Bubbles & Water Toys', slug: 'water-toys' }
        ]
      }
    ]
  }
};

export const findCategoryByPath = (path: string[]): Category | SubCategory | null => {
  if (path.length === 0) return null;

  const mainCategory = CATEGORIES[path[0]];
  if (!mainCategory) return null;
  if (path.length === 1) return mainCategory;

  let current: SubCategory | undefined = mainCategory.subcategories
    .find(sub => sub.slug === path[1]);
  
  for (let i = 2; i < path.length && current; i++) {
    current = current.subcategories?.find(sub => sub.slug === path[i]);
  }

  return current || null;
};

export const getBreadcrumbPath = (path: string[]): CategoryBreadcrumb[] => {
  const breadcrumb: CategoryBreadcrumb[] = [];
  let currentPath = '';

  for (let i = 0; i < path.length; i++) {
    currentPath += (i === 0 ? '' : '/') + path[i];
    const category = findCategoryByPath(path.slice(0, i + 1));
    if (category) {
      breadcrumb.push({
        name: category.name,
        slug: currentPath
      });
    }
  }

  return breadcrumb;
}; 