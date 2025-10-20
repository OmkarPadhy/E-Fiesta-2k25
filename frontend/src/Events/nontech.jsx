import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../Navbar';
import './events.css';

const NonTech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleImageError = (e) => {
    e.target.src = '/placeholder.jpg';
  };

  const normalizeUrl = (url) => {
    if (!url) return '#';
    if (/^(https?:\/\/|mailto:|tel:)/i.test(url)) return url;
    return `https://${url}`;
  };

  // Keep original event data unchanged (as requested)
  const events = [
    {
      title: 'Xplore Quest',
      image: 'https://i.postimg.cc/8Cgw0m3L/IMG-20250920-WA0020.jpg',
      description: 'Treasure hunt with logical and fun tasks.',
      formLink: 'https://forms.gle/v58YY3LxjfWuUDRf8',
      comingSoon: false
    },
    
    {
      title: 'Garena Free Fire',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbd6CYFvIaGJR7eWiE8C5O90bTBcrs9OUmcw&s',
      description: 'Mobile gaming competition.',
      formLink: 'https://forms.gle/xjYi3SMRUvVrN64V7',
      comingSoon: false,
      // date: '21st October 2025', time: '5pm Onwards', venue: 'EC 01 and EC 02'
    },
    {
      title: 'Call of Duty Mobile',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1z3tix-iwsfOunz9g4IgwYkBShNTTXFM0w&s',
      description: 'Mobile gaming competition.',
      formLink: 'https://forms.gle/TFAC9AhTSkyNPjf68',
      comingSoon: false,
      // date: '22nd October 2025', time: '5pm Onwards', venue: 'EC 01 and EC 02'
    },
    {
      title: 'BGMI',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlfdp9p1PTPt4Br9EEsrEic70YBF-gxlmwg&s',
      description: 'Mobile gaming competition.',
      formLink: 'https://forms.gle/nJTzwd7m9yFkEe8P8',
      comingSoon: false,
      // date: '23rd October 2025', time: '5pm Onwards', venue: 'EC 01 and EC 02'
    },
    {
      title: 'Henna Hues',
      image: 'https://i.postimg.cc/QtXmXxjt/IMG-20250920-WA0011.jpg',
      description: 'Creative mehendi/henna art contest.',
      formLink: 'https://forms.gle/CVJnBh8iEJm2HHPy8',
      comingSoon: false
    },
    {
      title: 'Color Splash',
      image: 'https://i.postimg.cc/25YFw8bw/IMG-20250920-WA0031.jpg',
      description: 'Rangoli or creative coloring/design contest.',
      formLink: 'https://forms.gle/DqEjEBDffu2BQS8Y6',
      comingSoon: false
    },
    {
      title: 'Clay Craze',
      image: 'https://i.postimg.cc/m2qmQsyX/IMG-20250920-WA0017.jpg',
      description: 'Clay modeling and sculpture event.',
      formLink: 'https://forms.gle/d3pXXshfwny1dijC8',
      comingSoon: false
    },
    {
      title: 'Crafty Cards',
      image: 'https://i.postimg.cc/76s3w3Bs/IMG-20250920-WA0021.jpg',
      description: 'Handmade greeting/creative card competition.',
      formLink: 'https://forms.gle/HETu9oZ4TtTZiF7n6',
      comingSoon: false
    },
    {
      title: 'Beat the Tune',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQneNZiSKe8Z4QEX2HQNpBSw_mscmXQtWNiqw&s',
      description: 'Identify or mimic songs/music.',
      formLink: 'https://forms.gle/7WDeb4a8JqYrr5s9A',
      comingSoon: false
    },
    {
      title: 'Art Attack',
      image: 'https://i.postimg.cc/CMcPxDBV/IMG-20250920-WA0024.jpg',
      description: 'Drawing/painting competition.',
      formLink: 'https://forms.gle/sDEE8vmrq1GZ9pj99',
      comingSoon: false
    },
    // {
    //   title: 'MindTray Challenge',
    //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLe3kuPZTDn76kyB_-ITm2UIBg2RYnEK4zZA&s',
    //   description: 'Puzzle-solving, riddles, or logical reasoning games.',
    //   formLink: '#',
    //   comingSoon: true
    // },
    // {
    //   title: 'ShutterUp',
    //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGepdAwjoHMUOYLULFGtgFl8OeTBJdwBCrxw&s',
    //   description: 'Photography contest.',
    //   formLink: '#',
    //   comingSoon: true
    // },
    // {
    //   title: 'CineCraze',
    //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbg61sUYl8tON24KxoP02VJg8a4J_1kBDTWA&s',
    //   description: 'Movie quiz, dubbing, or short film contest.',
    //   formLink: '#',
    //   comingSoon: true
    // },
    // {
    //   title: 'Valorant',
    //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNx1L9EcNy1zZo6qUExYPdEAeVs0ZBHH7YGg&s',
    //   description: 'PC gaming event (e.g., BGMI, Valorant, etc.).',
    //   formLink: '#',
    //   comingSoon: true
    // },
    {
      title: 'Trash to Treasure',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1974&auto=format&fit=crop',
      description: 'Best out of waste creativity challenge.',
      formLink: 'https://forms.gle/yfnoYVJ33XKdzMyY6',
      comingSoon: false
    }
  ];

  // RenderCard mirrors the features used in Sports.jsx (comingSoon, hot, closed, overlay title, prize, date/time/venue)
  const RenderCard = ({ event }) => {
    const isSoon = !!event.comingSoon;
    const isHot = !!event.hot;
    const isClosed = !!event.closed;

    return (
      <div
        className={`event-card ${isSoon ? 'is-coming-soon' : ''} ${isHot ? 'hot-event' : ''} ${isClosed ? 'is-closed' : ''}`}
        style={{ position: 'relative' }}
        aria-hidden={isSoon}
      >
        {/* CLOSED visuals (strike + badge) */}
        {isClosed && (
          <>
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '-10%',
                top: '45%',
                width: '120%',
                height: '3px',
                background: 'linear-gradient(90deg, rgba(255,0,0,0.95), rgba(255,0,0,0.75))',
                transform: 'rotate(-3deg)',
                zIndex: 60,
                pointerEvents: 'none'
              }}
            />
            <div
              className="event-closed-badge"
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                zIndex: 70,
                background: 'linear-gradient(90deg,#ff4b4b,#ff2d2d)',
                color: 'white',
                padding: '6px 10px',
                borderRadius: '14px',
                fontWeight: 800,
                boxShadow: '0 6px 18px rgba(255,0,0,0.12)'
              }}
              aria-hidden="true"
            >
              Event Closed
            </div>
          </>
        )}

        {/* HOT badge (only if not closed) */}
        {isHot && !isClosed && (
          <div className="event-badge" aria-hidden="true">
            🔥 Hot Event
          </div>
        )}

        {/* IMAGE area */}
        <div className="event-visual">
          <img
            src={event.image}
            alt={event.title}
            onError={handleImageError}
          />

          {/* overlay title (bottom of image) — only place we show title to avoid duplicate titles */}
          <div className="visual-overlay" aria-hidden="true">
            <h4
              className="overlay-title"
              style={
                isClosed
                  ? {
                      margin: 0,
                      textDecoration: 'line-through',
                      textDecorationColor: 'rgba(255,0,0,0.95)',
                      textDecorationThickness: '3px',
                      color: 'rgba(255,120,120,0.95)'
                    }
                  : { margin: 0 }
              }
            >
              {event.title}
            </h4>
          </div>
        </div>

        {/* BELOW IMAGE meta */}
        <div className="event-meta">
          {/* DATE / TIME / VENUE - show only when provided and not '#' */}
          {(((event.date && event.date !== '#') || (event.time && event.time !== '#') || (event.venue && event.venue !== '#'))) && (
            <div className="event-info" style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: 6 }}>
              {event.date && event.date !== '#' && <div className="event-date">📅 {event.date}</div>}
              {event.time && event.time !== '#' && <div className="event-time">⏰ {event.time}</div>}
              {event.venue && event.venue !== '#' && <div className="event-venue">📍 {event.venue}</div>}
            </div>
          )}

          {/* prize / hot info (only if hot and not closed) */}
          {isHot && event.prize && !isClosed && (
            <h3 className="prize-heading">Winning Prize <span className="prize-amount">{event.prize}</span></h3>
          )}
          {isHot && event.prizeTail && !isClosed && <div className="prize-tail">{event.prizeTail}</div>}
          {isHot && !isClosed && <div className="register-hint">This Event is Open for All Branches! Click Register to know more</div>}

          {/* description (only when not hot and not closed) */}
          {!isHot && !isClosed && <p className="event-desc">{event.description}</p>}

          {/* CTA / Register button */}
          <div className="actions-row">
            {!isSoon && !isClosed ? (
              <a
                className="register-btn"
                href={normalizeUrl(event.formLink)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Register for ${event.title}`}
              >
                {event.cta || 'Register Now'}
              </a>
            ) : (
              <button
                className="register-btn disabled"
                aria-disabled="true"
                tabIndex={-1}
                style={
                  isClosed
                    ? { background: 'linear-gradient(90deg,#ff9a9a,#ff4b4b)', color: '#fff' }
                    : {}
                }
              >
                {isClosed ? 'Event Closed' : 'Register'}
              </button>
            )}
          </div>
        </div>

        {/* Coming soon overlay (kept crisp via your CSS) */}
        {isSoon && (
          <div className="coming-soon-overlay" aria-hidden="true">
            <span>Coming Soon</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Non-Technical Events</h2>
        <div className="event-list">
          {events.map((event, index) => (
            <RenderCard key={index} event={event} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NonTech;