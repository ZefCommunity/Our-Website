import React, { useState } from 'react';
import { FaCog, FaBrain, FaDesktop } from 'react-icons/fa';
import img1 from '../../assets/img/gallery/about2.png';
import img2 from '../../assets/img/gallery/about1.png';
import Eightsection from '../../Components/Homepage/Herosection/Eightsection';
import Tenthsection from '../../Components/Homepage/Herosection/Tenthsection';

function About() {
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
      isActive: true, // Highlights this card
    },
    {
      icon: <FaCog className="text-4xl" />,
      title: 'Clean Water',
      description:
        'The sea freight service has grown considerably in recent years. We spend time getting to know your processes too.',
    },
  ];

  return (
    <div>
      <div className="w-[90%] mx-auto">
        <div>
          <div className="text-center my-10 md:my-20">
            <span className="text-green-500 text-2xl font-semibold">
              What we are doing
            </span>
            <h2 className="text-2xl md:text-2xl font-semibold text-blue-950 md:w-[600px] mx-auto mt-10">
              We Are In A Mission To Help The Helpless
            </h2>
          </div>
          {/* cards */}
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
                  <h4 className="text-xl  font-bold mb-2 mt-10">
                    {card.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-center">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* explore more */}
          <div className="my-32 w-full">
            <div className="flex gap-10 justify-between  items-center">
              <div className="w-[600px]  flex-col gap-6">
                <div className="">
                  <div className="">
                    <span className="text-green-500 text-2xl font-semibold">
                      About our foundation
                    </span>
                    <h2 className="text-5xl font-semibold text-blue-950 mx-auto mt-10">
                      We Are In A Mission To Help Helpless
                    </h2>
                  </div>
                  <p className="py-7">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,mod
                    tempor incididunt ut labore et dolore magna aliqua. Utnixm,
                    quis nostrud exercitation ullamc.
                  </p>
                  <p className="py-7">
                    Lorem ipvsum dolor sit amext, consectetur adipisicing elit,
                    smod tempor incididunt ut labore et dolore.
                  </p>
                </div>
                <a
                  href="about.html"
                  className="bg-green-500 w-max py-2 px-5 font-bold rounded-md hover:bg-green-700 text-blue-950"
                >
                  What We Do
                </a>
              </div>
              <div className="">
                <div className="relative">
                  <div className="">
                    <img
                      src={img1}
                      alt=""
                      className="absolute bottom-0 -left-48"
                    />
                  </div>
                  <div className="">
                    <img src={img2} alt="" className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonials */}
          <Eightsection />
        </div>
      </div>
      <Tenthsection />
    </div>
  );
}

export default About;
