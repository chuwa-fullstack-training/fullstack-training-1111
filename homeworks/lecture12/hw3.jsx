import React, { useState } from "react";

const HW3 = () => {
  const [count, setCount] = useState(0); // Initialize the count state

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div>
        {/* Buttons to increment the count */}
        <button
          onClick={() => setCount(count + 1)}
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
        >
          +1
        </button>
        <button
          onClick={() => setCount(count + 10)}
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
        >
          +10
        </button>
        <button
          onClick={() => setCount(count + 100)}
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
        >
          +100
        </button>
        <button
          onClick={() => setCount(count + 1000)}
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
        >
          +1000
        </button>
      </div>
      <label
        style={{ fontSize: "24px", display: "block", marginBottom: "20px" }}
      >
        Count: {count}
      </label>
    </div>
  );
};

export default HW3;