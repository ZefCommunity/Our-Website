# ZEF website update tracker

Local implementation record for the Zurfte Empowercare Foundation site in this repository. Status values: `Pending`, `In Progress`, `Awaiting Confirmation`, `Implemented`, `Tested`, `Deployed`, `Blocked`.

Nothing in this tracker is deployed. Named owners are `To Be Assigned` where the repository does not identify a person.

| ID | Priority | Page or URL | Summary | Approval | Implementation | Testing | Deployment |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ZEF-001 | P1 | `/`, `/enrol`, `/pilots` | Show commencement 2 December 2026 and registration deadline 28 November 2026 | Confirmed by leadership brief | Implemented | Tested | Not deployed |
| ZEF-002 | P2 | `/enrol`, `/enroll` | British spelling and permanent redirect from `/enroll` | Confirmed by leadership brief | Implemented | Tested | Not deployed |
| ZEF-003 | P2 | `/about` | Replace labeled mission and add labeled vision | Authorised wording supplied | Implemented | Tested | Not deployed |
| ZEF-004 | P3 | `/#community-events`, `/socialEvents` | Remove past event dates from public pages | Confirmed | Implemented | Tested | Not deployed |
| ZEF-005 | P3 | `/`, `/about`, `/LatestCause` | Keep verified public impact figures | Confirmed | Implemented | Tested | Not deployed |
| ZEF-006 | P3 | `/about` | Placeholder testimonials | Awaiting Confirmation | Pending | Not applicable | Not deployed |
| ZEF-007 | P3 | `/`, `/partnerships` | Partnership and supporter claims | Awaiting Confirmation | Pending | Not applicable | Not deployed |
| ZEF-008 | P3 | `/enrol`, `/pilots` | Start time is still unpublished | Awaiting Confirmation | Pending | Not applicable | Not deployed |
| ZEF-009 | P1 | `/pilots`, `/enrol` | One programme, registration through Enrol | Confirmed | Implemented | Tested | Not deployed |
| ZEF-010 | P3 | `/#what-we-do`, `/about` | Focus areas differ from the approved list | Awaiting Confirmation | Pending | Not applicable | Not deployed |
| ZEF-011 | P3 | `/`, footer | Homepage tagline differs from the approved mission | Awaiting Confirmation | Pending | Not applicable | Not deployed |
| ZEF-012 | P3 | Site-wide copy | American “programs” remains outside the enrolment flow | Suggested | Pending | Not applicable | Not deployed |
| ZEF-013 | P3 | Unused components | Placeholder team, news, and campaign blocks are not on the homepage | Suggested | Pending | Not applicable | Not deployed |
| ZEF-014 | P3 | Footer | Social profile links are `#` | Awaiting Confirmation | Pending | Not applicable | Not deployed |
| ZEF-015 | P3 | Repository | `npm run lint` fails on the existing codebase | Suggested | Pending | Tested (failure reproduced) | Not deployed |

## ZEF-001 — Programme dates

- **Priority:** P1
- **Page or URL:** `/` and `/enrol`
- **Issue description:** The enrolment page had no commencement date or registration deadline.
- **Proposed or implemented correction:** Both dates are stored in `src/config/programmeRegistration.js` and rendered on the homepage hero and the enrolment page. Display format is `2 December 2026` and `28 November 2026`.
- **Responsible role:** IT Department
- **Content owner or approver:** Programme Owners, named owner To Be Assigned
- **Approval status:** Dates confirmed in the implementation brief. Programme name was not supplied.
- **Implementation status:** Implemented
- **Dependencies and blockers:** ZEF-008 for the programme name and other unpublished details.
- **Testing status:** Tested
- **Deployment status:** Not deployed
- **Completion date:** 30 October 2026 for the local code change
- **Notes:** The same constants feed `/enrol`, `/pilots`, and `src/config/seo.js`.

## ZEF-002 — Enrol route and spelling

