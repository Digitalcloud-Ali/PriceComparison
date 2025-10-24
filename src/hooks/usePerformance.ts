import { useEffect, useRef } from 'react';
import { analytics } from '@/services/analytics';

export function usePerformance(componentName: string) {
  const mountTime = useRef<number>(0);

  useEffect(() => {
    mountTime.current = performance.now();

    return () => {
      const unmountTime = performance.now();
      const duration = unmountTime - mountTime.current;

      analytics.track('page_view', {
        component: componentName,
        mountDuration: duration,
      });
    };
  }, [componentName]);

  return {
    logRender: (data: Record<string, any> = {}) => {
      const renderTime = performance.now() - mountTime.current;
      analytics.track('page_view', {
        component: componentName,
        renderTime,
        ...data,
      });
    },
  };
} 