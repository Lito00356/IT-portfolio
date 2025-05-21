function toggleDarkMode() {
  const $rootElement = document.documentElement;
  let $dataTheme = $rootElement.getAttribute("data-theme"),
    newTheme;
  newTheme = $dataTheme === "light" ? "dark" : "light";

  $rootElement.setAttribute("data-theme", newTheme);

  localStorage.setItem("theme", newTheme);
}

function loadLocalTheme($switch) {
  const theme = localStorage.getItem("theme");
  if ($switch) {
    $switch.checked = theme === "dark";
  }

  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

export default function initThemeSwitcher() {
  const $switch = document.getElementById("darkmode-togle");
  loadLocalTheme($switch);
  $switch.addEventListener("click", function () {
    toggleDarkMode();
  });
}
