import React from 'react';
import { Layout } from '@components/index';
import { brandAnalytics } from '@/services/brandAnalytics';
import { formatPrice } from '@/utils/price';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function BrandAnalyticsDashboard() {
  const analytics = brandAnalytics.getAnalytics();
  const { last24Hours, popularBrands, popularCategories } = analytics.summary;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Brand Analytics Dashboard</h1>

        {/* Last 24 Hours Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm text-gray-600 mb-2">Brand Searches</h3>
            <p className="text-2xl font-bold">{last24Hours.searches}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm text-gray-600 mb-2">Brand Views</h3>
            <p className="text-2xl font-bold">{last24Hours.views}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm text-gray-600 mb-2">Brand Comparisons</h3>
            <p className="text-2xl font-bold">{last24Hours.comparisons}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm text-gray-600 mb-2">Filter Usage</h3>
            <p className="text-2xl font-bold">{last24Hours.filters}</p>
          </div>
        </div>

        {/* Popular Brands */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Popular Brands</h2>
            <div className="space-y-4">
              {popularBrands.map(([brand, count]) => (
                <div key={brand} className="flex items-center">
                  <div className="flex-1">
                    <div className="text-sm font-medium">{brand}</div>
                    <div className="text-xs text-gray-500">{count} interactions</div>
                  </div>
                  <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{
                        width: `${(count / popularBrands[0][1]) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Categories */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Popular Categories</h2>
            <div className="space-y-4">
              {popularCategories.map(([category, count]) => (
                <div key={category} className="flex items-center">
                  <div className="flex-1">
                    <div className="text-sm font-medium">{category}</div>
                    <div className="text-xs text-gray-500">{count} interactions</div>
                  </div>
                  <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500"
                      style={{
                        width: `${(count / popularCategories[0][1]) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event Timeline */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Event Timeline</h2>
          <div className="space-y-4">
            {analytics.events.slice(-10).reverse().map((event, index) => (
              <div key={index} className="flex items-start">
                <div className="w-24 text-sm text-gray-500">
                  {new Date(event.timestamp).toLocaleTimeString()}
                </div>
                <div className="flex-1">
                  <div className="text-sm">
                    {event.type === 'search' && `Search: "${event.query}"`}
                    {event.type === 'filter' && `Applied filters: ${event.filters?.join(', ')}`}
                    {event.type === 'view' && `Viewed brand: ${event.brand}`}
                    {event.type === 'compare' && `Compared brands: ${event.filters?.join(' vs ')}`}
                  </div>
                  <div className="text-xs text-gray-500">
                    Category: {event.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 