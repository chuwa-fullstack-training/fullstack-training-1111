const express = require('express');
const router = express.Router();

router.get('/parsetime', (req, res) => {
  const date = new Date(req.query.iso);
  res.json({
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds(),
  });
});

router.get('/unixtime', (req, res) => {
  const date = new Date(req.query.iso);
  res.json({
    unixtime: date.getTime(),
  });
});

module.exports = router;