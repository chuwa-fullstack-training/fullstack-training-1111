/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const app = express();
const url = require('url');

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  let queryStr = url.parse(req.url).query;
  res.render('home', {result: queryStr});
});

app.post('/create-post', (req, res) => {
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  });
  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    res.redirect(`/?${parsedBody}`);
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
