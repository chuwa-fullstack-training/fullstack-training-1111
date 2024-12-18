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

const server = http.createServer((req, res) => {
    const parseURL = url.parse(req.url, true);
    const {pathname, query } = parseURL;
    const isoTime = query.iso

    if (!isoTime) {
        res.writeHead(400, { contentType: 'application/json'});
        res.end(JSON.stringify({ error: 'Please provide an ISO 8601 date' }));
        return;
    }

    const date = new Date(isoTime);
    if (pathname == '/api/parsetime') {
        const result = {
            hour: date.getUTCHours(),
            minute: date.getUTCMinutes(),
            second: date.getUTCSeconds()
        };
        res.writeHead(200, { contentType: 'application/json' });
        res.end(JSON.stringify(result));
    } else if (pathname == '/api/unixtime') {
        const result = {
            unixtime: date.getTime()
        };
        res.writeHead(200, { contentType: 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404, { contentType: 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid request' }));
    }
})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
  });