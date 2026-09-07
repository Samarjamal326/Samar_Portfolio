import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ProjectInspectorModal } from './components/ProjectInspectorModal';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Project } from './types/portfolio';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'stack', 'credentials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-root">
      <Navbar activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <Projects onInspectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <TechStack />

        {/* Credentials Section containing Certifications & Achievements */}
        <section className="section" id="credentials">
          <div className="container">
            <Certifications />
            <Achievements />
          </div>
        </section>

        <Contact />
      </main>

      <Footer />

      {/* Project Inspector Modal */}
      <ProjectInspectorModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
