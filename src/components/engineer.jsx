import React from 'react';
import { useState } from 'react';

const Engineer = ({ count, name }) => {
  const [counter, setCounter] = useState(count);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // console.log(props);
  return (
    <div className="engineer-container">
      <h1>{capitalizeFirstLetter(name)}</h1>
      <p className="count">{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => (counter <= 0 ? null : setCounter(counter - 1))}>
        -
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default Engineer;
