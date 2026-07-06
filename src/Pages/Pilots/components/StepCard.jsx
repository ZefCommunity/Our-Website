import { ZEF_PILOT_APPLICANT_EMAIL } from '../../../config/branding';

function StepCard({ step, index, isLast }) {
  return (
    <li className="relative flex flex-1 flex-col">
      <article
        className="relative z-10 flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:shadow-xl opacity-0 animate-fade-in-up sm:p-8"
        style={{
          animationDelay: `${0.15 + index * 0.1}s`,
          animationFillMode: 'forwards',
        }}
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-lg font-bold text-white shadow-md shadow-blue-950/20">
          {step.step}
        </div>
        <h3 className="text-lg font-semibold text-blue-950 sm:text-xl">
          {step.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          {step.description}
          {step.showOfficialEmail && (
            <>
              {' '}
              <a
                href={`mailto:${ZEF_PILOT_APPLICANT_EMAIL}`}
                className="font-semibold text-green-600 underline decoration-green-500/40 underline-offset-2 transition-colors hover:text-green-700"
              >
                {ZEF_PILOT_APPLICANT_EMAIL}
              </a>
              .
            </>
          )}
        </p>
      </article>

      {!isLast && (
        <div
          className="pointer-events-none absolute left-1/2 top-6 hidden h-0.5 w-full bg-gradient-to-r from-green-500/60 to-green-500/20 lg:block"
          style={{ transform: 'translateX(50%)' }}
          aria-hidden
        />
      )}
    </li>
  );
}

export default StepCard;
