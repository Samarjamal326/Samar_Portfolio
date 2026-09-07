import React from 'react';
import { ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <div style={{ marginBottom: 'var(--space-4xl)' }}>
      <div className="section-header">
        <span className="section-eyebrow">Credentials</span>
        <h3 className="section-title" style={{ fontSize: '2rem' }}>Certifications.</h3>
        <p className="section-desc">
          Verified technical certifications and cloud programs.
        </p>
      </div>

      <div className="certs-grid">
        {certificationsData.map((cert) => (
          <div key={cert.id} className="cert-card">
            <div>
              <div className="cert-issuer">{cert.issuer}</div>
              <h4 className="cert-name">{cert.name}</h4>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
              <span className="badge badge-mono">{cert.date}</span>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-verify-link"
              >
                <span>Verify Credential</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
