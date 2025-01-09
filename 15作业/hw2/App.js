import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

const ComponentBox = ({ id, name, color, onNameChange, navigateTo }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "120px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: color || "#fff",
        padding: "10px",
      }}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => onNameChange(id, e.target.value)}
        style={{ marginBottom: "10px", textAlign: "center" }}
      />
      <button onClick={() => navigateTo(id)} style={{ padding: "5px 10px" }}>
        View Details
      </button>
    </div>
  );
};

const ComponentPage = ({ components, onNameChange, onColorChange }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const component = components.find((comp) => comp.id === Number(id));

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Component Selector</h2>
      {component ? (
        <>
          <h3>{component.name} Component</h3>
          <div
            style={{
              width: "200px",
              height: "100px",
              margin: "20px auto",
              border: "1px solid #ccc",
              backgroundColor: component.color || "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>{component.name}</p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <label>
              Change color:
              <select
                value={component.color || ""}
                onChange={(e) => onColorChange(component.id, e.target.value)}
                style={{ marginLeft: "10px" }}
              >
                <option value="">Choose color</option>
                <option value="lightblue">Light Blue</option>
                <option value="lightgreen">Light Green</option>
                <option value="lightcoral">Light Coral</option>
                <option value="lightgoldenrodyellow">Light Yellow</option>
              </select>
            </label>
          </div>
        </>
      ) : (
        <h3>Component not found</h3>
      )}
      <br />
      <button onClick={() => navigate("/")} style={{ marginTop: "20px" }}>
        Back to Home
      </button>
    </div>
  );
};

const App = () => {
  const [components, setComponents] = useState([
    { id: 1, name: "first", color: "" },
    { id: 2, name: "second", color: "" },
    { id: 3, name: "third", color: "" },
    { id: 4, name: "fourth", color: "" },
    { id: 5, name: "fifth", color: "" },
    { id: 6, name: "sixth", color: "" },
  ]);

  const navigate = useNavigate();

  const handleNameChange = (id, newName) => {
    setComponents((prev) =>
      prev.map((comp) => (comp.id === id ? { ...comp, name: newName } : comp))
    );
  };

  const handleColorChange = (id, color) => {
    setComponents((prev) =>
      prev.map((comp) => (comp.id === id ? { ...comp, color } : comp))
    );
  };

  const handleNavigate = (id) => {
    navigate(`/component/${id}`);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Component Selector</h1>
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              {components.map((comp) => (
                <ComponentBox
                  key={comp.id}
                  id={comp.id}
                  name={comp.name}
                  color={comp.color}
                  onNameChange={handleNameChange}
                  navigateTo={handleNavigate}
                />
              ))}
            </div>
          }
        />
        <Route
          path="/component/:id"
          element={
            <ComponentPage
              components={components}
              onNameChange={handleNameChange}
              onColorChange={handleColorChange}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
