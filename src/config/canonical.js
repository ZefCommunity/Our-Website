/**
 * Canonical URL configuration — single source of truth for public SEO URLs.
 * Production canonical host: https://zurfteempowercare.org (apex, no www).
 *
 * TODO: future dynamic canonical generation — derive from CMS/API slug per resource.
 * TODO: future blog/article canonical support — /blog/:slug with Article JSON-LD.
 * TODO: multilingual SEO support — hreflang alternates + locale-prefixed canonical paths.
 */

export const SITE_ORIGIN = 'https://zurfteempowercare.org';

/**
 * Indexable primary routes and their canonical paths (no trailing slash).
 * React Router paths are preserved for UI; canonicals consolidate duplicates.
 */
export const PRIMARY_CANONICAL_PATHS = {
  home: '/',
  about: '/about',
  programs: '/LatestCause',
  volunteer: '/volunteer',
  community: '/socialEvents',
  partnerships: '/partnerships',
  contact: '/contact',
};

/**
 * Homepage section hashes duplicate dedicated pages — canonical always points
 * at the full route so Google does not index /#fragment as separate URLs.
 */
export const HOME_HASH_CANONICAL_PATH = {
  'about-zef': PRIMARY_CANONICAL_PATHS.about,
  'what-we-do': PRIMARY_CANONICAL_PATHS.programs,
  'community-events': PRIMARY_CANONICAL_PATHS.community,
};

/** Lowercase pathname aliases → canonical path (case + legacy patterns). */
const PATH_ALIAS_TO_CANONICAL = {
  '/index.html': '/',
  '/index.htm': '/',
  '/latestcause': PRIMARY_CANONICAL_PATHS.programs,
  '/socialevents': PRIMARY_CANONICAL_PATHS.community,
  '/blogdetail': '/blogDetail',
};

/**
 * Route naming audit — duplicates / risks (navigation unchanged):
 * - /about vs /#about-zef (same topic; hash canonical → /about)
 * - /LatestCause vs /#what-we-do (programs; hash canonical → /LatestCause)
 * - /socialEvents vs /#community-events (community; hash canonical → /socialEvents)
 * - /LatestCause & /socialEvents use mixed casing (bookmark/legacy risk; aliases normalize)
 * - /blog & /blogDetail: noindex but need self-canonical to avoid GSC duplicates
 * - www vs apex: set canonical to apex; configure host redirect at CDN/DNS
 */
export const ROUTE_DUPLICATE_NOTES = [
  'Homepage hash sections share content with dedicated routes — use HOME_HASH_CANONICAL_PATH.',
  'Programs route is /LatestCause (legacy name); sitemap and canonical use this path until a server redirect is added.',
  'Community route is /socialEvents (legacy name); same as programs.',
  'Blog routes are noindex; canonical still points to themselves.',
];

/**
 * Normalizes pathname: strips index.html, trailing slashes, and known aliases.
 * @param {string} pathname
 * @returns {string}
 */
export function normalizePathname(pathname) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  let path = pathname;

  if (path.endsWith('/index.html')) {
    path = path.slice(0, -'/index.html'.length) || '/';
  } else if (path.endsWith('/index.htm')) {
    path = path.slice(0, -'/index.htm'.length) || '/';
  }

  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  const alias = PATH_ALIAS_TO_CANONICAL[path.toLowerCase()];
  return alias ?? path;
}

/**
 * Resolves the canonical path for the active SPA location (pathname + optional hash).
 * @param {string} pathname
 * @param {string} [hash] — location.hash including leading "#"
 * @returns {string}
 */
export function resolveCanonicalPath(pathname, hash = '') {
  const normalized = normalizePathname(pathname);
  const hashId = hash ? decodeURIComponent(hash.replace(/^#/, '')) : '';

  if (normalized === '/' && hashId && HOME_HASH_CANONICAL_PATH[hashId]) {
    return HOME_HASH_CANONICAL_PATH[hashId];
  }

  return normalized || '/';
}

/**
 * Builds the full canonical URL (no trailing slash on homepage).
 * @param {string} pathname
 * @param {string} [hash]
 * @returns {string}
 */
export function buildCanonicalUrl(pathname, hash = '') {
  const path = resolveCanonicalPath(pathname, hash);
  if (path === '/') {
    return SITE_ORIGIN;
  }
  return `${SITE_ORIGIN}${path}`;
}

/**
 * Returns a redirect target when the browser pathname is a non-canonical variant.
 * @param {string} pathname
 * @returns {string | null}
 */
export function getCanonicalRedirectTarget(pathname) {
  const normalized = normalizePathname(pathname);
  if (!pathname || pathname === normalized) {
    return null;
  }
  return normalized;
}
