import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MotionWrapper from "./../../framerMotion/MotionWrapper";
import slide1 from "./../../assets/slide1.jpg";
import slide2 from "./../../assets/slide2.jpg";
import slide3 from "./../../assets/slide3.jpg";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image: slide1,
      heading: "Empowering Digital Transformation",
      subheading:
        "We build scalable web and mobile solutions that drive business growth and innovation for the future.",
      buttonText: "Explore Services",
      buttonLink: "#services",
    },
    {
      id: 2,
      image: slide2,
      heading: "Custom Software Development",
      subheading:
        "From idea to execution, our expert engineers craft tailor-made solutions to solve real-world problems.",
      buttonText: "View Portfolio",
      buttonLink: "#projects",
    },
    {
      id: 3,
      image: slide3,
      heading: "Product Engineering & UX Design",
      subheading:
        "We blend design thinking with robust development to deliver delightful digital experiences.",
      buttonText: "Let’s Talk",
      buttonLink: "#contact",
    },
  ];

  return (
    <MotionWrapper>
      <Swiper
        id="hero"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="hero-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="slide d-flex align-items-center justify-content-center text-white"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
            >
              <div className="slide-content bg-dark bg-opacity-50 p-4 rounded">
                <h1 className="display-4 fw-bold">{slide.heading}</h1>
                <p className="lead">{slide.subheading}</p>
                <a href={slide.buttonLink} className="btn cta-button mt-3">
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </MotionWrapper>
  );
};

export default HeroSection;
