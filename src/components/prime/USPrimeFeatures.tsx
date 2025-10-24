import React from 'react';
import { useUSPrime } from '@/context/USPrimeContext';

export default function USPrimeFeatures() {
  const { state, togglePrimeMembership } = useUSPrime();

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Amazon Prime Benefits</h2>
          {state.isPrimeMember && state.primeExpiration && (
            <p className="text-sm opacity-80">
              Member until {state.primeExpiration.toLocaleDateString()}
            </p>
          )}
        </div>
        <button
          onClick={togglePrimeMembership}
          className={`px-4 py-2 rounded-lg ${
            state.isPrimeMember
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-yellow-400 hover:bg-yellow-500 text-black'
          }`}
        >
          {state.isPrimeMember ? 'Cancel Prime' : 'Try Prime Free'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="font-semibold">FREE Two-Day Shipping</h3>
          </div>
          <p className="text-sm opacity-80">
            Fast, FREE delivery on over 100 million items
          </p>
        </div>

        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <h3 className="font-semibold">Prime Video</h3>
          </div>
          <p className="text-sm opacity-80">
            Stream thousands of movies & TV shows
          </p>
        </div>

        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
            <h3 className="font-semibold">Prime Music</h3>
          </div>
          <p className="text-sm opacity-80">
            Stream millions of songs ad-free
          </p>
        </div>

        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
            <h3 className="font-semibold">Prime Gaming</h3>
          </div>
          <p className="text-sm opacity-80">
            Free games & in-game content
          </p>
        </div>

        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="font-semibold">Prime Reading</h3>
          </div>
          <p className="text-sm opacity-80">
            Read for free from a rotating selection
          </p>
        </div>

        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h3 className="font-semibold">Prime Early Access</h3>
          </div>
          <p className="text-sm opacity-80">
            30-minute early access to Lightning Deals
          </p>
        </div>
      </div>

      {!state.isPrimeMember && (
        <div className="mt-6 text-center">
          <button
            onClick={togglePrimeMembership}
            className="bg-yellow-400 text-black px-8 py-3 rounded-lg hover:bg-yellow-500 font-semibold"
          >
            Start your 30-day free trial
          </button>
          <p className="mt-2 text-sm opacity-80">
            Cancel anytime. $14.99/month after trial.
          </p>
        </div>
      )}
    </div>
  );
} 