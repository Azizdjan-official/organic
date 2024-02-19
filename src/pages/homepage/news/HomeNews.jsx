import React from 'react'
import NewsCard from './NewsCard';
import { useNavigate } from 'react-router-dom';
import { Button } from './../../../button/Button';
import ArrowRightIcon from './../../../icons/ArrowRightIcon';

const HomeNews = () => {
  const navigate = useNavigate()
  const linkto = () => {
    navigate("/blog")
  }
  return (
    <div className='my-12 '>
      <div className='w-[80%] mx-auto'>
            <div>
                <h1 className='text-[#7EB693] font-[400] '>News</h1>
            </div>
            <div className='flex  justify-between '>
                <p className='font-[800] text-[#274C5B] text-3xl'>Discover weekly content about <br /> organic food, & more</p>
                <Button onClick={linkto} className={`border border-[#274C5B] text-[#274C5B] font-[600]  rounded-[16px] w-[20%] px-4 py-3 my-4 flex justify-center  gap-3 items-center`}>More News<ArrowRightIcon/> </Button>

            </div>
            <div className='flex gap-3'>
              <NewsCard classname="greencard"/>
              <NewsCard classname="redcard"/>
            </div>
      </div>
    </div>
  )
}

export default HomeNews
