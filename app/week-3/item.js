

export default function Item(props){
    let { name, quantity, category } = props;
    return(
        <dev>
            <ul>
                <li>{name}</li>
                <li>{quantity}</li>
                <li>{category}</li>
            </ul>
        </dev>
    )
}