import './App.css'
import { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
  }

  addTask = () => {
    const { tasks, newTask } = this.state;
    if (newTask.trim() === '') return;
    this.setState({
      tasks: [...tasks, { content: newTask, isChecked: false }],
      newTask: '',
    })
  }

  handleCheckboxChange = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task, idx) => idx === id ? { ...task, isChecked: !task.isChecked } : task),
    }));
  }

  handleDelete = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_, idx) => idx !== id),
    }));
  }

  render() {
    return (
      <>
        <div className='input-wrapper'>
          <input type='text' placeholder='Enter a new task' value={this.state.newTask} onChange={this.handleInputChange}></input>
          <button onClick={this.addTask}>Add</button>
        </div>
        <div>
          <ul className='task-container'>
            {this.state.tasks.map((task, idx) => {
              return (
                <li key={idx} className='task-item'>
                  <input type="checkbox" id={'task' + idx} checked={task.isChecked} onChange={() => this.handleCheckboxChange(idx)}></input>
                  <label htmlFor={'task' + idx}>{task.content}</label>
                  <button className='delete-btn' onClick={() => this.handleDelete(idx)}>Delete</button>
                </li>);
            })}
          </ul>
        </div>
      </>
    )
  }
}
