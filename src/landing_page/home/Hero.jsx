import React from 'react'
import homeHero from '../../assets/homeHero.png'
import { NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='container p-5 mb-5 text-sm-center'>
      <div className='row text-center'>
        <img src={homeHero} alt="homeHero" className='mb-5'/>
        <h1 className='mt-5'>Invest In Everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
        <NavLink to='/signup'>
        <button style={{width:"25%"}} className='btn btn-primary m-auto p-2'>Signup now</button>

        </NavLink>
      </div>
    </div>
  )
}

export default Hero
