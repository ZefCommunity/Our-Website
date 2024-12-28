import React from "react";
import backgroundImage from "../../../assets/tenth1.png";

const Tenthsection = () => {
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
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {/* Stat 1 */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold">6,200<span className="text-xl">+</span></h3>
          <p className="mt-2 text-lg">Donation</p>
        </div>

        {/* Stat 2 */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold">80<span className="text-xl">+</span></h3>
          <p className="mt-2 text-lg">Fund Raised</p>
        </div>

        {/* Stat 3 */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold">256<span className="text-xl">+</span></h3>
          <p className="mt-2 text-lg">Donation</p>
        </div>

        {/* Stat 4 */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold">256<span className="text-xl">+</span></h3>
          <p className="mt-2 text-lg">Donation</p>
        </div>
      </div>
    </section>
  );
};

export default Tenthsection;
