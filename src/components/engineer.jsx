import React from 'react';
import { useState } from 'react';

const Engineer = ({ count, name, update }) => {
  const [counter, setCounter] = useState(count);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const incrementCount = () => {
    setCounter(counter + 1);
    // update({ counter });
  };

  const decrementCount = () => {
    counter <= 0 ? null : setCounter(counter - 1);
  };

  const resetCount = () => {
    setCounter(0);
  };

  return (
    <div className="engineer-container">
      <p>{capitalizeFirstLetter(name)}</p>
      <p className="count">{counter}</p>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default Engineer;
