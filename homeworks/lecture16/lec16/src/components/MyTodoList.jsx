import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTodo, clearCompleted, markAllTodos, toggleTodo} from '../redux/todoSlice';

const MyTodoList = () => {
    const todos = useSelector((state) => state.todos.todos || []);
    const markAll = useSelector((state) => state.todos.markAll || false);
    const dispatch = useDispatch();
    const [nextTodo, setNextTodo] = useState('');

    const handleAddTodo = (e) => {
        if(e.key === 'Enter' && nextTodo.trim() !== '') {
            dispatch(addTodo(nextTodo));
            setNextTodo('');
        }
    };

    const numActive = todos.filter((todo) => !todo.done).length;

    return (
        <div>
            <h1>Todos - Plain Redux</h1>
            <input 
                type='text'
                placeholder='Type a todo and hit Enter'
                value={nextTodo}
                onChange={(e) => setNextTodo(e.target.value)}
                onKeyDown={handleAddTodo}
            />
            <div>
                <span>{numActive} remaining</span>
                <button onClick={() => dispatch(clearCompleted())}>Clear Completed Todos</button>
            </div>
            <ul>
        {todos.map((todo, index) => (
            <li key={index}>
                <label>
                    <input
                        type='checkbox'
                        checked={todo.done}
                        onChange={() => dispatch(toggleTodo(index))}
                    />
                    {todo.text}
                </label>
            </li>
        ))}
            </ul>
        {todos.length > 0 && (
            <label>
                <input
                    type='checkbox'
                    checked={markAll}
                    onChange={() => dispatch(markAllTodos())}
                />
                Mark All Done
            </label>
        )}
        </div>
    );
};

export default MyTodoList;
