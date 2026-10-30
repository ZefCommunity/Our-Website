# ZEF website update report

Date of this local implementation: 30 October 2026.

This report covers work in the `Our-Website` Vite application. Changes are in the working tree only. They were not committed, pushed, or deployed. The live site at `https://zurfteempowercare.org` was not updated and was not used as the verification environment.

## Executive summary

The public site is a React single-page application. Programme and page copy live in source files, not in a CMS. The existing registration destination is the expression-of-interest form that used to be served at `/enroll`.

That form now shows the confirmed registration deadline, **28 November 2026**, and the confirmed commencement date, **2 December 2026**. The same dates appear on the homepage, beside an **Enrol** button that links to `/enrol`. Navigation, the footer, the sitemap, and page metadata use `/enrol`. `/enroll` redirects to `/enrol` in the application, and `vercel.json` defines a permanent redirect for production.

The About page uses the approved mission and vision sentences. `/pilots` and `/enrol` are the same programme: Digital Skills Starter and Mentor Circles, with registration only on `/enrol`. Past community-event dates were removed. Existing public impact figures were confirmed and left in place.

A start time on 2 December 2026 is still not published. Testimonials, partner labels, focus-area wording, and the homepage tagline are still open.

## Repository findings

- **Application:** `Our-Website`, React 18, Vite 6, React Router 7, Tailwind CSS.
- **Content source:** TypeScript is not used. Copy, routes, and SEO are JavaScript modules under `src/`. There is no CMS or database in this repository.
- **Homepage:** `src/components/Homepage/Layout/Layout.jsx` renders the hero, About, What We Do (`/#what-we-do`), impact, partnerships, and community events.
- **Enrolment:** `src/Pages/Enroll/` renders the existing form. Submission still posts the same payload shape, including `formType: enroll_eoi`, through the webhook configured in `src/config/forms.js`.
- **Other public routes:** `/about`, `/LatestCause`, `/socialEvents`, `/volunteer`, `/partnerships`, `/pilots`, `/contact`. Blog routes exist and are marked `noindex`.
- **Deployment:** `vercel.json` rewrites all paths to `index.html`. Redirects are evaluated by Vercel before that rewrite. No Netlify config is present.
- **Tests before this work:** None. `npm test` was added for the route and date checks.
- **Git:** `Our-Website` is the git repository. It was clean before these edits. `PrevProject/` is an older static archive and was not treated as the current site.
- **Canonical host in code:** `https://zurfteempowercare.org`.

## Changes implemented

| File | Change |
| --- | --- |
| `src/config/programmeRegistration.js` | New source for the two dates, `/enrol`, `/enroll`, and the redirect URL builder. |
| `src/components/programme/ProgrammeDates.jsx` | Shared display of the deadline and commencement date. |
| `src/Pages/Enroll/enrollContent.js` | “Enrolment Is Now Open”, British spelling in the edited sentences, and both dates in the form introduction. |
| `src/Pages/Enroll/sections/EnrollHero.jsx` | Renders the dates on the enrolment hero. |
| `src/Pages/Enroll/sections/EnrollFormSection.jsx` | Renders the same dates above the form. The submit handler was not changed. |
| `src/components/Homepage/Herosection/Firstsection.jsx` | Homepage hero shows the dates and an Enrol button to `/enrol`. |
| `src/components/Navbar/Navbar.jsx` | “Enrol” links to `/enrol` in the desktop and mobile menus. |
| `src/components/Footer/Footer.jsx` | Footer link says “Enrol” and points to `/enrol`. |
| `src/App.jsx` | Route `/enrol`. `/enroll` renders a client redirect that keeps the query string and hash. |
| `src/config/canonical.js` | `/enroll` is an alias of `/enrol`, including case and trailing-slash variants. |
| `src/config/seo.js` | Canonical path, title, and description for `/enrol`, including both dates. Sitemap path updated. |
| `vercel.json` | Permanent redirects from `/enroll` and `/enroll/` to `/enrol`. |
| `scripts/generate-sitemap.mjs` | Sitemap path `/enrol`. |
| `public/sitemap.xml` | Regenerated. Enrolment URL is `/enrol`. `lastmod` is 2026-10-30 for every URL because the generator stamps the run date on all entries. |
| `src/config/branding.js` | `ZEF_MISSION` and `ZEF_VISION` stored verbatim. |
| `src/Pages/About/About.jsx` | Labeled mission and vision use those constants. |
| `src/components/shared/ScrollToTop.jsx` | Comment updated to `/enrol`. |
| `package.json` | `npm test` runs `tests/enrol-route.test.mjs`. |
| `tests/enrol-route.test.mjs` | Regression checks for dates, redirect, sitemap, Vercel rule, nav labels, mission, and vision. |
| `docs/zef-website-update-tracker.md` | Task tracker. |
| `docs/zef-website-update-report.md` | This report. |

Internal module names under `src/Pages/Enroll/`, the analytics event `enroll_eoi_submitted`, and the stored form type `enroll_eoi` were not renamed. Renaming them would not change the public URL and could break the existing sheet mapping.

## Programme update verification

| Surface | Commencement | Deadline | Enrol destination | How it was checked |
| --- | --- | --- | --- | --- |
| `src/config/programmeRegistration.js` | 2 December 2026 | 28 November 2026 | `/enrol` | Unit test |
| Homepage hero | Shown | Shown | Button “Enrol” to `/enrol` | Headless Chrome DOM at `http://127.0.0.1:4173/` |
| `/enrol` hero and form | Shown twice | Shown twice | Form is on this page | Headless Chrome DOM at desktop and 390×844 |
| Enrolment SEO description | Included via the shared constants | Included via the shared constants | Canonical `/enrol` | Unit test and rendered document title |
| Production bundle | Present in the main chunk | Present in the main chunk | `/enrol` present | Search of `dist/assets` after `npm run build` |
| `/pilots` | Shown | Shown | Enrol buttons go to `/enrol` | Local preview, desktop and 390×844 |

The Enrol control in the header, footer, and homepage hero points at `/enrol`. On that page, “Register Your Interest” scrolls to `#enroll-form`. That fragment id is an internal anchor, not the public route.

The rendered form included first name, email, and “Submit Expression of Interest”. It did not show the countries-load error state. A live submission was not sent, because that would write a row to the external sheet.

## URL and spelling corrections

- Public route: `/enrol`.
- In-app redirect: `/enroll` to `/enrol`, keeping `search` and `hash`. Case variants such as `/Enroll` are covered by `getCanonicalRedirectTarget`.
- Hosting redirect: `vercel.json` sends `/enroll` and `/enroll/` to `/enrol` with `permanent: true` (HTTP 301 when Vercel serves the file). This was not executed against a deployed Vercel project.
- Local preview check: opening `http://127.0.0.1:4173/enroll?source=check#enroll-form` rendered the enrolment page. The document title became `Enrol — Register Interest in Digital Skills Training | ZEF`, which is the `/enrol` title. Vite preview does not apply `vercel.json`, so this check covers the client redirect only.
- Sitemap loc: `https://zurfteempowercare.org/enrol`. No `/enroll` loc remains.
- User-facing “Enroll” in the navbar and footer is gone. The only “Enroll” string in the rendered enrolment DOM was the JavaScript chunk filename.
- No redirect loop: `/enrol` is not an alias of itself, and the unit test expects `getCanonicalRedirectTarget('/enrol')` to be `null`.

## Content audit findings

### Homepage

The homepage renders, in order: hero, About, What We Do, impact, ecosystem/partners, and community events.

What We Do describes four areas: Digital Skills Training, Entrepreneurship Development, Innovation & Solution Building, and Mentorship & Community. That copy was left as it is. It does not state that a programme starts on 2 December 2026. The dates were added to the hero instead of being attached to all four areas.

Community events still show September and October 2026 dates. Those dates are past relative to 30 October 2026. See ZEF-004.

Impact cards still show 50+, 1000+, Multiple, and Growing. See ZEF-005.

Partners still list We Make Change, Microsoft for Nonprofits, and Canva for Nonprofits. See ZEF-007.

The hero tagline is still `ZEF_TAGLINE`, not the approved mission sentence. See ZEF-011.

### What We Do

There is no separate `/what-we-do` route. The section is `/#what-we-do`. Canonical settings point that hash at `/LatestCause`, which is a different page of programme cards and capacity figures. That split is pre-existing. `/LatestCause` figures were not edited.

### About

Mission and vision on the labeled About block match the supplied sentences. Impact figures on that page are the confirmed public figures. The testimonial carousel is still placeholder copy. See ZEF-006.

### Enrolment and pilots

`/pilots` describes the programme. `/enrol` is the registration form for that same programme. See ZEF-009.

### Other pages checked

- `/socialEvents` no longer shows 2 October 2026. Events that were already marked “TBD 2026” still use that label. See ZEF-004.
- Footer social URLs are `#`. See ZEF-014.
- Unused components with placeholder team, news, and campaign data are not mounted. See ZEF-013.

No broken in-app route was found for the links that were updated. External partner and donation URLs were not opened.

## Follow-up applied on 30 October 2026

Leadership confirmed three decisions. They are implemented locally and not deployed.

### Same programme

