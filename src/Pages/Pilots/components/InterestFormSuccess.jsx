import { FaCheck } from 'react-icons/fa';
import { CtaLink } from '../../../components/Homepage/shared/CtaLink';
import { ZEF_PILOT_APPLICANT_EMAIL } from '../../../config/branding';
import { INTEREST_FORM_SUCCESS_COPY } from '../pilotsContent';

function InterestFormSuccess() {
  return (
    <div
      role="status"
      aria-labelledby="pilots-success-title"
      className="opacity-0 animate-fade-in-up text-center"
      style={{ animationFillMode: 'forwards' }}
    >
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500 sm:h-20 sm:w-20">
        <FaCheck className="text-3xl sm:text-4xl" aria-hidden />
      </div>

      <h2
        id="pilots-success-title"
        className="text-2xl font-semibold text-blue-950 sm:text-3xl"
      >
        {INTEREST_FORM_SUCCESS_COPY.title}
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
        {INTEREST_FORM_SUCCESS_COPY.messageBeforeEmail}{' '}
        <a
          href={`mailto:${ZEF_PILOT_APPLICANT_EMAIL}`}
          className="font-semibold text-green-600 underline decoration-green-500/40 underline-offset-2 transition-colors hover:text-green-700"
        >
          {ZEF_PILOT_APPLICANT_EMAIL}
        </a>
        .
      </p>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
        {INTEREST_FORM_SUCCESS_COPY.messageAfterEmail}
      </p>

      <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
        <CtaLink to="/" className="w-full sm:w-auto">
          {INTEREST_FORM_SUCCESS_COPY.homeCta}
        </CtaLink>
        <CtaLink to="/about" variant="secondary" className="w-full sm:w-auto">
          {INTEREST_FORM_SUCCESS_COPY.aboutCta}
        </CtaLink>
      </div>
    </div>
  );
}

export default InterestFormSuccess;
