import { GetServerSideProps } from 'next';
import { Layout } from '@/components/layout/Layout';
import { findCategoryByPath, getBreadcrumbPath } from '@/constants/categories';
import { Product } from '@/types/product';
import { searchProducts } from '@/services/amazon-api';
import ProductGrid from '@/components/home/ProductGrid';
import CategoryFilters from '@/components/category/CategoryFilters';
import Breadcrumb from '@/components/common/Breadcrumb';
import SubcategoryGrid from '@/components/category/SubcategoryGrid';
import SEO from '@/components/common/SEO';
import { FilterOptions } from '@/types/filters';
import { useState } from 'react';
import { MOCK_BRANDS, AVAILABLE_FILTERS } from '@/mocks/filters';

interface CategoryPageProps {
  category: string;
  products: Product[];
  breadcrumb: Array<{ name: string; slug: string }>;
  currentCategory: any; // Using 'any' temporarily, should use proper type
}

export default function CategoryPage({ 
  category, 
  products, 
  breadcrumb,
  currentCategory 
}: CategoryPageProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 2000],
  });

  const hasSubcategories = currentCategory?.subcategories?.length > 0;

  return (
    <Layout>
      <SEO 
        title={`${currentCategory.name} - Best Deals & Prices`}
        description={currentCategory.description || `Compare prices and find the best ${currentCategory.name} deals on Amazon`}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumb} />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{currentCategory.name}</h1>
          {currentCategory.description && (
            <p className="text-gray-600">{currentCategory.description}</p>
          )}
        </div>

        {hasSubcategories ? (
          <SubcategoryGrid subcategories={currentCategory.subcategories} parentSlug={category} />
        ) : (
          <div className="grid grid-cols-4 gap-6">
            <div>
              <CategoryFilters 
                filters={filters}
                onChange={setFilters}
                brands={MOCK_BRANDS[category] || []}
                availableFilters={AVAILABLE_FILTERS[category] || AVAILABLE_FILTERS.default}
              />
            </div>
            <div className="col-span-3">
              <ProductGrid products={products} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slugArray = (params?.slug as string[]) || [];
  const category = slugArray[0];
  const currentCategory = findCategoryByPath(slugArray);
  
  if (!currentCategory) {
    return {
      notFound: true
    };
  }

  const breadcrumb = getBreadcrumbPath(slugArray);
  
  // Only fetch products for leaf categories (no subcategories)
  const products = !currentCategory.subcategories?.length 
    ? await searchProducts(slugArray.join(' ')) 
    : [];

  return {
    props: {
      category,
      products,
      breadcrumb,
      currentCategory
    }
  };
}; 