const  Todo = require('../model/todoList');

exports.getAllTasks = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.render('index', { todos });
    } catch(err) {
        res.status(500).send(err);
    }
}

exports.getTaskById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if(!todo) return res.status(404).send('Task not found');
        res.send(todo);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.createTodo = async (req, res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(201).send(todo);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.updateTodo = async (req, res) => {
    try {
        const todo  = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if(!todo) return res.status(404).send('Task not found');
        res.send(todo);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.toggleTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if(!todo) return res.status(404).send('Task not found');
        todo.done = !todo.done;
        res.send(todo);
    } catch (err) {
        res.status(400).send(err);
    }
}
