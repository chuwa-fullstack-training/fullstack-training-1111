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
const PORT = 3000;

const router = express.Router();

router.get("/hw1/:dir/:ext", (req, res) => {
    const dir = req.params.dir;
    const ext = "." + req.params.ext;

    const directoryPath = path.join(__dirname, "..", dir);

    fs.readdir(directoryPath, (err, file) => {
        if (err) {
            return res.status(500).json({ error: "Error" });
        }

        let fileOutput = file.filter(f => path.extname(f) === ext);
    
        res.json({ files: fileOutput });
    })
})

// Test
// URL: http://localhost:3000/hw1/lecture8/js
// Output: {
//  "files": [
//    "hw1.js",
//    "hw2.js",
//    "hw3.js"
//  ]
//}

router.get("/hw2/api/:type", (req, res) => {
    const { type } = req.params;
    const iso = req.query.iso;
    const date = new Date(iso);

    if (type === "unixtime") {
        res.json({ unixtime: date.getTime() });
    } else if (type === "parsetime") {
        res.json({
            hour: date.getUTCHours(),
            minute: date.getUTCMinutes(),
            second: date.getUTCSeconds()
        })
    }
})

// Test
// Input: http://localhost:3000/hw2/api/parsetime?iso=2023-05-22T12:34:56.789Z
// Output:
// {
//     "hour": 12,
//     "minute": 34,
//     "second": 56
// }
// Input: http://localhost:3000/hw2/api/unixtime?iso=2023-05-22T12:34:56.789Z
// Output:
// {
//     "unixtime": 1684758896789
// }

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})