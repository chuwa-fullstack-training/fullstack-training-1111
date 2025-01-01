import React, { useState } from "react";

function toOrdinal(input) {
  const num = parseInt(input, 10);

  if (isNaN(num)) {
    return input;
  }

  const remainder10 = num % 10;
  const remainder100 = num % 100;

  let suffix = "th";

  if (remainder100 >= 11 && remainder100 <= 13) {
    suffix = "th";
  } else {
    switch (remainder10) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
      default:
        suffix = "th";
        break;
    }
  }

  return num + suffix;
}
function OrdinalConverter() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;

    setInputValue(val);

    setOutputValue(toOrdinal(val));
  };

  return (
    <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Input what u want abd/123"
        style={{ padding: "0.5rem" }}
      />
      <input
        type="text"
        value={outputValue}
        readOnly
        style={{ padding: "0.5rem" }}
      />
    </div>
  );
}

export default OrdinalConverter;
