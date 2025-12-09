import React from 'react';
import './postfest.css';

const PostFest = () => {
  return (
    <main className="pf-root" role="main" aria-labelledby="pf-title">
      <div className="pf-card">

        <div className="pf-grid">
          
          {/* LEFT TEXT BLOCK */}
          <div className="pf-left">
            <div className="pf-icon-row">
              <div className="pf-icon">🎉</div>
              <div>
                <h1 id="pf-title" className="pf-title">
                  E-Fiesta 2K25 Concluded Successfully
                </h1>
                <small className="pf-signer">Department of ECE • GIET University</small>
              </div>
            </div>

            <p className="pf-lead">
              Thank you to every participant, volunteer, coordinator and supporter for making 
              <strong> E-Fiesta 2K25 </strong> a vibrant and memorable celebration.  
              Your energy, creativity, and enthusiasm turned this fest into one of our finest editions ever.
            </p>

            <p className="pf-lead">
              Post-event photos, videos, winner highlights and recap content will be released shortly.  
              Stay connected for updates! 📸✨
            </p>

            <p className="pf-tags">
              Gratitude • Celebration • Memories • Highlights Incoming
            </p>
          </div>

          {/* RIGHT IMAGE BLOCK */}
          <div className="pf-right">
            <img 
              className="pf-logo"
              src="https://i.postimg.cc/yY1XvFR3/Department-Front-8x6ft-Banner.jpg"
              alt="E-Fiesta Logo"
            />
          </div>

        </div>
      </div>
    </main>
  );
};

export default PostFest;