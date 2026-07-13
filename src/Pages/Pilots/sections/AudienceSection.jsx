import { SectionHeader } from '../../../components/Homepage/shared/SectionHeader';
import { SectionShell } from '../../../components/Homepage/shared/SectionShell';
import { SECTION_CONTENT_GAP } from '../../../components/Homepage/shared/sectionUi';
import FeatureCard from '../components/FeatureCard';
import { AUDIENCE_ITEMS } from '../pilotsContent';

function AudienceSection() {
  return (
    <SectionShell
      ariaLabelledby="pilots-audience-title"
      className="relative overflow-hidden border-t border-slate-100 bg-gradient-to-b from-slate-50 via-white to-slate-50"
      belowFold
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

      <SectionHeader
        titleId="pilots-audience-title"
        eyebrow="Who it's for"
        title="Built for the people we heard from"
        description="Our pilots are designed around real barriers shared by youth, graduates, and entrepreneurs across Lagos."
      />

      <div
        className={`grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 ${SECTION_CONTENT_GAP}`}
        role="list"
      >
        {AUDIENCE_ITEMS.map((item, index) => (
          <FeatureCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}

export default AudienceSection;