- **Priority:** P2
- **Page or URL:** `/enrol`; legacy `/enroll`
- **Issue description:** Navigation, footer, metadata, and the public route used American “Enroll” and `/enroll`.
- **Proposed or implemented correction:** User-facing labels now say “Enrol”. The page title says “Enrolment Is Now Open”. `/enrol` is the route. `/enroll` redirects in the app and has a permanent Vercel redirect. Internal form field `formType: enroll_eoi` and the analytics event name were left unchanged.
- **Responsible role:** IT Department
- **Content owner or approver:** Product Manager, named owner To Be Assigned
- **Approval status:** Confirmed in the implementation brief
- **Implementation status:** Implemented
- **Dependencies and blockers:** Production redirect is not active until this `vercel.json` is deployed.
- **Testing status:** Tested
- **Deployment status:** Not deployed
- **Completion date:** 30 October 2026 for the local code change
- **Notes:** Query strings and hashes are preserved by the in-app redirect. Vercel preserves the query string on the HTTP redirect. Browsers keep the fragment across an HTTP redirect.

## ZEF-003 — Mission and vision on About

- **Priority:** P2
- **Page or URL:** `/about`
- **Issue description:** The About page heading said “Our Mission: Opportunity Through Empowerment” and the following paragraph was not the approved mission. No vision statement was shown.
- **Proposed or implemented correction:** The labeled mission and a new labeled vision use the supplied sentences verbatim, from `ZEF_MISSION` and `ZEF_VISION` in `src/config/branding.js`.
- **Responsible role:** IT Department
- **Content owner or approver:** Lead Coordinator
- **Approval status:** Wording supplied in the implementation brief
- **Implementation status:** Implemented
- **Dependencies and blockers:** None for this page. Homepage tagline is ZEF-011.
- **Testing status:** Tested
- **Deployment status:** Not deployed
- **Completion date:** 30 October 2026 for the local code change
- **Notes:** The following sentence about collaborating with partners was left in place. It is not labeled as the mission or vision.

## ZEF-004 — Event dates

- **Priority:** P3
- **Page or URL:** `/#community-events` and `/socialEvents`
- **Issue description:** Homepage events were dated 7–14 September 2026, 28 September 2026, and 2 October 2026. `/socialEvents` also showed 2 October 2026. Those dates were in the past and were presented as current activity.
- **Proposed or implemented correction:** The past dates were removed. Homepage activity titles and Microsoft Teams locations remain, with the statement that the activities have already taken place. The 2 October event on `/socialEvents` keeps its title and is labeled as already held. No replacement dates were added. Events that already said “TBD 2026” still say that.
- **Responsible role:** IT Department
- **Content owner or approver:** Programme Owners, named owner To Be Assigned
- **Approval status:** Confirmed
- **Implementation status:** Implemented
- **Dependencies and blockers:** None
- **Testing status:** Tested
- **Deployment status:** Not deployed
- **Completion date:** 30 October 2026 for the local code change
- **Notes:** Checked in source and in a local preview of `/` and `/socialEvents`. “TBD 2026” is not a past date, so it was left in place.

## ZEF-005 — Impact and capacity figures

- **Priority:** P3
- **Page or URL:** `/` impact section, `/about` (same impact component), `/LatestCause`
- **Issue description:** Public impact figures were previously flagged because the repository did not contain a separate evidence file.
- **Proposed or implemented correction:** Leadership confirmed the existing public impact figures and claims. The homepage cards, including 50+ and 1000+, and the `/LatestCause` enrolment and capacity figures were left unchanged.
- **Responsible role:** IT Department
- **Content owner or approver:** Lead Coordinator
- **Approval status:** Confirmed
- **Implementation status:** Implemented
- **Dependencies and blockers:** None
- **Testing status:** Tested
- **Deployment status:** Not deployed
- **Completion date:** 30 October 2026
- **Notes:** The “over 520 youth and partner responses” sentence on `/pilots` was also kept. An unused `Fourthsection` file still contains different percentages. It is not rendered.

## ZEF-006 — Testimonials

- **Priority:** P3
- **Page or URL:** `/about`
- **Issue description:** Three quotes are attributed to “Youth Program Participant”, “Community Mentor”, and “Program Partner”. They share one image. The component comment says to replace them with authentic testimonials.
- **Proposed or implemented correction:** Replace with approved quotes and names, or remove the carousel, after confirmation. Do not invent quotes.
- **Responsible role:** Relevant Department Leads
- **Content owner or approver:** Lead Coordinator, named owner To Be Assigned
- **Approval status:** Awaiting Confirmation
- **Implementation status:** Pending
- **Dependencies and blockers:** No approved testimonials in the repository.
- **Testing status:** Present on the About page source. Not changed.
- **Deployment status:** Not deployed
- **Completion date:** Not applicable
- **Notes:** These are not on the homepage. The homepage layout does not render this carousel. About does.

