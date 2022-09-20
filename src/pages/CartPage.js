import React from "react";
import { useSelector } from "react-redux";
import CartProducts from "../components/CartsProducts";
import '../styles/CartPage.css'


const CartPage = () => {
    return (
        <div className="cart-page">
             <div>Корзина</div>
             <CartProducts/>
        </div>
    )
}

export default CartPage;