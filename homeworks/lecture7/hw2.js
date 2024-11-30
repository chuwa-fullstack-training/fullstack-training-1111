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

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
  const {url: addr, method} = req;
  const parsedURL = url.parse(addr, true);
  if (method === 'GET') {
    const route = parsedURL.pathname;
    let body = {};
    if (route === '/api/parsetime/') {
      try {
        let time = new Date(parsedURL.query['iso']);
        body = {
          hour: time.getUTCHours(),
          minute: time.getMinutes(),
          second: time.getSeconds(),
        };
      } catch (err) {
        res.end(`Error encountered - ${err.message}`);
      }
    } else if (route === '/api/unixtime/') {
      let time = new Date(parsedURL.query['iso']);
      body = {
        unixtime: time.getTime(),
      };
    }
    res.writeHead(200, {contentType: 'application/json'});
    res.end(JSON.stringify(body));
  } else {
    res.end(`Unsupported method - ${method}`);
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

/**
 * http://localhost:3000/api/parsetime/?iso=2023-05-22T12:34:56.789Z
 * {"hour":12,"minute":34,"second":56}
 *
 * http://localhost:3000/api/unixtime/?iso=2023-05-22T12:34:56.789Z
 * {"unixtime":1684758896789}
 */
