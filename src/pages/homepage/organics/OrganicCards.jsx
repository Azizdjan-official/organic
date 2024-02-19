import React from 'react'
import { Button } from './../../../button/Button';
import { useNavigate } from 'react-router-dom';

const OrganicCards = ( {title,classname} ) => {

  const navigate = useNavigate()
  const linkto = () => {
    navigate("/portfolio")
  }
  return (
    <div className={classname}>
          <Button onClick={linkto}  className={`text-primary bg-white rounded-[16px] w-[32%] px-6 py-4 flex justify-center items-center`}>{title} </Button>

    </div>
  )
}

export default OrganicCards
