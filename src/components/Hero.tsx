import React, { useState } from 'react';
import { Terminal, ArrowRight, Download } from 'lucide-react';
import { bioData, contactInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'runtime' | 'projects' | 'env'>('runtime');

  return (
    <section className="section hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column */}
          <div className="hero-content">
            <div className="status-pill">
              <span className="status-dot"></span>
              <span>AI/ML Intern @ FlyRank &middot; Amazon ML Summer School</span>
            </div>

            <h1 className="hero-title">
              <span className="title-accent">{bioData.name}</span>
            </h1>

            <p className="hero-role-line">{bioData.role}</p>

            <p className="hero-subtitle">{bioData.shortIntro}</p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>See Projects</span>
                <ArrowRight size={16} />
              </a>
              <a
                href={contactInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Download size={16} />
                <span>Resume (PDF)</span>
              </a>
              <a href="#contact" className="btn btn-outline">
                <span>Get in Touch</span>
              </a>
            </div>

            <div className="hero-metrics-strip">
              <div className="metric-item">
                <span className="metric-value">Top 75</span>
                <span className="metric-label">Amazon HackOn Season 6</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">Trainee</span>
                <span className="metric-label">Amazon ML Summer School</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">6</span>
                <span className="metric-label">Projects on GitHub</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">B.Tech</span>
                <span className="metric-label">CSE (AI &amp; ML), GEHU</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Profile Console */}
          <div className="hero-console">
            <div className="console-header">
              <div className="console-dots">
                <span className="console-dot red"></span>
                <span className="console-dot yellow"></span>
                <span className="console-dot green"></span>
              </div>
              <span className="console-title">samar@gehu:~</span>
              <Terminal size={14} style={{ opacity: 0.6 }} />
            </div>

            <div className="console-tabs">
              <button
                type="button"
                className={`console-tab ${activeTab === 'runtime' ? 'active' : ''}`}
                onClick={() => setActiveTab('runtime')}
              >
                profile.json
              </button>
              <button
                type="button"
                className={`console-tab ${activeTab === 'projects' ? 'active' : ''}`}
                onClick={() => setActiveTab('projects')}
              >
                projects.json
              </button>
              <button
                type="button"
                className={`console-tab ${activeTab === 'env' ? 'active' : ''}`}
                onClick={() => setActiveTab('env')}
              >
                stack.json
              </button>
            </div>

            <div className="console-body">
              {activeTab === 'runtime' && (
                <div>
                  <div className="console-row">
                    <span className="console-key">name:</span>
                    <span className="console-val highlight">"Samar Jamal"</span>
                  </div>
                  <div className="console-row">
                    <span className="console-key">university:</span>
                    <span className="console-val">"Graphic Era Hill University, Dehradun"</span>
                  </div>
                  <div className="console-row">
                    <span className="console-key">degree:</span>
                    <span className="console-val">"B.Tech CSE (AI & ML Specialization)"</span>
                  </div>
                  <div className="console-row">
                    <span className="console-key">current_role:</span>
                    <span className="console-val cyan">"AI/ML Intern @ FlyRank"</span>
                  </div>
                  <div className="console-row">
                    <span className="console-key">training:</span>
                    <span className="console-val amber">"Machine Learning Trainee @ Amazon ML Summer School"</span>
                  </div>
                  <div className="console-row">
                    <span className="console-key">location:</span>
                    <span className="console-val">"Dehradun, India"</span>
                  </div>
                  <div className="console-row">
                    <span className="console-key">github:</span>
                    <span className="console-val">"github.com/Samarjamal326"</span>
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div>
                  <div className="console-row">
                    <span className="console-key">payback:</span>
                    <span className="console-val highlight">"XGBoost + Razorpay payment recovery"</span>
                  </div>
                  <div className="console-row">
                    <span className="console-key">mediscan_ai:</span>
                    <span className="console-val">"Gemini + Pinecone medical RAG"</span>
                  </div>
                  <div className="console-row">
                    <span className="console-key">disaster_sim:</span>
                    <span className="console-val cyan">"OpenEnv RL + Qwen2.5-72B (0.884)"</span>
                  </div>
                  <div className="console-row">
                    <span className="console-key">ieee_challenge:</span>
                    <span className="console-val">"EfficientNet-B2 classifier, 397 classes"</span>
                  </div>
                  <div className="console-row">
                    <span className="console-key">senselink:</span>
                    <span className="console-val amber">"ESP32 + YOLO real-time assistive IoT"</span>
                  </div>
                  <div className="console-row">
                    <span className="console-key">medi_orchestrator:</span>
                    <span className="console-val">"Multi-agent clinical routing + Qdrant"</span>
                  </div>
                </div>
              )}

              {activeTab === 'env' && (
                <div>
                  <div className="console-row">
                    <span className="console-key">languages:</span>
                    <span className="console-val">"Python, C/C++, Java, JavaScript, TypeScript"</span>
                  </div>
                  <div className="console-row">
                    <span className="console-key">ml_stack:</span>
                    <span className="console-val highlight">"PyTorch, TensorFlow, Scikit-learn, NumPy"</span>
                  </div>
                  <div className="console-row">
                    <span className="console-key">llm_tools:</span>
                    <span className="console-val cyan">"LangChain, Hugging Face, Pinecone, Qdrant"</span>
                  </div>
                  <div className="console-row">
                    <span className="console-key">cv_stack:</span>
                    <span className="console-val">"YOLO, OpenCV, Edge AI Inference"</span>
                  </div>
                  <div className="console-row">
                    <span className="console-key">backend:</span>
                    <span className="console-val amber">"FastAPI, Django, Node.js, PostgreSQL"</span>
                  </div>
                  <div className="console-row">
                    <span className="console-key">infra:</span>
                    <span className="console-val">"Git, Docker, Vercel, AWS, Google Cloud"</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
