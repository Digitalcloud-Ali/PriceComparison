import React from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '@/components/layout/Layout';
import { Product } from '@/types/product';
import { searchProducts } from '@/services/amazon-api';
import ProductGrid from '@/components/product/ProductGrid';
import SEO from '@/components/common/SEO';
import { CATEGORIES } from '@/constants/categories';

interface BestSellersPageProps {
  products: Product[];
}

export default function BestSellersPage({ products }: BestSellersPageProps) {
  return (
    <Layout>
      <SEO 
        title="Amazon Best Sellers"
        description="Browse the most popular and top-selling products on Amazon."
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Best Sellers</h1>
          <p className="text-yellow-100">
            The most popular products based on sales. Updated hourly.
          </p>
        </div>

        {/* Best Sellers by Category */}
        <div className="space-y-12">
          {Object.entries(CATEGORIES).map(([slug, category]) => {
            const categoryProducts = products.filter(p => p.category === slug)
              .sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0));
            
            if (categoryProducts.length === 0) return null;

            return (
              <section key={slug}>
                <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
                <ProductGrid products={categoryProducts.slice(0, 8)} />
              </section>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await searchProducts('');
  const bestSellers = products
    .filter(p => p.soldCount)
    .sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0));
  
  return {
    props: {
      products: bestSellers
    }
  };
}; 