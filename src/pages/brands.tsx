import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { BRANDS } from '@/constants/brands';
import Link from 'next/link';
import Image from 'next/image';
import SEO from '@/components/common/SEO';
import { getBrandPlaceholder } from '@/utils/placeholder';

export default function BrandsPage() {
  return (
    <Layout>
      <SEO 
        title="Shop by Brand - Top Amazon Brands"
        description="Browse and compare products from top brands available on Amazon."
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shop by Brand</h1>

        {/* Brands by Category */}
        <div className="space-y-12">
          {Object.entries(BRANDS).map(([category, brands]) => (
            <section key={category}>
              <h2 className="text-2xl font-bold mb-6 capitalize">{category}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Object.entries(brands).map(([slug, brand]) => (
                  <Link
                    key={slug}
                    href={`/brands/${slug}`}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow group"
                  >
                    <div className="relative w-full aspect-square mb-4 bg-gray-50 rounded-lg overflow-hidden">
                      <Image
                        src={brand.logo || getBrandPlaceholder(brand.name)}
                        alt={brand.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-center mb-2">{brand.name}</h3>
                    {brand.description && (
                      <p className="text-sm text-gray-600 text-center">{brand.description}</p>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
} 