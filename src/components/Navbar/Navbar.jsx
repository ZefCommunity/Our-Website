import { useState } from "react";
import { Link } from "react-router-dom";
import zeflogo from "../../assets/zeflogo.png";
import { ZEF_DONATE_URL, ZEF_SHORT } from "../../config/branding";
import { HOME_SECTIONS, homeSectionPath } from "../../config/homepageSections";
import { ENROL_PATH } from "../../config/programmeRegistration";

const NAV_LINK_CLASS =
  "block py-2 px-4 font-semibold text-gray-700 hover:text-[#0ecb7d]";

const CTA_BASE =
  "inline-flex h-10 items-center justify-center rounded px-3 text-sm font-semibold transition-all duration-300 ease-in-out hover:scale-105 lg:px-4";

const CTA_ENROLL = `${CTA_BASE} box-border border-2 border-green-500 text-green-600 hover:bg-green-50`;

const CTA_DONATE = `${CTA_BASE} box-border border-2 border-transparent bg-green-500 text-white hover:bg-green-600`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow py-3 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center px-4 gap-3">
        <Link
          to="/"
          className="h-12 flex items-center shrink-0"
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
          className={`md:flex md:items-center md:space-x-4 lg:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="border-t md:border-none">
            <Link
              to={homeSectionPath(HOME_SECTIONS.about)}
              className={NAV_LINK_CLASS}
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li className="border-t md:border-none">
            <Link
              to={homeSectionPath(HOME_SECTIONS.programs)}
              className={NAV_LINK_CLASS}
              onClick={handleLinkClick}
            >
              Our Programs
            </Link>
          </li>
          <li className="border-t md:border-none">
            <Link
              to={homeSectionPath(HOME_SECTIONS.events)}
              className={NAV_LINK_CLASS}
              onClick={handleLinkClick}
            >
              Events
            </Link>
          </li>
          <li className="border-t md:border-none">
            <Link
              to="/contact"
              className={NAV_LINK_CLASS}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li className="border-t md:hidden px-4 py-2 space-y-2">
            <Link
              to={ENROL_PATH}
              className={`${CTA_ENROLL} w-full`}
              onClick={handleLinkClick}
            >
              Enrol
            </Link>
            <a
              href={ZEF_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${CTA_DONATE} w-full`}
              onClick={handleLinkClick}
            >
              Support Our Mission
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <Link to={ENROL_PATH} className={CTA_ENROLL}>
            Enrol
          </Link>
          <a
            href={ZEF_DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={CTA_DONATE}
          >
            Support Our Mission
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
