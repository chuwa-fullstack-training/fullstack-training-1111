import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";

import {
  addTodo,
  toggleTodo,
  markAllCompleted,
  clearCompleted,
} from "./todoSlice";

const App = () => {
  const [input, setInput] = useState("");

  const todos = useSelector((state) => state.todos.todos);

  const activeCount = todos.filter((todo) => !todo.completed).length;

  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      dispatch(addTodo(input.trim()));
      setInput("");
    }
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleMarkAllCompleted = (e) => {
    dispatch(markAllCompleted(e.target.checked));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "left" }}>
      <h1>Todos </h1>

      <input
        type="text"
        placeholder="input a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleAddTodo}
        style={{ width: "100%", marginBottom: "1rem" }}
      />

      <p>{activeCount} remaining</p>
      <button onClick={handleClearCompleted}>Clear selected Todos</button>

      <div style={{ marginTop: "1rem" }}>
        <input
          id="markAllDone"
          type="checkbox"
          onChange={handleMarkAllCompleted}
          checked={todos.length > 0 && todos.every((t) => t.completed)}
        />
        <label htmlFor="markAllDone" style={{ marginLeft: "0.5rem" }}>
          Mark All Done
        </label>
      </div>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "0.5rem" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span
              style={{
                marginLeft: "0.5rem",
                textDecoration: todo.completed ? "line-through" : "none",
                opacity: todo.completed ? 0.6 : 1,
              }}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
