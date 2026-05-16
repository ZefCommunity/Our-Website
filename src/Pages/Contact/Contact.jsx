import HeroImage from '../../assets/contact.png';
import { ZEF_EMAIL, ZEF_WEBSITE, ZEF_WEBSITE_URL } from '../../config/branding';

const Contact = () => {
  return (
    <>
      <img
        src={HeroImage}
        alt="Contact Zurfte Empowercare Foundation"
        className="inset-0 absolute w-full h-full object-cover"
      />
      <div className="relative z-10 text-center space-y-6 ">
        <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mt-8">
          Contact ZEF
        </h3>

        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
          <div className="w-full max-w-6xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2 bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>
              {/* TODO: Wire form to email service or backend API */}
              <form className="space-y-6">
                <textarea
                  className="w-full h-36 p-4 border rounded-lg focus:ring-4 focus:ring-blue-500 focus:outline-none resize-none"
                  placeholder="How can we support your community or youth program?"
                ></textarea>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    className="p-4 border rounded-lg focus:ring-4 focus:ring-blue-500 focus:outline-none"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    className="p-4 border rounded-lg focus:ring-4 focus:ring-blue-500 focus:outline-none"
                    placeholder="Your email"
                  />
                </div>
                <input
                  type="text"
                  className="w-full p-4 border rounded-lg focus:ring-4 focus:ring-blue-500 focus:outline-none"
                  placeholder="Subject (partnership, programs, volunteering)"
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Contact Info
              </h2>
              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start space-x-4">
                  <span className="text-green-600 text-xl">🌐</span>
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href={ZEF_WEBSITE_URL}
                      className="hover:text-green-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ZEF_WEBSITE}
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-green-600 text-xl">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${ZEF_EMAIL}`} className="hover:text-green-600">
                      {ZEF_EMAIL}
                    </a>
                    <p className="text-sm mt-1">We respond to inquiries as soon as possible.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-green-600 text-xl">📍</span>
                  <div>
                    {/* TODO: Add official physical address when confirmed */}
                    <p className="font-semibold">Location</p>
                    <p>Regional programs — address coming soon</p>
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
