import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import {
  buildCanonicalUrl,
  getCanonicalRedirectTarget,
} from '../src/config/canonical.js';
import {
  ENROL_LEGACY_PATH,
  ENROL_PATH,
  PROGRAMME_COMMENCEMENT_DATE,
  PROGRAMME_COMMENCEMENT_ISO,
  PROGRAMME_REGISTRATION_DEADLINE,
  PROGRAMME_REGISTRATION_DEADLINE_ISO,
  buildEnrolLocation,
} from '../src/config/programmeRegistration.js';
import { ZEF_MISSION, ZEF_VISION } from '../src/config/branding.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

test('confirmed programme dates stay in one source', () => {
  assert.equal(PROGRAMME_COMMENCEMENT_DATE, '2 December 2026');
  assert.equal(PROGRAMME_COMMENCEMENT_ISO, '2026-12-02');
  assert.equal(PROGRAMME_REGISTRATION_DEADLINE, '28 November 2026');
  assert.equal(PROGRAMME_REGISTRATION_DEADLINE_ISO, '2026-11-28');
});

test('legacy /enroll resolves to /enrol and keeps query and hash', () => {
  assert.equal(ENROL_LEGACY_PATH, '/enroll');
  assert.equal(getCanonicalRedirectTarget(ENROL_LEGACY_PATH), ENROL_PATH);
  assert.equal(getCanonicalRedirectTarget('/enroll'), ENROL_PATH);
  assert.equal(getCanonicalRedirectTarget('/Enroll'), ENROL_PATH);
  assert.equal(getCanonicalRedirectTarget('/enroll/'), ENROL_PATH);
  assert.equal(getCanonicalRedirectTarget(ENROL_PATH), null);
  assert.equal(
    buildEnrolLocation('?source=nav', '#enroll-form'),
    '/enrol?source=nav#enroll-form',
  );
  assert.equal(buildCanonicalUrl(ENROL_PATH), 'https://zurfteempowercare.org/enrol');
});

test('public SEO and sitemap use /enrol', () => {
  const seo = readFileSync(join(root, 'src/config/seo.js'), 'utf8');
  const sitemap = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');

  assert.match(seo, /\[ENROL_PATH\]/);
  assert.match(seo, /title: `Enrol —/);
  assert.match(seo, /PROGRAMME_REGISTRATION_DEADLINE/);
  assert.match(seo, /PROGRAMME_COMMENCEMENT_DATE/);
  assert.doesNotMatch(seo, /path: '\/enroll'/);
  assert.doesNotMatch(seo, /canonicalPath: '\/enroll'/);
  assert.match(sitemap, /https:\/\/zurfteempowercare\.org\/enrol/);
  assert.doesNotMatch(sitemap, /\/enroll</);
});

test('Vercel permanently redirects /enroll to /enrol', () => {
  const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'));
  const rule = vercel.redirects.find((item) => item.source === '/enroll');
  assert.ok(rule);
  assert.equal(rule.destination, '/enrol');
  assert.equal(rule.permanent, true);
  assert.equal(
    vercel.redirects.some(
      (item) => item.source === '/enroll/' && item.permanent === true,
    ),
    true,
  );
});

test('navigation labels use Enrol and point at /enrol', () => {
  const navbar = readFileSync(
    join(root, 'src/components/Navbar/Navbar.jsx'),
    'utf8',
  );
  const footer = readFileSync(
    join(root, 'src/components/Footer/Footer.jsx'),
    'utf8',
  );
  const app = readFileSync(join(root, 'src/App.jsx'), 'utf8');

  assert.match(navbar, /Enrol/);
  assert.doesNotMatch(navbar, />\s*Enroll\s*</);
  assert.match(footer, /Enrol/);
  assert.doesNotMatch(footer, />\s*Enroll\s*</);
  assert.match(app, /path=\{ENROL_PATH\}/);
  assert.match(app, /LegacyEnrolRedirect/);
});

test('pilots and enrol describe one programme and one registration form', () => {
  const pilots = readFileSync(join(root, 'src/Pages/Pilots/Pilots.jsx'), 'utf8');
  const enrol = readFileSync(
    join(root, 'src/Pages/Enroll/enrollContent.js'),
    'utf8',
  );
  const pilotCopy = readFileSync(
    join(root, 'src/Pages/Pilots/pilotsContent.js'),
    'utf8',
  );
  const pilotWebhook = readFileSync(
    join(root, 'src/Pages/Pilots/lib/submitPilotInterest.js'),
    'utf8',
  );
  const enrolWebhook = readFileSync(
    join(root, 'src/Pages/Enroll/lib/submitEnrollEoi.js'),
    'utf8',
  );

  const programme = readFileSync(
    join(root, 'src/config/programmeRegistration.js'),
    'utf8',
  );

  assert.match(pilots, /RegistrationSection/);
  assert.doesNotMatch(pilots, /InterestFormSection/);
  assert.match(pilotCopy, /PROGRAMME_REGISTRATION_DEADLINE/);
  assert.match(pilotCopy, /PROGRAMME_COMMENCEMENT_DATE/);
  assert.match(pilotCopy, /PROGRAMME_PATH_TITLES/);
  assert.match(programme, /Digital Skills Starter/);
  assert.match(programme, /Mentor Circles/);
  assert.match(pilotCopy, /over 520 youth and partner responses/);
  assert.match(enrol, /PROGRAMME_PATHS_LABEL/);
  assert.match(enrol, /detailsPath: PILOTS_PATH/);
  assert.match(pilotWebhook, /PILOT_INTEREST_WEBHOOK_URL/);
  assert.match(pilotWebhook, /pilot: values\.pilotInterest/);
  assert.match(enrolWebhook, /formType: 'enroll_eoi'/);
});

test('past community event dates are not published', () => {
  const homeEvents = readFileSync(
    join(root, 'src/components/Homepage/Herosection/Fifthsection.jsx'),
    'utf8',
  );
  const socialEvents = readFileSync(
    join(root, 'src/Pages/SocialEvents/SocialEvents.jsx'),
    'utf8',
  );

  for (const source of [homeEvents, socialEvents]) {
    assert.doesNotMatch(source, /September, 2026/);
    assert.doesNotMatch(source, /2nd October, 2026/);
  }
  assert.match(homeEvents, /2nd December, 2026/);
  assert.doesNotMatch(homeEvents, /already taken place/);
  assert.match(socialEvents, /already taken place/);
});

test('confirmed impact figures stay in place', () => {
  const impact = readFileSync(
    join(root, 'src/components/Homepage/Herosection/impactContent.js'),
    'utf8',
  );
  const programs = readFileSync(
    join(root, 'src/Pages/LatestCause/LatestCause.jsx'),
    'utf8',
  );

  assert.match(impact, /50\+/);
  assert.match(impact, /1000\+/);
  assert.match(programs, /enrolled: '120'/);
  assert.match(programs, /capacity: '200'/);
});

test('approved mission and vision are stored verbatim', () => {
  assert.equal(
    ZEF_MISSION,
    'We equip young people with the skills, support and opportunities to build better futures.',
  );
  assert.equal(
    ZEF_VISION,
    'A future where every young person has the opportunity to learn, create and thrive.',
  );
});
