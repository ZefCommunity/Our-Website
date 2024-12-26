import React from 'react';
import ninth1 from "../../../assets/ninth1.png"
import ninth2 from "../../../assets/ninth2.png"

const Ninthsection = () => {
  return (
    <section className="bg-blue-50 py-10">
      <div className="text-center mb-8">
        <h3 className="text-green-600 text-base font-medium">Our Recent Blog</h3>
        <h2 className="text-4xl font-bold text-blue-900 mt-2">Latest News From Our Recent Blog</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {/* Blog Post 1 */}
        <div className="bg-white shadow-md overflow-hidden group">
          <div className="relative overflow-hidden">
            <img
              src={ninth1} // Replace with the left image source
              alt="Blog Post 1"
              className="w-full h-72 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute top-4 left-4 bg-green-600 text-white text-sm font-bold px-3 py-1 block uppercase">24 Nov</span>
          </div>
          <div className="p-6">
            <h4 className="mt-4 text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-green-600">Footprints In Time Is Perfect House In Kurashiki</h4>
            <p className="mt-2 text-base text-gray-500">Creative director</p>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white shadow-md overflow-hidden group">
          <div className="relative overflow-hidden">
            <img
              src={ninth2} // Replace with the right image source
              alt="Blog Post 2"
              className="w-full h-72 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute top-4 left-4 bg-green-600 text-white text-sm font-bold px-3 py-1 block uppercase">24 Nov</span>
          </div>
          <div className="p-6">
            <h4 className="mt-4 text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-green-600">Footprints In Time Is Perfect House In Kurashiki</h4>
            <p className="mt-2 text-base text-gray-500">Creative director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ninthsection;
