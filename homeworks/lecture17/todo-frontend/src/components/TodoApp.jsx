import React, { useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../store/todoSlice';

function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoInput />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error loading todos!</p>}
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoApp;