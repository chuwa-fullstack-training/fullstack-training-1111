import { useNavigate, useParams } from "react-router-dom";
import "./app.css";
import { useEffect } from "react";


export default function ({
  onComponentNameChange,
  componentNames,
  colors,
}) {
  const { componentName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(componentNames.indexOf(componentName) === -1) {
      navigate('/Error');
    }
  }, []);

  const index = parseInt(componentNames.indexOf(componentName));

  const onChange = (e) => {
    const newName = e.target.value;
    onComponentNameChange(newName, index);
  };

  return (
    <div className="card" style={{ backgroundColor: `${colors[index]}` }}>
      <div>Component name:</div>
      <input type="text" value={componentName} onChange={onChange} />
    </div>
  );
}
