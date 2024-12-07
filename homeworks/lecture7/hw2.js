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
  const parsedUrl = url.parse(req.url, true); 
  const time = parsedUrl.query.iso;
  const method = req.method;

  res.writeHead(200, { contentType: 'application/json' })

  if (method === 'GET') {
    if (parsedUrl.pathname === '/') {
      res.end(JSON.stringify({ message: 'this is the home page' }));
    } else if (parsedUrl.pathname === '/api/parsetime') {
      const date = new Date(time);
      const result = {
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second: date.getUTCSeconds(),
      };
      res.end(JSON.stringify(result));
    } else if (parsedUrl.pathname === '/api/unixtime') {
      const date = new Date(time);
      const result = { 
        unixtime: date.getTime() 
      };
      res.end(JSON.stringify(result));
    } else {
      res.end('this is the 404 page');
    }
  } else {
    res.end('Unsupported method');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});