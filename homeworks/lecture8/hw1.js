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

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// hw1 Router
const hw1Router = express.Router();

hw1Router.get("/:dir/:ext", (req, res) => {
  const directory = path.join(__dirname, req.params.dir);
  const extensionFilter = `.${req.params.ext}`;

  fs.readdir(directory, (err, files) => {
    if (err) {
      res
        .status(500)
        .json({ error: `Error reading directory: ${err.message}` });
      return;
    }

    const filteredFiles = files.filter(
      (file) => path.extname(file) === extensionFilter
    );
    res.json(filteredFiles);
  });
});

const hw2Router = express.Router();

hw2Router.get("/parsetime", (req, res) => {
  const isoTime = req.query.iso;

  if (!isoTime) {
    res.status(400).json({ error: "Missing iso query parameter" });
    return;
  }

  const date = new Date(isoTime);
  if (isNaN(date.getTime())) {
    res.status(400).json({ error: "Invalid ISO time format" });
    return;
  }

  const timeData = {
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds(),
  };

  res.json(timeData);
});

hw2Router.get("/unixtime", (req, res) => {
  const isoTime = req.query.iso;

  if (!isoTime) {
    res.status(400).json({ error: "Missing iso query parameter" });
    return;
  }

  const date = new Date(isoTime);
  if (isNaN(date.getTime())) {
    res.status(400).json({ error: "Invalid ISO time format" });
    return;
  }

  const unixTimeData = {
    unixtime: date.getTime(),
  };

  res.json(unixTimeData);
});

app.use("/hw1", hw1Router);
app.use("/hw2", hw2Router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
