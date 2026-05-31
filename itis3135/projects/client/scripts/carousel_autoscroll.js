const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");

let current = 0;

function moveCarousel() {

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    const slideWidth =
        slides[current].offsetWidth + 50;

    track.style.transform =
        `translateX(-${slideWidth * current}px)`;
}

setInterval(moveCarousel, 5000);