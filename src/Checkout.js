import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import  CartItem  from './CartItem';
import {useStateValue} from './StateProvider'

function Checkout() {
const[{basket},dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src ="https://www.angelflightse.org/wp-content/uploads/2018/06/Amazon-Smile-Banner-728x90.jpg" alt="amazon ad"/>
                <div className="checkout__title">
                    <h2>Your Shopping Cart</h2>
                </div>
                <div className="checkout__cartItems">
                {basket.map(el=>(
                    <CartItem 
                    id ={el.id} 
                    title={el.title}
                    image={el.image}
                    price = {el.price}
                    rating = {el.rating}
                    />
                ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )

    
}

export default Checkout
