import React from 'react'
import OrganicCards from './OrganicCards';

const HomeOrganics = () => {
  return (
    <div className='bg-[#F1F8F4] h-[100vh] flex justify-between items-center'>
      <OrganicCards title="Organic Juice" classname={"organicfirst"}/>
      <OrganicCards title="Organic Food" classname={"organicsecond"}/>
      <OrganicCards title="Nuts Cookis" classname={"organicthird"}/>
    </div>
  )
}

export default HomeOrganics
