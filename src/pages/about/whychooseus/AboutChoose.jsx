import React from 'react'
import GreenCircleIcon from './../../../icons/GreenCircleIcon';
import chooseImage from '../../../images/chooseImage.jpg'
import ChooseCards from './ChooseCards';
import ChooseCart1 from './../../../icons/ChooseCart1';
import ChooseCart2 from './../../../icons/ChooseCart2';
import ChooseCart3 from './../../../icons/ChooseCart3';
import ChooseCart4 from './../../../icons/ChooseCart4';

const AboutChoose = () => {
  return (
    <div className='bg-[#F9F8F8]'>
       <div className='w-[80%] mx-auto flex py-12'>
         <div className='w-[50%]'>
            <p className='text-[#7EB693] font-[400] text-2xl'>Why Choose us?</p>
            <p className='text-[#274C5B] font-[800] text-5xl'>We do not buy from the open market & traders.</p>
            <p  className='text-[#525C60] font-[400] text-lg'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
            <span className='flex items-center gap-3 w-[339px] h-[81px] rounded-[49px] bg-[#ECECEC] px-4'> <GreenCircleIcon/> <p className='text-[#274C5B] font-[500] text-xl'>100% Natural Product</p>  </span>
            <p className='text-[#525C60] ml-10 my-4 font-[400] text-lg'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
            <span className='flex items-center gap-3 w-[339px] h-[81px] rounded-[49px] bg-[#ECECEC] px-4'> <GreenCircleIcon/> <p className='text-[#274C5B] font-[500] text-xl'> Increases resistance</p>  </span>
            <p className='text-[#525C60] ml-10 my-4 font-[400] text-lg'>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
         </div>
         <div className='w-[50%]'>
            <img src={chooseImage} className='rounded-[30px]'  />
         </div>
       </div>
       <div className='w-[70%] mx-auto flex gap-3'>
            <ChooseCards icon={<ChooseCart1/>} text="Return Policy"/>
            <ChooseCards icon={<ChooseCart2/>} text="100% Fresh"/>
            <ChooseCards icon={<ChooseCart3/>} text="Support 24/7"/>
            <ChooseCards icon={<ChooseCart4/>} text="Secured Payment"/>
       </div>
    </div>
  )
}

export default AboutChoose
