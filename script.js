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
    if (nav) {
      if (window.scrollY > 50) {
        nav.classList.add('bg-black/90', 'backdrop-blur-md', 'py-4');
        nav.classList.remove('bg-transparent', 'py-6');
      } else {
        nav.classList.remove('bg-black/90', 'backdrop-blur-md', 'py-4');
        nav.classList.add('bg-transparent', 'py-6');
      }
    }
  });

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
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

      // Open Mailto
      const subject = `Contact Niji Kendoka - de ${name}`;
      const body = `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      window.location.href = `mailto:contact@nijikendoka.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      alert('Merci ! Votre client mail va s\'ouvrir pour envoyer le message.');
    });
  }

  // Album clicks
  document.querySelectorAll('.album-card').forEach(card => {
    card.addEventListener('click', () => {
      const albumId = card.getAttribute('data-album');
      openLightbox(albumId);
    });
  });

  // Lightbox controls
  const closeBtn = document.getElementById('lightbox-close');
  const nextBtn = document.getElementById('lightbox-next');
  const prevBtn = document.getElementById('lightbox-prev');
  const lbOverlay = document.getElementById('lightbox');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextImage);
  if (prevBtn) prevBtn.addEventListener('click', prevImage);

  // Close on click outside content
  if (lbOverlay) {
    lbOverlay.addEventListener('click', (e) => {
      if (e.target === lbOverlay) closeLightbox();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('lightbox');
    if (lb && lb.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu-link');

  const toggleMenu = (e) => {
    if (e) e.preventDefault();
    if (mobileMenu) {
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
    mobileMenuBtn.addEventListener('touchstart', toggleMenu, { passive: false });
  }
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', toggleMenu);
    mobileMenuClose.addEventListener('touchstart', toggleMenu, { passive: false });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
});

// Gallery Data
const albums = {
  fleury2024: [
    "images/stage s fleury 2024/0C00A90E-F7A8-4AD9-BF9A-8AB30C29A024_4_5005_c.jpeg",
    "images/stage s fleury 2024/0DA95AE6-9215-480F-8B93-05ECC90DDFC6_4_5005_c.jpeg",
    "images/stage s fleury 2024/1074370D-DE00-4886-9901-AB81B26110BE_4_5005_c.jpeg",
    "images/stage s fleury 2024/145DA774-4A86-40DC-ADCB-D09A34B6E892_1_102_o.jpeg",
    "images/stage s fleury 2024/15B68BEA-D157-4B16-AD1C-196F9570A639_1_105_c.jpeg",
    "images/stage s fleury 2024/1A14397F-6F49-4E06-8AB2-89C3C00CCCC743_1_105_c.jpeg",
    "images/stage s fleury 2024/1C5BC84D-81FB-473E-8E2D-540194DDD1EB_1_105_c.jpeg",
    "images/stage s fleury 2024/27A0F658-19A5-4F06-B913-01009EC0DCFC_1_102_o.jpeg",
    "images/stage s fleury 2024/29F1E96A-7C0C-46BD-B937-95E9E45D8ED4_1_102_o.jpeg",
    "images/stage s fleury 2024/2C174696-B2EC-4E89-95FF-3AC9A6F15558_1_105_c.jpeg",
    "images/stage s fleury 2024/3EB91E5A-5976-4741-B9F3-FD49D7685603_4_5005_c.jpeg",
    "images/stage s fleury 2024/3F69C12F-989A-4C47-8AD3-1C1964429828_1_105_c.jpeg",
    "images/stage s fleury 2024/412AA7A2-F69D-4918-B431-A0B70ABA98D5_1_105_c.jpeg",
    "images/stage s fleury 2024/47FCE09C-52BB-495F-808B-DB16CA742003_1_105_c.jpeg",
    "images/stage s fleury 2024/4A0B3444-1A9E-40DB-8AB0-05DDD9AB4BAE_1_105_c.jpeg",
    "images/stage s fleury 2024/4F9DB955-2128-489A-8993-853EB8D781C4_1_105_c.jpeg",
    "images/stage s fleury 2024/55EF88A4-1435-4979-82A9-91A52013BDCD_4_5005_c.jpeg",
    "images/stage s fleury 2024/5C8B6694-FFAE-4B57-8621-CF064D0B1539_4_5005_c.jpeg",
    "images/stage s fleury 2024/658EEDCA-D24C-462B-9C22-83075A4F714C_1_105_c.jpeg",
    "images/stage s fleury 2024/6DB10AD1-8F65-49DE-9B62-63A34F54E857_4_5005_c.jpeg",
    "images/stage s fleury 2024/6EDA348B-CAFA-4716-AF62-9B2AA89923AC_4_5005_c.jpeg",
    "images/stage s fleury 2024/74EDEB49-298A-480B-9888-91C27FBE0420_4_5005_c.jpeg",
    "images/stage s fleury 2024/788A0375-0E1D-48EE-802E-C70797ADB5EA_1_102_o.jpeg",
    "images/stage s fleury 2024/793F7646-C9D7-42CF-ACED-B0A54E4EC7B1_1_105_c.jpeg",
    "images/stage s fleury 2024/88FD5D2E-44E0-471E-91CB-04C00ED9FC5C_4_5005_c.jpeg",
    "images/stage s fleury 2024/8C352552-E869-495A-86C8-8A705DC6158E_1_102_o.jpeg",
    "images/stage s fleury 2024/8F9B0EF4-75B2-4E30-A5BC-1F7FE00BD950_1_105_c.jpeg",
    "images/stage s fleury 2024/9071F255-D1F6-46D3-8C20-B0AEB592101F_1_102_o.jpeg",
    "images/stage s fleury 2024/9B9BC78E-474E-46E0-A2E3-811D79CD3DB5_4_5005_c.jpeg",
    "images/stage s fleury 2024/9D3F25A8-DF7F-4879-8EB0-CAFD996BB486_1_105_c.jpeg",
    "images/stage s fleury 2024/9F1B8E16-B77C-409A-B8C7-1B66073A8563_1_102_o.jpeg",
    "images/stage s fleury 2024/A81129C1-5FAB-4AE4-8442-E9A71F3233ED_1_105_c.jpeg",
    "images/stage s fleury 2024/B778A581-F98B-4391-AE90-A255FD501516_4_5005_c.jpeg",
    "images/stage s fleury 2024/BBE58FEC-2931-4934-963A-9E8E567E5098_4_5005_c.jpeg",
    "images/stage s fleury 2024/BC447B1F-0076-4F49-A824-B83C16630F43_1_102_o.jpeg",
    "images/stage s fleury 2024/C5BA850F-6449-413F-918F-25278C01C553_4_5005_c.jpeg",
    "images/stage s fleury 2024/D0884120-9BC1-4F9A-AD50-B7ECD02AD00F_4_5005_c.jpeg",
    "images/stage s fleury 2024/D7FBD57F-9F64-436F-BFBB-61486273AF2F_4_5005_c.jpeg",
    "images/stage s fleury 2024/E8338FA6-767B-4068-A45F-E04DB6827F3D_4_5005_c.jpeg",
    "images/stage s fleury 2024/EAA66ACB-DA2E-4D09-AD3F-15E40D72230D_4_5005_c.jpeg",
    "images/stage s fleury 2024/F403F11C-E39D-4CE2-93E7-2F108FB49B96_4_5005_c.jpeg",
    "images/stage s fleury 2024/FE5BCDCC-1375-43E7-A5E6-F0586DC34B01_1_105_c.jpeg"
  ]
};

let currentAlbum = [];
let currentIndex = 0;

function updateLightbox() {
  const img = document.getElementById('lightbox-img');
  const counter = document.getElementById('lightbox-counter');
  if (img && counter) {
    img.src = currentAlbum[currentIndex];
    counter.textContent = `${currentIndex + 1} / ${currentAlbum.length}`;
  }
}

function openLightbox(albumId) {
  currentAlbum = albums[albumId];
  if (currentAlbum) {
    currentIndex = 0;
    updateLightbox();
    const lb = document.getElementById('lightbox');
    if (lb) {
      lb.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function nextImage() {
  if (currentAlbum.length > 0) {
    currentIndex = (currentIndex + 1) % currentAlbum.length;
    updateLightbox();
  }
}

function prevImage() {
  if (currentAlbum.length > 0) {
    currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
    updateLightbox();
  }
}
