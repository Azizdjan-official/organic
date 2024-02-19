import React from 'react'
import HeroAbout from './heropage/HeroAbout';
import AboutCreative from './creative/AboutCreative';
import AboutChoose from './whychooseus/AboutChoose';
import AboutTeam from './team/AboutTeam';
import Aboutus from './aboutus/Aboutus';

const About = () => {
  return (
    <div>
      <HeroAbout/>
      <AboutCreative/>
      <AboutChoose/>
      <AboutTeam/>
      <Aboutus/>

    </div>
  )
}

export default About
