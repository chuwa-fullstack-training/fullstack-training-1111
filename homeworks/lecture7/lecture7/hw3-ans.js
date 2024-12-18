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
const url = require('url');
const querystring = require('querystring');

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.method === 'GET') {
    if (parsedUrl.pathname === '/home.html') {
       fs.readFile('home.html', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          return res.end('Error loading home.html');
        }

         const name = parsedUrl.query.name || '';
        const age = parsedUrl.query.age || '';

         let modifiedData = data.replace('<!--QUERY-DATA-->', `
          <h3>Submitted Data:</h3>
          <p>Name: ${name}</p>
          <p>Age: ${age}</p>
        `);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(modifiedData);
      });
    } else {
       fs.readFile('.' + parsedUrl.pathname, (err, fileData) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          return res.end('Not Found');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fileData);
      });
    }

  } else if (req.method === 'POST') {
    if (parsedUrl.pathname === '/submit') {
      let body = '';
      req.on('data', chunk => {
        body += chunk;
      });
      req.on('end', () => {
        const postData = querystring.parse(body);
        const name = postData.name || '';
        const age = postData.age || '';

         res.statusCode = 302;
        res.setHeader('Location', `/home.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`);
        res.end();
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }

  } else {
     res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
}).listen(3000, () => {
  console.log('Server is listening on port 3000');
});
