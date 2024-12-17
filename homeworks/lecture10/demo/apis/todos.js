const { Todo } = require('./Schema');

const createTodo = async (req, res) => {
    try {
        const { content } = req.body;
        const todo = new Todo({
            content,
            isDone: false,
        });
        await todo.save();

        res.status(201).json({ message: 'Todo created', todo });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params?.id);
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAllTodo = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = {
    createTodo,
    getTodoById,
    getAllTodo,
}