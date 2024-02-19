import creativeimg from '../../../images/creativeImage.png'
import TractorIcon from './../../../icons/TractorIcon';
import ChemicalIcon from './../../../icons/ChemicalIcon';
import { Button } from './../../../button/Button';
import ArrowRightIcon from './../../../icons/ArrowRightIcon';

const AboutCreative = () => {
  return (
    <div  className='flex items-center'>
        <div className='w-[50%] '>
            <img src={creativeimg} />
        </div>
        <div className='w-[50%] '>
            <h1 className='text-secondary font-[400] text-2xl'>About Us</h1>
            <p className='text-primary font-[800] text-5xl'>We do Creative Things for Success</p>
            <p className='text-[#525C60] font-[400] text-lg my-4'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. <br /><br />Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <div className='flex justify-between'>
                <span className='flex items-center gap-3'>
                    <TractorIcon/>
                    <p className='text-primary font-[500] text-2xl'>Modern Agriculture Equipment</p>
                </span>
                <span className='flex items-center gap-3'>
                    <ChemicalIcon/>
                    <p className='text-primary font-[500] text-2xl'>No growth hormones are used</p>
                </span>
            </div>
            <Button  className={`bg-primary text-white rounded-[16px] w-[22%] px-4 py-3 my-4 flex gap-3 items-center`}>Explore Now <ArrowRightIcon/> </Button>

        </div>
    </div>
  )
}

export default AboutCreative
