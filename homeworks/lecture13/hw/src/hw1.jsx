import React, { Component } from 'react';

class HW1 extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  // Add a new todo
  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, { todo: todo, isDone: false }]
    })
  }

  // Mark a todo as completed / uncompleted
  toggleTodo = (index) => {
    const newTodos = [...this.state.todos]
    newTodos[index].isDone = !newTodos[index].isDone
    this.setState({
      todos: newTodos
    })
  }

  // Mark all todos as completed
  markAll = () => {
    const newTodos = this.state.todos.map(todo => {
      todo.isDone = !todo.isDone
      return todo
    })
    this.setState({
      todos: newTodos
    })
  }

  removeCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.isDone)
    })
  }


  render() {
    return (
      <div className="todoContainer">
        <div className='todoContent'>
          <h2>Todos - ReactJs</h2>
          <div className='todoInput'>
            <input type="text" id="todoInput" placeholder="Type a todo and hit enter"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  this.addTodo(
                    document.getElementById('todoInput').value
                  )
                  document.getElementById('todoInput').value = ''
                }
              }} />
          </div>
          <div className='todoInfo'>
            <span>{this.state.todos.filter(todo => !todo.isDone).length} remaining</span>
            <button onClick={this.removeCompleted}>Clear Completed Todos</button>
          </div>
          <div className='markAll'>
            <input type='checkbox' id='toggleAll' onClick={this.markAll} />
            <label htmlFor="toggleAll">Mark All Done</label>
          </div>
          <ul>
            {
              this.state.todos.map((todo, index) => (
                <li key={index}>
                  <input type='checkbox' onClick={() => this.toggleTodo(index)} checked={todo.isDone} />
                  <span>{todo.todo}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default HW1;