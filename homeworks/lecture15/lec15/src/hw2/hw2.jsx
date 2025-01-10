import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './hw2.css';
import MyColors from './components/MyColors';
import ColorComponent from './components/ColorComponent';

const ColorRouter = () => {
  const [components, setComponents] = useState([
    { id: 'first', name: 'first', color: 'white' },
    { id: 'second', name: 'second', color: 'white' },
    { id: 'third', name: 'third', color: 'white' },
    { id: 'fourth', name: 'fourth', color: 'white' },
    { id: 'fifth', name: 'fifth', color: 'white' },
    { id: 'sixth', name: 'sixth', color: 'white' },
  ]);

  const updateComponent = (id, updates) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id ? { ...component, ...updates } : component
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MyColors components={components} updateComponent={updateComponent} />}
        />
        {components.map((component) => (
          <Route
            key={component.id}
            path={`/${component.id}`}
            element={<ColorComponent component={component} updateComponent={updateComponent} />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default ColorRouter;
