import React, { useState } from "react";
import "./styles.css";

import "./Counter.css";
function CounterTest() {
  const [count, setCount] = useState(0);

  const increment = (value) => {
    setCount((prevCount) => prevCount + value);
  };

  //  a reset function
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      {/* Buttons */}
      <div className="button-row">
        <button onClick={() => increment(1)}>+1</button>
        <button onClick={() => increment(10)}>+10</button>
        <button onClick={() => increment(100)}>+100</button>
        <button onClick={() => increment(1000)}>+1000</button>
      </div>

      {/* Display */}
      <div className="count-display">{count}</div>

      {/* reset button */}
      <div className="reset-row">
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
}

export default CounterTest;
