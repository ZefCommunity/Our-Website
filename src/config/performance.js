/**
 * Performance configuration and future optimization hooks.
 *
 * TODO: future CDN usage — serve /public and hashed build assets from a CDN
 * (e.g. CloudFront, Cloudflare) with long cache TTL for static files.
 *
 * TODO: future image optimization pipeline — generate WebP/AVIF variants and
 * responsive srcset at build time (vite-imagetools, sharp CI, or CMS CDN).
 *
 * TODO: future code splitting enhancements — route-based prefetch on hover,
 * dynamic import for heavy sections (Swiper, blog galleries), and shared chunks.
 *
 * TODO: future caching strategy — Cache-Control headers, service worker for
 * offline shell, and stale-while-revalidate for public JSON/API data.
 */

/** Max time (ms) to show the initial app shell loader before revealing the app */
export const APP_LOADER_MAX_MS = 900;
