const display = document.getElementById("display");

function playSound(key) {
  const audio = document.getElementById(key);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  const pad = audio.parentElement;
  display.textContent = pad.id;
}

document.querySelectorAll(".drum-pad").forEach((pad) => {
  pad.addEventListener("click", () => {
    const key = pad.textContent.trim();
    playSound(key);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if ("QWEASDZXC".includes(key)) {
    playSound(key);
  }
});