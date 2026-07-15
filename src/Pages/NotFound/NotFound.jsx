import { CtaLink } from '../../components/Homepage/shared/CtaLink';
import { SectionHeader } from '../../components/Homepage/shared/SectionHeader';
import { SectionShell } from '../../components/Homepage/shared/SectionShell';
import {
  SECTION_CONTAINER,
  SECTION_CONTENT_GAP,
} from '../../components/Homepage/shared/sectionUi';

const QUICK_LINKS = [
  { label: 'About ZEF', to: '/about' },
  { label: 'Our Programs', to: '/LatestCause' },
  { label: 'Pilot Programs', to: '/pilots' },
  { label: 'Contact Us', to: '/contact' },
];

function NotFound() {
  return (
    <main>
      <section
        aria-labelledby="not-found-title"
        className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-[#051d4a] to-[#041636]"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(14,203,125,0.18),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-20"
          aria-hidden
        />

        <div className={`${SECTION_CONTAINER} relative py-16 sm:py-20 lg:py-28`}>
          <div className="mx-auto max-w-3xl text-center opacity-0 animate-fade-in-up">
            <p className="text-6xl font-semibold tracking-tight text-green-400 sm:text-7xl lg:text-8xl">
              404
            </p>
            <h1
              id="not-found-title"
              className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              Page not found
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
              The page you are looking for may have been moved, renamed, or no
              longer exists. Let us help you get back on track.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CtaLink to="/">Return to homepage</CtaLink>
              <CtaLink to="/contact" variant="secondary" className="border-white text-white hover:bg-white hover:text-blue-950">
                Contact us
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      <SectionShell className="bg-white">
        <SectionHeader
          eyebrow="Need help finding something?"
          title="Explore our site"
          description="Browse these popular pages or reach out if you need assistance."
        />
        <ul
          className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${SECTION_CONTENT_GAP}`}
        >
          {QUICK_LINKS.map((link) => (
            <li key={link.to}>
              <CtaLink
                to={link.to}
                variant="secondary"
                className="w-full"
              >
                {link.label}
              </CtaLink>
            </li>
          ))}
        </ul>
      </SectionShell>
    </main>
  );
}

export default NotFound;
