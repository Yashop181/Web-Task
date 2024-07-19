import { FaSmile } from "react-icons/fa";
import './Customer.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Customer = () => {
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: 'block', right: '10px', zIndex: 1 }}
            onClick={onClick}
          />
        );
      };
      
      const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
            onClick={onClick}
          />
        );
      };
      
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };

  return (
    <>
        <div className="customer-container">
      <FaSmile className="customer-icon" />
      <div className="customer-text">
        <div className="customer-title">Our Customers Love</div>
        <div className="customer-subtitle">OUR PRODUCTS AND SERVICES</div>
      </div>
    </div>
    <div className="slider-container">
        <Slider {...settings}>
          <div className="slide">
            <div className="card">
              <img
                src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/testimonial_web2.jpg"
                alt="image1"
                className="card-image"
              />
            </div>
          </div>
          <div className="slide">
            <div className="card">
              <img
                src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/testimonial_web2.jpg"
                alt="image2"
                className="card-image"
              />
            </div>
          </div>
          <div className="slide">
            <div className="card">
              <img
                src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/testimonial_web2.jpg"
                alt="image3"
                className="card-image"
              />
            </div>
          </div>
          <div className="slide">
            <div className="card">
              <img
                src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/testimonial_web2.jpg"
                alt="image3"
                className="card-image"
              />
            </div>
          </div>
        </Slider>
      </div>

    </>

  )
}

export default Customer
