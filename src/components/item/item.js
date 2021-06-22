import React, { useEffect, useState } from "react";
import remenegra from '../../img/RB.jpg'

const remeraData = [
    {
    name: 'Remera Cresta',
    description: 'Color negro',
    price: 1200,
    stock: 5,
    img: { remenegra }
  },
  {
    name: 'Remera Cresta',
    description: 'Color negro',
    price: 1200,
    stock: 5,
    img: { remenegra }
  },
  {
    name: 'Remera Cresta',
    description: 'Color negro',
    price: 1200,
    stock: 5,
    img: { remenegra }
  }
]


const getRemes = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(remeraData)
      }, 2000)
    })
}


//item no tiene que hablar con las promises, para eso container
// use effect usa funcion y frecuencia


export const Item = () => {
    
   // usestate para ver una transformacion en pantalla

   const [remeras,setRemeras] = useState([])

    useEffect(() => {
        getRemes().then(result => {
            console.log(result)
            setRemeras(result);
        });
    }, [])


    const handleClick = () => alert(`Gracias por comprar`)

        return (
            <div className='App'>
                <h1>Remera</h1>
                <button onClick={handleClick}>Comprar</button>
                <h2>{remeraData}</h2>
            </div>
        )
        }

        export default Item

        //container y componente dummy