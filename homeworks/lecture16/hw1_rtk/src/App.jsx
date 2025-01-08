import React from "react";
import "./app.css";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux"
import { actions } from "./features/todoListSlice"

const App = () => {
  const inputVal = useSelector(state => state.inputVal)
  const todos = useSelector(state => state.todos)
  const isAllDone = useSelector(state => state.isAllDone)
  
  const dispatch = useDispatch()

  let remaining = todos.filter((item) => !item.isCompleted).length;

  const handleAddTodoItem = (e) => {
    if (e.key === "Enter") {
      dispatch(actions.addItem({itemLabel: e.target.value, isCompleted: false}))
      dispatch(actions.setInput(""))
    }
  };

  const handleCheckItem = (index) => {
    const newTodos = todos.map((item, i) => {
          if (i === index) {
            return { ...item, isCompleted: !item.isCompleted };
          } else {
            return item;
          }
        })
    dispatch(actions.updateTodos(newTodos))
  };

  const toggleAllDone = () => {
    const newTodos = todos.map((item) => ({ ...item, isCompleted: !isAllDone }))
    dispatch(actions.updateTodos(newTodos))
    dispatch(actions.updateIsAllDone(!isAllDone))
  };

  const handleClear = () => {
    const newTodos = todos.map((item) => ({ ...item, isCompleted: false }))
    dispatch(actions.updateTodos(newTodos))
    dispatch(actions.updateIsAllDone(false))
  };

  return (
    <div className="page">
      <h1>Todo List</h1>
      <input
        className="inputField"
        placeholder="Type a todo and hit enter"
        value={inputVal}
        onChange={(e) => dispatch(actions.setInput(e.target.value))}
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
