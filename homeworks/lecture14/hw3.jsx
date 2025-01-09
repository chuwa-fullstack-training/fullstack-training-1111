import React, { useState } from "react";

const AddTodo = ({ input, setInput, addTodo }) => {
  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

const TodoList = ({ todos, toggleTodo }) => {
  return (
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
  );
};

const TodoActions = ({ markAllCompleted, clearCompleted }) => {
  return (
    <div className="actions">
      <button onClick={markAllCompleted}>Mark All as Completed</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

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
      <AddTodo input={input} setInput={setInput} addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <TodoActions
        markAllCompleted={markAllCompleted}
        clearCompleted={clearCompleted}
      />
      <p className="active-todos">
        Active Todos: <strong>{activeTodosCount}</strong>
      </p>
    </div>
  );
};

export default TodoApp;
