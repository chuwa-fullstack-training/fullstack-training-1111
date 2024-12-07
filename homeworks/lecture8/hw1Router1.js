const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/:dir/:ext', (req, res) => {
  const { dir, ext } = req.params;
  const directoryPath = path.join(__dirname, dir);

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read directory' });
    } else {
      const filteredFiles = files.filter(file => path.extname(file) === `.${ext}`);
      res.json({ files: filteredFiles });
    }
  });
});

module.exports = router;