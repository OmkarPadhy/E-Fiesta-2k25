import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faSnapchat, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../Navbar';
import './Developer.css'; // Import the CSS file

const Developer = () => {
  const developers = [
    {
      name: 'Kumar Prasannajit Sahu',
      designation: 'Full Stack Developer',
      image: 'https://i.postimg.cc/ht48wzF1/img.jpg',
      linkedin: 'https://www.linkedin.com/in/kumar-prasannajit-sahu',
      snapchat: 'https://www.snapchat.com/add/ashwini_biswal',
      twitter: 'https://twitter.com/KumarSahu',
    },
    {
      name: 'Nikhil Kumar',
      designation: 'Full Stack Developer',
      image: 'https://i.postimg.cc/Nfk7p8n0/nikhil.jpg',
      linkedin: 'https://www.linkedin.com/in/nikhil-kumar-69594127b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/_nikhilsingh25?igsh=MW4yMGJoMWdyaWJjaQ==',
      snapchat: null,
      twitter: null,
    },
    {
      name: 'Omkar Priyadarshi Padhy',
      designation: 'Full Stack Developer',
      image: 'https://i.postimg.cc/bYmKRBc4/Om.jpg',
      linkedin: 'www.linkedin.com/in/omkar-priyadarshi-padhy',
      instagram: 'https://www.instagram.com/ever_next45/',
      snapchat: null,
      twitter: null,
    },
    {
      name: 'Aryan Kumar',
      designation: 'Backend Developer',
      image: 'https://i.postimg.cc/zDh4S4DC/aryan.jpg',
      linkedin: 'https://www.linkedin.com/in/aryan-kumar-0bb8a8276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: null,
      snapchat: null,
      twitter: null,
    },
    {
      name: 'Kothakota Sidhardha',
      designation: 'Frontend Developer',
      image: 'https://i.postimg.cc/hGfLDktJ/sidhu.jpg',
      linkedin: 'https://www.linkedin.com/in/kothakota-sidhardha-27ba002b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/sidhardha.sidhu/profilecard/?igsh=MWo4YXMxMzFqbHJxbw==',
      snapchat: null,
      twitter: null,
    },
    
    {
      name: 'Bhubaneswar Sahu',
      designation: 'Frontend Developer',
      image: 'https://i.postimg.cc/4NWwXbQS/bbsr.jpg',
      linkedin: 'https://www.linkedin.com/in/bhubaneswar-sahu-355652308/',
      instagram: 'https://www.instagram.com/milan_.05._/',
      snapchat: null,
      twitter: null,
    }
  ];

  return (
    <div className="developer-page">
      <Navbar />
      <h2 className="team-heading">MEET OUR TEAM</h2>
      <div className="team-grid">
        {developers.map((developer, index) => (
          <div className="member-card" key={index}>
            <img src={developer.image} alt={developer.name} className="member-image" />
            <h3 className="member-name">{developer.name}</h3>
            <p className="member-designation">{developer.designation}</p>
            <div className="social-icons">
              {developer.linkedin && (
                <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              )}
              {developer.instagram && (
                <a href={developer.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              )}
              {developer.snapchat && (
                <a href={developer.snapchat} target="_blank" rel="noopener noreferrer" title="Snapchat">
                  <FontAwesomeIcon icon={faSnapchat} />
                </a>
              )}
              {developer.twitter && (
                <a href={developer.twitter} target="_blank" rel="noopener noreferrer" title="X">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developer;
