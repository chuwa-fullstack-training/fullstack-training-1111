
import React, { useState } from 'react';
import './hw2.css';

const MyColors = () => {
  const [selectedComponent, setSelectedComponent] = useState('first');
  const [selectedColor, setSelectedColor] = useState('white');
  const [components, setComponents] = useState([
    { id: 'first', name: 'first', color: 'white' },
    { id: 'second', name: 'second', color: 'white' },
    { id: 'third', name: 'third', color: 'white' },
    { id: 'fourth', name: 'fourth', color: 'white' },
    { id: 'fifth', name: 'fifth', color: 'white' },
    { id: 'sixth', name: 'sixth', color: 'white' },
  ]);

  // Update the selected component's name
  const handleNameChange = (id, newName) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id ? { ...component, name: newName } : component
      )
    );
  };

  // Update the selected component's color
  const handleColorChange = () => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === selectedComponent ? { ...component, color: selectedColor } : component
      )
    );
  };

  return (
    <div className="app-container">
      {/* Dropdown for selecting component */}
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

      {/* Dropdown for selecting color */}
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

      {/* Display components */}
      <div className="components-grid">
        {components.map((component) => (
          <div
            key={component.id}
            className="component"
            style={{ backgroundColor: component.color }}
          >
            <p>Component name:</p>
            <input
              type="text"
              value={component.name}
              onChange={(e) => handleNameChange(component.id, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyColors;
