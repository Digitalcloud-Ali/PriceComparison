import React from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '@components/index';
import { Product } from '@/types/product';
import { searchProducts } from '@/services/amazon-api';
import { Brand, getBrandBySlug } from '@/utils/brands';
import { calculateBrandComparison } from '@/utils/brandComparisonMetrics';
import BrandComparisonMetrics from '@/components/brand/BrandComparisonMetrics';
import BrandComparisonAnalytics from '@/components/brand/BrandComparisonAnalytics';
import ProductGrid from '@/components/home/ProductGrid';
import SEO from '@/components/common/SEO';
import { CATEGORIES } from '@/constants/categories';

interface BrandComparisonPageProps {
  brand1: Brand;
  brand2: Brand;
  category: string;
  products1: Product[];
  products2: Product[];
}

export default function BrandComparisonPage({
  brand1,
  brand2,
  category,
  products1,
  products2,
}: BrandComparisonPageProps) {
  const categoryName = CATEGORIES[category as keyof typeof CATEGORIES]?.name || category;
  const comparisonMetrics = calculateBrandComparison(products1, products2, brand1, brand2);

  return (
    <Layout>
      <SEO 
        title={`${brand1.name} vs ${brand2.name} - ${categoryName} Comparison`}
        description={`Compare prices and features between ${brand1.name} and ${brand2.name} in ${categoryName}. Find the best deals and make informed decisions.`}
        canonical={`/brand-comparison?category=${category}&brand1=${brand1.slug}&brand2=${brand2.slug}`}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          {brand1.name} vs {brand2.name} - {categoryName} Comparison
        </h1>

        {/* Basic Comparison Metrics */}
        <div className="mb-8">
          <BrandComparisonMetrics metrics={comparisonMetrics} />
        </div>

        {/* Detailed Analytics */}
        <div className="mb-8">
          <BrandComparisonAnalytics
            brand1={brand1}
            brand2={brand2}
            products1={products1}
            products2={products2}
          />
        </div>

        {/* Products Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">{brand1.name} Products</h2>
            <ProductGrid 
              products={products1}
              title={`Latest from ${brand1.name}`}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">{brand2.name} Products</h2>
            <ProductGrid 
              products={products2}
              title={`Latest from ${brand2.name}`}
            />
          </div>
        </div>

        {/* US Shipping Information */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">US Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div>
                <h3 className="font-semibold">Free US Delivery</h3>
                <p className="text-sm text-gray-600">On orders over $25</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold">Next-Day Delivery</h3>
                <p className="text-sm text-gray-600">Order before 4pm</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold">Amazon Prime</h3>
                <p className="text-sm text-gray-600">Fast & free delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { category, brand1: brand1Slug, brand2: brand2Slug } = query;

  if (!category || !brand1Slug || !brand2Slug) {
    return {
      notFound: true,
    };
  }

  const brand1 = getBrandBySlug(category as string, brand1Slug as string);
  const brand2 = getBrandBySlug(category as string, brand2Slug as string);

  if (!brand1 || !brand2) {
    return {
      notFound: true,
    };
  }

  const [products1, products2] = await Promise.all([
    searchProducts(`${brand1.name} ${category}`),
    searchProducts(`${brand2.name} ${category}`),
  ]);

  return {
    props: {
      brand1,
      brand2,
      category,
      products1,
      products2,
    },
  };
}; 