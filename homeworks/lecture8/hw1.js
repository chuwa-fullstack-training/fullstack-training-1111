/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.get('/hw1/:dir/:ext', (req, res) => {
  const { dir, ext } = req.params;

  const baseDir = path.join(__dirname, dir);
  const allowedDir = path.join(__dirname, dir);

  if (!fs.existsSync(allowedDir) || !fs.lstatSync(allowedDir).isDirectory()) {
    return res.status(400).json({ error: `Directory ${dir} is not valid or not a subdirectory of the current directory.` });
  }

  fs.readdir(allowedDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading the directory' });
    }

    const filteredFiles = files.filter(file => path.extname(file) === '.' + ext);

    if (filteredFiles.length > 0) {
      res.json(filteredFiles);
    } else {
      res.status(404).json({ message: `No files with .${ext} extension found in ${dir}` });
    }
  });
});



const express = require('express');
const app = express();

app.get('/api/parsetime', (req, res) => {
  const iso = req.query.iso;

  if (!iso) {
    return res.status(400).json({ error: 'Missing iso parameter' });
  }

  try {
    const date = new Date(iso);

    if (isNaN(date.getTime())) {
      throw new Error('Invalid date');
    }

    res.json({
      hour: date.getUTCHours(),
      minute: date.getUTCMinutes(),
      second: date.getUTCSeconds(),
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/unixtime', (req, res) => {
  const iso = req.query.iso;

  if (!iso) {
    return res.status(400).json({ error: 'Missing iso parameter' });
  }

  try {
    const date = new Date(iso);

    if (isNaN(date.getTime())) {
      throw new Error('Invalid date');
    }

    res.json({ unixtime: date.getTime() });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});





