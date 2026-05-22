const API = 'https://api.counterapi.dev/v1/egypte-mmxxvi/visites';

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const url = req.method === 'POST' ? API + '/up' : API;
    const r = await fetch(url);
    const data = await r.json();
    return res.status(200).json({ count: data.count ?? null });
  } catch {
    return res.status(200).json({ count: null });
  }
};
