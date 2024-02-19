import React from 'react'
import HeaderLogoIcon from './../../icons/HeaderLogoIcon';
import InstagramIcon from './../../icons/InstagramIcon';
import FacebookIcon from './../../icons/FacebookIcon';
import TwittterIcon from './../../icons/TwittterIcon';
import PinterestIcon from './../../icons/PinterestIcon';
import { Button } from './../../button/Button';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate()
  const linkto = () => {
    navigate("/contact")
  }
  return (
    <footer>
        <div className="footerBG flex items-center px-12 justify-between">
          <div>
            <h1 className='text-white font-[800] text-5xl '>Subscribe to <br /> our Newsletter</h1>
          </div>
          <div className='flex items-center gap-1'>
            <input type="text" className='px-4 h-14 rounded-[16px]'  placeholder='Your Email Address' />
            <Button  className={`bg-primary h-14 rounded-[16px] w-[20%] px-12 py-3 my-4 flex justify-center text-white gap-3 items-center`}>Subscribe</Button>

          </div>
        </div>
        <div>
          <div className='w-[80%] mx-auto my-8  flex'>
          <div onClick={linkto} className='flex flex-col items-end  justify-between p-6 w-[30%] cursor-pointer'>
            <h1 className='text-primary text-2xl font-[700]'>Contact Us</h1>
            <div className='flex flex-col items-end gap-3'>
              <p className='text-primary text-lg font-[700]'>Email</p>
              <h6 className='text-[#525C60] text-lg font-[400]'>needhelp@Organia.com</h6>
              <p className='text-primary text-lg font-[700]'>Phone</p>
              <h6 className='text-[#525C60] text-lg font-[400]'>666 888 888</h6>
              <p className='text-primary text-lg font-[700]'>Address</p>
              <h6 className='text-[#525C60] text-lg font-[400]'>88 road, borklyn street, USA</h6>
            </div>
          </div>
          <div className='flex flex-col items-center  justify-between p-6 w-[40%]'>
              <HeaderLogoIcon/>
              <h6 className='text-[#525C60] text-center text-lg font-[400]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing </h6>
              <div className='flex gap-3'>
                <InstagramIcon/>
                <FacebookIcon/>
                <TwittterIcon/>
                <PinterestIcon/>
              </div>
          </div>
          <div className='flex flex-col items-start  justify-between p-6 w-[30%]'>
            <h1 className='text-primary text-2xl font-[700]'>Utility Pages</h1>
            <div className='flex flex-col items-start gap-3'>
              <a className='text-[#525C60] text-lg font-[400]' href="/">Style Guide</a>
              <a className='text-[#525C60] text-lg font-[400]' href="*">404 Not Found</a>
              <a className='text-[#525C60] text-lg font-[400]' href="/protectedpage">Password Protected</a>
              <a className='text-[#525C60] text-lg font-[400]' href="/licences">Licences</a>
              <a className='text-[#525C60] text-lg font-[400]' href="/changelog">Changelog</a>
            </div>
          </div>
          </div>
        </div>
        <div className='border py-3 text-center'>
           <span className=' font-[400] text-lg text-[#525C60]' >Copyright © <strong >Organick</strong> | Designed by <strong>VictorFlow</strong> Templates - Powered by <strong>Webflow</strong></span>
        </div>
    </footer>
  )
}

export default Footer
