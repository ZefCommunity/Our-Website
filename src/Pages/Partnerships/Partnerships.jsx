import PartnerSection from './_components/partner_section';
import { PARTNERS_DATA } from './data';
import { SectionHeader } from '@/components/Homepage/shared/SectionHeader';
import { SectionShell } from '@/components/Homepage/shared/SectionShell';
import { SECTION_CONTENT_GAP } from '@/components/Homepage/shared/sectionUi';
import { HOME_SECTIONS } from '@/config/homepageSections';

const INTRO =
  'Zurfte Empowercare Foundation (ZEF) is supported by a growing ecosystem of organizations, platforms, and technology providers that help us strengthen our operations, connect with skilled volunteers, and expand our impact.';

/** Ecosystem & support network — used on the homepage and at /partnerships */
function Partnerships() {
  return (
    <SectionShell
      id={HOME_SECTIONS.ecosystem}
      className="border-t border-slate-100 bg-white"
      belowFold
      ariaLabelledby="ecosystem-heading"
    >
      <SectionHeader
        titleId="ecosystem-heading"
        eyebrow="Our Partners"
        title="Our Ecosystem & Support Network"
        description={INTRO}
      />

      <div className={SECTION_CONTENT_GAP}>
        <PartnerSection data={PARTNERS_DATA} />
      </div>
    </SectionShell>
  );
}

export default Partnerships;
