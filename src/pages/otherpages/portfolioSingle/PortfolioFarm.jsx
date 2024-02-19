import React from 'react'
import farmimage from '../../../images/farmPhoto.png'

const PortfolioFarm = () => {
  return (
    <div className='flex flex-col gap-4 w-[80%] mx-auto my-8'>
      <div>
      <h1 className='text-[#274C5B] font-[800] text-2xl'>About The Farm:</h1>
      <p className='text-[#525C60] font-[400] text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 

Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p> 
      </div>
      <img src={farmimage} className='rounded-[30px] ' />
      <div>
        <h1 className='text-[#274C5B] font-[800] text-2xl'>How To Farm:</h1>
        <p  className='text-[#525C60] font-[400] text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p> 
      </div>
      <div>
        <h1 className='text-[#274C5B] font-[800] text-2xl'>Conclusion:</h1>
        <p  className='text-[#525C60] font-[400] text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p> 
      </div>
    </div>
  )
}

export default PortfolioFarm
