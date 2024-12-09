/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', (req, res) => {
    res.send('This is the about page');
  });
  
  app.get('/home.html', (req, res) => {
    const { title, content } = req.query
    // console.log(title, content)
    res.render('home', { title, content })
  })
  
  app.post('/create-post', (req, res) => {
    const { title, content } = req.body
    res.redirect(`/home.html?title=${title}&content=${content}`);
  })
  

app.listen(3000, () => {
    console.log('hw3 router listening on port 3000!')
})