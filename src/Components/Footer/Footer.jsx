import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
          <p className="text-sm">
            Address: Your address goes here, your demo address.
          </p>
          <p className="text-sm mt-2">Phone: +8880 44338899</p>
          <p className="text-sm mt-2">Email: info@colorlib.com</p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Important Link</h3>
          <ul>
            <li className="mt-2">
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-green-500 transition"
              >
                View Project
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-green-500 transition"
              >
                Contact Us
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-green-500 transition"
              >
                Testimonial
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-green-500 transition"
              >
                Properties
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-green-500 transition"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
          <p className="text-sm">
            Heaven fruitful doesn't over lesser in days. Appear creeping.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 text-sm text-gray-900 rounded-l focus:outline-none"
            />
            <button className="bg-green-500 px-4 py-2 text-white rounded-r hover:bg-green-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Copyright */}
          <p className="text-sm">
            Copyright © 2024 All rights reserved | This template is made with{" "}
            <span className="text-green-500">❤</span> by Colorlib
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-globe"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-behance"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
