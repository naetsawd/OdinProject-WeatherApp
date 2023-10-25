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
	grid-template-rows: 8vh 88vh 4vh;
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
	grid-template-areas: "curr" "forecast";
}

/* Current Information */
.currInfo {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 26px 0px;
	font-weight: 400;
	grid-area: curr;
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
	grid-area: forecast;
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
nav > *, 
footer {
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 25px;
	background-color: #00000080;
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(15px);
}

/* Footer */
footer {
	border-radius: 0px;
	border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footerText {
    color: white;
    font-size: 15px;
}

.githubIcon {
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 2px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n\tfont-family: \"Lato\";\n\tsrc: url(\"fonts/Lato-Regular.ttf\");\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: \"Pixelify\";\n\tsrc: url(\"fonts/PixelifySans-VariableFont_wght.ttf\");\n\tfont-style: normal;\n}\n\n* {\n\tpadding: 0px;\n\tmargin: 0px;\n}\n\nbody {\n\tdisplay: grid;\n\tgrid-template-columns: 100vw;\n\tgrid-template-rows: 8vh 88vh 4vh;\n\tbackground-size: cover;\n\tfont-family: \"Lato\", sans-serif;\n\tcolor: white;\n}\n\nbody::before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: linear-gradient(\n\t\tto bottom,\n\t\trgba(0, 0, 0, 0.75) 0%,\n\t\trgba(0, 0, 0, 0.5) 100%\n\t);\n\tz-index: -1;\n}\n\n/* Header & Navigation */\nheader {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 0px 32px;\n}\n\n.siteTitle {\n\tfont-family: \"Pixelify\", sans-serif;\n\tfont-size: 32px;\n\tborder-bottom: 1px solid white;\n\tpadding: 0px 12px;\n}\n\nnav {\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\nnav > *,\n.searchBox {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: row;\n\tpadding: 3px 7px;\n\tmargin: 0px 5px;\n\tlist-style-type: none;\n}\n\n.searchContainer {\n\tpadding: 8px;\n}\n\n.invalidSearch {\n\tborder: 1px solid lightcoral;\n}\n\n.searchBox,\n.searchBtn {\n\tbackground-color: transparent;\n\toutline: none;\n\tborder: 0;\n}\n\n.searchBox {\n\tcolor: white;\n\tfont-size: 16px;\n}\n\n.searchBtn {\n\tfont-family: \"Lato\", sans-serif;\n\tfont-weight: 600;\n\tfont-size: 16px;\n\tbackground-color: white;\n}\n\n.navItem,\n.searchBtn {\n\tcursor: pointer;\n\tfont-size: 16px;\n\tpadding: 2px 10px;\n\tborder-radius: 20px;\n\ttransition: ease 0.3s;\n}\n\n.navItem:hover,\n.searchBtn:hover {\n\tcolor: black;\n\tbackground-color: white;\n\ttransform: scale(1.05);\n}\n\n.divider {\n\twidth: 1px;\n\theight: 20px;\n\tbackground-color: white;\n\tmargin: 0 5px;\n}\n\n.chosenUnit {\n\tcolor: black;\n\tbackground-color: white;\n\tborder-radius: 20px;\n}\n\n/* Content */\n.content {\n\tdisplay: grid;\n\tgrid-template-columns: 90%;\n\tgrid-template-rows: 65% 35%;\n\tjustify-content: center;\n\tgrid-template-areas: \"curr\" \"forecast\";\n}\n\n/* Current Information */\n.currInfo {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\tpadding: 26px 0px;\n\tfont-weight: 400;\n\tgrid-area: curr;\n}\n\n.currInfoLeft {\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: 32px;\n\tpadding: 26px;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tmax-width: 720px;\n}\n\n.cityDate {\n\tfont-size: 16px;\n\tcolor: lightgray;\n}\n\n.cityName {\n\tfont-size: 46px;\n\tfont-weight: 500;\n}\n\n.leftDivider {\n\tmargin: 16px 0px;\n}\n\n.cityTemp {\n\tfont-size: 28px;\n\tfont-weight: 400;\n}\n\n.cityWeather {\n\tfont-size: 20px;\n\tfont-weight: 300;\n}\n\n.weatherIcon {\n\twidth: 128px;\n\theight: 128px;\n}\n\n.currInfoRight {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 26px;\n\talign-items: flex-end;\n\tjustify-content: center;\n}\n\n.rightInfoTitle {\n\tfont-size: 26px;\n\tfont-weight: 500;\n}\n\n.rightInfoNo {\n\tfont-weight: 300;\n\tfont-size: 22px;\n}\n\n.rightDivider {\n\tmargin: 10px 0px;\n}\n\n.leftDivider,\n.rightDivider {\n\tbackground-color: white;\n\theight: 1px;\n\twidth: 100%;\n\talign-self: center;\n}\n\n/* Forecast Information */\n.forecastSection {\n\tdisplay: flex;\n\tflex-direction: row;\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-rows: auto;\n\tmargin-bottom: 26px;\n\talign-items: center;\n\tjustify-items: center;\n\toverflow-x: scroll;\n\toverflow-y: hidden;\n\tgrid-area: forecast;\n}\n\n.forecastCard {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 90%;\n\twidth: 200px;\n\tborder-radius: 25px;\n\tborder: 1px solid rgba(255, 255, 255, 0.1);\n\tmargin: 10px;\n}\n\n.forecastDate {\n\tfont-size: 18px;\n\tfont-weight: 600;\n}\n\n.forecastTime {\n\tfont-size: 18px;\n\tfont-weight: 500;\n}\n\n.forecastMaxTemp,\n.forecastTemp {\n\tfont-size: 18px;\n\tfont-weight: 500;\n}\n\n.forecastMinTemp {\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tcolor: lightgray;\n}\n\n.weatherIconForecast {\n\twidth: 75px;\n\theight: 75px;\n}\n\n.currInfoLeft,\n.currInfoRight,\n.forecastSection,\nnav > *, \nfooter {\n\tborder: 1px solid rgba(255, 255, 255, 0.1);\n\tborder-radius: 25px;\n\tbackground-color: #00000080;\n\tbox-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);\n\tbackdrop-filter: blur(15px);\n}\n\n/* Footer */\nfooter {\n\tborder-radius: 0px;\n\tborder: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.footerText {\n    color: white;\n    font-size: 15px;\n}\n\n.githubIcon {\n    display: block;\n    width: 20px;\n    height: 20px;\n    margin-right: 2px;\n}"],"sourceRoot":""}]);
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
/* harmony export */   createFooter: () => (/* binding */ createFooter),
/* harmony export */   createNavItem: () => (/* binding */ createNavItem),
/* harmony export */   setCurrInfo: () => (/* binding */ setCurrInfo),
/* harmony export */   setForecast: () => (/* binding */ setForecast)
/* harmony export */ });
/* harmony import */ var _fetches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetches */ "./src/fetches.js");
/* harmony import */ var _images_morning_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/morning.png */ "./src/images/morning.png");
/* harmony import */ var _images_afternoon_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/afternoon.jpg */ "./src/images/afternoon.jpg");
/* harmony import */ var _images_evening_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/evening.jpg */ "./src/images/evening.jpg");
/* harmony import */ var _images_night_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/night.jpg */ "./src/images/night.jpg");
/* harmony import */ var _images_githubLogo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/githubLogo.svg */ "./src/images/githubLogo.svg");








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

