const express = require('express');
const path = require('path');

const app = express();
const port= 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));

app.get('/home.html', (req, res) => {
    const {title, content} = req.query;
    res.render('home', {
        title: title || '',
        content: content || '',
    });
});

app.get('/about', (req, res) => {
    res.send('This is about page');
});

app.post('/create-post', (req, res) => {
    const {title, content} = req.body;

    res.redirect(`/home.html?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`);
});

app.use((req, res) => {
    res.send('404 Not Found');
});

app.listen(port, () => {console.log(`Server is running on port ${port}`)});
