import React, { useState } from "react";
import "./App.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type BoxProps = {
  name: string;
  color: string;
  onNameChange: (newName: string) => void;
};

const Box: React.FC<BoxProps> = ({ name, color, onNameChange }) => {
  return (
    <Card className="card" style={{ backgroundColor: color }}>
      <CardHeader>
        <CardTitle>Component Name:</CardTitle>
      </CardHeader>
      <CardContent>
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="shadcn-input"
        />
      </CardContent>
    </Card>
  );
};

function App() {
  const defaultNames = ["first", "second", "third", "fourth", "fifth", "sixth"];
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

  const [boxNames, setBoxNames] = useState(defaultNames);
  const [boxColors, setBoxColors] = useState(Array(6).fill("white"));

  const [selectedBox, setSelectedBox] = useState<number | null>(null);

  const handleNameChange = (index: number, newName: string) => {
    const updatedNames = [...boxNames];
    updatedNames[index] = newName;
    setBoxNames(updatedNames);
  };

  const handleColorChange = (newColor: string) => {
    if (selectedBox !== null) {
      const updatedColors = [...boxColors];
      updatedColors[selectedBox] = newColor;
      setBoxColors(updatedColors);
    }
  };

  return (
    <div className="container">
      {/* Dropdown menu for box selection */}
      <div className="controls">
        <DropdownMenu>
          <DropdownMenuTrigger className="dropdown">
            {selectedBox !== null ? boxNames[selectedBox] : "Select a Box"}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {boxNames.map((name, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => setSelectedBox(index)}
              >
                {name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Dropdown menu for color selection */}
        <DropdownMenu>
          <DropdownMenuTrigger
            className="dropdown"
            disabled={selectedBox === null}
          >
            Select a color
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {colors.map((name, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => handleColorChange(name)}
              >
                {name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Render boxes */}
      <div className="grid">
        {boxNames.map((name, index) => (
          <Box
            key={index}
            name={name}
            color={boxColors[index]}
            onNameChange={(newName) => handleNameChange(index, newName)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
