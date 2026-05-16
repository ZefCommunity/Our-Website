import HeroImage from '../../../assets/image.png';
import { ZEF_DISCORD_URL, ZEF_TAGLINE } from '../../../config/branding';
import { CtaLink } from '../shared/CtaLink';
import { SECTION_CONTAINER } from '../shared/sectionUi';

const Firstsection = () => {
  return (
    <section className="relative mt-10 flex flex-col justify-center lg:mt-0 lg:min-h-[calc(100vh-5rem)]">
      {/* TODO: Replace hero image with official ZEF photography */}
      <img
        src={HeroImage}
        alt="Zurfte Empowercare Foundation youth empowerment and community innovation"
        className="hidden lg:absolute lg:inset-0 lg:block lg:h-full lg:w-full lg:object-cover"
      />

      <div
        className={`${SECTION_CONTAINER} relative z-10 py-12 sm:py-16 lg:py-20`}
      >
        <div className="max-w-2xl space-y-6">
          <h1 className="text-3xl font-bold leading-tight text-blue-900 sm:text-4xl lg:text-5xl">
            Creating Pathways to Progress Through Skills, Innovation &amp;
            Community.
          </h1>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            {ZEF_TAGLINE}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4">
            <CtaLink to="/LatestCause">Explore Our Programs</CtaLink>
            <CtaLink href={ZEF_DISCORD_URL} variant="secondary">
              Become a Volunteer
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Firstsection;
