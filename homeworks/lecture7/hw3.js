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
const port = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); 
    const pathname = parsedUrl.pathname; 
    const { method } = req;

    if (method === 'GET') {
        if (pathname === '/') {
            res.end('this is the home page');
        } else if (pathname === '/about') {
            res.end('this is the about page');
        } else if (pathname === '/home.html') {
            fs.readFile(path.join(__dirname, 'home.html'), 'utf8', (err, html) => {
                if (err) {
                    res.end('Error loading page');
                } else {
                    const title = parsedUrl.query.title || null;
                    const content = parsedUrl.query.content || null;

                    const dynamicContent = title && content
                        ? `<h2>Submitted Data:</h2>
                           <p><strong>Title:</strong> ${title}</p>
                           <p><strong>Content:</strong> ${content}</p>`
                        : ''; 

                    const updatedHtml = html.replace('{{dynamicContent}}', dynamicContent);

                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(updatedHtml);
                }
            });
        } else {
            res.end('404 Not Found');
        }
    } else if (method === 'POST') {
        if (pathname === '/create-post') {
            let body = [];
            req.on('data', chunk => {
                body.push(chunk);
            });
            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const formData = new URLSearchParams(parsedBody);

                const title = formData.get('title');
                const content = formData.get('content');

                res.statusCode = 302;
                res.setHeader(
                    'Location',
                    `/home.html?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`
                );
                res.end();
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
});
