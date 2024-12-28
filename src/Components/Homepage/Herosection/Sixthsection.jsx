import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import sixth1 from "../../../assets/sixth1.png";
import sixth2 from "../../../assets/sixth2.png";
import sixth3 from "../../../assets/sixth3.png";
import sixth4 from "../../../assets/sixth4.png";

const Sixthsection = () => {
  const volunteers = [
    {
      name: "Bruce Roberts",
      role: "Volunteer leader",
      image: sixth1,
      social: {
        facebook: "https://facebook.com/bruce",
        twitter: "https://twitter.com/bruce",
        linkedin: "https://linkedin.com/in/bruce",
      },
    },
    {
      name: "Robart Rechard",
      role: "Volunteer leader",
      image: sixth2,
      social: {
        facebook: "https://facebook.com/robart",
        twitter: "https://twitter.com/robart",
        linkedin: "https://linkedin.com/in/robart",
      },
    },
    {
      name: "Brendon Tailor",
      role: "Volunteer leader",
      image: sixth3,
      social: {
        facebook: "https://facebook.com/brendon",
        twitter: "https://twitter.com/brendon",
        linkedin: "https://linkedin.com/in/brendon",
      },
    },
    {
      name: "Walshr Hasgt",
      role: "Volunteer leader",
      image: sixth4,
      social: {
        facebook: "https://facebook.com/walshr",
        twitter: "https://twitter.com/walshr",
        linkedin: "https://linkedin.com/in/walshr",
      },
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-green-500 font-medium">What We Are Doing</p>
        <h2 className="text-3xl font-bold text-blue-900">
          Our Expert Volunteer Always Ready
        </h2>
      </div>

      {/* Volunteers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {volunteers.map((volunteer, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-lg overflow-hidden"
          >
            {/* Image */}
            <div className="overflow-hidden relative">
              <img
                src={volunteer.image}
                alt={volunteer.name}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              {/* Social Media Icons on Image */}
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <div className="flex space-x-4 mb-4">
                  <a
                    href={volunteer.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-500"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href={volunteer.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href={volunteer.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-700"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>
            </div>
            {/* Details */}
            <div className="text-center py-4">
              <h3 className="text-lg font-bold text-blue-900">
                {volunteer.name}
              </h3>
              <p className="text-gray-600">{volunteer.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Sixthsection;
