import React from 'react'
import { NavLink } from 'react-router-dom'

const OpenAccount = () => {
  return (
    <div className='container mt-5 p-5 text-center'>
      <div className="row">
        <h1 className='mb-4'>Open a Zerodha account</h1>
        <p className='mb-4'>Modern platforms and apps, ₹ 0 investments, and flat ₹20 intrady and F&O trades.</p>
        <NavLink to='/signup'>
        <button className='btn btn-primary mx-auto' style={{width:"25%"}}>Sign up now</button>

        </NavLink>
      </div>
    </div>
  )
}

export default OpenAccount
