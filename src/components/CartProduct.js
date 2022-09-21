import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addElementToCart, deleteElementFromCart } from "../features/cart/cart";
import { getProductById } from "../features/products/product";
import '../styles/CartProduct.css';

const Counter = ({count, id}) => {

    const dispatch = useDispatch();

    const minus = () => {
        dispatch(deleteElementFromCart(id))
    }

    const plus = () => {
        dispatch(addElementToCart({_id: id}));
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

    return (
        <div className="cart-product">
            <div className="cart-product-img">
                <img src={product?.picture}/>
            </div>
            <div className="cart-product-info">
                <div className="cart-product-info-title">{product?.name}</div>
                <div className="cart-product-info-manipulate">
                    <Counter count={product?.count} id={product?._id}/>
                    <div className="cart-product-info-manipulate-price">{product?.price * product?.count } Р</div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct;