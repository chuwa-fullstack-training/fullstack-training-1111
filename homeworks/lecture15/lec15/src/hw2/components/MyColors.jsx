import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyColors = ({ components, updateComponent }) => {
  const [selectedComponent, setSelectedComponent] = useState(components[0].id);
  const [selectedColor, setSelectedColor] = useState('white');

  const handleColorChange = () => {
    updateComponent(selectedComponent, { color: selectedColor });
  };

  return (
    <div className="app-container">
      <div className="dropdown">
        <label htmlFor="component-selector">Choose component: </label>
        <select
          id="component-selector"
          value={selectedComponent}
          onChange={(e) => setSelectedComponent(e.target.value)}
        >
          {components.map((component) => (
            <option key={component.id} value={component.id}>
              {component.name}
            </option>
          ))}
        </select>
      </div>

      <div className="dropdown">
        <label htmlFor="color-selector">Choose color: </label>
        <select
          id="color-selector"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="white">White</option>
          <option value="lightblue">Light Blue</option>
          <option value="lightgreen">Light Green</option>
          <option value="lightcoral">Light Coral</option>
          <option value="yellow">Yellow</option>
        </select>
        <button onClick={handleColorChange}>Apply Color</button>
      </div>

      <div className="components-grid">
        {components.map((component) => (
          <div
            key={component.id}
            className="component"
            style={{ backgroundColor: component.color }}
          >
            <p>
              Component: <Link to={`/${component.id}`}>{component.name}</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyColors;
