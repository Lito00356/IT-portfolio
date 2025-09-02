import initHamburgerMenu from "./hamburger.js";
import initModals from "./modals.js";
import initThemeSwitcher from "./themeSwitcher.js";
import initProjectsPage from "./projects.js";
import initVariableTitles from "./titles.js";

document.addEventListener("DOMContentLoaded", function () {
  initThemeSwitcher();
  initHamburgerMenu();
  initModals();
  if (window.location.pathname.endsWith("/projects") || window.location.pathname.endsWith("/projects.html")) {
    initProjectsPage();
  }
  // initVariableTitles();
});
