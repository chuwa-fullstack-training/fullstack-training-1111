/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', __dirname);

app.get('/', (req, res) => {
  res.render('home', { title: null, content: null });
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/home.html', (req, res) => {
  const { title, content } = req.query;
  res.render('home', { title: title || '', content: content || '' });
});

app.post('/create-post', (req, res) => {
  const { title, content } = req.body;
  res.redirect(`/home.html?title=${title}&content=${content}`);
});

app.use((req, res) => {
  res.status(404).send('This is the 404 page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
