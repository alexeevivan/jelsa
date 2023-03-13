/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/bar-list-slider.js":
/*!******************************************!*\
  !*** ./js/components/bar-list-slider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/dist/gsap */ "../node_modules/gsap/dist/gsap.js");
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__);

swiper__WEBPACK_IMPORTED_MODULE_0__.Swiper.use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation]);



// ==========================================================
// Swiper
// ==========================================================
const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__.Swiper(".product-slider", {
	direction: "vertical",
	spaceBetween: 30,
	effect: "fade",
	loop: false,
	speed: 1000,
	navigation: {
		nextEl: ".next",
		prevEl: ".prev"
	},
	on: {
		init: function () {
			let index = this.activeIndex;
			let target = jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__item").eq(index).data("target");

			console.log(target);

			jquery__WEBPACK_IMPORTED_MODULE_1__(".product-img__item").removeClass("active");
			jquery__WEBPACK_IMPORTED_MODULE_1__(".product-img__item#" + target).addClass("active");
		}
	}

});

swiper.on("slideChange", function () {
	let index = this.activeIndex;

	let target = jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__item").eq(index).data("target");

	console.log(target);

	jquery__WEBPACK_IMPORTED_MODULE_1__(".product-img__item").removeClass("active");
	jquery__WEBPACK_IMPORTED_MODULE_1__(".product-img__item#" + target).addClass("active");

	if (swiper.isEnd) {
		jquery__WEBPACK_IMPORTED_MODULE_1__(".prev").removeClass("disabled");
		jquery__WEBPACK_IMPORTED_MODULE_1__(".next").addClass("disabled");
	} else {
		jquery__WEBPACK_IMPORTED_MODULE_1__(".next").removeClass("disabled");
	}

	if (swiper.isBeginning) {
		jquery__WEBPACK_IMPORTED_MODULE_1__(".prev").addClass("disabled");
	} else {
		jquery__WEBPACK_IMPORTED_MODULE_1__(".prev").removeClass("disabled");
	}
});

// ==========================================================
// Hidden menu-list opening
// ==========================================================
const openBtn = document.getElementById("open-bar-list");
const opentBtnSpirits = document.getElementById("open-spirits-list");

openBtn.onclick = function () {
	jquery__WEBPACK_IMPORTED_MODULE_1__(".product__menu-btn.open-btn").click(function () {
		jquery__WEBPACK_IMPORTED_MODULE_1__(".product__menu-btn.open-btn").removeClass("open-btn");
		jquery__WEBPACK_IMPORTED_MODULE_1__(".product__menu-btn").addClass("close-btn");
		jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__content.bar-list__aperitif").addClass("description-hide");
		jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__cover").addClass("description-hide");
		jquery__WEBPACK_IMPORTED_MODULE_1__(".product-img__item.active").addClass("description-hide");
		gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2___default().fromTo(".product-slider", { width: "75%" }, { duration: .5, ease: "back.out(1.4)", width: "92%" });

		if (true) {
			jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__aperitif-menu").removeClass("menu-hide");
		} else {};
		if (true) {
			jquery__WEBPACK_IMPORTED_MODULE_1__(".product__menu-btn.close-btn").click(function () {
				jquery__WEBPACK_IMPORTED_MODULE_1__(".product__menu-btn.close-btn").removeClass("close-btn");
				jquery__WEBPACK_IMPORTED_MODULE_1__(".product__menu-btn").addClass("open-btn");
				jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__content.bar-list__aperitif").removeClass("description-hide");
				jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__cover").removeClass("description-hide");
				jquery__WEBPACK_IMPORTED_MODULE_1__(".product-img__item.active").removeClass("description-hide");
				gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2___default().fromTo(".product-slider", { width: "92%" }, { duration: .5, ease: "back.out(1.4)", width: "75%" });
				jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__aperitif-menu").addClass("menu-hide");
			});
		};
	});
};

opentBtnSpirits.onclick = function () {
	jquery__WEBPACK_IMPORTED_MODULE_1__(".product__spirits-btn.open-btn").click(function () {
		jquery__WEBPACK_IMPORTED_MODULE_1__(".product__spirits-btn.open-btn").removeClass("open-btn");
		jquery__WEBPACK_IMPORTED_MODULE_1__(".product__spirits-btn").addClass("close-btn");
		jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__content.bar-list__spirits").addClass("description-hide");
		jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__cover").addClass("description-hide");
		jquery__WEBPACK_IMPORTED_MODULE_1__(".product-img__item.active").addClass("description-hide");
		gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2___default().fromTo(".product-slider", { width: "75%" }, { duration: .5, ease: "back.out(1.4)", width: "92%" });

		if (true) {
			jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__spirits-menu").removeClass("menu-hide");
		} else {};
		if (true) {
			jquery__WEBPACK_IMPORTED_MODULE_1__(".product__spirits-btn.close-btn").click(function () {
				jquery__WEBPACK_IMPORTED_MODULE_1__(".product__spirits-btn.close-btn").removeClass("close-btn");
				jquery__WEBPACK_IMPORTED_MODULE_1__(".product__spirits-btn").addClass("open-btn");
				jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__content.bar-list__spirits").removeClass("description-hide");
				jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__cover").removeClass("description-hide");
				jquery__WEBPACK_IMPORTED_MODULE_1__(".product-img__item.active").removeClass("description-hide");
				gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2___default().fromTo(".product-slider", { width: "92%" }, { duration: .5, ease: "back.out(1.4)", width: "75%" });
				jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__spirits-menu").addClass("menu-hide");
			});
		};
	});
};

