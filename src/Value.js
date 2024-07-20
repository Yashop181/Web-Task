import React from 'react';
import './Value.css';

const Value = () => {
  return (
    <div className='side-by-side'>
      <div className='image-container'>
        <img src='https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/why_furlenco_carousel_desktop1.jpg' alt='Image 1' />
      </div>
      <div className='image-container'>
        <img src='https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/evolve_2_0/why_furlenco_carousel_desktop1.jpg' alt='Image 2' />
      </div>
    </div>
  );
}

export default Value;
