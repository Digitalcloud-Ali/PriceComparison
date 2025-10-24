import { Product, Deal, HotSale } from '@/types/product';
import { searchAmazonProducts } from './amazon-pa-api';
import { 
  MOCK_PRODUCTS,
  MOCK_PRICE_HISTORY,
  MOCK_REVIEWS 
} from '@/mocks/products';
import { 
  GAMING_PRODUCTS,
  SMART_HOME_PRODUCTS,
  PREMIUM_FASHION,
  KITCHEN_APPLIANCES 
} from '@/mocks/products_extended';
import { DETAILED_SPECS } from '@/mocks/specifications_extended';

// Combine all mock products
const ALL_MOCK_PRODUCTS = [
  ...MOCK_PRODUCTS,
  ...GAMING_PRODUCTS,
  ...SMART_HOME_PRODUCTS,
  ...PREMIUM_FASHION,
  ...KITCHEN_APPLIANCES
];

export async function searchProducts(query: string): Promise<Product[]> {
  try {
    if (process.env.NODE_ENV === 'development') {
      // Filter products based on search query
      const searchTerm = query.toLowerCase();
      return ALL_MOCK_PRODUCTS.filter(product => 
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.brand?.toLowerCase().includes(searchTerm)
      );
    }

    const amazonProducts = await searchAmazonProducts(query);
    return amazonProducts.map(transformAmazonProduct);
  } catch (error) {
    console.error('Error fetching products:', error);
    return ALL_MOCK_PRODUCTS; // Fallback to all mock products
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const product = ALL_MOCK_PRODUCTS.find(p => p.id === id);
    if (product) {
      // Enhance product with additional data, ensuring no undefined values
      return {
        ...product,
        specifications: DETAILED_SPECS[id] || null,
        priceHistory: MOCK_PRICE_HISTORY[id] || [],
        reviews: MOCK_REVIEWS[id] || [],
        // Ensure other optional fields have default values
        description: product.description || '',
        features: product.features || [],
        originalPrice: product.originalPrice || null,
        brand: product.brand || '',
        category: product.category || '',
        subcategory: product.subcategory || '',
        isPrime: product.isPrime || false,
        primeDeliveryDays: product.primeDeliveryDays || null,
        rating: product.rating || null,
        reviewCount: product.reviewCount || 0,
        stockStatus: product.stockStatus || 'OUT_OF_STOCK',
        soldCount: product.soldCount || 0
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function getDeals(): Promise<Deal[]> {
  const products = ALL_MOCK_PRODUCTS;
  return products
    .filter((p): p is Product & { originalPrice: number } => 
      p.originalPrice !== undefined && p.originalPrice > p.price
    )
    .map(p => ({
      ...p,
      discount: Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
    }))
    .sort((a, b) => b.discount - a.discount); // Sort by highest discount first
}

export async function getHotSales(): Promise<HotSale[]> {
  const products = ALL_MOCK_PRODUCTS;
  return products
    .filter((p): p is Product & { soldCount: number } => 
      p.soldCount !== undefined
    )
    .sort((a, b) => b.soldCount - a.soldCount); // Sort by most sold first
}

export function getAmazonAffiliateUrl(productId: string): string {
  const affiliateId = process.env.NEXT_PUBLIC_AMAZON_US_AFFILIATE_ID;
  return `https://www.amazon.com/dp/${productId}?tag=${affiliateId}`;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return ALL_MOCK_PRODUCTS.filter(
    product => product.category.toLowerCase() === category.toLowerCase()
  );
}

export async function getProductsByBrand(brand: string): Promise<Product[]> {
  return ALL_MOCK_PRODUCTS.filter(
    product => product.brand?.toLowerCase() === brand.toLowerCase()
  );
}

export async function getRelatedProducts(product: Product): Promise<Product[]> {
  // Get products in same category
  return ALL_MOCK_PRODUCTS.filter(p => 
    p.id !== product.id && 
    p.category === product.category
  ).slice(0, 4);
}

export async function getProductReviews(productId: string) {
  return MOCK_REVIEWS[productId] || {
    average: 4.5,
    total: 100,
    reviews: []
  };
}

function transformAmazonProduct(amazonProduct: any): Product {
  return {
    id: amazonProduct.ASIN,
    title: amazonProduct.ItemInfo.Title.DisplayValue,
    price: amazonProduct.Offers.Listings[0].Price.Amount,
    image: amazonProduct.Images.Primary.Large.URL,
    isPrime: amazonProduct.Offers.Listings[0].DeliveryInfo.IsPrimeEligible,
    // ... transform other fields
  };
} 