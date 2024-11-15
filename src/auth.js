/*const fetch = require('node-fetch');
async function authenticateSalesforce() {
  const response = await fetch(process.env.SALESFORCE_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'password',
      client_id: process.env.SALESFORCE_CLIENT_ID,
      client_secret: process.env.SALESFORCE_CLIENT_SECRET,
      username: process.env.SALESFORCE_USERNAME,
      password: `${process.env.SALESFORCE_PASSWORD}${process.env.SALESFORCE_SECURITY_TOKEN}`,
    }),
  });

  const data = await response.json();
  return data.access_token;
}

module.exports = authenticateSalesforce;*/


const { SALESFORCE_CLIENT_ID, SALESFORCE_CLIENT_SECRET, SALESFORCE_USERNAME, SALESFORCE_PASSWORD, SALESFORCE_BASE_URL } = process.env;


async function getAccessToken() {
    console.log("SALESFORCE_CLIENT_ID:", SALESFORCE_CLIENT_ID); // Log for debugging
    console.log("SALESFORCE_BASE_URL:", SALESFORCE_BASE_URL);

   
    return "dummy_access_token_for_testing";
}

module.exports = { getAccessToken };

