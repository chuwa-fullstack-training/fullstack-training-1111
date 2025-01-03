import React from "react";
import "./styles.css";

const TodoItem = ({ todoItem, index, handleCheckItem }) => {
  const handleClick = () => handleCheckItem(index);
  const { itemLabel, isCompleted } = todoItem;

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
