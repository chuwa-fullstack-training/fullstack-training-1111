import React from "react";
import "./styles.css";

const convert = (inputVal) => {
  if (isNaN(inputVal) || !inputVal) return inputVal;

  lastDigit = Number(inputVal) % 10;
  if (lastDigit === 1) {
    return inputVal + "st";
  } else if (lastDigit === 2) {
    return inputVal + "nd";
  } else if (lastDigit === 3) {
    return inputVal + "rd";
  } else {
    return inputVal + "th";
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
    };
  }

  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  render() {
    const convertedVal =
      this.state.inputVal === "" ? "" : convert(this.state.inputVal);
    return (
      <div>
        <input
          placeholder="Your input here"
          value={this.state.inputVal}
          onChange={this.handleChange}
        />
        <input disabled value={convertedVal} />
      </div>
    );
  }
}

export default App;