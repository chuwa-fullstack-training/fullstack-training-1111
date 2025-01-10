import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { addTodo, markAll, removeCompleted, toggleTodo } from "./redux/slices";
import "./App.css";

const App = () => {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  const [todoInput, setTodoInput] = useState("");
  const [checkAll, setCheckAll] = useState(false);

  return (
    <div className="App">
      <div className="todoContainer">
        <div className="todoContent">
          <h2>Todos - RTK</h2>
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
            <span>{todos.filter((todo) => !todo.isDone).length} remaining</span>
            <button
              onClick={() => {
                dispatch(removeCompleted());
                setCheckAll(false);
              }}
            >
              Clear Completed Todos
            </button>
          </div>
          <div className="markAll">
            <input
              type="checkbox"
              id="toggleAll"
              onClick={() => {
                setCheckAll(!checkAll);
                dispatch(markAll());
              }}
              checked={checkAll}
            />
            <label htmlFor="toggleAll">Mark All Done</label>
          </div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  onClick={() => dispatch(toggleTodo({ id: todo.id }))}
                  checked={todo.isDone}
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
