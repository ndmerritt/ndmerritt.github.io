console.log("theme-toggle.js execution:", new Date().toISOString());

function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");

  if (!toggleBtn) {
    return false;
  }

  console.log("theme toggle initialized");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    console.log("TOGGLE CLICKED");

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
  });

  return true;
}

const themeInterval = setInterval(() => {
  if (initThemeToggle()) {
    clearInterval(themeInterval);
  }
}, 50);