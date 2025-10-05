import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import './t-shirt.css';
const TShirt = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const handleRedirect = (url) => window.open(url, '_blank');

  const images = [
    'https://i.postimg.cc/g2N3v1H8/maroon.jpg',
    'https://i.postimg.cc/KckFtQHG/pink.jpg',
    'https://i.postimg.cc/05Mx7ZB2/white.jpg' 
  ];

  return (
    <div>
      <Navbar />
      <div className="tshirt-container">
        {/* 🔹 Title Section */}
        <div className="tshirt-header">
          <h1 className="tshirt-heading">Techfest T-Shirt</h1>
        </div>

        {/* Desktop / Mobile layout */}
        {!isMobile ? (
          <div className="tshirt-desktop-layout">
            {/* TOP: three images in one row */}
            <div className="tshirt-top">
              {images.map((src, i) => (
                <div key={i} className="tshirt-image-wrapper">
                  <img src={src} alt={`T-shirt ${i + 1}`} className="tshirt-image" />
                </div>
              ))}
            </div>

            {/* Actions (inline on desktop) */}
            <div className="tshirt-bottom">
              <div className="action-box">
                <div className="action-inline">
                  <p className="action-text">Choose your size &amp; color</p>
                  <button
                    className="cta-button"
                    onClick={() => handleRedirect('https://forms.gle/xhBFiV9n5iHmJARg8')}
                    aria-label="Choose size and color"
                  >
                    Click Here <span className="cta-arrow"></span>
                  </button>
                </div>
              </div>

              <div className="action-box">
                <div className="action-inline">
                  <p className="action-text">Proceed to payment</p>
                  <button
                    className="cta-button"
                    onClick={() => handleRedirect('https://forms.gle/5aGfxgXNv8numv5k8')}
                    aria-label="Proceed to payment"
                  >
                    Click Here <span className="cta-arrow"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="tshirt-mobile-layout">
            <div className="mobile-slider">
              {images.map((src, i) => (
                <div key={i} className="slide">
                  <div className="tshirt-image-wrapper mobile">
                    <img src={src} alt={`T-shirt ${i + 1}`} className="tshirt-image" />
                  </div>
                </div>
              ))}
            </div>
            <div className="tshirt-info">
              <p>Choose your size &amp; color</p>
              <button className="cta-button" onClick={() => handleRedirect('https://forms.gle/xhBFiV9n5iHmJARg8')}>
                Click Here <span className="cta-arrow"></span>
              </button>
              <p style={{ marginTop: '1rem' }}>Proceed to payment</p>
              <button className="cta-button" onClick={() => handleRedirect('https://forms.gle/5aGfxgXNv8numv5k8')}>
                Click Here <span className="cta-arrow"></span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default TShirt;