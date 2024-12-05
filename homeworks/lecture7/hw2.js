/**
 * Implement a HTTP server that serves JSON data where user requests /api/parsetime and /api/unixtime.
 * For example, when the user requests /api/parsetime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing only 'hour', 'minute' and 'second' properties.
 * {
 *  "hour": 12,
 *  "minute": 34,
 *  "second": 56
 * }
 * Similarly, when the user requests /api/unixtime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing a 'unixtime' property.
 * {
 *  "unixtime": 1684758896789
 * }
 *
 * HINTS:
 * 1. Use url.parse() method to parse URL strings.
 * 2. response.writeHead(200, { contentType: 'application/json' })
 */

// your code here

const http = require('http');
const url = require('url');
const port = 3000;

const server = http.createServer((req, res) => {
    const urlObj = url.parse(req.url, true);
    const path = urlObj.pathname;
    const iso = urlObj.query.iso;

    if(!iso) {
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Missing iso'}));
        return;
    }

    const date = new Date(iso);

    if(path === '/api/parsetime') {
        const ret = {
            hour: date.getUTCHours(),
            minute: date.getUTCMinutes(),
            second: date.getUTCSeconds()

        };

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ret));
    } else if(path === '/api/unixtime') {
        const ret = {
            unixtime: date.getTime()
        };

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ret));
    } else {
        res.end("Page 404");
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
