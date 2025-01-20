import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchTodos, addTodo } from '../redux/todoSlice';

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.items);
    const status = useSelector(state => state.todos.status);

    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleAddTodo = () => {
        if(newTodo.trim()) {
            dispatch(addTodo(newTodo));
            setNewTodo('');
        }
    };

    if(status === 'loading') return <p>Loading...</p>;

    return (
        <div>
            <h1>My Todo List</h1>
            <input
                type='text'
                placeholder='Enter a task'
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
        {todos.map((todo) => (
            <li key={todo._id}>{todo.text}</li>
        ))}
            </ul>
        </div>
    );
};

export default TodoList;
