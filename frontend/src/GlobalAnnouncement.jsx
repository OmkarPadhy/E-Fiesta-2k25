import React, { useEffect, useState, useCallback } from 'react';
import './announcement.css';

const GlobalAnnouncement = () => {
  const [open, setOpen] = useState(true); // show on every load

  const close = useCallback(() => setOpen(false), []);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  if (!open) return null;

  return (
    <div className="ece-modal-backdrop" onClick={close} role="dialog" aria-modal="true">
      <div className="ece-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ece-close" aria-label="Close announcement" onClick={close}>×</button>

        <div className="ece-kicker">📣 Important Update</div>
        <h3 className="ece-title">
          The Annual Grand Fest of Department of ECE has been <span className="ece-highlight">rescheduled to 29th & 30th November 2025</span>
          <br /> 
        </h3>

        <div className="ece-body">
          <p>We’re taking this time to make the event bigger, better, and more memorable.
Stay tuned for an electrifying celebration — see you soon!
          </p>
          <p>
          </p>
        </div>

        <div className="ece-footer">
          <button className="ece-cta" onClick={close}>Got it</button>
        </div>
      </div>
    </div>
  );
};

export default GlobalAnnouncement;