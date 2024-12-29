import React from 'react';
import HeroImage from '../../../assets/image.png';

const HeroSection = () => {
  return (
    <div className="relative mt-10 lg:mt-0 flex flex-col md:flex-row items-center md:min-h-screen px-8 md:px-20">
      {/* Background Image */}
      <img
        src={HeroImage}
        alt="Hero Background"
        className="hidden lg:block lg:absolute  inset-0 w-full h-full object-cover"
      />

      {/* Content aligned to the left */}
      <div className="relative z-10 max-w-xl space-y-6">
        <h1 className="text-5xl font-bold text-blue-900 leading-tight">
          Our Helping <br /> To The World.
        </h1>
        <p className="text-gray-600">
          Onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut bore
          et dolore magnt, sed do eiusmod.
        </p>
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded-md font-medium hover:bg-green-600">
            Donate
          </button>
          <div className="flex items-center space-x-2">
            <div className="bg-green-100 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l9-7 9 7M4 10v11h16V10M12 15h.01M17 10h.01M7 10h.01"
                />
              </svg>
            </div>
            <span className="text-blue-900 font-medium">+12 1325 41</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
