import { ENROLL_EOI_WEBHOOK_URL } from '../../../config/forms';
import { submitGoogleSheetWebhook } from '../../../lib/forms/submitGoogleSheetWebhook';
import { OTHER_INTEREST_VALUE } from '../../../lib/schemas/enroll.s';

/**
 * Maps Enroll EOI form values to a flat payload for Google Sheets.
 * Kept separate from the UI so a future API can swap this module only.
 */
export function buildEnrollEoiPayload(values) {
  const interests = values.courseInterests.filter(
    (item) => item !== OTHER_INTEREST_VALUE,
  );
  const other = values.otherInterest?.trim();

  if (values.courseInterests.includes(OTHER_INTEREST_VALUE) && other) {
    interests.push(`Other: ${other}`);
  }

  return {
    formType: 'enroll_eoi',
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    fullName: `${values.firstName.trim()} ${values.lastName.trim()}`,
    email: values.email.trim(),
    phone: values.phone.trim(),
    country: values.country,
    state: values.state.trim(),
    city: values.city,
    educationLevel: values.educationLevel,
    employmentStatus: values.employmentStatus,
    occupation: values.occupation?.trim() || '',
    courseInterests: interests.join('; '),
    learningPreference: values.learningPreference,
    interestReason: values.interestReason.trim(),
    goalsAfterTraining: values.goalsAfterTraining.trim(),
    consent: values.consent ? 'Yes' : 'No',
    submittedAt: new Date().toISOString(),
  };
}

export async function submitEnrollEoi(values) {
  const payload = buildEnrollEoiPayload(values);

  await submitGoogleSheetWebhook(ENROLL_EOI_WEBHOOK_URL, payload, {
    errorMessage:
      'We could not submit your expression of interest. Please try again in a moment.',
  });

  return payload;
}
