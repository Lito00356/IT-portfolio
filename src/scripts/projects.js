import { projects } from "../data/projectsdata";

const $buttonWrapper = document.querySelectorAll(".navbar-filter__list-button");
const $filterButtons = document.querySelectorAll("button[data-filter");

$filterButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const filteredString = e.currentTarget.dataset.filter;
    console.log(filteredString);
    $buttonWrapper.forEach((wrapper) => {
      wrapper.classList.remove("active");
    });
    button.closest(".navbar-filter__list-button").classList.add("active");
    if (filteredString === "all") {
      setProjectsPage(projects);
    } else {
      filteredProjectsDisplay(projects, filteredString);
    }
  });
});

function selectIcon(number) {
  console.log(number);

  switch (number) {
    case 1:
      return `
        <svg class="grid__icon" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
          <title>ic_fluent_movies_and_tv_24_regular</title>
          <desc>Created with Sketch.</desc>
          <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="ic_fluent_movies_and_tv_24_regular" fill="#e2e2e2" fill-rule="nonzero">
          <path d="M19.7286477,3.91709009 L19.7796475,4.07673953 L20.3309222,5.99926292 C20.4355805,6.36424991 20.2508505,6.74366136 19.9126449,6.89230405 L19.8167039,6.92693721 L9.08979429,10.0020329 L20.2488588,10.0029698 C20.6285546,10.0029698 20.9423498,10.2851237 20.9920122,10.6511993 L20.9988588,10.7529698 L20.9988588,19.2509821 C20.9988588,20.713514 19.8571542,21.9093864 18.4163811,21.9959633 L18.2488588,22.0009821 L5.75,22.0009821 C4.28746816,22.0009821 3.09159572,20.8592775 3.00501879,19.4185045 L3,19.2509821 L2.99979429,10.8590329 L2.47803395,9.03789737 C2.07490554,7.63202154 2.84275532,6.16777873 4.20385145,5.68742476 L4.36350088,5.63642498 L16.3781751,2.19127259 C17.7840509,1.78814418 19.2482937,2.55599396 19.7286477,3.91709009 Z M19.498,11.502 L4.5,11.502 L4.5,19.2509821 C4.5,19.8550436 4.92847749,20.3590287 5.4980814,20.4755866 L5.62219476,20.4945285 L5.75,20.5009821 L18.2488588,20.5009821 C18.8960675,20.5009821 19.4283927,20.0091075 19.4924052,19.3787874 L19.4988588,19.2509821 L19.498,11.502 Z M6.27268011,6.6494258 L4.77695691,7.07831752 C4.15481999,7.25671241 3.7786565,7.8762725 3.89085867,8.49982068 L3.91988247,8.62445396 L4.26421826,9.82529556 L4.55930489,9.74043653 L6.27268011,6.6494258 Z M11.029003,5.28557216 L8.31151617,6.06479896 L6.59814094,9.15580969 L9.31562776,8.37658289 L11.029003,5.28557216 Z M15.7862871,3.92144289 L13.0688003,4.70066969 L11.3554251,7.79168042 L14.0719506,7.01272925 L15.7862871,3.92144289 Z M17.6334765,3.68788446 L16.1127092,6.42755115 L18.6812212,5.6912865 L18.3377549,4.49019556 C18.2305941,4.11648136 17.96425,3.83153666 17.6334765,3.68788446 Z" id="🎨-Color"> </path>
          </g>
          </g>
          </g>
        </svg>
      `;
    case 2:
      return `
          <svg class="grid__icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4881 1.43057C15.8026 1.70014 15.839 2.17361 15.5694 2.48811L13.2021 5.25001L16.0549 5.25001C17.4225 5.24999 18.5248 5.24997 19.3918 5.36653C20.2919 5.48755 21.0497 5.74644 21.6516 6.34836C22.2536 6.95028 22.5125 7.70815 22.6335 8.60826C22.75 9.47523 22.75 10.5776 22.75 11.9451V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6517C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.7501 17.4225 22.75 16.0549 22.75L7.94513 22.75C6.57754 22.75 5.47522 22.7501 4.60825 22.6335C3.70814 22.5125 2.95027 22.2536 2.34835 21.6517C1.74643 21.0497 1.48754 20.2919 1.36652 19.3918C1.24996 18.5248 1.24998 17.4225 1.25 16.0549L1.25 11.9451C1.24998 10.5775 1.24996 9.47523 1.36652 8.60826C1.48754 7.70815 1.74643 6.95028 2.34835 6.34836C2.95027 5.74645 3.70814 5.48755 4.60825 5.36654C5.47521 5.24998 6.57753 5.24999 7.94512 5.25001L10.7979 5.25001L8.43056 2.48811C8.16099 2.17361 8.19741 1.70014 8.51191 1.43057C8.8264 1.16101 9.29988 1.19743 9.56944 1.51192L12 4.34757L14.4306 1.51192C14.7001 1.19743 15.1736 1.161 15.4881 1.43057ZM16.75 6.75079L16.75 21.2492C17.7958 21.246 18.5756 21.2297 19.1919 21.1469C19.9257 21.0482 20.3142 20.8678 20.591 20.591C20.8678 20.3142 21.0482 19.9257 21.1469 19.1919C21.2484 18.4365 21.25 17.4354 21.25 16V12C21.25 10.5646 21.2484 9.56348 21.1469 8.80813C21.0482 8.07436 20.8678 7.68578 20.591 7.40902C20.3142 7.13226 19.9257 6.95181 19.1919 6.85316C18.5756 6.77031 17.7958 6.75399 16.75 6.75079ZM15.25 21.25L15.25 6.75001L8 6.75001C6.56458 6.75001 5.56347 6.75161 4.80812 6.85316C4.07435 6.95181 3.68577 7.13226 3.40901 7.40902C3.13225 7.68579 2.9518 8.07436 2.85315 8.80813C2.75159 9.56348 2.75 10.5646 2.75 12L2.75 16C2.75 17.4354 2.75159 18.4365 2.85315 19.1919C2.9518 19.9257 3.13225 20.3142 3.40901 20.591C3.68577 20.8678 4.07435 21.0482 4.80812 21.1469C5.56347 21.2484 6.56459 21.25 8 21.25L15.25 21.25Z"></path>
            <path d="M20 16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16C18 16.5523 18.4477 17 19 17C19.5523 17 20 16.5523 20 16Z"></path>
            <path d="M20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12Z"></path>
            </g>
          </svg>
        `;
    case 3:
      return `
        <svg class="grid__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
          <path d="M16.652 3.45506L17.3009 2.80624C18.3759 1.73125 20.1188 1.73125 21.1938 2.80624C22.2687 3.88124 22.2687 5.62415 21.1938 6.69914L20.5449 7.34795M16.652 3.45506C16.652 3.45506 16.7331 4.83379 17.9497 6.05032C19.1662 7.26685 20.5449 7.34795 20.5449 7.34795M16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9M20.5449 7.34795L14.5801 13.3128C14.1761 13.7168 13.9741 13.9188 13.7513 14.0926C13.4886 14.2975 13.2043 14.4732 12.9035 14.6166C12.6485 14.7381 12.3775 14.8284 11.8354 15.0091L10.1 15.5876M10.1 15.5876L8.97709 15.9619C8.71035 16.0508 8.41626 15.9814 8.21744 15.7826C8.01862 15.5837 7.9492 15.2897 8.03811 15.0229L8.41242 13.9M10.1 15.5876L8.41242 13.9" stroke="#e2e2e2" stroke-width="1.5"></path>
          <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2" stroke="#c442cf" stroke-width="1" stroke-linecap="round"></path>
          </g>
        </svg>
      `;
    case 4:
      return `
        <svg class="grid__icon" fill="#000000" viewBox="0 0 24 24" id="app-store" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
          <line id="secondary" x1="21" y1="17" x2="18" y2="17" style="fill: none; stroke: #c442cf; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
          <line id="primary" x1="20" y1="21" x2="14.29" y2="10.72" style="fill: none; stroke: #e2e2e2; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
          <line id="secondary-2" data-name="secondary" x1="12" y1="6.6" x2="10" y2="3" style="fill: none; stroke: #e2e2e2; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
          <line id="primary-2" data-name="primary" x1="14" y1="3" x2="4" y2="21" style="fill: none; stroke: #e2e2e2; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
          <line id="secondary-3" data-name="secondary" x1="13" y1="17" x2="3" y2="17" style="fill: none; stroke: #c442cf; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
          </g>
        </svg>
      `;
    default:
      return "O";
  }
}

