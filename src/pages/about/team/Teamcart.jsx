import React from 'react'
import TeamFacebookIcon from './../../../icons/TeamFacebookIcon';
import Teamtwittericon from './../../../icons/Teamtwittericon';

const Teamcart = ({image,names,job, onClick}) => {
  return (
    <div onClick={onClick} className='w-[32%] shadow-xl border rounded-[30px]'>
      <img src={image} className='h-[400px] w-full' />
      <div className='p-4'>
        <h1 className='text-[#274C5B] font-[800] text-2xl'>{names}</h1>
        <div className='flex justify-between'>
            <p className='text-[#7EB693] font-[400] text-xl'>{job}</p>
            <span className='flex gap-3'>
                <TeamFacebookIcon/>
                <Teamtwittericon/>
            </span>
        </div>
      </div>
    </div>
  )
}

export default Teamcart
