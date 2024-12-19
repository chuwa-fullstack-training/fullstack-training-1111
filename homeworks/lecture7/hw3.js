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

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (method === 'GET') {
    if (url === '/') {
      res.end('this is the home page');
    } else if (url === '/about') {
      res.end('this is the about page');
    } else if (url.startsWith('/home.html')) {
        const queryString = url.split('?')[1];
        const queryData = {};
        
        if (queryString) {
          queryString.split('&').forEach(pair => {
            const [key, value] = pair.split('=');
            queryData[key] = decodeURIComponent(value);
          });
        }
  
        fs.readFile(path.join(__dirname, 'home.html'), (err, html) => {
          if (err) {
            res.end('error');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            
            let modifiedHtml = html.toString();
            if (queryData.name || queryData.age) {
              modifiedHtml += `<p>Submitted Data:</p>`;
              modifiedHtml += `<p>Name: ${queryData.name || 'N/A'}</p>`;
              modifiedHtml += `<p>Age: ${queryData.age || 'N/A'}</p>`;
            }
            
            res.end(modifiedHtml);
          }
        });
    } else {
      res.end('this is the 404 page');
    }
  } else if (method === 'POST') {
    if (url === '/create-post') {
      let body = [];
      req.on('data', chunk => {
        body.push(chunk);
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        res.statusCode = 302;
        res.setHeader('Location', `/home.html?${parsedBody}`);
        res.end(parsedBody);
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
