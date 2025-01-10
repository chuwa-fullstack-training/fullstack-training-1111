import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { addTodo, getTodos, updateTodo} from "./redux/slices";
import "./App.css";

const App = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const isLoading = useAppSelector((state) => state.todos.loading);
  const error = useAppSelector((state) => state.todos.error);
  const dispatch = useAppDispatch();

  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className="App">
      <div className="todoContainer">
        <div className="todoContent">
          <h2>Todos - RTK</h2>
          {error && <p>{error}</p>}
          <div className="todoInput">
            <input
              type="text"
              id="todoInput"
              placeholder="Type a todo and hit enter"
              onChange={(e) => {
                setTodoInput(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && todoInput) {
                  dispatch(addTodo({ todo: todoInput }));
                  setTodoInput("");
                }
              }}
              value={todoInput}
            />
          </div>
          <div className="todoInfo">
            <span>{todos.filter((todo) => !todo.done).length} remaining</span>
            <p></p>
          </div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  onClick={() => dispatch(updateTodo(todo._id))}
                  checked={todo.done}
                />
                <span>{todo.todo}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
