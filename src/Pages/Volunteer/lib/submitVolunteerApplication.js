import { VOLUNTEER_APPLICATION_WEBHOOK_URL } from '../../../config/forms';
import { submitGoogleSheetWebhook } from '../../../lib/forms/submitGoogleSheetWebhook';

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || '');
      const base64 = result.includes(',') ? result.split(',')[1] : result;
      resolve(base64 || '');
    };
    reader.onerror = () =>
      reject(new Error('Could not read the resume file. Please try again.'));
    reader.readAsDataURL(file);
  });
}

/**
 * Maps Volunteer form values to a flat payload for the Volunteer Google Sheet.
 * Separate from Enroll/Pilots so field shapes can evolve independently.
 */
export async function buildVolunteerApplicationPayload(values) {
  const resume = values.resum;
  const resumeBase64 = resume instanceof File ? await fileToBase64(resume) : '';

  return {
    formType: 'volunteer_application',
    fullName: values.fullName.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    country: values.country,
    city: values.city,
    linkedin: values.linkedin.trim(),
    interest: values.interest,
    motivation: values.motivation.trim(),
    agreement: values.agreement ? 'Yes' : 'No',
    resumeFileName: resume instanceof File ? resume.name : '',
    resumeMimeType: resume instanceof File ? resume.type || '' : '',
    resumeSize: resume instanceof File ? resume.size : 0,
    resumeBase64,
    submittedAt: new Date().toISOString(),
  };
}

export async function submitVolunteerApplication(values) {
  if (!VOLUNTEER_APPLICATION_WEBHOOK_URL) {
    throw new Error(
      'Volunteer form webhook is not configured yet. Please add the Apps Script URL.',
    );
  }

  const payload = await buildVolunteerApplicationPayload(values);

  await submitGoogleSheetWebhook(VOLUNTEER_APPLICATION_WEBHOOK_URL, payload, {
    errorMessage:
      'We could not submit your volunteer application. Please try again in a moment.',
  });

  return payload;
}
