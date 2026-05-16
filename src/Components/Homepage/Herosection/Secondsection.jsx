import {
  FaChartLine,
  FaHandsHelping,
  FaLaptopCode,
  FaRocket,
} from 'react-icons/fa';
import { SectionHeader } from '../shared/SectionHeader';
import { HOME_SECTIONS } from '../../../config/homepageSections';
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_GAP,
  SECTION_PY,
  SECTION_SCROLL_MARGIN,
} from '../shared/sectionUi';
import {
  PROGRAM_AREAS,
  WHAT_WE_DO_HEADLINE,
  WHAT_WE_DO_INTRO,
  WHAT_WE_DO_LABEL,
} from './whatWeDoContent';

const areaIcons = {
  laptop: FaLaptopCode,
  chart: FaChartLine,
  rocket: FaRocket,
  community: FaHandsHelping,
};

function ProgramCard({ area, index }) {
  const Icon = areaIcons[area.icon] ?? FaLaptopCode;

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 opacity-0 animate-fade-in-up sm:p-8"
      style={{
        animationDelay: `${0.12 + index * 0.1}s`,
        animationFillMode: 'forwards',
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 via-green-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-green-500/5 transition-transform duration-500 group-hover:scale-125"
        aria-hidden
      />

      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-500 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-green-500/25">
          <Icon className="text-2xl" aria-hidden />
        </div>
        <span
          className="font-mono text-xs font-semibold tracking-widest text-slate-400 transition-colors group-hover:text-green-500"
          aria-hidden
        >
          {area.index}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-blue-900 sm:text-[1.35rem]">
        {area.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
        {area.description}
      </p>

      <div
        className="mt-6 h-px w-full bg-slate-100 transition-colors duration-300 group-hover:bg-green-500/20"
        aria-hidden
      />
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-green-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden />
        Core program area
      </span>
    </article>
  );
}

const Secondsection = () => {
  return (
    <section
      id={HOME_SECTIONS.programs}
      className={`relative overflow-hidden border-t border-slate-100 bg-gradient-to-b from-white via-slate-50/80 to-slate-50 ${SECTION_PY} ${SECTION_SCROLL_MARGIN}`}
      aria-labelledby="what-we-do-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgb(7 35 102 / 0.06) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"
        aria-hidden
      />

      <div className={SECTION_CONTAINER}>
        <SectionHeader
          titleId="what-we-do-heading"
          eyebrow={WHAT_WE_DO_LABEL}
          title={WHAT_WE_DO_HEADLINE}
          description={WHAT_WE_DO_INTRO}
        />

        <div
          className="mx-auto mt-10 hidden max-w-2xl items-center justify-center gap-3 md:flex"
          aria-hidden
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
          <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Our Core Programs
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
        </div>

        <div
          className={`grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 ${SECTION_CONTENT_GAP}`}
        >
          {PROGRAM_AREAS.map((area, index) => (
            <ProgramCard key={area.id} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Secondsection;
