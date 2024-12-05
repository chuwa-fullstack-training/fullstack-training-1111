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
const PORT = 3000;

function handler(req, res) {
    // Parse the url into an object
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    const date = new Date(query.iso);

    if (pathname === "/api/unixtime") {
        const result = {
            unixtime: date.getTime()
        }

        res.writeHead(200, { contentType: 'application/json' })
        res.end(JSON.stringify(result))
    }else if (pathname === "/api/parsetime") {
        const result = {
            hour: date.getUTCHours(),
            minute: date.getUTCMinutes(),
            second: date.getUTCSeconds()
        }

        res.writeHead(200, { contentType: 'application/json' })
        res.end(JSON.stringify(result))
    }else {
        res.writeHead(404, { ContentType: "application/json" });
        res.end(JSON.stringify({ error: "Invalid pathname" }));
    }
}

const server = http.createServer(handler);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// Test Output:

// Input: http://localhost:3000/api/parsetime?iso=2024-12-05T17:48:39.789Z
// Output: {"hour":17,"minute":48,"second":39}

// Input: http://localhost:3000/api/unixtime?iso=2024-12-05T17:48:39.789Z
// Output: {"unixtime":1733420919789}
