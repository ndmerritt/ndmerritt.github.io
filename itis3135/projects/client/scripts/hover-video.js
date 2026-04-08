const videoCards = document.querySelectorAll('.card-video');

videoCards.forEach(video => {
  const card = video.parentElement;

  card.addEventListener('mouseenter', () => {
    video.muted = false;
    video.volume = 0.5; 
    video.play().catch(err => { 
      console.log('Cannot play video:', err);
    });
  });

  card.addEventListener('mouseleave', () => {
    video.muted = true;
  });
});