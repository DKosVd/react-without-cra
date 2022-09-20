import React, { useEffect } from "react";
import CartProduct from "./CartProduct";
import '../styles/CartProducts.css';
import Button from "./Button";
import { useSelector } from "react-redux";

const ResultCart = ({ count }) => {

    const totalResult = useSelector(state => state.cart.total);

    return (
        <div className="cart-products-result">
            <div className="cart-products-result-text">Итого</div>
            <div className="cart-products-result-main">
                <span>Количество {count}</span>
                <span>{totalResult} Р</span>
            </div>
        </div>
    )
}

const Empty = () => {
    return (
        <div className="cart-products-empty">
            <span className="cart-products-empty-title">Ваша корзина пуста</span>
            <span className="cart-products-empty-subtitle">Добавьте скорее что-нибудь!</span>
        </div>
    );
}

const CartProducts = () => {

    const products = useSelector( state => state.cart.products ); 

    return (
        <>
            <div className="cart-products">
                {products.length ? products.map( (product, idx) => <CartProduct product={product} key={idx} />): <Empty/>}
            </div>
            {products.length ? <><ResultCart products={products} count={products.length} /><Button text={"Оформить заказ"}/></> : '' }
        </>
    )
}

export default CartProducts;