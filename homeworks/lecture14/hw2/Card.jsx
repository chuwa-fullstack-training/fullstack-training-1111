import "./styles.css";

export default function ({
  componentName,
  onComponentNameChange,
  index,
  color,
}) {
  const onChange = (e) => {
    const newName = e.target.value;
    onComponentNameChange(newName, index);
  };

  return (
    <div className="card" style={{ backgroundColor: `${color}` }}>
      <div>Component name:</div>
      <input type="text" value={componentName} onChange={onChange} />
    </div>
  );
}
