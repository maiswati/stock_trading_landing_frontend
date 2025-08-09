import React from 'react'

const RaiseTicket = () => {
  return (
    <div className='container'>
      <p>To create a ticket, select a relevant topic</p>
      <div className="row">
        <div className="col-lg-4">
          <p className='mb-4'><i class="fa-solid fa-circle-plus" style={{color: "#33363f"}}></i> Account Opening</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Online account Opening</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Offline Acccount Opening</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Company, Partnership and HUF Account Opening</p>
          <p style={{fontSize:"13px"}} className='text-primary'>NRI Account Opening</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Charges at Zerodha</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Zerodha IDFC FIRST Bank 3-in-1 Account</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Getting Started</p>
        </div>
        <div className="col-lg-4">
          <p className='mb-4'><i className="fa-solid fa-user" style={{color: "#252527"}}></i> Your Zerodha Account</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Login Credentials</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Account Modification and Segment Addition</p>
          <p style={{fontSize:"13px"}} className='text-primary'>DP ID and bank details</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Your Profile</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Transfer and conversation of shares</p>
        </div>
        <div className="col-lg-4">
          <p className='mb-4'><i className="fa-solid fa-chart-column" style={{color: "#444444"}}></i> Your Zerodha Account</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Margin/leverage, Product and Order types</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Kite Web and Mobile</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Trading FAQs</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Corporate Actions</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Sentinel</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Kite API</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Pi and other platforms</p>
          <p style={{fontSize:"13px"}} className='text-primary'>Stockreports+</p>
          <p style={{fontSize:"13px"}} className='text-primary'>GTT</p>
        </div>
      </div>
    </div>
  )
}

export default RaiseTicket
