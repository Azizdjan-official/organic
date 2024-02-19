import React from 'react'

const ChooseCards = ({icon,text}) => {
  return (
    <div className='flex flex-col items-center justify-center text-center w-[25%] h-[35vh] bg-white rounded-[30px] '>
      <div>{icon}</div>
      <p className='text-[#274C5B] font-[800] text-xl'>{text}</p>
      <p className='text-[#525C60] font-[400] text-lg'>Simply dummy text of the printintypesetting industry.</p>

    </div>
  )
}

export default ChooseCards
