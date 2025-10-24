import { Product } from '@/types/product';

type SortOption = 'price-asc' | 'price-desc' | 'discount' | 'popular';

export function sortProducts(products: Product[], sortBy: SortOption): Product[] {
  const sortedProducts = [...products];

  switch (sortBy) {
    case 'price-asc':
      return sortedProducts.sort((a, b) => a.price - b.price);
    
    case 'price-desc':
      return sortedProducts.sort((a, b) => b.price - a.price);
    
    case 'discount':
      return sortedProducts.sort((a, b) => {
        const discountA = a.originalPrice ? ((a.originalPrice - a.price) / a.originalPrice) * 100 : 0;
        const discountB = b.originalPrice ? ((b.originalPrice - b.price) / b.originalPrice) * 100 : 0;
        return discountB - discountA;
      });
    
    case 'popular':
      return sortedProducts.sort((a, b) => {
        // First by rating
        const ratingDiff = (b.rating || 0) - (a.rating || 0);
        if (ratingDiff !== 0) return ratingDiff;
        
        // Then by number of reviews
        const reviewDiff = (b.reviewCount || 0) - (a.reviewCount || 0);
        if (reviewDiff !== 0) return reviewDiff;
        
        // Finally by sales count
        return (b.soldCount || 0) - (a.soldCount || 0);
      });
    
    default:
      return sortedProducts;
  }
}

export function filterProducts(
  products: Product[],
  filters: {
    priceRange?: [number, number];
    brands?: string[];
    isPrime?: boolean;
    minRating?: number;
  }
): Product[] {
  return products.filter(product => {
    // Price Range Filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      if (product.price < min || product.price > max) return false;
    }

    // Brand Filter
    if (filters.brands && filters.brands.length > 0) {
      if (!product.brand || !filters.brands.includes(product.brand)) return false;
    }

    // Prime Filter
    if (filters.isPrime && !product.isPrime) return false;

    // Rating Filter
    if (filters.minRating && (!product.rating || product.rating < filters.minRating)) return false;

    return true;
  });
} 