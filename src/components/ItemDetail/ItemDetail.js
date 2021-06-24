import React from "react";
import ItemDetail from "./ItemDetail";


const ItemDetail = ({ person }) => {
  const idNumber = person.idNumber;
  let [count, setCount] = useState(1);
  let [stock, setStock] = useState(idNumber);
  let [remaingStock, setRemainingStock] = useState(idNumber - 1);

  const countIncrement = () => {
    if (count < stock) {
      setCount(++count);
      setRemainingStock(--remaingStock);
    }
  };
  const countDecrement = () => {
    if (count > 1) {
      setCount(--count);
      setRemainingStock(++remaingStock);
    }
  };

  return (
    <>
      <h2>{person.name}</h2>
      <p>{person.para}</p>
      <ItemCount
        remaingStock={remaingStock}
        initial={count}
        stock={idNumber}
        countIncrement={countIncrement}
        countDecrement={countDecrement}
      />
      <button>Confirmar Compra</button>
    </>
  );
};

export default ItemDetail;