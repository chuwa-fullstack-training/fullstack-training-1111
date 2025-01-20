const express = require('express');
const Todo = require('../models/todo');
const router = express.Router();

// get all tasks
router.get('/', async (req, res) => {
    try{
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});
// new task
router.post('/', async (req, res) => {
    try{
        const newTodo = new Todo({text: req.body.text});
        await newTodo.save();
        res.json(newTodo);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});
// check task
router.put('/:id', async(req, res) => {
    try{

        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {done: req.body.done}, {new: true});
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});
// delete task
router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({message: 'Todo deleted'});
    } catch (error) {

        res.status(400).json({error: error.message});
    }
});

module.exports = router;
