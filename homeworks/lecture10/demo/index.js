const express = require('express');

const app = express();

const Todo = require('./models/Todo');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tkang403:231944221@cluster0.ygjup.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Successfully connected to MongoDB Atlas'))
  .catch(err => console.error('Failed to connect to MongoDB Atlas', err));

const todos = [
  { id: 1, todo: 'first thing', done: true },
  { id: 2, todo: 'second thing', done: false },
  { id: 3, todo: 'third thing', done: false }
];

app.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render('index', { todos });
  } catch (err) {
    console.error('Failed to fetch todos', err);
    res.status(500).send('Server error');
  }
});

app.post('/api/todos', async (req, res) => {
  try {
    const todo = new Todo({
      todo: req.body.todo
    });
    await todo.save();
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.error('Failed to add todo', err);
    res.status(500).send('Server error');
  }
});

app.put('/api/todos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error('Failed to update todo', err);
    res.status(500).send('Server error');
  }
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
