// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Highlight current page in nav
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Form handling (contact page)
  const form = document.querySelector('#inquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = document.querySelector('#form-success');
      if (success) {
        form.style.display = 'none';
        success.style.display = 'block';
      }
    });

    // Toggle inquiry type fields
    const radios = form.querySelectorAll('input[name="inquiry-type"]');
    const clientFields = form.querySelector('#client-fields');
    const vaFields = form.querySelector('#va-fields');

    radios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        if (e.target.value === 'client') {
          clientFields.style.display = 'block';
          vaFields.style.display = 'none';
        } else {
          clientFields.style.display = 'none';
          vaFields.style.display = 'block';
        }
      });
    });
  }

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
