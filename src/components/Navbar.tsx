import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Stack', href: '#stack' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-brand">
          <span>Samar Jamal</span>
          <span className="brand-tag">AI / ML</span>
        </a>

        {/* Desktop Navigation */}
        <nav>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <a
            href={contactInfo.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm btn-mono"
          >
            <FileText size={14} />
            <span>Resume</span>
            <ArrowUpRight size={13} style={{ opacity: 0.7 }} />
          </a>

          <button
            type="button"
            className="nav-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="nav-mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={contactInfo.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm btn-mono"
            style={{ marginTop: '8px' }}
          >
            <FileText size={15} />
            <span>Download Resume PDF</span>
          </a>
        </div>
      )}
    </header>
  );
};
