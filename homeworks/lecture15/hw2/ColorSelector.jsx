import React from "react";

const ColorSelector = ({ colors, selectedColor, onColorChange }) => {
  return (
    <select
      value={selectedColor}
      onChange={(e) => onColorChange(e.target.value)}
    >
      <option value="">Choose color</option>
      {colors.map((color) => (
        <option key={color} value={color}>
          {color}
        </option>
      ))}
    </select>
  );
};

export default ColorSelector;
