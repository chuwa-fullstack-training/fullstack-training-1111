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
var url = require("url");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const searchParam = url.parse(req.url).search;
    if (url.parse(req.url).pathname === '/api/parsetime') {
      if (searchParam) {
        const time = searchParam.split('=')[1].substring(11);
        res.writeHead(200, { contentType: 'application/json' })
        res.end(JSON.stringify({ hour: time.split(':')[0], minute: time.split(':')[1], second: time.split(':')[2].substring(0, 2) }));
      } else {
        res.end('Unsupported method');
      }
    } else if (url.parse(req.url).pathname === '/api/unixtime') {
      if (searchParam) {
        res.writeHead(200, { contentType: 'application/json' })
        res.end(JSON.stringify({ unixtime: new Date(searchParam.split('=')[1]).getTime()}));
      } else {
        res.end('Unsupported method');
      }
    }
   } else {
    res.end('Unsupported method');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});