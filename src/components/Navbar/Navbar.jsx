import { useState } from "react";
import { Link } from "react-router-dom";
import zeflogo from "../../assets/zeflogo.png";
import { ZEF_DONATE_URL, ZEF_SHORT } from "../../config/branding";
import { HOME_SECTIONS, homeSectionPath } from "../../config/homepageSections";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow py-3 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          to="/"
          className="h-12 flex items-center"
          onClick={handleLinkClick}
        >
          <img
            src={zeflogo}
            alt={`${ZEF_SHORT} — Zurfte Empowercare Foundation logo`}
            className="h-full object-contain"
          />
        </Link>

        <button
          type="button"
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

        <ul
          className={`md:flex md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="border-t md:border-none">
            <Link
              to="/"
              className="block py-2 font-semibold px-4 text-gray-700 hover:text-[#0ecb7d]"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className="border-t md:border-none">
            <Link
              to={homeSectionPath(HOME_SECTIONS.about)}
              className="block py-2 px-4 font-semibold text-gray-700 hover:text-[#0ecb7d]"
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li className="border-t md:border-none">
            <Link
              to={homeSectionPath(HOME_SECTIONS.programs)}
              className="block py-2 px-4 font-semibold text-gray-700 hover:text-[#0ecb7d]"
              onClick={handleLinkClick}
            >
              Our Programs
            </Link>
          </li>
          <li className="border-t md:border-none">
            <Link
              to="/pilots"
              className="block py-2 px-4 font-semibold text-gray-700 hover:text-[#0ecb7d]"
              onClick={handleLinkClick}
            >
              Pilots
            </Link>
          </li>
          <li className="border-t md:border-none">
            <Link
              to={homeSectionPath(HOME_SECTIONS.events)}
              className="block py-2 px-4 font-semibold text-gray-700 hover:text-[#0ecb7d]"
              onClick={handleLinkClick}
            >
              Events
            </Link>
          </li>
          <li className="border-t md:border-none">
            <Link
              to="/contact"
              className="block py-2 px-4 font-semibold text-gray-700 hover:text-[#0ecb7d]"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li className="border-t md:border-none">
            <Link
              to="/volunteer"
              className="block py-2 px-4 font-semibold text-gray-700 hover:text-[#0ecb7d]"
              onClick={handleLinkClick}
            >
              Become a Volunteer
            </Link>
          </li>
          <li className="border-t md:hidden">
            <a
              href={ZEF_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 my-2 block rounded bg-green-500 py-2 text-center font-semibold text-white hover:bg-green-600"
              onClick={handleLinkClick}
            >
              Support Our Mission
            </a>
          </li>
        </ul>

        <div className="hidden md:flex">
          <a
            href={ZEF_DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 font-semibold text-white px-4 py-2 rounded transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-green-600"
          >
            Support Our Mission
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
