import React from 'react';
import { GetStaticProps } from 'next';
import { Layout } from '@/components/layout/Layout';
import { Product } from '@/types/product';
import { searchProducts, getDeals, getHotSales } from '@/services/amazon-api';
import { MOCK_PRODUCTS } from '@/mocks/products';
import { 
  GAMING_PRODUCTS,
  SMART_HOME_PRODUCTS,
  PREMIUM_FASHION,
  KITCHEN_APPLIANCES 
} from '@/mocks/products_extended';
import CategoryShowcase from '@/components/home/CategoryShowcase';
import BannerSlider from '@/components/home/BannerSlider';
import BestDeals from '@/components/home/BestDeals';
import HotSales from '@/components/home/HotSales';
import USPrimeDeals from '@/components/home/USPrimeDeals';
import TrendingProducts from '@/components/home/TrendingProducts';

interface HomePageProps {
  featuredProducts: Product[];
  bestDeals: Product[];
  hotSales: Product[];
}

export default function HomePage({ featuredProducts, bestDeals, hotSales }: HomePageProps) {
  return (
    <Layout>
      {/* Banner Slider */}
      <BannerSlider />

      {/* Category Showcase */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <CategoryShowcase />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <USPrimeDeals products={bestDeals} title="Today's Best Deals" />
        <TrendingProducts products={featuredProducts} />
        <HotSales products={hotSales} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Use mock data directly in development
  const allProducts = [
    ...MOCK_PRODUCTS,
    ...GAMING_PRODUCTS,
    ...SMART_HOME_PRODUCTS,
    ...PREMIUM_FASHION,
    ...KITCHEN_APPLIANCES
  ];

  // Filter products for different sections
  const featuredProducts = allProducts.slice(0, 8);
  const bestDeals = allProducts.filter(p => p.originalPrice && p.originalPrice > p.price).slice(0, 8);
  const hotSales = allProducts.filter(p => p.soldCount).sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0)).slice(0, 8);

  return {
    props: {
      featuredProducts,
      bestDeals,
      hotSales,
    },
    revalidate: 3600, // Revalidate every hour
  };
}; 