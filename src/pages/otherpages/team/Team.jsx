import React from 'react'
import { TeamInfo } from '../../../data/data'
import Teamcart from './../../about/team/Teamcart';

const Team = () => {
  return (
    <div>
      <div className="teamBG"></div>
      <div className='flex w-[80%] flex-wrap mx-auto gap-3 my-8 justify-center'>
        {TeamInfo.map((item)=> <Teamcart image={item.image} names={item.name} job={item.job}/>)}
      </div>
    </div>
  )
}

export default Team
