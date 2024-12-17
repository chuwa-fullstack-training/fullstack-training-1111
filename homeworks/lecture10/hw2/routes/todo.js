const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  createTodo,
  toggleTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.get("/", getAllTodos);
router.post("/api/todos", createTodo);
router.put("/api/todos/:id", toggleTodo);
router.delete("/api/todos/:id", deleteTodo);

module.exports = router;
