import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import {
  ZEF_EMAIL,
  ZEF_NAME,
  ZEF_SHORT,
  ZEF_TAGLINE,
} from '../../config/branding';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">{ZEF_NAME}</h3>
          <p className="text-sm">{ZEF_TAGLINE}</p>
          {/* TODO: Add official physical address when confirmed by ZEF leadership */}
          <p className="text-sm mt-4 flex items-center gap-2">
            <FaEnvelope className="text-green-500 shrink-0" aria-hidden />
            <a
              href={`mailto:${ZEF_EMAIL}`}
              className="hover:text-green-500 transition"
              aria-label={`Email ${ZEF_EMAIL}`}
            >
              {ZEF_EMAIL}
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Explore</h3>
          <ul>
            <li className="mt-2">
              <Link
                to="/about"
                className="text-sm text-gray-300 hover:text-green-500 transition"
              >
                About {ZEF_SHORT}
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="/LatestCause"
                className="text-sm text-gray-300 hover:text-green-500 transition"
              >
                Programs &amp; Impact
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="/socialEvents"
                className="text-sm text-gray-300 hover:text-green-500 transition"
              >
                Community Events
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="/blog"
                className="text-sm text-gray-300 hover:text-green-500 transition"
              >
                News &amp; Insights
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="/contact"
                className="text-sm text-gray-300 hover:text-green-500 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Stay Connected</h3>
          <p className="text-sm">
            Join our community for updates on youth programs, innovation
            initiatives, and empowerment opportunities.
          </p>
          {/* TODO: Connect newsletter form to email service (e.g. Mailchimp, Brevo) */}
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 text-sm text-gray-900 rounded-l focus:outline-none"
            />
            <button
              type="button"
              className="bg-green-500 px-4 py-2 text-white rounded-r hover:bg-green-600 transition"
            >
              Join Community
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
          <p className="text-sm text-center md:text-left">
            {'\u00A9 '}
            {new Date().getFullYear()} {ZEF_NAME}. All rights reserved.
          </p>
          {/* TODO: Replace # with official ZEF social media profile URLs */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="ZEF on Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="ZEF on Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="ZEF on LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

