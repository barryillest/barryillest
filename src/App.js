import React, { useState } from 'react';
const App = () => {
  const [color, setColor] = useState('#0000FF');
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="">
      <div className="">
        {

        }

        <h1 className="wewe">React Color Picker</h1>

        {

        }

        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className=""/>

        {

        }

        <div
          className=""
          style={{ backgroundColor: color }}
        ></div>

        {
      }

        <div className="">
          Current Hex Color: <span className="font-bold text-blue-900">{color}</span>
        </div>
      </div>
    </div>
  );
};

export default App;

