const express = require('express');
const connectDB = require('./db/connect');
const app = express();
const cors = require('cors');
const port = 3000;
const {
  getAllTodos,
  createTodo,
  checkAllTodos,
  uncheckAllTodos,
  toggleTodoCheck,
} = require('./todoController');

connectDB();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.get('/todos', getAllTodos);
app.post('/todos', createTodo);
app.put('/todos/checkall', checkAllTodos);
app.put('/todos/uncheckall', uncheckAllTodos);
app.put('/todos/togglecheck', toggleTodoCheck);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
