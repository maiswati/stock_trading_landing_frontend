import React from 'react'
import zero from '../../assets/pricing0.svg'
import twenty from '../../assets/intradayTrades.svg'
const Hero = () => {
  return (
    <div className='container text-center'>
      <div className="row p-5">
        <h1>Pricing</h1>
        <p className='text-muted'>Free equity investments and flat ₹ 20 traday and F&O trades</p>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-4">
          <img src={zero} alt="zero" style={{width:"65%"}}/>
          <h2>Free equity delivery</h2>
          <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-lg-4">
          <img src={twenty} alt="twenty" style={{width:"65%"}}/>
          <h2>Intraday and F&O trades</h2>
          <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-lg-4">
          <img src={zero} alt="zero" style={{width:"65%"}}/>
          <h2>Free direct MF</h2>
          <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Hero
