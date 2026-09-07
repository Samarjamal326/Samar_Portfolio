import React from 'react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <div>
      <div className="section-header">
        <span className="section-eyebrow">Honors &amp; Activities</span>
        <h3 className="section-title" style={{ fontSize: '2rem' }}>Achievements.</h3>
        <p className="section-desc">
          Hackathons, competitive selections, and club leadership.
        </p>
      </div>

      <div className="achievements-grid">
        {achievementsData.map((item) => (
          <div key={item.id} className="achievement-card">
            <div className="achievement-rank">{item.rank}</div>
            <div className="achievement-event">{item.title}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              {item.organizer} &middot; {item.year}
            </div>
            <p className="achievement-detail">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
