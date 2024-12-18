const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

 
router.get('/:dir/:ext', (req, res) => {
  const { dir, ext } = req.params;
  const directoryPath = path.join(__dirname, '..', dir);

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return res.status(500).send('Error reading directory');
    }

    const filteredFiles = files.filter(file => path.extname(file) === '.' + ext);
     res.type('text').send(filteredFiles.join('\n'));
  });
});

module.exports = router;
