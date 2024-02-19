import React from 'react'
import Hero from './hero/Hero';
import Infocards from './infocards2/Infocards';
import Infocards2 from './infocards2/Infocard2';
import AboutHomecard from './aboutcard/aboutcard';
import Homecategories from './categories/Homecategories';
import HomeCustomer from './customer/HomeCustomer';
import HomeOffer from './offer/HomeOffer';
import HomeEcofriendly from './ecofriendly/HomeEcofriendly';
import HomeOrganics from './organics/HomeOrganics';
import HomeNews from './news/HomeNews';

const Home = () => {
  return (
    <div>
      <Hero/>
      <div className='w-[80%] mx-auto flex gap-3 items-center justify-center'>
         <Infocards text="Natural!!" title="Get Garden Fresh Fruits"/>
         <Infocards2 text="Offer!!" title="Get 10% off on Vegetables"/>
      </div>
      <AboutHomecard/>
      <Homecategories/>
      <HomeCustomer/>
      <HomeOffer/>
      <HomeEcofriendly/>
      <HomeOrganics/>
      <HomeNews/>

    </div>
  )
}

export default Home
