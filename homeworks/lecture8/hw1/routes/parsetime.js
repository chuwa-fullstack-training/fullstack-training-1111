import {Router} from 'express';

const route = Router();
route.get('/unixtime', (req, res) => {
    const iso = req.query.iso;
    if (!iso) {
        return res.status(400).send('Error: Please provide an "iso" query parameter.');
    }

    const date = new Date(iso);
    if (isNaN(date.getTime())) {
        return res.status(400).send('Error: Invalid ISO date string.');
    }

    const result = {
        unixtime: date.getTime()
    };
    res.json(result);
});

// Route for /api/parsetime
route.get('/parsetime', (req, res) => {
    const iso = req.query.iso;
    if (!iso) {
        return res.status(400).send('Error: Please provide an "iso" query parameter.');
    }

    const date = new Date(iso);
    if (isNaN(date.getTime())) {
        return res.status(400).send('Error: Invalid ISO date string.');
    }

    const result = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
    res.json(result);
});

export default route;