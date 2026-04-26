function initSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const portfolioLink = document.getElementById("portfolio-link");
  const closeBtn = document.getElementById("close-btn");

  if (!portfolioLink || !sidebar || !overlay || !closeBtn) {
    return false;
  }

  function toggleMenu() {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
	portfolioLink.classList.toggle("open");
  }

  portfolioLink.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  closeBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  return true;
}

const interval = setInterval(() => {
  if (initSidebar()) {
    clearInterval(interval);
  }
}, 50);