import React from 'react';

const ColorComponent = ({ component, updateComponent }) => {
  const handleNameChange = (e) => {
    updateComponent(component.id, { name: e.target.value });
  };

  return (
    <div className="app-container">
      <h2>Component: {component.id}</h2>
      <div
        className="component"
        style={{ backgroundColor: component.color, margin: '0 auto', width: '50%' }}
      >
        <p>Current Name:</p>
        <input
          type="text"
          value={component.name}
          onChange={handleNameChange}
          placeholder="Enter a new name"
        />
      </div>
    </div>
  );
};

export default ColorComponent;