`/pilots` and `/enrol` now share the path names Digital Skills Starter and Mentor Circles, the deadline 28 November 2026, and the commencement date 2 December 2026. Enrol buttons on `/pilots` link to `/enrol`. `/enrol` links back to `/pilots` for the programme description. The Pilots page no longer renders its interest form, so visitors are not offered a second application. The Pilots webhook module and the Enrol payload, including `formType: enroll_eoi`, were not modified.

Files: `src/config/programmeRegistration.js`, `src/Pages/Pilots/Pilots.jsx`, `src/Pages/Pilots/pilotsContent.js`, `src/Pages/Pilots/sections/HeroSection.jsx`, `src/Pages/Pilots/sections/PilotProgramsSection.jsx`, `src/Pages/Pilots/sections/JoinStepsSection.jsx`, `src/Pages/Pilots/sections/RegistrationSection.jsx`, `src/Pages/Pilots/sections/index.js`, `src/Pages/Enroll/enrollContent.js`, `src/Pages/Enroll/sections/EnrollHero.jsx`, `src/config/seo.js`.

### Past event dates

Removed from the homepage community section and from the Mentorship & Leadership Circle entry on `/socialEvents`. Those entries now say the activity has already taken place. Titles were kept. No new dates were added.

Files: `src/components/Homepage/Herosection/Fifthsection.jsx`, `src/Pages/SocialEvents/SocialEvents.jsx`, `src/config/seo.js`.

### Impact figures

No impact number was edited. Homepage cards still include 50+ and 1000+. `/LatestCause` still includes the existing enrolment and capacity figures. The 520 response sentence remains on `/pilots`.

## Outstanding confirmations

1. Start time on 2 December 2026. See ZEF-008.
2. Real testimonials, or removal of the placeholder quotes. See ZEF-006.
3. Current status of We Make Change, Microsoft for Nonprofits, and Canva for Nonprofits, and whether “Our Partners” is the right label. See ZEF-007.
4. Whether What We Do and About should be rewritten to the six approved focus areas. See ZEF-010.
5. Whether the homepage and footer tagline should become the approved mission. See ZEF-011.
6. Official social profile URLs. See ZEF-014.
7. A site-wide change from “programs” to “programmes”, if wanted beyond the enrolment page. See ZEF-012.
8. Events still labeled “TBD 2026” on `/socialEvents`. Those labels are not past dates and were not replaced.

## Testing results

| Command or check | Result |
| --- | --- |
| `npm test` | Passed. 9 tests, 0 failures. Covers dates, the `/enroll` redirect, one registration journey, removal of the past event dates, and retention of the impact figures. |
| `npm run sitemap` | Passed. Wrote `public/sitemap.xml`. |
| `npm run lint` | Failed. The run reported 3764 problems (3759 errors, 5 warnings) across the existing project, including vendored scripts and `react/prop-types`. This update did not attempt to clear that baseline. |
| `npm run build` | Passed again after the follow-up. Vite 6 completed. Chunk-size and a dual import of `Partnerships.jsx` remain warnings. |
| Typecheck | No TypeScript check script exists. |
| End-to-end suite | None in the repository. |
| Headless Chrome against `vite preview` on `127.0.0.1:4173` | Desktop and 390×844 dumps of `/pilots` and `/enrol` showed the shared dates, Digital Skills Starter, and Mentor Circles. `/pilots` showed Enrol and did not show Submit Interest. `/enrol` showed the expression-of-interest form, including First name and Submit Expression of Interest, and did not show the countries-load error. `/` no longer contained the September or 2 October 2026 dates and still showed 50+ and 1000+. `/socialEvents` no longer contained 2 October 2026. These were DOM dumps, not a visual screenshot review. |
| Live form submission | Not performed. It would write to the external sheet. |
| Production HTTP 301 | Not executed. It depends on deploying `vercel.json`. |
| Live website | Not verified. |

## Deployment status

Implemented and tested locally. Not committed. Not deployed to a preview host. Not verified on the live website.

After a deploy, confirm these URLs on the host that serves `vercel.json`:

1. `https://zurfteempowercare.org/enrol` returns the enrolment page.
2. `https://zurfteempowercare.org/enroll` responds with HTTP 301 to `/enrol`.
3. A query string on `/enroll` is still present on `/enrol`.

## Next actions

1. **Programme Owners:** Supply the start time for 2 December 2026 if it should be published. See ZEF-008.
2. **Product Manager:** Prioritise ZEF-006 and ZEF-007. Impact figures in ZEF-005 stay as published.
3. **Lead Coordinator:** Confirm whether the homepage tagline and the six focus areas should replace current copy.
4. **Relevant Department Leads:** Confirm partner wording and official social URLs.
5. **IT Department:** Deploy this working tree only after review. Then run the three production URL checks above. Do not treat `npm run lint` as green. The last full lint run failed with 3764 problems and was not cleared by this follow-up.
