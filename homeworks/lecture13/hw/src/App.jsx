import React, { Component } from 'react'
import HW1 from './hw1'
import HW2 from './hw2'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isHW1: true
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <button 
            className={this.state.isHW1 ? 'active' : ''}
            onClick={() => this.setState({ isHW1: true })}>
            hw1
          </button>
          <button 
            className={this.state.isHW1 ? '' : 'active'}
            onClick={() => this.setState({ isHW1: false })}>
            hw2
          </button>
        </div>
        {this.state.isHW1 ? <HW1 /> : <HW2 />}
      </div>
    )
  }
}

export default App
