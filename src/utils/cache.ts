interface CacheOptions {
  maxAge: number;
  maxItems?: number;
}

interface CacheItem<T> {
  value: T;
  timestamp: number;
}

export class Cache<T> {
  private cache: Map<string, CacheItem<T>>;
  private maxAge: number;
  private maxItems: number;

  constructor(options: CacheOptions) {
    this.cache = new Map();
    this.maxAge = options.maxAge;
    this.maxItems = options.maxItems || 100;
  }

  set(key: string, value: T): void {
    if (this.cache.size >= this.maxItems) {
      const oldestKey = Array.from(this.cache.entries())
        .sort(([, a], [, b]) => a.timestamp - b.timestamp)[0][0];
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, {
      value,
      timestamp: Date.now(),
    });
  }

  get(key: string): T | null {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() - item.timestamp > this.maxAge) {
      this.cache.delete(key);
      return null;
    }

    return item.value;
  }

  clear(): void {
    this.cache.clear();
  }

  prune(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > this.maxAge) {
        this.cache.delete(key);
      }
    }
  }
}

// Create cache instances for different types of data
export const productCache = new Cache<any>({ maxAge: 5 * 60 * 1000 }); // 5 minutes
export const searchCache = new Cache<any>({ maxAge: 2 * 60 * 1000 }); // 2 minutes
export const brandCache = new Cache<any>({ maxAge: 10 * 60 * 1000 }); // 10 minutes 