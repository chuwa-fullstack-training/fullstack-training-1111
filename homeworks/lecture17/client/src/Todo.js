import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from "./redux/todoSlice";
import { TextField, Checkbox, Button, List, ListItem, ListItemText, Box } from "@mui/material";

export default function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const {todos} = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = async (e) => {
    if (e.key === "Enter") {
      await dispatch(addTodo({ todo: newTodo })).unwrap();
      setNewTodo("");
    }
  };

  const handleToggleTodo = (todo) => {
    dispatch(toggleTodo({ id: todo._id, done: !todo.done }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todo">
      <div className="todo-container">
        <h1>Todo List</h1>
        <TextField
          variant="outlined"
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleAddTodo}
          placeholder="Type a todo and hit Enter"
        />
        <List>
          {todos.map((todo) => (
            <ListItem key={todo._id} sx={{ display: "flex", alignItems: "center", paddingLeft: 0 }}>
              <Checkbox
                checked={todo.done}
                onChange={() => handleToggleTodo(todo)}
                color="primary"
              />
              <ListItemText primary={todo.todo} />
              <Box sx={{ ml: 5 }}>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDeleteTodo(todo._id)}
                >
                  Delete
                </Button>
              </Box>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
