import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const convert = (num) => {
    if (isNaN(num) || !num) return num;

    const lastDigit = num % 10;
    switch (lastDigit) {
      case 1:
        return `${num}st`;
      case 2:
        return `${num}nd`;
      case 3:
        return `${num}rd`;
      default:
        return `${num}th`;
    }
  };

  return (
    <div className="container">
      <h1>Number Converter</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="input-box"
          placeholder="Enter a number"
        />
        <div className="output-box">{convert(input)}</div>
      </div>
    </div>
  );
}

export default App;
