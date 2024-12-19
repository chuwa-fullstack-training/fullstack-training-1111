const express = require('express');
const router = express.Router();

function parseTime(isoTime) {
  const date = new Date(isoTime);
  return {
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds(),
  };
}

function unixTime(isoTime) {
  const date = new Date(isoTime);
  return { unixtime: date.getTime() };
}

router.get('/api/parsetime', (req, res) => {
  const { iso } = req.query;

  if (!iso) {
    return res.status(400).json({ error: 'Missing "iso" query parameter' });
  }

  res.json(parseTime(iso));
});

router.get('/api/unixtime', (req, res) => {
  const { iso } = req.query;

  if (!iso) {
    return res.status(400).json({ error: 'Missing "iso" query parameter' });
  }

  res.json(unixTime(iso));
});

module.exports = router;