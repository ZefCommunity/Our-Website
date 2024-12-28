import React from "react";

const Secondsection = () => {
  return (
    <div className="py-16 bg-gray-50">
    {/* Title Section */}
    <div className="text-center">
      <h2 className="text-xl font-semibold text-green-500">
        What We Are Doing
      </h2>
      <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mt-2">
        We Are In A Mission To Help The Helpless
      </h3>
    </div>

    {/* Cards Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-8 md:px-16">
      {["Clean Water", "Clean Water", "Clean Water"].map((title, index) => (
        <div
          key={index}
          className={`relative h-96 rounded-lg overflow-hidden shadow-lg ${
            index === 1 ? "bg-green-500 text-white" : "bg-white group"
          }`}
        >
          {/* Hover Overlay for Left and Right Cards */}
          {index !== 1 && (
            <div className="absolute inset-0 bg-green-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          )}

          {/* Card Content */}
          <div
            className={`relative z-10 p-6 transition-colors duration-500 ${
              index === 1
                ? "text-white"
                : "text-blue-900 group-hover:text-white"
            }`}
          >
            {/* Icon */}
            <div className="flex justify-center items-center mb-4">
              <div
                className={`p-4 rounded-full ${
                  index === 1 ? "bg-white" : "bg-green-100"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`w-8 h-8 ${
                    index === 1 ? "text-green-500" : "text-green-700"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 0V4m0 8v4m0 0h4m-4 0H8"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h4 className="text-lg font-semibold mb-2">{title}</h4>

            {/* Description */}
            <p className="text-sm">
              The sea freight service has grown considerably in recent years.
              We spend time getting to know your processes too.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
   );
};

export default Secondsection;
