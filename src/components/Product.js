import React from "react";
import { useDispatch } from "react-redux";
import { addElementToCart } from "../features/cart/cart";
import '../styles/Product.css'
import Button from "./Button";

const Product = ( {data} ) => {

    const dispatch = useDispatch();
    const {_id, price, picture, name, count} = data;
    const addToCart = (e) => {
        e.preventDefault();
        dispatch(addElementToCart({
            _id,
            ...data
        }));
    }

    return (
        <>
            <div>
                <div className="product-image">
                    <img src={picture}/>
                </div>
                <div className="product-info">
                    <div className="product-info-main">
                        <span className="product-info-main-name">{name}</span>
                        <span className="product-info-main-desc">количество {count}</span>
                    </div>
                    <div className="product-info-manipulate">
                        <span className="product-info-manipulate-price">{price} Р</span>
                        <Button text={"Добавить"} onClick={addToCart}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default  Product;