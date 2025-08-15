import './Item.css'
function Item(props){
    const detergent=props.name;
    return (<div>
        <div className="nirma">{detergent}</div>
        {props.children}
    </div>
    );
}

export default Item;