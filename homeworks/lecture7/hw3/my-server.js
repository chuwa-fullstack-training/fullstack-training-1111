const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) => {
    const {url, method} = req;
    if(method === 'GET') {
        if(url === '/') {
            res.end('this is the home page');
        } else if(url === '/about') {
            res.end('this is the about page');
        } else if(url.startsWith('/home.html')) {
            fs.readFile(path.join(__dirname, 'home.html'), (err, html) => {
                if(err) {
                    res.end("error loading page")
                } else {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(html);
                    res.end();
                }
            });
        } else {
            res.end('404 Not Found');
        }
    } else if(method === 'POST') {
        if(url === '/create-post') {
            let body = [];
            req.on('data', chunk => {
                body.push(chunk);
            });
            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                res.end(parsedBody);
            });
        } else {
            res.end('404 Not Found');
        }
    } else {
        res.end('Unsupported method');
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
