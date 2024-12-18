const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
  const { url: requestUrl, method } = req;
  const parsedUrl = url.parse(requestUrl, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  console.log(query)

  if (method === 'GET') {
    if (pathname === '/') {
      res.end('this is the home page');
    } else if (pathname === '/about') {
      res.end('this is the about page');
    } else if (pathname.startsWith('/home.html')) {
      fs.readFile(path.join(__dirname, 'home.html'), 'utf-8', (err, html) => {
        if (err) {
          res.end('error');
        } else {
          let message = '' 
          if (query.name && query.age) {
            message = `<p>Submitted Name: ${query.name}, Age: ${query.age}</p>`;
          }
          const modifiedHtml = html.replace('<!--PLACEHOLDER-->', message);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(modifiedHtml);
          res.end();
        }
      });
    } else {
      res.end('this is the 404 page');
    }
  } else if (method === 'POST') {
    if (pathname === '/create-post') {
      let body = [];
      req.on('data', chunk => {
        body.push(chunk);
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const params = new URLSearchParams(parsedBody);
        const name = params.get('name');
        const age = params.get('age');

        res.statusCode = 302;
        res.setHeader('Location', `/home.html?name=${name}&age=${age}`);
        res.end();
      });
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
