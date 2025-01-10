import React, {useState} from 'react';

const MyTodoList = () => {
    const [todos, setTodos] = useState([]);
    const [nextTodo, setNextTodo] = useState('');
    const [markAll, setMarkAll] = useState(false);

    const addTodo = (e) => {
        if(e.key === 'Enter' && nextTodo.trim() !== '') {

            setTodos([...todos, {text: nextTodo, done: false}]);
            setNextTodo('');
        }
    };

    const toggleTodo = (index) => {
        const updatedTodos = todos.map((todo, i) => 

            i === index ? {...todo, done: !todo.done} : todo
        );
        setTodos(updatedTodos);
    }

    const markAllTodos = () => {
        const updatedTodos = todos.map((todo) => ({
            ...todo,
            done: !markAll
        }));
        setTodos(updatedTodos);
        setMarkAll(!markAll);
    };

    const clearAllCompleted = () => {
        const updatedTodos = todos.filter((todo) => !todo.done);
        setTodos(updatedTodos);
    };

    const numActive = todos.filter((todo) => !todo.done).length;

    return (
        <div>
            <h1>Todos - ReactJs</h1>
            <input
                type='text'
                placeholder='Type a todo and hit Enter'
                value={nextTodo}
                onChange={(e) => setNextTodo(e.target.value)}
                onKeyDown={addTodo}
            />
            <div>
                <span>{numActive} remaining</span>
                <button
                    onClick={clearAllCompleted}
                >Clear Completed Todos</button>
            </div>
            <ul>
        {todos.map((todo, index) => (
            <li key={index}>
                <label>
                    <input 
                        type='checkbox'
                        checked={todo.done}
                        onChange={() => toggleTodo(index)}
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
                    onChange={markAllTodos}
                />
                Mark All Done
            </label>
        )}
        </div>
    );

};

export default MyTodoList;
