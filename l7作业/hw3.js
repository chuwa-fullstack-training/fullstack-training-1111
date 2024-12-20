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

let lastSubmittedData = { title: '', content: '' }; // 保存提交的数据

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET' && url === '/') {
        // 处理根路径的动态页面加载
        const filePath = path.join(__dirname, 'home.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading home.html');
                return;
            }

            // 动态插入提交的数据到 HTML 页面
            const updatedHtml = data.replace(
                '<div id="submitted-data"></div>',
                `
          <div id="submitted-data">
            <p>Title: ${lastSubmittedData.title || 'N/A'}</p>
            <p>Content: ${lastSubmittedData.content || 'N/A'}</p>
          </div>
        `
            );

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(updatedHtml);
        });
    } else if (method === 'POST' && url === '/create-post') {
        // 处理表单提交
        let body = [];
        req.on('data', chunk => body.push(chunk));
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const params = new URLSearchParams(parsedBody);

            // 保存提交的数据
            lastSubmittedData.title = params.get('title');
            lastSubmittedData.content = params.get('content');

            // 返回动态更新的页面
            const filePath = path.join(__dirname, 'home.html');
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error loading home.html');
                    return;
                }

                const updatedHtml = data.replace(
                    '<div id="submitted-data"></div>',
                    `
            <div id="submitted-data">
              <p>Title: ${lastSubmittedData.title || 'N/A'}</p>
              <p>Content: ${lastSubmittedData.content || 'N/A'}</p>
            </div>
          `
                );

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(updatedHtml);
            });
        });
    } else {
        // 处理其他路径
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
