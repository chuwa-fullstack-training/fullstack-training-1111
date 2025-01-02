import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      isAllDone: false,
      todos: [],
    };
  }

  handleAddTodoItem = (e) => {
    if (e.key === "Enter") {
      this.setState((prevState) => ({
        todos: [
          ...prevState.todos,
          { itemLabel: e.target.value, isCompleted: false },
        ],
        inputVal: "",
      }));
    }
  };

  handleCheckItem = (index) => {
    this.setState((prevState) => {
      let updatedTodos = prevState.todos.map((item, i) => {
        if (i === index) {
          return { ...item, isCompleted: !item.isCompleted };
        } else {
          return item;
        }
      });

      return { todos: updatedTodos };
    });
  };

  toggleAllDone = () => {
    this.setState((prevState) => {
      const curVal = prevState.todos[0].isCompleted;

      let updatedTodos = prevState.todos.map((item) => ({
        ...item,
        isCompleted: !curVal,
      }));

      return { todos: updatedTodos, isAllDone: !curVal };
    });
  };

  handleClear = () => {
    this.setState((prevState) => {
      let updatedTodos = prevState.todos.map((item) => ({
        ...item,
        isCompleted: false,
      }));

      return { todos: updatedTodos, isAllDone: false };
    });
  };

  render() {
    const remaining = this.state.todos.filter(
      (item) => !item.isCompleted
    ).length;
    return (
      <div className="page">
        <h1>Todo List</h1>
        <input
          className="inputField"
          placeholder="Type a todo and hit enter"
          value={this.state.inputVal}
          onChange={(e) => {
            this.setState({ inputVal: e.target.value });
          }}
          onKeyDown={this.handleAddTodoItem}
        />
        <div className="status">
          <p>{remaining} remaining</p>
          <button onClick={this.handleClear}>Clear Completed Todos</button>
        </div>
        <div>
          <div className="allDone">
            <input
              className="checkbox"
              type="checkbox"
              id="allDone"
              checked={this.state.isAllDone}
              onChange={this.toggleAllDone}
            />
            <label htmlFor="allDone">Mark All Done</label>
          </div>
        </div>
        <div>
          {this.state.todos.map((todoItem, index) => {
            return (
              <TodoItem
                key={index}
                todoItem={todoItem}
                index={index}
                handleCheckItem={this.handleCheckItem}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
