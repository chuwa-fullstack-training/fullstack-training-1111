const Todo = require('./schema');

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: `Server Error occured at getAllTodos: ${err.message}`,
    });
  }
};

const createTodo = async (req, res) => {
  try {
    const newTodo = new Todo({...req.body, isChecked: false});
    await newTodo.save();
    res.status(200).json({message: 'Todo is created'});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: `Server Error occured at createTodo: ${err.message}`,
    });
  }
};

const checkAllTodos = async (req, res) => {
  try {
    await Todo.updateMany({}, {$set: {isChecked: true}});
    res.status(200).json({message: 'All todos are checked'});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: `Server Error occured at checkAllTodos: ${err.message}`,
    });
  }
};

const uncheckAllTodos = async (req, res) => {
  try {
    await Todo.updateMany({}, {$set: {isChecked: false}});
    res.status(200).json({message: 'All todos are unchecked'});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: `Server Error occured at checkAllTodos: ${err.message}`,
    });
  }
};

const toggleTodoCheck = async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.body.id, [
      {$set: {isChecked: {$not: '$isChecked'}}},
    ]);
    res.status(200).json({message: 'Toggled todo check successfully'});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: `Server Error occured at toggleTodoCheck: ${err.message}`,
    });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  checkAllTodos,
  uncheckAllTodos,
  toggleTodoCheck,
};
