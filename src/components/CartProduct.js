import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../features/products/product";
import '../styles/CartProduct.css';

const Counter = () => {

    const [count, setCount] = useState(0);

    const minus = () => {
        if(count === 0) return; 
        setCount(count - 1);
    }

    const plus = () => {
        setCount(count + 1);
    }

    return (
        <div className="cart-product-info-manipulate-counter">
            <span className="cart-product-counter-minus" onClick={minus}>-</span>
            <span className="cart-product-counter-count">{count}</span>
            <span className="cart-product-counter-plus" onClick={plus}>+</span>
        </div>
    )
}


const CartProduct = ({ product }) => {
    console.log(product)

    return (
        <div className="cart-product">
            <div className="cart-product-img">
                <img src={product?.picture}/>
            </div>
            <div className="cart-product-info">
                <div className="cart-product-info-title">{product?.name}</div>
                <div className="cart-product-info-manipulate">
                    <Counter/>
                    <div className="cart-product-info-manipulate-price">{product?.price} Р</div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct;