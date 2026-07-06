import { PILOT_INTEREST_WEBHOOK_URL } from '../../../config/forms';

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

function parseWebhookResponse(text) {
  if (!text?.trim()) {
    return { ok: true };
  }

  try {
    const data = JSON.parse(text);
    if (data.success === false || data.result === 'error') {
      return {
        ok: false,
        message:
          typeof data.message === 'string'
            ? data.message
            : 'We could not submit your interest. Please try again.',
      };
    }
    return { ok: true };
  } catch {
    // GAS may return plain text on success
    return { ok: true };
  }
}

/**
 * POST pilot interest data to the Google Apps Script webhook.
 * Uses text/plain to avoid CORS preflight with Apps Script deployments.
 */
export async function submitPilotInterest(values, source) {
  const payload = buildPilotInterestPayload(values, source);

  const response = await fetch(PILOT_INTEREST_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  const text = await response.text().catch(() => '');
  const result = parseWebhookResponse(text);

  if (!response.ok || !result.ok) {
    throw new Error(
      result.message ||
        'We could not submit your interest. Please try again in a moment.',
    );
  }

  return payload;
}
