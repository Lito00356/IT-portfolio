import initContact from "./_contact.js";
import initHamburgerMenu from "./_hamburger.js";
import initModals from "./_modals.js";
import initThemeSwitcher from "./_themeSwitcher.js";

document.addEventListener("DOMContentLoaded", function () {
  initThemeSwitcher();
  initHamburgerMenu();
  initModals();
  initContact();
});
