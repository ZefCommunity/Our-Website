/**
 * Shared Google Apps Script → Sheets submission helper.
 * Uses text/plain to avoid CORS preflight with Apps Script deployments.
 */

function parseWebhookResponse(text) {
  if (!text?.trim()) {
    return { ok: true };
  }

  try {
    const data = JSON.parse(text);
    if (data.success === false || data.result === 'error') {
      const detail =
        (typeof data.message === 'string' && data.message) ||
        (typeof data.error === 'string' && data.error) ||
        null;

      // Apps Script often writes the row first, then fails on MailApp auth.
      // Treat that as success so the form does not show a false error.
      if (
        typeof detail === 'string' &&
        detail.includes('MailApp.sendEmail')
      ) {
        return { ok: true };
      }

      return {
        ok: false,
        message:
          detail ||
          'We could not submit your response. Please try again.',
      };
    }
    return { ok: true };
  } catch {
    return { ok: true };
  }
}

/**
 * @param {string} webhookUrl
 * @param {Record<string, unknown>} payload
 * @param {{ errorMessage?: string }} [options]
 */
export async function submitGoogleSheetWebhook(
  webhookUrl,
  payload,
  options = {},
) {
  const errorMessage =
    options.errorMessage ||
    'We could not submit your response. Please try again in a moment.';

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  const text = await response.text().catch(() => '');
  const result = parseWebhookResponse(text);

  if (!response.ok || !result.ok) {
    throw new Error(result.message || errorMessage);
  }

  return payload;
}
