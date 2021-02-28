import React from 'react';
import logo from '../images/logo.png';
import '../Header/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <button >Sign out</button>
            </nav>
        </div>
    );
};

export default Header;