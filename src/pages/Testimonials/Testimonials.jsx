import React from "react";
import Testimonials1 from "./../../assets/Testimonials1.jpg";
import Testimonials2 from "./../../assets/Testimonials2.jpg";
import Testimonials3 from "./../../assets/Testimonials3.jpg";
import "./Testimonials.css";
import MotionWrapper from "./../../framerMotion/MotionWrapper";


function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Anjali Sharma",
      image: Testimonials1,
      feedback:
        "Working with this IT team has been a game-changer for our business. Their solutions are top-notch!",
    },
    {
      id: 2,
      name: "Ravi Mehta",
      image: Testimonials2,
      feedback:
        "Incredible attention to detail and outstanding support throughout the project. Highly recommended!",
    },
    {
      id: 3,
      name: "Sneha Patel",
      image: Testimonials3,
      feedback:
        "The team delivered beyond expectations. Our digital transformation journey was smooth and effective.",
    },
  ];

  return (
    <MotionWrapper>
      <section id="testimonials" className="py-5 bg-light">
        <div className="container px-4 px-md-5  py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6">What Our Users Say</h2>
            <div
              className="mx-auto mb-3"
              style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#2563EB",
              }}
            ></div>
            <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
              We build long-term partnerships with our clients. Here's what they
              say about our services.
            </p>
          </div>

          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div className="col-md-4" key={testimonial.id}>
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="card-img-top rounded-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{testimonial.name}</h5>
                    <p className="card-text text-muted">
                      <i className="fas fa-quote-left me-2 text-primary"></i>
                      {testimonial.feedback}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
}

export default Testimonials;
