import { Navigate, useLocation } from 'react-router-dom';
import { getCanonicalRedirectTarget } from '../../config/canonical';

/**
 * Client-side redirects for duplicate URL shapes (trailing slash, index.html, casing).
 * Host-level www → apex redirect should be configured separately at deploy time.
 */
export function CanonicalRedirects() {
  const { pathname, search, hash } = useLocation();
  const target = getCanonicalRedirectTarget(pathname);

  if (!target) {
    return null;
  }

  return <Navigate to={`${target}${search}${hash}`} replace />;
}
