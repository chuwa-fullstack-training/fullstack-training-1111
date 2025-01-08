import React, { useEffect, useState } from "react";
import "./app.css";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux"
import { fetchTodos, addTodo } from "./features/todoListSlice"


const App = () => {
  const [ inputVal, setInputVal ] = useState("")
  const todos = useSelector(state => state.todos)
  const status = useSelector(state => state.status)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()


  useEffect(() => {
    if(status === 'idle'){
      dispatch(fetchTodos())
    }
  }, [status, dispatch])


  const handleAddTodoItem = (e) => {
    if (e.key === "Enter") {
      let newTodo = { itemLabel: e.target.value, isCompleted: false }
      dispatch(addTodo(newTodo))
      setInputVal("")
    }
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
      {
        loading ? <h1>Loading data...</h1>
        : 
        <div>
          {
            todos.map((todoItem, index) => {
              return (
                <TodoItem
                  key={index}
                  todoItem={todoItem}
                />
              );
            })
          }
        </div>
      }
    
    </div>
  );
};

export default App;
