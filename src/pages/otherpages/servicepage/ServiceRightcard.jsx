import React from 'react'

const ServiceRightcard = ({icon,title,text}) => {
  return (
    <div>
      <div className='flex flex-col justify-end'>
      <div>
        {icon}
      </div>
      <div>
        <h1 className='text-[#274C5B] font-[500] text-2xl'>{title}</h1>
      </div>
      <div>
        <p className='text-[#525C60] font-[400] text-lg'>{text}</p>
      </div>
    </div>
    </div>
  )
}

export default ServiceRightcard
