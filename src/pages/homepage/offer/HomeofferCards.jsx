import React from 'react'
import FiveStarIcon from './../../../icons/FiveStarIcon';

const HomeofferCards = ({fruit,image,title,oldprice,newprice,}) => {
  return (
    <div className='shadow-lg bg-white  p-4 rounded-[30px] w-[24%]  flex flex-col justify-between gap-3'>
        <button className='bg-[#274C5B] text-white rounded-[8px] w-[96px] mt-6 ml-6'>{fruit}</button>
        <div>
            <img src={image} className='object-scale-down'/>
        </div>
        <h1>{title}</h1>
        <hr className='w-[100%] ' />
        <div className='flex justify-between '>
            <span className='flex items-center gap-2' >
            <p className='text-[#B8B8B8] font-[700] text-sm line-through'>{oldprice}</p>
            <h1><strong className='text-[#274C5B] font-[700] text-lg'>{newprice}</strong></h1>
            </span>
            <FiveStarIcon/>
        </div>
    </div>
  )
}

export default HomeofferCards
