const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/:dir/:ext', (req, res) => {
    const dir = req.params.dir;
    const ext = '.' + req.params.ext;
    const fullPath = path.join(__dirname, dir);

    fs.readdir(fullPath, (err, files) => {
        if(err) {

            res.send(`Error reading directory ${err.message}`);
            return;
        }

        const filtered = files.filter(file => path.extname(file) === ext);
        res.json(filtered);
    });
});

module.exports = router;
