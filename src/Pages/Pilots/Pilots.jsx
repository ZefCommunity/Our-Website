import CommunicationPolicyNotice from './components/CommunicationPolicyNotice';
import {
  AudienceSection,
  HeroSection,
  InterestFormSection,
  JoinStepsSection,
  PilotProgramsSection,
  PromiseSection,
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
      <InterestFormSection />
    </main>
  );
}

export default Pilots;
