import React from 'react';
import Navbar from '../Navbar';
import './events.css';

const NonTech = () => {
  const handleImageError = (e) => {
    e.target.src = '/placeholder.jpg';
  };

  const normalizeUrl = (url) => {
    if (!url) return '#';
    if (/^(https?:\/\/|mailto:|tel:)/i.test(url)) return url;
    return `https://${url}`;
  };

  const events = [
    {
      title: 'Xplore Quest',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurEiFw4C5V40uAyA-VBQJwH0id1KRzVW3eg&s',
      description: 'Treasure hunt with logical and fun tasks.',
      formLink: 'https://forms.gle/v58YY3LxjfWuUDRf8',
      comingSoon: false
    },
    {
      title: 'BGMI',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlfdp9p1PTPt4Br9EEsrEic70YBF-gxlmwg&s',
      description: 'Mobile gaming competition.',
      formLink: 'https://forms.gle/nJTzwd7m9yFkEe8P8',
      comingSoon: false
    },
    {
      title: 'Garena Free Fire',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbd6CYFvIaGJR7eWiE8C5O90bTBcrs9OUmcw&s',
      description: 'Mobile gaming competition.',
      formLink: 'https://forms.gle/xjYi3SMRUvVrN64V7',
      comingSoon: false
    },
    {
      title: 'Call of Duty Mobile',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1z3tix-iwsfOunz9g4IgwYkBShNTTXFM0w&s',
      description: 'Mobile gaming competition.',
      formLink: 'https://forms.gle/TFAC9AhTSkyNPjf68',
      comingSoon: false
    },
    {
      title: 'Henna Hues',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4V3jjaAC4njsW8m5rvLVE9vgg6HA4jVHCA&s',
      description: 'Creative mehendi/henna art contest.',
      formLink: 'https://forms.gle/CVJnBh8iEJm2HHPy8',
      comingSoon: false
    },
    {
      title: 'Color Splash',
      image: 'https://t4.ftcdn.net/jpg/06/00/22/85/360_F_600228506_xWL2u0Qr8zq0MJFMLyfxNbB02ztObnD0.jpg',
      description: 'Rangoli or creative coloring/design contest.',
      formLink: 'https://forms.gle/DqEjEBDffu2BQS8Y6',
      comingSoon: false
    },
    {
      title: 'Clay Craze',
      image: 'https://m.media-amazon.com/images/I/717B0FsK5VL._UF350,350_QL80_.jpg',
      description: 'Clay modeling and sculpture event.',
      formLink: '#',
      comingSoon: true
    },
    {
      title: 'Crafty Cards',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjJLydjV1UWMU-fXwHHkgiZuDTkKJ-ET1Gg&s',
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtkEbvRFv8BRi2nN2Iy0t1_iU2YwNH-aWyg&s',
      description: 'Drawing/painting competition.',
      formLink: 'https://forms.gle/sDEE8vmrq1GZ9pj99',
      comingSoon: false
    },
    {
      title: 'MindTray Challenge',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLe3kuPZTDn76kyB_-ITm2UIBg2RYnEK4zZA&s',
      description: 'Puzzle-solving, riddles, or logical reasoning games.',
      formLink: '#',
      comingSoon: true
    },
    {
      title: 'ShutterUp',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGepdAwjoHMUOYLULFGtgFl8OeTBJdwBCrxw&s',
      description: 'Photography contest.',
      formLink: '#',
      comingSoon: true
    },
    {
      title: 'CineCraze',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbg61sUYl8tON24KxoP02VJg8a4J_1kBDTWA&s',
      description: 'Movie quiz, dubbing, or short film contest.',
      formLink: '#',
      comingSoon: true
    },
    {
      title: 'Valorant',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNx1L9EcNy1zZo6qUExYPdEAeVs0ZBHH7YGg&s',
      description: 'PC gaming event (e.g., BGMI, Valorant, etc.).',
      formLink: '#',
      comingSoon: true
    },
    {
      title: 'Trash to Treasure',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1974&auto=format&fit=crop',
      description: 'Best out of waste creativity challenge.',
      formLink: 'https://forms.gle/yfnoYVJ33XKdzMyY6',
      comingSoon: false
    }
  ];

  const RenderCard = ({ event }) => {
    const isSoon = !!event.comingSoon;

    const overlayStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 9999,
      pointerEvents: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px 14px',
      borderRadius: '8px',
      fontWeight: 700,
      fontSize: '1rem',
      color: '#fff',
      background: 'rgba(0,0,0,0.7)'
    };

    const disabledBtnStyle = {
      background: 'rgba(255,255,255,0.06)',
      color: 'rgba(255,255,255,0.6)',
      border: '1px solid rgba(255,255,255,0.04)',
      cursor: 'default',
      pointerEvents: 'none'
    };

    return (
      <div className={`event-card ${isSoon ? 'is-coming-soon' : ''}`} style={{ position: 'relative' }}>
        <img src={event.image} alt={event.title} onError={handleImageError} />
        <h4 className="event-title">{event.title}</h4>
        <p>{event.description}</p>
        {!isSoon ? (
          <a
            className="register-btn"
            href={normalizeUrl(event.formLink)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </a>
        ) : (
          <button className="register-btn disabled" style={disabledBtnStyle} aria-disabled="true">
            Register
          </button>
        )}
        {isSoon && <div className="coming-soon-label" style={overlayStyle}>Coming Soon</div>}
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