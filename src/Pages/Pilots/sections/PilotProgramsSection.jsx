import { SectionHeader } from '../../../components/Homepage/shared/SectionHeader';
import { SectionShell } from '../../../components/Homepage/shared/SectionShell';
import { SECTION_CONTENT_GAP } from '../../../components/Homepage/shared/sectionUi';
import PilotProgramCard from '../components/PilotProgramCard';
import { PILOT_PROGRAMS } from '../pilotsContent';

function PilotProgramsSection() {
  return (
    <SectionShell
      ariaLabelledby="pilots-programs-title"
      className="bg-white"
      belowFold
    >
      <SectionHeader
        titleId="pilots-programs-title"
        eyebrow="Paths in this programme"
        title="Two paths, one registration"
        description="Digital Skills Starter and Mentor Circles sit inside this programme. Register once on the Enrol page."
      />

      <div
        className={`grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 ${SECTION_CONTENT_GAP}`}
      >
        {PILOT_PROGRAMS.map((program, index) => (
          <PilotProgramCard key={program.id} program={program} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}

export default PilotProgramsSection;
