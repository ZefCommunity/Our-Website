import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DEFAULT_OG_IMAGE,
  ORGANIZATION_JSON_LD,
  SEO_BY_HOME_HASH,
  SEO_BY_PATH,
  SITE_URL,
} from '../../config/seo';
import { ZEF_NAME } from '../../config/branding';
import {
  upsertJsonLd,
  upsertLinkRel,
  upsertMetaByName,
  upsertMetaByProperty,
} from './setDocumentMeta';

const JSON_LD_ID = 'zef-organization-jsonld';

/**
 * Applies route-aware title, meta description, Open Graph, Twitter Card,
 * canonical URL, and Organization JSON-LD for the active page.
 */
export function PageSEO() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const hashId = hash ? decodeURIComponent(hash.slice(1)) : '';
    const hashSeo =
      pathname === '/' && hashId ? SEO_BY_HOME_HASH[hashId] : null;
    const routeSeo = SEO_BY_PATH[pathname] ?? SEO_BY_PATH['/'];

    const title = hashSeo?.title ?? routeSeo.title ?? ZEF_NAME;
    const description =
      hashSeo?.description ?? routeSeo.description ?? '';
    const keywords = routeSeo.keywords ?? '';
    const ogType = routeSeo.ogType ?? 'website';
    const noindex = routeSeo.noindex ?? false;

    const canonicalPath =
      pathname === '/' && hashId ? `/#${hashId}` : pathname || '/';
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;
    const ogImage = routeSeo.ogImage ?? DEFAULT_OG_IMAGE;

    document.title = title;

    upsertMetaByName('description', description);
    upsertMetaByName('keywords', keywords);
    upsertMetaByName('author', ZEF_NAME);
    upsertMetaByName('robots', noindex ? 'noindex, follow' : 'index, follow');

    upsertLinkRel('canonical', canonicalUrl);

    upsertMetaByProperty('og:site_name', ZEF_NAME);
    upsertMetaByProperty('og:title', title);
    upsertMetaByProperty('og:description', description);
    upsertMetaByProperty('og:type', ogType);
    upsertMetaByProperty('og:url', canonicalUrl);
    upsertMetaByProperty('og:image', ogImage);
    upsertMetaByProperty('og:locale', 'en_NG');

    upsertMetaByName('twitter:card', 'summary_large_image');
    upsertMetaByName('twitter:title', title);
    upsertMetaByName('twitter:description', description);
    upsertMetaByName('twitter:image', ogImage);

    upsertJsonLd(JSON_LD_ID, ORGANIZATION_JSON_LD);
  }, [pathname, hash]);

  return null;
}
