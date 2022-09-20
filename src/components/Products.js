import React, { useEffect, useState } from "react";
import Product from "./Product";
import '../styles/Products.css'
import { getProducts } from "../api/products";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        setProducts(getProducts());
    }, []);

    return (
    <div className="products-elems">
        {products && products.map((product) => {
            return (
                <Link key={product._id} className="product-elem" to={`products/${product._id}`}>
                    <Product data={product}/>
                </Link>
            )
        })}
    </div>
    )
}


export default Products;