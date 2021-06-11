import { Counter } from '../itemcounter/itemcounter'
export const ItemListContainer = (props) => {

    const handleClick = () => 
    alert(`Saludos ${props.greeting} `)

    return (
    <div onClick={handleClick}>
        <h2>{props.greeting}</h2>
        <h2><Counter/></h2>
    </div>
)
}