import React from 'react'
import MessageIcon from './../../../icons/MessageIcon';
import TelephoneIcon from './../../../icons/TelephoneIcon';
import InstagramIcon from '../../../icons/InstagramIcon';
import FacebookIcon from '../../../icons/FacebookIcon';
import TwittterIcon from '../../../icons/TwittterIcon';
import PinterestIcon from '../../../icons/PinterestIcon';
import contactImage from '../../../images/contactCart.jpg'
import LocationIcon from './../../../icons/LocationIcon';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <div>
      <div className="contactBG"></div>
      <div className='w-[80%] mx-auto flex'>
         <div className='w-[50%]'>
            <img src={contactImage} className='rounded-[30px]' />
         </div>
         <div className='w-[50%] px-12 py-8'>
            <h1 className='text-[#274C5B] font-[800] text-3xl'>We'd love to talk about how we can work together.</h1>
            <p className='text-[#525C60] font-[400] text-lg'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <div className='flex gap-3 p-4 rounded-[16px] shadow-lg w-[60%]'>
                <MessageIcon/>
                <span className='flex flex-col'><h1 className='text-[#274C5B] font-[800] text-xl'>Message</h1>  <p className='text-[#525C60] font-[400] text-lg'>support@organic.com</p></span>
            </div>
            <div className='flex gap-3 p-4 rounded-[16px] shadow-lg w-[60%] my-4'>
                <TelephoneIcon/>
                <span className='flex flex-col'><h1 className='text-[#274C5B] font-[800] text-xl'>Contact Us</h1>  <p className='text-[#525C60] font-[400] text-lg'>+01 123 456 789</p></span>
            </div>
            <div className='flex gap-4'>
                <InstagramIcon/>
                <FacebookIcon/>
                <TwittterIcon/>
                <PinterestIcon/>
            </div>
         </div>
      </div>
      <div className='farmImage w-[80%] mx-auto my-6 rounded-[30px] flex  items-center justify-end p-12'>
        <div className='bg-white w-[40%] flex flex-col gap-3 rounded-[30px] p-4'>
            <h1 className='text-[#7EB693] font-[400] text-3xl'>Location</h1>
            <p className='text-[#274C5B] font-[800] text-5xl'>Location</p>
            <p className='text-[#525C60] font-[400] text-lg'>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using.</p>
        <span className='flex gap-4'>
            <LocationIcon/>
            <p><strong>New York, USA: <br /> </strong>299 Park Avenue New York, <br /> New York 10171</p>
        </span>
        <span className='flex gap-4'>
            <LocationIcon/>
            <p><strong>London, UK:  <br /> </strong>30 Stamford Street, <br /> London SE1 9LQ </p>
        </span>
        </div>
      </div>
      <ContactForm/>
    </div>
  )
}

export default ContactUs
