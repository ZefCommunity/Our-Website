import { useEffect } from 'react';
import { initGA } from './gtag';
import { PageViewTracker } from './PageViewTracker';
import { isAnalyticsEnabled } from '../../config/analytics';

/**
 * GA4 entry point for the SPA: initializes gtag once, then tracks route changes.
 * Render inside <BrowserRouter> (see App.jsx).
 */
export function Analytics() {
  useEffect(() => {
    if (isAnalyticsEnabled()) {
      initGA();
    }
  }, []);

  return <PageViewTracker />;
}
