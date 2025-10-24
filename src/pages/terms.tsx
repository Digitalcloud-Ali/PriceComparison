import React from 'react';
import { Layout } from '@/components/layout/Layout';
import SEO from '@/components/common/SEO';

export default function TermsPage() {
  return (
    <Layout>
      <SEO 
        title="Terms of Service"
        description="Read our terms of service and user agreement."
      />
      
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-blue max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p className="text-gray-600 mb-4">
              We provide a price comparison and tracking service for Amazon products. Our service includes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Price history tracking</li>
              <li>Price drop alerts</li>
              <li>Product comparisons</li>
              <li>Deal notifications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Amazon Affiliate Disclosure</h2>
            <p className="text-gray-600 mb-4">
              As an Amazon Associate, we earn from qualifying purchases. All product prices and 
              availability are accurate as of the date/time indicated and are subject to change.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. User Obligations</h2>
            <p className="text-gray-600 mb-4">
              Users of our service agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide accurate information when setting up alerts</li>
              <li>Not misuse or attempt to manipulate our service</li>
              <li>Not use our service for any illegal purposes</li>
              <li>Not attempt to access restricted areas of the site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-4">
              Our service is provided "as is" without any warranties, expressed or implied. 
              We do not guarantee the accuracy of prices or availability of products.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              We shall not be liable for any indirect, incidental, special, consequential or 
              punitive damages resulting from your use of or inability to use our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any 
              material changes via email or through our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For any questions regarding these terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Email: terms@pricecomparison.store</p>
              <p className="text-gray-600">Address: [Your Company Address]</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
} 