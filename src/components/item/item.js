import React, { useEffect, useState } from "react";
import remenegra from '../../img/RB.jpg'


export function Item() {
    
    const getRemes = (remeraData) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            return resolve(remeraData)
          }, 2000)
        })
    }

    const remeraData = [
        {
        name: 'Remera Cresta',
        description: 'Color negro',
        price: 1200,
        stock: 5,
        img: { remenegra }
      }
    ]
// use effect usa funcion y frecuencia
    useEffect(() => {
        getRemes( remeraData ).then(result => {
            console.log(result)
            getRemes(result);
        });
    }, [])

    handleClick() {
        console.log('Se hizo click');
        }

        return (
            <div className='App'>
                <h1>Remera</h1>
                <button onClick={handleClick}>Comprar</button>
                <h2>{remeraData}</h2>
            </div>
        )
        }

        export default Item