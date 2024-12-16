/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/home.html', (req, res) => {
  res.render('home', { submittedData: null });
});

app.post('/create-post', (req, res) => {
  const submittedData = req.body; 
  res.render('home', { submittedData });
});

app.use((req, res) => {
  res.status(404).send('This is the 404 page');
});

