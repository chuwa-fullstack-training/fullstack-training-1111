const express = require('express');
const connectDB = require('./db')

const Todo = require('./models/todo')

const app = express();
connectDB()

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

// const todos = [
//   { id: 1, todo: 'first thing', done: true },
//   { id: 2, todo: 'second thing', done: false },
//   { id: 3, todo: 'third thing', done: false }
// ];

app.get('/', async (req, res) => {
  try {
    const todos = await Todo.find()
    console.log(todos)
    res.render('index', { todos });
  } catch(err){
    console.log(err.message)
    res.status(500).json({ error: err.message})
  }
});

app.post('/api/todos', async (req, res) => {
  try {
    await new Todo(req.body).save()
    res.status(200).json({ message: "New todo item added" })

  } catch(err) {
    console.log(err.message)
    res.status(500).json({ error: err.message})
  }
});

app.put('/api/todos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById({ _id: id })
    todo.isDone = !todo.isDone
    const newTodo = await todo.save()
    res.status(200).json({ todo: newTodo })

  } catch(err){
    console.log(err.message)
    res.status(500).json({ error: err.message})
  }

  // const id = parseInt(req.params.id, 10);
  // const todo = todos.find(t => t.id === id);
  // todo.done = !todo.done;
  // res.json(todo);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
