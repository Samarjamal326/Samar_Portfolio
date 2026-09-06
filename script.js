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
  // 4. Contact Form Handler (Dynamic Feature)
  // Validates inputs, sends via asynchronous fetch to Formspree, and
  // displays clear inline success or error messages.
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('formSubmitBtn');

  if (contactForm && formStatus && submitBtn) {
    const nameInput = document.getElementById('formName');
    const emailInput = document.getElementById('formEmail');
    const messageInput = document.getElementById('formMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Email format validation helper (RFC compliant basic regex)
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    };

    // Helper to clear error state from an input
    const clearError = (input, errorElement) => {
      input.classList.remove('input-error');
      if (errorElement) errorElement.textContent = '';
    };

    // Clear errors when the user begins typing
    nameInput?.addEventListener('input', () => clearError(nameInput, nameError));
    emailInput?.addEventListener('input', () => clearError(emailInput, emailError));
    messageInput?.addEventListener('input', () => clearError(messageInput, messageError));

    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      // Reset alert status banner
      formStatus.hidden = true;
      formStatus.className = 'form-status-alert';
      formStatus.textContent = '';

      let hasErrors = false;

      // 1. Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('input-error');
        nameError.textContent = 'Please enter your name.';
        hasErrors = true;
      } else {
        clearError(nameInput, nameError);
      }

      // 2. Validate Email
      if (!emailInput.value.trim()) {
        emailInput.classList.add('input-error');
        emailError.textContent = 'Please enter your email address.';
        hasErrors = true;
      } else if (!isValidEmail(emailInput.value)) {
        emailInput.classList.add('input-error');
        emailError.textContent = 'Please enter a valid email address (e.g. name@domain.com).';
        hasErrors = true;
      } else {
        clearError(emailInput, emailError);
      }

      // 3. Validate Message
      if (!messageInput.value.trim()) {
        messageInput.classList.add('input-error');
        messageError.textContent = 'Please enter your message.';
        hasErrors = true;
      } else {
        clearError(messageInput, messageError);
      }

      // If validation fails, focus the first invalid input and stop
      if (hasErrors) {
        if (nameInput.classList.contains('input-error')) {
          nameInput.focus();
        } else if (emailInput.classList.contains('input-error')) {
          emailInput.focus();
        } else if (messageInput.classList.contains('input-error')) {
          messageInput.focus();
        }
        return;
      }

      // 4. Submit form payload via Fetch API
      const formData = new FormData(contactForm);
      const originalBtnHtml = submitBtn.innerHTML;

      // Update button to sending state
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="btn-text">Sending...</span>
        <svg class="btn-icon-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="12"></circle>
        </svg>
      `;

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Success State
          formStatus.hidden = false;
          formStatus.className = 'form-status-alert success';
          formStatus.innerHTML = `✓ Thank you, ${nameInput.value.trim()}! Your message has been sent successfully. I will get back to you shortly.`;
          contactForm.reset();
        } else {
          // Service Error Response
          const data = await response.json().catch(() => null);
          formStatus.hidden = false;
          formStatus.className = 'form-status-alert error';

          if (contactForm.action.includes('YOUR_FORMSPREE_FORM_ID')) {
            formStatus.innerHTML = `⚠️ Form endpoint placeholder detected. Please replace <code>YOUR_FORMSPREE_FORM_ID</code> in <code>index.html</code> with your Formspree form ID to receive emails.`;
          } else if (data && data.errors && data.errors.length > 0) {
            formStatus.textContent = data.errors.map(err => err.message).join(', ');
          } else {
            formStatus.textContent = 'Oops! There was a problem submitting your message. Please try again or reach out via email.';
          }
        }
      } catch (error) {
        // Network / Fetch error
        formStatus.hidden = false;
        formStatus.className = 'form-status-alert error';
        formStatus.textContent = 'Network error: Unable to connect to the form service. Please check your connection or contact me directly.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
    });
  }

  // --------------------------------------------------------------------------
  // Console Greeting
  // --------------------------------------------------------------------------
  console.log(
    '%c Samar Jamal %c AI & Machine Learning Student ',
    'background: #6366f1; color: white; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;',
    'background: #1e293b; color: #38bdf8; padding: 4px 8px; border-radius: 0 4px 4px 0;'
  );
});
