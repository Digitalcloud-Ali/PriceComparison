import React from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '@/components/layout/Layout';
import { Product } from '@/types/product';
import { searchProducts } from '@/services/amazon-api';
import ProductGrid from '@/components/product/ProductGrid';
import SEO from '@/components/common/SEO';
import { CATEGORIES } from '@/constants/categories';

interface PriceDropsPageProps {
  products: Product[];
}

export default function PriceDropsPage({ products }: PriceDropsPageProps) {
  return (
    <Layout>
      <SEO 
        title="Recent Price Drops on Amazon"
        description="Track the latest price drops and save money on Amazon products."
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Recent Price Drops</h1>
          <p className="text-green-100">
            Products that recently dropped in price. Updated every hour to help you find the best savings.
          </p>
        </div>

        {/* Price Drops by Category */}
        <div className="space-y-12">
          {Object.entries(CATEGORIES).map(([slug, category]) => {
            const categoryProducts = products.filter(p => p.category === slug);
            if (categoryProducts.length === 0) return null;

            return (
              <section key={slug}>
                <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
                <ProductGrid products={categoryProducts} />
              </section>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // In a real implementation, we would fetch products with recent price drops
  const products = await searchProducts('');
  const productsWithPriceDrops = products.filter(p => 
    p.originalPrice && p.originalPrice > p.price
  ).sort((a, b) => {
    const dropA = ((a.originalPrice! - a.price) / a.originalPrice!) * 100;
    const dropB = ((b.originalPrice! - b.price) / b.originalPrice!) * 100;
    return dropB - dropA;
  });
  
  return {
    props: {
      products: productsWithPriceDrops
    }
  };
}; 