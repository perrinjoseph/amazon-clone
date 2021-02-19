import React from 'react'
import './Product.css'

function Product({title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
               {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
            </div>
            </div>

            
            <img src="https://m.media-amazon.com/images/G/01/kindle/dp/2018/100495/l_CC._CB480515311_.png" alt="amazon echo"/>
        <button>Add to Cart</button>
        </div>
    )
}

export default Product
