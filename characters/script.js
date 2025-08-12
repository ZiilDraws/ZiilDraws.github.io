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

bg.style.height = `${document.body.scrollHeight}px`;

bg.style.backgroundPositionY = `${window.pageYOffset * 0.5}px`;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  bg.style.backgroundPositionY = `${scrollTop * 0.5}px`;
});
