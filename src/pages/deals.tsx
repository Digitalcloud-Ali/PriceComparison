import React from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '@/components/layout/Layout';
import { Product } from '@/types/product';
import { getDeals } from '@/services/amazon-api';
import ProductGrid from '@/components/product/ProductGrid';
import SEO from '@/components/common/SEO';

interface DealsPageProps {
  deals: Product[];
}

export default function DealsPage({ deals }: DealsPageProps) {
  return (
    <Layout>
      <SEO 
        title="Today's Best Amazon Deals"
        description="Find the best deals and discounts on Amazon products today. Updated hourly."
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Today's Best Deals</h1>
          <p className="text-blue-100">
            Handpicked deals updated every hour. Save big on your favorite products!
          </p>
        </div>

        {/* Deals Grid */}
        <div className="space-y-12">
          {/* Flash Deals */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Flash Deals
            </h2>
            <ProductGrid 
              products={deals.filter(deal => deal.originalPrice && 
                ((deal.originalPrice - deal.price) / deal.originalPrice) > 0.3)} 
            />
          </section>

          {/* Prime Deals */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Prime Member Deals
            </h2>
            <ProductGrid 
              products={deals.filter(deal => deal.isPrime)} 
            />
          </section>

          {/* Regular Deals */}
          <section>
            <h2 className="text-2xl font-bold mb-6">All Deals</h2>
            <ProductGrid products={deals} />
          </section>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const deals = await getDeals();
  
  return {
    props: {
      deals
    }
  };
}; 