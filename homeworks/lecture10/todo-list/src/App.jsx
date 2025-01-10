import React from "react";
import TodoList from "./utils/TodoList";
import AddTodoForm from "./utils/AddTodoForm";

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default App;
