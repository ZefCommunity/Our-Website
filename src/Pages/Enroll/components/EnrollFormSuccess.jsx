import { FaCheck } from 'react-icons/fa';
import { CtaLink } from '../../../components/Homepage/shared/CtaLink';
import { ZEF_PILOT_APPLICANT_EMAIL } from '../../../config/branding';
import { ENROLL_SUCCESS_COPY } from '../enrollContent';

function EnrollFormSuccess() {
  return (
    <div
      role="status"
      aria-labelledby="enroll-success-title"
      className="opacity-0 animate-fade-in-up text-center"
      style={{ animationFillMode: 'forwards' }}
    >
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500 sm:h-20 sm:w-20">
        <FaCheck className="text-3xl sm:text-4xl" aria-hidden />
      </div>

      <h2
        id="enroll-success-title"
        tabIndex={-1}
        className="text-2xl font-semibold text-blue-950 sm:text-3xl outline-none"
      >
        {ENROLL_SUCCESS_COPY.title}
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
        {ENROLL_SUCCESS_COPY.message}
      </p>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
        {ENROLL_SUCCESS_COPY.detail}
      </p>

      <aside
        className="mx-auto mt-8 max-w-xl rounded-xl border border-amber-200/80 bg-amber-50/80 px-5 py-5 text-left sm:px-6"
        aria-labelledby="enroll-authenticity-title"
      >
        <h3
          id="enroll-authenticity-title"
          className="text-sm font-semibold text-blue-950 sm:text-base"
        >
          {ENROLL_SUCCESS_COPY.authenticityTitle}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {ENROLL_SUCCESS_COPY.authenticityBody}
        </p>
        <p className="mt-3">
          <a
            href={`mailto:${ZEF_PILOT_APPLICANT_EMAIL}`}
            className="font-semibold text-green-600 underline decoration-green-500/40 underline-offset-2 transition-colors hover:text-green-700"
          >
            {ZEF_PILOT_APPLICANT_EMAIL}
          </a>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {ENROLL_SUCCESS_COPY.authenticityFooter}
        </p>
      </aside>

      <div className="mt-8 flex justify-center">
        <CtaLink to="/" className="w-full sm:w-auto">
          {ENROLL_SUCCESS_COPY.homeCta}
        </CtaLink>
      </div>
    </div>
  );
}

export default EnrollFormSuccess;
