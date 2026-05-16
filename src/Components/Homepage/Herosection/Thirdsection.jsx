import img2 from '../../../assets/third1.png';
import img1 from '../../../assets/third2.png';
import { ZEF_SHORT } from '../../../config/branding';
import { HOME_SECTIONS } from '../../../config/homepageSections';
import { CtaLink } from '../shared/CtaLink';
import { SectionHeader } from '../shared/SectionHeader';
import { SectionShell } from '../shared/SectionShell';

const Thirdsection = () => {
  return (
    <SectionShell id={HOME_SECTIONS.about} className="bg-white">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
        <div className="w-full flex-1 lg:max-w-xl">
          <SectionHeader
            align="left"
            eyebrow={`About ${ZEF_SHORT}`}
            title="Building Skills, Leadership, and Opportunity"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:space-y-5 sm:text-lg">
            <p>
              Zurfte Empowercare Foundation (ZEF) is a nonprofit organization
              committed to empowering youth and underserved communities through
              digital skills development, entrepreneurship training, mentorship,
              and innovation-driven opportunities.
            </p>
            <p>
              We believe that access to skills, knowledge, and community can
              transform lives. Through structured learning, collaborative
              projects, and community engagement, we help individuals gain
              practical experience and build sustainable futures.
            </p>
          </div>
          <CtaLink to="/LatestCause" className="mt-8">
            Learn More About ZEF
          </CtaLink>
        </div>

        <div className="w-full flex-1 lg:flex lg:justify-end">
          {/* TODO: Replace with official ZEF team or program imagery */}
          <div className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none">
            <img
              src={img1}
              alt=""
              aria-hidden
              className="hidden md:absolute md:bottom-0 md:-left-32 md:block lg:-left-40"
            />
            <img
              src={img2}
              alt="ZEF community and youth programs"
              className="mx-auto w-full max-w-sm rounded-lg object-cover lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

export default Thirdsection;
