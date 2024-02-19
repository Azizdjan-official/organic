import React from 'react'

const AboutHomeparts = ({icon,text}) => {
  return (
    <div className='flex'>
      <div>
        {icon}
      </div>
      <div className='flex flex-col justify-center py-2'>
        <h1 className='text-[#274C5B] font-[800] text-xl'>{text}</h1>
        <p className='text-[#525C60] font-[400] text-lg'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
      </div>
    </div>
  )
}

export default AboutHomeparts
