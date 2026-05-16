/**
 * Regenerates public/sitemap.xml from src/config/seo.js SITEMAP_PATHS.
 * Run: node scripts/generate-sitemap.mjs
 *
 * Note: SITEMAP_PATHS is duplicated here for zero build-deps; keep in sync with seo.js
 * or import after adding "type": "module" path alias in a future tooling pass.
 */
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://www.zurfteempowercare.org';
const today = new Date().toISOString().slice(0, 10);

const paths = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/LatestCause', changefreq: 'weekly', priority: '0.9' },
  { path: '/socialEvents', changefreq: 'weekly', priority: '0.8' },
  { path: '/volunteer', changefreq: 'monthly', priority: '0.7' },
  { path: '/partnerships', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/#about-zef', changefreq: 'monthly', priority: '0.7' },
  { path: '/#what-we-do', changefreq: 'monthly', priority: '0.8' },
  { path: '/#community-events', changefreq: 'weekly', priority: '0.7' },
];

const urls = paths
  .map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
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
