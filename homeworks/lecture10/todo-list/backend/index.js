const express = require('express');
const todoRouter = require('./routers/middleware');
const connectDB = require('./db');
const { Todo } = require('./apis/Schema');

const app = express();

connectDB();

// app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/api', todoRouter);

app.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render('index', { todos });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
