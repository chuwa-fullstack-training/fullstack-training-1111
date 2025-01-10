import { useState, FC } from "react";

interface todoType {
  id: number;
  todo: string;
  isDone: boolean;
}
interface TodoListProps {
  todos: todoType[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  markAll: () => void;
  removeCompleted: () => void;
}

const TodoList: FC<TodoListProps> = ({
  todos,
  addTodo,
  toggleTodo,
  markAll,
  removeCompleted,
}) => {
  const [todoInput, setTodoInput] = useState("");
  const [checkAll, setCheckAll] = useState(false);

  return (
    <div className="todoContainer">
      <div className="todoContent">
        <h2>Todos - Plain Redux</h2>
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
                addTodo(todoInput);
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
              removeCompleted();
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
              markAll();
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
                onClick={() => toggleTodo(index)}
                checked={todo.isDone}
              />
              <span>{todo.todo}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
