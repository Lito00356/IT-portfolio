import initContact from "./contact.js";
import initHamburgerMenu from "./hamburger.js";
import initModals from "./modals.js";
import initThemeSwitcher from "./themeSwitcher.js";

document.addEventListener("DOMContentLoaded", function () {
  initThemeSwitcher();
  initHamburgerMenu();
  initModals();
  initContact();
});
