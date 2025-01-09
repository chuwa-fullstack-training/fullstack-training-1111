import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, markAllCompleted, clearCompleted } from "./store";

const TodoApp = () => {
  const [input, setInput] = useState(""); 
  const todos = useSelector((state) => state.todos); 
  const dispatch = useDispatch(); 

  
  const handleAddTodo = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input.trim()));
      setInput(""); 
    }
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>

      {/* Add Todo */}
      <div className="add-todo">
        <input
          type="text"
          placeholder="Enter a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      {/* Todo List */}
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(index))}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="actions">
        <button onClick={() => dispatch(markAllCompleted())}>
          Mark All as Completed
        </button>
        <button onClick={() => dispatch(clearCompleted())}>
          Clear Completed
        </button>
      </div>

      {/* Active Todos Count */}
      <p className="active-todos">
        Active Todos:{" "}
        <strong>{todos.filter((todo) => !todo.completed).length}</strong>
      </p>
    </div>
  );
};

export default TodoApp;
