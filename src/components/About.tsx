import React from 'react';
import { GraduationCap, Briefcase, Award, Cpu } from 'lucide-react';
import { bioData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Background</span>
          <h2 className="section-title">About Me.</h2>
          <p className="section-desc">
            AI &amp; Machine Learning student at Graphic Era Hill University, Dehradun.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Column */}
          <div className="about-card about-bio">
            {bioData.overview.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Structured Spec Cards */}
          <div className="about-specs-list">
            <div className="about-spec-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <GraduationCap size={16} color="#10B981" />
                <span className="label">Education</span>
              </div>
              <div className="value">B.Tech in Computer Science (AI &amp; ML)</div>
              <div className="sub">Graphic Era Hill University &middot; Aug 2023 – Present</div>
            </div>

            <div className="about-spec-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Briefcase size={16} color="#10B981" />
                <span className="label">Current Role</span>
              </div>
              <div className="value">AI/ML Intern at FlyRank</div>
              <div className="sub">Remote &middot; Content-refresh ML workflows &amp; validation</div>
            </div>

            <div className="about-spec-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Award size={16} color="#10B981" />
                <span className="label">Training Program</span>
              </div>
              <div className="value">Amazon ML Summer School</div>
              <div className="sub">Machine Learning Trainee &middot; Deep Learning, RL, LLMs</div>
            </div>

            <div className="about-spec-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Cpu size={16} color="#10B981" />
                <span className="label">Technical Interests</span>
              </div>
              <div className="value">Machine Learning &middot; Computer Vision &middot; RL &middot; Applied AI</div>
              <div className="sub">PyTorch, OpenEnv, YOLO, FastAPI, RAG</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
