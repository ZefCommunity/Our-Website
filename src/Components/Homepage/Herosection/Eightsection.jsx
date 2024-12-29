import React from 'react';
import bgimg from '../../../assets/eight1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Eightsection = () => {
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
