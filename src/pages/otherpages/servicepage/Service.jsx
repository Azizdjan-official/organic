import React from 'react'
import ServiceLeftcard from './ServiceLeftcard';
import MilkBottle from './../../../icons/MilkBottle';
import OnlineStore from './../../../icons/OnlineStore';
import DeliveryTruck from './../../../icons/DeliveryTruck';
import serviceiimage from '../../../images/serviceSection.png'
import ServiceRightcard from './ServiceRightcard';
import Leaf from './../../../icons/Leaf';
import Organic from './../../../icons/ORganic';
import VegetablesIcon from './../../../icons/VegetablesIcon';
import ServiceOrganic from './ServiceOrganic';
import ArrowRightIcon from './../../../icons/ArrowRightIcon';
import { Button } from './../../../button/Button';
import { useNavigate } from 'react-router-dom';

const Service = () => {

  const navigate = useNavigate()
  const linkto = () => {
    navigate("/service-single")
  }
  return (
    <div>
      <div className='serviceheroBG'></div>
      <h1 className='text-center text-secondary font-[400] text-3xl'>What we Grow</h1>
      <h1 className='text-center text-primary font-[800] text-5xl'>Better Agriculture for  Better Future</h1>
      <div className='flex w-[80%] mx-auto'>
        <div className='flex flex-col gap-4 w-[30%] py-8'>
            <ServiceLeftcard icon={<MilkBottle/>} title="Dairy Products" text="Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis"/>
            <ServiceLeftcard icon={<OnlineStore/>} title="Store Services" text="Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis"/>
            <ServiceLeftcard icon={<DeliveryTruck/>} title="Delivery Services" text="Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis"/>
        </div>
        <div className='w-[40%]'>
            <img src={serviceiimage} className='w-full h-full' />
        </div>
        <div className='flex flex-col gap-4 w-[30%] py-8'>
            <ServiceRightcard icon={<Leaf/>} title="Dairy Products" text="Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis"/>
            <ServiceRightcard icon={<Organic/>} title="Store Services" text="Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis"/>
            <ServiceRightcard icon={<VegetablesIcon/>} title="Delivery Services" text="Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis"/>
        </div>
      </div>
      <div className='w-[100%] mx-auto  flex items-center justify-center'>
      <Button onClick={linkto}  className={`bg-primary rounded-[16px] w-[15%] px-4 py-3 my-4 flex justify-center text-white gap-3 items-center`}>Explore Now <ArrowRightIcon/> </Button>

      </div>
      <ServiceOrganic/>
      
    </div>
  )
}

export default Service
