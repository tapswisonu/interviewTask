import React from "react";
import aboutimg from './../../assets/AboutUS.jpg';
import MotionWrapper from "./../../framerMotion/MotionWrapper";


function AboutUs() {
  return (
    <MotionWrapper direction="left" delay={0.3}>
      
      <section id="about" className="py-5 bg-white">
        <div className="container px-3 px-md-5 py-5">
         
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">About Us</h2>
            <div
              className="mx-auto"
              style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#2563EB",
              }}
            ></div>
          </div>

          <div className="row align-items-center gy-5 gx-md-5">
           
            <div className="col-md-6 position-relative">
              <img
                src={aboutimg}
                alt="About Us"
                className="img-fluid rounded shadow"
              />
              <div
                className="position-absolute bg-primary text-white p-4 rounded shadow"
                style={{ bottom: "-1.5rem", right: "-1.5rem" }}
              >
                <p className="h4 fw-bold mb-0">5+ Years</p>
                <small>Industry Experience</small>
              </div>
            </div>

          
            <div className="col-md-6">
              <h3 className="h4 fw-bold mb-4">
                Empowering Businesses Through Technology
              </h3>
              <p className="text-secondary mb-3">
                At <strong>CodeVerse Technologies</strong>, we specialize in
                crafting innovative digital solutions tailored to your business
                goals. From intuitive web platforms and mobile applications to
                scalable enterprise software, our team transforms complex
                problems into user-centric technology.
              </p>
              <p className="text-secondary mb-4">
                Our agile approach, combined with deep technical expertise in
                React, Node.js, Python, and cloud infrastructure, enables us to
                deliver robust, secure, and future-ready solutions for startups,
                SMBs, and enterprises.
              </p>

              <div className="row g-3">
                <div className="col-6">
                  <p className="fw-medium mb-1">Company:</p>
                  <p className="mb-0">CodeVerse Technologies</p>
                </div>
                <div className="col-6">
                  <p className="fw-medium mb-1">Email:</p>
                  <p className="mb-0">info@codeverse.in</p>
                </div>
                <div className="col-6">
                  <p className="fw-medium mb-1">Location:</p>
                  <p className="mb-0">Noida, India</p>
                </div>
                <div className="col-6">
                  <p className="fw-medium mb-1">Availability:</p>
                  <p className="mb-0">Open for Projects & Partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
}

export default AboutUs;
