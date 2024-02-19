import React from 'react'

const Licences = () => {
  return (
    <div>
      <div className="licencesBG"></div>
      <div className='w-[80%] mx-auto my-8 flex flex-col gap-4'>
        <div className='flex justify-between'>
            <h1 className='text-primary w-[30%] font-[800] text-3xl'>Icon & Graphics</h1>
            <p className='text-[#525C60] w-[60%] font-[400] text-lg'>Icons and Graphics are manually designed by the <strong className='text-secondary font-[700] text-lg'>VictorFlow</strong> Templates team. You may download these and edit them to fit your website without asking for permission or providing credit.
Upon purchasing Software UI Kit Template our team grants you a nonexclusive, worldwide copyright license to download, copy, modify, and use the icons.</p>
        </div>
        <div className='flex justify-between'>
            <div className='w-[45%] '>
                <h1 className='text-primary font-[800] text-3xl'>Photography</h1>
            </div>
            <div className='flex flex-col gap-3  w-[70%] px-2'>
                    <p className='text-[#525C60]  font-[400] text-lg'>All images used in the Organick Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Unsplash, Pexels‍. And Freepik.</p>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-primary w-[30%] font-[800] text-2xl'>Unsplash</h1> 
                    <p className='text-[#525C60] w-[60%] font-[400] text-lg'>Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21, Image 22, Image 23, Image 24, Image 25, </p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-primary w-[30%] font-[800] text-2xl'>Pixcel</h1> 
                    <p className='text-[#525C60] w-[60%] font-[400] text-lg'>Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17,  </p>
                </div>
            </div>        
        </div>
        <div className='flex justify-between'>
            <h1 className='text-primary w-[30%] font-[800] text-3xl'>Font</h1>
            <p className='text-[#525C60] w-[60%] font-[400] text-lg'>Organick template uses free licensed Google Fonts. Please check Roboto, Yellowtail
and Open Sans.</p>
        </div>
      </div>
    </div>
  )
}

export default Licences
