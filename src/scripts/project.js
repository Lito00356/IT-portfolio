import { projects } from "../data/projectsdata";

function getProjectFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const projectDetails = projects.find((p) => p.title.split(" ").join("-") === slug);

  return projectDetails;
}

function renderPage(projectDetails) {
  const $detail = document.getElementById("project-detail");
  if (!projectDetails) {
    $detail.innerHTML = "<p>Project not found.</p>";
    return;
  }

  $detail.innerHTML = `
  <section class="project-details">
    <picture class="grid-details__image-wrapper" id="me">
      <source class="grid-details__image" media="(max-width: 42rem)" srcset="./src/images/webp/${projectDetails.imageWeb}" type="image/webp">
      <img class="grid-details__image" src="./src/images/${projectDetails.imageJpg}" alt="my portrait">
    </picture>
    <div>
      <h2 class="project-details-title">
          ${projectDetails.title}
      </h2>
      <p class="project-details-info">
          ${projectDetails.descriptionLarge}
      </p>
    </div>
  </section>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const project = getProjectFromUrl();
  renderPage(project);
});
