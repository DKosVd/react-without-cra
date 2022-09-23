import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    Outlet
  } from "react-router-dom";
import Products from "../components/Products";
import { sortElementByType } from "../features/products/product";
import filters from "../mock-data/filter";
import '../styles/Products.css'

const Filter = () => {
    const [active, setActive] = useState(false);
    const [activeElem, setActiveElem] = useState(null);

    const dispatch = useDispatch();

    const setActiveHandler = (e) => {
        setActive(!active);
    }

    useEffect(() => {
        const handlerCloseFilter = (e) => {
            if(active && !e.target.closest('.products-sort-content')) {
                setActive(!active)
            }
        }
        document.addEventListener('click', handlerCloseFilter)
        return () => document.removeEventListener('click', handlerCloseFilter);
    }, [active])

    const handlerSortProducts = (e) => {
        const sortType = e.target.getAttribute('data-filter');
        dispatch(sortElementByType(sortType));
    }

    const setActiveElemHandler = (e) => {
        e.stopPropagation();
        const activeIdx = +e.target.getAttribute('active-key');
        setActiveElem(activeIdx);
        setActive(!active)
        handlerSortProducts(e);
    }

    return (
        <div className="products-sort" onClick={setActiveHandler}>
                <span className="products-sort-title">Сортировка</span>
                <div className="products-sort-toggle">
                    <i>{">"}</i>
                </div>
               { active &&
                <div className="products-sort-content">
                    {filters && filters.map( ({filter, name}, idx) => {
                        return (
                            <div onClick={setActiveElemHandler} className={`products-sort-content-elem ${activeElem === idx ? 'products-sort-content-elem--active': ''}`} active-key={idx} key={idx} data-filter={filter}>{name}</div>
                        )
                    })}
                </div>
            }
            </div>
    );
}

const ProductsPage = () => {
    return (
        <div className="products">
            <p className="title">Название продуктов</p>
            <Filter/>
            <Products/>
            <Outlet />
        </div>
    );
}

export default ProductsPage;