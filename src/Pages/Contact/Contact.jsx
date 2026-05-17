import { useState } from 'react';
import HeroImage from '../../assets/contact.png';
import { ZEF_EMAIL, ZEF_WEBSITE, ZEF_WEBSITE_URL } from '../../config/branding';
import { FORMSPREE_CONTACT_ENDPOINT } from '../../config/forms';

const PAGE_COPY = {
  default: {
    title: 'Contact ZEF',
    intro:
      'Reach Zurfte Empowercare Foundation for program inquiries, community engagement, and general questions.',
    placeholder:
      'How can we support your community or youth program?',
    subjectPlaceholder: 'Subject (partnership, programs, volunteering)',
    formType: 'General contact',
  },
  volunteer: {
    title: 'Volunteer with ZEF',
    intro:
      'Share your interest in mentoring youth, supporting digital skills programs, or helping with community events.',
    placeholder:
      'Tell us about your skills, availability, and how you would like to volunteer…',
    subjectPlaceholder: 'Volunteer application',
    formType: 'Volunteer inquiry',
  },
  partnerships: {
    title: 'Partner with ZEF',
    intro:
      'Explore institutional, corporate, and community partnerships that scale youth empowerment and innovation programs.',
    placeholder:
      'Describe your organization and partnership goals…',
    subjectPlaceholder: 'Partnership inquiry',
    formType: 'Partnership inquiry',
  },
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function validateContactForm(values) {
  const errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (!name) {
    errors.name = 'Please enter your name.';
  }
  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!subject) {
    errors.subject = 'Please enter a subject.';
  }
  if (!message) {
    errors.message = 'Please enter your message.';
  }

  return errors;
}

const inputClassName =
  'w-full rounded-lg border p-4 focus:outline-none focus:ring-4 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100';
const inputErrorClassName =
  'border-red-500 focus:ring-red-400 aria-invalid:border-red-500';

function Contact({ variant = 'default' }) {
  const copy = PAGE_COPY[variant] ?? PAGE_COPY.default;

  const [values, setValues] = useState(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [formError, setFormError] = useState('');

  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (formError) {
      setFormError('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const gotcha = event.target.elements._gotcha?.value?.trim();
    if (gotcha) {
      return;
    }

    const errors = validateContactForm(values);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus('idle');
      setFormError('');
      return;
    }

    setFieldErrors({});
    setFormError('');
    setStatus('submitting');

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
      form_type: copy.formType,
      _replyto: values.email.trim(),
    };

    try {
      const response = await fetch(FORMSPREE_CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setValues(EMPTY_FORM);
        setStatus('success');
        return;
      }

      const serverMessage =
        typeof data.error === 'string'
          ? data.error
          : Array.isArray(data.errors)
            ? data.errors.map((err) => err.message).filter(Boolean).join(' ')
            : '';

      setStatus('error');
      setFormError(
        serverMessage ||
          'We could not send your message. Please try again or email us directly.',
      );
    } catch {
      setStatus('error');
      setFormError(
        'Network error. Check your connection and try again, or email us directly.',
      );
    }
  };

  const fieldLabelClass =
    'mb-1 block text-left text-sm font-medium text-gray-700';

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

              {isSuccess && (
                <div
                  role="status"
                  className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-left text-green-800"
                >
                  Thank you! Your message was sent. We will respond as soon as
                  possible.
                </div>
              )}

              {status === 'error' && formError && (
                <div
                  role="alert"
                  className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-left text-red-800"
                >
                  {formError}
                </div>
              )}

              <form
                className="space-y-6 text-left"
                onSubmit={handleSubmit}
                noValidate
                aria-busy={isSubmitting}
              >
                <div>
                  <label htmlFor="contact-message" className={fieldLabelClass}>
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    value={values.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={
                      fieldErrors.message ? 'contact-message-error' : undefined
                    }
                    className={`${inputClassName} h-36 resize-none ${
                      fieldErrors.message ? inputErrorClassName : 'border-gray-300'
                    }`}
                    placeholder={copy.placeholder}
                  />
                  {fieldErrors.message && (
                    <p
                      id="contact-message-error"
                      className="mt-1 text-sm text-red-600"
                      role="alert"
                    >
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={fieldLabelClass}>
                      Your name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={values.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={
                        fieldErrors.name ? 'contact-name-error' : undefined
                      }
                      className={`${inputClassName} ${
                        fieldErrors.name ? inputErrorClassName : 'border-gray-300'
                      }`}
                      placeholder="Your name"
                    />
                    {fieldErrors.name && (
                      <p
                        id="contact-name-error"
                        className="mt-1 text-sm text-red-600"
                        role="alert"
                      >
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className={fieldLabelClass}>
                      Your email <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      value={values.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={
                        fieldErrors.email ? 'contact-email-error' : undefined
                      }
                      className={`${inputClassName} ${
                        fieldErrors.email ? inputErrorClassName : 'border-gray-300'
                      }`}
                      placeholder="you@example.com"
                    />
                    {fieldErrors.email && (
                      <p
                        id="contact-email-error"
                        className="mt-1 text-sm text-red-600"
                        role="alert"
                      >
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className={fieldLabelClass}>
                    Subject <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={values.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    aria-invalid={Boolean(fieldErrors.subject)}
                    aria-describedby={
                      fieldErrors.subject ? 'contact-subject-error' : undefined
                    }
                    className={`${inputClassName} ${
                      fieldErrors.subject ? inputErrorClassName : 'border-gray-300'
                    }`}
                    placeholder={copy.subjectPlaceholder}
                  />
                  {fieldErrors.subject && (
                    <p
                      id="contact-subject-error"
                      className="mt-1 text-sm text-red-600"
                      role="alert"
                    >
                      {fieldErrors.subject}
                    </p>
                  )}
                </div>

                {/* Honeypot — hidden from users, catches bots (Formspree) */}
                <label className="sr-only" htmlFor="contact-gotcha">
                  Leave this field empty
                </label>
                <input
                  id="contact-gotcha"
                  name="_gotcha"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-green-600 py-3 font-medium text-white shadow-md transition duration-300 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
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
