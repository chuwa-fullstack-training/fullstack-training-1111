import React, { useState } from "react";

const TextBars = () => {
  const [input, setInput] = useState("");

  const getOrdinal = (num) => {
    const parsedNum = parseInt(num, 10);
    if (isNaN(parsedNum)) return num;

    const lastDigit = parsedNum % 10;
    const lastTwoDigits = parsedNum % 100;

    if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
      return `${parsedNum}th`;
    }

    switch (lastDigit) {
      case 1:
        return `${parsedNum}st`;
      case 2:
        return `${parsedNum}nd`;
      case 3:
        return `${parsedNum}rd`;
      default:
        return `${parsedNum}th`;
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <input
        type="text"
        placeholder="Please type at here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "200px",
          marginRight: "20px",
          padding: "10px",
          fontSize: "16px",
        }}
      />
      <input
        type="text"
        readOnly
        value={getOrdinal(input)}
        style={{
          width: "200px",
          padding: "10px",
          fontSize: "16px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default TextBars;
