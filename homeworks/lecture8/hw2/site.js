const express = require('express');
const router = require('./router');

const app = express();
const port = 3000;

app.use('/hw2', router);

app.use((req, res) => {
    res.send('404 Not Found!');
});

app.listen(port, () => {console.log(`Server is running on port ${port}`)});
