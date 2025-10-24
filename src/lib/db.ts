import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Create database connection
export async function getDb() {
  return open({
    filename: './data/cache.db',
    driver: sqlite3.Database
  });
}

// Initialize database tables
export async function initDb() {
  const db = await getDb();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS price_history (
      product_id TEXT NOT NULL,
      price REAL NOT NULL,
      timestamp INTEGER NOT NULL,
      PRIMARY KEY (product_id, timestamp)
    );

    CREATE TABLE IF NOT EXISTS search_cache (
      query TEXT PRIMARY KEY,
      results TEXT NOT NULL,
      timestamp INTEGER NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_search_timestamp 
    ON search_cache(timestamp);
  `);

  return db;
} 