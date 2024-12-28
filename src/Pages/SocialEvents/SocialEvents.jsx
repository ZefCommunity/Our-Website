import React from 'react';
import CountUp from 'react-countup';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import img1 from '../../assets/img/gallery/socialEvents1.png';
import img2 from '../../assets/img/gallery/socialEvents2.png';
import img3 from '../../assets/img/gallery/socialEvents3.png';
import img4 from '../../assets/img/gallery/socialEvents2.png';
import img5 from '../../assets/img/gallery/socialEvents1.png';

function SocialEvents() {
  const countUpData = [
    { number: 6200, content: 'Donation' },
    { number: 80, content: 'Fund Raised' },
    { number: 256, content: 'Active Donors' },
    { number: 50, content: 'Awards Won' },
  ];

  const events = [
    {
      image: img1,
      title: 'Donation is Hope',
      time: '8:30 - 9:30am',
      date: '18/01/2021',
      location: 'Athens, Greece',
    },
    {
      image: img2,
      title: 'Helping Children',
      time: '8:30 - 9:30am',
      date: '18/01/2021',
      location: 'Athens, Greece',
    },
    {
      image: img3,
      title: 'A Hand for Children',
      time: '8:30 - 9:30am',
      date: '18/01/2021',
      location: 'Athens, Greece',
    },
    {
      image: img4,
      title: 'Unity is Power',
      time: '8:30 - 9:30am',
      date: '18/01/2021',
      location: 'Athens, Greece',
    },
    {
      image: img5,
      title: 'Game Changers',
      time: '8:30 - 9:30am',
      date: '18/01/2021',
      location: 'Athens, Greece',
    },
  ];

  return (
    <div>
      <div>
        {/* header */}
        <div className="flex items-center justify-center h-[300px]">
          <h2 className="text-5xl font-bold text-blue-950">Social Events</h2>
        </div>

        {/* ----Coutup--- */}
        <div className="bg-green-600 py-12 mb-20 ">
          <div className="container mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {countUpData.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div key={index} className="flex gap-1 items-center">
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={6}
                      className="text-5xl font-bold text-white"
                    />
                    <span className="text-3xl text-white">+</span>
                  </div>
                  <p className="text-lg text-white mt-2">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---social events ---- */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <span className="text-green-500 text-2xl font-semibold">
              What we are doing
            </span>
            <h2 className="text-4xl font-bold text-blue-950 w-[700px] mx-auto mt-10">
              We arrange many social events for charity donations
            </h2>
          </div>

          {/* ----Events---- */}
          <div className="w-[60%] mx-auto">
            {events.map((event, index) => (
              <div key={index} className="flex gap-[100px] items-center mb-14">
                <div>
                  <img src={event.image} alt="events images" loading="lazy" />
                </div>

                <div className="flex flex-col gap-[50px] text-gray-500">
                  <h2 className="text-3xl font-semibold text-blue-950">
                    {event.title}
                  </h2>
                  <div className="flex gap-[50px]">
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
    </div>
  );
}

export default SocialEvents;
