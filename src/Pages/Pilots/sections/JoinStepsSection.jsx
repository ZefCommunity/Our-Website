import { SectionHeader } from '../../../components/Homepage/shared/SectionHeader';
import { SectionShell } from '../../../components/Homepage/shared/SectionShell';
import { SECTION_CONTENT_GAP } from '../../../components/Homepage/shared/sectionUi';
import StepCard from '../components/StepCard';
import { JOIN_STEPS } from '../pilotsContent';

function JoinStepsSection() {
  return (
    <SectionShell
      ariaLabelledby="pilots-join-title"
      className="relative overflow-hidden border-t border-slate-100 bg-gradient-to-b from-white via-slate-50/80 to-slate-50"
      belowFold
    >
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"
        aria-hidden
      />

      <SectionHeader
        titleId="pilots-join-title"
        eyebrow="How to join"
        title="Three simple steps to get started"
        description="No lengthy application. Share your interest and our team will guide you from there."
      />

      <ol
        className={`relative grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6 ${SECTION_CONTENT_GAP}`}
      >
        {JOIN_STEPS.map((step, index) => (
          <StepCard
            key={step.id}
            step={step}
            index={index}
            isLast={index === JOIN_STEPS.length - 1}
          />
        ))}
      </ol>
    </SectionShell>
  );
}

export default JoinStepsSection;
