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
const http = require("http");
const url = require("url");

function handleParseTime(req, res) {
  try {
    const { query } = url.parse(req.url, true);
    const date = new Date(query.iso);
    const response = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response));
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
}

function handleUnixTime(req, res) {
  try {
    const { query } = url.parse(req.url, true);
    const unixtime = Date.parse(query.iso);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ unixtime }));
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
}

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  switch (pathname) {
    case "/api/parsetime":
      handleParseTime(req, res);
      break;
    case "/api/unixtime":
      handleUnixTime(req, res);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
  }
});
const port = process.env.PORT || 3000;
server.listen(port);
