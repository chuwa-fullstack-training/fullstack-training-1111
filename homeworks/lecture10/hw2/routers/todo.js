const express = require('express');
const router = express.Router();
const { getTodos, addTodo, updateTodo } = require('../controllers/todo');

router.get('/', getTodos, (req, res) => {
  res.render('index', { todos: res.locals.todos });
});

router.post('/api/todos', addTodo);

router.put('/api/todos/:id', updateTodo);

module.exports = router;