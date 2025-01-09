/* eslint-disable react/prop-types */
import {useNavigate, useParams} from 'react-router-dom';
import Card from './Card';
import './App.css';
export const MainGrid = ({data, setData}) => {
  const navigate = useNavigate();
  const {cardName} = useParams();

  const handleColorChange = (color) => {
    console.log(cardName);
    setData(data.map((d) => (d.name === cardName ? {...d, color} : d)));
  };

  return (
    <div>
      <div className="dropdown">
        <select
          id="cardSelect"
          onChange={(e) => navigate(`/${e.target.value}`)}
        >
          {data.map((d) => (
            <option key={d.name} value={d.name}>
              {d.name}
            </option>
          ))}
        </select>

        <select
          id="colorSelect"
          onChange={(e) => handleColorChange(e.target.value)}
        >
          <option value="" disabled selected>
            Choose color
          </option>
          <option value="antiquewhite">antiquewhite</option>
          <option value="azure">azure</option>
          <option value="blueviolet">blueviolet</option>
          <option value="chocolate">chocolate</option>
          <option value="cornflowerblue">cornflowerblue</option>
          <option value="crimson">crimson</option>
          <option value="dodgerblue">dodgerblue</option>
          <option value="forestgreen">forestgreen</option>
          <option value="navy">navy</option>
        </select>
      </div>

      <div className="grid">
        {data.map((entry, idx) => (
          <div className="item" key={entry.name}>
            <Card
              color={entry.color}
              name={entry.name}
              changeName={(newName) => {
                setData(
                  data.map((e, i) => {
                    if (i === idx) {
                      return {...e, name: newName};
                    }
                    return e;
                  })
                );
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
