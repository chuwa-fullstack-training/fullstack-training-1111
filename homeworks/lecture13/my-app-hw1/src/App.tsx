import React, { useState } from "react";

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todos, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todos.completed}
            onChange={() => toggleTodo(index)}
          />
          {todos.text}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && text.trim()) {
      setTodos([...todos, { text: text.trim(), completed: false }]);
      setText("");
    }
  };

  const toggleTodo = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleAllDone = () => {
    setTodos((prevtodos) =>
      prevtodos.map((todo) => ({ ...todo, completed: true }))
    );
  };

  const handleClearCompletedTodos = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const numCompletedTodos = todos.reduce(
    (acc, curr) => (curr.completed ? acc : acc + 1),
    0
  );

  return (
    <div className="app">
      <header>
        <h1>To-do List</h1>
      </header>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type a todo and hit Enter"
      />
      <div>
        <h3>Remaining todos:{numCompletedTodos}</h3>
      </div>
      <div>
        <button onClick={handleAllDone}>Mark All Done</button>
        <button onClick={handleClearCompletedTodos}>
          Clear Completed Todos
        </button>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};
export default App;
