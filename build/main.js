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

/***/ }),

/***/ "./src/scripts/hamburger.js":
/*!**********************************!*\
  !*** ./src/scripts/hamburger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initHamburgerMenu)
/* harmony export */ });
function openHamburgerMenu($hamburger, $btnClose) {
  var $body = document.querySelector("body");
  $hamburger.addEventListener("click", function () {
    $body.classList.add("open");
  });
  $btnClose.addEventListener("click", function () {
    $body.classList.remove("open");
  });
}
function initHamburgerMenu() {
  var $hamburger = document.querySelector("button[trigger-open]");
  var $btnClose = document.querySelector("button[trigger-close]");
  openHamburgerMenu($hamburger, $btnClose);
}

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburger.js */ "./src/scripts/hamburger.js");
/* harmony import */ var _modals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals.js */ "./src/scripts/modals.js");
/* harmony import */ var _themeSwitcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themeSwitcher.js */ "./src/scripts/themeSwitcher.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.js */ "./src/scripts/projects.js");




document.addEventListener("DOMContentLoaded", function () {
  (0,_themeSwitcher_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_hamburger_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modals_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (window.location.pathname.endsWith("/projects") || window.location.pathname.endsWith("/projects.html")) {
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
});

/***/ }),

/***/ "./src/scripts/modals.js":
/*!*******************************!*\
  !*** ./src/scripts/modals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initModals)
/* harmony export */ });
function openModal(modalName) {
  var $modal = document.querySelector("dialog[data-modal=".concat(modalName, "]"));
  $modal.showModal();
  var $confirm = $modal.querySelector("[data-close]");
  $confirm.addEventListener("click", function () {
    $modal.close();
  });
}
function initModals() {
  var $triggers = document.querySelectorAll("button[data-trigger]");
  $triggers.forEach(function ($trigger) {
    $trigger.addEventListener("click", function (event) {
      event.preventDefault();
      openModal($trigger.getAttribute("data-trigger"));
    });
  });
}

/***/ }),

