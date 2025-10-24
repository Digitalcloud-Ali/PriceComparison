import React from 'react';
import { GetStaticProps } from 'next';
import { Layout } from '@components/index';
import { HotSale } from '@/types/product';
import { getHotSales } from '@/services/amazon-api';
import { formatPrice } from '@/utils/price';
import { getAmazonUrl } from '@/utils/market';
import { useUSSettings } from '@/context/USSettingsContext';
import USShippingInfo from '@/components/common/USShippingInfo';
import Link from 'next/link';

interface HotSalesPageProps {
  hotSales: HotSale[];
}

export default function HotSalesPage({ hotSales }: HotSalesPageProps) {
  const { settings } = useUSSettings();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Hot Sales 🔥</h1>

        {/* State Selection */}
        <div className="mb-8">
          <USShippingInfo stateCode={settings.stateCode} />
        </div>

        {/* Hot Sales Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotSales.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {item.isPrime && (
                <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Prime
                </div>
              )}
              <Link href={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-blue-600 font-bold">
                        {formatPrice(item.price)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-gray-400 line-through text-sm ml-2">
                          {formatPrice(item.originalPrice)}
                        </span>
                      )}
                    </div>
                    <span className="text-gray-500 text-sm">
                      {item.soldCount.toLocaleString()} sold
                    </span>
                  </div>
                  {item.isPrime && settings.stateCode && (
                    <div className="text-sm text-green-600 mt-2">
                      Free Prime Delivery by {new Date().toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  )}
                </div>
              </Link>
              <div className="p-4 pt-0">
                <a
                  href={getAmazonUrl(item.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-yellow-400 text-center py-2 rounded-lg hover:bg-yellow-500"
                >
                  View on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trending Categories */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Trending Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Electronics', 'Fashion', 'Home & Kitchen', 'Sports & Outdoors'].map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold">{category}</h3>
                <p className="text-sm text-gray-600 mt-1">View Deals</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HotSalesPageProps> = async () => {
  try {
    const hotSales = await getHotSales();
    return {
      props: {
        hotSales,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error fetching hot sales:', error);
    return {
      props: {
        hotSales: [],
      },
      revalidate: 60,
    };
  }
}; 