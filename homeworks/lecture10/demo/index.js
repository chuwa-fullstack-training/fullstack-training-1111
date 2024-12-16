const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// 连接 MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/todoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", () => console.log("Connected to MongoDB"));

const todoSchema = new mongoose.Schema({
  todo: { type: String, required: true },
  done: { type: Boolean, default: false },
});

const Todo = mongoose.model("Todo", todoSchema);

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render("index", { todos });
  } catch (error) {
    res.status(500).send("Error retrieving todos");
  }
});

app.post("/api/todos", async (req, res) => {
  try {
    const { todo } = req.body;
    const newTodo = new Todo({ todo, done: false });
    await newTodo.save();
    res.status(201).json(await Todo.find());
  } catch (error) {
    res.status(500).send("Error adding todo");
  }
});

app.put("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).send("Todo not found");
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).send("Error updating todo");
  }
});

app.delete("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json(await Todo.find());
  } catch (error) {
    res.status(500).send("Error deleting todo");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
