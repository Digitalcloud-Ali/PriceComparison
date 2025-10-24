import React from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '@/components/layout/Layout';
import { Product } from '@/types/product';
import { searchProducts } from '@/services/amazon-api';
import ProductGrid from '@/components/product/ProductGrid';
import SEO from '@/components/common/SEO';
import { MOCK_USER_INTERACTIONS } from '@/mocks/interactions';

interface TrendingPageProps {
  products: Product[];
  trendingData: typeof MOCK_USER_INTERACTIONS;
}

export default function TrendingPage({ products, trendingData }: TrendingPageProps) {
  return (
    <Layout>
      <SEO 
        title="Trending Products on Amazon"
        description="Discover what's trending on Amazon. Most viewed and popular products updated hourly."
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Trending Now</h1>
          <p className="text-pink-100">
            See what's popular on Amazon right now. Updated hourly based on real-time data.
          </p>
        </div>

        {/* Trending Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Most Viewed</h3>
            <p className="text-gray-600">Products with highest view counts in the last 24 hours</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Rising Stars</h3>
            <p className="text-gray-600">Products with rapidly increasing popularity</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Most Wishlisted</h3>
            <p className="text-gray-600">Products most frequently added to wishlists</p>
          </div>
        </div>

        {/* Trending Products */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Trending Products</h2>
          <ProductGrid products={products} />
        </section>

        {/* Popular Search Terms */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Trending Searches</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-wrap gap-2">
              {trendingData.search_trends.popular_terms.map((term, index) => (
                <Link
                  key={index}
                  href={`/search?q=${encodeURIComponent(term.term)}`}
                  className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {term.term}
                  {term.trend === 'rising' && (
                    <span className="ml-2 text-green-600">↑</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await searchProducts('');
  // Sort by view count and trending score
  const trendingProducts = products
    .sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0))
    .slice(0, 24);
  
  return {
    props: {
      products: trendingProducts,
      trendingData: MOCK_USER_INTERACTIONS
    }
  };
}; 