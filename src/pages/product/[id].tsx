import React from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '@/components/layout/Layout';
import { Product } from '@/types/product';
import { getProductById, getProductReviews } from '@/services/amazon-api';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import SEO from '@/components/common/SEO';
import PriceDisplay from '@/components/product/PriceDisplay';
import ProductFeatures from '@/components/product/ProductFeatures';
import AmazonCTA from '@/components/product/AmazonCTA';
import ProductGallery from '@/components/product/ProductGallery';

interface ProductPageProps {
  product: Product | null;
  error?: string;
}

export default function ProductPage({ product, error }: ProductPageProps) {
  if (error) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <LoadingSpinner />
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO 
        title={product.title}
        description={product.description || `Buy ${product.title} at the best price`}
        canonical={`/product/${product.id}`}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProductGallery images={product.images || [product.image]} />
          
          <div>
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <PriceDisplay 
              price={product.price} 
              originalPrice={product.originalPrice}
              isPrime={product.isPrime} 
            />
            <ProductFeatures features={product.features || []} />
            <AmazonCTA productId={product.id} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const id = params?.id as string;
    const product = await getProductById(id);

    if (!product) {
      return {
        props: {
          product: null,
          error: 'Product not found'
        }
      };
    }

    return {
      props: {
        product
      }
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      props: {
        product: null,
        error: 'Failed to load product'
      }
    };
  }
}; 