const express = require('express');
const connectDB = require('./db/connect');
const ListItem = require('./schema');
connectDB();

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.set('views', './views');

let todos = {};

app.get('/', async (req, res) => {
  todos = await ListItem.find();
  res.render('index', {todos});
});

app.post('/api/todos', async (req, res) => {
  const todo = new ListItem(req.body);
  await todo.save();
  todos = await ListItem.find();
  res.json(todos);
});

app.put('/api/todos/:id', async (req, res) => {
  const todo = await ListItem.findById(req.params?.id);
  todo.done = !todo.done;
  if (todo.done) todo.completedAt = Date.now();
  else todo.completedAt = null;
  await todo.save();
  todos = await ListItem.find();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
