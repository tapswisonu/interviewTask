import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide1 from './../../assets/slide1.jpg'
import slide2 from './../../assets/slide2.jpg'
import slide3 from './../../assets/slide3.jpg'
 

const HeroSection =()=>{
  const slides = [
  {
    id: 1,
    image: '',
    heading: 'Discover Innovation',
    subheading: 'lorem lepusum lorem lepusum lorem lepusum lorem lepusum lorem lepusum lor',
    buttonText: 'Learn More',
    buttonLink: '#learn'
  },
  {
    id: 2,
    image: {slide1},
    heading: 'Discover Innovation',
    subheading: 'lorem lepusum lorem lepusum lorem lepusum lorem le lepusum',
    buttonText: 'Learn More',
    buttonLink: '#start'
  },
  {
    id: 3,
    image: {slide3},
    heading: 'Discover Innovatio',
    subheading: 'lorem lepusum lorem lepusum lorem lepusum lorem lepusum lorem lepusum lorem lepusum',
    buttonText: 'Sign Up',
    buttonLink: '#signup'
  }
];

  return (
    <Swiper
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
            className="slide"
            style={{
              backgroundImage: `url(${slide1})`
            }}
          >
             
            <div className="slide-content">
              <h1>{slide.heading}</h1>
              <p className='small'>{slide.subheading}</p>
              <a href={slide.buttonLink} className="cta-button">
                {slide.buttonText}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


export default HeroSection;
