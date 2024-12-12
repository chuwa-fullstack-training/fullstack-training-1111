const express = require('express');
const router = express.Router();
const path = require('path');
const url = require('url');

// /hw2/api/parsetime/
router.get('/api/parsetime', (req, res) => {
  try {
    let time = new Date(req.query.iso);
    let parsetime = {
      hour: time.getUTCHours(),
      minute: time.getMinutes(),
      second: time.getSeconds(),
    };
    res.status(200).json(parsetime);
  } catch (err) {
    res.status(400).send(`Error encountered - ${err.message}`);
  }
});

router.get('/api/unixtime', (req, res) => {
  try {
    let time = new Date(req.query.iso);
    let unixtime = {
      unixtime: time.getTime(),
    };
    res.status(200).json(unixtime);
  } catch (err) {
    res.status(400).send(`Error encountered - ${err.message}`);
  }
});

module.exports = router;

/**
 * http://localhost:3000/hw2/api/parsetime?iso=2023-05-22T12:34:56.789Z
 * {"hour":12,"minute":34,"second":56}
 *
 * http://localhost:3000/hw2/api/unixtime?iso=2023-05-22T12:34:56.789Z
 * {"unixtime":1684758896789}
 */
