import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = (num) => {
    this.setState((prevState) => ({
      count: prevState.count + num,
    }));
  };

  handleReset = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="container-sm">
            <h1>Counter: {this.state.count}</h1>
          </div>

          <div className="container-sm">
            <div className="buttons">
              <button
                type="button"
                className="btn btn-lg"
                onClick={() => this.handleClick(1)}
              >
                +1
              </button>
              <button
                type="button"
                className="btn btn-lg"
                onClick={() => this.handleClick(10)}
              >
                +10
              </button>
              <button
                type="button"
                className="btn btn-lg"
                onClick={() => this.handleClick(100)}
              >
                +100
              </button>
              <button
                type="button"
                className="btn btn-lg"
                onClick={() => this.handleClick(1000)}
              >
                +1000
              </button>
              <button
                type="button"
                className="btn btn-lg"
                onClick={this.handleReset}
              >
                reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
