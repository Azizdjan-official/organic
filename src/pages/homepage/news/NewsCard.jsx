import React from 'react'
import AdminIcon from './../../../icons/AdminIcon';
import { useNavigate } from 'react-router-dom';
import { Button } from './../../../button/Button';
import ArrowRightIcon from './../../../icons/ArrowRightIcon';

const NewsCard = ({classname,title}) => {

  const navigate = useNavigate()
  const linkto = () => {
    navigate("/blog-single")
  }
  return (
    <div className={`${classname} relative rounded-2xl  flex flex-col p-4 border w-[48%] my-12 `}>
      <span className='w-[60px] h-[60px] mb-20 rounded-full flex flex-col items-center justify-center border bg-white'><p>25</p> <p> Nov</p></span>
        <div className='flex flex-col border w-[90%] gap-4 rounded-xl  p-3 shadow-md absolute left-6 -bottom-8  bg-white'>
            <span className='flex gap-3 items-center'>
                <AdminIcon/>
                <p className='text-primary font-[400] text-lg'>By Rachi Card</p>
            </span>
            <p className='text-primary font-[800] text-2xl'>{title}</p>
            <p className='text-[#525C60] font-[400] text-lg'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            <Button onClick={linkto} className={`bg-[#EFD372] rounded-[16px] w-[35%] px-4 py-3 my-4 flex justify-center text-primary gap-3 items-center`}>Read More <ArrowRightIcon/> </Button>

        </div> 
    </div>
  )
}

export default NewsCard
