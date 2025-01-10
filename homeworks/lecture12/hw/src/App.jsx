import React from "react";
import "./hw.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      inputValue: "",
    };
  }

  handleAdd = (value) => {
    this.setState({ count: this.state.count + value });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  handleInputChange = (e) => {
    // convert the input string and add number suffix
    const value = e.target.value;
    if (!value || isNaN(value)) {
      this.setState({ inputValue: value });
      return;
    }
    switch (value[value.length - 1]) {
      case "1":
        this.setState({ inputValue: value + "st" });
        break;
      case "2":
        this.setState({ inputValue: value + "nd" });
        break;
      case "3":
        this.setState({ inputValue: value + "rd" });
        break;
      default:
        this.setState({ inputValue: value + "th" });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>This page contains the homework 1 2 3 4 for lecture 12</h2>
        </header>
        <nav>
          <ul>
            <li>
              <a
                href="https://vitejs.dev/guide/features.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite Documentation
              </a>
            </li>
            <li>
              <a
                href="https://reactjs.org/docs/getting-started.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Documentation
              </a>
            </li>
          </ul>
        </nav>
        <div className="content">
          <div className="aside">
            <h2>What is Frontend?</h2>
            <ul>
              <li>
                Frontend is the part of the website that users can see and
                interact with.
              </li>
              <li>
                Frontend is also called <strong>client-side</strong>.
              </li>
              <li>Frontend is built with HTML, CSS, and JavaScript.</li>
            </ul>
          </div>

          <div className="section">
            <div className="hw3">
              <h2>Homework 3 counter</h2>
              <button onClick={() => this.handleAdd(1)}>+1</button>
              <button onClick={() => this.handleAdd(10)}>+10</button>
              <button onClick={() => this.handleAdd(100)}>+100</button>
              <button onClick={() => this.handleAdd(1000)}>+1000</button>
              <button onClick={this.handleReset}>Reset</button>
              <p>{this.state.count}</p>
            </div>
            <div className="hw4">
              <h2>Homework 4 converter</h2>
              <input type="text" onChange={this.handleInputChange} />
              <input value={this.state.inputValue} readOnly />
            </div>
          </div>
        </div>
        <footer className="footer">
          <p>Footer content goes here</p>
        </footer>
      </div>
    );
  }
}

export default App;
