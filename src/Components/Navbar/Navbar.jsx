import React, { useState } from "react";
import zeflogo from "../../assets/zeflogo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home"); // State to track active link

  const handleLinkClick = (link) => {
    setActiveLink(link); // Update the active link
  };

  return (
    <>
      {/* Top Bar - Hidden on small screens */}
      <div className="bg-gray-100 border-b text-sm py-3 md:block hidden z-10">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex space-x-4">
            <span>Phone: +99 (0) 101 0000 888</span>
            <span>Email: media@zurfteempowercare.org</span>
          </div>
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
      <nav className="bg-white shadow py-3 sticky top-0 z-20">
        <div className="container mx-auto flex justify-between items-center px-4">
        <div className="h-12">
  <img
    src={zeflogo}
    alt="Zurfte Empowercare Foundation Logo"
    className="h-full object-contain"
  />
</div>

          <button
            aria-label="Toggle Menu"
            className={`md:hidden text-gray-700 transform transition-transform ${
              isMenuOpen ? "rotate-45" : ""
            }`}
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
            {["Home", "About", "Latest Causes", "Social Events", "Blog", "Contact"].map((link) => (
              <li key={link} className="border-t md:border-none">
                <a
                  href="#"
                  onClick={() => handleLinkClick(link)}
                  className={`block py-2 px-4 text-gray-700 transition-colors duration-300 hover:text-[#0ecb7d] ${
                    activeLink === link
                      ? "text-[#0ecb7d] relative after:block after:w-full after:h-1 after:bg-[#0ecb7d] after:rounded-full after:animate-slide"
                      : ""
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

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

      <style>
        {`
          @keyframes slide {
            0% {
              transform: scaleX(0);
            }
            100% {
              transform: scaleX(1);
            }
          }
          .animate-slide {
            animation: slide 0.4s ease-in-out forwards;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
