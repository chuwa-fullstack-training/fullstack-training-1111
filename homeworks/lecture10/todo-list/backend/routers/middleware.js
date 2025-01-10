const express = require('express');
const {
    createTodo,
    getTodoById,
    getAllTodo,
} = require('../apis/todos');
const router = express.Router();

router.post('/todo', createTodo);

router.get('/todo/:id', getTodoById);
router.get('/todo', getAllTodo);

module.exports = router;