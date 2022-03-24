import React from "react";
import { useContext } from "react";
import './collection-item.styles.scss';
import { CartContex } from "../../contexts/cart.context";

const CollectionItem = (product) => {
    const {name, price, imageUrl} = product
    const {addItemToCart} = useContext(CartContex);
    return (
        <div className="collection-item">
        <div className="image" 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}  
        ><button onClick={() => {
            addItemToCart(product)
        }} className="btn card-btn">Add to card</button></div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
    </div>
    )
};

export default CollectionItem;