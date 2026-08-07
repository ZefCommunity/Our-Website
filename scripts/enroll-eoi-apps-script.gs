/**
 * Google Apps Script for ZEF Enroll EOI → Google Sheet
 *
 * Setup (same pattern as Pilot Interest):
 * 1. Open the Enroll Google Sheet
 * 2. Extensions → Apps Script
 * 3. Paste this entire file (replace any existing code)
 * 4. Optional: put headers in row 1 of the sheet (see HEADER_ROW below)
 * 5. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the /exec URL into src/config/forms.js → ENROLL_EOI_WEBHOOK_URL
 *
 * IMPORTANT: Create this script FROM the Enroll spreadsheet (Extensions → Apps Script)
 * so getActiveSpreadsheet() works. Standalone scripts need openById() instead.
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.firstName || '',
      data.lastName || '',
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.country || '',
      data.state || '',
      data.city || '',
      data.educationLevel || '',
      data.employmentStatus || '',
      data.occupation || '',
      data.courseInterests || '',
      data.learningPreference || '',
      data.interestReason || '',
      data.goalsAfterTraining || '',
      data.consent || '',
    ]);

    // Email is best-effort so a missing mail permission does not fail the form.
    try {
      MailApp.sendEmail({
        to: 'media@zurfteempowercare.org',
        subject: 'New ZEF Enroll EOI Submission',
        htmlBody: `
          <h3>New Enroll Expression of Interest</h3>
          <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
          <p><strong>Country:</strong> ${escapeHtml(data.country)}</p>
          <p><strong>State:</strong> ${escapeHtml(data.state)}</p>
          <p><strong>City:</strong> ${escapeHtml(data.city)}</p>
          <p><strong>Education:</strong> ${escapeHtml(data.educationLevel)}</p>
          <p><strong>Employment:</strong> ${escapeHtml(data.employmentStatus)}</p>
          <p><strong>Occupation:</strong> ${escapeHtml(data.occupation)}</p>
          <p><strong>Course Interests:</strong> ${escapeHtml(data.courseInterests)}</p>
          <p><strong>Learning Preference:</strong> ${escapeHtml(data.learningPreference)}</p>
          <p><strong>Consent:</strong> ${escapeHtml(data.consent)}</p>
          <p><strong>Why interested:</strong><br>${escapeHtml(data.interestReason)}</p>
          <p><strong>Goals after training:</strong><br>${escapeHtml(data.goalsAfterTraining)}</p>
        `,
      });
    } catch (mailErr) {
      console.error('Enroll EOI email failed:', mailErr);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ success: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Optional: run once from the Apps Script editor to write header labels in row 1.
 */
function setupHeaderRow() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange(1, 1, 1, 17).setValues([
    [
      'Timestamp',
      'First Name',
      'Last Name',
      'Full Name',
      'Email',
      'Phone',
      'Country',
      'State',
      'City',
      'Education Level',
      'Employment Status',
      'Occupation',
      'Course Interests',
      'Learning Preference',
      'Interest Reason',
      'Goals After Training',
      'Consent',
    ],
  ]);
}
