import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  toggleTodo,
  markAllDone,
  clearCompleted,
} from "./redux/todoSlice";

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
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && text.trim()) {
      dispatch(addTodo(text.trim()));
      setText("");
    }
  };

  const handleAllDone = () => dispatch(markAllDone());
  const handleClearCompletedTodos = () => dispatch(clearCompleted());

  const numCompletedTodos = todos.reduce(
    (acc: number, curr: any) => (curr.completed ? acc : acc + 1),
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
      <TodoList
        todos={todos}
        toggleTodo={(index: number) => dispatch(toggleTodo(index))}
      />
    </div>
  );
};
export default App;
