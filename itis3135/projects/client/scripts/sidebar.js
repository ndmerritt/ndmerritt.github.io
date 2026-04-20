document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const portfolioLink = document.getElementById("portfolio-link");
  const closeBtn = document.getElementById("close-btn");

  function toggleMenu() {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  if (portfolioLink) {
    portfolioLink.addEventListener("click", function (e) {
      e.preventDefault();
      toggleMenu();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", toggleMenu);
  }

  if (overlay) {
    overlay.addEventListener("click", toggleMenu);
  }
});