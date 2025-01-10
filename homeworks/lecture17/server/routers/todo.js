const express = require('express');
const router = express.Router();
const { getTodos, addTodo, updateTodo } = require('../controllers/todo');

router.get('/api', getTodos);

router.post('/api/todos', addTodo);

router.put('/api/todos/:id', updateTodo);

module.exports = router;