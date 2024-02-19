import React from 'react'
import { NewsCardInfo } from '../../../data/data'
import NewsCard from './../../homepage/news/NewsCard';

const Blog = () => {
  return (
    <div>
      <div className="blogBG"></div>
      <div className='flex flex-wrap gap-3 w-[80%] mx-auto'>
        {NewsCardInfo.map((item) => <NewsCard classname={item.classname} title={item.title}/>)}
      </div>
    </div>
  )
}

export default Blog
