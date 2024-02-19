import React from 'react'
import Homeproductcards from './../homepage/categories/Homeproductcards';
import { HomeProductCartInfo } from '../../data/data';

const Shop = () => {
  return (
    <div className='flex flex-col'>
      <div className="shopheroBG"></div>
      <div className='flex flex-wrap w-[80%] mx-auto my-8 gap-3'>
      {HomeProductCartInfo.map((item)=> <Homeproductcards fruit={item.type }image={item.image }title={item.title }oldprice={item.oldprice }newprice={item.newprice}/>)}
      </div>
    </div>
  )
}

export default Shop
