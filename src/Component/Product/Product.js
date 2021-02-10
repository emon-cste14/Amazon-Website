import React from 'react';
import '../Product/ProductStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
export default function Product(props) {
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className="product-style">
            <div>
            <img src={img} alt=""/>
            </div>
            <div>
             <h4 className="product-name">{name}</h4>
             <p>by:{seller}</p><br />
             <h3>${price}</h3>
             <h4>only {stock} left in stock.order soon.</h4>
             <button className="cart-btn" onClick={()=>props.addProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    )
}
