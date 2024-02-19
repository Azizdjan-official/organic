import React from 'react'
import { HomeOfferCartInfo } from '../../../data/data'
import HomeofferCards from './HomeofferCards';
import { Button } from './../../../button/Button';
import { useNavigate } from 'react-router-dom';
import ArrowRightIcon from './../../../icons/ArrowRightIcon';

const HomeOffer = () => {

  const navigate = useNavigate()
  const linkto = () => {
    navigate("/shop")
  }
  return (
    <div className='bg-[#274C5B] py-16'>
      <div className='w-[80%] mx-auto'>
        <div>
            <h1 className='text-[#7EB693] font-[400] '>Offer</h1>
        </div>
        <div className='flex justify-between '>
            <p className='font-[800] text-3xl text-white'>We Offer Organic For You</p>
            <Button onClick={linkto} className={`bg-[#EFD372] rounded-[16px] w-[28%] px-4 py-3 my-4 flex justify-center text-[#274C5B] gap-3 items-center`}>View All Product <ArrowRightIcon/> </Button>

        </div>
        <div className='flex justify-between '>
            {HomeOfferCartInfo.map((item)=> <HomeofferCards key={item.id} fruit={item.type }image={item.image }title={item.title }oldprice={item.oldprice }newprice={item.newprice}/>)}
        </div>
      </div>
    </div>
  )
}

export default HomeOffer
