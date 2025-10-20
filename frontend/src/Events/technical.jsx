import React from 'react';
import Navbar from '../Navbar';
import './events.css';

const Technical = () => {
  const handleImageError = (e) => {
    e.target.src = '/placeholder.jpg';
  };

  // helper: ensure URL has protocol
  const normalizeUrl = (url) => {
    if (!url) return '#';
    if (/^(https?:\/\/|mailto:|tel:)/i.test(url)) return url;
    return `https://${url}`;
  };

  // Events list: first 5 are open for registration, the rest are "coming soon"
  const events = [
    {
      title: 'TechSpark: Ignite Ideas',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
      description: 'Idea pitching and presentation competition.',
      formLink: 'https://forms.gle/tT6DUZDiVFvKddij7',
      comingSoon: false,
    },
    {
      title: 'Circuit Craze',
      image: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=1973&auto=format&fit=crop',
      description: 'Design, debug, or solve electronic circuits and challenges.',
      formLink: 'https://forms.gle/jorMmLbwmkvo8aXq8',
      comingSoon: false,
    },
    {
      title: 'Web Wizards',
      image: 'https://images.unsplash.com/photo-1574012716378-0ca6f4c18c08?q=80&w=2017&auto=format&fit=crop',
      description: 'Competition on web design and development skills.',
      formLink: 'https://forms.gle/WZAZ74JyDCDczWct8',
      comingSoon: false,
    },
    {
      title: 'Techno-Quiz',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop',
      description: 'Quiz on science, engineering, and current technology trends.',
      formLink: 'https://forms.gle/tLGT6cD5duLwj83G6',
      comingSoon: false,
    },
    {
      title: 'Gizmo Expo',
      image: 'https://i.postimg.cc/pXy0hTz5/IMG-20250920-WA0025.jpg',
      description: 'Showcase innovative gadgets, prototypes, and mini-projects.',
      formLink: 'https://forms.gle/tZA2QE3W5FS7qdEC7',
      comingSoon: false,
    },
    {
      title: 'Task Master',
      image: 'https://ai.thestempedia.com/wp-content/uploads/2023/05/Soccer-Robot-Cover.jpg',
      description: 'Robo-soccer where bots compete to score goals.',
      formLink: 'https://forms.gle/SmS6QtMfSGV9T9oh8',
      comingSoon: true,
      // hot: true, cta: 'Register Now', prize: 'Cashprizes + memento',
      // date: '22nd September, 2025'
    },
    {
      title: 'Sand Rover',
      image: 'https://i.ytimg.com/vi/x6S3Y9PMUVs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBzoDEIURLrMwQMfJluzdmlzrH6tQ',
      description: 'Robo-war / combat robot event.',
      formLink: 'https://forms.gle/DKC6NKhxDzcQpAx8A',
      comingSoon: true,
      // hot: true, cta: 'Register Now', prize: 'Cashprizes + memento',
      // date: '23nd September, 2025'
    },
    {
      title: 'Line Follower',
      image: 'https://quartzcomponents.com/cdn/shop/articles/line-follower-robot-using-arduino_750x.jpg?v=1671189499',
      description: 'Rover design challenge (individual).',
      formLink: 'https://forms.gle/eNK7NP4pNHtuYqGq5',
      comingSoon: false,
      // hot: true, cta: 'Register Now', prize: 'Cashprizes + memento',
      // date: '12th October, 2025'
    },
    {
      title: 'PowerPlay Proteus',
      image: 'https://i.postimg.cc/Kvd515mC/IMG-20250920-WA0015.jpg',
      description: 'Simulation / design event using Proteus software.',
      formLink: 'https://forms.gle/AKXhUzbztduv6jp97',
      comingSoon: false,
    },
    {
      title: 'VLSI Cadence Tool Competition',
      image: 'https://mms.businesswire.com/media/20230419005232/en/1767574/4/J15686_Virtuoso_SM_1080x1080_(1).jpg',
      description: 'VLSI design challenge using Cadence tools.',
      formLink: 'https://forms.gle/NyvLjSeJQydnSquz5',
      comingSoon: false,
    },
    {
      title: 'Xilinx Vivado Competition',
      image: 'https://iconape.com/wp-content/png_logo_vector/xilinx.png',
      description: 'FPGA design challenge using Xilinx Vivado.',
      formLink: 'https://forms.gle/rGUJP6ii85KdL8g47',
      comingSoon: false,
    },
  ];

  // Small, reusable card renderer similar to Sports RenderCard
  const RenderCard = ({ event }) => {
  const isSoon = !!event.comingSoon;
  const isHot = !!event.hot; // optional field supported
  return (
    <div
      className={[
        'event-card',
        isHot ? 'hot-event' : '',
        isSoon ? 'is-coming-soon coming-soon' : '',
      ].join(' ')}
      role="article"
      aria-hidden={isSoon}
    >
      {/* hot badge (optional) */}
      {isHot && (
        <div className="event-badge" aria-hidden="true">
          🔥 Hot Event
        </div>
      )}

      {/* coming soon overlay */}
      {isSoon && (
        <div className="coming-soon-overlay" aria-hidden="true">
          <span>Event Closed</span>
        </div>
      )}

      {/* IMAGE area */}
      <div className="event-visual">
        <img
          src={
            event.image ||
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
          }
          alt={event.title}
          onError={handleImageError}
        />
        {/* overlay title placed at bottom of image */}
        <div className="visual-overlay" aria-hidden="true">
          <h4 className="overlay-title">{event.title}</h4>
        </div>
      </div>

      {/* BELOW IMAGE */}
      <div className="event-meta">
        {/* Show event date only if it's not "#" */}
        {event.date && event.date !== "#" && (
          <div className="event-date" style={{ color: '#ffd966', fontWeight: 700 }}>
            📅 {event.date}
          </div>
        )}

        {/* Non-hot events show description */}
        {!isHot && <p className="event-desc">{event.description}</p>}

        {/* Hot events: prize info */}
        {isHot && event.prize && (
          <h3 className="prize-heading">
            Winning Prize <span className="prize-amount">{event.prize}</span>
          </h3>
        )}
        {isHot && event.prizeTail && <div className="prize-tail">{event.prizeTail}</div>}
        {isHot && (
          <div className="register-hint">
            This Event is Open for All Branches! Click on Register button to know more  
          </div>
        )}

        {/* Register button */}
        <div className="actions-row">
          {!isSoon ? (
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
            <button className="register-btn disabled" aria-disabled="true" tabIndex={-1}>
              Register
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

return (
  <>
    <Navbar />
    <div className="container">
      <h2>Technical Events</h2>
      <div className="event-list">
        {events.map((event, idx) => (
          <RenderCard key={idx} event={event} />
        ))}
      </div>
    </div>
  </>
);
};
export default Technical;