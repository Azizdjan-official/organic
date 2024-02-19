import React from 'react'

const PortfolioCarts = ({image,text,title,onClick,}) => {
  return (
    <div onClick={onClick} className='flex flex-col gap-3 w-[30%]'>
        <img src={image} className='rounded-[30px]' />
        <h1 className='text-primary font-[800] text-xl'>{title}</h1>
        <p className='text-secondary font-[400] text-lg'>{text}</p>
    </div>
  )
}

export default PortfolioCarts