## ZEF-007 — Partnerships and supporters

- **Priority:** P3
- **Page or URL:** `/` and `/partnerships` (same component)
- **Issue description:** The page is labeled “Our Partners” and lists We Make Change as a volunteer ecosystem membership, Microsoft for Nonprofits as a technology programme, and Canva for Nonprofits as complimentary Canva Pro access. The data file says these are not funding or strategic sponsors, while the visible eyebrow says “Our Partners”.
- **Proposed or implemented correction:** Department leads should confirm each relationship and whether the public label should stay “Partners”.
- **Responsible role:** Relevant Department Leads
- **Content owner or approver:** Lead Coordinator, named owner To Be Assigned
- **Approval status:** Awaiting Confirmation
- **Implementation status:** Pending
- **Dependencies and blockers:** Relationship status is not verifiable from code alone.
- **Testing status:** Names reproduced in the homepage preview. Not changed.
- **Deployment status:** Not deployed
- **Completion date:** Not applicable
- **Notes:** Logos are remote or local static assets. Link targets were not opened during this audit.

## ZEF-008 — Unpublished programme details

- **Priority:** P1
- **Page or URL:** `/enrol`
- **Issue description:** A clock time for 2 December 2026 is not in the repository. Existing Pilots copy already describes the paths, audience, and outcomes, and that copy is now what both pages use.
- **Proposed or implemented correction:** Do not invent a start time. Add it only when Programme Owners supply it.
- **Responsible role:** Programme Owners
- **Content owner or approver:** Programme Owners, named owner To Be Assigned
- **Approval status:** Awaiting Confirmation
- **Implementation status:** Pending
- **Dependencies and blockers:** Start time was not included in the confirmed decisions.
- **Testing status:** Confirmed absent from `/enrol` and `/pilots`.
- **Deployment status:** Not deployed
- **Completion date:** Not applicable
- **Notes:** This is no longer a blocker for registration. See ZEF-009.

## ZEF-009 — One programme, one registration page

- **Priority:** P1
- **Page or URL:** `/pilots` and `/enrol`
- **Issue description:** The pages previously read as two programmes with two application forms.
- **Proposed or implemented correction:** Leadership confirmed they are the same programme. Both pages now use the same path names, Digital Skills Starter and Mentor Circles, and the same dates. `/pilots` describes the programme and its Enrol buttons go to `/enrol`. The on-page Pilots interest form is no longer rendered. `submitPilotInterest.js` and its webhook payload were not changed. The Enrol form still submits `formType: enroll_eoi`.
- **Responsible role:** IT Department
- **Content owner or approver:** Programme Owners
- **Approval status:** Confirmed
- **Implementation status:** Implemented
- **Dependencies and blockers:** ZEF-008 for a start time only
- **Testing status:** Tested
- **Deployment status:** Not deployed
- **Completion date:** 30 October 2026 for the local code change
- **Notes:** The 520 response claim remains on `/pilots`. No live application was submitted.

## ZEF-010 — Focus areas

- **Priority:** P3
- **Page or URL:** `/#what-we-do` and `/about`
- **Issue description:** Approved focus areas are Digital Skills, Entrepreneurship, Mentorship, Innovation, Technology, and Community Development. What We Do publishes four areas: Digital Skills Training, Entrepreneurship Development, Innovation & Solution Building, and Mentorship & Community. About uses Digital Skills, Entrepreneurship & Innovation, and Community Empowerment. Technology is not a separate public area.
- **Proposed or implemented correction:** Keep the current copy until Product Manager and Programme Owners approve a rewrite.
- **Responsible role:** Product Manager
- **Content owner or approver:** Lead Coordinator, named owner To Be Assigned
- **Approval status:** Awaiting Confirmation
- **Implementation status:** Pending
- **Dependencies and blockers:** No instruction to replace the whole What We Do section.
- **Testing status:** Copy reproduced in the homepage preview. Not changed.
- **Deployment status:** Not deployed
- **Completion date:** Not applicable
- **Notes:** Suggested alignment only.

