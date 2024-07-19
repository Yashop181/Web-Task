
import { FaArrowRight } from "react-icons/fa6";
import './Offer.css'
import { RiDiscountPercentFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Offer = () => {
  return (
    <div>
        <div className="offer-start">
            <div>Electronics  to Rent  </div>
            <div>View All <FaArrowRight /> </div>
        </div>
        <div className="coupons-container">
        <div className="coupon">
        <div className="coupon-content">
          <h2><RiDiscountPercentFill className="disc-icon" />Get flat 7% off upto ₹7000</h2>
          <p>Get flat 7% off upto ₹7000 on your cart value when buying any product!</p>
          <p>Use Coupon Code: <strong>SUPER7</strong></p>
        </div>
      </div>
      <div className="coupon">
        <div className="coupon-content">
          <h2><RiDiscountPercentFill className="disc-icon" />FLAT 25% off upto ₹1000</h2>
          <p>Apply this coupon to get FLAT 25% off upto ₹1000 on your monthly rent and chill. Great reason to start renting today!</p>
          <p>Use Coupon Code: <strong>FUR25</strong></p>
        </div>
      </div>
      <div className="coupon">
        <div className="coupon-content">
          <h2><RiDiscountPercentFill className="disc-icon" />Free OTT plans & more</h2>
          <p>Apply this coupon to get Free Disney+ Hotstar, Zee5, SonyLiv & more (56 Top OTT). Discounts on Myntra, Puma, Uber & more (40+ brands).</p>
          <p>Use Coupon Code: <strong>FIRST80K</strong></p>
        </div>
      </div>

        </div>
        <>
        <Link to="/your-link" className="banner-link">
      <div className="image-section">
        <img 
          src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/npl_banner_unlmtd_ext_slim_2.jpg" 
          alt="Offer Banner" 
          className="banner-image" 
        />
      </div>
    </Link>
    <div className="video-call"> 
        <img src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/video_call_widget_desktop.png" alt="video-call" />
    </div>
        </>

    </div>
  )
}

export default Offer
