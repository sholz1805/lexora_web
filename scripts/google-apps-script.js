// Google Apps Script for Lexora insight submissions
// 1. Open https://script.google.com
// 2. Create a new project
// 3. Replace the entire contents with this script
// 4. Set the spreadsheet ID and sheet name below
// 5. Deploy as Web App with Execute as: Me and Who has access: Anyone
// 6. Copy the Web App URL into the site env var: INSIGHT_FORM_WEBHOOK_URL

const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID";
const SHEET_NAME = "Submissions";

function doPost(e) {
  try {
    const data = e.postData?.contents ? JSON.parse(e.postData.contents) : {};

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.getSheets()[0];

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const row = [];

    const getValue = (key) => {
      const value = data[key];
      return value === undefined || value === null ? "" : String(value);
    };

    const requiredHeaders = [
      "Timestamp",
      "Name",
      "Email",
      "Company",
      "Category",
      "InterestType",
      "Link",
      "Message",
    ];

    if (!headers || headers.length === 0) {
      sheet.appendRow(requiredHeaders);
      return ContentService.createTextOutput(JSON.stringify({ ok: true, message: "Headers initialized." }));
    }

    const headerMap = {};
    headers.forEach((header, index) => {
      headerMap[String(header).trim()] = index;
    });

    const rowData = {
      Timestamp: new Date().toISOString(),
      Name: getValue("name"),
      Email: getValue("email"),
      Company: getValue("company"),
      Category: getValue("category"),
      InterestType: getValue("interestType"),
      Link: getValue("link"),
      Message: getValue("message"),
    };

    const normalizedHeaders = Object.keys(rowData);
    const currentHeaders = new Set(headers.map((h) => String(h).trim()));

    normalizedHeaders.forEach((header) => {
      if (!currentHeaders.has(header)) {
        sheet.getRange(1, headers.length + 1).setValue(header);
        headers.push(header);
        currentHeaders.add(header);
      }
    });

    const values = normalizedHeaders.map((header) => rowData[header] || "");
    sheet.appendRow(values);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }));
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: error.message }));
  }
}
