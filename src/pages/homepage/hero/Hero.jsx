import { Navigate, useNavigate } from 'react-router-dom';
import heroimg from '../../../images/heroImage.png'
import { Button } from './../../../button/Button';
import ArrowRightIcon from './../../../icons/ArrowRightIcon';

const Hero = () => {

  const navigate = useNavigate()
  const linkto = () => {
    navigate("/")
  }
  return (
    <div className='bg-[#E3F1E9] homeBG'>
    <div className='flex w-[80%] mx-auto items-center h-[80vh]'>
        <div className='flex flex-col  justify-center w-[50%]'>
            <p className='text-secondary font-[400] text-4xl'>100% Natural Food</p>
            <h1 className='text-primary font-[800] text-6xl'>Choose the best healthier way <br /> of life</h1>
            <Button onClick={linkto} className={`bg-[#EFD372] rounded-[16px] w-[28%] px-4 py-3 my-4 flex gap-3 items-center`}>Explore Now <ArrowRightIcon/> </Button>
       </div>
    </div>
    </div>
  )
}

export default Hero
