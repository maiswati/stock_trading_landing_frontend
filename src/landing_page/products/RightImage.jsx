import React from 'react'

const RightImage = ({heading, description, link, heroImage}) => {
  return (
    <div className='container mt-5 p-5'>
      <div className="row">
        <div className="col-lg-6 col-sm-12 mt-4">
          <h1 className='mb-4'>{heading}</h1>
          <p className='mb-4'>{description}</p>
          <a style={{textDecoration:"none"}} href="">{link} <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-lg-6 col-sm-12">
          <img className="img-fluid rounded shadow" src={heroImage} alt="heroImage" />
        </div>
      </div>
      
    </div>
  )
}

export default RightImage
