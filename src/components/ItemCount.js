import React from "react";

const ItemCount = ({
  stockInicial,
  stock,
  countIncrement,
  countDecrement,
  stockRestante
}) => {
  return (
    <>
      <div>
        <p>stock {stockRestante} </p>
        <p className="increment" onClick={countIncrement}>
          +
        </p>
        <p>{stockInicial}</p>
        <p className="increment" onClick={countDecrement}>
          -
        </p>
      </div>
    </>
  );
};

export default ItemCount;
