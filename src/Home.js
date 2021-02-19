import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className = "home" >
            <div className="home__container">
                <img className="home__image" src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920" alt="amazon Banner"/>
                <div className="home__row">
                    <Product title ="Amazon Echo (3rd) Generation Smart Speaker" image="https://m.media-amazon.com/images/G/01/kindle/dp/2018/100495/l_CC._CB480515311_.png" price ="19.99" rating ={5} />
                    <Product/>
                </div>
                <div className="home__row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className="home__row">
                    <Product/>
                </div>
            </div>
        </div>
    )
}

export default Home
