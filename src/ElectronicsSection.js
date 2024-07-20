import React from 'react';
import './ElectronicsSection.css'; // Import your custom CSS for styling
import { RightOutlined } from '@ant-design/icons';
import { RiDiscountPercentFill } from "react-icons/ri";
const ElectronicsSection = () => {
  return (
    <div className="electronics-section">
      <div className="electronics-left">
        <div className="icon-container">
        <RiDiscountPercentFill />
        </div>
        <div className="electronics-info">
          <h2>Electronics</h2>
          <p>TO RENT</p>
        </div>
      </div>
      <div className="electronics-right">
        <a href="#view-all" className="view-all-link">
          View All <RightOutlined />
        </a>
      </div>
    </div>
  );
};

export default ElectronicsSection;
