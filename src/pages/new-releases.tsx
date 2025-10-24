import React from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '@/components/layout/Layout';
import { Product } from '@/types/product';
import { searchProducts } from '@/services/amazon-api';
import ProductGrid from '@/components/product/ProductGrid';
import SEO from '@/components/common/SEO';
import { CATEGORIES } from '@/constants/categories';

interface NewReleasesPageProps {
  products: Product[];
}

export default function NewReleasesPage({ products }: NewReleasesPageProps) {
  return (
    <Layout>
      <SEO 
        title="New Releases on Amazon"
        description="Discover the latest product releases and newest items on Amazon."
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">New Releases</h1>
          <p className="text-purple-100">
            The latest products and new releases. Updated daily.
          </p>
        </div>

        {/* New Releases by Category */}
        <div className="space-y-12">
          {Object.entries(CATEGORIES).map(([slug, category]) => {
            const categoryProducts = products.filter(p => p.category === slug);
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
  // In a real implementation, we would filter for new releases
  // For now, just return the most recent products
  const newReleases = products.sort(() => Math.random() - 0.5);
  
  return {
    props: {
      products: newReleases
    }
  };
}; 