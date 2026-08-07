/**
 * Google Apps Script for ZEF Volunteer Applications → Google Sheet + Drive
 *
 * Setup:
 * 1. Create a NEW Google Sheet for Volunteer Applications (do not reuse Enroll/Pilots)
 * 2. Extensions → Apps Script → paste this file
 * 3. Optional: run setupHeaderRow() once
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Paste the /exec URL into src/config/forms.js → VOLUNTEER_APPLICATION_WEBHOOK_URL
 *
 * IMPORTANT: Create this script FROM the Volunteer spreadsheet so getActiveSpreadsheet() works.
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    const resumeUrl = saveResumeToDrive_(data);

    sheet.appendRow([
      new Date(),
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.country || '',
      data.city || '',
      data.linkedin || '',
      data.interest || '',
      data.motivation || '',
      data.agreement || '',
      data.resumeFileName || '',
      resumeUrl,
    ]);

    try {
      MailApp.sendEmail({
        to: 'elliott@zurfteempowercare.org',
        subject: 'New ZEF Volunteer Application',
        htmlBody: `
          <h3>New Volunteer Application</h3>
          <p><strong>Name:</strong> ${data.fullName || ''}</p>
          <p><strong>Email:</strong> ${data.email || ''}</p>
          <p><strong>Phone:</strong> ${data.phone || ''}</p>
          <p><strong>Country:</strong> ${data.country || ''}</p>
          <p><strong>City:</strong> ${data.city || ''}</p>
          <p><strong>LinkedIn:</strong> ${data.linkedin || ''}</p>
          <p><strong>Interest:</strong> ${data.interest || ''}</p>
          <p><strong>Agreement:</strong> ${data.agreement || ''}</p>
          <p><strong>Resume:</strong> ${resumeUrl || data.resumeFileName || 'Not attached'}</p>
          <p><strong>Motivation:</strong><br>${data.motivation || ''}</p>
        `,
      });
    } catch (mailErr) {
      console.error('Volunteer application email failed:', mailErr);
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

function saveResumeToDrive_(data) {
  if (!data.resumeBase64 || !data.resumeFileName) {
    return '';
  }

  const folder = getResumeFolder_();
  const mimeType = data.resumeMimeType || 'application/octet-stream';
  const blob = Utilities.newBlob(
    Utilities.base64Decode(data.resumeBase64),
    mimeType,
    data.resumeFileName,
  );
  const file = folder.createFile(blob);
  return file.getUrl();
}

function getResumeFolder_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ssFile = DriveApp.getFileById(ss.getId());
  const parents = ssFile.getParents();
  const parent = parents.hasNext() ? parents.next() : DriveApp.getRootFolder();
  const existing = parent.getFoldersByName('Volunteer Resumes');
  return existing.hasNext()
    ? existing.next()
    : parent.createFolder('Volunteer Resumes');
}

function setupHeaderRow() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange(1, 1, 1, 12).setValues([
    [
      'Timestamp',
      'Full Name',
      'Email',
      'Phone',
      'Country',
      'City',
      'LinkedIn',
      'Interest',
      'Motivation',
      'Agreement',
      'Resume File Name',
      'Resume URL',
    ],
  ]);
}
