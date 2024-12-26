import React from "react";
import third1 from "../../../assets/third1.png";
import third2 from "../../../assets/third2.png";

const Thirdsection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 px-6 space-y-6">
          <h4 className="text-green-500 text-lg font-semibold">
            About Our Foundation
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            We Are In A Mission To Help Helpless
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, mod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim, quis nostrud
            exercitation ullamco.
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, smod
            tempor incididunt ut labore et dolore.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition duration-300">
            About Us
          </button>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 px-6 relative flex items-center justify-center">
          {/* Top Image */}
          <div className="w-64 h-72 md:w-80 md:h-96 overflow-hidden shadow-lg">
            <img
              src={third1}
              alt="Group of happy children"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Bottom Image */}
          <div className="absolute top-28 left-12 md:top-32 md:left-16 w-52 h-60 md:w-64 md:h-80 overflow-hidden shadow-lg hidden md:block">
            <img
              src={third2}
              alt="Child in need"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdsection;
