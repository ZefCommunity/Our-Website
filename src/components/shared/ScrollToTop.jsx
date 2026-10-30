import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets window scroll on route changes so short/lazy pages
 * (like /enrol while loading) do not open at the footer.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Hash targets are handled by ScrollToHash.
    if (hash) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
