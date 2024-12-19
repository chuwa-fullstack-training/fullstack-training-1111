const express = require('express');
const List = require('./models/List');
const mongoose = require('mongoose');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

const getList = async () => {
	try {
    const list = await List.find({});
    return list;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getListById = async (id) => {
	try {
    const list = await List.findById(id);
    return list;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const addToList = async (name) => {
	try {
    const list = new List({"todo": name, "done": false});
		await list.save();
  } catch (err) {
    console.log(err);
  }
};

app.get('/', async (req, res) => {
  const todos = await getList();
  res.render('index', { todos });
});

app.post('/api/todos', async (req, res) => {
  const todo = req.body.todo;
  await addToList(todo);
  const todos = await getList();
  res.json(todos);
});

app.put('/api/todos/:id', async (req, res) => {
  const todo = await getListById(req.params.id);
  todo.done = !todo.done;
  todo.save();
  res.json(todo);
});

mongoose
  .connect('mongodb://127.0.0.1:27017/hw9')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });
  
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
