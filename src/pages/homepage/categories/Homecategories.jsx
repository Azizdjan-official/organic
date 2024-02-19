import React from 'react'
import Homeproductcards from './Homeproductcards';
import { HomeProductCartInfo } from './../../../data/data';
import { Button } from './../../../button/Button';
import ArrowRightIcon from './../../../icons/ArrowRightIcon';
import { useNavigate } from 'react-router-dom';

const Homecategories = () => {

  const navigate = useNavigate()
  const linkto = () => {
    navigate("/shop")
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-[#7EB693] font-[400] text-3xl text-center '>Categories </h1>
      <h2 className='text-[#274C5B] font-[800] text-5xl text-center  '>Our Products</h2>
      <div className='flex flex-wrap w-[80%] mx-auto gap-3'>
        {HomeProductCartInfo.slice(0,8).map((item)=> <Homeproductcards key={item.id} fruit={item.type }image={item.image }title={item.title }oldprice={item.oldprice }newprice={item.newprice}/>)}
      </div>
      <Button onClick={linkto} className={`bg-[#274C5B] rounded-[16px] w-[28%] px-4 py-3 my-4 flex justify-center text-white gap-3 items-center`}>Load more <ArrowRightIcon/> </Button>

    </div>
  )
}

export default Homecategories
