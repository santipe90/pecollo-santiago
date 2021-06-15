export const Product = (props) => {

    const handleClick = () => 
    alert(`Compra ${props.title} porque vence`)

    return (
    <div onClick={handleClick}>
        <h2>{props.title}</h2>
        <p>{props.price}</p>
        <p>{props.description}</p>
    </div>
)
}