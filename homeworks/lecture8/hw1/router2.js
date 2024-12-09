const express = require('express');
const router = express.Router();

router.get('/parsetime', (req, res) => {
    const iso = req.query.iso;

    if(!iso) {
        res.send('Error: Missing iso');
        return;
    }

    const date = new Date(iso);
    const ret = {
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second: date.getUTCMinutes()
    };

    res.json(ret);
});

router.get('/unixtime', (req, res) => {
    const iso = req.query.iso;

    if(!iso) {
        res.send('Error: Missing iso');
        return;
    }

    const date = new Date(iso);
    const ret = {
        unixtime: date.getTime()
    };

    res.json(ret);
});

module.exports = router;
