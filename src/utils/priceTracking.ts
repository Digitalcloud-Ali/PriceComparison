import { getDb } from '@/lib/db';
import { Product } from '@/types/product';

export interface PricePoint {
  price: number;
  timestamp: number;
}

export async function trackProductPrice(product: Product) {
  const db = await getDb();
  await db.run(
    'INSERT INTO price_history (product_id, price, timestamp) VALUES (?, ?, ?)',
    [product.id, product.price, Date.now()]
  );
}

export async function getPriceHistory(productId: string): Promise<PricePoint[]> {
  const db = await getDb();
  const history = await db.all(
    'SELECT price, timestamp FROM price_history WHERE product_id = ? ORDER BY timestamp DESC',
    [productId]
  );
  return history;
}

export async function getLowestPrice(productId: string): Promise<number | null> {
  const db = await getDb();
  const result = await db.get(
    'SELECT MIN(price) as lowest_price FROM price_history WHERE product_id = ?',
    [productId]
  );
  return result?.lowest_price || null;
}

export async function getHighestPrice(productId: string): Promise<number | null> {
  const db = await getDb();
  const result = await db.get(
    'SELECT MAX(price) as highest_price FROM price_history WHERE product_id = ?',
    [productId]
  );
  return result?.highest_price || null;
}

export async function getPriceStats(productId: string) {
  const [lowest, highest, history] = await Promise.all([
    getLowestPrice(productId),
    getHighestPrice(productId),
    getPriceHistory(productId),
  ]);

  const current = history[0]?.price;
  const averagePrice = history.reduce((sum, point) => sum + point.price, 0) / history.length;

  return {
    lowest,
    highest,
    current,
    average: averagePrice,
    history,
  };
} 