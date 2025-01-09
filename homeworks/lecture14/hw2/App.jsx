import React, { useState } from "react";
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
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {components.map((component) => (
          <ColorBox
            key={component}
            name={component}
            color={selectedComponent === component ? selectedColor : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
