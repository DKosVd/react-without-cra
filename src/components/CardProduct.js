import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/products";
import '../styles/CardProduct.css'
import Button from "./Button";

const CardProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    useEffect(() => {
        setProduct(getProductById(id));
    }, [id]);

    if(!product) {
        return (
            <div>По такому  id нет товара</div>
        )
    };

    return (
        <article className="product-card">
            <div className="product-card-content">
                <div className="product-card-content-img">
                    <img width={300} height={350} src="https://via.placeholder.com/300x180"/>
                </div>
                <div className="product-card-content-information-wrapper">
                    <div className="product-card-content-information">
                        <span className="product-card-content-information-title">{product?.name}</span>
                        <span className="product-card-content-information-subtitle">Количество {product?.count}</span>
                    </div>
                    <div className="product-card-content-main">
                        <span className="product-card-content-main-price">{product?.price} Р</span>
                        <Button/>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default CardProduct;