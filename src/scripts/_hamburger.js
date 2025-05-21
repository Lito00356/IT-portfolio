function openHamburgerMenu($hamburger, $btnClose) {
  const $body = document.querySelector("body");

  $hamburger.addEventListener("click", function () {
    $body.classList.add("open");
  });

  $btnClose.addEventListener("click", function () {
    $body.classList.remove("open");
  });
}

export default function initHamburgerMenu() {
  const $hamburger = document.querySelector("button[trigger-open]");
  const $btnClose = document.querySelector("button[trigger-close]");

  openHamburgerMenu($hamburger, $btnClose);
}
