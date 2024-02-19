import React from 'react'
import PortfolioCarts from './PortfolioCarts';
import { PortfolioCartInfo } from '../../../data/data';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {

  const navigate = useNavigate()
  const linkto = () => {
    navigate("/portfolio-single")
  }
  return (
    <div>
      <div className="portfolioBG"></div>
      <div className='flex flex-wrap justify-between my-8 w-[80%] mx-auto'>
        {PortfolioCartInfo.map((item)=> <PortfolioCarts onClick={linkto} image={item.image} text={item.text} title={item.title} />)}
        
      </div>
    </div>
  )
}

export default Portfolio
