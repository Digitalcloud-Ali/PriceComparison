import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '@/components/layout/Layout';
import { Product } from '@/types/product';
import { filterProducts } from '@/utils/productFilters';
import CategoryFilters from '@/components/category/CategoryFilters';
import ProductGrid from '@/components/product/ProductGrid';
import { searchProducts } from '@/services/amazon-api';
import { CATEGORIES } from '@/constants/categories';
import SEO from '@/components/common/SEO';
import { MOCK_BRANDS, AVAILABLE_FILTERS } from '@/mocks/filters';

interface CategoryPageProps {
  products: Product[];
  category: string;
}

export default function CategoryPage({ products, category }: CategoryPageProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 2000],
    brands: [],
    isPrime: false,
    freeShipping: false,
    nextDayDelivery: false,
    ratings: [],
    colors: [],
    sizes: [],
    features: [],
    conditions: [],
  });

  const categoryName = CATEGORIES[category as keyof typeof CATEGORIES]?.name || category;
  const brands = MOCK_BRANDS[category] || [];
  const availableFilters = AVAILABLE_FILTERS[category as keyof typeof AVAILABLE_FILTERS] || AVAILABLE_FILTERS.electronics;

  return (
    <Layout>
      <SEO 
        title={`${categoryName} - Best Deals and Prices`}
        description={`Compare prices and find the best deals on ${categoryName} products from Amazon.`}
        canonical={`/category/${category}`}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{categoryName}</h1>
        <div className="grid grid-cols-4 gap-8">
          <div>
            <CategoryFilters 
              filters={filters} 
              onChange={setFilters}
              brands={brands}
              availableFilters={availableFilters}
            />
          </div>
          <div className="col-span-3">
            <ProductGrid 
              products={filterProducts(products, filters)} 
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const category = params?.category as string;

  if (!CATEGORIES[category as keyof typeof CATEGORIES]) {
    return {
      notFound: true,
    };
  }

  const products = await searchProducts(category);

  return {
    props: {
      products,
      category,
    },
  };
}; 