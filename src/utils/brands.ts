export interface Brand {
  name: string;
  slug: string;
  logo?: string;
}

export const BRAND_MAP: Record<string, Brand[]> = {
  electronics: [
    { name: 'Apple', slug: 'apple', logo: '/brands/apple.png' },
    { name: 'Samsung', slug: 'samsung', logo: '/brands/samsung.png' },
    { name: 'Sony', slug: 'sony', logo: '/brands/sony.png' },
    { name: 'LG', slug: 'lg', logo: '/brands/lg.png' },
    { name: 'Panasonic', slug: 'panasonic', logo: '/brands/panasonic.png' },
    { name: 'Philips', slug: 'philips', logo: '/brands/philips.png' },
  ],
  fashion: [
    { name: 'Nike', slug: 'nike', logo: '/brands/nike.png' },
    { name: 'Adidas', slug: 'adidas', logo: '/brands/adidas.png' },
    { name: 'Zara', slug: 'zara', logo: '/brands/zara.png' },
    { name: 'H&M', slug: 'hm', logo: '/brands/hm.png' },
    { name: 'ASOS', slug: 'asos', logo: '/brands/asos.png' },
    { name: 'Next', slug: 'next', logo: '/brands/next.png' },
  ],
  home: [
    { name: 'Dyson', slug: 'dyson', logo: '/brands/dyson.png' },
    { name: 'Bosch', slug: 'bosch', logo: '/brands/bosch.png' },
    { name: 'Russell Hobbs', slug: 'russell-hobbs', logo: '/brands/russell-hobbs.png' },
    { name: 'Joseph Joseph', slug: 'joseph-joseph', logo: '/brands/joseph-joseph.png' },
    { name: 'Morphy Richards', slug: 'morphy-richards', logo: '/brands/morphy-richards.png' },
    { name: 'Tefal', slug: 'tefal', logo: '/brands/tefal.png' },
  ],
};

export function getBrandBySlug(category: string, brandSlug: string): Brand | undefined {
  return BRAND_MAP[category]?.find(brand => brand.slug === brandSlug);
}

export function getBrandsForCategory(category: string): Brand[] {
  return BRAND_MAP[category] || [];
} 