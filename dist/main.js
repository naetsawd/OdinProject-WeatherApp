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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat-VariableFont_wght.ttf */ "./src/fonts/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: "Montserrat";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("ttf");
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
    /* background-image: url("https://r4.wallpaperflare.com/wallpaper/500/198/463/pixel-art-digital-art-pixelated-pixels-wallpaper-b980f83df17add4b2677d8cf6091268d.jpg"); */
    background-size: cover;
    font-family: "Montserrat", sans-serif;
    color: white;
}

body::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.5) 100%);
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
    font-size: 32px;
    border-bottom: 1px solid white;
    padding: 0px 12px;
}

nav {
    display: flex;
    flex-direction: row;
}

nav > *, .searchBox {
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

.searchBox, .searchBtn {
    background-color: transparent;
    outline: none;
    border: 0;
}

.searchBox {
    color: white;
    font-size: 16px;
}

.searchBtn {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 16px;
    background-color: white;
}

.navItem, .searchBtn {
    cursor: pointer;
    font-size: 16px;
    padding: 2px 10px;
    border-radius: 20px;
    transition: ease 0.3s;
}

.navItem:hover, .searchBtn:hover {
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
.content{
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

.cityDate{
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

.cityTemp{
    font-size: 28px;
    font-weight: 400;
}

.cityWeather{
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

.leftDivider, .rightDivider {
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

.forecastMaxTemp, .forecastTemp {
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

.currInfoLeft, .currInfoRight, .forecastSection, nav > * {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(15px);
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: \"Montserrat\";\n    src: url(\"./fonts/Montserrat-VariableFont_wght.ttf\") format(\"ttf\");\n    font-style: normal;\n  }\n\n* {\n    padding: 0px;\n    margin: 0px;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 100vw;\n    grid-template-rows: 10vh 90vh;\n    /* background-image: url(\"https://r4.wallpaperflare.com/wallpaper/500/198/463/pixel-art-digital-art-pixelated-pixels-wallpaper-b980f83df17add4b2677d8cf6091268d.jpg\"); */\n    background-size: cover;\n    font-family: \"Montserrat\", sans-serif;\n    color: white;\n}\n\nbody::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.5) 100%);\n    z-index: -1;\n}\n\n/* Header & Navigation */\nheader {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0px 32px;\n}\n\n.siteTitle {\n    font-size: 32px;\n    border-bottom: 1px solid white;\n    padding: 0px 12px;\n}\n\nnav {\n    display: flex;\n    flex-direction: row;\n}\n\nnav > *, .searchBox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    padding: 3px 7px;\n    margin: 0px 5px;\n    list-style-type: none;\n}\n\n.searchContainer {\n    padding: 8px;\n}\n\n.invalidSearch {\n    border: 1px solid lightcoral;\n}\n\n.searchBox, .searchBtn {\n    background-color: transparent;\n    outline: none;\n    border: 0;\n}\n\n.searchBox {\n    color: white;\n    font-size: 16px;\n}\n\n.searchBtn {\n    font-family: \"Montserrat\", sans-serif;\n    font-weight: 600;\n    font-size: 16px;\n    background-color: white;\n}\n\n.navItem, .searchBtn {\n    cursor: pointer;\n    font-size: 16px;\n    padding: 2px 10px;\n    border-radius: 20px;\n    transition: ease 0.3s;\n}\n\n.navItem:hover, .searchBtn:hover {\n    color: black;\n    background-color: white;\n    transform: scale(1.05);\n}\n\n.divider {\n    width: 1px;\n    height: 20px;\n    background-color: white;\n    margin: 0 5px;\n}\n\n.chosenUnit {\n    color: black;\n    background-color: white;\n    border-radius: 20px;\n}\n\n/* Content */\n.content{\n    display: grid;\n    grid-template-columns: 90%;\n    grid-template-rows: 65% 35%;\n    justify-content: center;\n}\n\n/* Current Information */\n.currInfo {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 26px 0px;\n    font-weight: 400;\n}\n\n.currInfoLeft {\n    display: flex;\n    flex-direction: column;\n    font-size: 32px;\n    padding: 26px;\n    justify-content: center;\n    align-items: flex-start;\n    max-width: 720px;\n}\n\n.cityDate{\n    font-size: 16px;\n    color: lightgray;\n}\n\n.cityName {\n    font-size: 46px;\n    font-weight: 500;\n}\n\n.leftDivider {\n    margin: 16px 0px;\n}\n\n.cityTemp{\n    font-size: 28px;\n    font-weight: 400;\n}\n\n.cityWeather{\n    font-size: 20px;\n    font-weight: 300;\n}\n\n.weatherIcon {\n    width: 128px;\n    height: 128px;\n}\n\n.currInfoRight {\n    display: flex;\n    flex-direction: column;\n    padding: 26px;\n    align-items: flex-end;\n    justify-content: center;\n}\n\n.rightInfoTitle {\n    font-size: 26px;\n    font-weight: 500;\n}\n\n.rightInfoNo {\n    font-weight: 300;\n    font-size: 22px;\n}\n\n.rightDivider {\n    margin: 10px 0px;\n}\n\n.leftDivider, .rightDivider {\n    background-color: white;\n    height: 1px;\n    width: 100%;\n    align-self: center;\n}\n\n/* Forecast Information */\n.forecastSection {\n    display: flex;\n    flex-direction: row;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-rows: auto;\n    margin-bottom: 26px;\n    align-items: center;\n    justify-items: center;\n    overflow-x: scroll;\n    overflow-y: hidden;\n}\n\n.forecastCard {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 90%;\n    width: 200px;\n    border-radius: 25px;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    margin: 10px;\n}\n\n.forecastDate {\n    font-size: 18px;\n    font-weight: 600;\n}\n\n.forecastTime {\n    font-size: 18px;\n    font-weight: 500;\n}\n\n.forecastMaxTemp, .forecastTemp {\n    font-size: 18px;\n    font-weight: 500;\n}\n\n.forecastMinTemp {\n    font-size: 14px;\n    font-weight: 500;\n    color: lightgray;\n}\n\n.weatherIconForecast {\n    width: 75px;\n    height: 75px;\n}\n\n.currInfoLeft, .currInfoRight, .forecastSection, nav > * {\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: 25px;\n    background-color: rgba(0, 0, 0, 0.5);\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);\n    backdrop-filter: blur(15px);\n}"],"sourceRoot":""}]);
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
		"http://api.weatherapi.com/v1/forecast.json?key=14f6e670b9ca46fcaf2203655231110&q=" +
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
		"http://api.weatherapi.com/v1/forecast.json?key=14f6e670b9ca46fcaf2203655231110&q=" +
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
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			timeZoneName: "short",
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
			weekday: "short",
			month: "short",
			day: "numeric",
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
			weekday: "short",
			month: "short",
			day: "numeric",
		});

		const formattedTime = localTimeDate.toLocaleTimeString("en-US", {
			hour: "numeric",
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
			hour: "numeric",
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

/***/ "./src/fonts/Montserrat-VariableFont_wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/Montserrat-VariableFont_wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e687123cd4528224ce5.ttf";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJLQUEySztBQUMzSztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9B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aUNBQWlDO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYTtBQUNyQixRQUFRLHVEQUFhO0FBQ3JCLFFBQVEsdURBQWE7QUFDckIsUUFBUSxxREFBVztBQUNuQixRQUFRLHFEQUFXO0FBQ25CLFFBQVEsMERBQWM7QUFDdEIsUUFBUSwwREFBYztBQUN0QixRQUFRLHNEQUFVO0FBQ2xCLFFBQVEsdURBQVc7QUFDbkIsUUFBUSxzREFBVTtBQUNsQixHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFROztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLHFDQUFxQztBQUN6QyxJQUFJLHNDQUFzQztBQUMxQyxJQUFJLHdDQUF3QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL3NyYy9mZXRjaGVzLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInR0ZlwiKTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cblxuKiB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwdnc7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDkwdmg7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9yNC53YWxscGFwZXJmbGFyZS5jb20vd2FsbHBhcGVyLzUwMC8xOTgvNDYzL3BpeGVsLWFydC1kaWdpdGFsLWFydC1waXhlbGF0ZWQtcGl4ZWxzLXdhbGxwYXBlci1iOTgwZjgzZGYxN2FkZDRiMjY3N2Q4Y2Y2MDkxMjY4ZC5qcGdcIik7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5ib2R5OjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi8qIEhlYWRlciAmIE5hdmlnYXRpb24gKi9cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDBweCAzMnB4O1xufVxuXG4uc2l0ZVRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCAxMnB4O1xufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxubmF2ID4gKiwgLnNlYXJjaEJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogM3B4IDdweDtcbiAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uc2VhcmNoQ29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA4cHg7XG59XG5cbi5pbnZhbGlkU2VhcmNoIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsO1xufVxuXG4uc2VhcmNoQm94LCAuc2VhcmNoQnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMDtcbn1cblxuLnNlYXJjaEJveCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnNlYXJjaEJ0biB7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubmF2SXRlbSwgLnNlYXJjaEJ0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zaXRpb246IGVhc2UgMC4zcztcbn1cblxuLm5hdkl0ZW06aG92ZXIsIC5zZWFyY2hCdG46aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4uZGl2aWRlciB7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cblxuLmNob3NlblVuaXQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4vKiBDb250ZW50ICovXG4uY29udGVudHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjUlIDM1JTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogQ3VycmVudCBJbmZvcm1hdGlvbiAqL1xuLmN1cnJJbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDI2cHggMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jdXJySW5mb0xlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgcGFkZGluZzogMjZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xufVxuXG4uY2l0eURhdGV7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5jaXR5TmFtZSB7XG4gICAgZm9udC1zaXplOiA0NnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sZWZ0RGl2aWRlciB7XG4gICAgbWFyZ2luOiAxNnB4IDBweDtcbn1cblxuLmNpdHlUZW1we1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY2l0eVdlYXRoZXJ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi53ZWF0aGVySWNvbiB7XG4gICAgd2lkdGg6IDEyOHB4O1xuICAgIGhlaWdodDogMTI4cHg7XG59XG5cbi5jdXJySW5mb1JpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMjZweDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yaWdodEluZm9UaXRsZSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5yaWdodEluZm9ObyB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbi5yaWdodERpdmlkZXIge1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbi5sZWZ0RGl2aWRlciwgLnJpZ2h0RGl2aWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4vKiBGb3JlY2FzdCBJbmZvcm1hdGlvbiAqL1xuLmZvcmVjYXN0U2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMjZweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uZm9yZWNhc3RDYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZm9yZWNhc3REYXRlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZvcmVjYXN0VGltZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5mb3JlY2FzdE1heFRlbXAsIC5mb3JlY2FzdFRlbXAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZm9yZWNhc3RNaW5UZW1wIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG4ud2VhdGhlckljb25Gb3JlY2FzdCB7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xufVxuXG4uY3VyckluZm9MZWZ0LCAuY3VyckluZm9SaWdodCwgLmZvcmVjYXN0U2VjdGlvbiwgbmF2ID4gKiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDBEQUFrRTtJQUNsRSxrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isd0tBQXdLO0lBQ3hLLHNCQUFzQjtJQUN0QixxQ0FBcUM7SUFDckMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLHVGQUF1RjtJQUN2RixXQUFXO0FBQ2Y7O0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7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ICAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4vZm9udHMvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggOTB2aDtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3I0LndhbGxwYXBlcmZsYXJlLmNvbS93YWxscGFwZXIvNTAwLzE5OC80NjMvcGl4ZWwtYXJ0LWRpZ2l0YWwtYXJ0LXBpeGVsYXRlZC1waXhlbHMtd2FsbHBhcGVyLWI5ODBmODNkZjE3YWRkNGIyNjc3ZDhjZjYwOTEyNjhkLmpwZ1xcXCIpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJvZHk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwJSwgcmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLyogSGVhZGVyICYgTmF2aWdhdGlvbiAqL1xcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMHB4IDMycHg7XFxufVxcblxcbi5zaXRlVGl0bGUge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgcGFkZGluZzogMHB4IDEycHg7XFxufVxcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbm5hdiA+ICosIC5zZWFyY2hCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgcGFkZGluZzogM3B4IDdweDtcXG4gICAgbWFyZ2luOiAwcHggNXB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5zZWFyY2hDb250YWluZXIge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5pbnZhbGlkU2VhcmNoIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDtcXG59XFxuXFxuLnNlYXJjaEJveCwgLnNlYXJjaEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi5zZWFyY2hCb3gge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnNlYXJjaEJ0biB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXZJdGVtLCAuc2VhcmNoQnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuM3M7XFxufVxcblxcbi5uYXZJdGVtOmhvdmVyLCAuc2VhcmNoQnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLmRpdmlkZXIge1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4uY2hvc2VuVW5pdCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi8qIENvbnRlbnQgKi9cXG4uY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjUlIDM1JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIEN1cnJlbnQgSW5mb3JtYXRpb24gKi9cXG4uY3VyckluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDI2cHggMHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uY3VyckluZm9MZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBwYWRkaW5nOiAyNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1heC13aWR0aDogNzIwcHg7XFxufVxcblxcbi5jaXR5RGF0ZXtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4uY2l0eU5hbWUge1xcbiAgICBmb250LXNpemU6IDQ2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5sZWZ0RGl2aWRlciB7XFxuICAgIG1hcmdpbjogMTZweCAwcHg7XFxufVxcblxcbi5jaXR5VGVtcHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uY2l0eVdlYXRoZXJ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLndlYXRoZXJJY29uIHtcXG4gICAgd2lkdGg6IDEyOHB4O1xcbiAgICBoZWlnaHQ6IDEyOHB4O1xcbn1cXG5cXG4uY3VyckluZm9SaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDI2cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5yaWdodEluZm9UaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnJpZ2h0SW5mb05vIHtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4ucmlnaHREaXZpZGVyIHtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG59XFxuXFxuLmxlZnREaXZpZGVyLCAucmlnaHREaXZpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4vKiBGb3JlY2FzdCBJbmZvcm1hdGlvbiAqL1xcbi5mb3JlY2FzdFNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi5mb3JlY2FzdENhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5mb3JlY2FzdERhdGUge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5mb3JlY2FzdFRpbWUge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5mb3JlY2FzdE1heFRlbXAsIC5mb3JlY2FzdFRlbXAge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5mb3JlY2FzdE1pblRlbXAge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi53ZWF0aGVySWNvbkZvcmVjYXN0IHtcXG4gICAgd2lkdGg6IDc1cHg7XFxuICAgIGhlaWdodDogNzVweDtcXG59XFxuXFxuLmN1cnJJbmZvTGVmdCwgLmN1cnJJbmZvUmlnaHQsIC5mb3JlY2FzdFNlY3Rpb24sIG5hdiA+ICoge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG5cdGZldGNoTGVmdEluZm8sXG5cdGZldGNoUmlnaHRJbmZvLFxuXHRmZXRjaEZvcmVjYXN0RGFpbHksXG5cdGZldGNoRm9yZWNhc3RIb3VybHksXG5cdGZldGNoQ3VyclRpbWVcbn0gZnJvbSBcIi4vZmV0Y2hlc1wiO1xuXG5pbXBvcnQgbW9ybmluZyBmcm9tIFwiLi9pbWFnZXMvbW9ybmluZy5wbmdcIlxuaW1wb3J0IGFmdGVybm9vbiBmcm9tIFwiLi9pbWFnZXMvYWZ0ZXJub29uLmpwZ1wiXG5pbXBvcnQgZXZlbmluZyBmcm9tIFwiLi9pbWFnZXMvZXZlbmluZy5qcGdcIlxuaW1wb3J0IG5pZ2h0IGZyb20gXCIuL2ltYWdlcy9uaWdodC5qcGdcIlxuXG5mdW5jdGlvbiBzZXRCYWNrZ3JvdW5kKGNpdHkpIHtcblx0ZmV0Y2hDdXJyVGltZShjaXR5KVxuXHQgIC50aGVuKHRpbWUgPT4ge1xuXHRcdGxldCBiYWNrZ3JvdW5kSW1hZ2VVcmw7XG5cblx0XHRpZiAodGltZSA+PSA1ICYmIHRpbWUgPCAxMikge1xuXHRcdCAgYmFja2dyb3VuZEltYWdlVXJsID0gbW9ybmluZztcblx0XHR9IGVsc2UgaWYgKHRpbWUgPj0gMTIgJiYgdGltZSA8IDE3KSB7XG5cdFx0ICBiYWNrZ3JvdW5kSW1hZ2VVcmwgPSBhZnRlcm5vb247XG5cdFx0fSBlbHNlIGlmICh0aW1lID49IDE3ICYmIHRpbWUgPCAyMCkge1xuXHRcdCAgYmFja2dyb3VuZEltYWdlVXJsID0gZXZlbmluZztcblx0XHR9IGVsc2Uge1xuXHRcdCAgYmFja2dyb3VuZEltYWdlVXJsID0gbmlnaHQ7XG5cdFx0fVxuICBcblx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2VVcmx9KWA7XG5cdCAgfSk7XG4gIH1cbiAgXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYXZJdGVtKGNvbnRhaW5lciwgaXRlbXMpIHtcblx0Y29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cdHVsLmNsYXNzTGlzdC5hZGQoY29udGFpbmVyKTtcblxuXHRpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdGxpLmNsYXNzTGlzdC5hZGQoXCJuYXZJdGVtXCIpO1xuXHRcdGxpLmNsYXNzTGlzdC5hZGQoaXRlbS5jbGFzcyk7XG5cdFx0bGkudGV4dENvbnRlbnQgPSBpdGVtLnRleHQ7XG5cblx0XHR1bC5hcHBlbmQobGkpO1xuXG5cdFx0aWYgKGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSkge1xuXHRcdFx0Y29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRcdGRpdmlkZXIuY2xhc3NMaXN0LmFkZChcImRpdmlkZXJcIik7XG5cdFx0XHR1bC5hcHBlbmQoZGl2aWRlcik7XG5cdFx0fVxuXHR9KTtcblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpLmFwcGVuZCh1bCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJySW5mbygpIHtcbiAgICBsZXQgY2l0eSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0eVwiKTtcbiAgICBsZXQgdGVtcFVuaXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlbXBVbml0XCIpO1xuICAgIGxldCBzcGVlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3BlZWRVbml0XCIpO1xuXG5cdHNldEJhY2tncm91bmQoY2l0eSk7XG5cblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuXHRjb25zdCBjdXJySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjdXJySW5mby5jbGFzc0xpc3QuYWRkKFwiY3VyckluZm9cIik7XG5cdGN1cnJJbmZvLmlubmVySFRNTCA9IGBgO1xuXG5cdGNvbnN0IGN1cnJJbmZvTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjdXJySW5mb0xlZnQuY2xhc3NMaXN0LmFkZChcImN1cnJJbmZvTGVmdFwiKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW1xuXHRcdGZldGNoTGVmdEluZm8oY2l0eSwgdGVtcFVuaXQpLFxuXHRcdGZldGNoUmlnaHRJbmZvKGNpdHksIHNwZWVkKSxcblx0XSkudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuXHRcdGNvbnN0IGxlZnRJbmZvUmVzdWx0ID0gcmVzdWx0c1swXTtcblx0XHRjb25zdCByaWdodEluZm9SZXN1bHQgPSByZXN1bHRzWzFdO1xuXG5cdFx0bGVmdEluZm9SZXN1bHQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0aWYgKGl0ZW0uaWNvbikge1xuXHRcdFx0XHRjb25zdCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0XHRcdFx0aWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGl0ZW0uY2xhc3MpO1xuXHRcdFx0XHRpY29uQ29udGFpbmVyLnNyYyA9IGl0ZW0uaWNvbjtcblxuXHRcdFx0XHRjdXJySW5mb0xlZnQuYXBwZW5kKGljb25Db250YWluZXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdHRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcblx0XHRcdFx0dGV4dENvbnRhaW5lci50ZXh0Q29udGVudCA9IGl0ZW0udGV4dDtcblxuXHRcdFx0XHRjdXJySW5mb0xlZnQuYXBwZW5kKHRleHRDb250YWluZXIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgY3VyckluZm9SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRcdGN1cnJJbmZvUmlnaHQuY2xhc3NMaXN0LmFkZChcImN1cnJJbmZvUmlnaHRcIik7XG5cblx0XHRyaWdodEluZm9SZXN1bHQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHR0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoaXRlbS5jbGFzcyk7XG5cdFx0XHR0ZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gaXRlbS50ZXh0O1xuXG5cdFx0XHRjdXJySW5mb1JpZ2h0LmFwcGVuZCh0ZXh0Q29udGFpbmVyKTtcblx0XHR9KTtcblxuXHRcdGN1cnJJbmZvLmFwcGVuZChjdXJySW5mb0xlZnQsIGN1cnJJbmZvUmlnaHQpO1xuXHRcdGNvbnRlbnQuYXBwZW5kKGN1cnJJbmZvKTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGb3JlY2FzdCgpIHtcbiAgICBsZXQgY2l0eSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0eVwiKTtcbiAgICBsZXQgdGVtcFVuaXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlbXBVbml0XCIpO1xuICAgIGxldCB0eXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb3JlY2FzdFwiKTtcblxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG5cdGxldCBmb3JlY2FzdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0U2VjdGlvblwiKTtcblx0aWYgKCFmb3JlY2FzdFNlY3Rpb24pIHtcblx0XHRmb3JlY2FzdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0XHRmb3JlY2FzdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0U2VjdGlvblwiKTtcblx0XHRjb250ZW50LmFwcGVuZChmb3JlY2FzdFNlY3Rpb24pO1xuXHR9XG5cblx0Zm9yZWNhc3RTZWN0aW9uLmlubmVySFRNTCA9IGBgO1xuXG5cdGNvbnN0IGZldGNoUHJvbWlzZXMgPSBbXTtcblx0aWYgKHR5cGUgPT09IFwiZGFpbHlcIikge1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgNzsgaSsrKSB7XG5cdFx0XHRmZXRjaFByb21pc2VzLnB1c2goZmV0Y2hGb3JlY2FzdERhaWx5KGksIGNpdHksIHRlbXBVbml0KSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgMjQ7IGkrKykge1xuXHRcdFx0ZmV0Y2hQcm9taXNlcy5wdXNoKGZldGNoRm9yZWNhc3RIb3VybHkoaSwgY2l0eSwgdGVtcFVuaXQpKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoZmV0Y2hQcm9taXNlcykudGhlbigocmVzdWx0cykgPT4ge1xuXHRcdHJlc3VsdHMuZm9yRWFjaCgoZm9yZWNhc3REYXRhKSA9PiB7XG5cdFx0XHRjb25zdCBmb3JlY2FzdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0Zm9yZWNhc3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdENhcmRcIik7XG5cblx0XHRcdGZvcmVjYXN0RGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdGlmIChpdGVtLmNsYXNzID09PSBcIndlYXRoZXJJY29uRm9yZWNhc3RcIikge1xuXHRcdFx0XHRcdGNvbnN0IHdlYXRoZXJJY29uRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRcdFx0XHRcdHdlYXRoZXJJY29uRm9yZWNhc3QuY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcblx0XHRcdFx0XHR3ZWF0aGVySWNvbkZvcmVjYXN0LnNyYyA9IGl0ZW0uaWNvbjtcblxuXHRcdFx0XHRcdGZvcmVjYXN0Q2FyZC5hcHBlbmQod2VhdGhlckljb25Gb3JlY2FzdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3QgZm9yZWNhc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0XHRmb3JlY2FzdEl0ZW0uY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcblx0XHRcdFx0XHRmb3JlY2FzdEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtLnRleHQ7XG5cblx0XHRcdFx0XHRmb3JlY2FzdENhcmQuYXBwZW5kKGZvcmVjYXN0SXRlbSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRmb3JlY2FzdFNlY3Rpb24uYXBwZW5kKGZvcmVjYXN0Q2FyZCk7XG5cdFx0fSk7XG5cblx0XHRjb250ZW50LmFwcGVuZChmb3JlY2FzdFNlY3Rpb24pO1xuXHR9KTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZmV0Y2hSZXF1ZXN0KGNpdHkpIHtcblx0cmV0dXJuIGZldGNoKFxuXHRcdFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0xNGY2ZTY3MGI5Y2E0NmZjYWYyMjAzNjU1MjMxMTEwJnE9XCIgK1xuXHRcdFx0Y2l0eSArXG5cdFx0XHRcIiZkYXlzPTcmYXFpPW5vJmFsZXJ0cz1ub1wiLFxuXHRcdHsgbW9kZTogXCJjb3JzXCIgfVxuXHQpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHR9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdGNvbnN0IHNlYXJjaENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaENvbnRhaW5lclwiKTtcblx0XHRcdHNlYXJjaENvbnQuY2xhc3NMaXN0LmFkZChcImludmFsaWRTZWFyY2hcIik7XG5cblx0XHRcdGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQm94XCIpO1xuXHRcdFx0c2VhcmNoQm94LnBsYWNlaG9sZGVyID0gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBuYW1lXCI7XG5cblx0XHRcdHJldHVybiBkZWZhdWx0RmV0Y2goKTtcblx0XHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRGZXRjaCgpIHtcblx0cmV0dXJuIGZldGNoKFxuXHRcdFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0xNGY2ZTY3MGI5Y2E0NmZjYWYyMjAzNjU1MjMxMTEwJnE9XCIgK1xuXHRcdFx0bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmV2Q2l0eVwiKSArXG5cdFx0XHRcIiZkYXlzPTcmYXFpPW5vJmFsZXJ0cz1ub1wiLFxuXHRcdHsgbW9kZTogXCJjb3JzXCIgfVxuXHQpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuXHRcdH1cblxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0eVwiLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByZXZDaXR5XCIpKTtcblxuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hMZWZ0SW5mbyhjaXR5LCB0ZW1wVW5pdCkge1xuXHRyZXR1cm4gZmV0Y2hSZXF1ZXN0KGNpdHkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0Y29uc3QgbG9jYWxUaW1lRXBvY2ggPSByZXNwb25zZS5sb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2ggKiAxMDAwO1xuXHRcdGNvbnN0IGxvY2FsVGltZURhdGUgPSBuZXcgRGF0ZShsb2NhbFRpbWVFcG9jaCk7XG5cblx0XHRjb25zdCBmb3JtYXR0ZWREYXRlID0gbG9jYWxUaW1lRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7XG5cdFx0XHR3ZWVrZGF5OiBcImxvbmdcIixcblx0XHRcdHllYXI6IFwibnVtZXJpY1wiLFxuXHRcdFx0bW9udGg6IFwibG9uZ1wiLFxuXHRcdFx0ZGF5OiBcIm51bWVyaWNcIixcblx0XHRcdGhvdXI6IFwiMi1kaWdpdFwiLFxuXHRcdFx0bWludXRlOiBcIjItZGlnaXRcIixcblx0XHRcdHRpbWVab25lTmFtZTogXCJzaG9ydFwiLFxuXHRcdH0pO1xuXG5cdFx0bGV0IHRlbXBWYWwgPSByZXNwb25zZS5jdXJyZW50LnRlbXBfYztcblx0XHRsZXQgZmVlbHNWYWwgPSByZXNwb25zZS5jdXJyZW50LmZlZWxzbGlrZV9jO1xuXG5cdFx0aWYgKHRlbXBVbml0ID09PSBcIsKwRlwiKSB7XG5cdFx0XHR0ZW1wVmFsID0gcmVzcG9uc2UuY3VycmVudC50ZW1wX2Y7XG5cdFx0XHRmZWVsc1ZhbCA9IHJlc3BvbnNlLmN1cnJlbnQuZmVlbHNsaWtlX2Y7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHsgY2xhc3M6IFwiY2l0eURhdGVcIiwgdGV4dDogZm9ybWF0dGVkRGF0ZSB9LFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzczogXCJjaXR5TmFtZVwiLFxuXHRcdFx0XHR0ZXh0OiByZXNwb25zZS5sb2NhdGlvbi5uYW1lICsgXCIsIFwiICsgcmVzcG9uc2UubG9jYXRpb24uY291bnRyeSxcblx0XHRcdH0sXG5cdFx0XHR7IGNsYXNzOiBcImxlZnREaXZpZGVyXCIsIHRleHQ6IFwiXCIgfSxcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3M6IFwiY2l0eVRlbXBcIixcblx0XHRcdFx0dGV4dDogdGVtcFZhbCArIHRlbXBVbml0ICsgXCIgfCBGZWVscyBMaWtlIFwiICsgZmVlbHNWYWwgKyB0ZW1wVW5pdCxcblx0XHRcdH0sXG5cdFx0XHR7IGNsYXNzOiBcImNpdHlXZWF0aGVyXCIsIHRleHQ6IHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLnRleHQgfSxcblx0XHRcdHsgY2xhc3M6IFwid2VhdGhlckljb25cIiwgaWNvbjogcmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24uaWNvbiB9LFxuXHRcdF07XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hSaWdodEluZm8oY2l0eSwgc3BlZWQpIHtcblx0cmV0dXJuIGZldGNoUmVxdWVzdChjaXR5KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdGxldCBzcGVlZFZhbCA9IHJlc3BvbnNlLmN1cnJlbnQud2luZF9rcGg7XG5cblx0XHRpZiAoc3BlZWQgPT09IFwibWlcIikge1xuXHRcdFx0c3BlZWRWYWwgPSByZXNwb25zZS5jdXJyZW50LndpbmRfbXBoO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHR7IGNsYXNzOiBcInJpZ2h0SW5mb1RpdGxlXCIsIHRleHQ6IFwiSHVtaWRpdHlcIiB9LFxuXHRcdFx0eyBjbGFzczogXCJyaWdodEluZm9Ob1wiLCB0ZXh0OiByZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIgJVwiIH0sXG5cdFx0XHR7IGNsYXNzOiBcInJpZ2h0RGl2aWRlclwiLCB0ZXh0OiBcIlwiIH0sXG5cdFx0XHR7IGNsYXNzOiBcInJpZ2h0SW5mb1RpdGxlXCIsIHRleHQ6IFwiQ2hhbmNlIG9mIFJhaW5cIiB9LFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzczogXCJyaWdodEluZm9Ob1wiLFxuXHRcdFx0XHR0ZXh0OiByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfd2lsbF9pdF9yYWluICsgXCIgJVwiLFxuXHRcdFx0fSxcblx0XHRcdHsgY2xhc3M6IFwicmlnaHREaXZpZGVyXCIsIHRleHQ6IFwiXCIgfSxcblx0XHRcdHsgY2xhc3M6IFwicmlnaHRJbmZvVGl0bGVcIiwgdGV4dDogXCJDaGFuY2Ugb2YgU25vd1wiIH0sXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzOiBcInJpZ2h0SW5mb05vXCIsXG5cdFx0XHRcdHRleHQ6IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV93aWxsX2l0X3Nub3cgKyBcIiAlXCIsXG5cdFx0XHR9LFxuXHRcdFx0eyBjbGFzczogXCJyaWdodERpdmlkZXJcIiwgdGV4dDogXCJcIiB9LFxuXHRcdFx0eyBjbGFzczogXCJyaWdodEluZm9UaXRsZVwiLCB0ZXh0OiBcIldpbmQgU3BlZWRcIiB9LFxuXHRcdFx0eyBjbGFzczogXCJyaWdodEluZm9Ob1wiLCB0ZXh0OiBzcGVlZFZhbCArIFwiIFwiICsgc3BlZWQgKyBcIi9oXCIgfSxcblx0XHRdO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRm9yZWNhc3REYWlseShudW0sIGNpdHksIHRlbXBVbml0KSB7XG5cdHJldHVybiBmZXRjaFJlcXVlc3QoY2l0eSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRsZXQgZm9yZWNhc3REYXRhID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbbnVtXTtcblxuXHRcdGNvbnN0IGxvY2FsVGltZURhdGUgPSBuZXcgRGF0ZShmb3JlY2FzdERhdGEuZGF0ZSk7XG5cblx0XHRjb25zdCBmb3JtYXR0ZWREYXRlID0gbG9jYWxUaW1lRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7XG5cdFx0XHR3ZWVrZGF5OiBcInNob3J0XCIsXG5cdFx0XHRtb250aDogXCJzaG9ydFwiLFxuXHRcdFx0ZGF5OiBcIm51bWVyaWNcIixcblx0XHR9KTtcblxuXHRcdGxldCB0ZW1wVmFsTWF4ID0gZm9yZWNhc3REYXRhLmRheS5tYXh0ZW1wX2M7XG5cdFx0bGV0IHRlbXBWYWxNaW4gPSBmb3JlY2FzdERhdGEuZGF5Lm1pbnRlbXBfYztcblxuXHRcdGlmICh0ZW1wVW5pdCA9PT0gXCLCsEZcIikge1xuXHRcdFx0dGVtcFZhbE1heCA9IGZvcmVjYXN0RGF0YS5kYXkubWF4dGVtcF9mO1xuXHRcdFx0dGVtcFZhbE1pbiA9IGZvcmVjYXN0RGF0YS5kYXkubWludGVtcF9mO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHR7IGNsYXNzOiBcImZvcmVjYXN0RGF0ZVwiLCB0ZXh0OiBmb3JtYXR0ZWREYXRlIH0sXG5cdFx0XHR7IGNsYXNzOiBcIndlYXRoZXJJY29uRm9yZWNhc3RcIiwgaWNvbjogZm9yZWNhc3REYXRhLmRheS5jb25kaXRpb24uaWNvbiB9LFxuXHRcdFx0eyBjbGFzczogXCJmb3JlY2FzdE1heFRlbXBcIiwgdGV4dDogdGVtcFZhbE1heCArIHRlbXBVbml0IH0sXG5cdFx0XHR7IGNsYXNzOiBcImZvcmVjYXN0TWluVGVtcFwiLCB0ZXh0OiB0ZW1wVmFsTWluICsgdGVtcFVuaXQgfSxcblx0XHRdO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRm9yZWNhc3RIb3VybHkobnVtLCBjaXR5LCB0ZW1wVW5pdCkge1xuXHRyZXR1cm4gZmV0Y2hSZXF1ZXN0KGNpdHkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0bGV0IGZvcmVjYXN0RGF0YSA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbbnVtXTtcblxuXHRcdGNvbnN0IGxvY2FsVGltZUVwb2NoID0gZm9yZWNhc3REYXRhLnRpbWVfZXBvY2ggKiAxMDAwO1xuXHRcdGNvbnN0IGxvY2FsVGltZURhdGUgPSBuZXcgRGF0ZShsb2NhbFRpbWVFcG9jaCk7XG5cblx0XHRjb25zdCBmb3JtYXR0ZWREYXRlID0gbG9jYWxUaW1lRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7XG5cdFx0XHR3ZWVrZGF5OiBcInNob3J0XCIsXG5cdFx0XHRtb250aDogXCJzaG9ydFwiLFxuXHRcdFx0ZGF5OiBcIm51bWVyaWNcIixcblx0XHR9KTtcblxuXHRcdGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBsb2NhbFRpbWVEYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIsIHtcblx0XHRcdGhvdXI6IFwibnVtZXJpY1wiLFxuXHRcdH0pO1xuXG5cdFx0bGV0IHRlbXBWYWwgPSBmb3JlY2FzdERhdGEudGVtcF9jO1xuXG5cdFx0aWYgKHRlbXBVbml0ID09PSBcIsKwRlwiKSB7XG5cdFx0XHR0ZW1wVmFsID0gZm9yZWNhc3REYXRhLnRlbXBfZjtcblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0eyBjbGFzczogXCJmb3JlY2FzdERhdGVcIiwgdGV4dDogZm9ybWF0dGVkRGF0ZSB9LFxuXHRcdFx0eyBjbGFzczogXCJmb3JlY2FzdFRpbWVcIiwgdGV4dDogZm9ybWF0dGVkVGltZSB9LFxuXHRcdFx0eyBjbGFzczogXCJ3ZWF0aGVySWNvbkZvcmVjYXN0XCIsIGljb246IGZvcmVjYXN0RGF0YS5jb25kaXRpb24uaWNvbiB9LFxuXHRcdFx0eyBjbGFzczogXCJmb3JlY2FzdFRlbXBcIiwgdGV4dDogdGVtcFZhbCArIHRlbXBVbml0IH0sXG5cdFx0XTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEN1cnJUaW1lKGNpdHkpIHtcblx0cmV0dXJuIGZldGNoUmVxdWVzdChjaXR5KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdGNvbnN0IGxvY2FsVGltZUVwb2NoID0gcmVzcG9uc2UubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoICogMTAwMDtcblx0XHRjb25zdCBsb2NhbFRpbWVEYXRlID0gbmV3IERhdGUobG9jYWxUaW1lRXBvY2gpO1xuXG5cdFx0Y29uc3QgZm9ybWF0dGVkVGltZSA9IGxvY2FsVGltZURhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIiwge1xuXHRcdFx0aG91cjogXCJudW1lcmljXCIsXG5cdFx0XHRob3VyMTI6IGZhbHNlXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZm9ybWF0dGVkVGltZTtcblx0fSk7XG59IiwiaW1wb3J0IHsgc2V0Q3VyckluZm8sIHNldEZvcmVjYXN0IH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hvc2VuVW5pdCgpIHtcblx0Y29uc3QgdW5pdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdkl0ZW1cIik7XG5cblx0dW5pdHMuZm9yRWFjaCgodW5pdCkgPT4ge1xuXHRcdHVuaXQuY2xhc3NMaXN0LnJlbW92ZShcImNob3NlblVuaXRcIik7XG5cdH0pO1xuXG5cdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZvcmVjYXN0XCIpID09PSBcImRhaWx5XCIpIHtcblx0XHR1bml0c1swXS5jbGFzc0xpc3QuYWRkKFwiY2hvc2VuVW5pdFwiKTtcblx0fSBlbHNlIHtcblx0XHR1bml0c1sxXS5jbGFzc0xpc3QuYWRkKFwiY2hvc2VuVW5pdFwiKTtcblx0fVxuXG5cdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlbXBVbml0XCIpID09PSBcIsKwQ1wiKSB7XG5cdFx0dW5pdHNbMl0uY2xhc3NMaXN0LmFkZChcImNob3NlblVuaXRcIik7XG5cdH0gZWxzZSB7XG5cdFx0dW5pdHNbM10uY2xhc3NMaXN0LmFkZChcImNob3NlblVuaXRcIik7XG5cdH1cblxuXHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzcGVlZFVuaXRcIikgPT09IFwia21cIikge1xuXHRcdHVuaXRzWzRdLmNsYXNzTGlzdC5hZGQoXCJjaG9zZW5Vbml0XCIpO1xuXHR9IGVsc2Uge1xuXHRcdHVuaXRzWzVdLmNsYXNzTGlzdC5hZGQoXCJjaG9zZW5Vbml0XCIpO1xuXHR9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hGdW5jdGlvbigpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblx0Y29uc3Qgc2VhcmNoQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQ29udGFpbmVyXCIpO1xuXHRjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaEJveFwiKTtcblx0Y29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hCdG5cIik7XG5cblx0c2VhcmNoQnRuLm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHNlYXJjaEJveC52YWx1ZS50cmltKCkpIHtcblx0XHRcdHNlYXJjaENvbnQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRTZWFyY2hcIik7XG5cdFx0XHRzZWFyY2hCb3gucGxhY2Vob2xkZXIgPSBcIlNlYXJjaFwiO1xuXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByZXZDaXR5XCIsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0eVwiKSk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdHlcIiwgc2VhcmNoQm94LnZhbHVlKTtcblxuXHRcdFx0Y29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdFx0c2VhcmNoQm94LnZhbHVlID0gXCJcIjtcblx0XHRcdGF3YWl0IHNldEN1cnJJbmZvKCk7XG5cdFx0XHRhd2FpdCBzZXRGb3JlY2FzdCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZWFyY2hDb250LmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkU2VhcmNoXCIpO1xuXHRcdFx0c2VhcmNoQm94LnBsYWNlaG9sZGVyID0gXCJQbGVhc2UgZW50ZXIgYSBuYW1lXCI7XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3dpdGNoRm9yZWNhc3QoKSB7XG5cdGNvbnN0IGZvcmVjYXN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RTZWN0aW9uXCIpO1xuXHRjb25zdCBkYWlseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHlcIik7XG5cdGNvbnN0IGhvdXJseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5XCIpO1xuXG5cdGRhaWx5Lm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb3JlY2FzdFwiLCBcImRhaWx5XCIpO1xuXG5cdFx0Zm9yZWNhc3RTZWN0aW9uLmlubmVySFRNTCA9IFwiXCI7XG5cdFx0Y2hvc2VuVW5pdCgpO1xuXHRcdGF3YWl0IHNldEZvcmVjYXN0KCk7XG5cdH07XG5cblx0aG91cmx5Lm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb3JlY2FzdFwiLCBcImhvdXJseVwiKTtcblxuXHRcdGZvcmVjYXN0U2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGNob3NlblVuaXQoKTtcblx0XHRhd2FpdCBzZXRGb3JlY2FzdCgpO1xuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3dpdGNoVGVtcCgpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblx0Y29uc3QgQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Vsc2l1c1wiKTtcblx0Y29uc3QgRiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmFocmVuaGVpdFwiKTtcblxuXHRDLm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0ZW1wVW5pdFwiLCBcIsKwQ1wiKTtcblxuXHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRjaG9zZW5Vbml0KCk7XG5cdFx0YXdhaXQgc2V0Q3VyckluZm8oKTtcblx0XHRhd2FpdCBzZXRGb3JlY2FzdCgpO1xuXHR9O1xuXG5cdEYub25jbGljayA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRlbXBVbml0XCIsIFwiwrBGXCIpO1xuXG5cdFx0Y29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGNob3NlblVuaXQoKTtcblx0XHRhd2FpdCBzZXRDdXJySW5mbygpO1xuXHRcdGF3YWl0IHNldEZvcmVjYXN0KCk7XG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzd2l0Y2hTcGVlZCgpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblx0Y29uc3QgS00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmtpbG9tZXRlcnNcIik7XG5cdGNvbnN0IE1JID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taWxlc1wiKTtcblxuXHRLTS5vbmNsaWNrID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3BlZWRVbml0XCIsIFwia21cIik7XG5cblx0XHRjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cdFx0Y2hvc2VuVW5pdCgpO1xuXHRcdGF3YWl0IHNldEN1cnJJbmZvKCk7XG5cdFx0YXdhaXQgc2V0Rm9yZWNhc3QoKTtcblx0fTtcblxuXHRNSS5vbmNsaWNrID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3BlZWRVbml0XCIsIFwibWlcIik7XG5cblx0XHRjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cdFx0Y2hvc2VuVW5pdCgpO1xuXHRcdGF3YWl0IHNldEN1cnJJbmZvKCk7XG5cdFx0YXdhaXQgc2V0Rm9yZWNhc3QoKTtcblx0fTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQgeyBcbiAgICBjcmVhdGVOYXZJdGVtLCBcbiAgICBzZXRDdXJySW5mbywgXG4gICAgc2V0Rm9yZWNhc3QgXG59IGZyb20gXCIuL2NvbnRlbnRcIjtcbmltcG9ydCB7XG5cdHNlYXJjaEZ1bmN0aW9uLFxuXHRjaG9zZW5Vbml0LFxuXHRzd2l0Y2hGb3JlY2FzdCxcblx0c3dpdGNoVGVtcCxcblx0c3dpdGNoU3BlZWRcbn0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cbmltcG9ydCBzaXRlTG9nbyBmcm9tIFwiLi9pbWFnZXMvc2l0ZUxvZ28ucG5nXCI7XG5cbmNvbnN0IHRlbXBVbml0SXRlbXMgPSBbXG5cdHsgY2xhc3M6IFwiY2Vsc2l1c1wiLCB0ZXh0OiBcIsKwQ1wiIH0sXG5cdHsgY2xhc3M6IFwiZmFocmVuaGVpdFwiLCB0ZXh0OiBcIsKwRlwiIH0sXG5dO1xuXG5jb25zdCBzcGVlZFVuaXRJdGVtcyA9IFtcblx0eyBjbGFzczogXCJraWxvbWV0ZXJzXCIsIHRleHQ6IFwia21cIiB9LFxuXHR7IGNsYXNzOiBcIm1pbGVzXCIsIHRleHQ6IFwibWlcIiB9LFxuXTtcblxuY29uc3QgZm9yZWNhc3RPcHQgPSBbXG5cdHsgY2xhc3M6IFwiZGFpbHlcIiwgdGV4dDogXCJEYWlseVwiIH0sXG5cdHsgY2xhc3M6IFwiaG91cmx5XCIsIHRleHQ6IFwiSG91cmx5XCIgfSxcbl07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuXHRcdGluaXRpYWxpemVMb2NhbFN0b3JhZ2UoKTtcblx0XHRzZXRGYXZpY29uKCk7XG4gICAgICAgIGNyZWF0ZU5hdkl0ZW0oXCJmb3JlY2FzdE9wdFwiLCBmb3JlY2FzdE9wdCk7XG4gICAgICAgIGNyZWF0ZU5hdkl0ZW0oXCJ0ZW1wVW5pdFwiLCB0ZW1wVW5pdEl0ZW1zKTtcbiAgICAgICAgY3JlYXRlTmF2SXRlbShcInNwZWVkVW5pdFwiLCBzcGVlZFVuaXRJdGVtcyk7XG4gICAgICAgIHNldEN1cnJJbmZvKCk7XG4gICAgICAgIHNldEZvcmVjYXN0KCk7XG4gICAgICAgIHNlYXJjaEZ1bmN0aW9uKCk7XG4gICAgICAgIHN3aXRjaEZvcmVjYXN0KCk7XG4gICAgICAgIHN3aXRjaFRlbXAoKTtcbiAgICAgICAgc3dpdGNoU3BlZWQoKTtcbiAgICAgICAgY2hvc2VuVW5pdCgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJJbml0aWFsaXphdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xuXHR9XG59KTtcblxuZnVuY3Rpb24gc2V0RmF2aWNvbigpIHtcblx0Y29uc3QgZmF2aWNvbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblx0ZmF2aWNvbkxpbmsucmVsID0gXCJpY29uXCI7XG5cdGZhdmljb25MaW5rLmhyZWYgPSBzaXRlTG9nbztcblxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZhdmljb25MaW5rKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUxvY2FsU3RvcmFnZSgpIHtcblx0Y29uc3QgbG9jYWxTdG9yYWdlSXRlbXMgPSBbXG5cdFx0eyBrZXk6IFwiY2l0eVwiLCBkZWZhdWx0VmFsdWU6IFwidG9yb250b1wiIH0sXG5cdFx0eyBrZXk6IFwidGVtcFVuaXRcIiwgZGVmYXVsdFZhbHVlOiBcIsKwQ1wiIH0sXG5cdFx0eyBrZXk6IFwic3BlZWRVbml0XCIsIGRlZmF1bHRWYWx1ZTogXCJrbVwiIH0sXG5cdFx0eyBrZXk6IFwiZm9yZWNhc3RcIiwgZGVmYXVsdFZhbHVlOiBcImRhaWx5XCIgfSxcblx0XTtcblxuXHRmb3IgKGNvbnN0IGl0ZW0gb2YgbG9jYWxTdG9yYWdlSXRlbXMpIHtcblx0XHRpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW0ua2V5KSkge1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbS5rZXksIGl0ZW0uZGVmYXVsdFZhbHVlKTtcblx0XHR9XG5cdH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=