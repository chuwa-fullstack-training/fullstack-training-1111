import "./styles.css";
import React, { useState } from "react";
import Card from "./Card";

const DEFAULT_COMPONENT_NAMES = ["One", "Two", "Three", "Four", "Five", "Six"];
const DEFAULT_COLORS = [
  "red",
  "yellow",
  "blue",
  "green",
  "grey",
  "orange",
  "purple",
];

export default function App() {
  const [componentNames, setComponentNames] = useState(DEFAULT_COMPONENT_NAMES);
  const [colors, setColors] = useState(["", "", "", "", "", ""]);
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const onComponentNameChange = (name, index) => {
    const updatedComponentNames = [
      ...componentNames.slice(0, index),
      name,
      ...componentNames.slice(index + 1),
    ];
    setComponentNames(updatedComponentNames);
  };

  const onComponentNameSelected = (e) => {
    setCurrentComponentIndex(e.target.value);
  };

  const onColorChange = (e) => {
    const color = e.target.value;

    const updatedColors = [
      ...colors.slice(0, currentComponentIndex),
      color,
      ...colors.slice(currentComponentIndex + 1),
    ];
    setColors(updatedColors);
  };

  return (
    <div className="App">
      <div className="dropdownsContainer">
        <div>
          <select
            id="dropdown"
            name="dropdown"
            onChange={onComponentNameSelected}
          >
            {componentNames.map((componentName, i) => (
              <option key={i} value={i}>
                {componentName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            id="colorDropdown"
            name="colorDropdown"
            onChange={onColorChange}
            defaultValue={-1}
          >
            <option disabled value={-1}>
              Choose color
            </option>
            {DEFAULT_COLORS.map((color, i) => (
              <option key={i} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="cardsContainer">
        {componentNames.map((componentName, i) => (
          <Card
            componentName={componentName}
            key={i}
            index={i}
            onComponentNameChange={onComponentNameChange}
            color={colors[i]}
          />
        ))}
      </div>
    </div>
  );
}
