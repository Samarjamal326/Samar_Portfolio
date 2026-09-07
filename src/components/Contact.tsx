import React, { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, FileText, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-card">
          <span className="section-eyebrow" style={{ justifyContent: 'center' }}>Direct Contact</span>
          <h2 className="contact-title">Get in Touch.</h2>
          <p className="contact-desc">
            Feel free to reach out — whether about a project, an opportunity, or anything AI and ML related.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
            {/* Interactive Copy Email Box */}
            <div className="email-copy-wrapper">
              <Mail size={16} color="#10B981" />
              <span className="email-display-text">{contactInfo.email}</span>
              <button
                type="button"
                className="btn btn-secondary btn-sm btn-mono"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                style={{ marginLeft: '4px' }}
              >
                {copied ? (
                  <>
                    <Check size={14} color="#10B981" />
                    <span style={{ color: '#10B981' }}>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Metadata */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              <span>
                <MapPin size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} />
                {contactInfo.location}
              </span>
              <span>
                <Phone size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} />
                {contactInfo.phone}
              </span>
            </div>
          </div>

          {/* Direct Social & Action Links */}
          <div className="contact-links-grid">
            <a
              href={`mailto:${contactInfo.email}`}
              className="btn btn-primary"
            >
              <Mail size={16} />
              <span>Send Direct Email</span>
            </a>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
              <ArrowUpRight size={13} style={{ opacity: 0.7 }} />
            </a>

            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Github size={16} />
              <span>GitHub</span>
              <ArrowUpRight size={13} style={{ opacity: 0.7 }} />
            </a>

            <a
              href={contactInfo.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FileText size={16} />
              <span>Resume (PDF)</span>
              <ArrowUpRight size={13} style={{ opacity: 0.7 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
