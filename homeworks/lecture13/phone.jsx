import React, { useState } from "react";
import "./phone.css";

const PhoneScreen = () => {
  const [statusBarText, setStatusBarText] = useState("status bar");

  const handleClick = (buttonNumber) => {
    setStatusBarText(`Button ${buttonNumber} clicked`);
  };

  return (
    <div className="phone-container">
      <div className="status-bar">{statusBarText}</div>
      <div className="button-grid">
        {Array.from({ length: 20 }, (_, index) => (
          <button
            key={index}
            className="phone-button"
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhoneScreen;