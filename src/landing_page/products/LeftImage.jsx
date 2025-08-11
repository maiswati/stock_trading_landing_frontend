import React from 'react'

const LeftImage = ({heroImage, heading, description, link1, link2, ad1, ad2}) => {
  return (
    <div className='container mt-5 p-5'>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <img className="img-fluid" src={heroImage} alt={heroImage} />
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1 className='mb-4'>{heading}</h1>
          <p className='mb-4'>{description}</p>
          <div className='d-flex mb-4 gap-3'>
            {
              link1 ? <a style={{textDecoration:"none"}} href="">{link1} <i class="fa-solid fa-arrow-right"></i></a> : ""
            }
            {
              link2 ? <a style={{textDecoration:"none"}} href="">{link2} <i class="fa-solid fa-arrow-right"></i></a> : ""

            }
          </div>
          <div className='d-flex mb-2 gap-3'>
            <img src={ad1} alt="ad1" />
            <img src={ad2} alt="ad2" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LeftImage
