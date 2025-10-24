import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_PRODUCTS } from '@/mocks/products';
import { Product } from '@/types/product';
import { CATEGORIES } from '@/constants/categories';

interface SearchBarProps {
  large?: boolean;
  onSearch?: (query: string) => void;
  placeholder?: string;
}

interface Suggestion {
  type: 'product' | 'category' | 'search';
  title: string;
  image?: string;
  price?: number;
  url: string;
}

export default function SearchBar({ 
  large = false, 
  onSearch,
  placeholder = "Search for products, brands, or categories..."
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const searchTerm = query.toLowerCase();
    const results: Suggestion[] = [];

    // Search in products
    const productMatches = MOCK_PRODUCTS.filter(product => 
      product.title.toLowerCase().includes(searchTerm)
    ).slice(0, 3);

    results.push(...productMatches.map(product => ({
      type: 'product',
      title: product.title,
      image: product.image,
      price: product.price,
      url: `/product/${product.id}`
    })));

    // Search in categories
    Object.entries(CATEGORIES).forEach(([slug, category]) => {
      if (category.name.toLowerCase().includes(searchTerm)) {
        results.push({
          type: 'category',
          title: category.name,
          url: `/category/${slug}`
        });
      }
    });

    // Add search suggestion if we have room
    if (results.length < 6) {
      results.push({
        type: 'search',
        title: `Search for "${query}"`,
        url: `/search?q=${encodeURIComponent(query)}`
      });
    }

    setSuggestions(results.slice(0, 6));
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsFocused(false);
      if (onSearch) {
        onSearch(query);
      } else {
        router.push(`/search?q=${encodeURIComponent(query)}`);
      }
    }
  };

  return (
    <div ref={searchRef} className="w-full relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className={`flex items-center w-full rounded-lg ${
          isFocused && suggestions.length > 0 ? 'rounded-b-none' : 'rounded-lg'
        } bg-white overflow-hidden transition-all duration-200 ${
          isFocused 
            ? 'ring-2 ring-blue-500 shadow-lg' 
            : 'ring-1 ring-gray-300 hover:ring-gray-400'
        }`}>
          {/* Search Icon */}
          <div className="pl-4 pr-2 text-gray-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Input Field */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder={placeholder}
            className={`flex-1 ${
              large ? 'py-4 text-lg' : 'py-3.5 text-base'
            } px-3 outline-none placeholder-gray-400 text-gray-900 min-w-0`}
          />

          {/* Search Button */}
          <button
            type="submit"
            className={`flex items-center justify-center min-w-[120px] h-full ${
              large ? 'text-lg py-4' : 'text-base py-3.5'
            } px-6 bg-[#FF9900] text-white font-medium hover:bg-[#FF8800] active:bg-[#FF7700] transition-colors relative group`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
              <span>Search</span>
            </span>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
        </div>
      </form>

      {/* Suggestions Dropdown */}
      {isFocused && suggestions.length > 0 && (
        <div className="absolute w-full bg-white border-x border-b border-gray-300 rounded-b-lg shadow-xl z-50 max-h-[400px] overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <Link
              key={index}
              href={suggestion.url}
              onClick={() => setIsFocused(false)}
              className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors border-t border-gray-100 first:border-t-0"
            >
              {suggestion.type === 'product' && suggestion.image && (
                <div className="w-12 h-12 relative flex-shrink-0 mr-4 bg-gray-50 rounded-md overflow-hidden">
                  <Image
                    src={suggestion.image}
                    alt={suggestion.title}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              )}
              {suggestion.type === 'category' && (
                <div className="w-12 h-12 flex-shrink-0 mr-4 flex items-center justify-center text-gray-400 bg-gray-50 rounded-md">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
              )}
              {suggestion.type === 'search' && (
                <div className="w-12 h-12 flex-shrink-0 mr-4 flex items-center justify-center text-gray-400 bg-gray-50 rounded-md">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {suggestion.title}
                </p>
                {suggestion.type === 'product' && suggestion.price && (
                  <p className="text-sm font-medium text-[#FF9900]">
                    ${suggestion.price.toFixed(2)}
                  </p>
                )}
                {suggestion.type === 'category' && (
                  <p className="text-sm text-gray-500">
                    Browse Category
                  </p>
                )}
              </div>
              <div className="ml-4 text-gray-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 