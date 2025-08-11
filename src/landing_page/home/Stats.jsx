import React from 'react'
import ecosystem from '../../assets/ecosystem.png';

const Stats = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        <div className="col-lg-6 col-sm-12 mt-5 p-5">
          <h2>Trust with confidence</h2>
          <h5 className='mt-5'>Customer-first always</h5>
          <p className='pb-3'>That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.</p>
          <h5>No spam or gimmicks</h5>
          <p className='pb-3'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
          <h5>The Zerodha universe</h5>
          <p className='pb-3'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h5>Do better with money</h5>
          <p className='pb-3'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className="col-lg-6 col-sm-12 p-5 mt-5 text-sm-center">
          <img className="img-fluid" src={ecosystem} alt="ecosystem" />
          <div className="row">
            <div className='col-lg-6 col-sm-12' style={{textDecoration:"none"}}>
              <a href="/product" style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            
            <div className='col-lg-6 col-sm-12'>
              <a href="" style={{textDecoration:"none"}}>Try kite <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Stats
