const express = require('express');
const router = express.Router();

 
router.get('/api/parsetime', (req, res) => {
  const iso = req.query.iso;
  if (!iso) {
    return res.status(400).json({ error: 'Missing iso query parameter' });
  }
  
  const date = new Date(iso);
  const result = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
  
  res.json(result);
});

router.get('/api/unixtime', (req, res) => {
  const iso = req.query.iso;
  if (!iso) {
    return res.status(400).json({ error: 'Missing iso query parameter' });
  }

  const date = new Date(iso);
  const result = { unixtime: date.getTime() };
  
  res.json(result);
});

module.exports = router;
