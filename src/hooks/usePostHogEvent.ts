import posthog from 'posthog-js';

export function usePostHogEvent() {
  return (event: string, properties?: Record<string, any>) => {
    posthog.capture(event, properties);
  };
} 