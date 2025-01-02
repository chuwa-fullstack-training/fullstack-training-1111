import React from "react";
import "./styles.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.handleCheckItem(this.props.index);
  };

  render() {
    const { itemLabel, isCompleted } = this.props.todoItem;
    return (
      <div className="todoItem">
        <input
          className="checkbox"
          type="checkbox"
          id={itemLabel}
          checked={isCompleted}
          onChange={this.handleClick}
        />
        <label htmlFor={itemLabel}>{itemLabel}</label>
      </div>
    );
  }
}

export default TodoItem;