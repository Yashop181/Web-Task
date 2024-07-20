import React, { useState, useEffect } from 'react';
import './Ac.css';

const items = [
  {
    id: 1,
    imgSrc: 'https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/6130/thumbnail/1710762702.png',
    title: '1.5 Ton 3 Star Convertible Inverter Split AC',
    price: '₹1,999/mo',
  },
  {
    id: 2,
    imgSrc: 'https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/6138/thumbnail/1712226246.png',
    title: '1 Ton 3 Star Convertible Inverter Split AC',
    price: '₹1,699/mo',
  },
  {
    id: 3,
    imgSrc: 'https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/6076/thumbnail/1709874020.jpg',
    title: 'Windows i3/8GB 4th/6th Gen - Powered by Soldrit',
    price: '₹2,321/mo',
  },
  {
    id: 4,
    imgSrc: 'https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/6077/thumbnail/1709874048.png',
    title: 'Windows i5/8GB 7th/8th Gen - Powered by Soldrit',
    price: '₹2,880/mo',
  },
  {
    id: 5,
    imgSrc: 'https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/6077/thumbnail/1709874048.png',
    title: 'Windows i7/16GB 9th/10th Gen - Powered by Soldrit',
    price: '₹3,500/mo',
  },
  {
    id: 6,
    imgSrc: 'https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/plutus/products/6077/thumbnail/1709874048.png',
    title: 'Windows i7/16GB 9th/10th Gen - Powered by Soldrit',
    price: '₹3,500/mo',
  },
];

const Ac = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 480) {
        setItemsToShow(1);
      } else if (window.innerWidth < 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
    };

    window.addEventListener('resize', updateItemsToShow);
    updateItemsToShow();

    return () => {
      window.removeEventListener('resize', updateItemsToShow);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const getVisibleItems = () => {
    const start = currentIndex;
    const end = (currentIndex + itemsToShow) % items.length;
    if (end > start) {
      return items.slice(start, end);
    } else {
      return [...items.slice(start), ...items.slice(0, end)];
    }
  };

  return (
    <div className="carousel">
      <button className="carousel__button carousel__button--left" onClick={prevSlide}>
        &#8249;
      </button>
      <div className="carousel__content">
        {getVisibleItems().map((item) => (
          <div key={item.id} className="carousel__item">
            <img src={item.imgSrc} alt={item.title} />
            <div className="carousel__item-info">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel__button carousel__button--right" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default Ac;
