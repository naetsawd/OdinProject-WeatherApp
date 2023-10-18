/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Lato-Regular.ttf */ "./src/fonts/Lato-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/PixelifySans-VariableFont_wght.ttf */ "./src/fonts/PixelifySans-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
	font-family: "Lato";
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	font-style: normal;
}

@font-face {
	font-family: "Pixelify";
	src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
	font-style: normal;
}

* {
	padding: 0px;
	margin: 0px;
}

body {
	display: grid;
	grid-template-columns: 100vw;
	grid-template-rows: 10vh 90vh;
	background-size: cover;
	font-family: "Lato", sans-serif;
	color: white;
}

body::before {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0.75) 0%,
		rgba(0, 0, 0, 0.5) 100%
	);
	z-index: -1;
}

/* Header & Navigation */
header {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0px 32px;
}

.siteTitle {
	font-family: "Pixelify", sans-serif;
	font-size: 32px;
	border-bottom: 1px solid white;
	padding: 0px 12px;
}

nav {
	display: flex;
	flex-direction: row;
}

nav > *,
.searchBox {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	padding: 3px 7px;
	margin: 0px 5px;
	list-style-type: none;
}

.searchContainer {
	padding: 8px;
}

.invalidSearch {
	border: 1px solid lightcoral;
}

.searchBox,
.searchBtn {
	background-color: transparent;
	outline: none;
	border: 0;
}

.searchBox {
	color: white;
	font-size: 16px;
}

.searchBtn {
	font-family: "Lato", sans-serif;
	font-weight: 600;
	font-size: 16px;
	background-color: white;
}

.navItem,
.searchBtn {
	cursor: pointer;
	font-size: 16px;
	padding: 2px 10px;
	border-radius: 20px;
	transition: ease 0.3s;
}

.navItem:hover,
.searchBtn:hover {
	color: black;
	background-color: white;
	transform: scale(1.05);
}

.divider {
	width: 1px;
	height: 20px;
	background-color: white;
	margin: 0 5px;
}

.chosenUnit {
	color: black;
	background-color: white;
	border-radius: 20px;
}

/* Content */
.content {
	display: grid;
	grid-template-columns: 90%;
	grid-template-rows: 65% 35%;
	justify-content: center;
}

/* Current Information */
.currInfo {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 26px 0px;
	font-weight: 400;
}

.currInfoLeft {
	display: flex;
	flex-direction: column;
	font-size: 32px;
	padding: 26px;
	justify-content: center;
	align-items: flex-start;
	max-width: 720px;
}

.cityDate {
	font-size: 16px;
	color: lightgray;
}

.cityName {
	font-size: 46px;
	font-weight: 500;
}

.leftDivider {
	margin: 16px 0px;
}

.cityTemp {
	font-size: 28px;
	font-weight: 400;
}

.cityWeather {
	font-size: 20px;
	font-weight: 300;
}

.weatherIcon {
	width: 128px;
	height: 128px;
}

.currInfoRight {
	display: flex;
	flex-direction: column;
	padding: 26px;
	align-items: flex-end;
	justify-content: center;
}

.rightInfoTitle {
	font-size: 26px;
	font-weight: 500;
}

.rightInfoNo {
	font-weight: 300;
	font-size: 22px;
}

.rightDivider {
	margin: 10px 0px;
}

.leftDivider,
.rightDivider {
	background-color: white;
	height: 1px;
	width: 100%;
	align-self: center;
}

/* Forecast Information */
.forecastSection {
	display: flex;
	flex-direction: row;
	display: grid;
	grid-auto-flow: column;
	grid-template-rows: auto;
	margin-bottom: 26px;
	align-items: center;
	justify-items: center;
	overflow-x: scroll;
	overflow-y: hidden;
}

.forecastCard {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 90%;
	width: 200px;
	border-radius: 25px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	margin: 10px;
}

.forecastDate {
	font-size: 18px;
	font-weight: 600;
}

.forecastTime {
	font-size: 18px;
	font-weight: 500;
}

.forecastMaxTemp,
.forecastTemp {
	font-size: 18px;
	font-weight: 500;
}

.forecastMinTemp {
	font-size: 14px;
	font-weight: 500;
	color: lightgray;
}

.weatherIconForecast {
	width: 75px;
	height: 75px;
}

.currInfoLeft,
.currInfoRight,
.forecastSection,
nav > * {
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 25px;
	background-color: rgba(0, 0, 0, 0.5);
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(15px);
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n\tfont-family: \"Lato\";\n\tsrc: url(\"fonts/Lato-Regular.ttf\");\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: \"Pixelify\";\n\tsrc: url(\"fonts/PixelifySans-VariableFont_wght.ttf\");\n\tfont-style: normal;\n}\n\n* {\n\tpadding: 0px;\n\tmargin: 0px;\n}\n\nbody {\n\tdisplay: grid;\n\tgrid-template-columns: 100vw;\n\tgrid-template-rows: 10vh 90vh;\n\tbackground-size: cover;\n\tfont-family: \"Lato\", sans-serif;\n\tcolor: white;\n}\n\nbody::before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: linear-gradient(\n\t\tto bottom,\n\t\trgba(0, 0, 0, 0.75) 0%,\n\t\trgba(0, 0, 0, 0.5) 100%\n\t);\n\tz-index: -1;\n}\n\n/* Header & Navigation */\nheader {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 0px 32px;\n}\n\n.siteTitle {\n\tfont-family: \"Pixelify\", sans-serif;\n\tfont-size: 32px;\n\tborder-bottom: 1px solid white;\n\tpadding: 0px 12px;\n}\n\nnav {\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\nnav > *,\n.searchBox {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: row;\n\tpadding: 3px 7px;\n\tmargin: 0px 5px;\n\tlist-style-type: none;\n}\n\n.searchContainer {\n\tpadding: 8px;\n}\n\n.invalidSearch {\n\tborder: 1px solid lightcoral;\n}\n\n.searchBox,\n.searchBtn {\n\tbackground-color: transparent;\n\toutline: none;\n\tborder: 0;\n}\n\n.searchBox {\n\tcolor: white;\n\tfont-size: 16px;\n}\n\n.searchBtn {\n\tfont-family: \"Lato\", sans-serif;\n\tfont-weight: 600;\n\tfont-size: 16px;\n\tbackground-color: white;\n}\n\n.navItem,\n.searchBtn {\n\tcursor: pointer;\n\tfont-size: 16px;\n\tpadding: 2px 10px;\n\tborder-radius: 20px;\n\ttransition: ease 0.3s;\n}\n\n.navItem:hover,\n.searchBtn:hover {\n\tcolor: black;\n\tbackground-color: white;\n\ttransform: scale(1.05);\n}\n\n.divider {\n\twidth: 1px;\n\theight: 20px;\n\tbackground-color: white;\n\tmargin: 0 5px;\n}\n\n.chosenUnit {\n\tcolor: black;\n\tbackground-color: white;\n\tborder-radius: 20px;\n}\n\n/* Content */\n.content {\n\tdisplay: grid;\n\tgrid-template-columns: 90%;\n\tgrid-template-rows: 65% 35%;\n\tjustify-content: center;\n}\n\n/* Current Information */\n.currInfo {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\tpadding: 26px 0px;\n\tfont-weight: 400;\n}\n\n.currInfoLeft {\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: 32px;\n\tpadding: 26px;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tmax-width: 720px;\n}\n\n.cityDate {\n\tfont-size: 16px;\n\tcolor: lightgray;\n}\n\n.cityName {\n\tfont-size: 46px;\n\tfont-weight: 500;\n}\n\n.leftDivider {\n\tmargin: 16px 0px;\n}\n\n.cityTemp {\n\tfont-size: 28px;\n\tfont-weight: 400;\n}\n\n.cityWeather {\n\tfont-size: 20px;\n\tfont-weight: 300;\n}\n\n.weatherIcon {\n\twidth: 128px;\n\theight: 128px;\n}\n\n.currInfoRight {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 26px;\n\talign-items: flex-end;\n\tjustify-content: center;\n}\n\n.rightInfoTitle {\n\tfont-size: 26px;\n\tfont-weight: 500;\n}\n\n.rightInfoNo {\n\tfont-weight: 300;\n\tfont-size: 22px;\n}\n\n.rightDivider {\n\tmargin: 10px 0px;\n}\n\n.leftDivider,\n.rightDivider {\n\tbackground-color: white;\n\theight: 1px;\n\twidth: 100%;\n\talign-self: center;\n}\n\n/* Forecast Information */\n.forecastSection {\n\tdisplay: flex;\n\tflex-direction: row;\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-rows: auto;\n\tmargin-bottom: 26px;\n\talign-items: center;\n\tjustify-items: center;\n\toverflow-x: scroll;\n\toverflow-y: hidden;\n}\n\n.forecastCard {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 90%;\n\twidth: 200px;\n\tborder-radius: 25px;\n\tborder: 1px solid rgba(255, 255, 255, 0.1);\n\tmargin: 10px;\n}\n\n.forecastDate {\n\tfont-size: 18px;\n\tfont-weight: 600;\n}\n\n.forecastTime {\n\tfont-size: 18px;\n\tfont-weight: 500;\n}\n\n.forecastMaxTemp,\n.forecastTemp {\n\tfont-size: 18px;\n\tfont-weight: 500;\n}\n\n.forecastMinTemp {\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tcolor: lightgray;\n}\n\n.weatherIconForecast {\n\twidth: 75px;\n\theight: 75px;\n}\n\n.currInfoLeft,\n.currInfoRight,\n.forecastSection,\nnav > * {\n\tborder: 1px solid rgba(255, 255, 255, 0.1);\n\tborder-radius: 25px;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n\tbox-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);\n\tbackdrop-filter: blur(15px);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNavItem: () => (/* binding */ createNavItem),
/* harmony export */   setCurrInfo: () => (/* binding */ setCurrInfo),
/* harmony export */   setForecast: () => (/* binding */ setForecast)
/* harmony export */ });
/* harmony import */ var _fetches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetches */ "./src/fetches.js");
/* harmony import */ var _images_morning_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/morning.png */ "./src/images/morning.png");
/* harmony import */ var _images_afternoon_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/afternoon.jpg */ "./src/images/afternoon.jpg");
/* harmony import */ var _images_evening_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/evening.jpg */ "./src/images/evening.jpg");
/* harmony import */ var _images_night_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/night.jpg */ "./src/images/night.jpg");







