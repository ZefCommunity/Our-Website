import { Link } from 'react-router-dom';
import { CTA_PRIMARY, CTA_SECONDARY } from './sectionUi';

export function CtaLink({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
}) {
  const base = variant === 'primary' ? CTA_PRIMARY : CTA_SECONDARY;
  const classes = `${base} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
