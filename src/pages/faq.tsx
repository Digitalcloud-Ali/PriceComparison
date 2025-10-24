import React from 'react';
import { Layout } from '@/components/layout/Layout';
import SEO from '@/components/common/SEO';

const FAQ_ITEMS = [
  {
    question: 'How does price tracking work?',
    answer: 'We monitor Amazon prices 24/7 and track their changes over time. When you set a price alert, we\'ll notify you as soon as the price drops to your target price.'
  },
  {
    question: 'Are the prices always up to date?',
    answer: 'Yes, we update prices frequently throughout the day to ensure accuracy. However, prices on Amazon can change rapidly, so we recommend always verifying the final price on Amazon before making a purchase.'
  },
  {
    question: 'How do I set a price alert?',
    answer: 'Visit any product page and look for the "Set Price Alert" button. Enter your email and target price, and we\'ll notify you when the price drops to or below your target.'
  },
  {
    question: 'Do you store my payment information?',
    answer: 'No, we don\'t handle any payments. All purchases are made directly on Amazon\'s website. We simply help you find the best deals and track prices.'
  },
  {
    question: 'What is the Amazon Associate program?',
    answer: 'We participate in the Amazon Associates Program, which means we earn a small commission when you make a purchase through our links. This helps support our service while keeping it free for users.'
  },
  {
    question: 'How accurate is the price history?',
    answer: 'Our price history data is collected directly from Amazon and is highly accurate. We maintain a comprehensive database of price changes to help you make informed purchasing decisions.'
  }
];

export default function FAQPage() {
  return (
    <Layout>
      <SEO 
        title="Frequently Asked Questions"
        description="Find answers to common questions about our Amazon price tracking and comparison service."
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-blue-100">
            Find answers to common questions about our service.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-6">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-4">
            Can't find the answer you're looking for? Please contact our support team.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Contact Support
          </a>
        </div>
      </div>
    </Layout>
  );
} 