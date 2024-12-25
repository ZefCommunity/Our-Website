import React, { useState } from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Hidden on small screens */}
      <div className="bg-gray-100 border-b text-sm py-3 md:block hidden">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Left Side */}
          <div className="flex space-x-4">
            <span>Phone: +99 (0) 101 0000 888</span>
            <span>Email: media@zurfteempowercare.org</span>
          </div>

          {/* Right Side */}
          <div className="flex space-x-4">
            <button className="text-gray-700">English ▼</button>
            <button className="text-gray-700">Subscribe Now</button>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-600 hover:text-gray-900" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900" aria-label="Google Plus">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow py-3">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-900">
            Charity<span className="text-green-500">.</span>
          </div>

          {/* Hamburger Menu (for mobile) */}
          <button
            aria-label="Toggle Menu"
            className={`md:hidden text-gray-700 transform transition-transform ${isMenuOpen ? "rotate-45" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Nav Links */}
          <ul
            className={`md:flex md:space-x-6 absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li className="border-t md:border-none">
              <a
                href="#"
                className="block py-2 px-4 text-gray-700 hover:text-[#0ecb7d]"
              >
                Home
              </a>
            </li>
            <li className="border-t md:border-none">
              <a
                href="#"
                className="block py-2 px-4 text-gray-700 hover:text-[#0ecb7d]"
              >
                About
              </a>
            </li>
            <li className="border-t md:border-none">
              <Link
                to="/latestcauses"
                className="block py-2 px-4 text-gray-700 hover:text-[#0ecb7d]"
              >
                Latest Causes
              </Link>
            </li>
            <li className="border-t md:border-none">
              <Link
                to="/events"
                className="block py-2 px-4 text-gray-700 hover:text-[#0ecb7d]"
              >
                Social Events
              </Link>
            </li>
            <li className="border-t md:border-none">
              <a
                href="#"
                className="block py-2 px-4 text-gray-700 hover:text-[#0ecb7d]"
              >
                Blog
              </a>
            </li>
            <li className="border-t md:border-none">
              <a
                href="#"
                className="block py-2 px-4 text-gray-700 hover:text-[#0ecb7d]"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Donate Button */}
          <div className="hidden md:flex">
            <a
              href="#"
              className="bg-[#0ecb7d] text-white px-4 py-2 rounded transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#0ecb7d]/80"
            >
              Donate
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
