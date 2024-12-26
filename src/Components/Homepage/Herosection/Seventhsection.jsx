import React from "react";
import backgroundImage from "../../../assets/seventh1.png";

const Seventhsection = () => {
  return (
    <section
    className="relative bg-green-500 text-white py-20"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-4">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold">
        Let's Change The World With Humanity
      </h2>
      {/* Button */}
      <button className="relative overflow-hidden bg-white text-blue-900 font-semibold py-2 px-6 shadow group">
        <span className="absolute inset-0 bg-green-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
        <span className="relative z-10">Become A Volunteer</span>
      </button>
    </div>
  </section>
  );
};

export default Seventhsection;
