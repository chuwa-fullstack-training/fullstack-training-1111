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
const PORT = 3000;

const server = http.createServer((req, res) => {
    // 解析 URL 和查询参数
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const isoTime = parsedUrl.query.iso; // 获取 `iso` 参数

    // 设置 JSON 响应头
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (pathname === '/api/parsetime' && isoTime) {
        // 解析时间，返回 hour, minute, second
        const date = new Date(isoTime);
        const response = {
            hour: date.getUTCHours(),
            minute: date.getUTCMinutes(),
            second: date.getUTCSeconds(),
        };
        res.end(JSON.stringify(response));
    } else if (pathname === '/api/unixtime' && isoTime) {
        // 返回 Unix 时间戳
        const date = new Date(isoTime);
        const response = { unixtime: date.getTime() };
        res.end(JSON.stringify(response));
    } else {
        // 无效路径或参数
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid endpoint or parameters' }));
    }
});

// 启动服务器
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
