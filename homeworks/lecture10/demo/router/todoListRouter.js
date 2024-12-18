const express = require('express');
const router = express.Router();
const todolistController = require('../controller/todoListController');

router.post('/', todolistController.createTodo);
router.get('/', todolistController.getAllTasks);
router.get('/:id', todolistController.getTaskById);
router.put('/:id', todolistController.updateTodo);
router.put('/:id/check', todolistController.toggleTodo);
