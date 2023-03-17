/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/restaurant.scss":
/*!********************************!*\
  !*** ./styles/restaurant.scss ***!
  \********************************/
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
/************************************************************************/
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./js/restaurant.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_restaurant_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styles/restaurant.scss */ "./styles/restaurant.scss");


// ==========================================================
// Menu-list opening
// ==========================================================
const openModalBtnCuisine = document.querySelectorAll(".restaurant__cuisine[data-modal-trigger]");

for (let button of openModalBtnCuisine) {
	modalEvent(button);
};

for (let buttonSpirits of openModalBtnCuisine) {
	modalEventSpirits(buttonSpirits);
};

function modalEvent(button) {
	button.addEventListener("click", () => {
		const trigger = button.getAttribute("data-modal-trigger");
		console.log("restaurant__cuisine", trigger)
		const modal = document.querySelector(`[data-modal=${trigger}]`);
		console.log("modal-cuisine", modal)
		const componentWrapper = modal.querySelector(".component-wrapper");
		const close = modal.querySelector(".close");

		close.addEventListener("click", () => modal.classList.remove("modal-show"));
		modal.addEventListener("click", () => modal.classList.remove("modal-show"));
		componentWrapper.addEventListener("click", (e) => e.stopPropagation());

		modal.classList.toggle("modal-show");
	});
};
})();

/******/ })()
;
//# sourceMappingURL=restaurant.bundle.js.map