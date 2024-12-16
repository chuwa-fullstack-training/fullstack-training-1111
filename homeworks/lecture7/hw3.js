/**
 * For sample code web-server.js, make the following changes:
 * Once submitting in home.html, stay on the same page and display the submitted data.
 * 
 * Hint:
 * 1. put the data of the submitted form in the query string of the url
 * 2. before res.end() in POST method, redirect to the home.html page with the query string
 *  - i.e. res.statusCode = 302; res.setHeader('Location', '/home.html?name=John&age=20');
 * 3. you need to figure out how to parse the query string in the home.html page
 * 4. after writing the html content, you need to write the query string in the html as well
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const { url: requestUrl, method } = req;
  const parsedUrl = url.parse(requestUrl, true);  

  if (method === 'GET') {
    if (requestUrl === '/') {
      res.end('this is the home page');
    } else if (requestUrl === '/about') {
      res.end('this is the about page');
    } else if (requestUrl === '/home.html' || requestUrl.startsWith('/home.html?')) {
      fs.readFile(path.join(__dirname, 'home.html'), (err, html) => {
        if (err) {
          res.end('error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(html);
          res.end();
        }
      });
    } else {
      res.end('this is the 404 page');
    }
  } else if (method === 'POST') {
    if (parsedUrl.pathname === '/create-post') {
      let body = [];

      req.on('data', chunk => {
        body.push(chunk);
      });

      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString(); 
        const parsedData = querystring.parse(parsedBody); 

        const { name, age } = parsedData;

        res.statusCode = 302; 
        res.setHeader('Location', `/home.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`);
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