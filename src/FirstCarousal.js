import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import './FirstCarousal.css'; // Import custom styles
import { FaArrowRightLong } from "react-icons/fa6";
const FirstCarousal = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={50} // Show two items at once
        dynamicHeight={true} // Adjust height based on current slide
        emulateTouch={true} // Allow touch swiping
      >
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1721086130975-83605296fdbb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="https://plus.unsplash.com/premium_photo-1719930221771-f04ba1bcfb28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="https://plus.unsplash.com/premium_photo-1720967009356-2689587a0e61?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 3" />
        </div>
      </Carousel>
      <div className="button-container">
        <button className="btn1 ">Buy Furniture <FaArrowRightLong /></button>
        <button className="btn2 ">Rent Furniture <FaArrowRightLong /></button>
        <button className="btn3 ">Unlmtd <FaArrowRightLong /></button>
      </div>
    </div>
  );
};

export default FirstCarousal;
