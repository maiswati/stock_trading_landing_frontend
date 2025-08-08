import React from 'react'

const Pricing = () => {
  return (
    <div className='container mt-5 p-5'>
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <h2 className='mb-5'>Unbeatable pricing</h2>
          <p>We pioneered the concept of discount broking and price transperancy in India. Flat fees and no hidden changes.</p>
          <a href="" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-lg-2 col-sm-12"></div>
        <div className="col-lg-6 col-sm-12">
          <div className="row text-center">
            <div className="col-lg-6 col-sm-12 border p-3">
              <h1 className='mb-5'>₹ 0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-lg-6 col-sm-12 border p-3">
              <h1 className='mb-5'>₹ 20</h1>
              <p>Intrady and F&O</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Pricing
