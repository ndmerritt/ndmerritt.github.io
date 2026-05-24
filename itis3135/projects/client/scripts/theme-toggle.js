const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
  console.log("theme toggle initialized");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", function () {
    console.log("TOGGLE CLICKED");

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
  });
}