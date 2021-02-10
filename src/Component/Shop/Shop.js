import React,{useState}from 'react';
import Product from '../Product/Product';
import fakeData from '../../fakeData';
import '../Shop/ShopStyle.css';
import Cart from '../Cart/Cart';

export default function Shop() {
   const dt=fakeData.slice(0,10)
    const [data,setdata]=useState(dt)
   const [cart,setcart]= useState([])
    function addProduct(product){
        const newCart=[...cart,product]
        console.log(product)
        setcart(newCart);
    }
    return (
       <div className="shop-container">
           <div className="product-container">
           {
               data.map(data=><Product addProduct={addProduct} product={data}></Product>)
           }
           </div>
           <div className="cart-container">
               <Cart cart={cart}></Cart>
           </div>
       </div>
    )
}
