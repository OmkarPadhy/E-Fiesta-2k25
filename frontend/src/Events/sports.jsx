import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../Navbar';
import './events.css';

const Sports = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    console.log('[Sports] rendering. isMobile =', isMobile ? 'true (MobileView)' : 'false (DesktopView)');
  }, [isMobile]);

  const handleImageError = (e) => {
    e.target.src = '/placeholder.jpg';
  };

  const normalizeUrl = (url) => {
    if (!url) return '#';
    if (/^(https?:\/\/|mailto:|tel:)/i.test(url)) return url;
    return `https://${url}`;
  };

  const boysEventsRef = useRef(null);
  const girlsEventsRef = useRef(null);

  // improved scroll function that accounts for fixed navbar height
  const scrollToSection = (ref) => {
    if (!ref || !ref.current) return;
    const navHeight = (() => {
      // try to detect a navbar element height; fallback to 80
      const el = document.querySelector('header, .mobile-nav, .desktop-nav, nav');
      const h = el ? el.getBoundingClientRect().height : 80;
      return h;
    })();

    const extraOffset = 12; // a little breathing room under the navbar
    const top = ref.current.getBoundingClientRect().top + window.pageYOffset - navHeight - extraOffset;

    window.scrollTo({
      top: Math.max(0, Math.floor(top)),
      behavior: 'smooth',
    });
  };

  // Events: title, image, description, formLink, comingSoon
  const boysEvents = [
    { title: 'Smash Cricket (ECE Only)', image: 'https://i.postimg.cc/63Y0TJQh/IMG-20250920-WA0013.jpg', description: 'Box cricket / turf cricket event.', formLink: 'https://forms.gle/dhQoeZjL9KgDPrz69', comingSoon: false },
    { title: 'Gully Cricket', image: 'https://i.postimg.cc/gkpqnnt5/Gully-cricket.png', description: 'Street cricket tournament.', formLink: 'https://forms.gle/F77LMU4Snk5D44VF6', comingSoon: false, hot: true, cta: 'Register Now', prize: 'Cashprizes + memento' },
    { title: 'Checkmate Clash', image: 'https://i.postimg.cc/2Sh7hB6y/Whats-App-Image-2025-09-20-at-14-07-44-0c6a75a1.jpg', description: 'Chess tournament.', formLink: 'https://forms.gle/CZQdsSx4RzujqApN8', comingSoon: false },
    { title: 'Striker Shots', image: 'https://images.unsplash.com/photo-1652558973183-a3f046921163?q=80&w=2081&auto=format&fit=crop', description: 'Carrom board competition.', formLink: 'https://forms.gle/EKhA9EqKZyFZFSkP6', comingSoon: false },
    { title: 'Rope Rumble', image: 'https://i.postimg.cc/rpGgXtX3/IMG-20250920-WA0019.jpg', description: 'Tug of war competition.', formLink: 'https://forms.gle/HAz6LAmUVeHXhHjk8', comingSoon: false},
    { title: 'Satolia (7 Stones)', image: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Dabba_Kali2.jpg', description: 'Seven stones (traditional Indian outdoor game).', formLink: 'https://forms.gle/BFDkr2QN4KfeFSBi8', comingSoon: false },
    { title: "Smash n' Dash", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRnKM7rn9bIKH2g_28DbaISKrGomLfBTpPQ&s', description: 'Badminton matches.', formLink: 'https://forms.gle/Dfh5EXMERiPg9eDQA', comingSoon: false },
    { title: 'Volley Vibes', image: 'https://i.postimg.cc/fyqBqnnb/IMG-20250920-WA0026.jpg', description: 'Volleyball competition.', formLink: 'https://forms.gle/QEQNtDUsq15X98Cj8', comingSoon: false },
    { title: 'Khel Kabaddi (ECE Only)', image: 'https://sc0.blr1.cdn.digitaloceanspaces.com/article/204120-pjgcfidsfz-1729917365.jpg', description: 'Traditional kabaddi match.', formLink: 'https://forms.gle/5AyAjefWiMqqj3yp9', comingSoon: false },
    { title: 'Street Champs (Gully Football)', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop', description: 'Gully football event.', formLink: '#', comingSoon: true }
  ];

  const girlsEvents = [
    { title: 'Gully Cricket', image: 'https://images.unsplash.com/photo-1709233955550-1a316eab4974?q=80&w=1974&auto=format&fit=crop', description: 'Street cricket event.', formLink: 'https://forms.gle/FYZnVtbfFMXnVfoG6', comingSoon: false },
    { title: 'Checkmate Clash', image: 'https://i.postimg.cc/2Sh7hB6y/Whats-App-Image-2025-09-20-at-14-07-44-0c6a75a1.jpg', description: 'Chess tournament.', formLink: 'https://forms.gle/CZQdsSx4RzujqApN8', comingSoon: false },
     { title: 'Power Throw', image: 'https://i.postimg.cc/x816PjZ7/IMG-20250920-WA0023.jpg', description: 'Throw ball contest.', formLink: 'https://forms.gle/tRdRZDu25MZhJCVt7', comingSoon: false },
    { title: 'Striker Shots', image: 'https://images.unsplash.com/photo-1652558973183-a3f046921163?q=80&w=2081&auto=format&fit=crop', description: 'Carrom board competition.', formLink: 'https://forms.gle/54RgfxgosCAW1fVc8', comingSoon: false },
    { title: 'Rope Rumble', image: 'https://i.postimg.cc/rpGgXtX3/IMG-20250920-WA0019.jpg', description: 'Tug of war competition.', formLink: 'https://forms.gle/HAz6LAmUVeHXhHjk8', comingSoon: false},
    { title: 'Zesty Race', image: 'https://m.media-amazon.com/images/I/71oJ4Nl22OL._UF350,350_QL80_.jpg', description: 'Fun relay or sprint race (girls only).', formLink: 'https://forms.gle/ED8z1YeaUSVeLtPk7', comingSoon: false },
    { title: 'Chair Chase', image: 'https://i.postimg.cc/3JyBrqQg/IMG-20250920-WA0016.jpg', description: 'Musical chair game (girls only).', formLink: 'https://forms.gle/ED8z1YeaUSVeLtPk7', comingSoon: false},
    { title: "Smash n' Dash", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRnKM7rn9bIKH2g_28DbaISKrGomLfBTpPQ&s', description: 'Badminton matches.', formLink: 'https://forms.gle/hsYxTVY1qptfVmYj6', comingSoon: false }
  ];

 const RenderCard = ({ event }) => {
  const isSoon = !!event.comingSoon;
  const isHot = !!event.hot;

  return (
    <div
      className={`event-card ${isSoon ? "is-coming-soon" : ""} ${
        isHot ? "hot-event" : ""
      }`}
    >
      {/* 🔥 Hot Event Badge */}
      {isHot && (
        <div className="event-badge" aria-hidden="true">
          🔥 Hot Event
        </div>
      )}

      {/* IMAGE area */}
      <div className="event-visual">
        <img
          src={
            event.image ||
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          }
          alt={event.title}
          onError={handleImageError}
        />
      </div>

      {/* BELOW IMAGE */}
      <div className="event-meta">
        {/* Title */}
        <h4 className="event-title">{event.title}</h4>

        {/* For HOT events show prize heading */}
        {isHot && event.prize && (
          <h3 className="prize-heading">
            Winning Prize{" "}
            <span className="prize-amount">{event.prize}</span>
          </h3>
        )}

        {/* Optional prize tail (like goodies/mementos) */}
        {isHot && event.prizeTail && (
          <div className="prize-tail">{event.prizeTail}</div>
        )}

        {/* Urgency line for hot events */}
        {isHot && (
          <div className="register-hint">
           This Event is Open for All Branches! Click on Register button to know more  
          </div>
        )}

        {/* Description (hidden for hot if you want) */}
        {!isHot && <p className="event-desc">{event.description}</p>}

        {/* Register Button */}
        <div className="actions-row">
          {!isSoon ? (
            <a
              className="register-btn"
              href={normalizeUrl(event.formLink)}
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              aria-label={`Register for ${event.title}`}
            >
              {event.cta || "Register Now"}
            </a>
          ) : (
            <button
              className="register-btn disabled"
              aria-disabled="true"
              tabIndex={-1}
            >
              Register
            </button>
          )}
        </div>
      </div>

      {/* COMING SOON Overlay */}
      {isSoon && (
        <div className="coming-soon-overlay">
          <span>Coming Soon</span>
        </div>
      )}
    </div>
  );
};
  const MobileView = () => (
    <>
      <div ref={boysEventsRef} className="events-section">
        <h2>Boys Sports Events</h2>
        <div className="event-list">
          {boysEvents.map((ev, i) => <RenderCard key={i} event={ev} />)}
        </div>
      </div>

      <div ref={girlsEventsRef} className="events-section">
        <h2>Girls Sports Events</h2>
        <div className="event-list">
          {girlsEvents.map((ev, i) => <RenderCard key={i} event={ev} />)}
        </div>
      </div>
    </>
  );

  const DesktopView = () => (
    <>
      <div ref={boysEventsRef} className="events-section">
        <h2>Boys Sports Events</h2>
        <button className="scroll-btn" onClick={() => scrollToSection(girlsEventsRef)}>Go to Girls Events ↓</button>
        <div className="event-list">{boysEvents.map((ev, i) => <RenderCard key={i} event={ev} />)}</div>
      </div>

      <div ref={girlsEventsRef} className="events-section">
        <h2>Girls Sports Events</h2>
        <button className="scroll-btn" onClick={() => scrollToSection(boysEventsRef)}>Go to Boys Events ↑</button>
        <div className="event-list">{girlsEvents.map((ev, i) => <RenderCard key={i} event={ev} />)}</div>
      </div>
    </>
  );

  return (
    <>
      <Navbar />
      <div className="container">
        {isMobile ? <MobileView /> : <DesktopView />}
      </div>
    </>
  );
};

export default Sports;