import React from 'react'

const Infocards = ({text,title, }) => {
  return (
    <div className='flex flex-col text-white firstcard p-6 justify-center'>
        <h1 className='font-[400] text-2xl '>{text}</h1>
        <p className='font-[800] text-3xl w-[40%]'>{title}</p>
    </div>
  )
}

export default Infocards
