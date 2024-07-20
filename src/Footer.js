// Footer.jsx
import React from 'react';
import './Footer.css';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/yoda/furlenco-logo.png" alt="Furlenco Logo" />
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined />
            </a>
          </div>
        </div>
        <div className="footer-links-container">
          <div className="footer-links">
            <a href="/home">Home</a>
            <a href="/buy-furniture">Buy Furniture</a>
            <a href="/rent-furniture">Rent Furniture</a>
            <a href="/annual-returns">Annual Returns</a>
          </div>
          <div className="footer-links">
            <a href="/about-us">About Us</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-conditions">Terms and Conditions</a>
          </div>
        </div>
        <div className="footer-help">
          <p>Need Help?</p>
          <a href="/help-center" className="help-center-button">Help Center</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
