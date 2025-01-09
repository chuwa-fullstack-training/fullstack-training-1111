import "./styles.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./styles.css";

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  },
  controls: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
    alignItems: "center",
  },
  select: {
    padding: "0.3rem",
    fontSize: "1rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  },
  square: {
    minHeight: "150px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "10px",
    cursor: "pointer",
  },
  label: {
    margin: 0,
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "60%",
    fontSize: "1rem",
    padding: "5px",
  },
};

function ColorPicker({
  items,
  selectedId,
  handleSelectedIdChange,
  handleColorChange,
}) {
  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <div style={styles.controls}>
      <select
        value={selectedId}
        onChange={handleSelectedIdChange}
        style={styles.select}
      >
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      <select
        value={selectedItem?.color || "#f2f2f2"}
        onChange={handleColorChange}
        style={styles.select}
      >
        <option value="#ffa">Light Yellow</option>
        <option value="#fda">Light Pink</option>
        <option value="#daf">Light Purple</option>
        <option value="#afa">Light Green</option>
        <option value="#ffd700">Gold</option>
        <option value="#ffdead">Navajo White</option>
      </select>
    </div>
  );
}

function ColorGrid({ items }) {
  return (
    <div style={styles.grid}>
      {items.map((item) => (
        <Link
          key={item.id}
          to={`/color/${item.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div style={{ ...styles.square, backgroundColor: item.color }}>
            <p style={styles.label}>{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function ColorComponent({ items, handleNameChange }) {
  const { id } = useParams();
  const itemId = Number(id);
  const item = items.find((i) => i.id === itemId);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div style={{ ...styles.square, backgroundColor: item.color }}>
      <p style={styles.label}>Component name:</p>
      <input
        type="text"
        value={item.name}
        onChange={(e) => handleNameChange(itemId, e.target.value)}
        style={styles.input}
      />
    </div>
  );
}

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "first" },
    { id: 2, name: "second" },
    { id: 3, name: "third" },
    { id: 4, name: "fourth" },
    { id: 5, name: "fifth" },
    { id: 6, name: "sixth" },
  ]);

  const [selectedId, setSelectedId] = useState(1);

  const handleSelectedIdChange = (e) => {
    setSelectedId(Number(e.target.value));
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === selectedId ? { ...item, color: newColor } : item
      )
    );
  };

  const handleNameChange = (id, newName) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  };

  return (
    <Router>
      <div style={styles.container}>
        <ColorPicker
          items={items}
          selectedId={selectedId}
          handleSelectedIdChange={handleSelectedIdChange}
          handleColorChange={handleColorChange}
        />

        <ColorGrid items={items} />

        <Routes>
          <Route
            path="/color/:id"
            element={
              <ColorComponent
                items={items}
                handleNameChange={handleNameChange}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
