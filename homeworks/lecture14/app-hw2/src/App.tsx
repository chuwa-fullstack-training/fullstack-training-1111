import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import NavBar from "./Navbar";
import BoxPage from "./BoxPage";

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

  const [boxes, setBoxes] = useState(
    defaultNames.map((name) => ({ name, color: "white" }))
  );

  const updateBox = (index: number, newName?: string, newColor?: string) => {
    setBoxes((prev) =>
      prev.map((box, i) =>
        i === index
          ? { ...box, name: newName ?? box.name, color: newColor ?? box.color }
          : box
      )
    );
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="/0" replace />} />
          {boxes.map((box, index) => (
            <Route
              key={index}
              path={`/${index}`}
              element={
                <>
                  <NavBar
                    boxNames={boxes.map((box) => box.name)}
                    colors={colors}
                    selectedBox={index}
                    onColorChange={(newColor) =>
                      updateBox(index, undefined, newColor)
                    }
                  />
                  <BoxPage
                    box={box}
                    onNameChange={(newName) => updateBox(index, newName)}
                    onColorChange={(newColor) =>
                      updateBox(index, undefined, newColor)
                    }
                  />
                </>
              }
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
