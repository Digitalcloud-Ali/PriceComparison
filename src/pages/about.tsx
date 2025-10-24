import React from 'react';
import { Layout } from '@/components/layout/Layout';
import SEO from '@/components/common/SEO';

export default function AboutPage() {
  return (
    <Layout>
      <SEO 
        title="About Us"
        description="Learn more about our Amazon price comparison service and our mission to help you save money."
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">About Us</h1>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-blue-100">
              We help shoppers make informed decisions by providing real-time price tracking, 
              historical price data, and deal alerts for Amazon products.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Price Tracking</h3>
              <p className="text-gray-600">
                Monitor price changes in real-time and view historical price data to make informed purchases.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Price Alerts</h3>
              <p className="text-gray-600">
                Set alerts for your desired price and get notified when products drop in price.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Deal Finder</h3>
              <p className="text-gray-600">
                Discover the best deals and discounts across Amazon's vast product catalog.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Search Products</h3>
                  <p className="text-gray-600">
                    Use our search to find the products you're interested in purchasing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Track Prices</h3>
                  <p className="text-gray-600">
                    View price history and set up alerts for price drops.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Save Money</h3>
                  <p className="text-gray-600">
                    Buy at the best price and save money on your purchases.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Amazon Associate Disclosure */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Amazon Associate Disclosure</h2>
            <p className="text-gray-600 text-sm">
              As an Amazon Associate, we earn from qualifying purchases. This helps support our 
              service while keeping it free for users. All product prices and availability are 
              accurate as of the date/time indicated and are subject to change.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 