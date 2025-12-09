import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './home1.css';
import welcomeVideo from './assets/videoplayback.mp4';
import 'remixicon/fonts/remixicon.css';

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const homeRef = useRef(null);
  const eventsRef = useRef(null);
  const aftermovieRef = useRef(null);

  const [showThankYouPopup, setShowThankYouPopup] = useState(false);

  // Show "Thank you" popup once per browser (per localStorage key)
  useEffect(() => {
    const SEEN_KEY = 'efiesta_postfest_popup_seen';
    const hasSeen = window.localStorage.getItem(SEEN_KEY);
    if (!hasSeen) {
      setShowThankYouPopup(true);
      window.localStorage.setItem(SEEN_KEY, 'true');
    }
  }, []);

  const closePopup = () => setShowThankYouPopup(false);

  // Smooth scroll when coming from other pages with state.scrollTo
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      window.history.replaceState({}, document.title);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollToEvents = () => {
    eventsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAftermovie = () => {
    aftermovieRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main-container">
      <Navbar />

      {/* Post-Fest Thank You Popup */}
      {showThankYouPopup && (
        <div className="announcement-backdrop" onClick={closePopup}>
          <div
            className="announcement-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Thank You for Making E-Fiesta 2k25 a Grand Success! 🎉</h2>
            <p>
              The Annual Grand Fest of the Department of ECE has successfully
              concluded. A heartfelt thank you to all participants, volunteers,
              coordinators and faculty members for your energy and support.
            </p>
            <p>
              The website will now showcase highlights, photos and results from
              E-Fiesta 2k25. Stay tuned for updates on the next edition.
            </p>
            <button className="announcement-close-btn" onClick={closePopup}>
              Continue to Website
            </button>
          </div>
        </div>
      )}

      {/* Welcome Section */}
      <section id="home" className="welcome-section" ref={homeRef}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="section-video"
        >
          <source src={welcomeVideo} type="video/mp4" />
        </video>
        <div className="section-overlay"></div>

        <div className="welcome-content">
          <h1 className="welcome-title">
            <span className="highlight">E-Fiesta</span>
            <span className="highlight-year"> 2k25</span>
          </h1>
          <p className="welcome-subtitle">
            Department of Electronics & Communication Engineering
          </p>
          <p className="welcome-text">
            Thank you for being a part of our journey.  
            Relive the moments, celebrate the winners, and get ready for what’s next.
          </p>

          <div className="welcome-buttons">
            <button onClick={scrollToAftermovie} className="btn primary-btn">
              Watch Aftermovie
            </button>
            <button onClick={scrollToEvents} className="btn ghost-btn">
              View Highlights
            </button>
          </div>
        </div>
      </section>

      {/* Aftermovie & Summary Section */}
      <section id="aftermovie" className="after-section" ref={aftermovieRef}>
        <div className="after-grid">
          <div className="after-text">
            <h2>Fest Aftermovie & Highlights</h2>
            <p className="section-description">
              E-Fiesta 2k25 was filled with energy, innovation and unforgettable memories.
              Watch the aftermovie and glance through the key moments that made this
              edition special.
            </p>
            <ul className="highlight-list">
              <li>⚡ Department-wide participation across multiple domains</li>
              <li>🏆 Technical, Non-Technical, Cultural & Sports events</li>
              <li>📸 Dedicated gallery to relive every moment</li>
              <li>🎖 Transparent results and winners showcase</li>
            </ul>
          </div>

          <div className="after-video-wrapper">
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/XXXXXXXX"
                title="E-Fiesta 2k25 Aftermovie"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-note">
              * Replace this placeholder video link with the official aftermovie once it&apos;s ready.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights / Results / Report */}
      <section id="highlights" className="events-wrapper postfest-section" ref={eventsRef}>
        <div className="events-container">
          <div className="section-title-container">
            <h2>Fest Highlights & Results</h2>
            <p className="section-description">
              Explore the outcomes of E-Fiesta 2k25 — from winners and performances
              to photo moments and official summaries.
            </p>
          </div>

          <div className="highlights-grid">
            <div className="events-card" onClick={() => navigate('/gallery')}>
              <img
                src="https://images.unsplash.com/photo-1522836924445-4478bdeb860c?q=80&w=1600&auto=format&fit=crop"
                alt="Gallery"
              />
              <h3>Photo Gallery</h3>
              <p>
                Browse curated photographs from all days of the fest —
                technical, cultural, non-technical and sports.
              </p>
            </div>

            <div className="events-card">
              <img
                src="https://images.unsplash.com/photo-1517244867959-c8982fda3e63?q=80&w=1600&auto=format&fit=crop"
                alt="Winners"
              />
              <h3>Results & Winners</h3>
              <p>
                View event-wise winners and positions for every category.
                (Link this card to a Winners page or downloadable result sheet.)
              </p>
            </div>

            <div className="events-card">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
                alt="Report"
              />
              <h3>Official Fest Report</h3>
              <p>
                A concise report summarizing participation, major events,
                outcomes and key statistics of E-Fiesta 2k25.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview + Next Year Teaser */}
      <section id="explore" className="about-wrapper postfest-explore">
        <div className="about-container">
          <h2>Explore &amp; What&apos;s Next</h2>
          <p className="section-description">
            Dive deeper into this year&apos;s memories and stay tuned for the next edition.
          </p>

          <div className="explore-grid">
            <div className="events-card" onClick={() => navigate('/gallery')}>
              <img
                src="https://images.unsplash.com/photo-1522836924445-4478bdeb860c?q=80&w=1600&auto=format&fit=crop"
                alt="Gallery"
              />
              <h3>Full Gallery</h3>
              <p>
                Explore complete albums from E-Fiesta 2k25 — cultural nights,
                sports action, technical showcases and more.
              </p>
            </div>

            <div className="events-card" onClick={() => navigate('/Developer')}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                alt="Team"
              />
              <h3>Our Team</h3>
              <p>
                Meet the students and faculty who made E-Fiesta 2k25 possible —
                from ideation to execution.
              </p>
            </div>

            <div className="events-card nextfest-card">
              <img
                src="https://images.unsplash.com/photo-1534448377760-8504e3beef77?q=80&w=1600&auto=format&fit=crop"
                alt="Next Edition"
              />
              <h3>E-Fiesta Next Edition</h3>
              <p>
                Planning for the next edition is underway. Dates will be
                announced through the department and this website.
              </p>
              <div className="nextfest-tag">Coming Soon</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-logo-section">
            <div className="footer-logo">
              <img src="https://i.postimg.cc/8c3pC47H/logo.jpg" alt="Fest Logo" />
            </div>
            <div className="social-links">
              <a href="https://www.instagram.com/efiesta1/" className="social-icon" target="_blank" rel="noreferrer">
                <i className="ri-instagram-fill"></i>
              </a>
            </div>
          </div>

          <div className="contact-grid">
            <div className="contact-column">
              <h4>Registration Support</h4>
              <p>Phone: +91 8480776011</p>
              <p>Phone: +91 8260584377</p>
              <p>Email: efiesta23@gmail.com</p>
            </div>
            <div className="contact-column">
              <h4>Event Related Queries</h4>
              <p>Phone: +91 9876543213</p>
              <p>Phone: +91 9876543214</p>
            </div>
            <div className="contact-column">
              <h4>Website Support</h4>
              <p>Phone: +91 7846878972</p>
              <p>Phone: +91 9438502122</p>
              <p>Email: efiesta23@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2025 E-Fiesta. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Main;