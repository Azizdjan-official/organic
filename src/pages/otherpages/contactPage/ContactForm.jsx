import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form >
        <div className='flex w-[80%] mx-auto justify-between'>
            <label className='w-[45%] flex flex-col gap-3'>
                <h1 className='text-[#274C5B] font-[600] text-lg '>Full Name*</h1>
                <input className='border border-[#7EB693] rounded-[16px] py-4 px-3' type="text" placeholder='Your Email Address'/>
            </label>
            <label className='w-[45%] flex flex-col gap-3'>
                <h1 className='text-[#274C5B] font-[600] text-lg '>Your Email*</h1>
                <input className='border border-[#7EB693] rounded-[16px] py-4 px-3' type="text" placeholder='example@yourmail.com'/>
            </label>
        </div>
        <div className='flex w-[80%] mx-auto justify-between my-4'>
            <label className='w-[45%] flex flex-col gap-3'>
                <h1 className='text-[#274C5B] font-[600] text-lg '>Company*</h1>
                <input className='border border-[#7EB693] rounded-[16px] py-4 px-3' type="text" placeholder='Your Email Address'/>
            </label>
            <label className='w-[45%] flex flex-col gap-3'>
                <h1 className='text-[#274C5B] font-[600] text-lg '>Subject*</h1>
                <input className='border border-[#7EB693] rounded-[16px] py-4 px-3' type="text" placeholder='example@yourmail.com'/>
            </label>
        </div>
        <div className='flex w-[80%] mx-auto justify-between my-4'>
            <label className='w-[100%] flex flex-col gap-3'>
                <h1 className='text-[#274C5B] font-[600] text-lg '>Message*</h1>
                <textarea className='w-full border border-[#7EB693] rounded-[16px]' cols="20" rows="10"></textarea>
            </label> 
        </div>
        <div className='flex w-[80%] mx-auto justify-between my-4'>
            <button>Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
