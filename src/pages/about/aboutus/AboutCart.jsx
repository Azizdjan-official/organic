import React from 'react'

const AboutCart = ({image, title }) => {
  return (
    <div className='flex flex-col gap-3 justify-between bg-transparent w-[25%] h-[367px] border'>
        <div className='w-full h-[280px] rounded-[30px]  '>
            <img src={image} className='w-full h-full' />
        </div>
      <p className='text-[#FFFFFF] text-center font-[500] text-xl'>{title}</p>
    </div>
  )
}

export default AboutCart
