import React, { useState } from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/constants/categories';
import SearchBar from '@/components/home/SearchBar';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 py-1.5">
          <div className="flex justify-between items-center text-white text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="hidden sm:inline">Best Amazon Deals & Price Comparison</span>
            </div>
            <div className="flex gap-6">
              <Link href="/deals" className="hover:text-blue-200 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="hidden sm:inline">Today's Deals</span>
              </Link>
              <Link href="/price-drops" className="hover:text-blue-200 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="hidden sm:inline">Price Drops</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              PriceComparison
            </span>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:block flex-1 max-w-3xl mx-8">
            <SearchBar placeholder="Search for the best deals across Amazon..." />
          </div>

          {/* Mobile Search Button */}
          <button
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Right Menu */}
          <div className="flex items-center gap-6">
            <Link href="/price-alerts" className="hidden md:flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span>Price Alerts</span>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isMobileSearchOpen && (
          <div className="md:hidden px-4 pb-4">
            <SearchBar placeholder="Search for the best deals..." />
          </div>
        )}

        {/* Categories Menu - Desktop */}
        <div className="hidden lg:block border-t">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 py-3 px-4 hover:bg-gray-50 rounded-t-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="font-medium">All Categories</span>
            </button>

            {/* Quick Links */}
            <div className="flex space-x-8 py-3">
              <Link href="/deals" className="text-gray-600 hover:text-blue-600 transition-colors">Today's Deals</Link>
              <Link href="/best-sellers" className="text-gray-600 hover:text-blue-600 transition-colors">Best Sellers</Link>
              <Link href="/new-releases" className="text-gray-600 hover:text-blue-600 transition-colors">New Releases</Link>
              <Link href="/price-history" className="text-gray-600 hover:text-blue-600 transition-colors">Price History</Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {Object.entries(CATEGORIES).map(([slug, category]) => (
                  <div key={slug}>
                    <Link
                      href={`/category/${slug}`}
                      className="block py-2 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                    <div className="ml-4 space-y-2">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/category/${slug}/${sub.slug}`}
                          className="block py-1 text-gray-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Desktop Categories Dropdown */}
        {isMenuOpen && (
          <div className="hidden lg:block absolute z-50 w-64 bg-white shadow-lg rounded-b-lg border-t">
            {Object.entries(CATEGORIES).map(([slug, category]) => (
              <div key={slug} className="group relative">
                <Link
                  href={`/category/${slug}`}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {category.name}
                </Link>
                {/* Subcategories */}
                <div className="hidden group-hover:block absolute left-full top-0 w-64 bg-white shadow-lg rounded-lg">
                  {category.subcategories.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/category/${slug}/${sub.slug}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
} 