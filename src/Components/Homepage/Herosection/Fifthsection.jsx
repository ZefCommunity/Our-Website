import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import fifth1 from '../../../assets/fifth1.png';
import fifth2 from '../../../assets/fifth2.png';
import fifth3 from '../../../assets/fifth3.png';
import { OptimizedImage } from '../../shared/OptimizedImage';
import { HOME_SECTIONS } from '../../../config/homepageSections';
import { SectionHeader } from '../shared/SectionHeader';
import { SectionShell } from '../shared/SectionShell';
import { SECTION_CONTENT_GAP } from '../shared/sectionUi';

const Fifthsection = () => {
  const events = [
    {
      title: 'Youth Innovation Workshop',
      date: '7th – 14th September, 2026',
      location: 'Microsoft Teams',
      image: fifth1,
    },
    {
      title: 'Digital Skills Bootcamp',
      date: '28th September, 2026',
      location: 'Microsoft Teams',
      image: fifth2,
    },
    {
      title: 'Mentorship & Leadership Circle',
      date: '2nd October, 2026',
      location: 'Microsoft Teams',
      image: fifth3,
    },
  ];

  return (
    <SectionShell
      id={HOME_SECTIONS.events}
      className="border-t border-slate-100 bg-white"
      belowFold
    >
      <SectionHeader
        eyebrow="Community events"
        title="Connecting Youth Through Learning, Mentorship, and Innovation"
      />

      {/* TODO: Replace with live events from CMS or events API */}
      <ul className={`list-none space-y-4 sm:space-y-5 ${SECTION_CONTENT_GAP}`}>
        {events.map((event) => (
          <li key={event.title}>
            <article className="flex flex-col gap-4 rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 shadow-sm transition-shadow duration-200 hover:shadow-md motion-safe:transition-shadow sm:flex-row sm:items-center sm:gap-6 sm:p-5">
              <OptimizedImage
                src={event.image}
                alt=""
                className="h-24 w-full shrink-0 rounded-lg object-cover sm:h-24 sm:w-24"
                sizes="96px"
              />
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-blue-900 sm:text-xl">
                  {event.title}
                </h3>
                <div className="mt-2 space-y-2 text-sm text-slate-600 sm:text-base">
                  <div className="flex items-start gap-2 sm:items-center">
                    <FaCalendarAlt
                      className="mt-0.5 shrink-0 text-green-500 sm:mt-0"
                      aria-hidden
                    />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start gap-2 sm:items-center">
                    <FaMapMarkerAlt
                      className="mt-0.5 shrink-0 text-green-500 sm:mt-0"
                      aria-hidden
                    />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
};

export default Fifthsection;
