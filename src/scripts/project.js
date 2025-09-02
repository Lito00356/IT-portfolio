import { projects } from "../data/projectsdata";

function getProjectFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const projectDetails = projects.find((p) => p.slug === slug.toLowerCase());

  return projectDetails;
}

function renderDescription(description) {
  if (description.type === "simple") {
    return `<p class="project-details-info">${description.content}</p>`;
  }
  if (description.type === "rich") {
    return description.content
      .map((item) => {
        if (item.text) return `<p class="project-details-info">${item.text}</p>`;
        if (item.listItems) return `<ul>${item.listItems.map((li) => `<li>${li}</li>`).join("")}</ul>`;
        return "";
      })
      .join("");
  }
  return "";
}
function renderPage(projectDetails) {
  const $detail = document.getElementById("project-detail");
  if (!projectDetails) {
    $detail.innerHTML = "<p>Project not found.</p>";
    return;
  }

  if (projectDetails.category.toLowerCase() === "movie" || projectDetails.category.toLowerCase() === "series") {
    $detail.innerHTML = `
  <section class="project-details">
    <picture class="grid-details__image-wrapper vfx" id="me">
      <source class="grid-details__image" media="(max-width: 42rem)" srcset="./src/images/webp/${projectDetails.imageWeb}" type="image/webp">
      <img class="grid-details__image" src="./src/images/${projectDetails.imageJpg}" alt="my portrait">
    </picture>
    <div>
      <h2 class="project-details-title">
          ${projectDetails.title}
      </h2>
      <p class="project-details-info">
          ${renderDescription(projectDetails.descriptionLarge)}
      </p>
    </div>
  </section>
  `;
  } else {
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
            ${renderDescription(projectDetails.descriptionLarge)}
        </p>
      </div>
    </section>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const project = getProjectFromUrl();
  renderPage(project);
});
