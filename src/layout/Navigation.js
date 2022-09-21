import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../styles/Navigation.css'
import navigationPanel from '../mock-data/NavigationPanel'
import { totalElement } from "../features/cart/cart";

const NavigationItem = ({data, count}) => {
    const {title, src, cart, img} = data;
  
    return (
        <Link to={src}>
            <div className="navigation-item">
                <img src={img}/>
                <span>{title}</span>
                {cart && count > 0 && <span className="navigation-item-carts">{count}</span>}
            </div>
        </Link>
       
    )
}

const Navigation = () => {
    const products = useSelector(totalElement);
    return (
    <nav className="navigation">
        {navigationPanel.map( (product, idx) => <NavigationItem key={idx} data={product} count={products}/>)}
    </nav>
    )
}

export default Navigation;