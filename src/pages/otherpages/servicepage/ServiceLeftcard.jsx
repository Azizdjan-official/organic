import React from 'react'

const ServiceLeftcard = ({icon,title,text}) => {
  return (
    <div className='flex flex-col items-end '>
      <div>
        {icon}
      </div>
      <div>
        <h1 className='text-primary font-[500] text-xl text-right'>{title}</h1>
      </div>
      <div>
        <p className='text-[#525C60] font-[400] text-lg text-right'>{text}</p>
      </div>
    </div>
  )
}

export default ServiceLeftcard
