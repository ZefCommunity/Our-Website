import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPagePath, trackPageView } from './gtag';
import { isAnalyticsEnabled } from '../../config/analytics';

/**
 * Sends a GA4 page_view when the React Router location changes.
 * Mount inside <Router>, after <PageSEO />, so document.title is up to date.
 *
 * Tracks all primary routes, including:
 * Home (/), About, Programs (/LatestCause), Volunteer, Community (/socialEvents),
 * Partnerships, and Contact — plus hash-only homepage section changes.
 */
export function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!isAnalyticsEnabled()) {
      return;
    }

    const pagePath = getPagePath(location);

    trackPageView({
      page_path: pagePath,
      page_location: `${window.location.origin}${pagePath}`,
      page_title: document.title,
    });
  }, [location.pathname, location.search, location.hash]);

  return null;
}
