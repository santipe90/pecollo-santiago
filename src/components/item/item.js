import React from "react";
import remenegra from '../../img/RN.jpg';
import remeblanca from '../../img/RB.jpg';
import remerosa from '../../img/RS.jpeg';

export const Item = (props) => [
    {
    name: 'Remera Cresta',
    description: 'Color Negro',
    price: 1200,
    stock: 5,
    img: { remenegra }
  },
  {
    name: 'Remera Cresta',
    description: 'Color Blanco',
    price: 1200,
    stock: 5,
    img: { remeblanca }
  },
  {
    name: 'Remera Cresta',
    description: 'Color Rosa',
    price: 1200,
    stock: 5,
    img: { remerosa }
  }
]
 