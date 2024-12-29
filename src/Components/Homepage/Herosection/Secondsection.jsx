import React from 'react';
import { FaCog, FaBrain, FaDesktop } from 'react-icons/fa';
const Secondsection = () => {
  const cards = [
    {
      icon: <FaDesktop className="text-4xl" />,
      title: 'Clean Water',
      description:
        'The sea freight service has grown considerably in recent years. We spend time getting to know your processes too.',
    },
    {
      icon: <FaBrain className="text-4xl" />,
      title: 'Clean Water',
      description:
        'The sea freight service has grown considerably in recent years. We spend time getting to know your processes too.',
    },
    {
      icon: <FaCog className="text-4xl" />,
      title: 'Clean Water',
      description:
        'The sea freight service has grown considerably in recent years. We spend time getting to know your processes too.',
    },
  ];

  return (
    <div className=" bg-gray-50">
      <div className="w-[90%] mx-auto py-16 bg-gray-50">
        {/* Title Section */}
        <div className="text-center my-10 md:my-20">
          <span className="text-green-500 text-2xl font-semibold">
            What we are doing
          </span>
          <h2 className="md:text-5xl text-2xl font-semibold text-blue-950 md:w-[600px] md:mx-auto mt-10">
            We Are In A Mission To Help The Helpless
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-8 md:px-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative h-96 rounded-lg  overflow-hidden shadow-lg ${
                index === 1 ? 'bg-green-500 text-white' : 'bg-white group'
              }`}
            >
              {/* Hover Overlay for Left and Right Cards */}
              {index !== 1 && (
                <div className="absolute inset-0 bg-green-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              )}

              {/* Card Content */}
              <div
                className={`relative flex items-center justify-center flex-col  z-10 p-6 transition-colors duration-500 ${
                  index === 1
                    ? 'text-white'
                    : 'text-blue-900 group-hover:text-white'
                }`}
              >
                {/* Icon */}
                <div className="flex justify-center  items-center mb-4">
                  <div
                    className={`p-4 rounded-full ${
                      index === 1 ? 'bg-blue-950' : 'bg-green-100'
                    }`}
                  >
                    {card.icon}
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xl  font-bold mb-2 mt-10">{card.title}</h4>

                {/* Description */}
                <p className="text-sm text-center">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Secondsection;
