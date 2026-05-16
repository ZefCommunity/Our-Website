import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to a homepage section when the URL contains a hash (e.g. /#about-zef). */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timeoutId;

    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (attempts < 12) {
        attempts += 1;
        timeoutId = window.setTimeout(scrollToTarget, 50);
      }
    };

    scrollToTarget();
    return () => window.clearTimeout(timeoutId);
  }, [pathname, hash]);

  return null;
}
