import { useState } from "react";

interface ItemType {
  id: number;
  name: string;
  color: string;
}

const colors = [
  "red",
  "yellow",
  "purple",
  "orange",
  "lightblue",
  "green",
  "pink",
  "aqua",
  "antiquewhite",
  "brown",
];

const initState: ItemType[] = [
  { id: 1, name: "Apple", color: "red" },
  { id: 2, name: "Banana", color: "yellow" },
  { id: 3, name: "Grape", color: "purple" },
  { id: 4, name: "Orange", color: "orange" },
  { id: 5, name: "Strawberry", color: "red" },
  { id: 6, name: "Blueberry", color: "lightblue" },
];

const MyComponent = () => {
  const [items, setItems] = useState<ItemType[]>(initState);
  const [selectedId, setSelectedId] = useState<number | null>(1);
  const [nameDropdown, setNameDropdown] = useState<boolean>(false);
  const [colorDropdown, setColorDropdown] = useState<boolean>(false);

  const updateItem = (id: number, name: string, color: string) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, name, color };
      }
      return item;
    });
    setItems(newItems);
  };

  const toggleNameDropdown = () => {
    setNameDropdown(!nameDropdown);
    setColorDropdown(false);
  };

  const toggleColorDropdown = () => {
    setColorDropdown(!colorDropdown);
    setNameDropdown(false);
  };

  return (
    <div className="hw2-container">
      <div className="hw2-selectors">
        <div className="hw2-selector">
          <button onClick={() => toggleNameDropdown()}>
            <p>{items[selectedId! - 1]?.name}</p>
            {/* triangle */}
            <div className={'triangle ' + (nameDropdown ? 'up' : 'down')}></div>
          </button>
          {nameDropdown && (
            <div className="hw2-dropdown" onBlur={toggleNameDropdown}>
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedId(item.id);
                    toggleNameDropdown();
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="hw2-selector">
          <button onClick={() => toggleColorDropdown()}>
            Choose color
            <div className={'triangle ' + (colorDropdown ? 'up' : 'down')}></div>
          </button>
          {colorDropdown && (
            <div className="hw2-dropdown" onBlur={toggleColorDropdown}>
              {colors.map((color) => (
                <div
                  key={color}
                  onClick={() => {
                    updateItem(selectedId!, items[selectedId! - 1].name, color);
                    toggleColorDropdown();
                  }}
                >
                  {color}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="hw2-items">
        {items.map((item) => (
          <div
            key={item.id}
            className="hw2-item"
            style={{ backgroundColor: item.color }}
          >
           <label htmlFor="name">Component Name:</label> 
            <input
              className="hw2-input"
              value={item.name}
              onChange={(e) =>
                updateItem(item.id, e.target.value, item.color)
              }
            />
          </div>
        ))}
        </div>
    </div>
  );
};

export default MyComponent;
