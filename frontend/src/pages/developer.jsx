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
      instagram: 'https://www.instagram.com/kumarprasannajit_?igsh=MWU4aWFseHFrOHhucQ==',
      team: 'Full Stack Team'
    },
    {
      name: 'Kothakota Sidhardha',
      designation: 'Frontend Developer',
      image: 'https://i.postimg.cc/hGfLDktJ/sidhu.jpg',
      linkedin: 'https://www.linkedin.com/in/kothakota-sidhardha-27ba002b5',
      instagram: 'https://www.instagram.com/sidhardha.sidhu/',
      team: 'Frontend Team'
    },
    {
      name: 'Omkar Priyadarshi Padhy',
      designation: 'Full Stack Developer',
      image: 'https://i.postimg.cc/bYmKRBc4/Om.jpg',
      linkedin: 'www.linkedin.com/in/omkar-priyadarshi-padhy',
      instagram: 'https://www.instagram.com/ever_next45/',
      team: 'Full Stack Team'
    },
    {
      name: 'Aryan Kumar',
      designation: 'Backend Developer',
      image: 'https://i.postimg.cc/zDh4S4DC/aryan.jpg',
      linkedin: 'https://www.linkedin.com/in/aryan-kumar-0bb8a8276',
      team: 'Backend Team'
    },
    {
      name: 'Prakash Bhanja',
      designation: '',
      image: 'https://i.postimg.cc/VvJhkfSc/prakash.webp',
      // linkedin: 'https://www.linkedin.com/in/ashwini-kumar-biswal',
      // instagram: 'https://www.instagram.com/ashwiniece',
      // twitter: 'https://twitter.com/AshwiniKB',
      team: 'Design Team'
    },
    {
      name: 'Atithya Prakash Rout',
      designation: '',
      image: 'https://i.postimg.cc/j5p1CVyw/Atithya.jpg',
      // linkedin: 'https://www.linkedin.com/in/ashwini-kumar-biswal',
      // instagram: 'https://www.instagram.com/ashwiniece',
      // twitter: 'https://twitter.com/AshwiniKB',
      team: 'Design Team'
    },
    {
      name: 'Sanjay Kumar Mahapatra',
      designation: '',
      image: 'https://i.postimg.cc/k42rBFZZ/Sanjay.jpg',
      // linkedin: 'https://www.linkedin.com/in/ashwini-kumar-biswal',
      // instagram: 'https://www.instagram.com/ashwiniece',
      // twitter: 'https://twitter.com/AshwiniKB',
      team: 'Design Team'
    },
    {
      name: 'Anshuman Nepak',
      designation: '',
      image: 'https://i.postimg.cc/VsS16mP6/Ansuman.jpg',
      // linkedin: 'https://www.linkedin.com/in/ashwini-kumar-biswal',
      // instagram: 'https://www.instagram.com/ashwiniece',
      // twitter: 'https://twitter.com/AshwiniKB',
      team: 'Design Team'
    },
    {
      name: 'Stephan Pani',
      designation: '',
      image: 'https://i.postimg.cc/6q8zczCN/Whats-App-Image-2025-09-16-at-23-37-46-49d5a3cd.jpg',
      // linkedin: 'https://www.linkedin.com/in/bibek-baliarsingh-48507129b',
      // instagram: 'https://www.instagram.com/who_am_i_._00',
      team: 'Management Team'
    },
    {
      name: 'Ashutosh Jagdev',
      designation: '',
      image: 'https://i.postimg.cc/rFvZn6hZ/Whats-App-Image-2025-09-16-at-23-52-15-9fa3dd9c.jpg',
      // linkedin: 'https://www.linkedin.com/in/roshan-sethi-973a02346',
      // instagram: 'https://www.instagram.com/_insane_rider_93',
      // twitter: 'https://x.com/insane_rider_93',
      team: 'Management Team'
    },
    {
      name: 'Bhubaneswar Sahu',
      designation: 'Frontend Developer',
      image: 'https://i.postimg.cc/T3NV7nYd/IMG-20250420-WA0037.png',
      linkedin: 'https://www.linkedin.com/in/bhubaneswar-sahu-355652308',
      instagram: 'https://www.instagram.com/milan_.05._/',
      team: 'Frontend Team'
    },
    {
      name: 'Swagat Pradhan',
      designation: '',
      image: 'https://i.postimg.cc/kgQsT2RD/IMG-20250827-213752-1.jpg',
      // instagram: 'https://instagram.com/ashirbadsahu_',
      team: 'Management Team'
    },
    {
      name: 'Sambit Subhankar Sahoo',
      designation: '',
      image: 'https://i.postimg.cc/Y2N1c5qy/Whats-App-Image-2025-09-16-at-23-37-40-bcdaf2ab.jpg',
      // instagram: 'https://instagram.com/ashirbadsahu_',
      team: 'Management Team'
    }
  ];

  const teams = [
    'Full Stack Team',
    'Frontend Team',
    'Management Team',
    'Design Team'
  ];

  return (
    <div className="developer-page">
      <Navbar />
      <h2 className="team-heading">MEET OUR TEAM</h2>

      {teams.map((teamName) => (
        <div key={teamName} className="team-section">
          <h3 className="team-subheading">{teamName}</h3>
          <div className="team-grid">
            {developers
              .filter(dev => dev.team === teamName)
              .map((developer, index) => (
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
      ))}
    </div>
  );
};

export default Developer;
