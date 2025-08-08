import React from 'react'
import nitin from '../../assets/nithinKamath.jpg'
import { NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='container mt-5 '>
      <div className="row text-center mb-5 p-5">
        <h3>We pioneered the discount broking model in India. <br />
Now, we are breaking ground with our technology.</h3>
      </div>
      <hr />
      <div className="row mt-5 p-5 mb-5">
        <div className="col-lg-2"></div>
        <div className="col-lg-4 text-muted" style={{lineHeight:"1.8"}}>
          <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
</p>
<p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
</p>
<p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
</p>
        </div>
        <div className="col-lg-4 text-muted" style={{lineHeight:"1.8"}}>
<p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <hr />
      <div className="row mt-5 p-5">
        <h1 className='text-center mb-5'>People</h1>
<div className="col-lg-2"></div>
<div className="col-lg-4 text-center">
  <div>
    <img src={nitin} alt="nitin" style={{borderRadius:"50%", width:"80%"}} />
  </div>
  <h5 className='mt-4'>Nitin Kamath</h5>
  <p>Founder, CEO</p>
</div>
<div className="col-lg-4 mt-4" style={{lineHeight:"2"}}>
  <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
<p>Playing basketball is his zen.</p>
<p>Connect on <NavLink to='/' style={{textDecoration:"none"}}>HomePage</NavLink > / <NavLink style={{textDecoration:"none"}}>TradingQnA</NavLink> / <NavLink style={{textDecoration:"none"}}>Twitter</NavLink></p>
</div>
<div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default Hero
