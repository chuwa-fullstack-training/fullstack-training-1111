const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// /hw1/<dir>/<ext>
router.get('/:dir/:ext', (req, res) => {
  let dir = req.params.dir;
  let ext = req.params.ext;
  fs.readdir(dir, (err, files) => {
    if (err) {
      res.status(400).send(err.message);
      return;
    }

    files.filter((f) => path.extname(f) === ext);
    res.json({files});
    res.send('Get all files name');
  });
});

module.exports = router;

/**
 * http://localhost:3000/hw1/..%2F..%2Fsample_code%2Flecture7/js
 * return:
 * {
    "files": [
        "demo.js",
        "demo.txt",
        "esmodule-use.js",
        "esmodule.js",
        "fs-esmodule-use.js",
        "fs-use.js",
        "global-variables.js",
        "home.html",
        "http-client.js",
        "http-server.js",
        "module-use.js",
        "module1.js",
        "module2.js",
        "package.json",
        "static-demo",
        "web-server.js"
    ]
}
 */
