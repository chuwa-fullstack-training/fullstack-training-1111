const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./utils/db');
const todoRouter = require('./routers/todo');
const cors = require('cors');

connectDB();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', todoRouter);

app.get('*', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
