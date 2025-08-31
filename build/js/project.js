/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/projectsdata.js":
/*!**********************************!*\
  !*** ./src/data/projectsdata.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
var projects = [{
  id: 1,
  title: "John Wick 4",
  slug: "john-wick-4",
  imageWeb: "john_wick4.webp",
  imageJpg: "john_wick4.jpg",
  category: "Movie",
  icon: "",
  descriptionSmall: "Action movie about John Wick",
  descriptionLarge: "I worked on John Wick 4 as a compositor, focusing on cleanup, element integration, and greenscreen removal. My tasks included painting out unwanted elements, seamlessly blending CG and practical assets into live-action plates, and performing precise chromakey work to ensure clean extractions and smooth composites. Working on such a high-action, visually stylized film demanded both technical precision and a strong eye for cinematic detail."
}, {
  id: 2,
  title: "Heart Of Stone",
  slug: "heart-of-stone",
  imageWeb: "heart_of_stone.webp",
  imageJpg: "heart_of_stone.jpg",
  category: "Movie",
  icon: "",
  descriptionSmall: "Action movie about s spy",
  descriptionLarge: "On Heart of Stone, I was part of the compositing team, responsible for cleanup, greenscreen removal, and integration of CG and practical elements into live-action shots. My work involved removing rigs and markers, keying actors from greenscreen backgrounds, and ensuring that all added elements matched the lighting and motion of the original footage for a seamless final composite."
}, {
  id: 3,
  title: "Freaks Out",
  slug: "freaks-out",
  imageWeb: "freaks_out.webp",
  imageJpg: "freaks_out.jpg",
  category: "Movie",
  icon: "",
  descriptionSmall: "Science-fiction and superpowers in WWII",
  descriptionLarge: "Freaks Out was one of the first live-action films I worked on as a compositor. I was responsible for complex cleanup work, including the removal of a full hand in several shots. This required detailed paint and prep work, frame-by-frame adjustments, and maintaining the continuity of motion and lighting in the affected areas. It was a challenging and rewarding introduction to high-end film compositing, pushing both my technical and creative problem-solving skills."
}, {
  id: 4,
  title: "To Do App",
  slug: "to-do-app",
  imageWeb: "to-do-app.webp",
  imageJpg: "to-do-app.jpg",
  category: "App dev",
  icon: "",
  descriptionSmall: "An app to track your to-do's",
  descriptionLarge: "In this project, I built a fully functional to-do application using Next.js for the frontend and EJS for templating where needed. On the backend, I used JavaScript with Objection.js as the ORM and Knex.js for query building and migrations. The app allows users to create, update, and delete tasks, with all data stored in a relational database. This project helped me deepen my understanding of routing, server-side rendering, and database modeling using a modular and scalable approach.",
  link: "https://github.com/Lito00356/toDo-app"
}, {
  id: 5,
  title: "Bouwdewijn Seapark",
  slug: "bouwdewijn-seapark",
  imageWeb: "bspf.webp",
  imageJpg: "bspf.jpg",
  category: "App dev",
  icon: "",
  descriptionSmall: "Application to track filtering systems",
  descriptionLarge: "Seapark LSS (Seapark Life Support System) is a management application designed for Boudewijn Seapark in Belgium. The app is created by 3 students of ArteveldeHogeschool as a school project. The application aims to help track and manage various tasks and measurements within the park, focusing on tasks related to water management (pumps, filters, etc.) and the associated measurements (e.g., water parameters).",
  link: "https://github.com/Lito00356/bouwdewijn-seapark-filtratie-app"
}, {
  id: 6,
  title: "Kanban app",
  slug: "kanban-app",
  imageWeb: "kanban.webp",
  imageJpg: "kanban.jpg",
  category: "App dev",
  icon: "",
  descriptionSmall: "Kaban-style application",
  descriptionLarge: [{
    text: "I created a kanban-style task management app that allows users to organize projects, tasks, and tags. Each project has tasks that can move across different progress states like To Do, In Progress, Ready for Review, Done, and Backlog."
  }, {
    text: "I built features such as:"
  }, {
    listItem: "Task dialogs for viewing, editing, and deleting tasks."
  }, {
    listItem: "Tag management with dynamic assignment and removal."
  }, {
    listItem: "A search bar that filters tasks by title or tag while keeping them in the correct kanban columns"
  }, {
    listItem: "Confirmation dialogs for safer deletes."
  }, {
    listItem: "Automatic syncing of tag changes to the backend."
  }, {
    text: "The app is built with React on the frontend, using hooks for state management, and Strapi as the backend CMS to manage projects, tasks, and tags. Data is handled via REST API calls, and I designed the UI around modals, inline editing, and a kanban board layout for a smooth user experience."
  }]
}, {
  id: 7,
  title: "The Witcher",
  slug: "the-witcher",
  imageWeb: "the_witcher.webp",
  imageJpg: "the_witcher.jpg",
  category: "Series",
  icon: "",
  descriptionSmall: "Series about Geral Of Rivia trying to find his ward from the law of surprise",
  descriptionLarge: "On The Witcher season 4, I contributed by integrating detailed matte paintings to extend and enhance environments, ensuring seamless blends with live-action footage. Additionally, I performed rig cleanup and worked on the reconstruction of characters, removing unwanted rigs and refining shots to maintain visual continuity and realism. This role demanded precision and a strong understanding of both compositing and character workflows within a complex VFX pipeline."
}];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/scripts/project.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_projectsdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/projectsdata */ "./src/data/projectsdata.js");

function getProjectFromUrl() {
  var params = new URLSearchParams(window.location.search);
  var slug = params.get("slug");
  var projectDetails = _data_projectsdata__WEBPACK_IMPORTED_MODULE_0__.projects.find(function (p) {
    return p.title.split(" ").join("-") === slug;
  });
  return projectDetails;
}
function renderPage(projectDetails) {
  var $detail = document.getElementById("project-detail");
  if (!projectDetails) {
    $detail.innerHTML = "<p>Project not found.</p>";
    return;
  }
  $detail.innerHTML = "\n  <section class=\"project-details\">\n    <picture class=\"grid-details__image-wrapper\" id=\"me\">\n      <source class=\"grid-details__image\" media=\"(max-width: 42rem)\" srcset=\"./src/images/webp/".concat(projectDetails.imageWeb, "\" type=\"image/webp\">\n      <img class=\"grid-details__image\" src=\"./src/images/").concat(projectDetails.imageJpg, "\" alt=\"my portrait\">\n    </picture>\n    <div>\n      <h2 class=\"project-details-title\">\n          ").concat(projectDetails.title, "\n      </h2>\n      <p class=\"project-details-info\">\n          ").concat(projectDetails.descriptionLarge, "\n      </p>\n    </div>\n  </section>\n  ");
}
document.addEventListener("DOMContentLoaded", function () {
  var project = getProjectFromUrl();
  renderPage(project);
});
})();

/******/ })()
;