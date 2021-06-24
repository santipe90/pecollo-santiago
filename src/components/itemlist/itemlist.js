import React, { useState, useEffect } from "react";
import { Item } from "../Item/Item";

//item no tiene que hablar con las promises, para eso container
// use effect usa funcion y frecuencia

export const ItemList = (props) => {

    const [remeras,setRemeras] = useState([])

useEffect(() => {
    getRemes().then(result => {
        console.log(result)
        setRemeras(result);
    });
}, [])

    
    // usestate para ver una transformacion en pantalla
     const handleClick = () => alert(`Gracias por comprar`)
 
         return (
             <div className='App'>
                 <h1>Remeras</h1>
                 <button onClick={handleClick}>Comprar</button>
                 {remeras.map((product) => (
         <Item
         name={product.name}
         price={product.price}
         description={product.description} 
         />
     
          )
          )
          
          }
             </div>
         )
         }
 
         export default ItemList
 
         //container y componente dummy







