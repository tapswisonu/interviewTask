import React, { useState } from "react";
import contact from './../../assets/contact.jpg';
import     MotionWrapper from './../../framerMotion/MotionWrapper'


function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      console.log("Form submitted:", formData);
      alert("Message sent!");
      setErrors({});
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <MotionWrapper direction="left" delay={0.3}>
      <section id="contact" className="py-5 bg-white">
        <div className="container px-4 px-md-5  py-5">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Get In Touch</h2>
            <div
              className="mx-auto mb-3"
              style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#2563EB",
              }}
            ></div>
            <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Let’s collaborate and build great digital experiences together.
            </p>
          </div>

          <div className="row g-5">
          

            <div className="col-md-6">
              <img
                src={contact}
                alt="Contact Illustration"
                className="img-fluid rounded mb-4 shadow-sm w-50"
              />

              <div className="d-flex mb-4">
                <div
                  className=" bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "38px", height: "38px" }}
                >
                  <i className="fas fa-envelope fs-5"></i>
                </div>
                <div className="ms-3">
                  <h5 className="fw-bold mb-1">Email</h5>
                  <a
                    href="mailto:hello@codeverse.in"
                    className="text-decoration-none text-primary"
                  >
                    hello@codeverse.in
                  </a>
                  <p className="text-muted small mb-0">
                    We reply within 24 hours
                  </p>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div
                  className="  bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "38px", height: "38px" }}
                >
                  <i className="fas fa-map-marker-alt fs-5"></i>
                </div>
                <div className="ms-3">
                  <h5 className="fw-bold mb-1">Location</h5>
                  <p className="mb-0">Noida, UP, India</p>
                  <p className="text-muted small mb-0">
                    Serving clients worldwide
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3 mt-4">
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
            </div>

           
            <div className="col-md-6">
              <div className="p-4 bg-light rounded shadow-sm">
                <h5 className="fw-bold mb-3">Send Us a Message</h5>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      className={`form-control ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                  </div>
                  <button type="submit" className=" btn cta-button w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
}

export default ContactUs;
