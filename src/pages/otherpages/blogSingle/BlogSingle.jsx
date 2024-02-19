import React from 'react'
import AdminIcon from '../../../icons/AdminIcon';
import BlogSinglecart from './BlogSinglecart';

const BlogSingle = () => {
  return (
    <div>
      <div className='blogSingle'></div>
      <div className='flex flex-col p-10 w-[80%] mx-auto gap-4 shadow-lg rounded-[30px] bg-white -mt-24'>
        <div className=' flex  gap-4 '>
          <h1 className='text-[#274C5B] font-[800] text-xl'>Posted On: January 6, 2022</h1>
          <span className='flex gap-3 items-center'>
            <AdminIcon/>
            <p className='text-[#525C60] font-[400] text-lg w-[80%]'>By Rachi Card </p>
          </span>
        </div>
        <h1 className='text-[#274C5B] font-[800] text-6xl'>Research More Organic Food</h1>
        <p className='text-[#525C60] font-[400] text-lg w-[60%]'>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
      </div>
      <BlogSinglecart/>
    </div>
  )
}

export default BlogSingle
