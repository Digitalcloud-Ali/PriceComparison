type CacheItem<T> = {
  data: T;
  timestamp: number;
};

class CacheService {
  private static instance: CacheService;
  private store: Map<string, CacheItem<any>>;

  private constructor() {
    this.store = new Map();
  }

  static getInstance(): CacheService {
    if (!CacheService.instance) {
      CacheService.instance = new CacheService();
    }
    return CacheService.instance;
  }

  set(key: string, value: any, expiryMs: number = 3600000) {
    this.store.set(key, {
      data: value,
      timestamp: Date.now() + expiryMs
    });
  }

  get<T>(key: string): T | null {
    const item = this.store.get(key);
    if (!item) return null;

    if (Date.now() > item.timestamp) {
      this.store.delete(key);
      return null;
    }

    return item.data as T;
  }

  clear() {
    this.store.clear();
  }
}

const cacheService = CacheService.getInstance();
export { cacheService as cache }; 