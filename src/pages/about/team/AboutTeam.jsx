import React from 'react'
import Teamcart from './Teamcart';
import team1 from '../../../images/teamcart1.png'
import team2 from '../../../images/teamcart2.png'
import team3 from '../../../images/teamcart3.png'
import { useNavigate } from 'react-router-dom';

const AboutTeam = () => {

  const navigate = useNavigate()
  const linkto = () => {
    navigate("/team")
  }
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-secondary text-center font-[400] text-3xl'>Team</h1>
      <h2 className='text-primary text-center font-[800] text-5xl'>Our Organic Experts</h2>
      <h3 className='text-[#525C60] text-center w-[60%] mx-auto font-[400] text-lg'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</h3>

      <div className='flex w-[80%] mx-auto gap-3 my-8 justify-center'>
        <Teamcart onClick={linkto} image={team1} names="Giovani Bacardo" job="Farmer" />
        <Teamcart onClick={linkto} image={team2} names="Marianne Loreno" job="Designer" />
        <Teamcart onClick={linkto} image={team3} names="Riga Pelore" job="Farmer" />
      </div>
    </div>
  )
}

export default AboutTeam
