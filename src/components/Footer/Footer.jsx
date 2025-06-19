import React from 'react'
import './Footer.css';

function Footer() {
  return (

    <footer class="p-5 text-lg-start mt-5 border-top">
      <div className='row'>
        <div class="col-md-6 col-xl-4 col-sm-6 p-4">

          <div class="mb-3">
            <h5 class="mb-0" style={{ color: "#fff" }}>LoGo</h5>
          </div>

          <div class="mb-3">
            <a href="#" class="social-icon me-3">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#" class="social-icon me-3">
              <i class="fa-brands fa-square-twitter"></i>
            </a>
            <a href="#" class="social-icon me-3">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </div>
          <div class="card">
            <div class="card-header">
              Quote
            </div>
            <div class="card-body">
              <figure>
                <blockquote class="blockquote">
                  {/* <p>A well-known quote, contained in a blockquote element.</p> */}
                </blockquote>
                <figcaption class="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <div class="small mt-2">
            &copy; 2025 YourCompany. All rights reserved.
          </div>

        </div>
        <div class="col-md-6 col-xl-4 col-sm-6 p-4 mt-4">

          <div class="mb-3">
            <h6 class="mb-0" style={{ color: "#fff" }}>Headings </h6>
          </div>

          <div class="mb-3">
            <ul class="list-group  me-3">
              <li className='list-group-item align-items-center small'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi aut enim repellendus facere? Nisi delectus eius consequatur laborum, excepturi doloremque exercitationem voluptatibus vel amet earum temporibus praesentium veniam quos aperiam.</li>
            </ul>
          </div>




        </div>
        <div class="col-md-6 col-xl-4 col-sm-6 p-4 mt-4">

          <div class="mb-3">
            <h6 class="mb-0" style={{ color: "#fff" }}>Headings 2</h6>
          </div>

          <div class="mb-3">
            <ul class="list-group  me-3">
              <li className=' align-items-center small'>  Home</li>
            </ul>
            <ul class="list-group  me-3">
              <li className=' align-items-center small'>  About Us</li>
            </ul>
            <ul class="list-group  me-3">
              <li className=' align-items-center small'>  Conatct Us</li>
            </ul>
            <ul class="list-group  me-3">
              <li className=' align-items-center small'>  Site Map</li>
            </ul>
          </div>




        </div>
        </div>
    </footer>


  )
}

export default Footer
