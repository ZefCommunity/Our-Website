/**
 * Regenerates public/sitemap.xml from canonical indexable routes.
 * Run: npm run sitemap
 *
 * Hash homepage URLs are excluded — canonicals point at full routes (see canonical.js).
 */
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_ORIGIN = 'https://zurfteempowercare.org';
const today = new Date().toISOString().slice(0, 10);

/** Keep in sync with SITEMAP_PATHS in src/config/seo.js */
const paths = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/LatestCause', changefreq: 'weekly', priority: '0.9' },
  { path: '/socialEvents', changefreq: 'weekly', priority: '0.8' },
  { path: '/volunteer', changefreq: 'monthly', priority: '0.7' },
  { path: '/partnerships', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
];

const locForPath = (path) => (path === '/' ? SITE_ORIGIN : `${SITE_ORIGIN}${path}`);

const urls = paths
  .map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${locForPath(path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(join(__dirname, '..', 'public', 'sitemap.xml'), xml, 'utf8');
console.log('Wrote public/sitemap.xml');
