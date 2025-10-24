import { getDb } from '@/lib/db';

// Cache expiration times
const CACHE_EXPIRY = {
  SEARCH: 3600000, // 1 hour
  PRICE: 7 * 24 * 3600000, // 7 days
};

export async function cleanupCache() {
  const db = await getDb();
  const now = Date.now();

  // Clean up old search cache entries
  await db.run(
    'DELETE FROM search_cache WHERE timestamp < ?',
    [now - CACHE_EXPIRY.SEARCH]
  );

  // Keep only last 30 days of price history
  await db.run(
    'DELETE FROM price_history WHERE timestamp < ?',
    [now - CACHE_EXPIRY.PRICE]
  );
}

// Run cleanup daily
if (typeof window !== 'undefined') {
  setInterval(cleanupCache, 24 * 3600000);
} 