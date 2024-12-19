
const express = require('express');
const Todo = require('../models/todo');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find(); 
    res.render('index', { todos });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/add', async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = new Todo({
      title
    });
    await newTodo.save();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/complete/:id', async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, { completed: true });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
