import { Product } from '@/types/product';
import { FilterOptions } from '@/types/filters';

export const filterProducts = (products: Product[], filters: FilterOptions): Product[] => {
  return products.filter(product => {
    // Price Range
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }

    // Prime
    if (filters.isPrime && !product.isPrime) {
      return false;
    }

    // Free Shipping
    if (filters.freeShipping && !product.freeShipping) {
      return false;
    }

    // Next Day Delivery
    if (filters.nextDayDelivery && !product.nextDayDelivery) {
      return false;
    }

    // Brands
    if (filters.brands?.length && !filters.brands.includes(product.brand)) {
      return false;
    }

    // Ratings
    if (filters.ratings?.length && !filters.ratings.includes(Math.floor(product.rating))) {
      return false;
    }

    // Colors
    if (filters.colors?.length && !filters.colors.includes(product.color)) {
      return false;
    }

    // Sizes
    if (filters.sizes?.length && !filters.sizes.includes(product.size)) {
      return false;
    }

    // Features
    if (filters.features?.length && !filters.features.every(feature => product.features?.includes(feature))) {
      return false;
    }

    // Conditions
    if (filters.conditions?.length && !filters.conditions.includes(product.condition)) {
      return false;
    }

    return true;
  });
}; 