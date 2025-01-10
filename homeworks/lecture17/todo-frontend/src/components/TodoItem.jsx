import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../store/todoSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
  };

  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;