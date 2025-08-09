import React from 'react'

const Brokerage = () => {
  return (
    <div className='container'>
      <div className="row mt-5 mb-5">
        <div className="col-lg-6">
          <p className='text-center text-primary'>Brokerage calculator</p>
          <ul style={{lineHeight:"2"}}>
            <li>
              <p style={{fontSize:"14px"}} className='text-muted'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</p>
            </li>
            <li>
              <p style={{fontSize:"14px"}} className='text-muted'>Digital contract notes will be sent via e-mail.</p>
            </li>
            <li>
              <p style={{fontSize:"14px"}} className='text-muted'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</p>
            </li>
            <li>
              <p style={{fontSize:"14px"}} className='text-muted'>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</p>
            </li>
            <li>
              <p style={{fontSize:"14px"}} className='text-muted'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</p>
            </li>
            <li>
              <p style={{fontSize:"14px"}} className='text-muted'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <p className='text-primary text-center'>List of charges</p>
        </div>
      </div>
      
    </div>
  )
}

export default Brokerage
