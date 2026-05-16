import CountUp from 'react-countup';
import {
  FaBuilding,
  FaGlobeAmericas,
  FaSeedling,
  FaUsers,
} from 'react-icons/fa';
import { SectionHeader } from '../shared/SectionHeader';
import { SectionShell } from '../shared/SectionShell';
import { SECTION_CONTENT_GAP } from '../shared/sectionUi';
import {
  IMPACT_STATS,
  IMPACT_SUPPORTING_TEXT,
  IMPACT_TITLE,
} from './impactContent';

const statIcons = {
  volunteers: FaUsers,
  reach: FaGlobeAmericas,
  departments: FaBuilding,
  community: FaSeedling,
};

function ImpactStatCard({ stat, index }) {
  const Icon = statIcons[stat.id] ?? FaUsers;

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/95 p-6 shadow-xl shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:shadow-2xl opacity-0 animate-fade-in-up sm:p-8"
      style={{
        animationDelay: `${0.15 + index * 0.1}s`,
        animationFillMode: 'forwards',
      }}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-green-500/10 transition-transform duration-300 group-hover:scale-110"
        aria-hidden
      />

      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/15 text-green-500 transition-colors group-hover:bg-green-500 group-hover:text-white">
        <Icon className="text-xl" aria-hidden />
      </div>

      <div className="text-3xl font-bold leading-tight text-blue-900 sm:text-4xl">
        {stat.showCounter ? (
          <span className="inline-flex items-baseline gap-0.5">
            <CountUp
              end={stat.countEnd}
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />
            <span>{stat.suffix}</span>
          </span>
        ) : (
          <span>{stat.value}</span>
        )}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        {stat.label}
      </p>
    </article>
  );
}

const Tenthsection = () => {
  return (
    <SectionShell
      ariaLabelledby="impact-section-title"
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-[#051d4a] to-[#041636]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(14,203,125,0.15),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-20"
        aria-hidden
      />

      <div className="relative">
        <SectionHeader
          titleId="impact-section-title"
          eyebrow="Impact at a glance"
          title={IMPACT_TITLE}
          description={IMPACT_SUPPORTING_TEXT}
          theme="dark"
        />

        {/* TODO: Wire cards to analytics API / annual impact report data source */}
        <div
          className={`grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 ${SECTION_CONTENT_GAP}`}
          role="list"
        >
          {IMPACT_STATS.map((stat, index) => (
            <ImpactStatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
};

export default Tenthsection;
