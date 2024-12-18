const Todo = require('../models/todos');

const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.locals.todos = todos;
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const addTodo = async (req, res) => {
  try {
    const { todo } = req.body;
    const newTodo = new Todo({
      todo,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).send(error);
  }
}

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getTodos,
  addTodo,
  updateTodo
};