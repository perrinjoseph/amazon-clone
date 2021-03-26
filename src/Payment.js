import React, { useState, useEffect } from 'react'
import CartItem from './CartItem';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import './Payment.css'
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format';
import axios from './axios';
import {db} from './firebase'


function Payment() {
    const [{basket,user},dispatch]=useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("")

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret]= useState(true);

    useEffect(()=>{
        //we are going to generate the special striper secret which allows us to charge the customer
        const getClientSecret = async ()=> {
            //axios is a way of making requests like Post 
            const response = await axios({
                method:'post',
                //stripe expects the total in a currencies subunits so you have to convert everything to cents because we do dollars
                url:`/payments/create?total=${getBasketTotal(basket)*100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])

    console.log('THE SECRET IS >>>',clientSecret)
    const handleSubmit = async (e)=>{
        //stripe 
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //paymentIntent = payment confirmation 

            db.collection('user').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type:"EMPTY_BASKET"
            })
            history.replace('/orders')
        }) 


        // const payload = await stripe();
    }

    const handleChange = event=>{
        //listen for changes in the card element and 
        //display all the errors as any errors happens as they type in the card details.2
       //empty says true then go ahead and disable the button 
       
        setDisabled(event.empty);
        setError(event.error ? event.error.message:"")
    }
    return (
        <div className= "payment">
            <h2 className="payment__heading">Checkout (<a>{basket.length} Items</a>)</h2>
            <div className="paymet__container">
                {/**payment section for delivery */}

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user && user.email}</p>
                        <p>98776 charolet str</p>
                        <p>Fairfax, Virginia, USA</p>
                    </div>
                </div>
                    
                {/**payment section for review items*/}
                
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items</h3>
                    </div>
                    <div className="payment__reviewItems">
                        {basket.map(item=><CartItem id ={item.id} title={item.title} price ={item.price} image={item.image} rating={item.rating}/>)}
                    </div>
                </div>
                
                
                {/**payment section for Payment Method*/}

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__method">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                     renderText = {(value)=> (
                                        <>
                                                Order Total:  <strong>{value}</strong>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType = {"text"}
                                    thousandSeparator ={true}
                                    prefix = {"$"}
                                />
                                <br></br>
                                <button disabled={processing || disabled || succeeded }>
                                    <span>{processing?<p>Processing</p>: "Buy Now" }</span>
                                </button>
                            </div>
                            {/**Error for some card info */}
                            {error &&<div>{error}</div>}
                        </form>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Payment


