const { google } = require('googleapis');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Load credentials from the JSON key file
const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});





// Add a subscriber to the Google Sheet
const addSubscriber = async (email) => {
  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const range = "Sheet!A:A"; // Ensure this is the correct sheet name and range

  // Append the email to the sheet
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[email]],
    },
  });
};

module.exports = { addSubscriber };