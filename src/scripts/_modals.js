function openModal(modalName) {
  const $modal = document.querySelector(`dialog[data-modal=${modalName}]`);
  $modal.showModal();

  const $confirm = $modal.querySelector("[data-close]");
  $confirm.addEventListener("click", function () {
    $modal.close();
  });
}

export default function initModals() {
  const $triggers = document.querySelectorAll("button[data-trigger]");

  $triggers.forEach(($trigger) => {
    $trigger.addEventListener("click", function (event) {
      event.preventDefault();
      openModal($trigger.getAttribute("data-trigger"));
    });
  });
}
