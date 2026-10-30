import {
  PROGRAMME_COMMENCEMENT_DATE,
  PROGRAMME_COMMENCEMENT_ISO,
  PROGRAMME_REGISTRATION_DEADLINE,
  PROGRAMME_REGISTRATION_DEADLINE_ISO,
} from '../../config/programmeRegistration';

/**
 * Confirmed registration deadline and commencement date.
 * @param {{ className?: string, tone?: 'light' | 'dark' }} props
 */
export function ProgrammeDates({ className = '', tone = 'light' }) {
  const labelClass = tone === 'dark' ? 'text-slate-300' : 'text-slate-500';
  const valueClass = tone === 'dark' ? 'text-white' : 'text-blue-950';

  return (
    <dl className={`grid gap-4 text-left sm:grid-cols-2 ${className}`.trim()}>
      <div>
        <dt className={`text-sm font-medium ${labelClass}`}>
          Registration deadline
        </dt>
        <dd className={`mt-1 text-lg font-semibold ${valueClass}`}>
          <time dateTime={PROGRAMME_REGISTRATION_DEADLINE_ISO}>
            {PROGRAMME_REGISTRATION_DEADLINE}
          </time>
        </dd>
      </div>
      <div>
        <dt className={`text-sm font-medium ${labelClass}`}>
          Programme commences
        </dt>
        <dd className={`mt-1 text-lg font-semibold ${valueClass}`}>
          <time dateTime={PROGRAMME_COMMENCEMENT_ISO}>
            {PROGRAMME_COMMENCEMENT_DATE}
          </time>
        </dd>
      </div>
    </dl>
  );
}