function setBackground(city) {
	(0,_fetches__WEBPACK_IMPORTED_MODULE_0__.fetchCurrTime)(city)
	  .then(time => {
		let backgroundImageUrl;

		if (time >= 5 && time < 12) {
		  backgroundImageUrl = _images_morning_png__WEBPACK_IMPORTED_MODULE_1__;
		} else if (time >= 12 && time < 17) {
		  backgroundImageUrl = _images_afternoon_jpg__WEBPACK_IMPORTED_MODULE_2__;
		} else if (time >= 17 && time < 20) {
		  backgroundImageUrl = _images_evening_jpg__WEBPACK_IMPORTED_MODULE_3__;
		} else {
		  backgroundImageUrl = _images_night_jpg__WEBPACK_IMPORTED_MODULE_4__;
		}
  
		document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
	  });
  }
  

function createNavItem(container, items) {
	const ul = document.createElement("ul");
	ul.classList.add(container);

	items.forEach((item, index) => {
		const li = document.createElement("li");
		li.classList.add("navItem");
		li.classList.add(item.class);
		li.textContent = item.text;

		ul.append(li);

		if (index < items.length - 1) {
			const divider = document.createElement("li");
			divider.classList.add("divider");
			ul.append(divider);
		}
	});

	document.querySelector("nav").append(ul);
}

function setCurrInfo() {
    let city = localStorage.getItem("city");
    let tempUnit = localStorage.getItem("tempUnit");
    let speed = localStorage.getItem("speedUnit");

	setBackground(city);

	const content = document.querySelector(".content");

	const currInfo = document.createElement("section");
	currInfo.classList.add("currInfo");
	currInfo.innerHTML = ``;

	const currInfoLeft = document.createElement("section");
	currInfoLeft.classList.add("currInfoLeft");
	
	return Promise.all([
		(0,_fetches__WEBPACK_IMPORTED_MODULE_0__.fetchLeftInfo)(city, tempUnit),
		(0,_fetches__WEBPACK_IMPORTED_MODULE_0__.fetchRightInfo)(city, speed),
	]).then(function (results) {
		const leftInfoResult = results[0];
		const rightInfoResult = results[1];

		leftInfoResult.forEach((item) => {
			if (item.icon) {
				const iconContainer = document.createElement("img");
				iconContainer.classList.add(item.class);
				iconContainer.src = item.icon;

				currInfoLeft.append(iconContainer);
			} else {
				const textContainer = document.createElement("div");
				textContainer.classList.add(item.class);
				textContainer.textContent = item.text;

				currInfoLeft.append(textContainer);
			}
		});

		const currInfoRight = document.createElement("section");
		currInfoRight.classList.add("currInfoRight");

		rightInfoResult.forEach((item) => {
			const textContainer = document.createElement("div");
			textContainer.classList.add(item.class);
			textContainer.textContent = item.text;

			currInfoRight.append(textContainer);
		});

		currInfo.append(currInfoLeft, currInfoRight);
		content.append(currInfo);
	});
}

function setForecast() {
    let city = localStorage.getItem("city");
    let tempUnit = localStorage.getItem("tempUnit");
    let type = localStorage.getItem("forecast");

	const content = document.querySelector(".content");

	let forecastSection = document.querySelector(".forecastSection");
	if (!forecastSection) {
		forecastSection = document.createElement("section");
		forecastSection.classList.add("forecastSection");
		content.append(forecastSection);
	}

	forecastSection.innerHTML = ``;

	const fetchPromises = [];
	if (type === "daily") {
		for (let i = 1; i < 7; i++) {
			fetchPromises.push((0,_fetches__WEBPACK_IMPORTED_MODULE_0__.fetchForecastDaily)(i, city, tempUnit));
		}
	} else {
		for (let i = 1; i < 24; i++) {
			fetchPromises.push((0,_fetches__WEBPACK_IMPORTED_MODULE_0__.fetchForecastHourly)(i, city, tempUnit));
		}
	}

	return Promise.all(fetchPromises).then((results) => {
		results.forEach((forecastData) => {
			const forecastCard = document.createElement("div");
			forecastCard.classList.add("forecastCard");

			forecastData.forEach((item) => {
				if (item.class === "weatherIconForecast") {
					const weatherIconForecast = document.createElement("img");
					weatherIconForecast.classList.add(item.class);
					weatherIconForecast.src = item.icon;

					forecastCard.append(weatherIconForecast);
				} else {
					const forecastItem = document.createElement("div");
					forecastItem.classList.add(item.class);
					forecastItem.textContent = item.text;

					forecastCard.append(forecastItem);
				}
			});

			forecastSection.append(forecastCard);
		});

		content.append(forecastSection);
	});
}

/***/ }),

/***/ "./src/fetches.js":
/*!************************!*\
  !*** ./src/fetches.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultFetch: () => (/* binding */ defaultFetch),
/* harmony export */   fetchCurrTime: () => (/* binding */ fetchCurrTime),
/* harmony export */   fetchForecastDaily: () => (/* binding */ fetchForecastDaily),
/* harmony export */   fetchForecastHourly: () => (/* binding */ fetchForecastHourly),
/* harmony export */   fetchLeftInfo: () => (/* binding */ fetchLeftInfo),
/* harmony export */   fetchRequest: () => (/* binding */ fetchRequest),
/* harmony export */   fetchRightInfo: () => (/* binding */ fetchRightInfo)
/* harmony export */ });
function fetchRequest(city) {
	return fetch(
		"https://api.weatherapi.com/v1/forecast.json?key=14f6e670b9ca46fcaf2203655231110&q=" +
			city +
			"&days=7&aqi=no&alerts=no",
		{ mode: "cors" }
	).then(function (response) {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			return response.json();
		}).catch(function (error) {
			const searchCont = document.querySelector(".searchContainer");
			searchCont.classList.add("invalidSearch");

			const searchBox = document.querySelector(".searchBox");
			searchBox.placeholder = "Please enter a valid name";

			return defaultFetch();
		});
}

function defaultFetch() {
	return fetch(
		"https://api.weatherapi.com/v1/forecast.json?key=14f6e670b9ca46fcaf2203655231110&q=" +
			localStorage.getItem("prevCity") +
			"&days=7&aqi=no&alerts=no",
		{ mode: "cors" }
	).then(function (response) {
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		localStorage.setItem("city", localStorage.getItem("prevCity"));

		return response.json();
	});
}

function fetchLeftInfo(city, tempUnit) {
	return fetchRequest(city).then(function (response) {
		const localTimeEpoch = response.location.localtime_epoch * 1000;
		const localTimeDate = new Date(localTimeEpoch);

		const formattedDate = localTimeDate.toLocaleDateString("en-US", {
			timeZone: response.location.tz_id,
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});

		let tempVal = response.current.temp_c;
		let feelsVal = response.current.feelslike_c;

		if (tempUnit === "°F") {
			tempVal = response.current.temp_f;
			feelsVal = response.current.feelslike_f;
		}

		return [
			{ class: "cityDate", text: formattedDate },
			{
				class: "cityName",
				text: response.location.name + ", " + response.location.country,
			},
			{ class: "leftDivider", text: "" },
			{
				class: "cityTemp",
				text: tempVal + tempUnit + " | Feels Like " + feelsVal + tempUnit,
			},
			{ class: "cityWeather", text: response.current.condition.text },
			{ class: "weatherIcon", icon: response.current.condition.icon },
		];
	});
}

function fetchRightInfo(city, speed) {
	return fetchRequest(city).then(function (response) {
		let speedVal = response.current.wind_kph;

		if (speed === "mi") {
			speedVal = response.current.wind_mph;
		}
		
		return [
			{ class: "rightInfoTitle", text: "Humidity" },
			{ class: "rightInfoNo", text: response.current.humidity + " %" },
			{ class: "rightDivider", text: "" },
			{ class: "rightInfoTitle", text: "Chance of Rain" },
			{
				class: "rightInfoNo",
				text: response.forecast.forecastday[0].day.daily_will_it_rain + " %",
			},
			{ class: "rightDivider", text: "" },
			{ class: "rightInfoTitle", text: "Chance of Snow" },
			{
				class: "rightInfoNo",
				text: response.forecast.forecastday[0].day.daily_will_it_snow + " %",
			},
			{ class: "rightDivider", text: "" },
			{ class: "rightInfoTitle", text: "Wind Speed" },
			{ class: "rightInfoNo", text: speedVal + " " + speed + "/h" },
		];
	});
}

