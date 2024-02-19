import React from 'react'

const HomeCustomerCart = ({info,names}) => {
  return (
    <div className='rounded-full w-[211px] h-[211px] p-2 bg-white border-2 border-[#7EB693]'>
      <div className='bg-[#F1F1F1] rounded-full w-full h-full flex flex-col items-center justify-center'>
        <h1 className='text-[#274C5B] font-[800] text-3xl'>{info}</h1>
        <p className='text-[#274C5B] font-[600] text-lg '>{names}</p>
      </div>
    </div>
  )
}

export default HomeCustomerCart
