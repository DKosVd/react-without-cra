import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import '../styles/Main.css'

const MainLayout = () => {
    return (
        <main>
            <Header/>
            <div className="container">
                <Outlet/>
            </div>
            <Footer/>
        </main>
    )
}

export default MainLayout;