function fetchForecastDaily(num, city, tempUnit) {
	return fetchRequest(city).then(function (response) {
		let forecastData = response.forecast.forecastday[num];

		const localTimeDate = new Date(forecastData.date);

		const formattedDate = localTimeDate.toLocaleDateString("en-US", {
			timeZone: response.location.tz_id,
			weekday: "short",
			month: "short",
			day: "numeric"
		});

		let tempValMax = forecastData.day.maxtemp_c;
		let tempValMin = forecastData.day.mintemp_c;

		if (tempUnit === "°F") {
			tempValMax = forecastData.day.maxtemp_f;
			tempValMin = forecastData.day.mintemp_f;
		}

		return [
			{ class: "forecastDate", text: formattedDate },
			{ class: "weatherIconForecast", icon: forecastData.day.condition.icon },
			{ class: "forecastMaxTemp", text: tempValMax + tempUnit },
			{ class: "forecastMinTemp", text: tempValMin + tempUnit },
		];
	});
}

function fetchForecastHourly(num, city, tempUnit) {
	return fetchRequest(city).then(function (response) {
		let forecastData = response.forecast.forecastday[0].hour[num];

		const localTimeEpoch = forecastData.time_epoch * 1000;
		const localTimeDate = new Date(localTimeEpoch);

		const formattedDate = localTimeDate.toLocaleDateString("en-US", {
			timeZone: response.location.tz_id,
			weekday: "short",
			month: "short",
			day: "numeric"
		});

		const formattedTime = localTimeDate.toLocaleTimeString("en-US", {
			timeZone: response.location.tz_id,
			hour: "numeric"
		});

		let tempVal = forecastData.temp_c;

		if (tempUnit === "°F") {
			tempVal = forecastData.temp_f;
		}

		return [
			{ class: "forecastDate", text: formattedDate },
			{ class: "forecastTime", text: formattedTime },
			{ class: "weatherIconForecast", icon: forecastData.condition.icon },
			{ class: "forecastTemp", text: tempVal + tempUnit },
		];
	});
}

function fetchCurrTime(city) {
	return fetchRequest(city).then(function (response) {
		const localTimeEpoch = response.location.localtime_epoch * 1000;
		const localTimeDate = new Date(localTimeEpoch);

		const formattedTime = localTimeDate.toLocaleTimeString("en-US", {
			timeZone: response.location.tz_id,
			hour: "2-digit",
			hour12: false
		});

		return formattedTime;
	});
}

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chosenUnit: () => (/* binding */ chosenUnit),
/* harmony export */   searchFunction: () => (/* binding */ searchFunction),
/* harmony export */   switchForecast: () => (/* binding */ switchForecast),
/* harmony export */   switchSpeed: () => (/* binding */ switchSpeed),
/* harmony export */   switchTemp: () => (/* binding */ switchTemp)
/* harmony export */ });
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./src/content.js");


function chosenUnit() {
	const units = document.querySelectorAll(".navItem");

	units.forEach((unit) => {
		unit.classList.remove("chosenUnit");
	});

	if (localStorage.getItem("forecast") === "daily") {
		units[0].classList.add("chosenUnit");
	} else {
		units[1].classList.add("chosenUnit");
	}

	if (localStorage.getItem("tempUnit") === "°C") {
		units[2].classList.add("chosenUnit");
	} else {
		units[3].classList.add("chosenUnit");
	}

	if (localStorage.getItem("speedUnit") === "km") {
		units[4].classList.add("chosenUnit");
	} else {
		units[5].classList.add("chosenUnit");
	}
}

async function searchFunction() {
	const content = document.querySelector(".content");
	const searchCont = document.querySelector(".searchContainer");
	const searchBox = document.querySelector(".searchBox");
	const searchBtn = document.querySelector(".searchBtn");

	searchBtn.onclick = async function () {
		if (searchBox.value.trim()) {
			searchCont.classList.remove("invalidSearch");
			searchBox.placeholder = "Search";

			localStorage.setItem("prevCity", localStorage.getItem("city"));
			localStorage.setItem("city", searchBox.value);

			content.innerHTML = "";
			searchBox.value = "";
			await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setCurrInfo)();
			await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setForecast)();
		} else {
			searchCont.classList.add("invalidSearch");
			searchBox.placeholder = "Please enter a name";
		}
	};
}

async function switchForecast() {
	const forecastSection = document.querySelector(".forecastSection");
	const daily = document.querySelector(".daily");
	const hourly = document.querySelector(".hourly");

	daily.onclick = async function () {
		localStorage.setItem("forecast", "daily");

		forecastSection.innerHTML = "";
		chosenUnit();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setForecast)();
	};

	hourly.onclick = async function () {
		localStorage.setItem("forecast", "hourly");

		forecastSection.innerHTML = "";
		chosenUnit();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setForecast)();
	};
}

async function switchTemp() {
	const content = document.querySelector(".content");
	const C = document.querySelector(".celsius");
	const F = document.querySelector(".fahrenheit");

	C.onclick = async function () {
		localStorage.setItem("tempUnit", "°C");

		content.innerHTML = "";
		chosenUnit();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setCurrInfo)();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setForecast)();
	};

	F.onclick = async function () {
		localStorage.setItem("tempUnit", "°F");

		content.innerHTML = "";
		chosenUnit();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setCurrInfo)();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setForecast)();
	};
}

async function switchSpeed() {
	const content = document.querySelector(".content");
	const KM = document.querySelector(".kilometers");
	const MI = document.querySelector(".miles");

	KM.onclick = async function () {
		localStorage.setItem("speedUnit", "km");

		content.innerHTML = "";
		chosenUnit();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setCurrInfo)();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setForecast)();
	};

	MI.onclick = async function () {
		localStorage.setItem("speedUnit", "mi");

		content.innerHTML = "";
		chosenUnit();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setCurrInfo)();
		await (0,_content__WEBPACK_IMPORTED_MODULE_0__.setForecast)();
	};
}

/***/ }),

/***/ "./src/fonts/Lato-Regular.ttf":
/*!************************************!*\
  !*** ./src/fonts/Lato-Regular.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d883d540ee2b4de8024.ttf";

/***/ }),

/***/ "./src/fonts/PixelifySans-VariableFont_wght.ttf":
/*!******************************************************!*\
  !*** ./src/fonts/PixelifySans-VariableFont_wght.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "088d140132e39b3c37a8.ttf";

/***/ }),

/***/ "./src/images/afternoon.jpg":
/*!**********************************!*\
  !*** ./src/images/afternoon.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1995cd16991f177888eb.jpg";

/***/ }),

/***/ "./src/images/evening.jpg":
/*!********************************!*\
  !*** ./src/images/evening.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "293ffba11335eb43a5cb.jpg";

/***/ }),

/***/ "./src/images/morning.png":
/*!********************************!*\
  !*** ./src/images/morning.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5b6ba71c1dbf397560b.png";

/***/ }),

/***/ "./src/images/night.jpg":
/*!******************************!*\
  !*** ./src/images/night.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40eed19c13c34632fe19.jpg";

/***/ }),

/***/ "./src/images/siteLogo.png":
/*!*********************************!*\
  !*** ./src/images/siteLogo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34ba1304792a31b7d163.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./src/functions.js");
/* harmony import */ var _images_siteLogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/siteLogo.png */ "./src/images/siteLogo.png");







const tempUnitItems = [
	{ class: "celsius", text: "°C" },
	{ class: "fahrenheit", text: "°F" },
];

const speedUnitItems = [
	{ class: "kilometers", text: "km" },
	{ class: "miles", text: "mi" },
];

const forecastOpt = [
	{ class: "daily", text: "Daily" },
	{ class: "hourly", text: "Hourly" },
];

document.addEventListener("DOMContentLoaded", function () {
    try {
		initializeLocalStorage();
		setFavicon();
        (0,_content__WEBPACK_IMPORTED_MODULE_1__.createNavItem)("forecastOpt", forecastOpt);
        (0,_content__WEBPACK_IMPORTED_MODULE_1__.createNavItem)("tempUnit", tempUnitItems);
        (0,_content__WEBPACK_IMPORTED_MODULE_1__.createNavItem)("speedUnit", speedUnitItems);
        (0,_content__WEBPACK_IMPORTED_MODULE_1__.setCurrInfo)();
        (0,_content__WEBPACK_IMPORTED_MODULE_1__.setForecast)();
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.searchFunction)();
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.switchForecast)();
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.switchTemp)();
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.switchSpeed)();
        (0,_functions__WEBPACK_IMPORTED_MODULE_2__.chosenUnit)();
	} catch (error) {
		console.error("Initialization error:", error);
	}
});

function setFavicon() {
	const faviconLink = document.createElement("link");
	faviconLink.rel = "icon";
	faviconLink.href = _images_siteLogo_png__WEBPACK_IMPORTED_MODULE_3__;

	document.head.appendChild(faviconLink);
}

