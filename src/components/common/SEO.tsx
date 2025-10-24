import React from 'react';
import Head from 'next/head';
import StructuredData from './StructuredData';
import { generateWebsiteSchema, generateOrganizationSchema } from '@/utils/structuredData';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
  structuredData?: Record<string, any>;
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  image,
  structuredData,
}: SEOProps) {
  const siteTitle = `${title} | PriceComparison US`;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const defaultImage = `${siteUrl}/images/default-og.jpg`;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={image || defaultImage} />
        <meta property="og:site_name" content="PriceComparison US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image || defaultImage} />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>

      {/* Default Structured Data */}
      <StructuredData data={generateWebsiteSchema()} />
      <StructuredData data={generateOrganizationSchema()} />

      {/* Custom Structured Data */}
      {structuredData && <StructuredData data={structuredData} />}
    </>
  );
} 