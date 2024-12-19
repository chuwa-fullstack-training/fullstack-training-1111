const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();


router.get('/hw1/:dir/:ext', (req, res) => {
  const { dir, ext } = req.params;
  const directoryPath = path.join(__dirname, '..', dir);

  if (dir.includes('/') || ext.includes('/')) {
    return res.status(400).send('Invalid directory or extension format');
  }

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).send(`Error reading directory: ${err.message}`);
    }

    const filteredFiles = files.filter(file => path.extname(file) === `.${ext}`);
    res.json(filteredFiles);
  });
});

module.exports = router;