import React from 'react';
import img1 from '../../assets/img/gallery/case1.png';
import img2 from '../../assets/img/gallery/case2.png';
import img3 from '../../assets/img/gallery/case3.png';

const campaigns = [
  {
    image: img1,
    title: 'Ensure Education For Every Poor Children',
    progress: 70,
    raised: '$20,000',
    goal: '$35,000',
  },
  {
    image: img2,
    title: 'Providing Healthy Food For The Children',
    progress: 25,
    raised: '$20,000',
    goal: '$35,000',
  },
  {
    image: img3,
    title: 'Supply Drinking Water For The People',
    progress: 50,
    raised: '$20,000',
    goal: '$35,000',
  },
  {
    image: img2,
    title: 'Supply Drinking Water For The People',
    progress: 50,
    raised: '$20,000',
    goal: '$35,000',
  },
  {
    image: img3,
    title: 'Supply Drinking Water For The People',
    progress: 50,
    raised: '$20,000',
    goal: '$35,000',
  },
  {
    image: img1,
    title: 'Supply Drinking Water For The People',
    progress: 50,
    raised: '$20,000',
    goal: '$35,000',
  },
];

function LatestCause() {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        {/* ---------Header======= */}
        <div className="flex items-center justify-center h-[300px]">
          <h2 className="text-5xl font-bold text-blue-950">Latest Programs</h2>
        </div>
        {/* body */}
        <div className="bg-gray-100 min-h-screen flex items-center justify-center mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            {campaigns.map((campaign, index) => (
              <div key={index} className="text-center mb-10">
                {/* Image */}
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="rounded-lg w-full h-48 object-cover hover:scale-[1.05]"
                />

                {/* Title */}
                <h3 className="text-2xl text-left font-bold text-blue-950 mt-4 px-5">
                  {campaign.title}
                </h3>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4 mx-5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-green-600 mt-1 font-bold">
                  {campaign.progress}%
                </p>

                {/* Raised and Goal */}
                <div className="flex justify-between text-sm px-5 font-bold text-gray-700 mt-4">
                  <span>Raised: {campaign.raised}</span>
                  <span>Goal: {campaign.goal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestCause;
