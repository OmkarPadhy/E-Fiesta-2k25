import React from 'react';
import Navbar from '../Navbar';
import './events.css';

const Technical = () => {
  const handleImageError = (e) => {
    e.target.src = '/placeholder.jpg';
  };

  // Events list: first 5 are open for registration, the rest are "coming soon"
  const events = [
    {
      title: 'TechSpark: Ignite Ideas',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
      description: 'Idea pitching and presentation competition.',
      formLink: '#',
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

    // The rest -> Coming Soon
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
      title: 'Goal-O-Bot',
      image: 'https://ai.thestempedia.com/wp-content/uploads/2023/05/Soccer-Robot-Cover.jpg',
      description: 'Robo-soccer where bots compete to score goals.',
      formLink: '#',
      comingSoon: true,
    },
    {
      title: 'Bot Bash',
      image: 'https://i0.wp.com/roboticsindia.live/wp-content/uploads/2021/03/SAVE_20210324_194657.jpg?resize=800%2C450&ssl=1',
      description: 'Robo-war / combat robot event.',
      formLink: '#',
      comingSoon: true,
    },
    {
      title: 'Sand Rover',
      image: 'https://i.ytimg.com/vi/x6S3Y9PMUVs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBzoDEIURLrMwQMfJluzdmlzrH6tQ',
      description: 'Rover design challenge (individual).',
      formLink: '#',
      comingSoon: true,
    },
    {
      title: 'PowerPlay Proteus',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQedQHm0tG2AkKpIUrLJCrBv5kYvpdnZZ-btA&s',
      description: 'Simulation / design event using Proteus software.',
      formLink: '#',
      comingSoon: true,
    },
    {
      title: 'Poster Jam',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop',
      description: 'Create and present posters on innovative technical ideas within a limited time.',
      formLink: 'https://forms.gle/keTWrqUsrHZdttbG7',
      comingSoon: true
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Technical Events</h2>

        <div className="event-list">
          {events.map((event, idx) => {
            const isSoon = !!event.comingSoon;
            return (
              <div key={idx} className={`event-card ${isSoon ? 'is-coming-soon' : ''}`}>
                {/* Visual area (image) */}
                <div className="event-visual">
                  <img src={event.image} alt={event.title} onError={handleImageError} />
                </div>

                {/* Meta (title / description / button) */}
                <div className="event-meta">
                  <h4 className="event-title">{event.title}</h4>
                  <p className="event-desc">{event.description}</p>

                  {!isSoon ? (
                    <a href={event.formLink} target="_blank" rel="noopener noreferrer">
                      <button className="register-btn">Register</button>
                    </a>
                  ) : (
                    <button className="register-btn disabled" aria-disabled="true" tabIndex={-1}>
                      Register
                    </button>
                  )}
                </div>

                {/* Coming Soon overlay - outside blurred area so it remains sharp */}
                {isSoon && (
                  <div className="coming-soon-overlay">
                    <span>Coming Soon</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Technical;
