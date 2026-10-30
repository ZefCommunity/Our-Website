import CommunicationPolicyNotice from './components/CommunicationPolicyNotice';
import {
  AudienceSection,
  HeroSection,
  JoinStepsSection,
  PilotProgramsSection,
  PromiseSection,
  RegistrationSection,
} from './sections';

function Pilots() {
  return (
    <main className="bg-white">
      <HeroSection />
      <PromiseSection />
      <CommunicationPolicyNotice />
      <AudienceSection />
      <PilotProgramsSection />
      <JoinStepsSection />
      <RegistrationSection />
    </main>
  );
}

export default Pilots;
