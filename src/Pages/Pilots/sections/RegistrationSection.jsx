import { CtaLink } from '../../../components/Homepage/shared/CtaLink';
import { SectionHeader } from '../../../components/Homepage/shared/SectionHeader';
import { SectionShell } from '../../../components/Homepage/shared/SectionShell';
import { ProgrammeDates } from '../../../components/programme/ProgrammeDates';
import { ENROL_PATH } from '../../../config/programmeRegistration';
import { PILOTS_PAGE } from '../pilotsContent';

/**
 * Public registration handoff. The previous on-page interest form remains in
 * InterestFormSection.jsx and still posts to its existing webhook if mounted.
 * It is not rendered, so visitors are not offered a second application.
 */
function RegistrationSection() {
  return (
    <SectionShell
      id="register"
      ariaLabelledby="pilots-register-title"
      className="border-t border-slate-100 bg-white"
      belowFold
    >
      <SectionHeader
        titleId="pilots-register-title"
        eyebrow="Registration"
        title="Continue on the Enrol page"
        description={PILOTS_PAGE.registrationNote}
      />
      <ProgrammeDates className="mx-auto mt-8 max-w-3xl" />
      <div className="mt-10 flex justify-center">
        <CtaLink to={ENROL_PATH}>{PILOTS_PAGE.heroCta}</CtaLink>
      </div>
    </SectionShell>
  );
}

export default RegistrationSection;
