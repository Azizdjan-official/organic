import React from 'react'
import AboutCart from './AboutCart'
import about1 from '../../../images/AboutCart1.png'
import about2 from '../../../images/AboutCart2.png'
import about3 from '../../../images/AboutCart3.jpg'
import about4 from '../../../images/AboutCart4.jpg'

const Aboutus = () => {
  return (
    <div className='bg-primary '>
      <h1 className='text-secondary font-[400] text-2xl'>About Us</h1>
      <p className='text-primary font-[800] text-5xl'>We do Creative Things for Success</p>

      <div className='flex w-[80%] mx-auto gap-4'>
        <AboutCart image={about1} title="Spicy"/>
        <AboutCart image={about2} title="Nuts & Feesd"/>
        <AboutCart image={about3} title="Fruits"/>
        <AboutCart image={about4} title="Vegetable"/>
      </div>
    </div>
  )
}

export default Aboutus
