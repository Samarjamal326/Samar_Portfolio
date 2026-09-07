import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-brand">Samar Jamal &middot; AI/ML Systems Builder</div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Samar Jamal.
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-time-badge">
            <Clock size={13} color="#10B981" />
            <span>IST (UTC+5:30): {time || 'Loading...'}</span>
          </div>

          <button
            type="button"
            className="btn btn-secondary btn-sm btn-mono"
            onClick={scrollToTop}
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
