const express = require("express");
const fs = require('fs')
const path = require('path')

const router = express.Router()

router.get('/:dir/:ext', (req, res) => {
    const { dir, ext } = req.params;
    const directory = path.join(__dirname, dir)

    fs.readdir(directory, (err, data) => {
        if(err){ 
            res.send('Not able to read the requested directory')
        } else {
            let result = data.filter( file => path.extname(file) === `.${ext}`)
            res.json({ result })
        }
    })
})

module.exports = router;