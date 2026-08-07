import { useEffect } from 'react';
import EnrollHero from './sections/EnrollHero';
import EnrollFormSection from './sections/EnrollFormSection';

function Enroll() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <main>
      <EnrollHero />
      <EnrollFormSection />
    </main>
  );
}

export default Enroll;
