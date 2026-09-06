/**
 * Samar Jamal - Portfolio Landing Page Script
 * 
 * This file handles simple dynamic interactions for the portfolio:
 * 1. Automatically setting the current year in the footer.
 * 2. Adding a gentle mouse-following spotlight glow over the card.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year Update
  // Automatically keeps the footer copyright year up to date.
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // 2. Interactive Spotlight Glow Effect
  // Tracks the cursor position over the card and updates CSS variables
  // so the subtle highlight gradient follows the mouse.
  const card = document.getElementById('portfolioCard');
  if (card) {
    card.addEventListener('mousemove', (event) => {
      // Get the bounding box of the card (position relative to viewport)
      const rect = card.getBoundingClientRect();
      
      // Calculate cursor position inside the card (in pixels)
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Update the CSS variables on the card
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  }

  // Friendly greeting in the developer console
  console.log(
    "%c Samar Jamal %c AI & Machine Learning Student ",
    "background: #6366f1; color: white; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;",
    "background: #1e293b; color: #38bdf8; padding: 4px 8px; border-radius: 0 4px 4px 0;"
  );
});
