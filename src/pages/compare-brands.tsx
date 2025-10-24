import React from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '@components/index';
import { Brand, getBrandBySlug } from '@/utils/brands';
import { Product } from '@/types/product';
import { searchProducts } from '@/services/amazon-api';
import { formatPrice } from '@/utils/price';
import Image from 'next/image';
import Link from 'next/link';

interface BrandComparisonProps {
  brand1: Brand;
  brand2: Brand;
  category: string;
  products1: Product[];
  products2: Product[];
}

export default function BrandComparison({
  brand1,
  brand2,
  category,
  products1,
  products2,
}: BrandComparisonProps) {
  const calculateAveragePrice = (products: Product[]) => {
    if (products.length === 0) return 0;
    const total = products.reduce((sum, product) => sum + product.price, 0);
    return total / products.length;
  };

  const calculateAverageDiscount = (products: Product[]) => {
    const productsWithDiscount = products.filter(p => p.originalPrice);
    if (productsWithDiscount.length === 0) return 0;
    const totalDiscount = productsWithDiscount.reduce((sum, product) => {
      return sum + ((product.originalPrice! - product.price) / product.originalPrice! * 100);
    }, 0);
    return totalDiscount / productsWithDiscount.length;
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Brand Comparison</h1>
        
        {/* Brand Headers */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {[brand1, brand2].map((brand, index) => (
            <div key={brand.slug} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                {brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">{brand.name[0]}</span>
                  </div>
                )}
                <div>
                  <h2 className="text-2xl font-bold">{brand.name}</h2>
                  <Link
                    href={`/category/${category}/brand/${brand.slug}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Average Price</p>
                  <p className="font-bold text-lg">
                    {formatPrice(calculateAveragePrice(index === 0 ? products1 : products2))}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Average Discount</p>
                  <p className="font-bold text-lg text-green-600">
                    {calculateAverageDiscount(index === 0 ? products1 : products2).toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Comparison */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Top Products from {brand1.name}</h3>
            <div className="space-y-4">
              {products1.slice(0, 5).map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold">{product.title}</h4>
                      <p className="text-blue-600 font-bold">{formatPrice(product.price)}</p>
                      {product.originalPrice && (
                        <p className="text-sm text-green-600">
                          Save {((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0)}%
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Top Products from {brand2.name}</h3>
            <div className="space-y-4">
              {products2.slice(0, 5).map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold">{product.title}</h4>
                      <p className="text-blue-600 font-bold">{formatPrice(product.price)}</p>
                      {product.originalPrice && (
                        <p className="text-sm text-green-600">
                          Save {((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0)}%
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { category, brand1, brand2 } = query;

  if (!category || !brand1 || !brand2) {
    return {
      notFound: true,
    };
  }

  const brandInfo1 = getBrandBySlug(category as string, brand1 as string);
  const brandInfo2 = getBrandBySlug(category as string, brand2 as string);

  if (!brandInfo1 || !brandInfo2) {
    return {
      notFound: true,
    };
  }

  const [products1, products2] = await Promise.all([
    searchProducts(`${brandInfo1.name} ${category}`),
    searchProducts(`${brandInfo2.name} ${category}`),
  ]);

  return {
    props: {
      brand1: brandInfo1,
      brand2: brandInfo2,
      category,
      products1,
      products2,
    },
  };
}; 