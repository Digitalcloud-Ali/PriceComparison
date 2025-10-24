import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import SEO from '@/components/common/SEO';

interface Alert {
  id: string;
  productId: string;
  productName: string;
  targetPrice: number;
  currentPrice: number;
  email: string;
  createdAt: string;
}

export default function PriceAlertsPage() {
  const [email, setEmail] = useState('');
  const [alerts] = useState<Alert[]>([
    {
      id: '1',
      productId: 'B0CHX3QBCH',
      productName: 'iPhone 15 Pro Max',
      targetPrice: 1099.99,
      currentPrice: 1199.99,
      email: 'user@example.com',
      createdAt: '2024-02-20'
    }
  ]);

  return (
    <Layout>
      <SEO 
        title="Price Alerts - Get Notified of Price Drops"
        description="Set up price alerts for Amazon products and get notified when prices drop to your target price."
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Price Alerts</h1>
          <p className="text-purple-100">
            Get notified when prices drop on your favorite products.
          </p>
        </div>

        {/* Email Subscription */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Email Settings</h2>
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-lg"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Save
            </button>
          </div>
        </div>

        {/* Active Alerts */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Your Active Alerts</h2>
          {alerts.length > 0 ? (
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className="border rounded-lg p-4 flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-medium">{alert.productName}</h3>
                    <p className="text-sm text-gray-600">
                      Target Price: ${alert.targetPrice.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Current Price: ${alert.currentPrice.toFixed(2)}
                    </p>
                  </div>
                  <button className="text-red-600 hover:text-red-800">
                    Remove Alert
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <svg 
                className="w-16 h-16 mx-auto mb-4 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
                />
              </svg>
              <p>No active price alerts</p>
              <p className="mt-2 text-sm">
                Browse products and set alerts to get notified of price drops
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
} 