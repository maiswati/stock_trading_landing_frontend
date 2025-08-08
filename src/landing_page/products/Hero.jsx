import React from 'react'
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='container'>
      <div className="row p-5 text-center">
        <h1 className='mb-3'>Technology</h1>
        <h6 className='text-muted mb-3'>Sleek, modern and intuitive trading platforms</h6>
        <p>Check out our <NavLink style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right"></i></NavLink></p>
      </div>
    </div>
  )
}

export default Hero