if (true) {
	jquery__WEBPACK_IMPORTED_MODULE_1__(".next").on("click", function () {
		jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__aperitif-menu").addClass("hidden");
	});
};
if (true) {
	jquery__WEBPACK_IMPORTED_MODULE_1__(".prev").on("click", function () {
		jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__aperitif-menu").removeClass("hidden");
	});
};
if (true) {
	jquery__WEBPACK_IMPORTED_MODULE_1__(".prev").on("click", function () {
		jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__spirits-menu").addClass("hidden");
	});
};
if (true) {
	jquery__WEBPACK_IMPORTED_MODULE_1__(".next").on("click", function () {
		jquery__WEBPACK_IMPORTED_MODULE_1__(".product-slider__spirits-menu").removeClass("hidden");
	});
};
// ==========================================================
// Menu-list open btn animation
// ==========================================================
let animateButton = function (e) {

	e.preventDefault;
	//reset animation
	e.target.classList.remove("animate-btn");

	e.target.classList.add("animate-btn");
	setTimeout(function () {
		e.target.classList.remove("animate-btn");
	}, 700);
};

let aperitifButtons = document.getElementsByClassName("product__menu-btn");
let spiritsButtons = document.getElementsByClassName("product__spirits-btn");

for (let i = 0; i < aperitifButtons.length; i++) {
	aperitifButtons[i].addEventListener("click", animateButton, false);
}

for (let i = 0; i < spiritsButtons.length; i++) {
	spiritsButtons[i].addEventListener("click", animateButton, false);
}


// ==========================================================
// Menu-list opening
// ==========================================================
const openModalBtn = document.querySelectorAll(".trigger[data-modal-trigger]");
const openModalBtnSpirits = document.querySelectorAll(".trigger-spirits[data-modal-trigger]");

for (let button of openModalBtn) {
	modalEvent(button);
};

for (let buttonSpirits of openModalBtnSpirits) {
	modalEventSpirits(buttonSpirits);
};

function modalEvent(button) {
	button.addEventListener("click", () => {
		const trigger = button.getAttribute("data-modal-trigger");
		console.log("trigger", trigger)
		const modal = document.querySelector(`[data-modal=${trigger}]`);
		console.log("modal-aperitif", modal)
		const componentWrapper = modal.querySelector(".component-wrapper");
		const close = modal.querySelector(".close");

		close.addEventListener("click", () => modal.classList.remove("modal-show"));
		modal.addEventListener("click", () => modal.classList.remove("modal-show"));
		componentWrapper.addEventListener("click", (e) => e.stopPropagation());

		modal.classList.toggle("modal-show");
	});
};

function modalEventSpirits(buttonSpirits) {
	buttonSpirits.addEventListener("click", () => {
		const triggerSpirits = buttonSpirits.getAttribute("data-modal-trigger");
		console.log("trigger-spirits", triggerSpirits)
		const modalSpirits = document.querySelector(`[data-modal=${triggerSpirits}]`);
		console.log("modal-spirits", modalSpirits)
		const componentWrapperSpirits = modalSpirits.querySelector(".component-wrapper-spirits");
		const closeSpirits = modalSpirits.querySelector(".close");

		closeSpirits.addEventListener("click", () => modalSpirits.classList.remove("modal-show"));
		modalSpirits.addEventListener("click", () => modalSpirits.classList.remove("modal-show"));
		componentWrapperSpirits.addEventListener("click", (e) => e.stopPropagation());

		modalSpirits.classList.toggle("modal-show");
	});
};

// ==========================================================
// Button inner text changing
// ==========================================================
const menuShowBtnAperitif = document.getElementById("open-bar-list");
const menuShowBtnSpirit = document.getElementById("open-spirits-list");
let count = 0;
let i = 0;

menuShowBtnAperitif.addEventListener("click", () => {

	i = i + 1;

	if (i % 2 == 0) {
		menuShowBtnAperitif.innerText = "назад";
	} else {
		menuShowBtnAperitif.innerText = "меню"
	}
});

menuShowBtnSpirit.addEventListener("click", () => {

	count = count + 1;

	if (count % 2 == 0) {
		menuShowBtnSpirit.innerText = "назад";
	} else {
		menuShowBtnSpirit.innerText = "меню"
	}
});

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 			"barListSlider": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_swiper_swiper_esm_js","vendors-node_modules_gsap_dist_gsap_js"], () => (__webpack_require__("./js/components/bar-list-slider.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=barListSlider.bundle.js.map