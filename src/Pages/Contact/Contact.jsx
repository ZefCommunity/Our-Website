import HeroImage from '../../assets/contact.png';
import { ZEF_EMAIL, ZEF_WEBSITE, ZEF_WEBSITE_URL } from '../../config/branding';

const PAGE_COPY = {
  default: {
    title: 'Contact ZEF',
    intro:
      'Reach Zurfte Empowercare Foundation for program inquiries, community engagement, and general questions.',
    placeholder:
      'How can we support your community or youth program?',
    subjectPlaceholder: 'Subject (partnership, programs, volunteering)',
  },
  volunteer: {
    title: 'Volunteer with ZEF',
    intro:
      'Share your interest in mentoring youth, supporting digital skills programs, or helping with community events.',
    placeholder:
      'Tell us about your skills, availability, and how you would like to volunteer…',
    subjectPlaceholder: 'Volunteer application',
  },
  partnerships: {
    title: 'Partner with ZEF',
    intro:
      'Explore institutional, corporate, and community partnerships that scale youth empowerment and innovation programs.',
    placeholder:
      'Describe your organization and partnership goals…',
    subjectPlaceholder: 'Partnership inquiry',
  },
};

function Contact({ variant = 'default' }) {
  const copy = PAGE_COPY[variant] ?? PAGE_COPY.default;

  return (
    <main className="relative min-h-screen">
      <img
        src={HeroImage}
        alt="Contact Zurfte Empowercare Foundation — youth empowerment and nonprofit programs in Nigeria"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 px-4 py-10 text-center sm:px-6">
        <h1 className="mt-4 text-3xl font-bold text-blue-900 sm:text-4xl md:text-5xl">
          {copy.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-700 sm:text-lg">
          {copy.intro}
        </p>

        <div className="mx-auto mt-10 flex min-h-[50vh] max-w-6xl flex-col items-center bg-gray-50/95 py-10">
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
            <section
              className="col-span-2 rounded-lg bg-white p-6 shadow-lg sm:p-8"
              aria-labelledby="contact-form-heading"
            >
              <h2
                id="contact-form-heading"
                className="mb-6 text-2xl font-bold text-gray-800 sm:text-3xl"
              >
                Get in Touch
              </h2>
              {/* TODO: Wire form to email service or backend API */}
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <label className="sr-only" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="h-36 w-full resize-none rounded-lg border p-4 focus:outline-none focus:ring-4 focus:ring-blue-500"
                  placeholder={copy.placeholder}
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <label className="sr-only" htmlFor="contact-name">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="rounded-lg border p-4 focus:outline-none focus:ring-4 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                  <label className="sr-only" htmlFor="contact-email">
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="rounded-lg border p-4 focus:outline-none focus:ring-4 focus:ring-blue-500"
                    placeholder="Your email"
                  />
                </div>
                <label className="sr-only" htmlFor="contact-subject">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  className="w-full rounded-lg border p-4 focus:outline-none focus:ring-4 focus:ring-blue-500"
                  placeholder={copy.subjectPlaceholder}
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-green-600 py-3 font-medium text-white shadow-md transition duration-300 hover:bg-green-700"
                >
                  Send Message
                </button>
              </form>
            </section>

            <aside
              className="rounded-lg bg-white p-6 shadow-lg sm:p-8"
              aria-labelledby="contact-info-heading"
            >
              <h2
                id="contact-info-heading"
                className="mb-6 text-2xl font-bold text-gray-800 sm:text-3xl"
              >
                Contact Info
              </h2>
              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start space-x-4">
                  <span className="text-xl text-green-600" aria-hidden>
                    🌐
                  </span>
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
                  <span className="text-xl text-green-600" aria-hidden>
                    ✉️
                  </span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href={`mailto:${ZEF_EMAIL}`}
                      className="hover:text-green-600"
                    >
                      {ZEF_EMAIL}
                    </a>
                    <p className="mt-1 text-sm">
                      We respond to inquiries as soon as possible.
                    </p>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
