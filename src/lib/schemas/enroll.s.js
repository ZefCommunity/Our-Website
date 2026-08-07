import * as z from 'zod';

export const EDUCATION_LEVELS = [
  'Primary / Elementary',
  'Secondary / High School',
  'Diploma / Certificate',
  "Bachelor's Degree",
  "Master's Degree",
  'Doctorate / PhD',
  'Vocational / Trade',
  'Prefer not to say',
];

export const EMPLOYMENT_STATUSES = [
  'Student',
  'Employed (Full-time)',
  'Employed (Part-time)',
  'Self-employed / Freelancer',
  'Unemployed',
  'Looking for work',
  'Homemaker',
  'Retired',
  'Other',
];

export const LEARNING_PREFERENCES = [
  'Online',
  'Physical',
  'Hybrid',
  'No Preference',
];

export const COURSE_INTEREST_OPTIONS = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Graphic Design',
  'Digital Marketing',
  'Data Analysis',
  'Artificial Intelligence',
  'Machine Learning',
  'Cybersecurity',
  'Cloud Computing',
  'DevOps',
  'Product Management',
  'Project Management',
  'Business Analysis',
  'Entrepreneurship',
  'Business Development',
  'Financial Literacy',
  'Content Writing',
  'Copywriting',
  'Social Media Management',
  'Virtual Assistance',
  'Video Editing',
  'Motion Graphics',
  'Photography',
  'Public Speaking',
  'Leadership Development',
  'Grant Writing',
  'Proposal Writing',
  'Business Registration & Compliance',
  'Microsoft Office',
  'Excel for Business',
  'Power BI',
  'Python Programming',
  'JavaScript',
  'React',
  'Node.js',
  'UI Design with Figma',
  'Data Visualization',
  'Digital Entrepreneurship',
  'Customer Service',
  'Sales & Marketing',
  'Other (Please Specify)',
];

export const OTHER_INTEREST_VALUE = 'Other (Please Specify)';

export const enroll_schema = z
  .object({
    firstName: z.string().trim().min(1, 'Please enter your first name.'),
    lastName: z.string().trim().min(1, 'Please enter your last name.'),
    email: z.email({ error: 'Please enter a valid email address.' }),
    phone: z.e164({ error: 'Please enter a valid phone number.' }),
    country: z.string().min(1, 'Please select your country.'),
    state: z.string().trim().min(1, 'Please enter your state or province.'),
    city: z.string().min(1, 'Please select your city.'),
    educationLevel: z
      .string()
      .min(1, 'Please select your highest level of education.'),
    employmentStatus: z
      .string()
      .min(1, 'Please select your current employment status.'),
    occupation: z.string().trim().optional(),
    courseInterests: z
      .array(z.string())
      .min(1, 'Please select at least one course interest.'),
    otherInterest: z.string().trim().optional(),
    learningPreference: z
      .string()
      .min(1, 'Please select a learning preference.'),
    interestReason: z
      .string()
      .trim()
      .min(20, 'Please share a bit more (at least 20 characters).')
      .max(2000, 'Please keep this under 2000 characters.'),
    goalsAfterTraining: z
      .string()
      .trim()
      .min(20, 'Please share a bit more (at least 20 characters).')
      .max(2000, 'Please keep this under 2000 characters.'),
    consent: z.boolean().refine((value) => value === true, {
      message:
        'Please agree to receive communications about future training opportunities.',
    }),
  })
  .superRefine((data, ctx) => {
    if (
      data.courseInterests.includes(OTHER_INTEREST_VALUE) &&
      !data.otherInterest?.trim()
    ) {
      ctx.addIssue({
        code: 'custom',
        path: ['otherInterest'],
        message: 'Please specify your other interest.',
      });
    }
  });