/***/ "./src/scripts/projects.js":
/*!*********************************!*\
  !*** ./src/scripts/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initProjectsPage)
/* harmony export */ });
/* harmony import */ var _data_projectsdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/projectsdata */ "./src/data/projectsdata.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var $buttonWrapper = document.querySelectorAll(".navbar-filter__list-button");
var $filterButtons = document.querySelectorAll("button[data-filter");
$filterButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var filteredString = e.currentTarget.dataset.filter;
    console.log(filteredString);
    $buttonWrapper.forEach(function (wrapper) {
      wrapper.classList.remove("active");
    });
    button.closest(".navbar-filter__list-button").classList.add("active");
    if (filteredString === "all") {
      setProjectsPage(_data_projectsdata__WEBPACK_IMPORTED_MODULE_0__.projects);
    } else {
      filteredProjectsDisplay(_data_projectsdata__WEBPACK_IMPORTED_MODULE_0__.projects, filteredString);
    }
  });
});
function filteredProjectsDisplay(projects, filteredString) {
  var html = "";
  var filteredCategories = projects.filter(function (category) {
    return category.category.toLowerCase() === filteredString;
  });
  console.log(filteredCategories);
  if (filteredCategories.length === 0) {
    $projectsOutlet.innerHTML = "<p>No projects found yet</p>";
  }
  filteredCategories.forEach(function (project) {
    html += "\n    <article class=\"grid__item grid__item--projects \">\n      <picture class=\"grid__media\">\n        <source class=\"media__image\" media=\"(max-width: 42rem)\" srcset=\"./src/images/webp/".concat(project.imageWeb, "\" type=\"image/webp\">\n        <img class=\"media__image\" src=\"./src/images/").concat(project.imageJpg, "\" alt=\"").concat(project.title, "\">\n      </picture>\n      <div class=\"grid__item-description\">\n        <div class=\"description__wrapper\">\n          <svg class=\"grid__icon\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"#000000\">\n          <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\n          <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\n          <g id=\"SVGRepo_iconCarrier\">\n          <title>ic_fluent_movies_and_tv_24_regular</title>\n          <desc>Created with Sketch.</desc>\n          <g id=\"\uD83D\uDD0D-Product-Icons\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"ic_fluent_movies_and_tv_24_regular\" fill=\"#e2e2e2\" fill-rule=\"nonzero\">\n          <path d=\"M19.7286477,3.91709009 L19.7796475,4.07673953 L20.3309222,5.99926292 C20.4355805,6.36424991 20.2508505,6.74366136 19.9126449,6.89230405 L19.8167039,6.92693721 L9.08979429,10.0020329 L20.2488588,10.0029698 C20.6285546,10.0029698 20.9423498,10.2851237 20.9920122,10.6511993 L20.9988588,10.7529698 L20.9988588,19.2509821 C20.9988588,20.713514 19.8571542,21.9093864 18.4163811,21.9959633 L18.2488588,22.0009821 L5.75,22.0009821 C4.28746816,22.0009821 3.09159572,20.8592775 3.00501879,19.4185045 L3,19.2509821 L2.99979429,10.8590329 L2.47803395,9.03789737 C2.07490554,7.63202154 2.84275532,6.16777873 4.20385145,5.68742476 L4.36350088,5.63642498 L16.3781751,2.19127259 C17.7840509,1.78814418 19.2482937,2.55599396 19.7286477,3.91709009 Z M19.498,11.502 L4.5,11.502 L4.5,19.2509821 C4.5,19.8550436 4.92847749,20.3590287 5.4980814,20.4755866 L5.62219476,20.4945285 L5.75,20.5009821 L18.2488588,20.5009821 C18.8960675,20.5009821 19.4283927,20.0091075 19.4924052,19.3787874 L19.4988588,19.2509821 L19.498,11.502 Z M6.27268011,6.6494258 L4.77695691,7.07831752 C4.15481999,7.25671241 3.7786565,7.8762725 3.89085867,8.49982068 L3.91988247,8.62445396 L4.26421826,9.82529556 L4.55930489,9.74043653 L6.27268011,6.6494258 Z M11.029003,5.28557216 L8.31151617,6.06479896 L6.59814094,9.15580969 L9.31562776,8.37658289 L11.029003,5.28557216 Z M15.7862871,3.92144289 L13.0688003,4.70066969 L11.3554251,7.79168042 L14.0719506,7.01272925 L15.7862871,3.92144289 Z M17.6334765,3.68788446 L16.1127092,6.42755115 L18.6812212,5.6912865 L18.3377549,4.49019556 C18.2305941,4.11648136 17.96425,3.83153666 17.6334765,3.68788446 Z\" id=\"\uD83C\uDFA8-Color\"> </path>\n          </g>\n          </g>\n          </g>\n          </svg>\n          <small>").concat(project.category, "</small><br>\n          <a class=\"description__link\" href=\"#\" data-projects=\"").concat(project.id, "\"></a>\n        </div>\n        <strong>").concat(project.title, "</strong>\n        <p>").concat(project.descriptionSmall, "</p>\n      </div>\n    </article>\n    ");
    $projectsOutlet.innerHTML = html;
  });
}
function addEventListenersToProjects() {
  var $projectLinks = document.querySelectorAll("[data-projects]");
  $projectLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var projectId = e.currentTarget.getAttribute("data-projects");
      openProjectPage(projectId);
    });
  });
}
function openProjectPage(projectId) {
  var URLTitle = "";
  var project = _data_projectsdata__WEBPACK_IMPORTED_MODULE_0__.projects.find(function (p) {
    return p.id === parseInt(projectId);
  });
  if (project) {
    URLTitle = project.title.split(" ").join("-");
  }
  window.location.assign("http://127.0.0.1:5501/project.html?slug=".concat(URLTitle));
}
var $projectsOutlet = document.getElementById("projects");
function setProjectsPage() {
  var html = "";
  var _iterator = _createForOfIteratorHelper(_data_projectsdata__WEBPACK_IMPORTED_MODULE_0__.projects),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var project = _step.value;
      html += "\n      <article class=\"grid__item grid__item--projects \">\n\n        <picture class=\"grid__media\">\n          <source class=\"media__image\" media=\"(max-width: 42rem)\" srcset=\"./src/images/webp/".concat(project.imageWeb, "\" type=\"image/webp\">\n          <img class=\"media__image\" src=\"./src/images/").concat(project.imageJpg, "\" alt=\"").concat(project.title, "\">\n        </picture>\n        <div class=\"grid__item-description\">\n          <div class=\"description__wrapper\">\n            <svg class=\"grid__icon\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"#000000\">\n            <g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g>\n            <g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g>\n            <g id=\"SVGRepo_iconCarrier\">\n            <title>ic_fluent_movies_and_tv_24_regular</title>\n            <desc>Created with Sketch.</desc>\n            <g id=\"\uD83D\uDD0D-Product-Icons\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"ic_fluent_movies_and_tv_24_regular\" fill=\"#e2e2e2\" fill-rule=\"nonzero\">\n            <path d=\"M19.7286477,3.91709009 L19.7796475,4.07673953 L20.3309222,5.99926292 C20.4355805,6.36424991 20.2508505,6.74366136 19.9126449,6.89230405 L19.8167039,6.92693721 L9.08979429,10.0020329 L20.2488588,10.0029698 C20.6285546,10.0029698 20.9423498,10.2851237 20.9920122,10.6511993 L20.9988588,10.7529698 L20.9988588,19.2509821 C20.9988588,20.713514 19.8571542,21.9093864 18.4163811,21.9959633 L18.2488588,22.0009821 L5.75,22.0009821 C4.28746816,22.0009821 3.09159572,20.8592775 3.00501879,19.4185045 L3,19.2509821 L2.99979429,10.8590329 L2.47803395,9.03789737 C2.07490554,7.63202154 2.84275532,6.16777873 4.20385145,5.68742476 L4.36350088,5.63642498 L16.3781751,2.19127259 C17.7840509,1.78814418 19.2482937,2.55599396 19.7286477,3.91709009 Z M19.498,11.502 L4.5,11.502 L4.5,19.2509821 C4.5,19.8550436 4.92847749,20.3590287 5.4980814,20.4755866 L5.62219476,20.4945285 L5.75,20.5009821 L18.2488588,20.5009821 C18.8960675,20.5009821 19.4283927,20.0091075 19.4924052,19.3787874 L19.4988588,19.2509821 L19.498,11.502 Z M6.27268011,6.6494258 L4.77695691,7.07831752 C4.15481999,7.25671241 3.7786565,7.8762725 3.89085867,8.49982068 L3.91988247,8.62445396 L4.26421826,9.82529556 L4.55930489,9.74043653 L6.27268011,6.6494258 Z M11.029003,5.28557216 L8.31151617,6.06479896 L6.59814094,9.15580969 L9.31562776,8.37658289 L11.029003,5.28557216 Z M15.7862871,3.92144289 L13.0688003,4.70066969 L11.3554251,7.79168042 L14.0719506,7.01272925 L15.7862871,3.92144289 Z M17.6334765,3.68788446 L16.1127092,6.42755115 L18.6812212,5.6912865 L18.3377549,4.49019556 C18.2305941,4.11648136 17.96425,3.83153666 17.6334765,3.68788446 Z\" id=\"\uD83C\uDFA8-Color\"> </path>\n            </g>\n            </g>\n            </g>\n            </svg>\n            <small>").concat(project.category, "</small><br>\n            <a class=\"description__link\" href=\"#\" data-projects=\"").concat(project.id, "\"></a>\n          </div>\n          <strong>").concat(project.title, "</strong>\n          <p>").concat(project.descriptionSmall, "</p>\n        </div>\n\n      </article>\n            ");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  $projectsOutlet.innerHTML = html;
  addEventListenersToProjects();
}
function initProjectsPage() {
  setProjectsPage();
}

/***/ }),

/***/ "./src/scripts/themeSwitcher.js":
/*!**************************************!*\
  !*** ./src/scripts/themeSwitcher.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initThemeSwitcher)
/* harmony export */ });
function toggleDarkMode() {
  var $rootElement = document.documentElement;
  var $dataTheme = $rootElement.getAttribute("data-theme"),
    newTheme;
  newTheme = $dataTheme === "light" ? "dark" : "light";
  $rootElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}
function loadLocalTheme($switch) {
  var theme = localStorage.getItem("theme");
  if ($switch) {
    $switch.checked = theme === "dark";
  }
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
function initThemeSwitcher() {
  var $switch = document.getElementById("darkmode-togle");
  loadLocalTheme($switch);
  $switch.addEventListener("click", function () {
    toggleDarkMode();
  });
}

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/main": 0,
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio_front_end_lito00356"] = self["webpackChunkportfolio_front_end_lito00356"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./src/scripts/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./src/styles/main.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;