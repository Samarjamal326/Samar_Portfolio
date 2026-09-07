import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Work &amp; Programs</span>
          <h2 className="section-title">Experience.</h2>
          <p className="section-desc">
            Industry internships and competitive ML training programs.
          </p>
        </div>

        <div className="timeline-container">
          {experienceData.map((item) => (
            <div key={item.id} className={`timeline-entry ${item.current ? 'active' : ''}`}>
              <div className="timeline-bullet">
                <Briefcase size={18} />
              </div>

              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-org">{item.company}</div>
                  </div>
                  {item.current && (
                    <span className="badge badge-emerald">
                      Active Role
                    </span>
                  )}
                </div>

                <div className="timeline-meta">
                  <span className="timeline-date">
                    <Calendar size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
                    {item.period}
                  </span>
                  <span className="timeline-date">
                    <MapPin size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
                    {item.location}
                  </span>
                  <span className="badge badge-mono">{item.type}</span>
                </div>

                <ul className="timeline-bullets">
                  {item.highlights.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '1.25rem' }}>
                  {item.skills.map((skill) => (
                    <span key={skill} className="badge badge-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
