function addEventListener($btnContact, $link) {
  $btnContact.addEventListener("mouseover", function (event) {
    $btnContact.style.marginBottom = "5rem";
    $link.classList.add("open");
  });
  $btnContact.addEventListener("mouseout", function (event) {
    setTimeout(() => {
      $btnContact.style.marginBottom = "0";
      $link.classList.remove("open");
    }, "2000");
  });
}

export default function initContact() {
  const $btnContact = document.querySelector("button[contact-me]");
  const $link = document.querySelector(".contact__link");

  addEventListener($btnContact, $link);
}
