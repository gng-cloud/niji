document.addEventListener('DOMContentLoaded', () => {
  // Reveal Animations on Scroll
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // Navigation Background Change on Scroll
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('bg-black/90', 'backdrop-blur-md', 'py-4');
      nav.classList.remove('bg-transparent', 'py-6');
    } else {
      nav.classList.remove('bg-black/90', 'backdrop-blur-md', 'py-4');
      nav.classList.add('bg-transparent', 'py-6');
    }
  });

  // Contact Form Handling (Simple Client-side logic)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      // Simple Validation
      if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
      }

      // Open Mailto (as per requirement for static site)
      const subject = `Contact Niji Kendoka - de ${name}`;
      const body = `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      window.location.href = `mailto:contact@nijikendoka.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      alert('Merci ! Votre client mail va s\'ouvrir pour envoyer le message.');
    });
  }
});
