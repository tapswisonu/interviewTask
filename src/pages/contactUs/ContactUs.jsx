import React, { useState } from "react";
import conact from "./../../assets/contact.jpg"

const ContactUs = () => {
  const [user, setUser] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!user.name.trim()) newErrors.name = "Name field is mandatory";
    if (!user.email.trim()) newErrors.email = "Email field is mandatory";
    if (!user.message.trim()) newErrors.message = "Message field is mandatory";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (


    <section className="container my-5" id="contact">
       <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                name="message"
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                id="message"
                rows="4"
                value={user.message}
                onChange={handleChange}
                placeholder="message"
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
         <div className="col-md-6">
         <img src={conatct} alt="conatct" />
        </div>
      </div>
     

    </section>
  );
};

export default ContactUs;
