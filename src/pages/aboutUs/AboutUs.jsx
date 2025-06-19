import React from 'react'
import aboutimg from './../../assets/AboutUS.jpg';

function AboutUs() {
  return (

      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img
              src={aboutimg}
              alt="About Us"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2 style={{color:'#0B1D51'}}>About Us</h2>
            <p className="lead">
              We are passionate developers building modern web experiences.
            </p>
            <p>
             We are passionate developers building modern web experiences. We are passionate developers building modern web experiences.
            </p>
            <p>
             We are passionate developers building modern web experiences.
            </p>
          </div>
        </div>
      </div>


  )
}

export default AboutUs
