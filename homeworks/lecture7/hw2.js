/**
 * Implement a HTTP server that serves JSON data where user requests /api/parsetime and /api/unixtime.
 * For example, when the user requests /api/parsetime?iso=sec, the server should
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

const http = require('http')
const PORT = 3000
const url = require('url')

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url)
    console.log('query: ', query)
    const date = new Date(query.split('=')[1])
    
    if(pathname === '/api/parsetime'){
        let [ hours, minutes, seconds ] = [ date.getHours(), date.getMinutes(), date.getSeconds() ]
        res.writeHead(200, { contentType: 'application/json' })
        res.end(JSON.stringify({ 
            "hour": hours,
            "minute": minutes,
            "second": seconds }))
    } else if(pathname === '/api/unixtime'){
        res.end(JSON.stringify({"unixtime": date.getTime()}))
    }

})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})