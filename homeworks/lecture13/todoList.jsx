import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { text: input.trim(), completed: false }]);
      setInput("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const markAllCompleted = () => {
    const updatedTodos = todos.map((todo) => ({ ...todo, completed: true }));
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setTodos(activeTodos);
  };

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todo-app">
      {/* Add Todo */}
      <div className="add-todo">
        <input
          type="text"
          placeholder="Enter a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* Todo List */}
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="actions">
        <button onClick={markAllCompleted}>Mark All as Completed</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>

      {/* Active Todos Count */}
      <p className="active-todos">
        Active Todos: <strong>{activeTodosCount}</strong>
      </p>
    </div>
  );
};

export default TodoApp;
