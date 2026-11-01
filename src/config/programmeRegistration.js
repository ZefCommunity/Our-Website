/**
 * Shared facts for the one public programme.
 * /enrol is the public registration page. /pilots is muted and redirects here.
 * Path titles match the existing Pilots copy. Start time is not published here.
 */

export const PROGRAMME_COMMENCEMENT_ISO = '2026-12-02';
export const PROGRAMME_REGISTRATION_DEADLINE_ISO = '2026-11-28';

export const PROGRAMME_COMMENCEMENT_DATE = '2 December 2026';
export const PROGRAMME_REGISTRATION_DEADLINE = '28 November 2026';

/** Paths already published on the Pilots page. One programme, not two intakes. */
export const PROGRAMME_PATH_TITLES = [
  'Digital Skills Starter',
  'Mentor Circles',
];

export const PROGRAMME_PATHS_LABEL = PROGRAMME_PATH_TITLES.join(' and ');

/** Former public programme page. Redirected to ENROL_PATH. */
export const PILOTS_PATH = '/pilots';

/** Public enrolment route (British spelling). */
export const ENROL_PATH = '/enrol';

/** Previous public path. Redirected permanently to ENROL_PATH. */
export const ENROL_LEGACY_PATH = '/enroll';

/**
 * Builds the enrolment URL, keeping an existing query string and hash.
 * @param {string} [search]
 * @param {string} [hash]
 * @returns {string}
 */
export function buildEnrolLocation(search = '', hash = '') {
  const query = search
    ? search.startsWith('?')
      ? search
      : `?${search}`
    : '';
  const fragment = hash ? (hash.startsWith('#') ? hash : `#${hash}`) : '';
  return `${ENROL_PATH}${query}${fragment}`;
}
