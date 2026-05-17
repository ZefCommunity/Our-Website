/**
 * Google Analytics 4 configuration.
 *
 * Override via Vite env when needed:
 *   VITE_GA_MEASUREMENT_ID — measurement ID (defaults below)
 *   VITE_GA_ENABLED=true|false — force on/off (default: on in production only)
 */

/** GA4 Measurement ID for zurfteempowercare.org */
export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-75ZSHC6772';

/**
 * Whether GA4 should load and send data.
 * Production builds are enabled by default to avoid noisy dev analytics.
 */
export function isAnalyticsEnabled() {
  const flag = import.meta.env.VITE_GA_ENABLED;
  if (flag === 'true') return true;
  if (flag === 'false') return false;
  return import.meta.env.PROD;
}
