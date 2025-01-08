const express = require('express');
const connectDB = require('./db')
const cors = require('cors')

const Todo = require('./models/todo')

const app = express();
connectDB()

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', async (req, res) => {
  try {
    const todos = await Todo.find()
    // console.log(todos)
    res.status(200).json({ todos })
  } catch(err){
    console.log(err.message)
    res.status(500).json({ error: err.message})
  }
});

app.post('/api/todos', async (req, res) => {
  try {
    let newTodo = await new Todo(req.body).save()
    res.status(200).json(newTodo)

  } catch(err) {
    console.log(err.message)
    res.status(500).json({ error: err.message})
  }
});

app.put('/api/todos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById({ _id: id })
    todo.isCompleted = !todo.isCompleted
    const newTodo = await todo.save()
    res.status(200).json(newTodo)

  } catch(err){
    console.log(err.message)
    res.status(500).json({ error: err.message})
  }

});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
