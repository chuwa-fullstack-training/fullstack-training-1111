import React, { useState } from "react";
import "./styles.css";
import TodoItem from "./TodoItem";

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [isAllDone, setIsAllDone] = useState(false);
  const [todos, setTodos] = useState([]);
  let remaining = todos.filter((item) => !item.isCompleted).length;

  const handleAddTodoItem = (e) => {
    if (e.key === "Enter") {
      setTodos((prevVal) => [
        ...prevVal,
        { itemLabel: e.target.value, isCompleted: false },
      ]);
      setInputVal("");
    }
  };

  const handleCheckItem = (index) => {
    setTodos((prevState) =>
      prevState.map((item, i) => {
        if (i === index) {
          return { ...item, isCompleted: !item.isCompleted };
        } else {
          return item;
        }
      })
    );
  };

  const toggleAllDone = () => {
    setTodos((prevState) =>
      prevState.map((item) => ({ ...item, isCompleted: !isAllDone }))
    );
    setIsAllDone((prevState) => !prevState);
  };

  const handleClear = () => {
    setTodos((prevState) => {
      return prevState.map((item) => ({ ...item, isCompleted: false }));
    });
  };

  return (
    <div className="page">
      <h1>Todo List</h1>
      <input
        className="inputField"
        placeholder="Type a todo and hit enter"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onKeyDown={handleAddTodoItem}
      />
      <div className="status">
        <p>{remaining} remaining</p>
        <button onClick={handleClear}>Clear Completed Todos</button>
      </div>
      <div>
        <div className="allDone">
          <input
            className="checkbox"
            type="checkbox"
            id="allDone"
            checked={isAllDone}
            onChange={toggleAllDone}
          />
          <label htmlFor="allDone">Mark All Done</label>
        </div>
      </div>
      <div>
        {todos.map((todoItem, index) => {
          return (
            <TodoItem
              key={index}
              todoItem={todoItem}
              index={index}
              handleCheckItem={handleCheckItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
