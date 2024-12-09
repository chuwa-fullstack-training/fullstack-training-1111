const express = require('express')
const router = express.Router()

router.get('/parsetime', (req, res) => {
    const date = new Date(req.query.iso)
    let [ hours, minutes, seconds ] = [ date.getHours(), date.getMinutes(), date.getSeconds() ]
    res.json({ hours, minutes, seconds })
})

router.get('/unixtime', (req, res) => {
    const date = new Date(req.query.iso)
    res.json({ unixtime: date.getTime() })
})

module.exports = router;