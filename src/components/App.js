import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import NotFound from "./404.js";
import CartPage from "../pages/CartPage";
import MainLayout from '../layout/MainLayout'
import OrderPage from "../pages/OrderPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<ProductsPage/>}/>
                <Route path="cart" element={<CartPage/>}/>
                <Route path="order" element={<OrderPage/>}/>
                <Route path="products/:id" element={<ProductPage/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default App;