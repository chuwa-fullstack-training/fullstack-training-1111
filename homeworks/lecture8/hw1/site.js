const express = require('express');
const router1 = require('./router1');
const router2 = require('./router2');

const app = express();
const port = 3000;

app.use('/hw1', router1);
app.use('/api', router2);

app.use((req, res) => {
    res.send("404 Not Found");
});

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);
});
