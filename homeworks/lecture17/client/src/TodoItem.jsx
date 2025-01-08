import React from "react";
import "./app.css";
import { useDispatch } from "react-redux"
import { updateTodo } from "./features/todoListSlice";

const TodoItem = ({ todoItem }) => {
  
  const { itemLabel, isCompleted, _id } = todoItem;
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(updateTodo(_id))
  };

  return (
    <div className="todoItem">
      <input
        className="checkbox"
        type="checkbox"
        id={itemLabel}
        checked={isCompleted}
        onChange={handleClick}
      />
      <label htmlFor={itemLabel}>{itemLabel}</label>
    </div>
  );
};

export default TodoItem;
