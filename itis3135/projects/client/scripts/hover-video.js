document.querySelectorAll('.card').forEach(card => {
  const video = card.querySelector('video');

  if (!video) return;

  card.addEventListener('mouseenter', () => {
    video.muted = false;
    video.volume = 0.5;
    video.play().catch(err => {
      console.log('Video could not play:', err);
    });
  });

  card.addEventListener('mouseleave', () => {
    video.muted = true;
  });
});