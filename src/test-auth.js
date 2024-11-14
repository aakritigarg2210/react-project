/*const authenticateSalesforce = require('./auth');

export default async function handler(req, res) {
  try {
    // Authenticate with Salesforce
    const accessToken = await authenticateSalesforce();

    // Test API call to Salesforce
    const response = await fetch(`${process.env.SALESFORCE_API_URL}/services/data/v62.0/sobjects/Account`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const data = await response.json();

    // Respond with data to confirm successful integration
    res.status(200).json({ message: "Salesforce integration is working", data });
  } catch (error) {
    res.status(500).json({ message: "Salesforce integration failed", error: error.message });
  }
}*/
// testAuth.js
// api/testAuth.js
const { getAccessToken } = require('../auth');

export default async function handler(req, res) {
    try {
        const token = await getAccessToken();
        res.status(200).json({ accessToken: token });
    } catch (error) {
        res.status(500).json({ error: "Error fetching access token", details: error.message });
    }
}
