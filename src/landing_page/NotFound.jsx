import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container mt-5 p-5 text-center'>
      <div className="row">
        <h1 className='mb-4'>404 Not Found</h1>
        <p className='mb-4'>Sorry, the page which you are looking for does not exists.</p>
        <NavLink to='/'>
        <button className='btn btn-primary mx-auto' style={{width:"25%"}}>Go Home</button>

        </NavLink>
      </div>
    </div>
  )
}

export default NotFound
