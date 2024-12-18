import Todo from '../models/todoDB.js';

export const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find();
        // console.log('find todo');
        res.status(200).render('index', {todos});

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const createTodo = async (req, res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(200).json(todo);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const updateTodo = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const todo = await Todo.findOne({id});
        todo.done = !todo.done;
        res.status(200).json(todo);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};