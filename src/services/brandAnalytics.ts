interface BrandAnalyticsEvent {
  type: 'search' | 'filter' | 'view' | 'compare';
  category: string;
  brand?: string;
  query?: string;
  filters?: string[];
  timestamp: number;
}

class BrandAnalyticsService {
  private events: BrandAnalyticsEvent[] = [];
  private static instance: BrandAnalyticsService;

  private constructor() {}

  static getInstance(): BrandAnalyticsService {
    if (!BrandAnalyticsService.instance) {
      BrandAnalyticsService.instance = new BrandAnalyticsService();
    }
    return BrandAnalyticsService.instance;
  }

  trackSearch(category: string, query: string) {
    this.trackEvent({
      type: 'search',
      category,
      query,
      timestamp: Date.now(),
    });
  }

  trackFilter(category: string, filters: string[]) {
    this.trackEvent({
      type: 'filter',
      category,
      filters,
      timestamp: Date.now(),
    });
  }

  trackBrandView(category: string, brand: string) {
    this.trackEvent({
      type: 'view',
      category,
      brand,
      timestamp: Date.now(),
    });
  }

  trackBrandCompare(category: string, brands: string[]) {
    this.trackEvent({
      type: 'compare',
      category,
      filters: brands,
      timestamp: Date.now(),
    });
  }

  private trackEvent(event: BrandAnalyticsEvent) {
    this.events.push(event);
    this.persistEvents();
    // In a real application, you would send this to your analytics service
    console.log('Brand Analytics Event:', event);
  }

  private persistEvents() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('brandAnalytics', JSON.stringify(this.events));
    }
  }

  getAnalytics() {
    return {
      events: this.events,
      summary: this.generateSummary(),
    };
  }

  private generateSummary() {
    const now = Date.now();
    const last24Hours = this.events.filter(e => now - e.timestamp < 24 * 60 * 60 * 1000);

    return {
      totalEvents: this.events.length,
      last24Hours: {
        searches: last24Hours.filter(e => e.type === 'search').length,
        filters: last24Hours.filter(e => e.type === 'filter').length,
        views: last24Hours.filter(e => e.type === 'view').length,
        comparisons: last24Hours.filter(e => e.type === 'compare').length,
      },
      popularBrands: this.getPopularBrands(),
      popularCategories: this.getPopularCategories(),
    };
  }

  private getPopularBrands() {
    const brandCounts = this.events
      .filter(e => e.brand)
      .reduce((acc, event) => {
        if (event.brand) {
          acc[event.brand] = (acc[event.brand] || 0) + 1;
        }
        return acc;
      }, {} as Record<string, number>);

    return Object.entries(brandCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);
  }

  private getPopularCategories() {
    const categoryCounts = this.events.reduce((acc, event) => {
      acc[event.category] = (acc[event.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(categoryCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);
  }
}

export const brandAnalytics = BrandAnalyticsService.getInstance(); 