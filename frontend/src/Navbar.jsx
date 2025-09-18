import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './context/Authcontext';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // You can keep useAuth even if not used now; it won't render login/profile
  const { user } = useAuth() || {};

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavigation = (section) => {
    // If not on home, navigate to home and request scroll
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section } });
    } else {
      const element = document.getElementById(section);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header>
      {/* Desktop circular nav (logo left, centered links, right area empty for now) */}
      <nav className="circular-nav desktop-nav" role="navigation" aria-label="Main navigation">
        <div className="nav-left">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }} className="nav-logo-link" aria-label="Home">
            <img src="https://i.postimg.cc/GpnTJgzG/giet-logo.jpg" alt="E-Fiesta logo" className="nav-logo" />
          </a>
          <span className="brand-text">E-Fiesta 2k25</span>
        </div>

        <div className="nav-center" role="menubar" aria-label="Primary">
          <h2 role="none"><a role="menuitem" href="#home" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>Home</a></h2>
          <h2 role="none"><a role="menuitem" href="#events" onClick={(e) => { e.preventDefault(); handleNavigation('events'); }}>Events</a></h2>
          <h2 role="none"><a role="menuitem" href="#about" onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}>Explore</a></h2>
          <h2 role="none"><Link role="menuitem" to="/t-shirt" onClick={closeMenu}>T-Shirt</Link></h2>
        </div>

        <div className="nav-right" aria-hidden="true">
          {/* intentionally left empty while login/profile is disabled */}
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav className="navbar mobile-nav" role="navigation" aria-label="Mobile navigation">
        <div className="nav-logo-wrapper">
          {/* Brand text visible on mobile top bar */}
          <span className="brand-text">E-Fiesta 2k25</span>
          {/* keep image in DOM but hidden via CSS on mobile top bar; it's shown inside menu */}
          <img src="https://i.postimg.cc/GpnTJgzG/giet-logo.jpg" alt="E-Fiesta logo" className="nav-logo mobile-logo" />
        </div>

        {/* hamburger */}
        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* slide-in mobile links (logo will appear at top via CSS ::before) */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`} role="menu" aria-hidden={!isOpen}>
          <li role="none"><a role="menuitem" href="#home" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>Home</a></li>
          <li role="none"><a role="menuitem" href="#events" onClick={(e) => { e.preventDefault(); handleNavigation('events'); }}>Events</a></li>
          <li role="none"><a role="menuitem" href="#about" onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}>Explore</a></li>
          <li role="none"><Link role="menuitem" to="/t-shirt" onClick={closeMenu}>T-Shirt</Link></li>

          {/* NOTE: Login/Profile intentionally removed from mobile menu as requested */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
