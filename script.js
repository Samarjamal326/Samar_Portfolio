/**
 * Samar Jamal - Portfolio Landing Page Script
 * 
 * Clean, lightweight vanilla JavaScript covering:
 * 1. Mobile navigation menu toggle
 * 2. Automatic closing of mobile menu upon navigation
 * 3. Dynamic copyright year in the footer
 * 4. Scrollspy active link indicator in the navigation bar
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Dynamic Footer Year
  // Automatically keeps the copyright year current
  // --------------------------------------------------------------------------
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. Mobile Navigation Menu Toggle
  // Opens and closes the mobile dropdown menu on small screens
  // --------------------------------------------------------------------------
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close the mobile menu automatically when any navigation link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link, .btn');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          navToggle.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 3. Scrollspy Navigation Highlighting
  // Highlights the active section in the navigation bar as the user scrolls
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinksList = document.querySelectorAll('.nav-link');

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120; // 120px offset for header
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinksList.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });
  highlightNavOnScroll(); // Trigger once on initial load

  // --------------------------------------------------------------------------
  // Console Greeting
  // --------------------------------------------------------------------------
  console.log(
    '%c Samar Jamal %c AI & Machine Learning Student ',
    'background: #6366f1; color: white; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;',
    'background: #1e293b; color: #38bdf8; padding: 4px 8px; border-radius: 0 4px 4px 0;'
  );
});
