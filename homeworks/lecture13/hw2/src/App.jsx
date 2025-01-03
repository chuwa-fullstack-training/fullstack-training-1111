import './App.css'
import { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "status bar",
    }
  }

  handleClick = (id) => {
    this.setState({
      text: `button ${id} is clicked`,
    })
  }
  render() {
    return (
      <div className="frame">
        <div className='screen'>
          <div className='status-bar'>{this.state.text}</div>
          <div className="button-grid">
            {Array.from({ length: 16 }, (_, idx) => (
              <button key={idx} onClick={() => this.handleClick(idx + 1)}>{idx + 1}</button>
            ))}
          </div>
          <div className="button-grid bottom-button-bar">
            {Array.from({ length: 4 }, (_, idx) => (
              <button key={idx} onClick={() => this.handleClick(idx + 17)}>{idx + 17}</button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
