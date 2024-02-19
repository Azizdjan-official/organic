import React from 'react'
import FiveStarIcon from '../../../icons/FiveStarIcon'
import HomeCustomerCart from './HomeCustomerCart';
import { HomeCustomerCartInfo } from '../../../data/data';
import testopa from '../../../images/testOpa.png'

const HomeCustomer = () => {
  return (
    <div className='customerBG flex items-center justify-center'>
        <div className='w-[60%] mx-auto text-center'>
            <div className='flex flex-col items-center justify-center gap-3 '>
                <h6 className='text-[#7EB693] font-[400] text-2xl'>Testimonial</h6>
                <h5 className='text-[#274C5B] text-4xl font-[800]'>What Our Customer Saying?</h5>
                <img src={testopa} className='rounded-full' />
                <FiveStarIcon/>
                <p className='text-[#525C60] font-[400] text-lg ' >Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                <h4 className='text-[#274C5B] font-[600] text-xl'>Sara Taylor</h4>
                <h3 className='text-[#525C60] font-[400] text-lg '>Consumer</h3>
            </div>
            <hr />
            <div className='flex my-4 justify-between'>
                {HomeCustomerCartInfo.map((item)=> <HomeCustomerCart key={item.id} info={item.title} names={item.info}/>)}
                
            </div>
        </div>
    </div>
  )
}

export default HomeCustomer
