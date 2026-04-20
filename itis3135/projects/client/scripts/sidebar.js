const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const portfolioLink = document.getElementById("portfolio-link");
const closeBtn = document.getElementById("close-btn");

function toggleMenu() {
  document.body.classList.toggle("menu-open");
}


portfolioLink.addEventListener("click", function (e) {
  e.preventDefault();
  toggleMenu();
});

closeBtn.addEventListener("click", toggleMenu);

overlay.addEventListener("click", toggleMenu);

console.log(portfolioLink, closeBtn, overlay, sidebar);