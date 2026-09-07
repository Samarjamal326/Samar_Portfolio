import React, { useEffect } from 'react';
import { X, Github } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectInspectorModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectInspectorModal: React.FC<ProjectInspectorModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="project-category">{project.category}</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Inspector Modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Summary */}
          <div>
            <div className="inspector-section-title">// System Objective &amp; Approach</div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.65', fontSize: '0.9375rem' }}>
              {project.description}
            </p>
          </div>

          {/* Performance & Quantitative Benchmarks */}
          <div>
            <div className="inspector-section-title">// Quantitative Benchmarks &amp; Specs</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
              {project.keyMetrics.map((metric) => (
                <div
                  key={metric.label}
                  style={{
                    background: 'var(--bg-secondary)',
                    padding: '0.875rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--emerald)' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Topology */}
          <div>
            <div className="inspector-section-title">// Architecture Topology</div>
            <div className="architecture-diagram-block">
              <pre style={{ margin: 0, overflowX: 'auto', whiteSpace: 'pre' }}>{project.architecture.trim()}</pre>
            </div>
          </div>

          {/* Technical Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <div className="inspector-section-title">// Engineering Challenges &amp; Trade-offs</div>
              {project.challenges.map((challenge, idx) => (
                <div key={idx} className="challenge-card">
                  <div className="challenge-title">{challenge.title}</div>
                  <div className="challenge-desc">{challenge.solution}</div>
                </div>
              ))}
            </div>
          )}

          {/* Technology Dependencies */}
          <div>
            <div className="inspector-section-title">// Stack Dependencies</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.techStack.map((tech) => (
                <span key={tech} className="badge badge-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <Github size={15} />
              <span>Inspect Source on GitHub</span>
            </a>
            <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>
              Close Inspector
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
