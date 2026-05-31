document.querySelectorAll('.slide').forEach((slide) => {
    const video = slide.querySelector('video');
    if (!video) return;

    slide.addEventListener('mouseenter', () => {
        video.muted = false;
        video.volume = 0.5;

        video.play().catch((err) => {
            console.log('Video could not play:', err);
        });
    });

    slide.addEventListener('mouseleave', () => {
        video.muted = true;
    });
});