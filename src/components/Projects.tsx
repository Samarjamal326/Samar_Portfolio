import React from 'react';
import { Github, Code2, Layers, ArrowRight } from 'lucide-react';
import { Project } from '../types/portfolio';
import { projectsData } from '../data/portfolioData';

interface ProjectsProps {
  onInspectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onInspectProject }) => {
  const flagshipProject = projectsData.find((p) => p.layoutType === 'flagship') || projectsData[0];
  const dualProjects = projectsData.filter((p) => p.layoutType === 'dual');
  const ledgerProjects = projectsData.filter((p) => p.layoutType === 'ledger');

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">GitHub Projects</span>
          <h2 className="section-title">Projects.</h2>
          <p className="section-desc">
            Machine learning systems, agent pipelines, and applied AI work from real repositories.
          </p>
        </div>

        <div className="projects-showcase">
          {/* Flagship Project: PayBack */}
          <div className="project-flagship">
            <div className="flagship-content">
              <div>
                <span className="project-category">{flagshipProject.category}</span>
                <h3 className="project-title">{flagshipProject.title}</h3>
                <p className="project-tagline">{flagshipProject.tagline}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                  {flagshipProject.description}
                </p>

                <div className="project-tech-list">
                  {flagshipProject.techStack.map((tech) => (
                    <span key={tech} className="project-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-footer-actions">
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => onInspectProject(flagshipProject)}
                >
                  <Code2 size={15} />
                  <span>Inspect Technical Architecture</span>
                </button>

                <a
                  href={flagshipProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <Github size={15} />
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            {/* Visual / Metrics Panel */}
            <div className="flagship-visual">
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--emerald)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  // System Performance Metrics
                </div>
                <div className="visual-stats-grid">
                  {flagshipProject.keyMetrics.map((metric) => (
                    <div key={metric.label} className="visual-stat-card">
                      <div className="visual-stat-value">{metric.value}</div>
                      <div className="visual-stat-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="visual-architecture-preview">
                <div style={{ color: '#64748B', marginBottom: '6px' }}># Ingestion &amp; Calibration Pipeline</div>
                <code>Razorpay Webhook &rarr; HMAC Verify &rarr; XGBoost + Isotonic Calib &rarr; ERV Decision &rarr; Postgres</code>
              </div>
            </div>
          </div>

          {/* Dual Grid: MediScan AI & Disaster Coordinator */}
          <div className="project-dual-grid">
            {dualProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div>
                  <div className="project-card-header">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-card-title">{project.title}</h3>
                  </div>

                  <p className="project-card-desc">{project.tagline}</p>

                  {/* Metrics Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    {project.keyMetrics.slice(0, 2).map((metric) => (
                      <div key={metric.label} style={{ background: 'var(--bg-secondary)', padding: '0.625rem 0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 700, color: 'var(--emerald)' }}>{metric.value}</div>
                        <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="project-tech-list">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span key={tech} className="project-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-footer-actions" style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => onInspectProject(project)}
                  >
                    <Layers size={14} />
                    <span>View Architecture</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Ledger Section Header */}
          <div>
            <div className="projects-ledger-title">// Additional Core Engineering Repositories</div>
            <div className="projects-ledger-grid">
              {ledgerProjects.map((project) => (
                <div key={project.id} className="ledger-card">
                  <div>
                    <span className="project-category" style={{ fontSize: '0.75rem' }}>{project.category}</span>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: '4px 0 8px' }}>
                      {project.title}
                    </h4>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '1rem' }}>
                      {project.tagline}
                    </p>

                    {/* Metrics badge */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
                      {project.keyMetrics.slice(0, 2).map((m) => (
                        <span key={m.label} className="badge badge-mono">
                          {m.label}: <strong style={{ color: 'var(--emerald)' }}>{m.value}</strong>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <button
                      type="button"
                      onClick={() => onInspectProject(project)}
                      style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      <span>Specs</span>
                      <ArrowRight size={12} />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}
                    >
                      <Github size={13} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
