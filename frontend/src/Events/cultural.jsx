import React from 'react';
import Navbar from '../Navbar';
import './events.css';

const Cultural = () => {
  const handleImageError = (e) => {
    e.target.src = '/placeholder.jpg';
  };

  // simple URL normalizer (keeps '#' untouched)
  const normalizeUrl = (url) => {
    if (!url) return '#';
    if (/^(https?:\/\/|mailto:|tel:)/i.test(url)) return url;
    return `https://${url}`;
  };

  // All events marked comingSoon: true as requested
  const events = [
    {
      title: 'Singing',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop',
      description: 'Vocal showcase — solo singing competition (all genres).',
      formLink: 'https://forms.gle/xxeVqMrNsevmHPWz6',
      comingSoon: false
    },
    {
      title: 'Solo Dance',
      image: 'https://images.unsplash.com/photo-1520731884864-de08adaa59b0?q=80&w=2076&auto=format&fit=crop',
      description: 'Dance solo — perform contemporary or classical styles.',
      formLink: 'https://forms.gle/B6TTJMGVcDRG5vhB7',
      comingSoon: false
    },
    {
      title: 'Group Dance',
      image: 'https://images.unsplash.com/photo-1520694478166-daaaaec95b69?q=80&w=2070&auto=format&fit=crop',
      description: 'Choreographed group dance (any style).',
      formLink: 'https://forms.gle/UiRMGrhK5TVCG6KfA',
      comingSoon: false
    },
    {
      title: 'Style Stride (Ramp Show)',
      image: 'https://phenav.com/wp-content/uploads/2024/01/6F3A4916-scaled.jpg',
      description: 'Fashion/ramp walk and styling showcase.',
      formLink: 'https://forms.gle/jMhPYMp7V7HC8KZ98',
      comingSoon: false
    },
    {
      title: 'Laugh Riot (Stand-up / Mimicry)',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMhvYX0pM3EOV5MTDRN5KJCjzJIKH8iifFA&s',
      description: 'Stand-up comedy or mimicry — bring the laughs.',
      formLink: 'https://forms.gle/z7noNKSQMbzjbLHq9',
      comingSoon: false
    },
    {
      title: 'Crowd Craze (Open Stage)',
      image: 'https://img.freepik.com/premium-psd/open-stage-with-curtain_926121-798.jpg',
      description: 'Open-stage performances to engage the audience.',
      formLink: '#',
      comingSoon: true
    }
  ];

  const RenderCard = ({ event }) => {
    const isSoon = !!event.comingSoon;
    return (
      <div className={`event-card ${isSoon ? 'is-coming-soon' : ''}`}>
        <div className="event-visual">
          <img
            src={
              event.image ||
              'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
            }
            alt={event.title}
            onError={handleImageError}
          />
        </div>

        <div className="event-meta">
          <h4 className="event-title">{event.title}</h4>
          <p className="event-desc">{event.description}</p>

          {!isSoon ? (
            <a
              className="register-btn"
              href={normalizeUrl(event.formLink)}
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              aria-label={`Register for ${event.title}`}
            >
              Register
            </a>
          ) : (
            <button className="register-btn disabled" aria-disabled="true" tabIndex={-1}>
              Register
            </button>
          )}
        </div>

        {isSoon && (
          <div className="coming-soon-overlay">
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
        <h2>Cultural Events</h2>
        <div className="event-list">
          {events.map((ev, idx) => (
            <RenderCard key={idx} event={ev} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cultural;