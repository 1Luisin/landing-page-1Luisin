(() => {
  const carousel = document.querySelector('.project-carousel');
  if (!carousel) return;
  const track = carousel.querySelector('.carousel-track');
  const slides = [...carousel.querySelectorAll('.project-slide')];
  const dots = [...carousel.querySelectorAll('.carousel-dot')];
  const count = carousel.querySelector('.carousel-count');
  let current = 0;

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.inert = i !== current;
      slide.setAttribute('aria-hidden', String(i !== current));
    });
    dots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === current)));
    track.style.transform = `translateX(-${current * 100}%)`;
    const title = slides[current].querySelector('h3').textContent;
    count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')} — ${title}`;
  }

  carousel.classList.add('is-ready');
  carousel.querySelector('.carousel-controls').hidden = false;
  carousel.querySelectorAll('[data-direction]').forEach(button => {
    button.addEventListener('click', () => show(current + Number(button.dataset.direction)));
  });
  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
  carousel.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const destinations = { ArrowLeft: current - 1, ArrowRight: current + 1, Home: 0, End: slides.length - 1 };
    if (!(event.key in destinations)) return;
    event.preventDefault();
    // Keep focus visible when a focused slide link is about to become inert.
    if (slides[current].contains(document.activeElement)) carousel.focus({ preventScroll: true });
    show(destinations[event.key]);
  });

  let touchStart = null;
  carousel.addEventListener('touchstart', event => {
    if (event.touches.length !== 1) { touchStart = null; return; }
    touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  }, { passive: true });
  carousel.addEventListener('touchend', event => {
    if (!touchStart) return;
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    touchStart = null;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) show(current + (dx < 0 ? 1 : -1));
  }, { passive: true });
  carousel.addEventListener('touchcancel', () => { touchStart = null; }, { passive: true });
  show(0);
})();
