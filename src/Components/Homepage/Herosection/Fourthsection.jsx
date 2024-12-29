import React from 'react';
import case1 from '../../../assets/case1.png';
import case2 from '../../../assets/case2.png';
import case3 from '../../../assets/case3.png';

const Fourthsection = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="w-[90%] mx-auto">
        <div className="container mx-auto text-center">
          <div className="text-center my-10 md:my-20">
            <span className="text-green-500 text-2xl font-semibold">
              Our Cases You Can See
            </span>
            <h2 className="text-2xl md:text-5xl font-semibold text-blue-950 md:w-[600px] mx-auto mt-10">
              Explore Our Latest Causes That We Work On
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={case1}
                alt="Ensure Education"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-900">
                  Ensure Education For Every Poor Children
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Raised: <strong>$20,000</strong> | Goal:{' '}
                  <strong>$35,000</strong>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: '70%' }}
                  ></div>
                </div>
                <p className="text-green-500 text-sm mt-2 font-medium">70%</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={case2}
                alt="Healthy Food"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-900">
                  Providing Healthy Food For The Children
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Raised: <strong>$20,000</strong> | Goal:{' '}
                  <strong>$35,000</strong>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: '25%' }}
                  ></div>
                </div>
                <p className="text-green-500 text-sm mt-2 font-medium">25%</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={case3}
                alt="Drinking Water"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-900">
                  Supply Drinking Water For The People
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Raised: <strong>$20,000</strong> | Goal:{' '}
                  <strong>$35,000</strong>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: '50%' }}
                  ></div>
                </div>
                <p className="text-green-500 text-sm mt-2 font-medium">50%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourthsection;
