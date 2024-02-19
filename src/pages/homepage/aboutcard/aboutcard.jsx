import OrganicIcon from '../../../icons/OrganicIcon'
import QualityIcon from '../../../icons/QualityIcon'
import img from '../../../images/Photo_57.png'
import AboutHomeparts from './aboutparts'
import { useNavigate } from 'react-router-dom';
import ArrowRightIcon from './../../../icons/ArrowRightIcon';
import { Button } from './../../../button/Button';

const AboutHomecard = () => {

  const navigate = useNavigate()
  const linkto = () => {
    navigate("/shop")
  }
  return (
    <div className='flex w-[80%] mx-auto'>
        <div className='w-[50%]'>
            <img src={img}  />
        </div>
        <div className='w-[50%] flex flex-col justify-center'>
            <h1 className='text-[#7EB693] text-3xl font-[400]'>About us</h1>
            <p className='text-primary font-[800] text-4xl'>We Believe in Working Accredited Farmers</p>
            <h4 className='text-[#525C60] font-[400] text-lg'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</h4>
            <AboutHomeparts icon={<OrganicIcon/>} text="Organic Foods Only"/>
            <AboutHomeparts icon={<QualityIcon/>} text="Quality Standards"/>
            <Button onClick={linkto} className={`bg-primary rounded-[16px] w-[28%] px-4 py-3 my-4 flex justify-center text-white gap-3 items-center`}>Shop Now <ArrowRightIcon/> </Button>

        </div>
    </div>
  )
}

export default AboutHomecard
