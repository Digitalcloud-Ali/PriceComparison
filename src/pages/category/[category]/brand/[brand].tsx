import React from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '@components/index';
import { Product } from '@/types/product';
import { searchProducts } from '@/services/amazon-api';
import ProductGrid from '@/components/home/ProductGrid';
import Breadcrumb from '@/components/common/Breadcrumb';
import { UK_CATEGORIES } from '@/constants/categories';
import BrandCompareSelector from '@/components/brand/BrandCompareSelector';
import SEO from '@/components/common/SEO';
import { getBrandBySlug } from '@/utils/brands';
import BrandAnalytics from '@/components/brand/BrandAnalytics';
import BrandPopularity from '@/components/brand/BrandPopularity';
import BrandDeals from '@/components/brand/BrandDeals';

interface BrandPageProps {
  products: Product[];
  category: string;
  brand: string;
  brandName: string;
}

export default function BrandPage({ products, category, brand, brandName }: BrandPageProps) {
  const categoryName = UK_CATEGORIES[category as keyof typeof UK_CATEGORIES]?.name || category;
  const brandInfo = getBrandBySlug(category, brand);

  const seoDescription = `Compare prices and find the best deals on ${brandName} products in ${categoryName}. Browse our selection of ${products.length}+ items with free UK delivery on eligible orders.`;

  return (
    <Layout>
      <SEO 
        title={`${brandName} ${categoryName} - Best Prices & Deals`}
        description={seoDescription}
        canonical={`/category/${category}/brand/${brand}`}
        image={brandInfo?.logo}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb 
          category={category} 
          subcategory={`brands/${brand}`}
        />
        
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{brandName}</h1>
            <p className="text-gray-600">
              Browse {brandName} products in {categoryName}
            </p>
          </div>
          <BrandCompareSelector currentBrand={brandInfo!} category={category} />
        </div>

        {/* Brand Info Section */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-6">
            {brandInfo?.logo ? (
              <img
                src={brandInfo.logo}
                alt={brandName}
                className="w-24 h-24 object-contain bg-white rounded-lg p-2"
              />
            ) : (
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">{brandName[0]}</span>
              </div>
            )}
            <div>
              <h2 className="text-xl font-bold mb-2">Official {brandName} Store</h2>
              <p className="text-gray-600">
                Find the best deals on {brandName} products from Amazon UK
              </p>
            </div>
          </div>
        </div>

        {/* Brand Deals Section */}
        <div className="mb-8">
          <BrandDeals products={products} brandName={brandName} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <BrandAnalytics products={products} brandName={brandName} />
          <BrandPopularity products={products} brandName={brandName} />
        </div>

        {/* Products Grid */}
        <ProductGrid 
          products={products} 
          title={`${brandName} Products (${products.length})`}
        />

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
  const brand = params?.brand as string;

  // Get brand name from slug
  const brandMap: Record<string, string> = {
    'apple': 'Apple',
    'samsung': 'Samsung',
    'sony': 'Sony',
    'lg': 'LG',
    'nike': 'Nike',
    'adidas': 'Adidas',
    'dyson': 'Dyson',
    'bosch': 'Bosch',
    // Add more brand mappings as needed
  };

  const brandName = brandMap[brand] || brand;
  const products = await searchProducts(`${brandName} ${category}`);

  return {
    props: {
      products,
      category,
      brand,
      brandName,
    },
  };
}; 