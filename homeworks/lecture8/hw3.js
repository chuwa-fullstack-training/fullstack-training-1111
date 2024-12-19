/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('home', { name: null, age: null }); 
});

app.post('/submit', (req, res) => {
    const { name, age } = req.body; 
    res.render('home', { name, age }); 
  });

app.get('/submit', (req, res) => {
  const { name, age } = req.query; 
  res.render('home', { name, age }); 
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});