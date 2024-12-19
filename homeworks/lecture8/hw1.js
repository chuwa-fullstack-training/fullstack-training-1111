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
const app = express();

app.get('/hw1/:dir/:ext', (req, res) => {
    const dir = req.params.dir;
    const ext = req.params.ext;
    fs.readdir(dir, (err, files) => {
        if (err)
            console.log(err);
        else {
            const filesext = files.filter(file => {
                return path.extname(file).substring(1) === ext;
            });
            res.writeHead(200, { contentType: 'application/json' })
            res.end(JSON.stringify({ files: filesext}));
        }
    });

});

app.get('/hw2/api/parsetime', (req, res) => {
    const time = req.query.iso.substring(11);
    res.writeHead(200, { contentType: 'application/json' })
    res.end(JSON.stringify({ hour: time.split(':')[0], minute: time.split(':')[1], second: time.split(':')[2].substring(0, 2) }));
});

app.get('/hw2/api/unixtime', (req, res) => {
    res.writeHead(200, { contentType: 'application/json' })
    res.end(JSON.stringify({ unixtime: new Date(req.query.iso).getTime()}));
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});