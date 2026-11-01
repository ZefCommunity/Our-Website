import {
  CTA_PRIMARY,
  SECTION_CONTAINER,
} from '../../../components/Homepage/shared/sectionUi';
import { ProgrammeDates } from '../../../components/programme/ProgrammeDates';
import { ENROLL_PAGE } from '../enrollContent';

function EnrollHero() {
  return (
    <section
      aria-labelledby="enroll-hero-title"
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-[#051d4a] to-[#041636]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_15%_0%,rgba(14,203,125,0.2),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-20"
        aria-hidden
      />

      <div className={`${SECTION_CONTAINER} relative pb-20 pt-14 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20`}>
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.7fr)] lg:gap-14">
          <div className="text-center lg:text-left">
            <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-green-400">
              {ENROLL_PAGE.eyebrow}
            </span>
            <h1
              id="enroll-hero-title"
              className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              {ENROLL_PAGE.heroTitle}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
              {ENROLL_PAGE.heroDescription}
            </p>
            <div className="mt-8">
              <a href="#enroll-form" className={CTA_PRIMARY}>
                {ENROLL_PAGE.heroCta}
              </a>
            </div>
          </div>
          <ProgrammeDates
            tone="dark"
            variant="cards"
            className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}

export default EnrollHero;
