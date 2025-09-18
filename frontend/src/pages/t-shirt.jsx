import React from 'react';
import Navbar from '../Navbar';
import './t-Shirt.css'; 

const TShirt = () => {
  return (
    <div>
      <Navbar />
      <div className="tshirt-container">
        <h1 className="tshirt-title">T-Shirt Collection</h1>
        <p className="coming-soon">Coming Soon...</p>
      </div>
    </div>
  );
};

export default TShirt;
