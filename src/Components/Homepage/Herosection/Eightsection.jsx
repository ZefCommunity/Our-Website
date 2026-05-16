import React from 'react';
import bgimg from '../../../assets/eight1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Eightsection = () => {
  // TODO: Replace with authentic ZEF participant and partner testimonials
  const testimonials = [
    {
      id: 1,
      image: bgimg,
      name: 'Youth Program Participant',
      role: 'Digital Skills Graduate',
      testimonial:
        'ZEF helped me build confidence and practical skills to pursue opportunities in tech and entrepreneurship.',
    },
    {
      id: 2,
      image: bgimg,
      name: 'Community Mentor',
      role: 'Volunteer Leader',
      testimonial:
        'The foundation creates real spaces for mentorship, innovation, and community-driven growth.',
    },
    {
      id: 3,
      image: bgimg,
      name: 'Program Partner',
      role: 'Community Organization',
      testimonial:
        'Partnering with ZEF amplifies our impact and opens doors for young people in underserved communities.',
    },
  ];

  return (
    <div className="bg-gray-100 py-10 mb-14 px-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="max-w-lg mx-auto"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="text-center shadow-lg">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 rounded-full mx-auto"
                />
              </div>
              <h3 className="text-xl  mt-6 font-semibold text-blue-900">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600">{item.role}</p>
              <p className="text-gray-600 italic max-w-2xl mx-auto text-lg">
                {item.testimonial}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Eightsection;

