import React from "react";
import '../styles/Header.css'
import Navigation from "./Navigation";

const Header = () => {
    return(
        <header>
            <div className="header-menu-logo">
                <img src="#"/>
            </div>
            <Navigation/>
            <div className="header-menu-information"> 
                <span className="header-menu-information-title">Наш телефон</span>
                <span className="header-menu-information-number">+7932 292 999 121</span>
                <span className="header-menu-information-number">+7932 292 999 121</span>
            </div>
        </header>
    )
}

export default Header;