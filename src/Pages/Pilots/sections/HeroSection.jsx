import { CtaLink } from '../../../components/Homepage/shared/CtaLink';
import { SECTION_CONTAINER } from '../../../components/Homepage/shared/sectionUi';
import { ProgrammeDates } from '../../../components/programme/ProgrammeDates';
import { ENROL_PATH } from '../../../config/programmeRegistration';
import { PILOTS_PAGE } from '../pilotsContent';

function HeroSection() {
  return (
    <section
      aria-labelledby="pilots-hero-title"
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-[#051d4a] to-[#041636]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(14,203,125,0.18),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-20"
        aria-hidden
      />

      <div className={`${SECTION_CONTAINER} relative py-16 sm:py-20 lg:py-28`}>
        <div className="mx-auto max-w-3xl text-center opacity-0 animate-fade-in-up">
          <span className="block text-lg font-semibold tracking-wide text-green-400 sm:text-xl">
            {PILOTS_PAGE.eyebrow}
          </span>
          <h1
            id="pilots-hero-title"
            className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            {PILOTS_PAGE.heroTitle}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            {PILOTS_PAGE.heroSubtitle}
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            {PILOTS_PAGE.registrationNote}
          </p>
          <ProgrammeDates tone="dark" className="mx-auto mt-8 max-w-xl" />
          <div className="mt-10">
            <CtaLink to={ENROL_PATH}>{PILOTS_PAGE.heroCta}</CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
