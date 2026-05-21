/**
 * Central SEO configuration for ZEF (Zurfte Empowercare Foundation).
 * Canonical host: SITE_ORIGIN in canonical.js (https://zurfteempowercare.org).
 *
 * TODO: future dynamic canonical generation — per-slug overrides from CMS.
 * TODO: future blog/article canonical support — extend SEO_BY_PATH with :slug keys.
 * TODO: multilingual SEO support — hreflang + locale-specific titles/descriptions.
 */
import { ZEF_EMAIL, ZEF_NAME, ZEF_SHORT } from './branding';
import { SITE_ORIGIN } from './canonical';
import { HOME_SECTIONS } from './homepageSections';

export const SITE_URL = SITE_ORIGIN;

/** Default social preview image (place file at public/og-image.png) */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const SITE_KEYWORDS = [
  'youth empowerment',
  'digital skills training',
  'entrepreneurship development',
  'nonprofit organization Nigeria',
  'community empowerment',
  'innovation programs',
  'Zurfte Empowercare Foundation',
  'ZEF',
  'mentorship programs',
  'youth innovation',
].join(', ');

const titleSuffix = `| ${ZEF_SHORT}`;

/**
 * Per-route SEO metadata. Keys must match React Router paths (no trailing slash).
 * Volunteer and Partnerships use dedicated routes that render the contact experience.
 *
 * Canonical URLs (via PageSEO + canonical.js):
 *   Home /, About /about, Programs /LatestCause, Volunteer /volunteer,
 *   Community /socialEvents, Partnerships /partnerships, Contact /contact
 */
export const SEO_BY_PATH = {
  '/': {
    canonicalPath: '/',
    title: `${ZEF_NAME} — Youth Empowerment & Digital Skills ${titleSuffix}`,
    description:
      'Zurfte Empowercare Foundation (ZEF) is a nonprofit empowering youth and underserved communities in Nigeria through digital skills training, entrepreneurship development, innovation programs, and mentorship.',
    keywords: SITE_KEYWORDS,
    ogType: 'website',
  },
  '/about': {
    canonicalPath: '/about',
    title: `About ${ZEF_SHORT} — Mission, Vision & Community Impact ${titleSuffix}`,
    description:
      'Learn about Zurfte Empowercare Foundation: our nonprofit mission, youth empowerment focus, and how we build lasting community impact through skills, innovation, and service.',
    keywords: `about ${ZEF_SHORT}, nonprofit mission Nigeria, youth empowerment organization, ${SITE_KEYWORDS}`,
    ogType: 'website',
  },
  '/LatestCause': {
    canonicalPath: '/LatestCause',
    title: `Programs — Digital Skills, Entrepreneurship & Innovation ${titleSuffix}`,
    description:
      'Explore ZEF programs: youth digital skills training, entrepreneurship development, innovation labs, and mentorship initiatives that create real-world opportunity.',
    keywords: `ZEF programs, digital skills training, entrepreneurship development, innovation programs, ${SITE_KEYWORDS}`,
    ogType: 'website',
  },
  '/socialEvents': {
    canonicalPath: '/socialEvents',
    title: `Community Events — Workshops, Bootcamps & Mentorship ${titleSuffix}`,
    description:
      'Join ZEF community events: digital skills bootcamps, youth innovation workshops, and mentorship circles that connect learners, volunteers, and partners.',
    keywords: `community events, youth workshops Nigeria, digital skills bootcamp, ${SITE_KEYWORDS}`,
    ogType: 'website',
  },
  '/volunteer': {
    canonicalPath: '/volunteer',
    title: `Volunteer — Support Youth Empowerment & Community Programs ${titleSuffix}`,
    description:
      'Volunteer with Zurfte Empowercare Foundation. Mentor youth, support digital skills and innovation programs, and help expand community empowerment across Nigeria.',
    keywords: `volunteer nonprofit Nigeria, youth mentorship volunteer, ${SITE_KEYWORDS}`,
    ogType: 'website',
  },
  '/partnerships': {
    canonicalPath: '/partnerships',
    title: `Partnerships — Collaborate for Youth & Community Impact ${titleSuffix}`,
    description:
      'Partner with ZEF: corporate, institutional, and community collaborations that scale digital skills training, entrepreneurship development, and innovation programs.',
    keywords: `nonprofit partnerships Nigeria, corporate social impact, community empowerment partners, ${SITE_KEYWORDS}`,
    ogType: 'website',
  },
  '/contact': {
    canonicalPath: '/contact',
    title: `Contact ${ZEF_SHORT} — Programs, Volunteering & Partnerships ${titleSuffix}`,
    description:
      'Contact Zurfte Empowercare Foundation for program inquiries, volunteering, partnerships, and community engagement. Email our team to get started.',
    keywords: `contact ZEF, nonprofit contact Nigeria, ${SITE_KEYWORDS}`,
    ogType: 'website',
  },
  '/blog': {
    canonicalPath: '/blog',
    title: `News & Insights — Youth Empowerment & Innovation ${titleSuffix}`,
    description:
      'Stories and updates from Zurfte Empowercare Foundation on youth programs, digital skills, entrepreneurship, and community empowerment.',
    keywords: SITE_KEYWORDS,
    ogType: 'article',
    noindex: true,
  },
  '/blogDetail': {
    canonicalPath: '/blogDetail',
    title: `Article ${titleSuffix}`,
    description:
      'Read the latest from Zurfte Empowercare Foundation on youth empowerment and community innovation.',
    ogType: 'article',
    noindex: true,
  },
};

/** Homepage section hashes: refined titles when users land on /#section */
export const SEO_BY_HOME_HASH = {
  [HOME_SECTIONS.about]: {
    title: `About ${ZEF_SHORT} — Who We Are ${titleSuffix}`,
    description:
      'ZEF is a nonprofit dedicated to youth empowerment through digital skills, entrepreneurship, mentorship, and innovation-driven community programs in Nigeria.',
  },
  [HOME_SECTIONS.programs]: {
    title: `What We Do — Programs & Core Services ${titleSuffix}`,
    description:
      'Discover ZEF core programs: digital skills training, entrepreneurship development, innovation and solution building, and mentorship for young people.',
  },
  [HOME_SECTIONS.events]: {
    title: `Community Events — Learn, Connect & Grow ${titleSuffix}`,
    description:
      'Upcoming ZEF community events including innovation workshops, digital skills bootcamps, and mentorship circles—online and across our network.',
  },
};

export const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: ZEF_NAME,
  alternateName: ZEF_SHORT,
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  description:
    'Nonprofit organization empowering youth and underserved communities through digital skills training, entrepreneurship development, innovation programs, and mentorship.',
  email: ZEF_EMAIL,
  areaServed: {
    '@type': 'Country',
    name: 'Nigeria',
  },
  knowsAbout: [
    'Youth empowerment',
    'Digital skills training',
    'Entrepreneurship development',
    'Community empowerment',
    'Innovation programs',
  ],
  nonprofitStatus: 'NonprofitType',
};

/** Routes included in public/sitemap.xml */
export const SITEMAP_PATHS = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/LatestCause', changefreq: 'weekly', priority: '0.9' },
  { path: '/socialEvents', changefreq: 'weekly', priority: '0.8' },
  { path: '/volunteer', changefreq: 'monthly', priority: '0.7' },
  { path: '/partnerships', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
];
