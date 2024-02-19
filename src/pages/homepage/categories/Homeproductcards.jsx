import React from 'react'
import FiveStarIcon from './../../../icons/FiveStarIcon';
import { Button } from './../../../button/Button';
import { useNavigate } from 'react-router-dom';

const Homeproductcards = ({fruit,image,title,oldprice,newprice,}) => {
  const navigate = useNavigate()
  const linkto = () => {
    navigate("/shop-single")
  }
  return (
    <div className='shadow-lg  p-4 rounded-[30px] w-[24%]  flex flex-col justify-between gap-3'>
        <Button onClick={linkto} className={`bg-primary text-white rounded-[8px] w-[96px] mt-6 ml-6 px-4 py-1  flex gap-3 items-center`}>{fruit}</Button>

        <img src={image} className='object-scale-down	' />
        <h1>{title}</h1>
        <hr className='w-[100%] ' />
        <div className='flex justify-between '>
            <span className='flex items-center gap-2' >
            <p className='text-[#B8B8B8] font-[700] text-sm line-through'>{oldprice}</p>
            <h1><strong className='text-primary font-[700] text-lg'>{newprice}</strong></h1>
            </span>
            <FiveStarIcon/>
        </div>
    </div>
  )
}

export default Homeproductcards
