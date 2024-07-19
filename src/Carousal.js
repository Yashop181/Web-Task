import React from 'react';
import { Carousel } from 'primereact/carousel';

import './Carousal.css';  // Import your custom CSS file

// Sample data for products
const products = [
    { id: 1, name: 'Product 1', description: 'Description 1' , image: 'https://images.unsplash.com/photo-1721265250424-a2ad2f1efcf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Product 2', description: 'Description 2' , image: 'https://plus.unsplash.com/premium_photo-1720884611740-f5e807d7c77e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Product 3', description: 'Description 3' , image :'https://images.unsplash.com/photo-1721265576459-ac6433c540d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 4, name: 'Product 4', description: 'Description 4' , image: 'https://plus.unsplash.com/premium_photo-1719850361442-dd4203f47fb9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},

];

// Responsive options for the carousel
const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
];

// Template for rendering a product item
const productTemplate = (product) => {
    return (
      <div className="product-item">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-detail">
          <h5>{product.name}</h5>
          <p>{product.description}</p>
        </div>
      </div>
    );
};

const Carousal = () => {
  return (
    <div>
      <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
    </div>
  );
};

export default Carousal;
