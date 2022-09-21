import React, { useEffect } from "react";
import CartProduct from "./CartProduct";
import '../styles/CartProducts.css';
import Button from "./Button";
import { useSelector } from "react-redux";
import { totalElement, totalPrice } from "../features/cart/cart";
import { Link } from "react-router-dom";

const ResultCart = ({ count }) => {

    const totalResult = useSelector(totalPrice);
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
    const count = useSelector(totalElement)

    return (
        <>
            <div className="cart-products">
                {count ? Object.values(products).map( (product, idx) => <CartProduct product={product} key={idx} />): <Empty/>}
            </div>
            {count ? <>
                        <ResultCart products={products} count={count} />
                        <Link to={'/order'}>
                            <Button text={"Оформить заказ"}/>
                        </Link>
                    </> : '' }
        </>
    )
}

export default CartProducts;