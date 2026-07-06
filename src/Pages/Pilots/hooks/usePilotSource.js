import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const PILOT_SOURCE_DEFAULT = 'direct';

/**
 * Reads ?source= from the URL for hidden form attribution.
 * Falls back to "direct" when no query parameter is present.
 *
 * Examples:
 *   /pilots?source=community-leaders → community-leaders
 *   /pilots?source=instagram        → instagram
 *   /pilots                         → direct
 *
 * TODO: Persist source to sessionStorage on first visit for multi-page journeys.
 * TODO: Emit analytics event when source is captured (e.g. pilot_source_view).
 */
export function usePilotSource() {
  const [searchParams] = useSearchParams();

  return useMemo(() => {
    const source = searchParams.get('source')?.trim();
    return source || PILOT_SOURCE_DEFAULT;
  }, [searchParams]);
}
