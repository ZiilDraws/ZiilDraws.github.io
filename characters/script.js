// Intersection Observer for character animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const charId = `#char-${entry.target.dataset.char}`;
    const charEl = document.querySelector(charId);

    if (entry.isIntersecting) {
      charEl.classList.add('visible');
    } else {
      charEl.classList.remove('visible');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.character-info').forEach(section => {
  observer.observe(section);
});

// Parallax background effect
const bg = document.getElementById('parallax-bg');
// Ensure bg exists before setting properties to prevent errors on pages without it
if (bg) {
    bg.style.height = `${document.body.scrollHeight}px`;
    bg.style.backgroundPositionY = `${window.pageYOffset * 0.6}px`;

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      bg.style.backgroundPositionY = `${scrollTop * 0.6}px`;
    });
}

const lightbox = document.getElementById('ref-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const refButtons = document.querySelectorAll('.ref-btn');

refButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent bubbling
    const imgSrc = btn.getAttribute('data-ref-img');
    
    if (imgSrc) {
      lightboxImg.src = imgSrc;
      lightbox.classList.add('active');
    }
  });
});

if (lightbox) {
    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
}
