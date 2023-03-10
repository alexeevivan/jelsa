/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/_bar-list-modal.scss":
/*!*************************************!*\
  !*** ./styles/_bar-list-modal.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/_bar-list-slider.scss":
/*!**************************************!*\
  !*** ./styles/_bar-list-slider.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/_fonts.scss":
/*!****************************!*\
  !*** ./styles/_fonts.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/_footer.scss":
/*!*****************************!*\
  !*** ./styles/_footer.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/_header.scss":
/*!*****************************!*\
  !*** ./styles/_header.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/_null.scss":
/*!***************************!*\
  !*** ./styles/_null.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/bar-list.scss":
/*!******************************!*\
  !*** ./styles/bar-list.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/bar-list.js":
/*!************************!*\
  !*** ./js/bar-list.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_bar_list_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/bar-list.scss */ "./styles/bar-list.scss");
/* harmony import */ var _styles_bar_list_slider_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/_bar-list-slider.scss */ "./styles/_bar-list-slider.scss");
/* harmony import */ var _styles_bar_list_modal_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/_bar-list-modal.scss */ "./styles/_bar-list-modal.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styles/_header.scss */ "./styles/_header.scss");
/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styles/_footer.scss */ "./styles/_footer.scss");
/* harmony import */ var _styles_null_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @styles/_null.scss */ "./styles/_null.scss");
/* harmony import */ var _styles_fonts_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @styles/_fonts.scss */ "./styles/_fonts.scss");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);










// ==========================================================
// Header animation
// ==========================================================
jquery__WEBPACK_IMPORTED_MODULE_8__(function () {
	jquery__WEBPACK_IMPORTED_MODULE_8__(window).on("scroll", function () {
		if (jquery__WEBPACK_IMPORTED_MODULE_8__(window).scrollTop() > 200) {
			jquery__WEBPACK_IMPORTED_MODULE_8__(".header").addClass("active");
		} else {
			jquery__WEBPACK_IMPORTED_MODULE_8__(".header").removeClass("active");
		}
	});
});

// ==========================================================
// Cocktails list animation
// ==========================================================

const textArray = [
	"glera",
	"merlot",
	"chardonnay",
	"pinot noir",
	"pinot meunier",
	"gewürztraminer",
	"sauvignon blanc",
	"cabernet sauvignon",
];

const textArraySpirits = [
	"Patrón",
	"Louis XIII",
	"Grey Goose",
	"The Macallan",
	"Zacapa Centenario",
];

const callsign = document.querySelector("#callsign");
const callsignSpirits = document.querySelector("#callsign-spirits");
let delay = 2500;
let animateInDuration = 500;
let animateOutDuration = 500;

function replaceText(i) {
	setTimeout(function () {
		callsign.innerText = textArray[i];
		console.log(textArray[i]);
	}, delay * i)
};

function replaceTextSpirits(i) {
	setTimeout(function () {
		callsignSpirits.innerText = textArraySpirits[i];
		console.log(textArraySpirits[i]);
	}, delay * i)
};

function animateIn(i) {
	setTimeout(function () {
		callsign.className = "js-animate-in";
	}, delay * i);
	if (i != 0) {
		setTimeout(function () {
			callsign.className = "";
		}, delay * i - (delay - animateInDuration));
	}
};

function animateInSpirits(i) {
	setTimeout(function () {
		callsignSpirits.className = "js-animate-in";
	}, delay * i);
	if (i != 0) {
		setTimeout(function () {
			callsignSpirits.className = "";
		}, delay * i - (delay - animateInDuration));
	}
};

function animateOut(i) {
	setTimeout(function () {
		callsign.className = "js-animate-out";
	}, delay * i + (delay - animateOutDuration))
};

function animateOutSpirits(i) {
	setTimeout(function () {
		callsignSpirits.className = "js-animate-out";
	}, delay * i + (delay - animateOutDuration))
};


function animate(i) {
	for (i = 0; i < textArray.length; i++) {
		replaceText(i);
		animateIn(i);
		animateOut(i);
	}
}

function animateSpirits(i) {
	for (i = 0; i < textArraySpirits.length; i++) {
		replaceTextSpirits(i);
		animateInSpirits(i);
		animateOutSpirits(i);
	}
}

animate();
setInterval(animate, delay * textArray.length);
setInterval(animateSpirits, delay * textArraySpirits.length);


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
/******/ 			"barList": 0,
/******/ 			"HTML_CSS_JS_Projects_webpack_Jel_sa_jelsa_src_styles__fonts_scss-HTML_CSS_JS_Projects_webpack-9e4a66": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js","HTML_CSS_JS_Projects_webpack_Jel_sa_jelsa_src_styles__fonts_scss-HTML_CSS_JS_Projects_webpack-9e4a66"], () => (__webpack_require__("./js/bar-list.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=barList.bundle.js.map