function createFooter() {
    const footer = document.querySelector("footer");
    footer.classList.add("footer");

    const footerText = document.createElement("p");
    footerText.classList.add("footerText");
    footerText.textContent = "Designed & Built by Dechsit Naetsawan";

    const link = document.createElement("a");
    link.href = "https://github.com/naetsawd/OdinProject-WeatherApp";
    link.target = "_blank";

    const icon = document.createElement("img");
    icon.classList.add("githubIcon");
    icon.src = (_images_githubLogo_svg__WEBPACK_IMPORTED_MODULE_5__);

    link.appendChild(icon);

    footer.appendChild(link);
    footer.appendChild(footerText);
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

		if (!forecastData) {
			return [
				{ class: "forecastDate", text: "WeathAPI" },
				{ class: "forecastMaxTemp", text: "Trial Ended" },
				{ class: "forecastMaxTemp", text: "Information" },
				{ class: "forecastMinTemp", text: "Not Available" },
			];
		}

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

/***/ "./src/images/githubLogo.svg":
/*!***********************************!*\
  !*** ./src/images/githubLogo.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4577cfbb9306cfe891b.svg";

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
		(0,_content__WEBPACK_IMPORTED_MODULE_1__.createFooter)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUF5QztBQUNyRiw0Q0FBNEMsK0pBQTJEO0FBQ3ZHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFB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UUFBUSxxREFBVztBQUNuQixFQUFFLHNEQUFZO0FBQ2QsUUFBUSwwREFBYztBQUN0QixRQUFRLDBEQUFjO0FBQ3RCLFFBQVEsc0RBQVU7QUFDbEIsUUFBUSx1REFBVztBQUNuQixRQUFRLHNEQUFVO0FBQ2xCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQVE7O0FBRTVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksc0NBQXNDO0FBQzFDLElBQUkscUNBQXFDO0FBQ3pDLElBQUksc0NBQXNDO0FBQzFDLElBQUksd0NBQXdDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vc3JjL2ZldGNoZXMuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL3NyYy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy9MYXRvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZm9udHMvUGl4ZWxpZnlTYW5zLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogXCJMYXRvXCI7XG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogXCJQaXhlbGlmeVwiO1xuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4qIHtcblx0cGFkZGluZzogMHB4O1xuXHRtYXJnaW46IDBweDtcbn1cblxuYm9keSB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwdnc7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogOHZoIDg4dmggNHZoO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuYm9keTo6YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcblx0XHR0byBib3R0b20sXG5cdFx0cmdiYSgwLCAwLCAwLCAwLjc1KSAwJSxcblx0XHRyZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJVxuXHQpO1xuXHR6LWluZGV4OiAtMTtcbn1cblxuLyogSGVhZGVyICYgTmF2aWdhdGlvbiAqL1xuaGVhZGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRwYWRkaW5nOiAwcHggMzJweDtcbn1cblxuLnNpdGVUaXRsZSB7XG5cdGZvbnQtZmFtaWx5OiBcIlBpeGVsaWZ5XCIsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMzJweDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuXHRwYWRkaW5nOiAwcHggMTJweDtcbn1cblxubmF2IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxubmF2ID4gKixcbi5zZWFyY2hCb3gge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0cGFkZGluZzogM3B4IDdweDtcblx0bWFyZ2luOiAwcHggNXB4O1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5zZWFyY2hDb250YWluZXIge1xuXHRwYWRkaW5nOiA4cHg7XG59XG5cbi5pbnZhbGlkU2VhcmNoIHtcblx0Ym9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDtcbn1cblxuLnNlYXJjaEJveCxcbi5zZWFyY2hCdG4ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAwO1xufVxuXG4uc2VhcmNoQm94IHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDE2cHg7XG59XG5cbi5zZWFyY2hCdG4ge1xuXHRmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5uYXZJdGVtLFxuLnNlYXJjaEJ0biB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRwYWRkaW5nOiAycHggMTBweDtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0dHJhbnNpdGlvbjogZWFzZSAwLjNzO1xufVxuXG4ubmF2SXRlbTpob3Zlcixcbi5zZWFyY2hCdG46aG92ZXIge1xuXHRjb2xvcjogYmxhY2s7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4uZGl2aWRlciB7XG5cdHdpZHRoOiAxcHg7XG5cdGhlaWdodDogMjBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdG1hcmdpbjogMCA1cHg7XG59XG5cbi5jaG9zZW5Vbml0IHtcblx0Y29sb3I6IGJsYWNrO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLyogQ29udGVudCAqL1xuLmNvbnRlbnQge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJTtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA2NSUgMzUlO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjdXJyXCIgXCJmb3JlY2FzdFwiO1xufVxuXG4vKiBDdXJyZW50IEluZm9ybWF0aW9uICovXG4uY3VyckluZm8ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHBhZGRpbmc6IDI2cHggMHB4O1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRncmlkLWFyZWE6IGN1cnI7XG59XG5cbi5jdXJySW5mb0xlZnQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmb250LXNpemU6IDMycHg7XG5cdHBhZGRpbmc6IDI2cHg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0bWF4LXdpZHRoOiA3MjBweDtcbn1cblxuLmNpdHlEYXRlIHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRjb2xvcjogbGlnaHRncmF5O1xufVxuXG4uY2l0eU5hbWUge1xuXHRmb250LXNpemU6IDQ2cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sZWZ0RGl2aWRlciB7XG5cdG1hcmdpbjogMTZweCAwcHg7XG59XG5cbi5jaXR5VGVtcCB7XG5cdGZvbnQtc2l6ZTogMjhweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNpdHlXZWF0aGVyIHtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG4ud2VhdGhlckljb24ge1xuXHR3aWR0aDogMTI4cHg7XG5cdGhlaWdodDogMTI4cHg7XG59XG5cbi5jdXJySW5mb1JpZ2h0IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0cGFkZGluZzogMjZweDtcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJpZ2h0SW5mb1RpdGxlIHtcblx0Zm9udC1zaXplOiAyNnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4ucmlnaHRJbmZvTm8ge1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRmb250LXNpemU6IDIycHg7XG59XG5cbi5yaWdodERpdmlkZXIge1xuXHRtYXJnaW46IDEwcHggMHB4O1xufVxuXG4ubGVmdERpdmlkZXIsXG4ucmlnaHREaXZpZGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGhlaWdodDogMXB4O1xuXHR3aWR0aDogMTAwJTtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4vKiBGb3JlY2FzdCBJbmZvcm1hdGlvbiAqL1xuLmZvcmVjYXN0U2VjdGlvbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG5cdGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcblx0bWFyZ2luLWJvdHRvbTogMjZweDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xuXHRvdmVyZmxvdy14OiBzY3JvbGw7XG5cdG92ZXJmbG93LXk6IGhpZGRlbjtcblx0Z3JpZC1hcmVhOiBmb3JlY2FzdDtcbn1cblxuLmZvcmVjYXN0Q2FyZCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRoZWlnaHQ6IDkwJTtcblx0d2lkdGg6IDIwMHB4O1xuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG5cdG1hcmdpbjogMTBweDtcbn1cblxuLmZvcmVjYXN0RGF0ZSB7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZvcmVjYXN0VGltZSB7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZvcmVjYXN0TWF4VGVtcCxcbi5mb3JlY2FzdFRlbXAge1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5mb3JlY2FzdE1pblRlbXAge1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi53ZWF0aGVySWNvbkZvcmVjYXN0IHtcblx0d2lkdGg6IDc1cHg7XG5cdGhlaWdodDogNzVweDtcbn1cblxuLmN1cnJJbmZvTGVmdCxcbi5jdXJySW5mb1JpZ2h0LFxuLmZvcmVjYXN0U2VjdGlvbixcbm5hdiA+ICosIFxuZm9vdGVyIHtcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODA7XG5cdGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG59XG5cbi8qIEZvb3RlciAqL1xuZm9vdGVyIHtcblx0Ym9yZGVyLXJhZGl1czogMHB4O1xuXHRib3JkZXI6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9vdGVyVGV4dCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmdpdGh1Ykljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsbUJBQW1CO0NBQ25CLDRDQUFrQztDQUNsQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsNENBQW9EO0NBQ3BELGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxh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QUFZO0FBQ2I7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTs7Q0FFQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBOzs7OztDQUtDLDBDQUEwQztDQUMxQyxtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLDRDQUE0QztDQUM1QywyQkFBMkI7QUFDNUI7O0FBRUEsV0FBVztBQUNYO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxuXFx0c3JjOiB1cmwoXFxcImZvbnRzL0xhdG8tUmVndWxhci50dGZcXFwiKTtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiUGl4ZWxpZnlcXFwiO1xcblxcdHNyYzogdXJsKFxcXCJmb250cy9QaXhlbGlmeVNhbnMtVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG5cXHRwYWRkaW5nOiAwcHg7XFxuXFx0bWFyZ2luOiAwcHg7XFxufVxcblxcbmJvZHkge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDB2dztcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDh2aCA4OHZoIDR2aDtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG5ib2R5OjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdHRvIGJvdHRvbSxcXG5cXHRcXHRyZ2JhKDAsIDAsIDAsIDAuNzUpIDAlLFxcblxcdFxcdHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlXFxuXFx0KTtcXG5cXHR6LWluZGV4OiAtMTtcXG59XFxuXFxuLyogSGVhZGVyICYgTmF2aWdhdGlvbiAqL1xcbmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHBhZGRpbmc6IDBweCAzMnB4O1xcbn1cXG5cXG4uc2l0ZVRpdGxlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIlBpeGVsaWZ5XFxcIiwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDMycHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcblxcdHBhZGRpbmc6IDBweCAxMnB4O1xcbn1cXG5cXG5uYXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxubmF2ID4gKixcXG4uc2VhcmNoQm94IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRwYWRkaW5nOiAzcHggN3B4O1xcblxcdG1hcmdpbjogMHB4IDVweDtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5zZWFyY2hDb250YWluZXIge1xcblxcdHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmludmFsaWRTZWFyY2gge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7XFxufVxcblxcbi5zZWFyY2hCb3gsXFxuLnNlYXJjaEJ0biB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IDA7XFxufVxcblxcbi5zZWFyY2hCb3gge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5zZWFyY2hCdG4ge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXZJdGVtLFxcbi5zZWFyY2hCdG4ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0cGFkZGluZzogMnB4IDEwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXG5cXHR0cmFuc2l0aW9uOiBlYXNlIDAuM3M7XFxufVxcblxcbi5uYXZJdGVtOmhvdmVyLFxcbi5zZWFyY2hCdG46aG92ZXIge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4uZGl2aWRlciB7XFxuXFx0d2lkdGg6IDFweDtcXG5cXHRoZWlnaHQ6IDIwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luOiAwIDVweDtcXG59XFxuXFxuLmNob3NlblVuaXQge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4vKiBDb250ZW50ICovXFxuLmNvbnRlbnQge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCU7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA2NSUgMzUlO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjdXJyXFxcIiBcXFwiZm9yZWNhc3RcXFwiO1xcbn1cXG5cXG4vKiBDdXJyZW50IEluZm9ybWF0aW9uICovXFxuLmN1cnJJbmZvIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHBhZGRpbmc6IDI2cHggMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0Z3JpZC1hcmVhOiBjdXJyO1xcbn1cXG5cXG4uY3VyckluZm9MZWZ0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Zm9udC1zaXplOiAzMnB4O1xcblxcdHBhZGRpbmc6IDI2cHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFx0bWF4LXdpZHRoOiA3MjBweDtcXG59XFxuXFxuLmNpdHlEYXRlIHtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0Y29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmNpdHlOYW1lIHtcXG5cXHRmb250LXNpemU6IDQ2cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmxlZnREaXZpZGVyIHtcXG5cXHRtYXJnaW46IDE2cHggMHB4O1xcbn1cXG5cXG4uY2l0eVRlbXAge1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uY2l0eVdlYXRoZXIge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4ud2VhdGhlckljb24ge1xcblxcdHdpZHRoOiAxMjhweDtcXG5cXHRoZWlnaHQ6IDEyOHB4O1xcbn1cXG5cXG4uY3VyckluZm9SaWdodCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IDI2cHg7XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucmlnaHRJbmZvVGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMjZweDtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucmlnaHRJbmZvTm8ge1xcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxuXFx0Zm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4ucmlnaHREaXZpZGVyIHtcXG5cXHRtYXJnaW46IDEwcHggMHB4O1xcbn1cXG5cXG4ubGVmdERpdmlkZXIsXFxuLnJpZ2h0RGl2aWRlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0aGVpZ2h0OiAxcHg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4vKiBGb3JlY2FzdCBJbmZvcm1hdGlvbiAqL1xcbi5mb3JlY2FzdFNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcblxcdG1hcmdpbi1ib3R0b206IDI2cHg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFx0b3ZlcmZsb3cteDogc2Nyb2xsO1xcblxcdG92ZXJmbG93LXk6IGhpZGRlbjtcXG5cXHRncmlkLWFyZWE6IGZvcmVjYXN0O1xcbn1cXG5cXG4uZm9yZWNhc3RDYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDkwJTtcXG5cXHR3aWR0aDogMjAwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjVweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuXFx0bWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3REYXRlIHtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZvcmVjYXN0VGltZSB7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5mb3JlY2FzdE1heFRlbXAsXFxuLmZvcmVjYXN0VGVtcCB7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5mb3JlY2FzdE1pblRlbXAge1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi53ZWF0aGVySWNvbkZvcmVjYXN0IHtcXG5cXHR3aWR0aDogNzVweDtcXG5cXHRoZWlnaHQ6IDc1cHg7XFxufVxcblxcbi5jdXJySW5mb0xlZnQsXFxuLmN1cnJJbmZvUmlnaHQsXFxuLmZvcmVjYXN0U2VjdGlvbixcXG5uYXYgPiAqLCBcXG5mb290ZXIge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG5cXHRib3JkZXItcmFkaXVzOiAyNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4MDtcXG5cXHRib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbmZvb3RlciB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMHB4O1xcblxcdGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXJUZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5naXRodWJJY29uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcblx0ZmV0Y2hMZWZ0SW5mbyxcblx0ZmV0Y2hSaWdodEluZm8sXG5cdGZldGNoRm9yZWNhc3REYWlseSxcblx0ZmV0Y2hGb3JlY2FzdEhvdXJseSxcblx0ZmV0Y2hDdXJyVGltZVxufSBmcm9tIFwiLi9mZXRjaGVzXCI7XG5cbmltcG9ydCBtb3JuaW5nIGZyb20gXCIuL2ltYWdlcy9tb3JuaW5nLnBuZ1wiXG5pbXBvcnQgYWZ0ZXJub29uIGZyb20gXCIuL2ltYWdlcy9hZnRlcm5vb24uanBnXCJcbmltcG9ydCBldmVuaW5nIGZyb20gXCIuL2ltYWdlcy9ldmVuaW5nLmpwZ1wiXG5pbXBvcnQgbmlnaHQgZnJvbSBcIi4vaW1hZ2VzL25pZ2h0LmpwZ1wiXG5pbXBvcnQgZ2l0aHViTG9nbyBmcm9tIFwiLi9pbWFnZXMvZ2l0aHViTG9nby5zdmdcIjtcblxuZnVuY3Rpb24gc2V0QmFja2dyb3VuZChjaXR5KSB7XG5cdGZldGNoQ3VyclRpbWUoY2l0eSlcblx0ICAudGhlbih0aW1lID0+IHtcblx0XHRsZXQgYmFja2dyb3VuZEltYWdlVXJsO1xuXG5cdFx0aWYgKHRpbWUgPj0gNSAmJiB0aW1lIDwgMTIpIHtcblx0XHQgIGJhY2tncm91bmRJbWFnZVVybCA9IG1vcm5pbmc7XG5cdFx0fSBlbHNlIGlmICh0aW1lID49IDEyICYmIHRpbWUgPCAxNykge1xuXHRcdCAgYmFja2dyb3VuZEltYWdlVXJsID0gYWZ0ZXJub29uO1xuXHRcdH0gZWxzZSBpZiAodGltZSA+PSAxNyAmJiB0aW1lIDwgMjApIHtcblx0XHQgIGJhY2tncm91bmRJbWFnZVVybCA9IGV2ZW5pbmc7XG5cdFx0fSBlbHNlIHtcblx0XHQgIGJhY2tncm91bmRJbWFnZVVybCA9IG5pZ2h0O1xuXHRcdH1cbiAgXG5cdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmFja2dyb3VuZEltYWdlVXJsfSlgO1xuXHQgIH0pO1xuICB9XG4gIFxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmF2SXRlbShjb250YWluZXIsIGl0ZW1zKSB7XG5cdGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXHR1bC5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lcik7XG5cblx0aXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRsaS5jbGFzc0xpc3QuYWRkKFwibmF2SXRlbVwiKTtcblx0XHRsaS5jbGFzc0xpc3QuYWRkKGl0ZW0uY2xhc3MpO1xuXHRcdGxpLnRleHRDb250ZW50ID0gaXRlbS50ZXh0O1xuXG5cdFx0dWwuYXBwZW5kKGxpKTtcblxuXHRcdGlmIChpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHtcblx0XHRcdGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0XHRkaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJkaXZpZGVyXCIpO1xuXHRcdFx0dWwuYXBwZW5kKGRpdmlkZXIpO1xuXHRcdH1cblx0fSk7XG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKS5hcHBlbmQodWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VyckluZm8oKSB7XG4gICAgbGV0IGNpdHkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlcIik7XG4gICAgbGV0IHRlbXBVbml0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZW1wVW5pdFwiKTtcbiAgICBsZXQgc3BlZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNwZWVkVW5pdFwiKTtcblxuXHRzZXRCYWNrZ3JvdW5kKGNpdHkpO1xuXG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cblx0Y29uc3QgY3VyckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y3VyckluZm8uY2xhc3NMaXN0LmFkZChcImN1cnJJbmZvXCIpO1xuXHRjdXJySW5mby5pbm5lckhUTUwgPSBgYDtcblxuXHRjb25zdCBjdXJySW5mb0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y3VyckluZm9MZWZ0LmNsYXNzTGlzdC5hZGQoXCJjdXJySW5mb0xlZnRcIik7XG5cdFxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW1xuXHRcdGZldGNoTGVmdEluZm8oY2l0eSwgdGVtcFVuaXQpLFxuXHRcdGZldGNoUmlnaHRJbmZvKGNpdHksIHNwZWVkKSxcblx0XSkudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuXHRcdGNvbnN0IGxlZnRJbmZvUmVzdWx0ID0gcmVzdWx0c1swXTtcblx0XHRjb25zdCByaWdodEluZm9SZXN1bHQgPSByZXN1bHRzWzFdO1xuXG5cdFx0bGVmdEluZm9SZXN1bHQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0aWYgKGl0ZW0uaWNvbikge1xuXHRcdFx0XHRjb25zdCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0XHRcdFx0aWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGl0ZW0uY2xhc3MpO1xuXHRcdFx0XHRpY29uQ29udGFpbmVyLnNyYyA9IGl0ZW0uaWNvbjtcblxuXHRcdFx0XHRjdXJySW5mb0xlZnQuYXBwZW5kKGljb25Db250YWluZXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcblx0XHRcdFx0dGV4dENvbnRhaW5lci50ZXh0Q29udGVudCA9IGl0ZW0udGV4dDtcblxuXHRcdFx0XHRjdXJySW5mb0xlZnQuYXBwZW5kKHRleHRDb250YWluZXIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgY3VyckluZm9SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRcdGN1cnJJbmZvUmlnaHQuY2xhc3NMaXN0LmFkZChcImN1cnJJbmZvUmlnaHRcIik7XG5cblx0XHRyaWdodEluZm9SZXN1bHQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHR0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoaXRlbS5jbGFzcyk7XG5cdFx0XHR0ZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gaXRlbS50ZXh0O1xuXG5cdFx0XHRjdXJySW5mb1JpZ2h0LmFwcGVuZCh0ZXh0Q29udGFpbmVyKTtcblx0XHR9KTtcblxuXHRcdGN1cnJJbmZvLmFwcGVuZChjdXJySW5mb0xlZnQsIGN1cnJJbmZvUmlnaHQpO1xuXHRcdGNvbnRlbnQuYXBwZW5kKGN1cnJJbmZvKTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGb3JlY2FzdCgpIHtcbiAgICBsZXQgY2l0eSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0eVwiKTtcbiAgICBsZXQgdGVtcFVuaXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlbXBVbml0XCIpO1xuICAgIGxldCB0eXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb3JlY2FzdFwiKTtcblxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG5cdGxldCBmb3JlY2FzdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0U2VjdGlvblwiKTtcblx0aWYgKCFmb3JlY2FzdFNlY3Rpb24pIHtcblx0XHRmb3JlY2FzdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0XHRmb3JlY2FzdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0U2VjdGlvblwiKTtcblx0XHRjb250ZW50LmFwcGVuZChmb3JlY2FzdFNlY3Rpb24pO1xuXHR9XG5cblx0Zm9yZWNhc3RTZWN0aW9uLmlubmVySFRNTCA9IGBgO1xuXG5cdGNvbnN0IGZldGNoUHJvbWlzZXMgPSBbXTtcblx0aWYgKHR5cGUgPT09IFwiZGFpbHlcIikge1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgNzsgaSsrKSB7XG5cdFx0XHRmZXRjaFByb21pc2VzLnB1c2goZmV0Y2hGb3JlY2FzdERhaWx5KGksIGNpdHksIHRlbXBVbml0KSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgMjQ7IGkrKykge1xuXHRcdFx0ZmV0Y2hQcm9taXNlcy5wdXNoKGZldGNoRm9yZWNhc3RIb3VybHkoaSwgY2l0eSwgdGVtcFVuaXQpKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoZmV0Y2hQcm9taXNlcykudGhlbigocmVzdWx0cykgPT4ge1xuXHRcdHJlc3VsdHMuZm9yRWFjaCgoZm9yZWNhc3REYXRhKSA9PiB7XG5cdFx0XHRjb25zdCBmb3JlY2FzdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0Zm9yZWNhc3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdENhcmRcIik7XG5cblx0XHRcdGZvcmVjYXN0RGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdGlmIChpdGVtLmNsYXNzID09PSBcIndlYXRoZXJJY29uRm9yZWNhc3RcIikge1xuXHRcdFx0XHRcdGNvbnN0IHdlYXRoZXJJY29uRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRcdFx0XHRcdHdlYXRoZXJJY29uRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcblx0XHRcdFx0XHR3ZWF0aGVySWNvbkZvcmVjYXN0LnNyYyA9IGl0ZW0uaWNvbjtcblxuXHRcdFx0XHRcdGZvcmVjYXN0Q2FyZC5hcHBlbmQod2VhdGhlckljb25Gb3JlY2FzdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3QgZm9yZWNhc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRmb3JlY2FzdEl0ZW0uY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcblx0XHRcdFx0XHRmb3JlY2FzdEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtLnRleHQ7XG5cblx0XHRcdFx0XHRmb3JlY2FzdENhcmQuYXBwZW5kKGZvcmVjYXN0SXRlbSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRmb3JlY2FzdFNlY3Rpb24uYXBwZW5kKGZvcmVjYXN0Q2FyZCk7XG5cdFx0fSk7XG5cblx0XHRjb250ZW50LmFwcGVuZChmb3JlY2FzdFNlY3Rpb24pO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZvb3RlclRleHQuY2xhc3NMaXN0LmFkZChcImZvb3RlclRleHRcIik7XG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiRGVzaWduZWQgJiBCdWlsdCBieSBEZWNoc2l0IE5hZXRzYXdhblwiO1xuXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL25hZXRzYXdkL09kaW5Qcm9qZWN0LVdlYXRoZXJBcHBcIjtcbiAgICBsaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJnaXRodWJJY29uXCIpO1xuICAgIGljb24uc3JjID0gKGdpdGh1YkxvZ28pO1xuXG4gICAgbGluay5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZldGNoUmVxdWVzdChjaXR5KSB7XG5cdHJldHVybiBmZXRjaChcblx0XHRcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTE0ZjZlNjcwYjljYTQ2ZmNhZjIyMDM2NTUyMzExMTAmcT1cIiArXG5cdFx0XHRjaXR5ICtcblx0XHRcdFwiJmRheXM9NyZhcWk9bm8mYWxlcnRzPW5vXCIsXG5cdFx0eyBtb2RlOiBcImNvcnNcIiB9XG5cdCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdGlmICghcmVzcG9uc2Uub2spIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0Y29uc3Qgc2VhcmNoQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQ29udGFpbmVyXCIpO1xuXHRcdFx0c2VhcmNoQ29udC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFNlYXJjaFwiKTtcblxuXHRcdFx0Y29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hCb3hcIik7XG5cdFx0XHRzZWFyY2hCb3gucGxhY2Vob2xkZXIgPSBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIG5hbWVcIjtcblxuXHRcdFx0cmV0dXJuIGRlZmF1bHRGZXRjaCgpO1xuXHRcdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEZldGNoKCkge1xuXHRyZXR1cm4gZmV0Y2goXG5cdFx0XCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0xNGY2ZTY3MGI5Y2E0NmZjYWYyMjAzNjU1MjMxMTEwJnE9XCIgK1xuXHRcdFx0bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmV2Q2l0eVwiKSArXG5cdFx0XHRcIiZkYXlzPTcmYXFpPW5vJmFsZXJ0cz1ub1wiLFxuXHRcdHsgbW9kZTogXCJjb3JzXCIgfVxuXHQpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuXHRcdH1cblxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0eVwiLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByZXZDaXR5XCIpKTtcblxuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hMZWZ0SW5mbyhjaXR5LCB0ZW1wVW5pdCkge1xuXHRyZXR1cm4gZmV0Y2hSZXF1ZXN0KGNpdHkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0Y29uc3QgbG9jYWxUaW1lRXBvY2ggPSByZXNwb25zZS5sb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2ggKiAxMDAwO1xuXHRcdGNvbnN0IGxvY2FsVGltZURhdGUgPSBuZXcgRGF0ZShsb2NhbFRpbWVFcG9jaCk7XG5cblx0XHRjb25zdCBmb3JtYXR0ZWREYXRlID0gbG9jYWxUaW1lRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7XG5cdFx0XHR0aW1lWm9uZTogcmVzcG9uc2UubG9jYXRpb24udHpfaWQsXG5cdFx0XHR3ZWVrZGF5OiBcImxvbmdcIixcblx0XHRcdHllYXI6IFwibnVtZXJpY1wiLFxuXHRcdFx0bW9udGg6IFwibG9uZ1wiLFxuXHRcdFx0ZGF5OiBcIm51bWVyaWNcIixcblx0XHRcdGhvdXI6IFwiMi1kaWdpdFwiLFxuXHRcdFx0bWludXRlOiBcIjItZGlnaXRcIixcblx0XHR9KTtcblxuXHRcdGxldCB0ZW1wVmFsID0gcmVzcG9uc2UuY3VycmVudC50ZW1wX2M7XG5cdFx0bGV0IGZlZWxzVmFsID0gcmVzcG9uc2UuY3VycmVudC5mZWVsc2xpa2VfYztcblxuXHRcdGlmICh0ZW1wVW5pdCA9PT0gXCLCsEZcIikge1xuXHRcdFx0dGVtcFZhbCA9IHJlc3BvbnNlLmN1cnJlbnQudGVtcF9mO1xuXHRcdFx0ZmVlbHNWYWwgPSByZXNwb25zZS5jdXJyZW50LmZlZWxzbGlrZV9mO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHR7IGNsYXNzOiBcImNpdHlEYXRlXCIsIHRleHQ6IGZvcm1hdHRlZERhdGUgfSxcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3M6IFwiY2l0eU5hbWVcIixcblx0XHRcdFx0dGV4dDogcmVzcG9uc2UubG9jYXRpb24ubmFtZSArIFwiLCBcIiArIHJlc3BvbnNlLmxvY2F0aW9uLmNvdW50cnksXG5cdFx0XHR9LFxuXHRcdFx0eyBjbGFzczogXCJsZWZ0RGl2aWRlclwiLCB0ZXh0OiBcIlwiIH0sXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzOiBcImNpdHlUZW1wXCIsXG5cdFx0XHRcdHRleHQ6IHRlbXBWYWwgKyB0ZW1wVW5pdCArIFwiIHwgRmVlbHMgTGlrZSBcIiArIGZlZWxzVmFsICsgdGVtcFVuaXQsXG5cdFx0XHR9LFxuXHRcdFx0eyBjbGFzczogXCJjaXR5V2VhdGhlclwiLCB0ZXh0OiByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0IH0sXG5cdFx0XHR7IGNsYXNzOiBcIndlYXRoZXJJY29uXCIsIGljb246IHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLmljb24gfSxcblx0XHRdO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUmlnaHRJbmZvKGNpdHksIHNwZWVkKSB7XG5cdHJldHVybiBmZXRjaFJlcXVlc3QoY2l0eSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRsZXQgc3BlZWRWYWwgPSByZXNwb25zZS5jdXJyZW50LndpbmRfa3BoO1xuXG5cdFx0aWYgKHNwZWVkID09PSBcIm1pXCIpIHtcblx0XHRcdHNwZWVkVmFsID0gcmVzcG9uc2UuY3VycmVudC53aW5kX21waDtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIFtcblx0XHRcdHsgY2xhc3M6IFwicmlnaHRJbmZvVGl0bGVcIiwgdGV4dDogXCJIdW1pZGl0eVwiIH0sXG5cdFx0XHR7IGNsYXNzOiBcInJpZ2h0SW5mb05vXCIsIHRleHQ6IHJlc3BvbnNlLmN1cnJlbnQuaHVtaWRpdHkgKyBcIiAlXCIgfSxcblx0XHRcdHsgY2xhc3M6IFwicmlnaHREaXZpZGVyXCIsIHRleHQ6IFwiXCIgfSxcblx0XHRcdHsgY2xhc3M6IFwicmlnaHRJbmZvVGl0bGVcIiwgdGV4dDogXCJDaGFuY2Ugb2YgUmFpblwiIH0sXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzOiBcInJpZ2h0SW5mb05vXCIsXG5cdFx0XHRcdHRleHQ6IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV93aWxsX2l0X3JhaW4gKyBcIiAlXCIsXG5cdFx0XHR9LFxuXHRcdFx0eyBjbGFzczogXCJyaWdodERpdmlkZXJcIiwgdGV4dDogXCJcIiB9LFxuXHRcdFx0eyBjbGFzczogXCJyaWdodEluZm9UaXRsZVwiLCB0ZXh0OiBcIkNoYW5jZSBvZiBTbm93XCIgfSxcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3M6IFwicmlnaHRJbmZvTm9cIixcblx0XHRcdFx0dGV4dDogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X3dpbGxfaXRfc25vdyArIFwiICVcIixcblx0XHRcdH0sXG5cdFx0XHR7IGNsYXNzOiBcInJpZ2h0RGl2aWRlclwiLCB0ZXh0OiBcIlwiIH0sXG5cdFx0XHR7IGNsYXNzOiBcInJpZ2h0SW5mb1RpdGxlXCIsIHRleHQ6IFwiV2luZCBTcGVlZFwiIH0sXG5cdFx0XHR7IGNsYXNzOiBcInJpZ2h0SW5mb05vXCIsIHRleHQ6IHNwZWVkVmFsICsgXCIgXCIgKyBzcGVlZCArIFwiL2hcIiB9LFxuXHRcdF07XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hGb3JlY2FzdERhaWx5KG51bSwgY2l0eSwgdGVtcFVuaXQpIHtcblx0cmV0dXJuIGZldGNoUmVxdWVzdChjaXR5KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdGxldCBmb3JlY2FzdERhdGEgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVtudW1dO1xuXG5cdFx0aWYgKCFmb3JlY2FzdERhdGEpIHtcblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdHsgY2xhc3M6IFwiZm9yZWNhc3REYXRlXCIsIHRleHQ6IFwiV2VhdGhBUElcIiB9LFxuXHRcdFx0XHR7IGNsYXNzOiBcImZvcmVjYXN0TWF4VGVtcFwiLCB0ZXh0OiBcIlRyaWFsIEVuZGVkXCIgfSxcblx0XHRcdFx0eyBjbGFzczogXCJmb3JlY2FzdE1heFRlbXBcIiwgdGV4dDogXCJJbmZvcm1hdGlvblwiIH0sXG5cdFx0XHRcdHsgY2xhc3M6IFwiZm9yZWNhc3RNaW5UZW1wXCIsIHRleHQ6IFwiTm90IEF2YWlsYWJsZVwiIH0sXG5cdFx0XHRdO1xuXHRcdH1cblxuXHRcdGNvbnN0IGxvY2FsVGltZURhdGUgPSBuZXcgRGF0ZShmb3JlY2FzdERhdGEuZGF0ZSk7XG5cblx0XHRjb25zdCBmb3JtYXR0ZWREYXRlID0gbG9jYWxUaW1lRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7XG5cdFx0XHR0aW1lWm9uZTogcmVzcG9uc2UubG9jYXRpb24udHpfaWQsXG5cdFx0XHR3ZWVrZGF5OiBcInNob3J0XCIsXG5cdFx0XHRtb250aDogXCJzaG9ydFwiLFxuXHRcdFx0ZGF5OiBcIm51bWVyaWNcIlxuXHRcdH0pO1xuXG5cdFx0bGV0IHRlbXBWYWxNYXggPSBmb3JlY2FzdERhdGEuZGF5Lm1heHRlbXBfYztcblx0XHRsZXQgdGVtcFZhbE1pbiA9IGZvcmVjYXN0RGF0YS5kYXkubWludGVtcF9jO1xuXG5cdFx0aWYgKHRlbXBVbml0ID09PSBcIsKwRlwiKSB7XG5cdFx0XHR0ZW1wVmFsTWF4ID0gZm9yZWNhc3REYXRhLmRheS5tYXh0ZW1wX2Y7XG5cdFx0XHR0ZW1wVmFsTWluID0gZm9yZWNhc3REYXRhLmRheS5taW50ZW1wX2Y7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHsgY2xhc3M6IFwiZm9yZWNhc3REYXRlXCIsIHRleHQ6IGZvcm1hdHRlZERhdGUgfSxcblx0XHRcdHsgY2xhc3M6IFwid2VhdGhlckljb25Gb3JlY2FzdFwiLCBpY29uOiBmb3JlY2FzdERhdGEuZGF5LmNvbmRpdGlvbi5pY29uIH0sXG5cdFx0XHR7IGNsYXNzOiBcImZvcmVjYXN0TWF4VGVtcFwiLCB0ZXh0OiB0ZW1wVmFsTWF4ICsgdGVtcFVuaXQgfSxcblx0XHRcdHsgY2xhc3M6IFwiZm9yZWNhc3RNaW5UZW1wXCIsIHRleHQ6IHRlbXBWYWxNaW4gKyB0ZW1wVW5pdCB9LFxuXHRcdF07XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hGb3JlY2FzdEhvdXJseShudW0sIGNpdHksIHRlbXBVbml0KSB7XG5cdHJldHVybiBmZXRjaFJlcXVlc3QoY2l0eSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRsZXQgZm9yZWNhc3REYXRhID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltudW1dO1xuXG5cdFx0Y29uc3QgbG9jYWxUaW1lRXBvY2ggPSBmb3JlY2FzdERhdGEudGltZV9lcG9jaCAqIDEwMDA7XG5cdFx0Y29uc3QgbG9jYWxUaW1lRGF0ZSA9IG5ldyBEYXRlKGxvY2FsVGltZUVwb2NoKTtcblxuXHRcdGNvbnN0IGZvcm1hdHRlZERhdGUgPSBsb2NhbFRpbWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcblx0XHRcdHRpbWVab25lOiByZXNwb25zZS5sb2NhdGlvbi50el9pZCxcblx0XHRcdHdlZWtkYXk6IFwic2hvcnRcIixcblx0XHRcdG1vbnRoOiBcInNob3J0XCIsXG5cdFx0XHRkYXk6IFwibnVtZXJpY1wiXG5cdFx0fSk7XG5cblx0XHRjb25zdCBmb3JtYXR0ZWRUaW1lID0gbG9jYWxUaW1lRGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG5cdFx0XHR0aW1lWm9uZTogcmVzcG9uc2UubG9jYXRpb24udHpfaWQsXG5cdFx0XHRob3VyOiBcIm51bWVyaWNcIlxuXHRcdH0pO1xuXG5cdFx0bGV0IHRlbXBWYWwgPSBmb3JlY2FzdERhdGEudGVtcF9jO1xuXG5cdFx0aWYgKHRlbXBVbml0ID09PSBcIsKwRlwiKSB7XG5cdFx0XHR0ZW1wVmFsID0gZm9yZWNhc3REYXRhLnRlbXBfZjtcblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0eyBjbGFzczogXCJmb3JlY2FzdERhdGVcIiwgdGV4dDogZm9ybWF0dGVkRGF0ZSB9LFxuXHRcdFx0eyBjbGFzczogXCJmb3JlY2FzdFRpbWVcIiwgdGV4dDogZm9ybWF0dGVkVGltZSB9LFxuXHRcdFx0eyBjbGFzczogXCJ3ZWF0aGVySWNvbkZvcmVjYXN0XCIsIGljb246IGZvcmVjYXN0RGF0YS5jb25kaXRpb24uaWNvbiB9LFxuXHRcdFx0eyBjbGFzczogXCJmb3JlY2FzdFRlbXBcIiwgdGV4dDogdGVtcFZhbCArIHRlbXBVbml0IH0sXG5cdFx0XTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEN1cnJUaW1lKGNpdHkpIHtcblx0cmV0dXJuIGZldGNoUmVxdWVzdChjaXR5KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdGNvbnN0IGxvY2FsVGltZUVwb2NoID0gcmVzcG9uc2UubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoICogMTAwMDtcblx0XHRjb25zdCBsb2NhbFRpbWVEYXRlID0gbmV3IERhdGUobG9jYWxUaW1lRXBvY2gpO1xuXG5cdFx0Y29uc3QgZm9ybWF0dGVkVGltZSA9IGxvY2FsVGltZURhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIiwge1xuXHRcdFx0dGltZVpvbmU6IHJlc3BvbnNlLmxvY2F0aW9uLnR6X2lkLFxuXHRcdFx0aG91cjogXCIyLWRpZ2l0XCIsXG5cdFx0XHRob3VyMTI6IGZhbHNlXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZm9ybWF0dGVkVGltZTtcblx0fSk7XG59IiwiaW1wb3J0IHsgc2V0Q3VyckluZm8sIHNldEZvcmVjYXN0IH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hvc2VuVW5pdCgpIHtcblx0Y29uc3QgdW5pdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdkl0ZW1cIik7XG5cblx0dW5pdHMuZm9yRWFjaCgodW5pdCkgPT4ge1xuXHRcdHVuaXQuY2xhc3NMaXN0LnJlbW92ZShcImNob3NlblVuaXRcIik7XG5cdH0pO1xuXG5cdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZvcmVjYXN0XCIpID09PSBcImRhaWx5XCIpIHtcblx0XHR1bml0c1swXS5jbGFzc0xpc3QuYWRkKFwiY2hvc2VuVW5pdFwiKTtcblx0fSBlbHNlIHtcblx0XHR1bml0c1sxXS5jbGFzc0xpc3QuYWRkKFwiY2hvc2VuVW5pdFwiKTtcblx0fVxuXG5cdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlbXBVbml0XCIpID09PSBcIsKwQ1wiKSB7XG5cdFx0dW5pdHNbMl0uY2xhc3NMaXN0LmFkZChcImNob3NlblVuaXRcIik7XG5cdH0gZWxzZSB7XG5cdFx0dW5pdHNbM10uY2xhc3NMaXN0LmFkZChcImNob3NlblVuaXRcIik7XG5cdH1cblxuXHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzcGVlZFVuaXRcIikgPT09IFwia21cIikge1xuXHRcdHVuaXRzWzRdLmNsYXNzTGlzdC5hZGQoXCJjaG9zZW5Vbml0XCIpO1xuXHR9IGVsc2Uge1xuXHRcdHVuaXRzWzVdLmNsYXNzTGlzdC5hZGQoXCJjaG9zZW5Vbml0XCIpO1xuXHR9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hGdW5jdGlvbigpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblx0Y29uc3Qgc2VhcmNoQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQ29udGFpbmVyXCIpO1xuXHRjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaEJveFwiKTtcblx0Y29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hCdG5cIik7XG5cblx0c2VhcmNoQnRuLm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHNlYXJjaEJveC52YWx1ZS50cmltKCkpIHtcblx0XHRcdHNlYXJjaENvbnQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRTZWFyY2hcIik7XG5cdFx0XHRzZWFyY2hCb3gucGxhY2Vob2xkZXIgPSBcIlNlYXJjaFwiO1xuXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByZXZDaXR5XCIsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0eVwiKSk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdHlcIiwgc2VhcmNoQm94LnZhbHVlKTtcblxuXHRcdFx0Y29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdFx0c2VhcmNoQm94LnZhbHVlID0gXCJcIjtcblx0XHRcdGF3YWl0IHNldEN1cnJJbmZvKCk7XG5cdFx0XHRhd2FpdCBzZXRGb3JlY2FzdCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZWFyY2hDb250LmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkU2VhcmNoXCIpO1xuXHRcdFx0c2VhcmNoQm94LnBsYWNlaG9sZGVyID0gXCJQbGVhc2UgZW50ZXIgYSBuYW1lXCI7XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3dpdGNoRm9yZWNhc3QoKSB7XG5cdGNvbnN0IGZvcmVjYXN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RTZWN0aW9uXCIpO1xuXHRjb25zdCBkYWlseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHlcIik7XG5cdGNvbnN0IGhvdXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5XCIpO1xuXG5cdGRhaWx5Lm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb3JlY2FzdFwiLCBcImRhaWx5XCIpO1xuXG5cdFx0Zm9yZWNhc3RTZWN0aW9uLmlubmVySFRNTCA9IFwiXCI7XG5cdFx0Y2hvc2VuVW5pdCgpO1xuXHRcdGF3YWl0IHNldEZvcmVjYXN0KCk7XG5cdH07XG5cblx0aG91cmx5Lm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb3JlY2FzdFwiLCBcImhvdXJseVwiKTtcblxuXHRcdGZvcmVjYXN0U2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGNob3NlblVuaXQoKTtcblx0XHRhd2FpdCBzZXRGb3JlY2FzdCgpO1xuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3dpdGNoVGVtcCgpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblx0Y29uc3QgQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Vsc2l1c1wiKTtcblx0Y29uc3QgRiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmFocmVuaGVpdFwiKTtcblxuXHRDLm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0ZW1wVW5pdFwiLCBcIsKwQ1wiKTtcblxuXHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRjaG9zZW5Vbml0KCk7XG5cdFx0YXdhaXQgc2V0Q3VyckluZm8oKTtcblx0XHRhd2FpdCBzZXRGb3JlY2FzdCgpO1xuXHR9O1xuXG5cdEYub25jbGljayA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRlbXBVbml0XCIsIFwiwrBGXCIpO1xuXG5cdFx0Y29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGNob3NlblVuaXQoKTtcblx0XHRhd2FpdCBzZXRDdXJySW5mbygpO1xuXHRcdGF3YWl0IHNldEZvcmVjYXN0KCk7XG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzd2l0Y2hTcGVlZCgpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblx0Y29uc3QgS00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmtpbG9tZXRlcnNcIik7XG5cdGNvbnN0IE1JID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taWxlc1wiKTtcblxuXHRLTS5vbmNsaWNrID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3BlZWRVbml0XCIsIFwia21cIik7XG5cblx0XHRjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cdFx0Y2hvc2VuVW5pdCgpO1xuXHRcdGF3YWl0IHNldEN1cnJJbmZvKCk7XG5cdFx0YXdhaXQgc2V0Rm9yZWNhc3QoKTtcblx0fTtcblxuXHRNSS5vbmNsaWNrID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3BlZWRVbml0XCIsIFwibWlcIik7XG5cblx0XHRjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cdFx0Y2hvc2VuVW5pdCgpO1xuXHRcdGF3YWl0IHNldEN1cnJJbmZvKCk7XG5cdFx0YXdhaXQgc2V0Rm9yZWNhc3QoKTtcblx0fTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQgeyBcbiAgICBjcmVhdGVOYXZJdGVtLCBcbiAgICBzZXRDdXJySW5mbywgXG4gICAgc2V0Rm9yZWNhc3QsXG5cdGNyZWF0ZUZvb3RlciBcbn0gZnJvbSBcIi4vY29udGVudFwiO1xuaW1wb3J0IHtcblx0c2VhcmNoRnVuY3Rpb24sXG5cdGNob3NlblVuaXQsXG5cdHN3aXRjaEZvcmVjYXN0LFxuXHRzd2l0Y2hUZW1wLFxuXHRzd2l0Y2hTcGVlZFxufSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcblxuaW1wb3J0IHNpdGVMb2dvIGZyb20gXCIuL2ltYWdlcy9zaXRlTG9nby5wbmdcIjtcblxuY29uc3QgdGVtcFVuaXRJdGVtcyA9IFtcblx0eyBjbGFzczogXCJjZWxzaXVzXCIsIHRleHQ6IFwiwrBDXCIgfSxcblx0eyBjbGFzczogXCJmYWhyZW5oZWl0XCIsIHRleHQ6IFwiwrBGXCIgfSxcbl07XG5cbmNvbnN0IHNwZWVkVW5pdEl0ZW1zID0gW1xuXHR7IGNsYXNzOiBcImtpbG9tZXRlcnNcIiwgdGV4dDogXCJrbVwiIH0sXG5cdHsgY2xhc3M6IFwibWlsZXNcIiwgdGV4dDogXCJtaVwiIH0sXG5dO1xuXG5jb25zdCBmb3JlY2FzdE9wdCA9IFtcblx0eyBjbGFzczogXCJkYWlseVwiLCB0ZXh0OiBcIkRhaWx5XCIgfSxcblx0eyBjbGFzczogXCJob3VybHlcIiwgdGV4dDogXCJIb3VybHlcIiB9LFxuXTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG5cdFx0aW5pdGlhbGl6ZUxvY2FsU3RvcmFnZSgpO1xuXHRcdHNldEZhdmljb24oKTtcbiAgICAgICAgY3JlYXRlTmF2SXRlbShcImZvcmVjYXN0T3B0XCIsIGZvcmVjYXN0T3B0KTtcbiAgICAgICAgY3JlYXRlTmF2SXRlbShcInRlbXBVbml0XCIsIHRlbXBVbml0SXRlbXMpO1xuICAgICAgICBjcmVhdGVOYXZJdGVtKFwic3BlZWRVbml0XCIsIHNwZWVkVW5pdEl0ZW1zKTtcbiAgICAgICAgc2V0Q3VyckluZm8oKTtcbiAgICAgICAgc2V0Rm9yZWNhc3QoKTtcblx0XHRjcmVhdGVGb290ZXIoKTtcbiAgICAgICAgc2VhcmNoRnVuY3Rpb24oKTtcbiAgICAgICAgc3dpdGNoRm9yZWNhc3QoKTtcbiAgICAgICAgc3dpdGNoVGVtcCgpO1xuICAgICAgICBzd2l0Y2hTcGVlZCgpO1xuICAgICAgICBjaG9zZW5Vbml0KCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkluaXRpYWxpemF0aW9uIGVycm9yOlwiLCBlcnJvcik7XG5cdH1cbn0pO1xuXG5mdW5jdGlvbiBzZXRGYXZpY29uKCkge1xuXHRjb25zdCBmYXZpY29uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRmYXZpY29uTGluay5yZWwgPSBcImljb25cIjtcblx0ZmF2aWNvbkxpbmsuaHJlZiA9IHNpdGVMb2dvO1xuXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZmF2aWNvbkxpbmspO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplTG9jYWxTdG9yYWdlKCkge1xuXHRjb25zdCBsb2NhbFN0b3JhZ2VJdGVtcyA9IFtcblx0XHR7IGtleTogXCJjaXR5XCIsIGRlZmF1bHRWYWx1ZTogXCJ0b3JvbnRvXCIgfSxcblx0XHR7IGtleTogXCJ0ZW1wVW5pdFwiLCBkZWZhdWx0VmFsdWU6IFwiwrBDXCIgfSxcblx0XHR7IGtleTogXCJzcGVlZFVuaXRcIiwgZGVmYXVsdFZhbHVlOiBcImttXCIgfSxcblx0XHR7IGtleTogXCJmb3JlY2FzdFwiLCBkZWZhdWx0VmFsdWU6IFwiZGFpbHlcIiB9LFxuXHRdO1xuXG5cdGZvciAoY29uc3QgaXRlbSBvZiBsb2NhbFN0b3JhZ2VJdGVtcykge1xuXHRcdGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oaXRlbS5rZXkpKSB7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpdGVtLmtleSwgaXRlbS5kZWZhdWx0VmFsdWUpO1xuXHRcdH1cblx0fVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==