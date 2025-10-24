import React from 'react';
import { Layout } from '@/components/layout/Layout';
import SEO from '@/components/common/SEO';

export default function ShippingInfoPage() {
  return (
    <Layout>
      <SEO 
        title="Shipping Information"
        description="Learn about Amazon shipping options, delivery times, and tracking your orders."
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Shipping Information</h1>

          {/* Prime Shipping */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Amazon Prime Shipping</h2>
            <p className="text-blue-100">
              Amazon Prime members enjoy fast, FREE delivery on millions of items, including:
            </p>
            <ul className="mt-4 space-y-2 text-blue-100">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                FREE Two-Day Delivery
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                FREE One-Day Delivery on qualifying items
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                FREE Same-Day Delivery in eligible areas
              </li>
            </ul>
          </div>

          {/* Standard Shipping */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">Standard Shipping Options</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">FREE Shipping</h3>
                <p className="text-gray-600">
                  Available on eligible orders over $25 shipped by Amazon. Items typically arrive in 5-8 business days.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Standard Shipping</h3>
                <p className="text-gray-600">
                  Items typically arrive in 4-5 business days. Shipping fees vary based on item weight and dimensions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Expedited Shipping</h3>
                <p className="text-gray-600">
                  Items typically arrive in 2-3 business days. Additional fees apply.
                </p>
              </div>
            </div>
          </div>

          {/* International Shipping */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">International Shipping</h2>
            <p className="text-gray-600 mb-4">
              International shipping availability, rates, and times vary by destination and item. Please check individual product pages for international shipping options.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Additional duties, taxes, and fees may apply for international shipments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tracking Orders */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold mb-4">Tracking Your Order</h2>
            <p className="text-gray-600 mb-4">
              Once your order ships, you can track it directly on Amazon's website:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Sign in to your Amazon account</li>
              <li>Go to Your Orders</li>
              <li>Find your order and click "Track Package"</li>
              <li>View the current status and estimated delivery date</li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
} 