/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const path = require('path');

const app = express();

 app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

 app.use(express.urlencoded({ extended: true }));

 app.get('/home', (req, res) => {
  const { name, age } = req.query;
   res.render('home', { name, age });
});

 app.post('/submit', (req, res) => {
  const { name, age } = req.body;

   res.statusCode = 302;
  res.setHeader('Location', `/home?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`);
  res.end();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
