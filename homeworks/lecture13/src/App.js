import "./styles.css";
import React, { useState } from "react";

const App = () => {
  // Create an array of 20 numbers [1..20]
  const buttons = Array.from({ length: 20 }, (_, i) => i + 1);
  const [statusText, setStatusText] = useState("status bar");

  const handleClick = (num) => {
    setStatusText(`status ${num} clicked`);
  };

  return (
    <div className="phone">
      <div className="phonew">
        {/* display Status Bar */}
        <div className="statusBar">{statusText}</div>

        {/* Main Grid of Buttons */}
        <div className="gridContainer">
          {buttons.map((num) => (
            <button
              key={num}
              className="button"
              onClick={() => handleClick(num)}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
