import React from 'react';
import backgroundImage from '../../../assets/tenth1.png';
import CountUp from 'react-countup';

const Tenthsection = () => {
  const countUpData = [
    { number: 6200, content: 'Donation' },
    { number: 80, content: 'Fund Raised' },
    { number: 256, content: 'Active Donors' },
    { number: 50, content: 'Awards Won' },
  ];
  return (
    <section
      className="relative bg-green-500 text-white py-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
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
    </section>
  );
};

export default Tenthsection;
