import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ComponentSelector from "./ComponentSelector";
import ColorSelector from "./ColorSelector";
import ColorBox from "./ColorBox";

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState("first");
  const [selectedColor, setSelectedColor] = useState("");

  const components = ["first", "second", "third", "fourth", "fifth", "sixth"];
  const colors = [
    "antiquewhite",
    "azure",
    "blueviolet",
    "chocolate",
    "cornflowerblue",
    "crimson",
    "dodgerblue",
    "forestgreen",
    "navy",
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <ComponentSelector
          components={components}
          selectedComponent={selectedComponent}
          onComponentChange={setSelectedComponent}
        />
        <ColorSelector
          colors={colors}
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
        />
      </div>

      {/* Navigation Links */}
      <div style={{ marginBottom: "20px" }}>
        {components.map((component) => (
          <Link
            key={component}
            to={`/${component}`}
            style={{
              marginRight: "10px",
              textDecoration: "none",
              color: "blue",
              border: "1px solid black",
              padding: "5px 10px",
            }}
          >
            {component}
          </Link>
        ))}
      </div>

      {/* Define Routes */}
      <Routes>
        {components.map((component) => (
          <Route
            key={component}
            path={`/${component}`}
            element={
              <ColorBox
                name={component}
                color={selectedComponent === component ? selectedColor : ""}
              />
            }
          />
        ))}
        {/* Default Route */}
        <Route
          path="/"
          element={<div>Select a component from the links above</div>}
        />
      </Routes>
    </div>
  );
};

export default App;
