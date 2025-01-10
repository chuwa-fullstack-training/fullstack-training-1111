const Todo = require('../models/Todo');

// Get all Todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch todos' });
  }
};

// Create a new Todo
exports.createTodo = async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = await Todo.create({ text });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create todo' });
  }
};

// Update an existing Todo
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update todo' });
  }
};

// Delete a Todo
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete todo' });
  }
};