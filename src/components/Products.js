import React from "react";
import Product from "./Product";
import '../styles/Products.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Products = () => {
    const products = useSelector(state => state.products.products);

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