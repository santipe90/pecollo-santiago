//import { Counter } from '../itemcounter/itemcounter'
import { Item } from '../item/item'
export const ItemListContainer = (props) => {

    const handleClick = () => 
    alert(`Saludos ${props.greeting} `)

    return (
    <div onClick={handleClick}>
        <h2>{props.greeting}</h2>
        <h2><Item/></h2>
    </div>
)
}