import React from 'react'
import education from '../../assets/education.svg';

const Education = () => {
  return (
    <div className='container mt-5 p-5'>
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <img className="img-fluid rounded shadow" src={education} alt="education" />
        </div>
        <div className="col-lg-2 col-sm-12"></div>
        <div className="col-lg-6 col-sm-12 mt-5">
          <h1 className='mb-2'>Free and open market education</h1>
          <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="" className='mb-5' style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
          <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="" style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education
