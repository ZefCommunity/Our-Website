import React from "react";
import eight1 from "../../../assets/eight1.png"
const Eightsection = () => {
  return (
    <div className="py-16 bg-gray-50 flex flex-col items-center text-center">
      {/* Profile Image */}
      <div className="w-28 h-28 rounded-full overflow-hidden  mb-4">
        <img
          src={eight1} // Replace with your actual image URL
          alt="Margaret Lawson"
          className="w-full h-full object-cover"
        />
      </div>

     {/* Name and Role */}
     <h3 className="text-xl font-semibold text-blue-900">Margaret Lawson</h3>
      <p className="text-gray-500 text-base">Creative Director</p>

      {/* Quote */}
      <div className="relative mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 text-green-500"
          viewBox="0 0 16 16"
        >
          <path d="M6.854 3.1a.5.5 0 0 0-.708 0L2.1 7.146a.5.5 0 0 0 0 .708L6.146 11.9a.5.5 0 0 0 .708-.708L3.207 7.5 6.854 3.854a.5.5 0 0 0 0-.707zm6.292 0a.5.5 0 0 0-.708 0L8.1 7.146a.5.5 0 0 0 0 .708L12.146 11.9a.5.5 0 0 0 .708-.708L9.207 7.5l3.647-3.647a.5.5 0 0 0 0-.707z" />
        </svg>
        <p className="text-gray-600 italic max-w-2xl mx-auto text-lg">
          “I am at an age where I just want to be fit and healthy; our bodies
          are our responsibility! So start caring for your body, and it will
          care for you. Eat clean; it will care for you and workout hard.”
        </p>
      </div>

      {/* Pagination */}
      <div className="mt-8 flex space-x-2">
        <span className="w-4 h-4 bg-green-500 rounded-full"></span>
        <span className="w-4 h-4 bg-gray-300 rounded-full"></span>
        <span className="w-4 h-4 bg-gray-300 rounded-full"></span>
      </div>
    </div>

  );
};

export default Eightsection;
