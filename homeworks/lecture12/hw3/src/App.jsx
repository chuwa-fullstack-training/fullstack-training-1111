import './App.css'
import { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  increment = (val) => {
    this.setState(prevState => ({ count: prevState.count + val }), () => console.log(this.state.count));
  }

  reset = () => {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <>
        <div className='layout'>
          <button onClick={() => this.increment(1)}>+1</button>
          <button onClick={() => this.increment(10)}>+10</button>
          <button onClick={() => this.increment(100)}>+100</button>
          <button onClick={() => this.increment(1000)}>+1000</button>
          <button onClick={this.reset}>Reset</button>
        </div>
        <div>Current count: {this.state.count}</div>
      </>
    )
  }
}

