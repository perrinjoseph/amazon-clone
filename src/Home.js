import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className = "home" >
            <div className="home__container">
                <img className="home__image" src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920" alt="amazon Banner"/>
                <div className="home__row">
                    <Product id="12321341"title ="Amazon Echo (3rd) Generation Smart Speaker  with Blue Light" image="https://m.media-amazon.com/images/G/01/kindle/dp/2018/100495/l_CC._CB480515311_.png" price ={19.99} rating ={5} />
                    <Product id="14444444"title ="BenQ EX2780Q 27 Inch 1440P 144Hz IPS Gaming Monitor | FreeSync Premium | HDRi | Speakers" image="https://images10.newegg.com/BizIntell/item/24/025/24-025-552/lxbanner_041217.png" price ={449.99} rating ={5} />
                    <Product id="16449754"title ="10.2 Inch iPad with Wi-Fi, 128GB Space Gray" image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-2020-hero-space-wifi-select?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1598915064000" price ={75.80} rating ={4} />

                </div>
                <div className="home__row">
                    <Product id="16678944"title ="Canisters with Airtight Bamboo Lid, Glass Storage Jars" image="https://i.pinimg.com/736x/26/f9/16/26f91680ec3371e8561a00df2f1a541c.jpg" price ={449.99} rating ={5} />
                    <Product id="16r65364"title ="Ivinta Modern Small Dining Table Round Glass Coffee Table" image="https://images-na.ssl-images-amazon.com/images/I/71%2BEis%2Bd5oL._AC_SL1500_.jpg" price ={20.99} rating ={5} />
                    <Product id="16676844"title ="Neon Green Nike Running Shoes" image="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png" price ={40.50} rating ={5} />
                    <Product id="16443222"title ="Womans Brown Leather Bag PU Leather" image="https://lh3.googleusercontent.com/proxy/JSbFn80EzPaOYjhkQwtCBQ6IysA1ITseCEeu0T5YhtskVDTZl3711inrN6TtT2x2LRTHtszczAFwAXAJT5wasoClRwCDxUumYGvG1wFzEEp9u9U7CIE" price ={75.80} rating ={4} />
                </div>
                <div className="home__row">
                    <Product id="16499982"title ="Ultra Wide 45 Inch Monitor By Samsung. Stainless Steel Body" image="https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/h/g/hg90_edit_4.png" price ={22.45} rating ={3} />
                </div>
            </div>
        </div>
    )
}

export default Home
