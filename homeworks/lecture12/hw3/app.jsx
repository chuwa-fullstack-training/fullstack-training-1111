import React from "react";
import "./styles.css";

class Button extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.increment);
  };

  render() {
    return (
      <button className="button" onClick={this.handleClick}>
        +{this.props.increment}
      </button>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = (increment) => {
    this.setState({ counter: this.state.counter + increment });
  };

  handleReset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div>
        <div className="buttonGroup">
          <Button increment={1} onClick={this.handleClick} />
          <Button increment={10} onClick={this.handleClick} />
          <Button increment={100} onClick={this.handleClick} />
          <Button increment={1000} onClick={this.handleClick} />
          <button className="button" onClick={this.handleReset}>
            Reset
          </button>
        </div>
        <div className="result">{this.state.counter}</div>
      </div>
    );
  }
}

export default App;