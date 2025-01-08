import "./styles.css";
import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const activeCount = todos.filter((todo) => !todo.completed).length;

  // Add  new
  const handleAddTodo = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      const newTodo = {
        id: Date.now(), // or use a library like uuid
        text: input.trim(),
        completed: false,
      };
      setTodos((prev) => [...prev, newTodo]);
      setInput("");
    }
  };

  // Mark an individual todo
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Mark all
  const markAllCompleted = (e) => {
    setTodos((prev) =>
      prev.map((todo) => ({ ...todo, completed: e.target.checked }))
    );
  };

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "left" }}>
      <h1>Todos - ReactJs</h1>

      <input
        type="text"
        placeholder="Input teh todo "
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleAddTodo}
        style={{ width: "100%", marginBottom: "1rem" }}
      />

      <p>{activeCount} remaining</p>

      <button onClick={clearCompleted}>Clear Completed Todos</button>

      <div style={{ marginTop: "1rem" }}>
        <input
          id="markAllDone"
          type="checkbox"
          onChange={markAllCompleted}
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
              onChange={() => toggleTodo(todo.id)}
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
