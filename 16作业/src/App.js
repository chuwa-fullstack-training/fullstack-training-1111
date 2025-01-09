import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  toggleTodo,
  clearFinishedTodos,
} from "./store/toolkitIndex.js";

export default function App() {
  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todoSlice.todos); // 从 Redux 中获取 todos
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      dispatch(addTodo(inputValue)); // Dispatch 添加 todo 的动作
      setInputValue("");
    }
    console.log("Todos in Redux state:", todos);
  };

  const handleToggleTodo = (index) => {
    dispatch(toggleTodo(index)); // Dispatch 切换完成状态的动作
  };

  const handleClearFinishedTodos = () => {
    dispatch(clearFinishedTodos()); // Dispatch 清除已完成任务的动作
  };

  const remainingCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter a todo"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 0",
        }}
      >
        <span>{remainingCount} remaining</span>
        <button onClick={handleClearFinishedTodos}>
          Clear All Finished Todos
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ display: "flex", alignItems: "center", margin: "5px 0" }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                marginLeft: "10px",
              }}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
