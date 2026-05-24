function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  const logo = document.getElementById("site-logo");

  if (!toggleBtn || !icon || !logo) return false;

  const savedTheme = localStorage.getItem("theme");
  const isDarkInitial = savedTheme === "dark";

  // Apply initial theme
  if (isDarkInitial) {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }

  function updateUI(isDark) {
    icon.src = isDark ? "img/sun.png" : "img/moon.png";

    logo.src = isDark ? "img/logo-white.png" : "img/logo-black.png";
  }

  updateUI(isDarkInitial);

  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");

    const isDark = document.documentElement.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateUI(isDark);
  });

  return true;
}

const themeInterval = setInterval(() => {
  if (initThemeToggle()) {
    clearInterval(themeInterval);
  }
}, 50);