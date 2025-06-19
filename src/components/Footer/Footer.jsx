import React from "react";
import "./Footer.css";  
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="    p-5 text-lg-start mt-5 border-top">
      <div className="row m-4">
       
        <div className="col-md-6 col-xl-4 col-sm-6 p-4">
          <div className="mb-3">
            <h5
              className="mb-0 text-white"
              style={{ fontSize: "35px", fontWeight: "700" }}
            >
              LoGo
            </h5>
          </div>

          <div className="mb-3 d-flex gap-3 ">
            <a
              href="#"
              className="d-flex align-items-center justify-content-center bg-white border rounded-circle text-secondary"
              style={{ width: "35px", height: "35px" }}
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="#"
              className="d-flex align-items-center justify-content-center bg-white border rounded-circle text-secondary"
              style={{ width: "35px", height: "35px" }}
            >
              <i className="fab fa-linkedin-in fs-5"></i>
            </a>
            <a
              href="#"
              className="d-flex align-items-center justify-content-center bg-white border rounded-circle text-secondary"
              style={{ width: "35px", height: "35px" }}
            >
              <i className="fa-brands fa-square-twitter"></i>
            </a>
          </div>

          <div className="card ">
            <div className="card-header">Quote</div>
            <div className="card-body">
              <figure>
                <blockquote className="blockquote mb-4">
                  <p>"Technology is best when it brings people together."</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Matt Mullenweg in{" "}
                  <cite title="Source Title">WordPress Founder</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

       
        <div className="col-md-6 col-xl-4 col-sm-6 p-4 mt-4">
          <div className="mb-3">
            <h6 className="mb-0 text-white">About Company</h6>
          </div>
          <p className="small ">
            We are a technology-driven software development company providing
            tailored web, mobile, and digital solutions to help businesses
            thrive in the digital age.
          </p>
        </div>

       
        <div className="col-md-6 col-xl-4 col-sm-6 p-4 mt-4">
          <div className="mb-3">
            <h6 className="mb-0 text-white">Quick Links</h6>
          </div>
          <ul className="list-unstyled small">
            <li className="mb-2">
              <a href="#home" className=" text-decoration-none">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#about" className=" text-decoration-none">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className=" text-decoration-none">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#sitemap" className=" text-decoration-none">
                Site Map
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-md-6 p-4 mt-4">
          <div className="small mt-3 ">
            &copy; 2025 YourCompany. All rights reserved.
          </div>
        </div>
        <div className="col-md-6 p-4 mt-4 text-end">
          <button
            onClick={scrollToTop}
            className="mt-4 mt-md-0 btn btn-light rounded-circle "
            style={{ width: "40px", height: "40px" }}
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;