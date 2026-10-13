
(function () {
  const storageKey = "supriyo-theme";
  const toggle = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");

  if (!toggle || !icon) return;

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    const isDark = theme === "dark";

    icon.classList.remove("fa-solid", "fa-sun", "fa-moon");
    icon.textContent = isDark ? "☾" : "☀";

    icon.title = isDark ? "Switch to light mode" : "Switch to dark mode";
    toggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
  }

  let savedTheme;

  try {
    savedTheme = localStorage.getItem(storageKey);
  } catch (e) {}

  applyTheme(savedTheme === "dark" ? "dark" : "light");

  toggle.addEventListener("click", function (event) {
    event.preventDefault();

    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";

    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);

    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch (e) {}
  });
})();
