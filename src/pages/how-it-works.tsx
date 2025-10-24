import React from 'react';
import { Layout } from '@/components/layout/Layout';
import SEO from '@/components/common/SEO';

export default function HowItWorksPage() {
  const features = [
    {
      title: 'Price Tracking',
      description: 'We monitor prices 24/7 and alert you when prices drop on your favorite items.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Deal Alerts',
      description: 'Set up alerts for specific products or price ranges and get notified instantly.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    },
    {
      title: 'Price History',
      description: 'View detailed price history charts to make informed buying decisions.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Browse Products',
      description: "Search for products or browse categories to find items you're interested in."
    },
    {
      number: 2,
      title: 'Compare Prices',
      description: 'View current prices, price history, and compare with other sellers.'
    },
    {
      number: 3,
      title: 'Set Alerts',
      description: 'Set up price alerts to get notified when prices drop to your target price.'
    },
    {
      number: 4,
      title: 'Buy on Amazon',
      description: 'Click through to Amazon to complete your purchase at the best price.'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="How It Works - Amazon Price Comparison"
        description="Learn how to use our Amazon price comparison tool to save money on your purchases."
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Save money on your Amazon purchases with our price tracking and comparison tools.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-12">Getting Started</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 