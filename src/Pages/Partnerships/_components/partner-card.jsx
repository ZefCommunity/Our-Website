import { OptimizedImage } from '@/components/shared/OptimizedImage';

export default function PartnerCard({
  logo,
  description,
  name,
  href,
  category,
  className = '',
  logoClassName = '',
  logoPanelClassName = 'bg-white',
}) {
  return (
    <article
      className={`flex h-full flex-col gap-4 rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 shadow-sm transition-shadow duration-200 hover:shadow-md motion-safe:transition-shadow sm:flex-row sm:items-center sm:gap-6 sm:p-5 ${className}`.trim()}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex h-24 w-full shrink-0 items-center justify-center rounded-lg px-4 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 sm:h-28 sm:w-40 ${logoPanelClassName}`.trim()}
        aria-label={`Visit ${name} (opens in a new tab)`}
      >
        <OptimizedImage
          src={logo}
          alt={`${name} logo`}
          className={`max-h-16 w-auto max-w-full object-contain ${logoClassName}`.trim()}
          sizes="160px"
        />
      </a>

      <div className="min-w-0 flex-1 text-left">
        {category ? (
          <p className="text-xs font-semibold uppercase tracking-wider text-green-600 sm:text-sm">
            {category}
          </p>
        ) : null}
        <h3 className="mt-1 text-lg font-semibold text-blue-900 sm:text-xl">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          >
            {name}
          </a>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}
