import React, { useState } from 'react';
import { FaCog, FaBrain, FaDesktop } from 'react-icons/fa';
import img1 from '../../assets/img/gallery/about2.png';
import img2 from '../../assets/img/gallery/about1.png';
import bgimg from '../../assets/img/gallery/testimonial.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function About() {
  const [activeIndex, setActiveIndex] = useState(null);
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

  const testimonials = [
    {
      id: 1,
      image: bgimg,
      name: 'John Doe',
      role: 'Software Engineer',
      testimonial:
        'This service has truly transformed the way we operate. Highly recommend it!',
    },
    {
      id: 2,
      image: bgimg,
      name: 'Jane Smith',
      role: 'Marketing Manager',
      testimonial:
        "Exceptional quality and attention to detail. I'm very impressed!",
    },
    {
      id: 3,
      image: bgimg,
      name: 'Alice Johnson',
      role: 'Product Designer',
      testimonial:
        'A seamless experience from start to finish. Will use again for sure!',
    },
  ];
  return (
    <div>
      <div className="w-[90%] mx-auto">
        {/* Header */}
        {/* <div className="flex items-center justify-center h-[300px]">
          <h2 className="text-5xl font-bold text-blue-950">About Us</h2>
        </div> */}
        {/* services */}
        <div>
          <div className="text-center my-20">
            <span className="text-green-500 text-2xl font-semibold">
              What we are doing
            </span>
            <h2 className="text-5xl font-semibold text-blue-950 w-[600px] mx-auto mt-10">
              We Are In A Mission To Help The Helpless
            </h2>
          </div>
          {/* cards */}
          <div>
            <div className="flex justify-center gap-8 bg-gray-100 py-10 px-4">
              {cards.map((card, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)} // Set active card on hover
                  onMouseLeave={() => setActiveIndex(null)} // Remove active card on mouse leave
                  className={`rounded-lg p-6 text-center shadow-lg h-[500px] flex flex-col items-center justify-center transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-gray-800'
                  }`}
                >
                  <div
                    className={`flex justify-center items-center w-16 h-16 rounded-full mx-auto mb-4 transition-all duration-300 ${
                      activeIndex === index
                        ? 'bg-white text-green-500'
                        : 'bg-green-500 text-white'
                    }`}
                  >
                    <div className="text-2xl ">{card.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                  <p className="text-sm">{card.description}</p>
                </div>
              ))}
            </div>
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
          <div className="bg-gray-100 py-10 mb-14 px-4">
            <h2 className="text-center text-2xl font-bold mb-8">
              What Our Clients Say
            </h2>
            <Swiper
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              className="max-w-lg mx-auto"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="text-center">
                    <div className="relative">
                      <FaQuoteLeft className="absolute left-0 text-green-500 text-3xl" />
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-32 h-32 rounded-full mx-auto"
                      />
                      <FaQuoteRight className="absolute right-0 text-green-500 text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold mt-6">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.role}</p>
                    <p className="italic text-gray-800 mt-4">
                      {item.testimonial}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
