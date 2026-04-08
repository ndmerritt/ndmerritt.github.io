// Select all video cards
const videoCards = document.querySelectorAll('.card-video');

videoCards.forEach(video => {
  const card = video.parentElement;

  // On hover, unmute
  card.addEventListener('mouseenter', () => {
    video.muted = false;
    video.volume = 0.5; // optional: set desired volume
  });

  // On mouse leave, mute again
  card.addEventListener('mouseleave', () => {
    video.muted = true;
  });
});