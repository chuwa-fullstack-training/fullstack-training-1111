const express = require('express');
const List = require('./models/List');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const getList = async (req, res) => {
	try {
    const lists = await List.find({});
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const addToList = async (req, res) => {
  const name = req.params.name;
	try {
    const list = new List({"todo": name, "done": false});
		await list.save();
    res.status(200).json(list);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

const toggleList = async (req, res) => {
  const id = req.params.id;
  try {
    const list = await List.findById(id);
    list.done = !list.done;
    await list.save();
    res.status(200).json(list);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
}

const clearAll = async (req, res) => {
  try {
    const lists = await List.find({});
    lists.forEach(async (list) => {
      list.done = false;
      await list.save();
    });
    res.status(200).json(lists);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
}

const markAll = async (req, res) => {
  try {
    const lists = await List.find({});
    lists.forEach(async (list) => {
      list.done = true;
      await list.save();
    });    
    res.status(200).json(lists);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
}

app.get('/lists', getList);
app.post('/list/:name', addToList);
app.post('/toggleList/:id', toggleList);
app.get('/clearAll', clearAll);
app.get('/markAll', markAll);

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
