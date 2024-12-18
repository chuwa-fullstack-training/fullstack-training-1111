const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const sendJsonResponse = (res, statusCode, response) => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(response));
};

router.get('/hw1/:dir/:ext', (req, res) => {
  try {
    const { dir, ext } = req.params;
    const directory = path.join('', dir);
    console.log(directory)
    fs.readdir(directory, (err, files) => {
      if (err) {
        sendJsonResponse(res, 400, { error: 'Invalid directory' });
      }

      if (!files) {
        sendJsonResponse(res, 400, { error: 'Empty directory'});
      }
      const result = [];
    
      files.forEach(file => {
        if (path.extname(file) === `.${ext}`) {
          result.push(file);
        }
      });
      sendJsonResponse(res, 200, {files: result});
    });
    
  } catch (err) {
    sendJsonResponse(res, 404, "Not Found");
  }
})

module.exports = router;