export interface PerformanceMetrics {
  timeToFirstByte: number;
  firstPaint: number;
  firstContentfulPaint: number;
  domInteractive: number;
  domComplete: number;
  loadTime: number;
}

export function getPerformanceMetrics(): PerformanceMetrics | null {
  if (typeof window === 'undefined') return null;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');

  if (!navigation) return null;

  return {
    timeToFirstByte: navigation.responseStart - navigation.requestStart,
    firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
    firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
    domInteractive: navigation.domInteractive - navigation.startTime,
    domComplete: navigation.domComplete - navigation.startTime,
    loadTime: navigation.loadEventEnd - navigation.startTime,
  };
}

export function trackResourceMetrics() {
  if (typeof window === 'undefined') return null;

  const resources = performance.getEntriesByType('resource');
  return resources.reduce((acc, resource: PerformanceResourceTiming) => {
    const type = resource.initiatorType;
    if (!acc[type]) {
      acc[type] = {
        count: 0,
        totalSize: 0,
        totalTime: 0,
      };
    }

    acc[type].count++;
    acc[type].totalSize += resource.encodedBodySize || 0;
    acc[type].totalTime += resource.duration;

    return acc;
  }, {} as Record<string, { count: number; totalSize: number; totalTime: number }>);
} 