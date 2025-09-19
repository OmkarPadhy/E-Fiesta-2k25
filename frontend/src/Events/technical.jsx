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
      formLink: 'https://forms.gle/iomDEEsvuWrHgok67',
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
      title: 'Track-O-Bot',
      image: 'https://images.unsplash.com/photo-1669023414180-4dcf35d943e1?q=80&w=1932&auto=format&fit=crop',
      description: 'Line follower / maze-solving robot competition.',
      formLink: '#',
      comingSoon: true,
    },
    {
      title: 'Gizmo Expo',
      image: 'https://images.unsplash.com/photo-1527356900876-cae61d8d8462?q=80&w=2076&auto=format&fit=crop',
      description: 'Showcase innovative gadgets, prototypes, and mini-projects.',
      formLink: 'https://forms.gle/YOUR_FORM_LINK_4',
      comingSoon: true,
    },
    {
      title: 'Task Master',
      image: 'https://ai.thestempedia.com/wp-content/uploads/2023/05/Soccer-Robot-Cover.jpg',
      description: 'Robo-soccer where bots compete to score goals.',
      formLink: 'https://forms.gle/SmS6QtMfSGV9T9oh8',
      comingSoon: false,
      hot: true, cta: 'Register Now', prize: '₹5,000 + memento',
      date: '22nd September, 2025'
    },
    {
      title: 'Sand Rover',
      image: 'https://i0.wp.com/roboticsindia.live/wp-content/uploads/2021/03/SAVE_20210324_194657.jpg?resize=800%2C450&ssl=1',
      description: 'Robo-war / combat robot event.',
      formLink: 'https://forms.gle/DKC6NKhxDzcQpAx8A',
      comingSoon: false,
      hot: true, cta: 'Register Now', prize: '₹5,000 + memento',
      date: '23nd September, 2025'
    },
    {
      title: 'Line Follower',
      image: 'https://i.ytimg.com/vi/x6S3Y9PMUVs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBzoDEIURLrMwQMfJluzdmlzrH6tQ',
      description: 'Rover design challenge (individual).',
      formLink: '#',
      comingSoon: true,
    },
    {
      title: 'PowerPlay Proteus',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQedQHm0tG2AkKpIUrLJCrBv5kYvpdnZZ-btA&s',
      description: 'Simulation / design event using Proteus software.',
      formLink: 'https://forms.gle/AKXhUzbztduv6jp97',
      comingSoon: false,
    },
    {
      title: 'Poster Jam',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop',
      description: 'Create and present posters on innovative technical ideas within a limited time.',
      formLink: 'https://forms.gle/keTWrqUsrHZdttbG7',
      comingSoon: true,
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
          <span>Coming Soon</span>
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