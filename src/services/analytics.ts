type EventType = 'page_view' | 'product_view' | 'search' | 'add_to_cart' | 'checkout' | 'error';

interface AnalyticsEvent {
  type: EventType;
  timestamp: number;
  data: Record<string, any>;
  sessionId: string;
}

class Analytics {
  private static instance: Analytics;
  private events: AnalyticsEvent[] = [];
  private sessionId: string;

  private constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeSession();
  }

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  private generateSessionId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  private initializeSession() {
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => {
        this.persistEvents();
      });

      // Send events to backend every 30 seconds
      setInterval(() => {
        this.sendEvents();
      }, 30000);
    }
  }

  track(type: EventType, data: Record<string, any> = {}) {
    const event: AnalyticsEvent = {
      type,
      timestamp: Date.now(),
      data,
      sessionId: this.sessionId,
    };

    this.events.push(event);
    this.persistEvents();

    // Send immediately for certain events
    if (['error', 'checkout'].includes(type)) {
      this.sendEvents();
    }
  }

  private persistEvents() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('analytics_events', JSON.stringify(this.events));
    }
  }

  private async sendEvents() {
    if (this.events.length === 0) return;

    try {
      // In a real app, you would send this to your analytics backend
      console.log('Sending analytics events:', this.events);
      
      // Clear events after successful send
      this.events = [];
      this.persistEvents();
    } catch (error) {
      console.error('Failed to send analytics events:', error);
    }
  }

  // Performance tracking
  trackPageLoad() {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        this.track('page_view', {
          url: window.location.pathname,
          loadTime: navigation.loadEventEnd - navigation.startTime,
          firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
          firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
        });
      });
    }
  }

  // Error tracking
  trackError(error: Error, context: Record<string, any> = {}) {
    this.track('error', {
      message: error.message,
      stack: error.stack,
      ...context,
    });
  }
}

export const analytics = Analytics.getInstance(); 