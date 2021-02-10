import React from 'react';
import logo from '../images/logo.png';
import HeaderStyle from './HeaderStyle.css'
export default function HeaderCom() {
    return (
        <div className="header">
           <img src={logo} alt="logo"/>
           <nav>
               <a href="/shop">Shop</a>
               <a href="/order">Order</a>       
               <a href="/manage">Manage Inventory</a>
           </nav>
        </div>
    )
}