function filteredProjectsDisplay(projects, filteredString) {
  let html = "";
  const filteredCategories = projects.filter((category) => category.category.toLowerCase() === filteredString);
  console.log(filteredCategories);

  if (filteredCategories.length === 0) {
    $projectsOutlet.innerHTML = `<p>No projects found yet</p>`;
  }

  filteredCategories.forEach((project) => {
    html += `
    <article class="grid__item grid__item--projects fade-in">
      <picture class="grid__media">
        <source class="media__image" media="(max-width: 42rem)" srcset="./src/images/webp/${project.imageWeb}" type="image/webp">
        <img class="media__image" src="./src/images/${project.imageJpg}" alt="${project.title}">
      </picture>
      <div class="grid__item-description">
        <div class="description__wrapper">
          ${selectIcon(project.icon)}
          <small>${project.category}</small><br>
          <a class="description__link" href="#" data-projects="${project.id}"></a>
        </div>
        <strong>${project.title}</strong>
        <p>${project.descriptionSmall}</p>
      </div>
    </article>
    `;

    $projectsOutlet.innerHTML = html;
    addEventListenersToProjects();
  });
}

function addEventListenersToProjects() {
  const $projectLinks = document.querySelectorAll(`[data-projects]`);

  $projectLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const projectId = e.currentTarget.getAttribute("data-projects");
      openProjectPage(projectId);
    });
  });
}

function openProjectPage(projectId) {
  let URLTitle = "";

  const project = projects.find((p) => p.id === parseInt(projectId));
  if (project) {
    URLTitle = project.title.split(" ").join("-");
  }

  window.location.assign(`http://127.0.0.1:5501/project.html?slug=${URLTitle}`);
}

const $projectsOutlet = document.getElementById("projects");

function setProjectsPage() {
  let html = "";

  for (const project of projects) {
    html += `
      <article class="grid__item grid__item--projects fade-in">

        <picture class="grid__media">
          <source class="media__image" media="(max-width: 42rem)" srcset="./src/images/webp/${project.imageWeb}" type="image/webp">
          <img class="media__image" src="./src/images/${project.imageJpg}" alt="${project.title}">
        </picture>
        <div class="grid__item-description">
          <div class="description__wrapper">
            ${selectIcon(project.icon)}
            <small>${project.category}</small><br>
            <a class="description__link" href="#" data-projects="${project.id}"></a>
          </div>
          <strong>${project.title}</strong>
          <p>${project.descriptionSmall}</p>
        </div>

      </article>
            `;
  }

  $projectsOutlet.innerHTML = html;
  addEventListenersToProjects();
}

export default function initProjectsPage() {
  setProjectsPage();
}
