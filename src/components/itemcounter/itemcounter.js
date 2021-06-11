import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <h5>Producto {count}</h5>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onADD={alert()}>Agregar al carrito</button>
    </div>
  );
}

export default Counter;