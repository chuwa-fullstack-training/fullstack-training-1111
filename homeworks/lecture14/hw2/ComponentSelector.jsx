import React from "react";

const ComponentSelector = ({ components, selectedComponent, onComponentChange }) => {
  return (
    <select
      value={selectedComponent}
      onChange={(e) => onComponentChange(e.target.value)}
    >
      {components.map((component) => (
        <option key={component} value={component}>
          {component}
        </option>
      ))}
    </select>
  );
};

export default ComponentSelector;
