import { useState } from 'react';
import './styles.css';

export function Counter() {
const [counter, setCounter]= useState<number>(0);

function handlePlus() {
  setCounter((prevState) => prevState + 1);
}

function handleMinus() {
  setCounter((prevState) => prevState - 1);
}

  return (
    <div className="container">
      <h1>{counter}</h1>
      <div className="buttons">
      <button onClick={handleMinus}>-</button>
      <button onClick={handlePlus}>+</button>
      </div>
    </div>
  )
}
