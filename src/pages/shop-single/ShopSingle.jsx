import React from 'react'
import shopSingleImage from '../../images/shop-single.jpg'
import FiveStarIcon from './../../icons/FiveStarIcon';
import { HomeProductCartInfo } from './../../data/data';
import Homeproductcards from './../homepage/categories/Homeproductcards';

const ShopSingle = () => {
  return (
    <div>
      <div className='shopSingleBG'></div>
      <div className='w-[80%] mx-auto flex'>
        <div className='relative border rounded-[36px] '>
        <button className='bg-primary text-white absolute top-4 left-5 rounded-[8px] w-[96px] py-2 '>Millets</button>
            <img src={shopSingleImage} className='rounded-[36px]'  />
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-primary font-[600] text-4xl'>Health Pistachios</h1>
            <FiveStarIcon/>
            <span className='flex items-center gap-2' >
            <p className='text-[#B8B8B8] font-[700] text-sm line-through'>$20.00</p>
            <h1><strong className='text-primary font-[700] text-lg'>$13.00</strong></h1>
            </span>
            <p className='text-[#525C60] font-[400] text-lg '>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <div className='flex items-center'>
                <p className='text-primary font-[700] text-xl'>Quantity :</p>
                <button>1</button>
                <button>Add To Cart</button>
            </div>
        </div>
      </div>
      <div className='w-[70%] mx-auto'>
        <div className='flex gap-4'>
            <button>Product Description</button>
            <button>Additional Info</button>
        </div>
        <p>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
        <h1 className='text-primary font-[800] text-center mt-16 text-4xl'>Related Products</h1>
      </div>
      <div className='flex flex-wrap w-[80%] mx-auto gap-3 my-8'>
        {HomeProductCartInfo.slice(0,4).map((item)=> <Homeproductcards fruit={item.type }image={item.image }title={item.title }oldprice={item.oldprice }newprice={item.newprice}/>)}
      </div>
    </div>
  )
}

export default ShopSingle
