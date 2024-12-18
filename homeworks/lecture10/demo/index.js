const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
require('dotenv').config();

const router = require('./router/todoListRouter');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MOngoDB', err));

const todos = [
  { id: 1, todo: 'first thing', done: true },
  { id: 2, todo: 'second thing', done: false },
  { id: 3, todo: 'third thing', done: false }
];

app.get('/', (req, res) => {
  res.render('index', { todos });
});

app.post('/api/todos', (req, res) => {
  const todo = req.body.todo;
  todos.push({ id: todos.length + 1, todo, done: false });
  res.json(todos);
});

app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const todo = todos.find(t => t.id === id);
  todo.done = !todo.done;
  res.json(todo);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
