import React from 'react'
import smallcase from '../../assets/smallcaseLogo.png'
import streak from '../../assets/streakLogo.png'
import sense from '../../assets/sensibullLogo.svg'
import fund from '../../assets/zerodhaFundhouse.png'
import pi from '../../assets/goldenpiLogo.png'
import ditto from '../../assets/dittoLogo.png'
const Universe = () => {
  return (
    <div className="container text-center mt-5 mb-5">
      <div className="row">
        <p className='mb-4'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
        <h1 className='mb-4'>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our platforms</p>
      </div>
      <div className="row mt-5 mb-4">
        <div className="col-lg-4">
          <img src={smallcase} alt="" />
          <p className='text-muted mt-3'>Thematic investment platform</p>
        </div>
        <div className="col-lg-4">
                    <img src={streak} style={{width:"30%"}} alt="" />
          <p className='text-muted mt-3'>Algo & strategy platform</p>
        </div>
        <div className="col-lg-4">
                    <img src={sense} style={{width:"40%"}} alt="" />
          <p className='text-muted mt-3'>Options trading platform</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <img src={fund} style={{width:"50%"}} alt="" />
          <p className='text-muted mt-3'>Asset management</p>
        </div>
        <div className="col-lg-4">
          <img src={pi} alt="" />
          <p className='text-muted mt-3'>Bonds trading platform</p>
        </div>
        <div className="col-lg-4">
          <img src={ditto} style={{width:"40%"}} alt="" />
          <p className='text-muted mt-3'>Insurance</p>
        </div>
      </div>
    </div>
  )
}

export default Universe
