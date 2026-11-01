import {
  PROGRAMME_COMMENCEMENT_DATE,
  PROGRAMME_COMMENCEMENT_ISO,
  PROGRAMME_REGISTRATION_DEADLINE,
  PROGRAMME_REGISTRATION_DEADLINE_ISO,
} from '../../config/programmeRegistration';

/**
 * Confirmed registration deadline and commencement date.
 * @param {{ className?: string, tone?: 'light' | 'dark', variant?: 'plain' | 'cards' }} props
 */
export function ProgrammeDates({
  className = '',
  tone = 'light',
  variant = 'plain',
}) {
  const isCards = variant === 'cards';
  const isDark = tone === 'dark';
  const labelClass = isCards
    ? isDark
      ? 'text-xs font-semibold uppercase tracking-[0.14em] text-green-300'
      : 'text-xs font-semibold uppercase tracking-[0.14em] text-slate-500'
    : isDark
      ? 'text-sm font-medium text-slate-300'
      : 'text-sm font-medium text-slate-500';
  const valueClass = isCards
    ? isDark
      ? 'mt-2 text-xl font-semibold text-white'
      : 'mt-2 text-xl font-semibold text-blue-950'
    : isDark
      ? 'mt-1 text-lg font-semibold text-white'
      : 'mt-1 text-lg font-semibold text-blue-950';
  const itemClass = isCards
    ? isDark
      ? 'rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-5'
      : 'rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm'
    : '';
  const listClass = isCards
    ? 'grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-1'
    : 'grid gap-4 text-left sm:grid-cols-2';

  return (
    <dl className={`${listClass} ${className}`.trim()}>
      <div className={itemClass}>
        <dt className={labelClass}>
          Registration deadline
        </dt>
        <dd className={valueClass}>
          <time dateTime={PROGRAMME_REGISTRATION_DEADLINE_ISO}>
            {PROGRAMME_REGISTRATION_DEADLINE}
          </time>
        </dd>
      </div>
      <div className={itemClass}>
        <dt className={labelClass}>
          Programme commences
        </dt>
        <dd className={valueClass}>
          <time dateTime={PROGRAMME_COMMENCEMENT_ISO}>
            {PROGRAMME_COMMENCEMENT_DATE}
          </time>
        </dd>
      </div>
    </dl>
  );
}
