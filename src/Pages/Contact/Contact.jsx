import React from 'react';
import HeroImage from '../../assets/contact.png';

const Contact = () => {
  return (
    <>
      {/* Background Image */}
      <img
        src={HeroImage}
        alt="Hero Background"
        className="inset-0 absolute w-full h-full object-cover"
      />
      <div className="relative z-10 text-center space-y-6 ">
        <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mt-8">
          Contact Us
        </h3>

        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
          {/* Contact Section */}
          <div className="w-full max-w-6xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="col-span-2 bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <form className="space-y-6">
                {/* Message Field */}
                <textarea
                  className="w-full h-36 p-4 border rounded-lg focus:ring-4 focus:ring-blue-500 focus:outline-none resize-none"
                  placeholder="Enter Message"
                ></textarea>
                {/* Name and Email Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    className="p-4 border rounded-lg focus:ring-4 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your name"
                  />
                  <input
                    type="email"
                    className="p-4 border rounded-lg focus:ring-4 focus:ring-blue-500 focus:outline-none"
                    placeholder="Email"
                  />
                </div>
                {/* Subject Field */}
                <input
                  type="text"
                  className="w-full p-4 border rounded-lg focus:ring-4 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter Subject"
                />
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Contact Info
              </h2>
              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start space-x-4">
                  <span className="text-green-600 text-xl">🏠</span>
                  <div>
                    <p className="font-semibold">Buttonwood, California</p>
                    <p>Rosemead, CA 91770</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-green-600 text-xl">📞</span>
                  <div>
                    <p className="font-semibold">+1 253 565 2365</p>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-green-600 text-xl">✉️</span>
                  <div>
                    <p className="font-semibold">support@colorlib.com</p>
                    <p>Send us your query anytime!</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
