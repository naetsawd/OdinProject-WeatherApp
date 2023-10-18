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
    background-image: url("https://r4.wallpaperflare.com/wallpaper/500/198/463/pixel-art-digital-art-pixelated-pixels-wallpaper-b980f83df17add4b2677d8cf6091268d.jpg");
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: \"Montserrat\";\n    src: url(\"./fonts/Montserrat-VariableFont_wght.ttf\") format(\"ttf\");\n    font-style: normal;\n  }\n\n* {\n    padding: 0px;\n    margin: 0px;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 100vw;\n    grid-template-rows: 10vh 90vh;\n    background-image: url(\"https://r4.wallpaperflare.com/wallpaper/500/198/463/pixel-art-digital-art-pixelated-pixels-wallpaper-b980f83df17add4b2677d8cf6091268d.jpg\");\n    background-size: cover;\n    font-family: \"Montserrat\", sans-serif;\n    color: white;\n}\n\nbody::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.5) 100%);\n    z-index: -1;\n}\n\n/* Header & Navigation */\nheader {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0px 32px;\n}\n\n.siteTitle {\n    font-size: 32px;\n    border-bottom: 1px solid white;\n    padding: 0px 12px;\n}\n\nnav {\n    display: flex;\n    flex-direction: row;\n}\n\nnav > *, .searchBox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    padding: 3px 7px;\n    margin: 0px 5px;\n    list-style-type: none;\n}\n\n.searchContainer {\n    padding: 8px;\n}\n\n.invalidSearch {\n    border: 1px solid lightcoral;\n}\n\n.searchBox, .searchBtn {\n    background-color: transparent;\n    outline: none;\n    border: 0;\n}\n\n.searchBox {\n    color: white;\n    font-size: 16px;\n}\n\n.searchBtn {\n    font-family: \"Montserrat\", sans-serif;\n    font-weight: 600;\n    font-size: 16px;\n    background-color: white;\n}\n\n.navItem, .searchBtn {\n    cursor: pointer;\n    font-size: 16px;\n    padding: 2px 10px;\n    border-radius: 20px;\n    transition: ease 0.3s;\n}\n\n.navItem:hover, .searchBtn:hover {\n    color: black;\n    background-color: white;\n    transform: scale(1.05);\n}\n\n.divider {\n    width: 1px;\n    height: 20px;\n    background-color: white;\n    margin: 0 5px;\n}\n\n.chosenUnit {\n    color: black;\n    background-color: white;\n    border-radius: 20px;\n}\n\n/* Content */\n.content{\n    display: grid;\n    grid-template-columns: 90%;\n    grid-template-rows: 65% 35%;\n    justify-content: center;\n}\n\n/* Current Information */\n.currInfo {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 26px 0px;\n    font-weight: 400;\n}\n\n.currInfoLeft {\n    display: flex;\n    flex-direction: column;\n    font-size: 32px;\n    padding: 26px;\n    justify-content: center;\n    align-items: flex-start;\n    max-width: 720px;\n}\n\n.cityDate{\n    font-size: 16px;\n    color: lightgray;\n}\n\n.cityName {\n    font-size: 46px;\n    font-weight: 500;\n}\n\n.leftDivider {\n    margin: 16px 0px;\n}\n\n.cityTemp{\n    font-size: 28px;\n    font-weight: 400;\n}\n\n.cityWeather{\n    font-size: 20px;\n    font-weight: 300;\n}\n\n.weatherIcon {\n    width: 128px;\n    height: 128px;\n}\n\n.currInfoRight {\n    display: flex;\n    flex-direction: column;\n    padding: 26px;\n    align-items: flex-end;\n    justify-content: center;\n}\n\n.rightInfoTitle {\n    font-size: 26px;\n    font-weight: 500;\n}\n\n.rightInfoNo {\n    font-weight: 300;\n    font-size: 22px;\n}\n\n.rightDivider {\n    margin: 10px 0px;\n}\n\n.leftDivider, .rightDivider {\n    background-color: white;\n    height: 1px;\n    width: 100%;\n    align-self: center;\n}\n\n/* Forecast Information */\n.forecastSection {\n    display: flex;\n    flex-direction: row;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-rows: auto;\n    margin-bottom: 26px;\n    align-items: center;\n    justify-items: center;\n    overflow-x: scroll;\n    overflow-y: hidden;\n}\n\n.forecastCard {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 90%;\n    width: 200px;\n    border-radius: 25px;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    margin: 10px;\n}\n\n.forecastDate {\n    font-size: 18px;\n    font-weight: 600;\n}\n\n.forecastTime {\n    font-size: 18px;\n    font-weight: 500;\n}\n\n.forecastMaxTemp, .forecastTemp {\n    font-size: 18px;\n    font-weight: 500;\n}\n\n.forecastMinTemp {\n    font-size: 14px;\n    font-weight: 500;\n    color: lightgray;\n}\n\n.weatherIconForecast {\n    width: 75px;\n    height: 75px;\n}\n\n.currInfoLeft, .currInfoRight, .forecastSection, nav > * {\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: 25px;\n    background-color: rgba(0, 0, 0, 0.5);\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);\n    backdrop-filter: blur(15px);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUss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QUFDMUMsSUFBSSx3Q0FBd0M7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9zcmMvZmV0Y2hlcy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0dGZcIik7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbioge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHZ3O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA5MHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vcjQud2FsbHBhcGVyZmxhcmUuY29tL3dhbGxwYXBlci81MDAvMTk4LzQ2My9waXhlbC1hcnQtZGlnaXRhbC1hcnQtcGl4ZWxhdGVkLXBpeGVscy13YWxscGFwZXItYjk4MGY4M2RmMTdhZGQ0YjI2NzdkOGNmNjA5MTI2OGQuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuYm9keTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwJSwgcmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4vKiBIZWFkZXIgJiBOYXZpZ2F0aW9uICovXG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwcHggMzJweDtcbn1cblxuLnNpdGVUaXRsZSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHggMTJweDtcbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbm5hdiA+ICosIC5zZWFyY2hCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDNweCA3cHg7XG4gICAgbWFyZ2luOiAwcHggNXB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnNlYXJjaENvbnRhaW5lciB7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG4uaW52YWxpZFNlYXJjaCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDtcbn1cblxuLnNlYXJjaEJveCwgLnNlYXJjaEJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDA7XG59XG5cbi5zZWFyY2hCb3gge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5zZWFyY2hCdG4ge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdkl0ZW0sIC5zZWFyY2hCdG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogMnB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuM3M7XG59XG5cbi5uYXZJdGVtOmhvdmVyLCAuc2VhcmNoQnRuOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLmRpdmlkZXIge1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMCA1cHg7XG59XG5cbi5jaG9zZW5Vbml0IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLyogQ29udGVudCAqL1xuLmNvbnRlbnR7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDY1JSAzNSU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIEN1cnJlbnQgSW5mb3JtYXRpb24gKi9cbi5jdXJySW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAyNnB4IDBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY3VyckluZm9MZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIHBhZGRpbmc6IDI2cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWF4LXdpZHRoOiA3MjBweDtcbn1cblxuLmNpdHlEYXRle1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG4uY2l0eU5hbWUge1xuICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubGVmdERpdmlkZXIge1xuICAgIG1hcmdpbjogMTZweCAwcHg7XG59XG5cbi5jaXR5VGVtcHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNpdHlXZWF0aGVye1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ud2VhdGhlckljb24ge1xuICAgIHdpZHRoOiAxMjhweDtcbiAgICBoZWlnaHQ6IDEyOHB4O1xufVxuXG4uY3VyckluZm9SaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDI2cHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmlnaHRJbmZvVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucmlnaHRJbmZvTm8ge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4ucmlnaHREaXZpZGVyIHtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4ubGVmdERpdmlkZXIsIC5yaWdodERpdmlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLyogRm9yZWNhc3QgSW5mb3JtYXRpb24gKi9cbi5mb3JlY2FzdFNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmZvcmVjYXN0Q2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmZvcmVjYXN0RGF0ZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb3JlY2FzdFRpbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZm9yZWNhc3RNYXhUZW1wLCAuZm9yZWNhc3RUZW1wIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZvcmVjYXN0TWluVGVtcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLndlYXRoZXJJY29uRm9yZWNhc3Qge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogNzVweDtcbn1cblxuLmN1cnJJbmZvTGVmdCwgLmN1cnJJbmZvUmlnaHQsIC5mb3JlY2FzdFNlY3Rpb24sIG5hdiA+ICoge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QiwwREFBa0U7SUFDbEUsa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGtLQUFrSztJQUNsSyxzQkFBc0I7SUFDdEIscUNBQXFDO0lBQ3JDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCx1RkFBdUY7SUFDdkYsV0FBVztBQUNmOztBQUVBLHdCQUF3QjtBQUN4QjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQSxZQUFZO0FBQ1o7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLDRDQUE0QztJQUM1QywyQkFBMkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuL2ZvbnRzL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDB2dztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDkwdmg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9yNC53YWxscGFwZXJmbGFyZS5jb20vd2FsbHBhcGVyLzUwMC8xOTgvNDYzL3BpeGVsLWFydC1kaWdpdGFsLWFydC1waXhlbGF0ZWQtcGl4ZWxzLXdhbGxwYXBlci1iOTgwZjgzZGYxN2FkZDRiMjY3N2Q4Y2Y2MDkxMjY4ZC5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5ib2R5OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC43NSkgMCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi8qIEhlYWRlciAmIE5hdmlnYXRpb24gKi9cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDBweCAzMnB4O1xcbn1cXG5cXG4uc2l0ZVRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHBhZGRpbmc6IDBweCAxMnB4O1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG5uYXYgPiAqLCAuc2VhcmNoQm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBhZGRpbmc6IDNweCA3cHg7XFxuICAgIG1hcmdpbjogMHB4IDVweDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoQ29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uaW52YWxpZFNlYXJjaCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7XFxufVxcblxcbi5zZWFyY2hCb3gsIC5zZWFyY2hCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4uc2VhcmNoQm94IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5zZWFyY2hCdG4ge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2SXRlbSwgLnNlYXJjaEJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogZWFzZSAwLjNzO1xcbn1cXG5cXG4ubmF2SXRlbTpob3ZlciwgLnNlYXJjaEJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5kaXZpZGVyIHtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG59XFxuXFxuLmNob3NlblVuaXQge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4vKiBDb250ZW50ICovXFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDY1JSAzNSU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBDdXJyZW50IEluZm9ybWF0aW9uICovXFxuLmN1cnJJbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAyNnB4IDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmN1cnJJbmZvTGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgcGFkZGluZzogMjZweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xcbn1cXG5cXG4uY2l0eURhdGV7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmNpdHlOYW1lIHtcXG4gICAgZm9udC1zaXplOiA0NnB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubGVmdERpdmlkZXIge1xcbiAgICBtYXJnaW46IDE2cHggMHB4O1xcbn1cXG5cXG4uY2l0eVRlbXB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmNpdHlXZWF0aGVye1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi53ZWF0aGVySWNvbiB7XFxuICAgIHdpZHRoOiAxMjhweDtcXG4gICAgaGVpZ2h0OiAxMjhweDtcXG59XFxuXFxuLmN1cnJJbmZvUmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyNnB4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucmlnaHRJbmZvVGl0bGUge1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5yaWdodEluZm9ObyB7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLnJpZ2h0RGl2aWRlciB7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxufVxcblxcbi5sZWZ0RGl2aWRlciwgLnJpZ2h0RGl2aWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogRm9yZWNhc3QgSW5mb3JtYXRpb24gKi9cXG4uZm9yZWNhc3RTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uZm9yZWNhc3RDYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3REYXRlIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9yZWNhc3RUaW1lIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZm9yZWNhc3RNYXhUZW1wLCAuZm9yZWNhc3RUZW1wIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uZm9yZWNhc3RNaW5UZW1wIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4ud2VhdGhlckljb25Gb3JlY2FzdCB7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbi5jdXJySW5mb0xlZnQsIC5jdXJySW5mb1JpZ2h0LCAuZm9yZWNhc3RTZWN0aW9uLCBuYXYgPiAqIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuXHRmZXRjaExlZnRJbmZvLFxuXHRmZXRjaFJpZ2h0SW5mbyxcblx0ZmV0Y2hGb3JlY2FzdERhaWx5LFxuXHRmZXRjaEZvcmVjYXN0SG91cmx5LFxufSBmcm9tIFwiLi9mZXRjaGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYXZJdGVtKGNvbnRhaW5lciwgaXRlbXMpIHtcblx0Y29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cdHVsLmNsYXNzTGlzdC5hZGQoY29udGFpbmVyKTtcblxuXHRpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdGxpLmNsYXNzTGlzdC5hZGQoXCJuYXZJdGVtXCIpO1xuXHRcdGxpLmNsYXNzTGlzdC5hZGQoaXRlbS5jbGFzcyk7XG5cdFx0bGkudGV4dENvbnRlbnQgPSBpdGVtLnRleHQ7XG5cblx0XHR1bC5hcHBlbmQobGkpO1xuXG5cdFx0aWYgKGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSkge1xuXHRcdFx0Y29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRcdGRpdmlkZXIuY2xhc3NMaXN0LmFkZChcImRpdmlkZXJcIik7XG5cdFx0XHR1bC5hcHBlbmQoZGl2aWRlcik7XG5cdFx0fVxuXHR9KTtcblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpLmFwcGVuZCh1bCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJySW5mbygpIHtcbiAgICBsZXQgY2l0eSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0eVwiKTtcbiAgICBsZXQgdGVtcFVuaXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlbXBVbml0XCIpO1xuICAgIGxldCBzcGVlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3BlZWRVbml0XCIpO1xuXG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cblx0Y29uc3QgY3VyckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y3VyckluZm8uY2xhc3NMaXN0LmFkZChcImN1cnJJbmZvXCIpO1xuXHRjdXJySW5mby5pbm5lckhUTUwgPSBgYDtcblxuXHRjb25zdCBjdXJySW5mb0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y3VyckluZm9MZWZ0LmNsYXNzTGlzdC5hZGQoXCJjdXJySW5mb0xlZnRcIik7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKFtcblx0XHRmZXRjaExlZnRJbmZvKGNpdHksIHRlbXBVbml0KSxcblx0XHRmZXRjaFJpZ2h0SW5mbyhjaXR5LCBzcGVlZCksXG5cdF0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcblx0XHRjb25zdCBsZWZ0SW5mb1Jlc3VsdCA9IHJlc3VsdHNbMF07XG5cdFx0Y29uc3QgcmlnaHRJbmZvUmVzdWx0ID0gcmVzdWx0c1sxXTtcblxuXHRcdGxlZnRJbmZvUmVzdWx0LmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGlmIChpdGVtLmljb24pIHtcblx0XHRcdFx0Y29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdFx0XHRcdGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcblx0XHRcdFx0aWNvbkNvbnRhaW5lci5zcmMgPSBpdGVtLmljb247XG5cblx0XHRcdFx0Y3VyckluZm9MZWZ0LmFwcGVuZChpY29uQ29udGFpbmVyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHR0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoaXRlbS5jbGFzcyk7XG5cdFx0XHRcdHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSBpdGVtLnRleHQ7XG5cblx0XHRcdFx0Y3VyckluZm9MZWZ0LmFwcGVuZCh0ZXh0Q29udGFpbmVyKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGNvbnN0IGN1cnJJbmZvUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0XHRjdXJySW5mb1JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJjdXJySW5mb1JpZ2h0XCIpO1xuXG5cdFx0cmlnaHRJbmZvUmVzdWx0LmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0dGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGl0ZW0uY2xhc3MpO1xuXHRcdFx0dGV4dENvbnRhaW5lci50ZXh0Q29udGVudCA9IGl0ZW0udGV4dDtcblxuXHRcdFx0Y3VyckluZm9SaWdodC5hcHBlbmQodGV4dENvbnRhaW5lcik7XG5cdFx0fSk7XG5cblx0XHRjdXJySW5mby5hcHBlbmQoY3VyckluZm9MZWZ0LCBjdXJySW5mb1JpZ2h0KTtcblx0XHRjb250ZW50LmFwcGVuZChjdXJySW5mbyk7XG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Rm9yZWNhc3QoKSB7XG4gICAgbGV0IGNpdHkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlcIik7XG4gICAgbGV0IHRlbXBVbml0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZW1wVW5pdFwiKTtcbiAgICBsZXQgdHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9yZWNhc3RcIik7XG5cblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuXHRsZXQgZm9yZWNhc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdFNlY3Rpb25cIik7XG5cdGlmICghZm9yZWNhc3RTZWN0aW9uKSB7XG5cdFx0Zm9yZWNhc3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdFx0Zm9yZWNhc3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdFNlY3Rpb25cIik7XG5cdFx0Y29udGVudC5hcHBlbmQoZm9yZWNhc3RTZWN0aW9uKTtcblx0fVxuXG5cdGZvcmVjYXN0U2VjdGlvbi5pbm5lckhUTUwgPSBgYDtcblxuXHRjb25zdCBmZXRjaFByb21pc2VzID0gW107XG5cdGlmICh0eXBlID09PSBcImRhaWx5XCIpIHtcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykge1xuXHRcdFx0ZmV0Y2hQcm9taXNlcy5wdXNoKGZldGNoRm9yZWNhc3REYWlseShpLCBjaXR5LCB0ZW1wVW5pdCkpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IDI0OyBpKyspIHtcblx0XHRcdGZldGNoUHJvbWlzZXMucHVzaChmZXRjaEZvcmVjYXN0SG91cmx5KGksIGNpdHksIHRlbXBVbml0KSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKGZldGNoUHJvbWlzZXMpLnRoZW4oKHJlc3VsdHMpID0+IHtcblx0XHRyZXN1bHRzLmZvckVhY2goKGZvcmVjYXN0RGF0YSkgPT4ge1xuXHRcdFx0Y29uc3QgZm9yZWNhc3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGZvcmVjYXN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RDYXJkXCIpO1xuXG5cdFx0XHRmb3JlY2FzdERhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRpZiAoaXRlbS5jbGFzcyA9PT0gXCJ3ZWF0aGVySWNvbkZvcmVjYXN0XCIpIHtcblx0XHRcdFx0XHRjb25zdCB3ZWF0aGVySWNvbkZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0XHRcdFx0XHR3ZWF0aGVySWNvbkZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoaXRlbS5jbGFzcyk7XG5cdFx0XHRcdFx0d2VhdGhlckljb25Gb3JlY2FzdC5zcmMgPSBpdGVtLmljb247XG5cblx0XHRcdFx0XHRmb3JlY2FzdENhcmQuYXBwZW5kKHdlYXRoZXJJY29uRm9yZWNhc3QpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnN0IGZvcmVjYXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdFx0Zm9yZWNhc3RJdGVtLmNsYXNzTGlzdC5hZGQoaXRlbS5jbGFzcyk7XG5cdFx0XHRcdFx0Zm9yZWNhc3RJdGVtLnRleHRDb250ZW50ID0gaXRlbS50ZXh0O1xuXG5cdFx0XHRcdFx0Zm9yZWNhc3RDYXJkLmFwcGVuZChmb3JlY2FzdEl0ZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Zm9yZWNhc3RTZWN0aW9uLmFwcGVuZChmb3JlY2FzdENhcmQpO1xuXHRcdH0pO1xuXG5cdFx0Y29udGVudC5hcHBlbmQoZm9yZWNhc3RTZWN0aW9uKTtcblx0fSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZldGNoUmVxdWVzdChjaXR5KSB7XG5cdHJldHVybiBmZXRjaChcblx0XHRcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MTRmNmU2NzBiOWNhNDZmY2FmMjIwMzY1NTIzMTExMCZxPVwiICtcblx0XHRcdGNpdHkgK1xuXHRcdFx0XCImZGF5cz03JmFxaT1ubyZhbGVydHM9bm9cIixcblx0XHR7IG1vZGU6IFwiY29yc1wiIH1cblx0KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0fSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRjb25zdCBzZWFyY2hDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hDb250YWluZXJcIik7XG5cdFx0XHRzZWFyY2hDb250LmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkU2VhcmNoXCIpO1xuXG5cdFx0XHRjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaEJveFwiKTtcblx0XHRcdHNlYXJjaEJveC5wbGFjZWhvbGRlciA9IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgbmFtZVwiO1xuXG5cdFx0XHRyZXR1cm4gZGVmYXVsdEZldGNoKCk7XG5cdFx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RmV0Y2goKSB7XG5cdHJldHVybiBmZXRjaChcblx0XHRcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MTRmNmU2NzBiOWNhNDZmY2FmMjIwMzY1NTIzMTExMCZxPVwiICtcblx0XHRcdGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJldkNpdHlcIikgK1xuXHRcdFx0XCImZGF5cz03JmFxaT1ubyZhbGVydHM9bm9cIixcblx0XHR7IG1vZGU6IFwiY29yc1wiIH1cblx0KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdGlmICghcmVzcG9uc2Uub2spIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcblx0XHR9XG5cblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdHlcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmV2Q2l0eVwiKSk7XG5cblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoTGVmdEluZm8oY2l0eSwgdGVtcFVuaXQpIHtcblx0cmV0dXJuIGZldGNoUmVxdWVzdChjaXR5KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdGNvbnN0IGxvY2FsVGltZUVwb2NoID0gcmVzcG9uc2UubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoICogMTAwMDtcblx0XHRjb25zdCBsb2NhbFRpbWVEYXRlID0gbmV3IERhdGUobG9jYWxUaW1lRXBvY2gpO1xuXG5cdFx0Y29uc3QgZm9ybWF0dGVkRGF0ZSA9IGxvY2FsVGltZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xuXHRcdFx0d2Vla2RheTogXCJsb25nXCIsXG5cdFx0XHR5ZWFyOiBcIm51bWVyaWNcIixcblx0XHRcdG1vbnRoOiBcImxvbmdcIixcblx0XHRcdGRheTogXCJudW1lcmljXCIsXG5cdFx0XHRob3VyOiBcIjItZGlnaXRcIixcblx0XHRcdG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG5cdFx0XHR0aW1lWm9uZU5hbWU6IFwic2hvcnRcIixcblx0XHR9KTtcblxuXHRcdGxldCB0ZW1wVmFsID0gcmVzcG9uc2UuY3VycmVudC50ZW1wX2M7XG5cdFx0bGV0IGZlZWxzVmFsID0gcmVzcG9uc2UuY3VycmVudC5mZWVsc2xpa2VfYztcblxuXHRcdGlmICh0ZW1wVW5pdCA9PT0gXCLCsEZcIikge1xuXHRcdFx0dGVtcFZhbCA9IHJlc3BvbnNlLmN1cnJlbnQudGVtcF9mO1xuXHRcdFx0ZmVlbHNWYWwgPSByZXNwb25zZS5jdXJyZW50LmZlZWxzbGlrZV9mO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHR7IGNsYXNzOiBcImNpdHlEYXRlXCIsIHRleHQ6IGZvcm1hdHRlZERhdGUgfSxcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3M6IFwiY2l0eU5hbWVcIixcblx0XHRcdFx0dGV4dDogcmVzcG9uc2UubG9jYXRpb24ubmFtZSArIFwiLCBcIiArIHJlc3BvbnNlLmxvY2F0aW9uLmNvdW50cnksXG5cdFx0XHR9LFxuXHRcdFx0eyBjbGFzczogXCJsZWZ0RGl2aWRlclwiLCB0ZXh0OiBcIlwiIH0sXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzOiBcImNpdHlUZW1wXCIsXG5cdFx0XHRcdHRleHQ6IHRlbXBWYWwgKyB0ZW1wVW5pdCArIFwiIHwgRmVlbHMgTGlrZSBcIiArIGZlZWxzVmFsICsgdGVtcFVuaXQsXG5cdFx0XHR9LFxuXHRcdFx0eyBjbGFzczogXCJjaXR5V2VhdGhlclwiLCB0ZXh0OiByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0IH0sXG5cdFx0XHR7IGNsYXNzOiBcIndlYXRoZXJJY29uXCIsIGljb246IHJlc3BvbnNlLmN1cnJlbnQuY29uZGl0aW9uLmljb24gfSxcblx0XHRdO1xuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUmlnaHRJbmZvKGNpdHksIHNwZWVkKSB7XG5cdHJldHVybiBmZXRjaFJlcXVlc3QoY2l0eSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRsZXQgc3BlZWRWYWwgPSByZXNwb25zZS5jdXJyZW50LndpbmRfa3BoO1xuXG5cdFx0aWYgKHNwZWVkID09PSBcIm1pXCIpIHtcblx0XHRcdHNwZWVkVmFsID0gcmVzcG9uc2UuY3VycmVudC53aW5kX21waDtcblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0eyBjbGFzczogXCJyaWdodEluZm9UaXRsZVwiLCB0ZXh0OiBcIkh1bWlkaXR5XCIgfSxcblx0XHRcdHsgY2xhc3M6IFwicmlnaHRJbmZvTm9cIiwgdGV4dDogcmVzcG9uc2UuY3VycmVudC5odW1pZGl0eSArIFwiICVcIiB9LFxuXHRcdFx0eyBjbGFzczogXCJyaWdodERpdmlkZXJcIiwgdGV4dDogXCJcIiB9LFxuXHRcdFx0eyBjbGFzczogXCJyaWdodEluZm9UaXRsZVwiLCB0ZXh0OiBcIkNoYW5jZSBvZiBSYWluXCIgfSxcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3M6IFwicmlnaHRJbmZvTm9cIixcblx0XHRcdFx0dGV4dDogcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X3dpbGxfaXRfcmFpbiArIFwiICVcIixcblx0XHRcdH0sXG5cdFx0XHR7IGNsYXNzOiBcInJpZ2h0RGl2aWRlclwiLCB0ZXh0OiBcIlwiIH0sXG5cdFx0XHR7IGNsYXNzOiBcInJpZ2h0SW5mb1RpdGxlXCIsIHRleHQ6IFwiQ2hhbmNlIG9mIFNub3dcIiB9LFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzczogXCJyaWdodEluZm9Ob1wiLFxuXHRcdFx0XHR0ZXh0OiByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfd2lsbF9pdF9zbm93ICsgXCIgJVwiLFxuXHRcdFx0fSxcblx0XHRcdHsgY2xhc3M6IFwicmlnaHREaXZpZGVyXCIsIHRleHQ6IFwiXCIgfSxcblx0XHRcdHsgY2xhc3M6IFwicmlnaHRJbmZvVGl0bGVcIiwgdGV4dDogXCJXaW5kIFNwZWVkXCIgfSxcblx0XHRcdHsgY2xhc3M6IFwicmlnaHRJbmZvTm9cIiwgdGV4dDogc3BlZWRWYWwgKyBcIiBcIiArIHNwZWVkICsgXCIvaFwiIH0sXG5cdFx0XTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEZvcmVjYXN0RGFpbHkobnVtLCBjaXR5LCB0ZW1wVW5pdCkge1xuXHRyZXR1cm4gZmV0Y2hSZXF1ZXN0KGNpdHkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0bGV0IGZvcmVjYXN0RGF0YSA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W251bV07XG5cblx0XHRjb25zdCBsb2NhbFRpbWVEYXRlID0gbmV3IERhdGUoZm9yZWNhc3REYXRhLmRhdGUpO1xuXG5cdFx0Y29uc3QgZm9ybWF0dGVkRGF0ZSA9IGxvY2FsVGltZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xuXHRcdFx0d2Vla2RheTogXCJzaG9ydFwiLFxuXHRcdFx0bW9udGg6IFwic2hvcnRcIixcblx0XHRcdGRheTogXCJudW1lcmljXCIsXG5cdFx0fSk7XG5cblx0XHRsZXQgdGVtcFZhbE1heCA9IGZvcmVjYXN0RGF0YS5kYXkubWF4dGVtcF9jO1xuXHRcdGxldCB0ZW1wVmFsTWluID0gZm9yZWNhc3REYXRhLmRheS5taW50ZW1wX2M7XG5cblx0XHRpZiAodGVtcFVuaXQgPT09IFwiwrBGXCIpIHtcblx0XHRcdHRlbXBWYWxNYXggPSBmb3JlY2FzdERhdGEuZGF5Lm1heHRlbXBfZjtcblx0XHRcdHRlbXBWYWxNaW4gPSBmb3JlY2FzdERhdGEuZGF5Lm1pbnRlbXBfZjtcblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0eyBjbGFzczogXCJmb3JlY2FzdERhdGVcIiwgdGV4dDogZm9ybWF0dGVkRGF0ZSB9LFxuXHRcdFx0eyBjbGFzczogXCJ3ZWF0aGVySWNvbkZvcmVjYXN0XCIsIGljb246IGZvcmVjYXN0RGF0YS5kYXkuY29uZGl0aW9uLmljb24gfSxcblx0XHRcdHsgY2xhc3M6IFwiZm9yZWNhc3RNYXhUZW1wXCIsIHRleHQ6IHRlbXBWYWxNYXggKyB0ZW1wVW5pdCB9LFxuXHRcdFx0eyBjbGFzczogXCJmb3JlY2FzdE1pblRlbXBcIiwgdGV4dDogdGVtcFZhbE1pbiArIHRlbXBVbml0IH0sXG5cdFx0XTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEZvcmVjYXN0SG91cmx5KG51bSwgY2l0eSwgdGVtcFVuaXQpIHtcblx0cmV0dXJuIGZldGNoUmVxdWVzdChjaXR5KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdGxldCBmb3JlY2FzdERhdGEgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW251bV07XG5cblx0XHRjb25zdCBsb2NhbFRpbWVFcG9jaCA9IGZvcmVjYXN0RGF0YS50aW1lX2Vwb2NoICogMTAwMDtcblx0XHRjb25zdCBsb2NhbFRpbWVEYXRlID0gbmV3IERhdGUobG9jYWxUaW1lRXBvY2gpO1xuXG5cdFx0Y29uc3QgZm9ybWF0dGVkRGF0ZSA9IGxvY2FsVGltZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xuXHRcdFx0d2Vla2RheTogXCJzaG9ydFwiLFxuXHRcdFx0bW9udGg6IFwic2hvcnRcIixcblx0XHRcdGRheTogXCJudW1lcmljXCIsXG5cdFx0fSk7XG5cblx0XHRjb25zdCBmb3JtYXR0ZWRUaW1lID0gbG9jYWxUaW1lRGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG5cdFx0XHRob3VyOiBcIm51bWVyaWNcIixcblx0XHR9KTtcblxuXHRcdGxldCB0ZW1wVmFsID0gZm9yZWNhc3REYXRhLnRlbXBfYztcblxuXHRcdGlmICh0ZW1wVW5pdCA9PT0gXCLCsEZcIikge1xuXHRcdFx0dGVtcFZhbCA9IGZvcmVjYXN0RGF0YS50ZW1wX2Y7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHsgY2xhc3M6IFwiZm9yZWNhc3REYXRlXCIsIHRleHQ6IGZvcm1hdHRlZERhdGUgfSxcblx0XHRcdHsgY2xhc3M6IFwiZm9yZWNhc3RUaW1lXCIsIHRleHQ6IGZvcm1hdHRlZFRpbWUgfSxcblx0XHRcdHsgY2xhc3M6IFwid2VhdGhlckljb25Gb3JlY2FzdFwiLCBpY29uOiBmb3JlY2FzdERhdGEuY29uZGl0aW9uLmljb24gfSxcblx0XHRcdHsgY2xhc3M6IFwiZm9yZWNhc3RUZW1wXCIsIHRleHQ6IHRlbXBWYWwgKyB0ZW1wVW5pdCB9LFxuXHRcdF07XG5cdH0pO1xufSIsImltcG9ydCB7IHNldEN1cnJJbmZvLCBzZXRGb3JlY2FzdCB9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNob3NlblVuaXQoKSB7XG5cdGNvbnN0IHVuaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZJdGVtXCIpO1xuXG5cdHVuaXRzLmZvckVhY2goKHVuaXQpID0+IHtcblx0XHR1bml0LmNsYXNzTGlzdC5yZW1vdmUoXCJjaG9zZW5Vbml0XCIpO1xuXHR9KTtcblxuXHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb3JlY2FzdFwiKSA9PT0gXCJkYWlseVwiKSB7XG5cdFx0dW5pdHNbMF0uY2xhc3NMaXN0LmFkZChcImNob3NlblVuaXRcIik7XG5cdH0gZWxzZSB7XG5cdFx0dW5pdHNbMV0uY2xhc3NMaXN0LmFkZChcImNob3NlblVuaXRcIik7XG5cdH1cblxuXHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZW1wVW5pdFwiKSA9PT0gXCLCsENcIikge1xuXHRcdHVuaXRzWzJdLmNsYXNzTGlzdC5hZGQoXCJjaG9zZW5Vbml0XCIpO1xuXHR9IGVsc2Uge1xuXHRcdHVuaXRzWzNdLmNsYXNzTGlzdC5hZGQoXCJjaG9zZW5Vbml0XCIpO1xuXHR9XG5cblx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3BlZWRVbml0XCIpID09PSBcImttXCIpIHtcblx0XHR1bml0c1s0XS5jbGFzc0xpc3QuYWRkKFwiY2hvc2VuVW5pdFwiKTtcblx0fSBlbHNlIHtcblx0XHR1bml0c1s1XS5jbGFzc0xpc3QuYWRkKFwiY2hvc2VuVW5pdFwiKTtcblx0fVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoRnVuY3Rpb24oKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cdGNvbnN0IHNlYXJjaENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaENvbnRhaW5lclwiKTtcblx0Y29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hCb3hcIik7XG5cdGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQnRuXCIpO1xuXG5cdHNlYXJjaEJ0bi5vbmNsaWNrID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdGlmIChzZWFyY2hCb3gudmFsdWUudHJpbSgpKSB7XG5cdFx0XHRzZWFyY2hDb250LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkU2VhcmNoXCIpO1xuXHRcdFx0c2VhcmNoQm94LnBsYWNlaG9sZGVyID0gXCJTZWFyY2hcIjtcblxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcmV2Q2l0eVwiLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlcIikpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXR5XCIsIHNlYXJjaEJveC52YWx1ZSk7XG5cblx0XHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRcdHNlYXJjaEJveC52YWx1ZSA9IFwiXCI7XG5cdFx0XHRhd2FpdCBzZXRDdXJySW5mbygpO1xuXHRcdFx0YXdhaXQgc2V0Rm9yZWNhc3QoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2VhcmNoQ29udC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZFNlYXJjaFwiKTtcblx0XHRcdHNlYXJjaEJveC5wbGFjZWhvbGRlciA9IFwiUGxlYXNlIGVudGVyIGEgbmFtZVwiO1xuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN3aXRjaEZvcmVjYXN0KCkge1xuXHRjb25zdCBmb3JlY2FzdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0U2VjdGlvblwiKTtcblx0Y29uc3QgZGFpbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5XCIpO1xuXHRjb25zdCBob3VybHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseVwiKTtcblxuXHRkYWlseS5vbmNsaWNrID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZm9yZWNhc3RcIiwgXCJkYWlseVwiKTtcblxuXHRcdGZvcmVjYXN0U2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGNob3NlblVuaXQoKTtcblx0XHRhd2FpdCBzZXRGb3JlY2FzdCgpO1xuXHR9O1xuXG5cdGhvdXJseS5vbmNsaWNrID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZm9yZWNhc3RcIiwgXCJob3VybHlcIik7XG5cblx0XHRmb3JlY2FzdFNlY3Rpb24uaW5uZXJIVE1MID0gXCJcIjtcblx0XHRjaG9zZW5Vbml0KCk7XG5cdFx0YXdhaXQgc2V0Rm9yZWNhc3QoKTtcblx0fTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN3aXRjaFRlbXAoKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cdGNvbnN0IEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbHNpdXNcIik7XG5cdGNvbnN0IEYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhaHJlbmhlaXRcIik7XG5cblx0Qy5vbmNsaWNrID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGVtcFVuaXRcIiwgXCLCsENcIik7XG5cblx0XHRjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cdFx0Y2hvc2VuVW5pdCgpO1xuXHRcdGF3YWl0IHNldEN1cnJJbmZvKCk7XG5cdFx0YXdhaXQgc2V0Rm9yZWNhc3QoKTtcblx0fTtcblxuXHRGLm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0ZW1wVW5pdFwiLCBcIsKwRlwiKTtcblxuXHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRjaG9zZW5Vbml0KCk7XG5cdFx0YXdhaXQgc2V0Q3VyckluZm8oKTtcblx0XHRhd2FpdCBzZXRGb3JlY2FzdCgpO1xuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3dpdGNoU3BlZWQoKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cdGNvbnN0IEtNID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5raWxvbWV0ZXJzXCIpO1xuXHRjb25zdCBNSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlsZXNcIik7XG5cblx0S00ub25jbGljayA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNwZWVkVW5pdFwiLCBcImttXCIpO1xuXG5cdFx0Y29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGNob3NlblVuaXQoKTtcblx0XHRhd2FpdCBzZXRDdXJySW5mbygpO1xuXHRcdGF3YWl0IHNldEZvcmVjYXN0KCk7XG5cdH07XG5cblx0TUkub25jbGljayA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNwZWVkVW5pdFwiLCBcIm1pXCIpO1xuXG5cdFx0Y29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGNob3NlblVuaXQoKTtcblx0XHRhd2FpdCBzZXRDdXJySW5mbygpO1xuXHRcdGF3YWl0IHNldEZvcmVjYXN0KCk7XG5cdH07XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuaW1wb3J0IHsgXG4gICAgY3JlYXRlTmF2SXRlbSwgXG4gICAgc2V0Q3VyckluZm8sIFxuICAgIHNldEZvcmVjYXN0IH0gZnJvbSBcIi4vY29udGVudFwiO1xuaW1wb3J0IHtcblx0c2VhcmNoRnVuY3Rpb24sXG5cdGNob3NlblVuaXQsXG5cdHN3aXRjaEZvcmVjYXN0LFxuXHRzd2l0Y2hUZW1wLFxuXHRzd2l0Y2hTcGVlZCxcbn0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cbmltcG9ydCBzaXRlTG9nbyBmcm9tIFwiLi9pbWFnZXMvc2l0ZUxvZ28ucG5nXCI7XG5cbmNvbnN0IHRlbXBVbml0SXRlbXMgPSBbXG5cdHsgY2xhc3M6IFwiY2Vsc2l1c1wiLCB0ZXh0OiBcIsKwQ1wiIH0sXG5cdHsgY2xhc3M6IFwiZmFocmVuaGVpdFwiLCB0ZXh0OiBcIsKwRlwiIH0sXG5dO1xuXG5jb25zdCBzcGVlZFVuaXRJdGVtcyA9IFtcblx0eyBjbGFzczogXCJraWxvbWV0ZXJzXCIsIHRleHQ6IFwia21cIiB9LFxuXHR7IGNsYXNzOiBcIm1pbGVzXCIsIHRleHQ6IFwibWlcIiB9LFxuXTtcblxuY29uc3QgZm9yZWNhc3RPcHQgPSBbXG5cdHsgY2xhc3M6IFwiZGFpbHlcIiwgdGV4dDogXCJEYWlseVwiIH0sXG5cdHsgY2xhc3M6IFwiaG91cmx5XCIsIHRleHQ6IFwiSG91cmx5XCIgfSxcbl07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuXHRcdGluaXRpYWxpemVMb2NhbFN0b3JhZ2UoKTtcblx0XHRzZXRGYXZpY29uKCk7XG4gICAgICAgIGNyZWF0ZU5hdkl0ZW0oXCJmb3JlY2FzdE9wdFwiLCBmb3JlY2FzdE9wdCk7XG4gICAgICAgIGNyZWF0ZU5hdkl0ZW0oXCJ0ZW1wVW5pdFwiLCB0ZW1wVW5pdEl0ZW1zKTtcbiAgICAgICAgY3JlYXRlTmF2SXRlbShcInNwZWVkVW5pdFwiLCBzcGVlZFVuaXRJdGVtcyk7XG4gICAgICAgIHNldEN1cnJJbmZvKCk7XG4gICAgICAgIHNldEZvcmVjYXN0KCk7XG4gICAgICAgIHNlYXJjaEZ1bmN0aW9uKCk7XG4gICAgICAgIHN3aXRjaEZvcmVjYXN0KCk7XG4gICAgICAgIHN3aXRjaFRlbXAoKTtcbiAgICAgICAgc3dpdGNoU3BlZWQoKTtcbiAgICAgICAgY2hvc2VuVW5pdCgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJJbml0aWFsaXphdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xuXHR9XG59KTtcblxuZnVuY3Rpb24gc2V0RmF2aWNvbigpIHtcblx0Y29uc3QgZmF2aWNvbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblx0ZmF2aWNvbkxpbmsucmVsID0gXCJpY29uXCI7XG5cdGZhdmljb25MaW5rLmhyZWYgPSBzaXRlTG9nbztcblxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZhdmljb25MaW5rKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUxvY2FsU3RvcmFnZSgpIHtcblx0Y29uc3QgbG9jYWxTdG9yYWdlSXRlbXMgPSBbXG5cdFx0eyBrZXk6IFwiY2l0eVwiLCBkZWZhdWx0VmFsdWU6IFwidG9yb250b1wiIH0sXG5cdFx0eyBrZXk6IFwidGVtcFVuaXRcIiwgZGVmYXVsdFZhbHVlOiBcIsKwQ1wiIH0sXG5cdFx0eyBrZXk6IFwic3BlZWRVbml0XCIsIGRlZmF1bHRWYWx1ZTogXCJrbVwiIH0sXG5cdFx0eyBrZXk6IFwiZm9yZWNhc3RcIiwgZGVmYXVsdFZhbHVlOiBcImRhaWx5XCIgfSxcblx0XTtcblxuXHRmb3IgKGNvbnN0IGl0ZW0gb2YgbG9jYWxTdG9yYWdlSXRlbXMpIHtcblx0XHRpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW0ua2V5KSkge1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbS5rZXksIGl0ZW0uZGVmYXVsdFZhbHVlKTtcblx0XHR9XG5cdH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=