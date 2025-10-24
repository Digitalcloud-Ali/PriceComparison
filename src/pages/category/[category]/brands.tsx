import React from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '@components/index';
import BrandSearch from '@/components/brand/BrandSearch';
import { UK_CATEGORIES } from '@/constants/categories';
import Breadcrumb from '@/components/common/Breadcrumb';
import SEO from '@/components/common/SEO';
import BrandPopularityMetrics from '@/components/brand/BrandPopularityMetrics';
import { getBrandsForCategory } from '@/utils/brands';
import { Product } from '@/types/product';
import { searchProducts } from '@/utils/products';

interface BrandsPageProps {
  category: string;
  products: Product[];
}

export default function BrandsPage({ category, products }: BrandsPageProps) {
  const categoryName = UK_CATEGORIES[category as keyof typeof UK_CATEGORIES]?.name || category;
  const brands = getBrandsForCategory(category);

  return (
    <Layout>
      <SEO 
        title={`${categoryName} Brands - Compare Prices & Deals`}
        description={`Browse and compare prices from top ${categoryName} brands. Find the best deals and discounts on Amazon UK.`}
        canonical={`/category/${category}/brands`}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb 
          category={category}
          subcategory="brands"
        />

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{categoryName} Brands</h1>
          <p className="text-gray-600">
            Browse and compare prices from top brands in {categoryName}
          </p>
        </div>

        <BrandSearch category={category} />

        {/* Popular Brands Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Popular {categoryName} Brands</h2>
          <BrandPopularityMetrics 
            category={category}
            brands={brands}
            products={products}
          />
        </div>

        {/* UK Shipping Information */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">UK Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
              <div>
                <h3 className="font-semibold">Free UK Delivery</h3>
                <p className="text-sm text-gray-600">On orders over £20</p>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const category = params?.category as string;

  if (!UK_CATEGORIES[category as keyof typeof UK_CATEGORIES]) {
    return {
      notFound: true,
    };
  }

  const products = await searchProducts(category);

  return {
    props: {
      category,
      products,
    },
  };
}; 