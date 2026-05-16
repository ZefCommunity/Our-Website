import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import img1 from '../../assets/img/gallery/socialEvents1.png';
import img2 from '../../assets/img/gallery/socialEvents2.png';
import img3 from '../../assets/img/gallery/socialEvents3.png';
import img4 from '../../assets/img/gallery/socialEvents2.png';
import img5 from '../../assets/img/gallery/socialEvents1.png';
import Tenthsection from '../../Components/Homepage/Herosection/Tenthsection';

// TODO: Replace with live events from CMS or events API
function SocialEvents() {
  const events = [
    {
      image: img1,
      title: 'Youth Innovation Workshop',
      time: '9:00 AM - 12:00 PM',
      date: 'TBD 2026',
      location: 'Community venue — details coming soon',
    },
    {
      image: img2,
      title: 'Digital Skills Bootcamp',
      time: '10:00 AM - 4:00 PM',
      date: 'TBD 2026',
      location: 'Community venue — details coming soon',
    },
    {
      image: img3,
      title: 'Mentorship & Leadership Circle',
      time: '2:00 PM - 5:00 PM',
      date: 'TBD 2026',
      location: 'Community venue — details coming soon',
    },
    {
      image: img4,
      title: 'Entrepreneurship Pitch Day',
      time: '1:00 PM - 4:00 PM',
      date: 'TBD 2026',
      location: 'Community venue — details coming soon',
    },
    {
      image: img5,
      title: 'Community Empowerment Forum',
      time: '10:00 AM - 1:00 PM',
      date: 'TBD 2026',
      location: 'Community venue — details coming soon',
    },
  ];

  return (
    <main className="bg-white">
      <div>
        <header className="flex h-[220px] items-center justify-center sm:h-[280px]">
          <h1 className="text-center text-3xl font-bold text-blue-950 sm:text-4xl md:text-5xl">
            Community Events
          </h1>
        </header>

        <Tenthsection />

        <div className="mb-32 w-[90%]">
          <div className="text-center my-10 md:my-20">
            <span className="text-green-500 text-2xl font-semibold">
              What we do
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-blue-950 md:w-[700px] mx-auto mt-10">
              Events That Connect Youth, Mentors, and Communities
            </h2>
          </div>

          <div className="w-[90%] md:w-[60%] mx-auto">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex gap-[50px] md:gap-[100px] items-center mb-14"
              >
                <div>
                  <img src={event.image} alt={event.title} loading="lazy" />
                </div>

                <div className="flex flex-col md:gap-[50px] gap-[10px] text-gray-500">
                  <h2 className="text-xl font-semibold text-blue-950">
                    {event.title}
                  </h2>
                  <div className="flex flex-col md:flex-row gap-[10px] md:gap-[50px]">
                    <div className="flex gap-2 items-center">
                      <FaClock />
                      <p>{event.time}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaCalendarAlt />
                      <p>{event.date}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaMapMarkerAlt />
                      <p>{event.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default SocialEvents;
