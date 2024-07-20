import React from 'react';
import './Lastfooter.css';

const Lastfooter = () => {
  return (
    <footer className="footer">
      <div className="top-section">
        <div className="cities">
          <h3>CITIES WE DELIVER TO</h3>
          <p>Bengaluru, Mumbai, Pune, Delhi, Gurugram, Noida, Hyderabad, Chennai, Ghaziabad, Faridabad, Jaipur, Mysuru, Chandigarh, Vijayawada, Nashik</p>
        </div>
        <div className="apps">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/2.0/social-media/google-play-stroe.jpg" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/2.0/social-media/apple-store.jpg" />
          </a>
        </div>
      </div>
      <div className="description">
        <p>Made a decision to buy furniture online? At Furlenco, we've always worked around the goal of making buying furniture easy. Now, we're working on making it easier.</p>
        <p>Furniture has steadfastly been the hidden hero of the house and therefore, to buy furniture is to truly invest. We don't fully realise the difference between an ‘unfurnished’ home and a ‘furnished’ one until we step into one and figure out how important it is to buy furniture the right way. Memories might be remembered and poems might be written around the different...</p>
      </div>
    </footer>
  );
};

export default Lastfooter;
