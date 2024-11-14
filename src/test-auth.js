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
