function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");

  if (!toggleBtn || !icon) return false;

  const savedTheme = localStorage.getItem("theme");
  const isDarkInitial = savedTheme === "dark";

  if (isDarkInitial) {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }

  function updateIcon(isDark) {
    icon.src = isDark ? "img/sun.png" : "img/moon.png";
  }

  updateIcon(isDarkInitial);

  // Click handler
  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");

    const isDark = document.documentElement.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateIcon(isDark);
  });

  return true;
}

const themeInterval = setInterval(() => {
  if (initThemeToggle()) {
    clearInterval(themeInterval);
  }
}, 50);