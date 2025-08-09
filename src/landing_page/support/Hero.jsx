import React from 'react'

const Hero = () => {
  return (
    <div className='container bg-primary text-white p-5 mb-5'>
      <div className="row mt-3 mb-4">
        <div className="col-lg-2"></div>
        <div className="col-lg-1">
          <p>Support</p>
        </div>
        <div className="col-lg-6"></div>
        <div className="col-lg-2">
          <p>
            <a className='text-white' style={{textDecoration:"none"}} href="">Track Tickets</a>
          </p>
        </div>
        <div className="col-lg-1"></div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h4 className='mb-5'>Search for an answer or browse help topics to create a ticket</h4>
          <div class="input-group input-group-lg mb-4">
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Eg:how do i activate F&O, why is my order getting rejected..'/>
</div>
          <div className='d-flex gap-3 mb-3'>
            <a className='text-white' href="">Track account opening</a>
            <a className='text-white' href="">Track segment activation</a>
            <a className='text-white' href="">Intraday</a>
          </div>
          <div className='d-flex gap-3'>
            <a className='text-white' href="">margins</a>
            <a className='text-white' href="">Kite user manual</a>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h4>Featured</h4>
          <ol>
            <li className='mb-2'>
              <a className='text-white' href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a className='text-white' href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
