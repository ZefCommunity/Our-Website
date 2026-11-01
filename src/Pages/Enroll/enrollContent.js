import {
  PROGRAMME_COMMENCEMENT_DATE,
  PROGRAMME_PATHS_LABEL,
  PROGRAMME_REGISTRATION_DEADLINE,
} from '../../config/programmeRegistration';

export const ENROLL_PAGE = {
  eyebrow: 'Expression of Interest',
  heroTitle: 'Enrolment Is Now Open',
  heroSubtitle: 'Ready to learn a new skill?',
  heroDescription: `Register here for ZEF's pilot programme, including ${PROGRAMME_PATHS_LABEL}.`,
  heroCta: 'Register Your Interest',
  registrationDeadline: PROGRAMME_REGISTRATION_DEADLINE,
  commencementDate: PROGRAMME_COMMENCEMENT_DATE,
};

export const ENROLL_FORM_COPY = {
  title: 'Register Your Interest',
  intro: `Register for ZEF's pilot programme, including ${PROGRAMME_PATHS_LABEL}. Share your details and the skills you want to learn. Register by ${PROGRAMME_REGISTRATION_DEADLINE}. The programme commences on ${PROGRAMME_COMMENCEMENT_DATE}.`,
  submitLabel: 'Submit Expression of Interest',
  submittingLabel: 'Submitting…',
  consentLabel:
    'I agree to receive communications from Zurfte Empowercare Foundation regarding future training opportunities.',
};

export const ENROLL_SUCCESS_COPY = {
  title: 'Thank You!',
  message:
    'Thank you for registering your interest. Your response has been received successfully.',
  detail: 'Please keep an eye on your inbox — we will reach out by email.',
  authenticityTitle: 'Stay safe from unofficial messages',
  authenticityBody:
    'Zurfte Empowercare Foundation (ZEF) will never contact applicants through WhatsApp, Telegram, or direct messages. All official communication regarding applications and pilot programmes will come exclusively from:',
  authenticityFooter:
    'Please disregard messages from unofficial channels claiming to represent ZEF.',
  homeCta: 'Return to Home',
};
