import React from 'react'
import PortfolioFarm from './PortfolioFarm'

const PortfolioSingle = () => {
  return (
    <div>
      <div className='portfolioSingle'></div>
      <div className='flex p-10 w-[80%] mx-auto shadow-lg rounded-[30px] bg-white -mt-24'>
        <div className='w-[60%] flex flex-col gap-4 '>
          <h1 className='text-[#274C5B] font-[800] text-5xl'>Black Raspberry</h1>
          <p className='text-[#525C60] font-[400] text-lg w-[80%]'>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
        </div>
        <div className='w-[40%] flex flex-col justify-center'>
          <span className='flex gap-3 justify-between'><h1 className='text-[#274C5B] font-[500] text-xl'>Date: </h1>  <p className='text-[#525C60] font-[400] text-lg'>December 4, 2022</p></span>
          <span className='flex gap-3 justify-between'><h1 className='text-[#274C5B] font-[500] text-xl'>Client:</h1> <p className='text-[#525C60] font-[400] text-lg'>Kevin Martin</p></span>
          <span className='flex gap-3 justify-between'><h1 className='text-[#274C5B] font-[500] text-xl'>Category  : </h1> <p className='text-[#525C60] font-[400] text-lg'>Agriculture , Eco</p></span>
          <span className='flex gap-3 justify-between'><h1 className='text-[#274C5B] font-[500] text-xl'>Service     :</h1> <p className='text-[#525C60] font-[400] text-lg'>Organic Products</p></span>
        </div>
      </div>
      <PortfolioFarm/>
    </div>
  )
}

export default PortfolioSingle
