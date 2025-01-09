import React from "react";

const ColorBox = ({ name, color }) => {
  return (
    <div
      style={{
        width: "150px",
        height: "100px",
        backgroundColor: color || "lightgray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
      }}
    >
      <span>{name}</span>
    </div>
  );
};

export default ColorBox;
