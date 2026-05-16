import fifth1 from '../../../assets/fifth1.png';
import fifth2 from '../../../assets/fifth2.png';
import fifth3 from '../../../assets/fifth3.png';

const Fifthsection = () => {
  const events = [
    {
      title: 'Youth Innovation Workshop',
      time: '9:00 AM - 12:00 PM',
      date: 'TBD 2026',
      location: 'Community venue � details coming soon',
      image: fifth1,
    },
    {
      title: 'Digital Skills Bootcamp',
      time: '10:00 AM - 4:00 PM',
      date: 'TBD 2026',
      location: 'Community venue � details coming soon',
      image: fifth2,
    },
    {
      title: 'Mentorship & Leadership Circle',
      time: '2:00 PM - 5:00 PM',
      date: 'TBD 2026',
      location: 'Community venue � details coming soon',
      image: fifth3,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-[90%] md:w-[70%] mx-auto px-4">
        <div className="text-center my-10 md:my-20">
          <span className="text-green-500 text-2xl font-semibold">
            Community events
          </span>
          <h2 className="text-2xl md:text-5xl font-semibold text-blue-950 md:w-[700px] mx-auto mt-10">
            Connecting Youth Through Learning, Mentorship, and Innovation
          </h2>
        </div>
        {/* TODO: Replace with live events from CMS or events API */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-center space-x-6 bg-gray-50 p-4 rounded-lg shadow"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold text-blue-900">
                  {event.title}
                </h3>
                <p className="text-gray-600">
                  <span className="block">{event.time}</span>
                  <span className="block">{event.date}</span>
                  <span className="block">{event.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fifthsection;

