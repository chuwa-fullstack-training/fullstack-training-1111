const express = require("express");
const todoRoutes = require("./routes/todo-router");
const connectDB = require("./db");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "./views");

connectDB();

app.use("/api/todos", todoRoutes);

app.get("/", async (req, res) => {
  const Todo = require("./models/Todo");
  const todos = await Todo.find();
  res.render("index", { todos });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
