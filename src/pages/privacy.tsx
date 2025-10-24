import React from 'react';
import { Layout } from '@/components/layout/Layout';
import SEO from '@/components/common/SEO';

export default function PrivacyPage() {
  return (
    <Layout>
      <SEO 
        title="Privacy Policy"
        description="Learn about how we collect, use, and protect your personal information."
      />
      
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-blue max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Email address (when setting up price alerts)</li>
              <li>Search queries and browsing history on our site</li>
              <li>Product preferences and alert settings</li>
              <li>Device and browser information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Send price drop alerts for products you're interested in</li>
              <li>Improve our product recommendations</li>
              <li>Analyze site usage and improve our services</li>
              <li>Communicate with you about our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Amazon Affiliate Disclosure</h2>
            <p className="text-gray-600 mb-4">
              As an Amazon Associate, we earn from qualifying purchases. This means that we receive 
              a small commission when you make a purchase through our affiliate links at no 
              additional cost to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information</li>
              <li>Secure data storage practices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Email: privacy@pricecomparison.store</p>
              <p className="text-gray-600">Address: [Your Company Address]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. The updated version will be 
              indicated by an updated "Last Updated" date and the updated version will be 
              effective as soon as it is accessible.
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: February 25, 2024
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
} 