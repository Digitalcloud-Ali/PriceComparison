export const US_CATEGORIES = {
  electronics: {
    name: 'Electronics',
    subcategories: [
      { name: 'Computers & Tablets', slug: 'computers-tablets' },
      { name: 'Cell Phones', slug: 'cell-phones' },
      { name: 'TV & Home Theater', slug: 'tv-home-theater' },
      { name: 'Video Games', slug: 'video-games' },
      { name: 'Cameras', slug: 'cameras' },
      { name: 'Smart Home', slug: 'smart-home' },
    ],
  },
  fashion: {
    name: 'Clothing, Shoes & Jewelry',
    subcategories: [
      { name: "Women's Fashion", slug: 'womens-fashion' },
      { name: "Men's Fashion", slug: 'mens-fashion' },
      { name: "Kids' Fashion", slug: 'kids-fashion' },
      { name: 'Watches', slug: 'watches' },
      { name: 'Jewelry', slug: 'jewelry' },
      { name: 'Handbags', slug: 'handbags' },
    ],
  },
  home: {
    name: 'Home & Kitchen',
    subcategories: [
      { name: 'Kitchen & Dining', slug: 'kitchen-dining' },
      { name: 'Furniture', slug: 'furniture' },
      { name: 'Bedding & Bath', slug: 'bedding-bath' },
      { name: 'Home Decor', slug: 'home-decor' },
      { name: 'Storage & Organization', slug: 'storage' },
      { name: 'Appliances', slug: 'appliances' },
    ],
  },
  sports: {
    name: 'Sports & Outdoors',
    subcategories: [
      { name: 'Exercise & Fitness', slug: 'exercise-fitness' },
      { name: 'Outdoor Recreation', slug: 'outdoor-recreation' },
      { name: 'Sports Equipment', slug: 'sports-equipment' },
      { name: 'Fan Shop', slug: 'fan-shop' },
      { name: 'Camping & Hiking', slug: 'camping-hiking' },
      { name: 'Athletic Clothing', slug: 'athletic-clothing' },
    ],
  },
  automotive: {
    name: 'Automotive',
    subcategories: [
      { name: 'Car Parts & Accessories', slug: 'car-parts' },
      { name: 'Tools & Equipment', slug: 'tools-equipment' },
      { name: 'Car Electronics', slug: 'car-electronics' },
      { name: 'Motorcycle Parts', slug: 'motorcycle-parts' },
      { name: 'RV Parts', slug: 'rv-parts' },
      { name: 'Tires & Wheels', slug: 'tires-wheels' },
    ],
  },
};

export type CategoryKey = keyof typeof US_CATEGORIES; 