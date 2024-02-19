import React from 'react'
import ArrowRightIcon from './../../../icons/ArrowRightIcon';
import { Button } from './../../../button/Button';
import protectedpagecart from '../../../images/protectedpagecart.jpg'

const ProtectedPage = () => {
  return (
    <div>
      <div className="protectedpage"></div>
      <div className='w-[40%] mx-auto p-4 flex items-center gap-4 rounded-[30px] shadow-lg my-8'>
        <div className='w-[40%]'>
            <img src={protectedpagecart} className='rounded-[16px]' />
        </div>
        <div className='flex flex-col gap-4  h-full w-[60%]'>
            <h1 className='text-primary font-[600] text-lg'>Password</h1>
            <input className='border border-secondary rounded-[16px] py-3 px-4 w-full' type="text" placeholder='Enter Your Password' />
            <Button className={`bg-primary text-white rounded-[16px] w-[50%] px-4 py-3 my-4 flex gap-3 items-center`}>Send Now <ArrowRightIcon/> </Button>

        </div>
      </div>
    </div>
  )
}

export default ProtectedPage
