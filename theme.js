// Switch between light and dark mode
function toggleTheme() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme");

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);

  // Remember the user's choice
  localStorage.setItem("theme", newTheme);

  updateThemeButton();
}


// Update the icon shown on the button
function updateThemeButton() {
  const button = document.getElementById("theme-toggle");

  if (!button) return;

  const currentTheme =
    document.documentElement.getAttribute("data-theme");

  button.textContent = currentTheme === "dark" ? "☀" : "☾";

  button.setAttribute(
    "aria-label",
    currentTheme === "dark"
      ? "Switch to light mode"
      : "Switch to dark mode"
  );
}


// Set the correct icon once the page is ready
document.addEventListener("DOMContentLoaded", updateThemeButton);