import React from "react";
import fifth1 from "../../../assets/fifth1.png";
import fifth2 from "../../../assets/fifth2.png";
import fifth3 from "../../../assets/fifth3.png";

const Fifthsection = () => {
  const events = [
    {
      title: "Donation is Hope",
      time: "8:30 - 9:30am",
      date: "18.01.2021",
      location: "Athens, Greece",
      image: fifth1, // Use the variable directly
    },
    {
      title: "A hand for Children",
      time: "8:30 - 9:30am",
      date: "18.01.2021",
      location: "Athens, Greece",
      image: fifth2, // Use the variable directly
    },
    {
      title: "Help for Children",
      time: "8:30 - 9:30am",
      date: "18.01.2021",
      location: "Athens, Greece",
      image: fifth3, // Use the variable directly
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-green-500 font-medium">What We Are Doing</p>
          <h2 className="text-3xl font-bold text-blue-900">
            We Arrange Many Social Events For Charity Donations
          </h2>
        </div>

        {/* Events List */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-center space-x-6 bg-gray-50 p-4 rounded-lg shadow"
            >
              {/* Event Image */}
              <img
                src={event.image} // Corrected usage here
                alt={event.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              {/* Event Details */}
              <div>
                <h3 className="text-xl font-semibold text-blue-900">
                  {event.title}
                </h3>
                <p className="text-gray-600">
                  <span className="block">{event.time}</span>
                  <span className="block">{event.date}</span>
                  <span className="block">{event.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fifthsection;
