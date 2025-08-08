import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import OpenAccount from './../OpenAccount';
import Pricing from './Pricing';
import Stats from './Stats';

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
    </div>
  )
}

export default HomePage
