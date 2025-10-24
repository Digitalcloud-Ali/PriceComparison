import React from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/home/ProductGrid';
import { searchProducts } from '../services/amazon-api';
import { Product } from '../types/product';

interface SearchPageProps {
  products: Product[];
  query: string;
}

export default function SearchPage({ products, query }: SearchPageProps) {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          Search Results for "{query}"
        </h1>
        {products.length > 0 ? (
          <ProductGrid products={products} title="Search Results" />
        ) : (
          <p className="text-gray-600">No products found for your search.</p>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const searchQuery = query.q as string;
  const products = await searchProducts(searchQuery);

  return {
    props: {
      products,
      query: searchQuery,
    },
  };
}; 