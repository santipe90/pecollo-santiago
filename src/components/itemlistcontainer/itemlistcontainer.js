//import { Counter } from '../itemcounter/itemcounter'
import React, { useEffect, useState } from "react";
import { Item } from "../Item/Item";
import { ItemList } from '../ItemList/ItemList'


export const ItemListContainer = (props) => {

    const getRemes = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            return resolve(Item)
          }, 2000)
        })
    }



return (
    <div>
        <ItemList/>
    </div>
)
}