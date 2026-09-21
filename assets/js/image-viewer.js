(() => {
  const viewer = document.querySelector('.image-viewer');
  if (!viewer || typeof viewer.showModal !== 'function') return;
  const image = viewer.querySelector('.image-viewer-image');
  const title = viewer.querySelector('#image-viewer-title');
  const stage = viewer.querySelector('.image-viewer-stage');
  const toggle = viewer.querySelector('.image-viewer-toggle');
  const close = viewer.querySelector('.image-viewer-close');
  let opener = null;
  let zoomed = false;

  function setZoom(value) {
    zoomed = value;
    viewer.classList.toggle('is-zoomed', value);
    toggle.setAttribute('aria-pressed', String(value));
    toggle.textContent = value ? 'Ajustar imagem' : 'Zoom +';
    stage.scrollTo(0, 0);
  }

  document.querySelectorAll('.project-zoom').forEach(link => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      const preview = link.querySelector('img');
      image.src = link.href;
      image.alt = preview.alt;
      title.textContent = link.closest('.project-slide').querySelector('h3').textContent;
      setZoom(false);
      viewer.showModal();
      document.documentElement.classList.add('image-viewer-open');
    });
  });

  toggle.addEventListener('click', () => setZoom(!zoomed));
  image.addEventListener('click', () => setZoom(!zoomed));
  close.addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => {
    if (event.target !== viewer) return;
    const bounds = viewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
  });
  // Native dialog handles Escape, focus trapping and inert background content.
  viewer.addEventListener('close', () => {
    document.documentElement.classList.remove('image-viewer-open');
    setZoom(false);
    opener?.focus({ preventScroll: true });
  });
})();
