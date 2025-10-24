import React from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '@/components/layout/Layout';
import { Product } from '@/types/product';
import { searchProducts } from '@/services/amazon-api';
import ProductGrid from '@/components/product/ProductGrid';
import SEO from '@/components/common/SEO';
import { MOCK_PRICE_ANALYTICS } from '@/mocks/price_analytics';

interface PriceHistoryPageProps {
  products: Product[];
  priceAnalytics: typeof MOCK_PRICE_ANALYTICS;
}

export default function PriceHistoryPage({ products, priceAnalytics }: PriceHistoryPageProps) {
  return (
    <Layout>
      <SEO 
        title="Amazon Price History"
        description="Track price changes and analyze price history for Amazon products."
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Price History</h1>
          <p className="text-indigo-100">
            Track price changes and find the best time to buy.
          </p>
        </div>

        {/* Price Trends */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Biggest Price Drops</h3>
            <p className="text-gray-600">Products with significant recent price reductions</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Price Increase Alerts</h3>
            <p className="text-gray-600">Products expected to increase in price soon</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Best Time to Buy</h3>
            <p className="text-gray-600">Products currently at their optimal buying time</p>
          </div>
        </div>

        {/* Products with Price History */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Products with Price History</h2>
          <ProductGrid products={products} />
        </section>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await searchProducts('');
  // Filter products that have price history
  const productsWithHistory = products.filter(p => p.originalPrice && p.originalPrice > p.price);
  
  return {
    props: {
      products: productsWithHistory,
      priceAnalytics: MOCK_PRICE_ANALYTICS
    }
  };
}; 