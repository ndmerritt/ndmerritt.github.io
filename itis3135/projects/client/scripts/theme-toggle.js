console.log("theme-toggle.js execution:", new Date().toISOString());

function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const logo = document.querySelector(".logo");

  if (!toggleBtn) {
    return false;
  }

  console.log("theme toggle initialized");

  const isDarkInitial = localStorage.getItem("theme") === "dark";

  document.documentElement.classList.toggle("dark-mode", isDarkInitial);

  toggleBtn.textContent = isDarkInitial ? "☀️" : "🌙";

  if (logo) {
    logo.src = isDarkInitial
      ? "img/logo-white.png"
      : "img/logo-black.png";
  }

  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");

    const isDark = document.documentElement.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    toggleBtn.textContent = isDark ? "☀️" : "🌙";

    if (logo) {
      logo.src = isDark
        ? "img/logo-white.png"
        : "img/logo-black.png";
    }
  });

  return true;
}

const themeInterval = setInterval(() => {
  if (initThemeToggle()) {
    clearInterval(themeInterval);
  }
}, 50);