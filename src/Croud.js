import React from 'react';
import Slider from 'react-slick';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './Cround.css'; // Import your custom CSS for styling
import { FaKickstarter } from "react-icons/fa6";
const Croud = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <RightOutlined />,
    prevArrow: <LeftOutlined />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    { image: 'https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/sofas_buy_widget_1.png', text: 'Sofas starting at $32\n141 options available' },
    { image: 'https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/centertables_buy_widget_1.png', text: 'Sofas starting at $32\n141 options available' },
    { image: 'https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/recliner_buy_widget_1.png', text: 'Sofas starting at $32\n141 options available' },
    { image: 'https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/tvunits_buy_widget.png', text: 'Sofas starting at $32\n141 options available' },
    { image: 'https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/ottomans_buy_widget_1.png', text: 'Sofas starting at $32\n141 options available' },
    { image: 'https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/ottomans_buy_widget_1.png', text: 'Sofas starting at $32\n141 options available' },
  ];

  return (
    <>
    <div className='open-crowd'>
    <div className="customer-container">
      <FaKickstarter  className="customer-icon" />
      <div className="customer-text">
        <div className="customer-title">Our Customers Love</div>
        <div className="customer-subtitle">OUR PRODUCTS AND SERVICES</div>
      </div>
    </div>
        <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.image} alt={`Slide ${index}`} className="carousel-image" />
            <div className="carousel-text">{slide.text}</div>
          </div>
        ))}
      </Slider>
    </div>
    </div>

    </>

  );
};

export default Croud;
