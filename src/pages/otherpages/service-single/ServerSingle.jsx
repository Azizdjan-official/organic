import React from 'react'
import serviceImg from '../../../images/servicesingleSection.jpg'
import organicImg from '../../../images/organicStoreimage.jpg'
import specialImage from '../../../images/specialProduce.jpg'
import NumberFirst from './../../../icons/NumberFirst';
import NumberTwo from './../../../icons/NumberTwo';

const ServerSingle = () => {
  return (
    <div>
      <div className="servicesingle"></div>
      <section>
        <div className='w-[80%] mx-auto my-20'><img src={serviceImg} className='w-full h-full' /></div>
        <div className="organicStore w-[60%] mx-auto flex flex-col gap-4 my-8">
            <div className='flex flex-col gap-4'>
                <h1 className='text-[#274C5B] font-[800] text-3xl'>Organic Store Services</h1>
                <p className='text-[#525C60] font-[400] text-lg'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. <br />Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
            </div>
            <div className='flex  gap-4'>
                <div className='w-[40%] rounded-[20px]'>
                    <img src={organicImg} className='rounded-[20px]' />
                </div>
                <div className='w-[60%] flex flex-col items-center justify-center bg-[#F9F8F8] rounded-[20px]'>
                    <p className='text-[#274C5B] font-[500] text-lg'>Why Organic</p>
                    <p className='text-[#525C60] w-[80%]  font-[400] text-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                </div>
            </div>
            <div className='flex  gap-4'>
                <div className='w-[60%] flex flex-col items-center justify-center bg-[#F9F8F8] rounded-[20px]'>
                    <p className='text-[#274C5B] font-[500] text-lg'>Speciality Produce</p>
                    <p className='text-[#525C60] w-[80%]  font-[400] text-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                </div>
                <div className='w-[40%] rounded-[20px]'>
                    <img src={specialImage} className='rounded-[20px]' />
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-[#274C5B] font-[800] text-3xl'>We farm your land</h1>
                <p className='text-[#525C60] font-[400] text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
            <div className='flex gap-4'>
                <span className='flex bg-[#F9F8F8] rounded-[100px] p-3 items-center gap-3'>
                    <NumberFirst/>
                    <p className='text-[#274C5B] font-[600] text-2xl'>Best quality support</p>
                </span>
                <span className='flex bg-[#F9F8F8] rounded-[100px] p-3 items-center gap-3'>
                    <NumberTwo/>
                    <p className='text-[#274C5B] font-[600] text-2xl'>Money back guarantee</p>
                </span>
            </div>
        </div>
      </section>
    </div>
  )
}

export default ServerSingle
