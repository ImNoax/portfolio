(() => {
  function applyTheme(theme) {
    const isLight = theme === "light";
    document.body.classList.toggle("light-mode", isLight);

    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.innerHTML = isLight
        ? '<i class="fa-solid fa-moon"></i> Dark'
        : '<i class="fa-solid fa-sun"></i> Light';
      toggle.setAttribute("aria-label", isLight ? "Activer le mode sombre" : "Activer le mode clair");
    }
  }

  function getInitialTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    return "dark";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const current = getInitialTheme();
    applyTheme(current);

    const toggle = document.getElementById("theme-toggle");
    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", () => {
      const next = document.body.classList.contains("light-mode") ? "dark" : "light";
      localStorage.setItem("theme", next);
      applyTheme(next);
    });
  });
})();
