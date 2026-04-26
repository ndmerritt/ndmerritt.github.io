window.addEventListener("load", () => {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 150);
  });
});