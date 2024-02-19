import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
       <div className="Page404 relative my-8">
            <div className='absolute top-48 right-48'>
                <h1 className='text-[#8FA8A8] text-9xl'>404</h1>
                <p className='text-[#274C5B] font-[800] text-5xl'>Page not found</p>
                <p className='text-[#525C60] font-[600] text-xl'>The page you are looking for doesn't exist or has been moved</p>
                <Link className='bg-[#274C5B] w-[240px] h-[60px] flex text-white items-center justify-center rounded-[16px] my-8'  to="/">Go to Homepage</Link>
            </div>
       </div>
    </div>
  )
}

export default ErrorPage
