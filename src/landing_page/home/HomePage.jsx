import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import OpenAccount from './../OpenAccount';
import Pricing from './Pricing';
import Stats from './Stats';
import Navbar from './../Navbar';
import Footer from './../Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
      <hr />
      <Footer/>
    </div>
  )
}

export default HomePage
