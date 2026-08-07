import { PILOT_INTEREST_WEBHOOK_URL } from '../../../config/forms';
import { submitGoogleSheetWebhook } from '../../../lib/forms/submitGoogleSheetWebhook';

const DEFAULT_SOURCE = 'direct';

/**
 * Maps form state to the Google Apps Script webhook field names.
 */
export function buildPilotInterestPayload(values, source = DEFAULT_SOURCE) {
  return {
    fullName: values.fullName.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    pilot: values.pilotInterest,
    userType: values.audienceRole,
    state: values.location.trim(),
    goals: values.goals.trim(),
    consent: values.consent ? 'Yes' : 'No',
    source: source?.trim() || DEFAULT_SOURCE,
  };
}

/**
 * POST pilot interest data to the Google Apps Script webhook.
 * Uses text/plain to avoid CORS preflight with Apps Script deployments.
 */
export async function submitPilotInterest(values, source) {
  const payload = buildPilotInterestPayload(values, source);

  await submitGoogleSheetWebhook(PILOT_INTEREST_WEBHOOK_URL, payload, {
    errorMessage:
      'We could not submit your interest. Please try again in a moment.',
  });

  return payload;
}