function initializeLocalStorage() {
	const localStorageItems = [
		{ key: "city", defaultValue: "toronto" },
		{ key: "tempUnit", defaultValue: "°C" },
		{ key: "speedUnit", defaultValue: "km" },
		{ key: "forecast", defaultValue: "daily" },
	];

	for (const item of localStorageItems) {
		if (!localStorage.getItem(item.key)) {
			localStorage.setItem(item.key, item.defaultValue);
		}
	}
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUF5QztBQUNyRiw0Q0FBNEMsK0pBQTJEO0FBQ3ZHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxP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QTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7O0FBTUg7QUFPRTs7QUFFd0I7O0FBRTdDO0FBQ0EsR0FBRyw4QkFBOEI7QUFDakMsR0FBRyxpQ0FBaUM7QUFDcEM7O0FBRUE7QUFDQSxHQUFHLGlDQUFpQztBQUNwQyxHQUFHLDRCQUE0QjtBQUMvQjs7QUFFQTtBQUNBLEdBQUcsK0JBQStCO0FBQ2xDLEdBQUcsaUNBQWlDO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYTtBQUNyQixRQUFRLHVEQUFhO0FBQ3JCLFFBQVEsdURBQWE7QUFDckIsUUFBUSxxREFBVztBQUNuQixRQUFRLHFEQUFXO0FBQ25CLFFBQVEsMERBQWM7QUFDdEIsUUFBUSwwREFBYztBQUN0QixRQUFRLHNEQUFVO0FBQ2xCLFFBQVEsdURBQVc7QUFDbkIsUUFBUSxzREFBVTtBQUNsQixHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFROztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLHFDQUFxQztBQUN6QyxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLHdDQUF3QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL3NyYy9mZXRjaGVzLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZm9udHMvTGF0by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImZvbnRzL1BpeGVsaWZ5U2Fucy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6IFwiUGl4ZWxpZnlcIjtcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuKiB7XG5cdHBhZGRpbmc6IDBweDtcblx0bWFyZ2luOiAwcHg7XG59XG5cbmJvZHkge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHZ3O1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggOTB2aDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0Zm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbmJvZHk6OmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiAwO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0dG8gYm90dG9tLFxuXHRcdHJnYmEoMCwgMCwgMCwgMC43NSkgMCUsXG5cdFx0cmdiYSgwLCAwLCAwLCAwLjUpIDEwMCVcblx0KTtcblx0ei1pbmRleDogLTE7XG59XG5cbi8qIEhlYWRlciAmIE5hdmlnYXRpb24gKi9cbmhlYWRlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0cGFkZGluZzogMHB4IDMycHg7XG59XG5cbi5zaXRlVGl0bGUge1xuXHRmb250LWZhbWlseTogXCJQaXhlbGlmeVwiLCBzYW5zLXNlcmlmO1xuXHRmb250LXNpemU6IDMycHg7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcblx0cGFkZGluZzogMHB4IDEycHg7XG59XG5cbm5hdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbm5hdiA+ICosXG4uc2VhcmNoQm94IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdHBhZGRpbmc6IDNweCA3cHg7XG5cdG1hcmdpbjogMHB4IDVweDtcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uc2VhcmNoQ29udGFpbmVyIHtcblx0cGFkZGluZzogOHB4O1xufVxuXG4uaW52YWxpZFNlYXJjaCB7XG5cdGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7XG59XG5cbi5zZWFyY2hCb3gsXG4uc2VhcmNoQnRuIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogMDtcbn1cblxuLnNlYXJjaEJveCB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAxNnB4O1xufVxuXG4uc2VhcmNoQnRuIHtcblx0Zm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubmF2SXRlbSxcbi5zZWFyY2hCdG4ge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0cGFkZGluZzogMnB4IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdHRyYW5zaXRpb246IGVhc2UgMC4zcztcbn1cblxuLm5hdkl0ZW06aG92ZXIsXG4uc2VhcmNoQnRuOmhvdmVyIHtcblx0Y29sb3I6IGJsYWNrO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLmRpdmlkZXIge1xuXHR3aWR0aDogMXB4O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRtYXJnaW46IDAgNXB4O1xufVxuXG4uY2hvc2VuVW5pdCB7XG5cdGNvbG9yOiBibGFjaztcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi8qIENvbnRlbnQgKi9cbi5jb250ZW50IHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCU7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogNjUlIDM1JTtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIEN1cnJlbnQgSW5mb3JtYXRpb24gKi9cbi5jdXJySW5mbyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0cGFkZGluZzogMjZweCAwcHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jdXJySW5mb0xlZnQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmb250LXNpemU6IDMycHg7XG5cdHBhZGRpbmc6IDI2cHg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0bWF4LXdpZHRoOiA3MjBweDtcbn1cblxuLmNpdHlEYXRlIHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogbGlnaHRncmF5O1xufVxuXG4uY2l0eU5hbWUge1xuXHRmb250LXNpemU6IDQ2cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sZWZ0RGl2aWRlciB7XG5cdG1hcmdpbjogMTZweCAwcHg7XG59XG5cbi5jaXR5VGVtcCB7XG5cdGZvbnQtc2l6ZTogMjhweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNpdHlXZWF0aGVyIHtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG4ud2VhdGhlckljb24ge1xuXHR3aWR0aDogMTI4cHg7XG5cdGhlaWdodDogMTI4cHg7XG59XG5cbi5jdXJySW5mb1JpZ2h0IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0cGFkZGluZzogMjZweDtcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJpZ2h0SW5mb1RpdGxlIHtcblx0Zm9udC1zaXplOiAyNnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4ucmlnaHRJbmZvTm8ge1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRmb250LXNpemU6IDIycHg7XG59XG5cbi5yaWdodERpdmlkZXIge1xuXHRtYXJnaW46IDEwcHggMHB4O1xufVxuXG4ubGVmdERpdmlkZXIsXG4ucmlnaHREaXZpZGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGhlaWdodDogMXB4O1xuXHR3aWR0aDogMTAwJTtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4vKiBGb3JlY2FzdCBJbmZvcm1hdGlvbiAqL1xuLmZvcmVjYXN0U2VjdGlvbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG5cdGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcblx0bWFyZ2luLWJvdHRvbTogMjZweDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xuXHRvdmVyZmxvdy14OiBzY3JvbGw7XG5cdG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmZvcmVjYXN0Q2FyZCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRoZWlnaHQ6IDkwJTtcblx0d2lkdGg6IDIwMHB4O1xuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG5cdG1hcmdpbjogMTBweDtcbn1cblxuLmZvcmVjYXN0RGF0ZSB7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZvcmVjYXN0VGltZSB7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZvcmVjYXN0TWF4VGVtcCxcbi5mb3JlY2FzdFRlbXAge1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5mb3JlY2FzdE1pblRlbXAge1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi53ZWF0aGVySWNvbkZvcmVjYXN0IHtcblx0d2lkdGg6IDc1cHg7XG5cdGhlaWdodDogNzVweDtcbn1cblxuLmN1cnJJbmZvTGVmdCxcbi5jdXJySW5mb1JpZ2h0LFxuLmZvcmVjYXN0U2VjdGlvbixcbm5hdiA+ICoge1xuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG5cdGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcblx0Ym94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsbUJBQW1CO0NBQ25CLDRDQUFrQztDQUNsQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsNENBQW9EO0NBQ3BELGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsNEJBQTRCO0NBQzVCLDZCQUE2QjtDQUM3QixzQkFBc0I7Q0FDdEIsK0JBQStCO0NBQy9CLFlBQVk7QUFDYjs7QUFFQTtDQUND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Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Ozs7Q0FJQywwQ0FBMEM7Q0FDMUMsbUJBQW1CO0NBQ25CLG9DQUFvQztDQUNwQyw0Q0FBNEM7Q0FDNUMsMkJBQTJCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxuXFx0c3JjOiB1cmwoXFxcImZvbnRzL0xhdG8tUmVndWxhci50dGZcXFwiKTtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiUGl4ZWxpZnlcXFwiO1xcblxcdHNyYzogdXJsKFxcXCJmb250cy9QaXhlbGlmeVNhbnMtVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG5cXHRwYWRkaW5nOiAwcHg7XFxuXFx0bWFyZ2luOiAwcHg7XFxufVxcblxcbmJvZHkge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDB2dztcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggOTB2aDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG5ib2R5OjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdHRvIGJvdHRvbSxcXG5cXHRcXHRyZ2JhKDAsIDAsIDAsIDAuNzUpIDAlLFxcblxcdFxcdHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlXFxuXFx0KTtcXG5cXHR6LWluZGV4OiAtMTtcXG59XFxuXFxuLyogSGVhZGVyICYgTmF2aWdhdGlvbiAqL1xcbmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHBhZGRpbmc6IDBweCAzMnB4O1xcbn1cXG5cXG4uc2l0ZVRpdGxlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIlBpeGVsaWZ5XFxcIiwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDMycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcblxcdHBhZGRpbmc6IDBweCAxMnB4O1xcbn1cXG5cXG5uYXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxubmF2ID4gKixcXG4uc2VhcmNoQm94IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRwYWRkaW5nOiAzcHggN3B4O1xcblxcdG1hcmdpbjogMHB4IDVweDtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5zZWFyY2hDb250YWluZXIge1xcblxcdHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmludmFsaWRTZWFyY2gge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7XFxufVxcblxcbi5zZWFyY2hCb3gsXFxuLnNlYXJjaEJ0biB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IDA7XFxufVxcblxcbi5zZWFyY2hCb3gge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5zZWFyY2hCdG4ge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXZJdGVtLFxcbi5zZWFyY2hCdG4ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZzogMnB4IDEwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG5cXHR0cmFuc2l0aW9uOiBlYXNlIDAuM3M7XFxufVxcblxcbi5uYXZJdGVtOmhvdmVyLFxcbi5zZWFyY2hCdG46aG92ZXIge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4uZGl2aWRlciB7XFxuXFx0d2lkdGg6IDFweDtcXG5cXHRoZWlnaHQ6IDIwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luOiAwIDVweDtcXG59XFxuXFxuLmNob3NlblVuaXQge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4vKiBDb250ZW50ICovXFxuLmNvbnRlbnQge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCU7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA2NSUgMzUlO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBDdXJyZW50IEluZm9ybWF0aW9uICovXFxuLmN1cnJJbmZvIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHBhZGRpbmc6IDI2cHggMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5jdXJySW5mb0xlZnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmb250LXNpemU6IDMycHg7XFxuXFx0cGFkZGluZzogMjZweDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRtYXgtd2lkdGg6IDcyMHB4O1xcbn1cXG5cXG4uY2l0eURhdGUge1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRjb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4uY2l0eU5hbWUge1xcblxcdGZvbnQtc2l6ZTogNDZweDtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubGVmdERpdmlkZXIge1xcblxcdG1hcmdpbjogMTZweCAwcHg7XFxufVxcblxcbi5jaXR5VGVtcCB7XFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5jaXR5V2VhdGhlciB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi53ZWF0aGVySWNvbiB7XFxuXFx0d2lkdGg6IDEyOHB4O1xcblxcdGhlaWdodDogMTI4cHg7XFxufVxcblxcbi5jdXJySW5mb1JpZ2h0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogMjZweDtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5yaWdodEluZm9UaXRsZSB7XFxuXFx0Zm9udC1zaXplOiAyNnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5yaWdodEluZm9ObyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXG5cXHRmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5yaWdodERpdmlkZXIge1xcblxcdG1hcmdpbjogMTBweCAwcHg7XFxufVxcblxcbi5sZWZ0RGl2aWRlcixcXG4ucmlnaHREaXZpZGVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRoZWlnaHQ6IDFweDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi8qIEZvcmVjYXN0IEluZm9ybWF0aW9uICovXFxuLmZvcmVjYXN0U2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuXFx0bWFyZ2luLWJvdHRvbTogMjZweDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXHRvdmVyZmxvdy14OiBzY3JvbGw7XFxuXFx0b3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uZm9yZWNhc3RDYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDkwJTtcXG5cXHR3aWR0aDogMjAwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjVweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuXFx0bWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3REYXRlIHtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZvcmVjYXN0VGltZSB7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5mb3JlY2FzdE1heFRlbXAsXFxuLmZvcmVjYXN0VGVtcCB7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5mb3JlY2FzdE1pblRlbXAge1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi53ZWF0aGVySWNvbkZvcmVjYXN0IHtcXG5cXHR3aWR0aDogNzVweDtcXG5cXHRoZWlnaHQ6IDc1cHg7XFxufVxcblxcbi5jdXJySW5mb0xlZnQsXFxuLmN1cnJJbmZvUmlnaHQsXFxuLmZvcmVjYXN0U2VjdGlvbixcXG5uYXYgPiAqIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcblx0ZmV0Y2hMZWZ0SW5mbyxcblx0ZmV0Y2hSaWdodEluZm8sXG5cdGZldGNoRm9yZWNhc3REYWlseSxcblx0ZmV0Y2hGb3JlY2FzdEhvdXJseSxcblx0ZmV0Y2hDdXJyVGltZVxufSBmcm9tIFwiLi9mZXRjaGVzXCI7XG5cbmltcG9ydCBtb3JuaW5nIGZyb20gXCIuL2ltYWdlcy9tb3JuaW5nLnBuZ1wiXG5pbXBvcnQgYWZ0ZXJub29uIGZyb20gXCIuL2ltYWdlcy9hZnRlcm5vb24uanBnXCJcbmltcG9ydCBldmVuaW5nIGZyb20gXCIuL2ltYWdlcy9ldmVuaW5nLmpwZ1wiXG5pbXBvcnQgbmlnaHQgZnJvbSBcIi4vaW1hZ2VzL25pZ2h0LmpwZ1wiXG5cbmZ1bmN0aW9uIHNldEJhY2tncm91bmQoY2l0eSkge1xuXHRmZXRjaEN1cnJUaW1lKGNpdHkpXG5cdCAgLnRoZW4odGltZSA9PiB7XG5cdFx0bGV0IGJhY2tncm91bmRJbWFnZVVybDtcblxuXHRcdGlmICh0aW1lID49IDUgJiYgdGltZSA8IDEyKSB7XG5cdFx0ICBiYWNrZ3JvdW5kSW1hZ2VVcmwgPSBtb3JuaW5nO1xuXHRcdH0gZWxzZSBpZiAodGltZSA+PSAxMiAmJiB0aW1lIDwgMTcpIHtcblx0XHQgIGJhY2tncm91bmRJbWFnZVVybCA9IGFmdGVybm9vbjtcblx0XHR9IGVsc2UgaWYgKHRpbWUgPj0gMTcgJiYgdGltZSA8IDIwKSB7XG5cdFx0ICBiYWNrZ3JvdW5kSW1hZ2VVcmwgPSBldmVuaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0ICBiYWNrZ3JvdW5kSW1hZ2VVcmwgPSBuaWdodDtcblx0XHR9XG4gIFxuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2JhY2tncm91bmRJbWFnZVVybH0pYDtcblx0ICB9KTtcbiAgfVxuICBcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hdkl0ZW0oY29udGFpbmVyLCBpdGVtcykge1xuXHRjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblx0dWwuY2xhc3NMaXN0LmFkZChjb250YWluZXIpO1xuXG5cdGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0Y29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0bGkuY2xhc3NMaXN0LmFkZChcIm5hdkl0ZW1cIik7XG5cdFx0bGkuY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcblx0XHRsaS50ZXh0Q29udGVudCA9IGl0ZW0udGV4dDtcblxuXHRcdHVsLmFwcGVuZChsaSk7XG5cblx0XHRpZiAoaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdFx0ZGl2aWRlci5jbGFzc0xpc3QuYWRkKFwiZGl2aWRlclwiKTtcblx0XHRcdHVsLmFwcGVuZChkaXZpZGVyKTtcblx0XHR9XG5cdH0pO1xuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIikuYXBwZW5kKHVsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJJbmZvKCkge1xuICAgIGxldCBjaXR5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXR5XCIpO1xuICAgIGxldCB0ZW1wVW5pdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcFVuaXRcIik7XG4gICAgbGV0IHNwZWVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzcGVlZFVuaXRcIik7XG5cblx0c2V0QmFja2dyb3VuZChjaXR5KTtcblxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG5cdGNvbnN0IGN1cnJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGN1cnJJbmZvLmNsYXNzTGlzdC5hZGQoXCJjdXJySW5mb1wiKTtcblx0Y3VyckluZm8uaW5uZXJIVE1MID0gYGA7XG5cblx0Y29uc3QgY3VyckluZm9MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGN1cnJJbmZvTGVmdC5jbGFzc0xpc3QuYWRkKFwiY3VyckluZm9MZWZ0XCIpO1xuXHRcblx0cmV0dXJuIFByb21pc2UuYWxsKFtcblx0XHRmZXRjaExlZnRJbmZvKGNpdHksIHRlbXBVbml0KSxcblx0XHRmZXRjaFJpZ2h0SW5mbyhjaXR5LCBzcGVlZCksXG5cdF0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcblx0XHRjb25zdCBsZWZ0SW5mb1Jlc3VsdCA9IHJlc3VsdHNbMF07XG5cdFx0Y29uc3QgcmlnaHRJbmZvUmVzdWx0ID0gcmVzdWx0c1sxXTtcblxuXHRcdGxlZnRJbmZvUmVzdWx0LmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGlmIChpdGVtLmljb24pIHtcblx0XHRcdFx0Y29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdFx0XHRcdGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcblx0XHRcdFx0aWNvbkNvbnRhaW5lci5zcmMgPSBpdGVtLmljb247XG5cblx0XHRcdFx0Y3VyckluZm9MZWZ0LmFwcGVuZChpY29uQ29udGFpbmVyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHR0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoaXRlbS5jbGFzcyk7XG5cdFx0XHRcdHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSBpdGVtLnRleHQ7XG5cblx0XHRcdFx0Y3VyckluZm9MZWZ0LmFwcGVuZCh0ZXh0Q29udGFpbmVyKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGNvbnN0IGN1cnJJbmZvUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0XHRjdXJySW5mb1JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJjdXJySW5mb1JpZ2h0XCIpO1xuXG5cdFx0cmlnaHRJbmZvUmVzdWx0LmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0dGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGl0ZW0uY2xhc3MpO1xuXHRcdFx0dGV4dENvbnRhaW5lci50ZXh0Q29udGVudCA9IGl0ZW0udGV4dDtcblxuXHRcdFx0Y3VyckluZm9SaWdodC5hcHBlbmQodGV4dENvbnRhaW5lcik7XG5cdFx0fSk7XG5cblx0XHRjdXJySW5mby5hcHBlbmQoY3VyckluZm9MZWZ0LCBjdXJySW5mb1JpZ2h0KTtcblx0XHRjb250ZW50LmFwcGVuZChjdXJySW5mbyk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Rm9yZWNhc3QoKSB7XG4gICAgbGV0IGNpdHkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlcIik7XG4gICAgbGV0IHRlbXBVbml0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZW1wVW5pdFwiKTtcbiAgICBsZXQgdHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9yZWNhc3RcIik7XG5cblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuXHRsZXQgZm9yZWNhc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdFNlY3Rpb25cIik7XG5cdGlmICghZm9yZWNhc3RTZWN0aW9uKSB7XG5cdFx0Zm9yZWNhc3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdFx0Zm9yZWNhc3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdFNlY3Rpb25cIik7XG5cdFx0Y29udGVudC5hcHBlbmQoZm9yZWNhc3RTZWN0aW9uKTtcblx0fVxuXG5cdGZvcmVjYXN0U2VjdGlvbi5pbm5lckhUTUwgPSBgYDtcblxuXHRjb25zdCBmZXRjaFByb21pc2VzID0gW107XG5cdGlmICh0eXBlID09PSBcImRhaWx5XCIpIHtcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykge1xuXHRcdFx0ZmV0Y2hQcm9taXNlcy5wdXNoKGZldGNoRm9yZWNhc3REYWlseShpLCBjaXR5LCB0ZW1wVW5pdCkpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IDI0OyBpKyspIHtcblx0XHRcdGZldGNoUHJvbWlzZXMucHVzaChmZXRjaEZvcmVjYXN0SG91cmx5KGksIGNpdHksIHRlbXBVbml0KSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKGZldGNoUHJvbWlzZXMpLnRoZW4oKHJlc3VsdHMpID0+IHtcblx0XHRyZXN1bHRzLmZvckVhY2goKGZvcmVjYXN0RGF0YSkgPT4ge1xuXHRcdFx0Y29uc3QgZm9yZWNhc3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGZvcmVjYXN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RDYXJkXCIpO1xuXG5cdFx0XHRmb3JlY2FzdERhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRpZiAoaXRlbS5jbGFzcyA9PT0gXCJ3ZWF0aGVySWNvbkZvcmVjYXN0XCIpIHtcblx0XHRcdFx0XHRjb25zdCB3ZWF0aGVySWNvbkZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0XHRcdFx0XHR3ZWF0aGVySWNvbkZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoaXRlbS5jbGFzcyk7XG5cdFx0XHRcdFx0d2VhdGhlckljb25Gb3JlY2FzdC5zcmMgPSBpdGVtLmljb247XG5cblx0XHRcdFx0XHRmb3JlY2FzdENhcmQuYXBwZW5kKHdlYXRoZXJJY29uRm9yZWNhc3QpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnN0IGZvcmVjYXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0Zm9yZWNhc3RJdGVtLmNsYXNzTGlzdC5hZGQoaXRlbS5jbGFzcyk7XG5cdFx0XHRcdFx0Zm9yZWNhc3RJdGVtLnRleHRDb250ZW50ID0gaXRlbS50ZXh0O1xuXG5cdFx0XHRcdFx0Zm9yZWNhc3RDYXJkLmFwcGVuZChmb3JlY2FzdEl0ZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Zm9yZWNhc3RTZWN0aW9uLmFwcGVuZChmb3JlY2FzdENhcmQpO1xuXHRcdH0pO1xuXG5cdFx0Y29udGVudC5hcHBlbmQoZm9yZWNhc3RTZWN0aW9uKTtcblx0fSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZldGNoUmVxdWVzdChjaXR5KSB7XG5cdHJldHVybiBmZXRjaChcblx0XHRcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTE0ZjZlNjcwYjljYTQ2ZmNhZjIyMDM2NTUyMzExMTAmcT1cIiArXG5cdFx0XHRjaXR5ICtcblx0XHRcdFwiJmRheXM9NyZhcWk9bm8mYWxlcnRzPW5vXCIsXG5cdFx0eyBtb2RlOiBcImNvcnNcIiB9XG5cdCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdGlmICghcmVzcG9uc2Uub2spIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0Y29uc3Qgc2VhcmNoQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQ29udGFpbmVyXCIpO1xuXHRcdFx0c2VhcmNoQ29udC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFNlYXJjaFwiKTtcblxuXHRcdFx0Y29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hCb3hcIik7XG5cdFx0XHRzZWFyY2hCb3gucGxhY2Vob2xkZXIgPSBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIG5hbWVcIjtcblxuXHRcdFx0cmV0dXJuIGRlZmF1bHRGZXRjaCgpO1xuXHRcdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEZldGNoKCkge1xuXHRyZXR1cm4gZmV0Y2goXG5cdFx0XCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0xNGY2ZTY3MGI5Y2E0NmZjYWYyMjAzNjU1MjMxMTEwJnE9XCIgK1xuXHRcdFx0bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmV2Q2l0eVwiKSArXG5cdFx0XHRcIiZkYXlzPTcmYXFpPW5vJmFsZXJ0cz1ub1wiLFxuXHRcdHsgbW9kZTogXCJjb3JzXCIgfVxuXHQpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuXHRcdH1cblxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0eVwiLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByZXZDaXR5XCIpKTtcblxuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hMZWZ0SW5mbyhjaXR5LCB0ZW1wVW5pdCkge1xuXHRyZXR1cm4gZmV0Y2hSZXF1ZXN0KGNpdHkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0Y29uc3QgbG9jYWxUaW1lRXBvY2ggPSByZXNwb25zZS5sb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2ggKiAxMDAwO1xuXHRcdGNvbnN0IGxvY2FsVGltZURhdGUgPSBuZXcgRGF0ZShsb2NhbFRpbWVFcG9jaCk7XG5cblx0XHRjb25zdCBmb3JtYXR0ZWREYXRlID0gbG9jYWxUaW1lRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7XG5cdFx0XHR0aW1lWm9uZTogcmVzcG9uc2UubG9jYXRpb24udHpfaWQsXG5cdFx0XHR3ZWVrZGF5OiBcImxvbmdcIixcblx0XHRcdHllYXI6IFwibnVtZXJpY1wiLFxuXHRcdFx0bW9udGg6IFwibG9uZ1wiLFxuXHRcdFx0ZGF5OiBcIm51bWVyaWNcIixcblx0XHRcdGhvdXI6IFwiMi1kaWdpdFwiLFxuXHRcdFx0bWludXRlOiBcIjItZGlnaXRcIixcblx0XHR9KTtcblxuXHRcdGxldCB0ZW1wVmFsID0gcmVzcG9uc2UuY3VycmVudC50ZW1wX2M7XG5cdFx0bGV0IGZlZWxzVmFsID0gcmVzcG9uc2UuY3VycmVudC5mZWVsc2xpa2VfYztcblxuXHRcdGlmICh0ZW1wVW5pdCA9PT0gXCLCsEZcIikge1xuXHRcdFx0dGVtcFZhbCA9IHJlc3BvbnNlLmN1cnJlbnQudGVtcF9mO1xuXHRcdFx0ZmVlbHNWYWwgPSByZXNwb25zZS5jdXJyZW50LmZlZWxzbGlrZV9mO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHR7IGNsYXNzOiBcImNpdHlEYXRlXCIsIHRleHQ6IGZvcm1hdHRlZERhdGUgfSxcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3M6IFwiY2l0eU5hbWVcIixcblx0XHRcdFx0dGV4dDogcmVzcG9uc2UubG9jYXRpb24ubmFtZSArIFwiLCBcIiArIHJlc3BvbnNlLmxvY2F0aW9uLmNvdW50cnksXG5cdFx0XHR9LFxuXHRcdFx0eyBjbGFzczogXCJsZWZ0RGl2aWRlclwiLCB0ZXh0OiBcIlwiIH0sXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzOiBcImNpdHlUZW1wXCIsXG5cdFx0XHRcdHRleHQ6IHRlbXBWYWwgKyB0ZW1wVW5pdCArIFwiIHwgRmVlbHMgTGlrZSBcIiArIGZlZWxzVmFsICsgdGVtcFVuaXQsXG5cdFx0XHR9LFxuXHRcdFx0eyBjbGFzczogXCJjaXR5V2VhdGhlclwiLCB0ZXh0OiByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0IH0sXG5cdFx0XHR7IGNsYXNzOiBcIndlYXRoZXJJY29uXCIsIGljb246IHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLmljb24gfSxcblx0XHRdO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUmlnaHRJbmZvKGNpdHksIHNwZWVkKSB7XG5cdHJldHVybiBmZXRjaFJlcXVlc3QoY2l0eSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRsZXQgc3BlZWRWYWwgPSByZXNwb25zZS5jdXJyZW50LndpbmRfa3BoO1xuXG5cdFx0aWYgKHNwZWVkID09PSBcIm1pXCIpIHtcblx0XHRcdHNwZWVkVmFsID0gcmVzcG9uc2UuY3VycmVudC53aW5kX21waDtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIFtcblx0XHRcdHsgY2xhc3M6IFwicmlnaHRJbmZvVGl0bGVcIiwgdGV4dDogXCJIdW1pZGl0eVwiIH0sXG5cdFx0XHR7IGNsYXNzOiBcInJpZ2h0SW5mb05vXCIsIHRleHQ6IHJlc3BvbnNlLmN1cnJlbnQuaHVtaWRpdHkgKyBcIiAlXCIgfSxcblx0XHRcdHsgY2xhc3M6IFwicmlnaHREaXZpZGVyXCIsIHRleHQ6IFwiXCIgfSxcblx0XHRcdHsgY2xhc3M6IFwicmlnaHRJbmZvVGl0bGVcIiwgdGV4dDogXCJDaGFuY2Ugb2YgUmFpblwiIH0sXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzOiBcInJpZ2h0SW5mb05vXCIsXG5cdFx0XHRcdHRleHQ6IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV93aWxsX2l0X3JhaW4gKyBcIiAlXCIsXG5cdFx0XHR9LFxuXHRcdFx0eyBjbGFzczogXCJyaWdodERpdmlkZXJcIiwgdGV4dDogXCJcIiB9LFxuXHRcdFx0eyBjbGFzczogXCJyaWdodEluZm9UaXRsZVwiLCB0ZXh0OiBcIkNoYW5jZSBvZiBTbm93XCIgfSxcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3M6IFwicmlnaHRJbmZvTm9cIixcblx0XHRcdFx0dGV4dDogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X3dpbGxfaXRfc25vdyArIFwiICVcIixcblx0XHRcdH0sXG5cdFx0XHR7IGNsYXNzOiBcInJpZ2h0RGl2aWRlclwiLCB0ZXh0OiBcIlwiIH0sXG5cdFx0XHR7IGNsYXNzOiBcInJpZ2h0SW5mb1RpdGxlXCIsIHRleHQ6IFwiV2luZCBTcGVlZFwiIH0sXG5cdFx0XHR7IGNsYXNzOiBcInJpZ2h0SW5mb05vXCIsIHRleHQ6IHNwZWVkVmFsICsgXCIgXCIgKyBzcGVlZCArIFwiL2hcIiB9LFxuXHRcdF07XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hGb3JlY2FzdERhaWx5KG51bSwgY2l0eSwgdGVtcFVuaXQpIHtcblx0cmV0dXJuIGZldGNoUmVxdWVzdChjaXR5KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdGxldCBmb3JlY2FzdERhdGEgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVtudW1dO1xuXG5cdFx0Y29uc3QgbG9jYWxUaW1lRGF0ZSA9IG5ldyBEYXRlKGZvcmVjYXN0RGF0YS5kYXRlKTtcblxuXHRcdGNvbnN0IGZvcm1hdHRlZERhdGUgPSBsb2NhbFRpbWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcblx0XHRcdHRpbWVab25lOiByZXNwb25zZS5sb2NhdGlvbi50el9pZCxcblx0XHRcdHdlZWtkYXk6IFwic2hvcnRcIixcblx0XHRcdG1vbnRoOiBcInNob3J0XCIsXG5cdFx0XHRkYXk6IFwibnVtZXJpY1wiXG5cdFx0fSk7XG5cblx0XHRsZXQgdGVtcFZhbE1heCA9IGZvcmVjYXN0RGF0YS5kYXkubWF4dGVtcF9jO1xuXHRcdGxldCB0ZW1wVmFsTWluID0gZm9yZWNhc3REYXRhLmRheS5taW50ZW1wX2M7XG5cblx0XHRpZiAodGVtcFVuaXQgPT09IFwiwrBGXCIpIHtcblx0XHRcdHRlbXBWYWxNYXggPSBmb3JlY2FzdERhdGEuZGF5Lm1heHRlbXBfZjtcblx0XHRcdHRlbXBWYWxNaW4gPSBmb3JlY2FzdERhdGEuZGF5Lm1pbnRlbXBfZjtcblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0eyBjbGFzczogXCJmb3JlY2FzdERhdGVcIiwgdGV4dDogZm9ybWF0dGVkRGF0ZSB9LFxuXHRcdFx0eyBjbGFzczogXCJ3ZWF0aGVySWNvbkZvcmVjYXN0XCIsIGljb246IGZvcmVjYXN0RGF0YS5kYXkuY29uZGl0aW9uLmljb24gfSxcblx0XHRcdHsgY2xhc3M6IFwiZm9yZWNhc3RNYXhUZW1wXCIsIHRleHQ6IHRlbXBWYWxNYXggKyB0ZW1wVW5pdCB9LFxuXHRcdFx0eyBjbGFzczogXCJmb3JlY2FzdE1pblRlbXBcIiwgdGV4dDogdGVtcFZhbE1pbiArIHRlbXBVbml0IH0sXG5cdFx0XTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEZvcmVjYXN0SG91cmx5KG51bSwgY2l0eSwgdGVtcFVuaXQpIHtcblx0cmV0dXJuIGZldGNoUmVxdWVzdChjaXR5KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdGxldCBmb3JlY2FzdERhdGEgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW251bV07XG5cblx0XHRjb25zdCBsb2NhbFRpbWVFcG9jaCA9IGZvcmVjYXN0RGF0YS50aW1lX2Vwb2NoICogMTAwMDtcblx0XHRjb25zdCBsb2NhbFRpbWVEYXRlID0gbmV3IERhdGUobG9jYWxUaW1lRXBvY2gpO1xuXG5cdFx0Y29uc3QgZm9ybWF0dGVkRGF0ZSA9IGxvY2FsVGltZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xuXHRcdFx0dGltZVpvbmU6IHJlc3BvbnNlLmxvY2F0aW9uLnR6X2lkLFxuXHRcdFx0d2Vla2RheTogXCJzaG9ydFwiLFxuXHRcdFx0bW9udGg6IFwic2hvcnRcIixcblx0XHRcdGRheTogXCJudW1lcmljXCJcblx0XHR9KTtcblxuXHRcdGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBsb2NhbFRpbWVEYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHtcblx0XHRcdHRpbWVab25lOiByZXNwb25zZS5sb2NhdGlvbi50el9pZCxcblx0XHRcdGhvdXI6IFwibnVtZXJpY1wiXG5cdFx0fSk7XG5cblx0XHRsZXQgdGVtcFZhbCA9IGZvcmVjYXN0RGF0YS50ZW1wX2M7XG5cblx0XHRpZiAodGVtcFVuaXQgPT09IFwiwrBGXCIpIHtcblx0XHRcdHRlbXBWYWwgPSBmb3JlY2FzdERhdGEudGVtcF9mO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHR7IGNsYXNzOiBcImZvcmVjYXN0RGF0ZVwiLCB0ZXh0OiBmb3JtYXR0ZWREYXRlIH0sXG5cdFx0XHR7IGNsYXNzOiBcImZvcmVjYXN0VGltZVwiLCB0ZXh0OiBmb3JtYXR0ZWRUaW1lIH0sXG5cdFx0XHR7IGNsYXNzOiBcIndlYXRoZXJJY29uRm9yZWNhc3RcIiwgaWNvbjogZm9yZWNhc3REYXRhLmNvbmRpdGlvbi5pY29uIH0sXG5cdFx0XHR7IGNsYXNzOiBcImZvcmVjYXN0VGVtcFwiLCB0ZXh0OiB0ZW1wVmFsICsgdGVtcFVuaXQgfSxcblx0XHRdO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ3VyclRpbWUoY2l0eSkge1xuXHRyZXR1cm4gZmV0Y2hSZXF1ZXN0KGNpdHkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0Y29uc3QgbG9jYWxUaW1lRXBvY2ggPSByZXNwb25zZS5sb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2ggKiAxMDAwO1xuXHRcdGNvbnN0IGxvY2FsVGltZURhdGUgPSBuZXcgRGF0ZShsb2NhbFRpbWVFcG9jaCk7XG5cblx0XHRjb25zdCBmb3JtYXR0ZWRUaW1lID0gbG9jYWxUaW1lRGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG5cdFx0XHR0aW1lWm9uZTogcmVzcG9uc2UubG9jYXRpb24udHpfaWQsXG5cdFx0XHRob3VyOiBcIjItZGlnaXRcIixcblx0XHRcdGhvdXIxMjogZmFsc2Vcblx0XHR9KTtcblxuXHRcdHJldHVybiBmb3JtYXR0ZWRUaW1lO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyBzZXRDdXJySW5mbywgc2V0Rm9yZWNhc3QgfSBmcm9tIFwiLi9jb250ZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaG9zZW5Vbml0KCkge1xuXHRjb25zdCB1bml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2SXRlbVwiKTtcblxuXHR1bml0cy5mb3JFYWNoKCh1bml0KSA9PiB7XG5cdFx0dW5pdC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hvc2VuVW5pdFwiKTtcblx0fSk7XG5cblx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9yZWNhc3RcIikgPT09IFwiZGFpbHlcIikge1xuXHRcdHVuaXRzWzBdLmNsYXNzTGlzdC5hZGQoXCJjaG9zZW5Vbml0XCIpO1xuXHR9IGVsc2Uge1xuXHRcdHVuaXRzWzFdLmNsYXNzTGlzdC5hZGQoXCJjaG9zZW5Vbml0XCIpO1xuXHR9XG5cblx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcFVuaXRcIikgPT09IFwiwrBDXCIpIHtcblx0XHR1bml0c1syXS5jbGFzc0xpc3QuYWRkKFwiY2hvc2VuVW5pdFwiKTtcblx0fSBlbHNlIHtcblx0XHR1bml0c1szXS5jbGFzc0xpc3QuYWRkKFwiY2hvc2VuVW5pdFwiKTtcblx0fVxuXG5cdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNwZWVkVW5pdFwiKSA9PT0gXCJrbVwiKSB7XG5cdFx0dW5pdHNbNF0uY2xhc3NMaXN0LmFkZChcImNob3NlblVuaXRcIik7XG5cdH0gZWxzZSB7XG5cdFx0dW5pdHNbNV0uY2xhc3NMaXN0LmFkZChcImNob3NlblVuaXRcIik7XG5cdH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaEZ1bmN0aW9uKCkge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXHRjb25zdCBzZWFyY2hDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hDb250YWluZXJcIik7XG5cdGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQm94XCIpO1xuXHRjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaEJ0blwiKTtcblxuXHRzZWFyY2hCdG4ub25jbGljayA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoc2VhcmNoQm94LnZhbHVlLnRyaW0oKSkge1xuXHRcdFx0c2VhcmNoQ29udC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZFNlYXJjaFwiKTtcblx0XHRcdHNlYXJjaEJveC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoXCI7XG5cblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJldkNpdHlcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXR5XCIpKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0eVwiLCBzZWFyY2hCb3gudmFsdWUpO1xuXG5cdFx0XHRjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cdFx0XHRzZWFyY2hCb3gudmFsdWUgPSBcIlwiO1xuXHRcdFx0YXdhaXQgc2V0Q3VyckluZm8oKTtcblx0XHRcdGF3YWl0IHNldEZvcmVjYXN0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNlYXJjaENvbnQuY2xhc3NMaXN0LmFkZChcImludmFsaWRTZWFyY2hcIik7XG5cdFx0XHRzZWFyY2hCb3gucGxhY2Vob2xkZXIgPSBcIlBsZWFzZSBlbnRlciBhIG5hbWVcIjtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzd2l0Y2hGb3JlY2FzdCgpIHtcblx0Y29uc3QgZm9yZWNhc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdFNlY3Rpb25cIik7XG5cdGNvbnN0IGRhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYWlseVwiKTtcblx0Y29uc3QgaG91cmx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3VybHlcIik7XG5cblx0ZGFpbHkub25jbGljayA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZvcmVjYXN0XCIsIFwiZGFpbHlcIik7XG5cblx0XHRmb3JlY2FzdFNlY3Rpb24uaW5uZXJIVE1MID0gXCJcIjtcblx0XHRjaG9zZW5Vbml0KCk7XG5cdFx0YXdhaXQgc2V0Rm9yZWNhc3QoKTtcblx0fTtcblxuXHRob3VybHkub25jbGljayA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZvcmVjYXN0XCIsIFwiaG91cmx5XCIpO1xuXG5cdFx0Zm9yZWNhc3RTZWN0aW9uLmlubmVySFRNTCA9IFwiXCI7XG5cdFx0Y2hvc2VuVW5pdCgpO1xuXHRcdGF3YWl0IHNldEZvcmVjYXN0KCk7XG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzd2l0Y2hUZW1wKCkge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXHRjb25zdCBDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZWxzaXVzXCIpO1xuXHRjb25zdCBGID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYWhyZW5oZWl0XCIpO1xuXG5cdEMub25jbGljayA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRlbXBVbml0XCIsIFwiwrBDXCIpO1xuXG5cdFx0Y29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGNob3NlblVuaXQoKTtcblx0XHRhd2FpdCBzZXRDdXJySW5mbygpO1xuXHRcdGF3YWl0IHNldEZvcmVjYXN0KCk7XG5cdH07XG5cblx0Ri5vbmNsaWNrID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGVtcFVuaXRcIiwgXCLCsEZcIik7XG5cblx0XHRjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cdFx0Y2hvc2VuVW5pdCgpO1xuXHRcdGF3YWl0IHNldEN1cnJJbmZvKCk7XG5cdFx0YXdhaXQgc2V0Rm9yZWNhc3QoKTtcblx0fTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN3aXRjaFNwZWVkKCkge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXHRjb25zdCBLTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua2lsb21ldGVyc1wiKTtcblx0Y29uc3QgTUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pbGVzXCIpO1xuXG5cdEtNLm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzcGVlZFVuaXRcIiwgXCJrbVwiKTtcblxuXHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRjaG9zZW5Vbml0KCk7XG5cdFx0YXdhaXQgc2V0Q3VyckluZm8oKTtcblx0XHRhd2FpdCBzZXRGb3JlY2FzdCgpO1xuXHR9O1xuXG5cdE1JLm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzcGVlZFVuaXRcIiwgXCJtaVwiKTtcblxuXHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRjaG9zZW5Vbml0KCk7XG5cdFx0YXdhaXQgc2V0Q3VyckluZm8oKTtcblx0XHRhd2FpdCBzZXRGb3JlY2FzdCgpO1xuXHR9O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCB7IFxuICAgIGNyZWF0ZU5hdkl0ZW0sIFxuICAgIHNldEN1cnJJbmZvLCBcbiAgICBzZXRGb3JlY2FzdCBcbn0gZnJvbSBcIi4vY29udGVudFwiO1xuaW1wb3J0IHtcblx0c2VhcmNoRnVuY3Rpb24sXG5cdGNob3NlblVuaXQsXG5cdHN3aXRjaEZvcmVjYXN0LFxuXHRzd2l0Y2hUZW1wLFxuXHRzd2l0Y2hTcGVlZFxufSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcblxuaW1wb3J0IHNpdGVMb2dvIGZyb20gXCIuL2ltYWdlcy9zaXRlTG9nby5wbmdcIjtcblxuY29uc3QgdGVtcFVuaXRJdGVtcyA9IFtcblx0eyBjbGFzczogXCJjZWxzaXVzXCIsIHRleHQ6IFwiwrBDXCIgfSxcblx0eyBjbGFzczogXCJmYWhyZW5oZWl0XCIsIHRleHQ6IFwiwrBGXCIgfSxcbl07XG5cbmNvbnN0IHNwZWVkVW5pdEl0ZW1zID0gW1xuXHR7IGNsYXNzOiBcImtpbG9tZXRlcnNcIiwgdGV4dDogXCJrbVwiIH0sXG5cdHsgY2xhc3M6IFwibWlsZXNcIiwgdGV4dDogXCJtaVwiIH0sXG5dO1xuXG5jb25zdCBmb3JlY2FzdE9wdCA9IFtcblx0eyBjbGFzczogXCJkYWlseVwiLCB0ZXh0OiBcIkRhaWx5XCIgfSxcblx0eyBjbGFzczogXCJob3VybHlcIiwgdGV4dDogXCJIb3VybHlcIiB9LFxuXTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG5cdFx0aW5pdGlhbGl6ZUxvY2FsU3RvcmFnZSgpO1xuXHRcdHNldEZhdmljb24oKTtcbiAgICAgICAgY3JlYXRlTmF2SXRlbShcImZvcmVjYXN0T3B0XCIsIGZvcmVjYXN0T3B0KTtcbiAgICAgICAgY3JlYXRlTmF2SXRlbShcInRlbXBVbml0XCIsIHRlbXBVbml0SXRlbXMpO1xuICAgICAgICBjcmVhdGVOYXZJdGVtKFwic3BlZWRVbml0XCIsIHNwZWVkVW5pdEl0ZW1zKTtcbiAgICAgICAgc2V0Q3VyckluZm8oKTtcbiAgICAgICAgc2V0Rm9yZWNhc3QoKTtcbiAgICAgICAgc2VhcmNoRnVuY3Rpb24oKTtcbiAgICAgICAgc3dpdGNoRm9yZWNhc3QoKTtcbiAgICAgICAgc3dpdGNoVGVtcCgpO1xuICAgICAgICBzd2l0Y2hTcGVlZCgpO1xuICAgICAgICBjaG9zZW5Vbml0KCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkluaXRpYWxpemF0aW9uIGVycm9yOlwiLCBlcnJvcik7XG5cdH1cbn0pO1xuXG5mdW5jdGlvbiBzZXRGYXZpY29uKCkge1xuXHRjb25zdCBmYXZpY29uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRmYXZpY29uTGluay5yZWwgPSBcImljb25cIjtcblx0ZmF2aWNvbkxpbmsuaHJlZiA9IHNpdGVMb2dvO1xuXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZmF2aWNvbkxpbmspO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplTG9jYWxTdG9yYWdlKCkge1xuXHRjb25zdCBsb2NhbFN0b3JhZ2VJdGVtcyA9IFtcblx0XHR7IGtleTogXCJjaXR5XCIsIGRlZmF1bHRWYWx1ZTogXCJ0b3JvbnRvXCIgfSxcblx0XHR7IGtleTogXCJ0ZW1wVW5pdFwiLCBkZWZhdWx0VmFsdWU6IFwiwrBDXCIgfSxcblx0XHR7IGtleTogXCJzcGVlZFVuaXRcIiwgZGVmYXVsdFZhbHVlOiBcImttXCIgfSxcblx0XHR7IGtleTogXCJmb3JlY2FzdFwiLCBkZWZhdWx0VmFsdWU6IFwiZGFpbHlcIiB9LFxuXHRdO1xuXG5cdGZvciAoY29uc3QgaXRlbSBvZiBsb2NhbFN0b3JhZ2VJdGVtcykge1xuXHRcdGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oaXRlbS5rZXkpKSB7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpdGVtLmtleSwgaXRlbS5kZWZhdWx0VmFsdWUpO1xuXHRcdH1cblx0fVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==