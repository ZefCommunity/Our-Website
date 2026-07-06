/** Static copy and structured data for the Pilot Programs page */

import { ZEF_PILOT_APPLICANT_EMAIL } from '../../config/branding';

export const PILOTS_PAGE = {
  eyebrow: 'Pilot Programs',
  heroTitle: 'Our First Pilot Programs',
  heroSubtitle:
    'Built from insights gathered from over 520 youth and partner responses, our first pilot programs are designed to help young people and entrepreneurs move from barriers to opportunities.',
  heroCta: 'Register Your Interest',
};

export const PROMISE_CONTENT = {
  title: 'Our Promise',
  body: 'ZEF turns clear, validated barriers into forward motion. For Lagos-based youth, graduates, and early-stage entrepreneurs, we deliver bundled, mentor-backed programs that convert digital skills, funding know-how, and job-readiness into a first client, a funded plan, or a first job offer.',
};

export const AUDIENCE_ITEMS = [
  {
    id: 'entrepreneurs',
    icon: 'briefcase',
    title: 'Entrepreneurs & business owners',
    description:
      'Stuck on funding, mentorship, or growth, and ready for structured support to move forward.',
  },
  {
    id: 'graduates',
    icon: 'graduation',
    title: 'Recent graduates & students',
    description:
      'Needing a bridge from classroom learning to real income and market-ready experience.',
  },
  {
    id: 'job-seekers',
    icon: 'search',
    title: 'Unemployed job seekers',
    description:
      'Looking for practical, market-ready skills that employers and clients actually value.',
  },
  {
    id: 'location',
    icon: 'map',
    title: 'Lagos-based first',
    description:
      'Expanding to Ogun and Oyo next, with pilots launching where community demand is strongest.',
  },
];

export const PILOT_PROGRAMS = [
  {
    id: 'digital-skills',
    icon: 'laptop',
    title: 'Digital Skills Starter',
    audience:
      'Students, graduates, freelancers building a portfolio.',
    benefits: ['Graphic Design', 'AI & Data Literacy', 'Leadership'],
    outcome: 'A portfolio-ready project plus one marketable skill.',
  },
  {
    id: 'mentor-circles',
    icon: 'users',
    title: 'Mentor Circles',
    audience: 'Entrepreneurs and business owners.',
    benefits: [
      'Small circles of 5–6 founders paired with one mentor',
      'Focused on funding readiness and growth planning',
    ],
    outcome: 'A funding-ready plan and an active peer network.',
  },
];

export const JOIN_STEPS = [
  {
    id: 'apply',
    step: 1,
    title: 'Fill in the interest form',
    description:
      'Tell us which pilot fits you and share your goals so we can match you well.',
  },
  {
    id: 'follow-up',
    step: 2,
    title: 'Our team reviews your application',
    description:
      'Our team reviews applications and communicates only through our official email address:',
    showOfficialEmail: true,
  },
  {
    id: 'orientation',
    step: 3,
    title: 'Join an orientation session',
    description:
      'Attend a short orientation for your chosen pilot before the program begins.',
  },
];

export const PILOT_INTEREST_OPTIONS = [
  { value: '', label: 'Select a pilot program' },
  { value: 'digital-skills', label: 'Digital Skills Starter' },
  { value: 'mentor-circles', label: 'Mentor Circles' },
  { value: 'both', label: 'Both / Not sure yet' },
];

export const AUDIENCE_ROLE_OPTIONS = [
  { value: '', label: 'Select the option that fits best' },
  { value: 'entrepreneur', label: 'Entrepreneur or business owner' },
  { value: 'graduate-student', label: 'Recent graduate or student' },
  { value: 'job-seeker', label: 'Unemployed job seeker' },
  { value: 'other', label: 'Other' },
];

export const INTEREST_FORM_COPY = {
  title: 'Register Your Interest',
  intro:
    'Share a few details to register your interest. Our team reviews submissions and responds only through official email. No commitment required at this stage.',
  consentLabel: `I agree that ZEF may contact me about pilot programs exclusively through the official email address (${ZEF_PILOT_APPLICANT_EMAIL}) using the contact details I provide.`,
  submitLabel: 'Submit Interest',
  submittingLabel: 'Submitting…',
};

export const INTEREST_FORM_SUCCESS_COPY = {
  title: "You're on the list!",
  messageBeforeEmail:
    "Thank you for registering your interest in ZEF's Pilot Programs. Our team will review your submission and contact you through our official email address:",
  messageAfterEmail:
    'Only messages from this address are official. Please disregard contact from unofficial channels.',
  homeCta: 'Return to Home',
  aboutCta: 'Learn More About ZEF',
};

export const COMMUNICATION_POLICY = {
  title: 'Important',
  body: 'Zurfte Empowercare Foundation (ZEF) will never contact applicants through WhatsApp, Telegram, or direct messages. All official communication regarding applications and pilot programs will come exclusively from:',
  warning:
    'Please disregard messages from unofficial channels claiming to represent ZEF.',
  officialEmail: ZEF_PILOT_APPLICANT_EMAIL,
};