## ZEF-011 — Homepage tagline

- **Priority:** P3
- **Page or URL:** `/` hero and footer
- **Issue description:** `ZEF_TAGLINE` is a longer statement about youth, underserved communities, digital skills, entrepreneurship, mentorship, and sustainable futures. It is not the approved mission sentence.
- **Proposed or implemented correction:** Decide whether the hero and footer should use the approved mission, keep the tagline, or show both.
- **Responsible role:** Product Manager
- **Content owner or approver:** Lead Coordinator, named owner To Be Assigned
- **Approval status:** Awaiting Confirmation
- **Implementation status:** Pending
- **Dependencies and blockers:** Replacing it would change the homepage and footer together.
- **Testing status:** Tagline still rendered on the homepage. Not changed.
- **Deployment status:** Not deployed
- **Completion date:** Not applicable
- **Notes:** The approved mission is on `/about` only.

## ZEF-012 — British spelling outside enrolment

- **Priority:** P3
- **Page or URL:** Navigation and most pages
- **Issue description:** Labels such as “Our Programs” and “programs” remain in American spelling outside the enrolment flow.
- **Proposed or implemented correction:** A site-wide “programme” pass needs an explicit content approval. It was not included in the route change.
- **Responsible role:** Product Manager
- **Content owner or approver:** Lead Coordinator, named owner To Be Assigned
- **Approval status:** Suggested, not approved
- **Implementation status:** Pending
- **Dependencies and blockers:** None technical. Content approval required.
- **Testing status:** Not applicable
- **Deployment status:** Not deployed
- **Completion date:** Not applicable
- **Notes:** Enrolment-page copy that was already being edited now uses “programmes” and “prioritise”.

## ZEF-013 — Unused placeholder sections

- **Priority:** P3
- **Page or URL:** Not routed
- **Issue description:** `Fourthsection`, `Sixthsection`, `Seventhsection`, and `Ninthsection` are not imported by the homepage. They contain placeholder campaign counts, “TBD” team names, a button with no destination, and duplicate “24 Nov” news cards.
- **Proposed or implemented correction:** Leave them unused. Do not mount them until the content is approved.
- **Responsible role:** IT Department
- **Content owner or approver:** Relevant Department Leads, named owner To Be Assigned
- **Approval status:** Suggested
- **Implementation status:** Pending
- **Dependencies and blockers:** None
- **Testing status:** Confirmed unused by import search. Not user-visible.
- **Deployment status:** Not deployed
- **Completion date:** Not applicable
- **Notes:** Not classified as a live-page defect.

## ZEF-014 — Footer social links

- **Priority:** P3
- **Page or URL:** Footer
- **Issue description:** Social links use `href="#"` with a code comment to replace them with official profile URLs.
- **Proposed or implemented correction:** Supply the official URLs, or remove the icons.
- **Responsible role:** Relevant Department Leads
- **Content owner or approver:** Relevant Department Leads, named owner To Be Assigned
- **Approval status:** Awaiting Confirmation
- **Implementation status:** Pending
- **Dependencies and blockers:** URLs are not in the repository.
- **Testing status:** Confirmed in source. Not changed.
- **Deployment status:** Not deployed
- **Completion date:** Not applicable
- **Notes:** Confirmed placeholder.

## ZEF-015 — Lint baseline

- **Priority:** P3
- **Page or URL:** Repository
- **Issue description:** `npm run lint` exits with a large existing failure set, including `react/prop-types` across UI components and errors in vendored scripts.
- **Proposed or implemented correction:** Fix the lint baseline as a separate task. Do not hide it by disabling rules only to pass this update.
- **Responsible role:** IT Department
- **Content owner or approver:** Product Manager, named owner To Be Assigned
- **Approval status:** Suggested
- **Implementation status:** Pending
- **Dependencies and blockers:** Unrelated to the enrolment copy.
- **Testing status:** Failure reproduced on 30 October 2026.
- **Deployment status:** Not deployed
- **Completion date:** Not applicable
- **Notes:** `ProgrammeDates.jsx` adds two `prop-types` findings of the same kind already reported for other components.
