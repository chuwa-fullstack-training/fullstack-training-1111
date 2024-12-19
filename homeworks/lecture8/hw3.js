/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const fs = require('fs');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('this is the about page');
});

app.get('/home.html', (req, res) => {
    res.render('home', { title: req.query.title, content: req.query.content });
    res.end();
});

app.post('/create-post', (req, res) => {
    let body = [];
    req.on('data', chunk => {
        body.push(chunk);
    });
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        res.writeHead(302, {Location: '/home.html?' + parsedBody});
        res.end();
    });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});