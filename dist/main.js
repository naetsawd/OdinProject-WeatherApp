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
    font-weight: 600;
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
    font-weight: 600;
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
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    padding: 3px 7px;
    margin: 0px 5px;
    list-style-type: none;
}

.searchContainer {
    padding: 8px;
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
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 25px;
    padding: 26px;
    justify-content: center;
    align-items: flex-start;
    max-width: 720px;
}

.cityName {
    font-size: 46px;
    font-weight: 500;
}

.cityDate{

}

.cityTime{
    margin-bottom: 20px;
}

.cityTemp{
    font-size: 32px;
    font-weight: 500;
}

.cityWeather{
    font-size: 24px;
}

.weatherIcon {
    width: 128px;
    height: 128px;
}

.currInfoRight {
    display: flex;
    flex-direction: column;
    font-size: 32px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 25px;
    padding: 26px;
    justify-content: center;
    align-items: flex-end;
}

.rightInfoTitle {
    font-size: 32px;
}

.rightInfoNo {
    font-size: 24px;
    margin-bottom: 15px;
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
    justify-content: flex-start;
    overflow-x: scroll;
    overflow-y: hidden;
    column-gap: 30px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 25px;
}

.forecastOpt {

}

.forecastCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 95%;
    width: 250px;
}

.forecastCard > * {
    margin-bottom: 10px;
}

.forecastDate {

}

.forecastMaxTemp {
    margin-bottom: 0px;
}

.forecastMinTemp {

}

.forecastWeather {

}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,0DAAkE;IAClE,gBAAgB;IAChB,kBAAkB;EACpB;;AAEF;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,6BAA6B;IAC7B,kKAAkK;IAClK,sBAAsB;IACtB,qCAAqC;IACrC,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,uFAAuF;IACvF,WAAW;AACf;;AAEA,wBAAwB;AACxB;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,oCAAoC;IACpC,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,qCAAqC;IACrC,gBAAgB;IAChB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,YAAY;AACZ;IACI,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA,wBAAwB;AACxB;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,qCAAqC;IACrC,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;;AAEA;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,qCAAqC;IACrC,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA,yBAAyB;AACzB;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,wBAAwB;IACxB,mBAAmB;IACnB,mBAAmB;IACnB,2BAA2B;IAC3B,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;;AAEA;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;AAEA;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;AAEA;;AAEA;;AAEA","sourcesContent":["@font-face {\n    font-family: \"Montserrat\";\n    src: url(\"./fonts/Montserrat-VariableFont_wght.ttf\") format(\"ttf\");\n    font-weight: 600;\n    font-style: normal;\n  }\n\n* {\n    padding: 0px;\n    margin: 0px;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 100vw;\n    grid-template-rows: 10vh 90vh;\n    background-image: url(\"https://r4.wallpaperflare.com/wallpaper/500/198/463/pixel-art-digital-art-pixelated-pixels-wallpaper-b980f83df17add4b2677d8cf6091268d.jpg\");\n    background-size: cover;\n    font-family: \"Montserrat\", sans-serif;\n    font-weight: 600;\n    color: white;\n}\n\nbody::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.5) 100%);\n    z-index: -1;\n}\n\n/* Header & Navigation */\nheader {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0px 32px;\n}\n\n.siteTitle {\n    font-size: 32px;\n    border-bottom: 1px solid white;\n    padding: 0px 12px;\n}\n\nnav {\n    display: flex;\n    flex-direction: row;\n}\n\nnav > *, .searchBox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 25px;\n    padding: 3px 7px;\n    margin: 0px 5px;\n    list-style-type: none;\n}\n\n.searchContainer {\n    padding: 8px;\n}\n\n.searchBox, .searchBtn {\n    background-color: transparent;\n    outline: none;\n    border: 0;\n}\n\n.searchBox {\n    color: white;\n    font-size: 16px;\n}\n\n.searchBtn {\n    font-family: \"Montserrat\", sans-serif;\n    font-weight: 600;\n    font-size: 16px;\n    background-color: white;\n}\n\n.navItem, .searchBtn {\n    cursor: pointer;\n    font-size: 16px;\n    padding: 2px 10px;\n    border-radius: 20px;\n    transition: ease 0.3s;\n}\n\n.navItem:hover, .searchBtn:hover {\n    color: black;\n    background-color: white;\n    transform: scale(1.05);\n}\n\n.divider {\n    width: 1px;\n    height: 20px;\n    background-color: white;\n    margin: 0 5px;\n}\n\n.chosenUnit {\n    color: black;\n    background-color: white;\n    border-radius: 20px;\n}\n\n/* Content */\n.content{\n    display: grid;\n    grid-template-columns: 90%;\n    grid-template-rows: 65% 35%;\n    justify-content: center;\n}\n\n/* Current Information */\n.currInfo {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 26px 0px;\n    font-weight: 400;\n}\n\n.currInfoLeft {\n    display: flex;\n    flex-direction: column;\n    font-size: 32px;\n    background-color: rgba(0, 0, 0, 0.75);\n    border-radius: 25px;\n    padding: 26px;\n    justify-content: center;\n    align-items: flex-start;\n    max-width: 720px;\n}\n\n.cityName {\n    font-size: 46px;\n    font-weight: 500;\n}\n\n.cityDate{\n\n}\n\n.cityTime{\n    margin-bottom: 20px;\n}\n\n.cityTemp{\n    font-size: 32px;\n    font-weight: 500;\n}\n\n.cityWeather{\n    font-size: 24px;\n}\n\n.weatherIcon {\n    width: 128px;\n    height: 128px;\n}\n\n.currInfoRight {\n    display: flex;\n    flex-direction: column;\n    font-size: 32px;\n    background-color: rgba(0, 0, 0, 0.75);\n    border-radius: 25px;\n    padding: 26px;\n    justify-content: center;\n    align-items: flex-end;\n}\n\n.rightInfoTitle {\n    font-size: 32px;\n}\n\n.rightInfoNo {\n    font-size: 24px;\n    margin-bottom: 15px;\n}\n\n/* Forecast Information */\n.forecastSection {\n    display: flex;\n    flex-direction: row;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-rows: auto;\n    margin-bottom: 26px;\n    align-items: center;\n    justify-content: flex-start;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    column-gap: 30px;\n    background-color: rgba(0, 0, 0, 0.75);\n    border-radius: 25px;\n}\n\n.forecastOpt {\n\n}\n\n.forecastCard {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 95%;\n    width: 250px;\n}\n\n.forecastCard > * {\n    margin-bottom: 10px;\n}\n\n.forecastDate {\n\n}\n\n.forecastMaxTemp {\n    margin-bottom: 0px;\n}\n\n.forecastMinTemp {\n\n}\n\n.forecastWeather {\n\n}"],"sourceRoot":""}]);
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

/***/ "./src/fonts/Montserrat-VariableFont_wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/Montserrat-VariableFont_wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e687123cd4528224ce5.ttf";

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


const tempUnitItems = [
    { class: "celsius", text: "°C" },
    { class: "fahrenheit", text: "°F" }
];

const speedUnitItems = [
    { class: "kilometers", text: "km" },
    { class: "miles", text: "mi" }
];

const forecastOpt = [
    { class: "daily", text: "Daily" },
    { class: "hourly", text: "Hourly" }
];

document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("city")) {
        localStorage.setItem("city", "toronto")
    }

    if (!localStorage.getItem("tempUnit")) {
        localStorage.setItem("tempUnit", "°C")
    }

    if (!localStorage.getItem("speedUnit")) {
        localStorage.setItem("speedUnit", "km")
    }

    if (!localStorage.getItem("forecast")) {
        localStorage.setItem("forecast", "daily")
    }

    createNavItem("forecastOpt", forecastOpt);
    createNavItem("tempUnit", tempUnitItems);
    createNavItem("speedUnit", speedUnitItems);
    makeCurrInfo(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("speedUnit"));
    makeForecast(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("forecast"));
    searchFunction();
    switchForecast();
    switchTemp();
    switchSpeed();
    chosenUnit();
});

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

function chosenUnit() {
    const units = document.querySelectorAll(".navItem");

    units.forEach((unit) => {
        unit.classList.remove("chosenUnit");
    })

    if (localStorage.getItem("forecast") === "daily") {
        units[0].classList.add("chosenUnit")
    } else {
        units[1].classList.add("chosenUnit")
    }

    if (localStorage.getItem("tempUnit") === "°C") {
        units[2].classList.add("chosenUnit")
    } else {
        units[3].classList.add("chosenUnit")
    }

    if (localStorage.getItem("speedUnit") === "km") {
        units[4].classList.add("chosenUnit")
    } else {
        units[5].classList.add("chosenUnit")
    }
}

async function searchFunction() {
    const content = document.querySelector(".content");
    const searchBox = document.querySelector(".searchBox");
    const searchBtn = document.querySelector(".searchBtn");

    searchBtn.onclick = async function() {
        if (searchBox.value.trim()) {
            localStorage.setItem("prevCity", localStorage.getItem("city"));
            localStorage.setItem("city", searchBox.value);

            content.innerHTML = '';
            searchBox.value = "";
            await makeCurrInfo(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("speedUnit"));
            await makeForecast(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("forecast"));  
        }
    }
}

async function switchForecast() {
    const forecastSection = document.querySelector(".forecastSection");
    const daily = document.querySelector(".daily");
    const hourly = document.querySelector(".hourly");

    daily.onclick = async function() {
        localStorage.setItem("forecast", "daily");

        forecastSection.innerHTML = '';
        chosenUnit();
        await makeForecast(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("forecast"));
    }

    hourly.onclick = async function() {
        localStorage.setItem("forecast", "hourly");

        forecastSection.innerHTML = '';
        chosenUnit();
        await makeForecast(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("forecast"));
    }
}

async function switchTemp() {
    const content = document.querySelector(".content");
    const C = document.querySelector(".celsius");
    const F = document.querySelector(".fahrenheit");

    C.onclick = async function() {
        localStorage.setItem("tempUnit", "°C");

        content.innerHTML = '';
        chosenUnit();
        await makeCurrInfo(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("speedUnit"));
        await makeForecast(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("forecast"));
    }

    F.onclick = async function() {
        localStorage.setItem("tempUnit", "°F");

        content.innerHTML = '';
        chosenUnit();
        await makeCurrInfo(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("speedUnit"));
        await makeForecast(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("forecast"));
    }
}

async function switchSpeed() {
    const content = document.querySelector(".content");
    const KM = document.querySelector(".kilometers");
    const MI = document.querySelector(".miles");

    KM.onclick = async function() {
        localStorage.setItem("speedUnit", "km");

        content.innerHTML = '';
        chosenUnit();
        await makeCurrInfo(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("speedUnit"));
        await makeForecast(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("forecast"));
    }

    MI.onclick = async function() {
        localStorage.setItem("speedUnit", "mi");

        content.innerHTML = '';
        chosenUnit();
        await makeCurrInfo(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("speedUnit"));
        await makeForecast(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("forecast"));
    }
}

function fetchRequest(city) {
    return fetch("http://api.weatherapi.com/v1/forecast.json?key=14f6e670b9ca46fcaf2203655231110&q=" + city + "&days=7&aqi=no&alerts=no", {mode: 'cors'})
        .then(function(response) {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .catch(function(error) {
            return defaultFetch();
        });
}

function defaultFetch() {
    return fetch("http://api.weatherapi.com/v1/forecast.json?key=14f6e670b9ca46fcaf2203655231110&q=" + localStorage.getItem("prevCity") + "&days=7&aqi=no&alerts=no", {mode: 'cors'})
        .then(function(response) {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            localStorage.setItem("city", localStorage.getItem("prevCity"));
            return response.json();
        });
}

function fetchLeftInfo(city, tempUnit) {
    return fetchRequest(city).then(function(response) {
        const localTimeEpoch = response.location.localtime_epoch * 1000;
        const localTimeDate = new Date(localTimeEpoch);
        
        const formattedDate = localTimeDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        const formattedTime = localTimeDate.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        });

        let tempVal = response.current.temp_c;
        let feelsVal = response.current.feelslike_c;
        
        if (tempUnit === "°F") {
            tempVal = response.current.temp_f;
            feelsVal = response.current.feelslike_f;
        };

        return [
            { class: "cityName", text: response.location.name + ", " + response.location.country },
            { class: "cityDate", text: formattedDate },
            { class: "cityTime", text: formattedTime },
            { class: "cityTemp", text: tempVal + tempUnit + " | Feels Like " + feelsVal + tempUnit },
            { class: "cityWeather", text: response.current.condition.text },
            { class: "weatherIcon", icon: response.current.condition.icon }
        ];
    });
}

function fetchRightInfo(city, speed) {
    return fetchRequest(city).then(function(response) {
        let speedVal = response.current.wind_kph;
        
        if (speed === "mi") {
            speedVal = response.current.wind_mph;
        };

        return [
            { class: "rightInfoTitle", text: "Humidity" },
            { class: "rightInfoNo", text: response.current.humidity + " %" },
            { class: "rightInfoTitle", text: "Chance of Rain" },
            { class: "rightInfoNo", text: response.forecast.forecastday[0].day.daily_will_it_rain + " %" },
            { class: "rightInfoTitle", text: "Chance of Snow" },
            { class: "rightInfoNo", text: response.forecast.forecastday[0].day.daily_will_it_snow + " %" },
            { class: "rightInfoTitle", text: "Wind Speed" },
            { class: "rightInfoNo", text: speedVal + " " + speed + "/h" }
        ];
    });
}

function makeCurrInfo(city, tempUnit, speed) {
    const content = document.querySelector(".content");

    const currInfo = document.createElement("section");
    currInfo.classList.add("currInfo");

    currInfo.innerHTML = ``;

    const currInfoLeft = document.createElement("section");
    currInfoLeft.classList.add("currInfoLeft");

    return Promise.all([fetchLeftInfo(city, tempUnit), fetchRightInfo(city, speed)])
        .then(function (results) {
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

function fetchForecastDaily(num, city, tempUnit) {
    return fetchRequest(city).then(function(response) {
        let forecastData = response.forecast.forecastday[num];

        const localTimeDate = new Date(forecastData.date);

        const formattedDate = localTimeDate.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
        });

        let tempValMax = forecastData.day.maxtemp_c;
        let tempValMin = forecastData.day.mintemp_c
        
        if (tempUnit === "°F") {
            tempValMax = forecastData.day.maxtemp_f;
            tempValMin = forecastData.day.mintemp_f;
        };

        return [
            { class: "forecastDate", text: formattedDate },
            { class: "forecastMaxTemp", text: "High: " + tempValMax + tempUnit },
            { class: "forecastMinTemp", text: "Low: " + tempValMin + tempUnit },
            { class: "weatherIconForecast", icon: forecastData.day.condition.icon },
        ];
    });
}

function fetchForecastHourly(num, city, tempUnit) {
    return fetchRequest(city).then(function(response) {
        let forecastData = response.forecast.forecastday[0].hour[num];

        const localTimeEpoch = forecastData.time_epoch * 1000;

        const localTimeDate = new Date(localTimeEpoch);

        const formattedDate = localTimeDate.toLocaleTimeString('en-US', {
            hour: 'numeric'
        });

        let tempVal = forecastData.temp_c;
        
        if (tempUnit === "°F") {
            tempVal = forecastData.temp_f;
        };

        return [
            { class: "forecastDate", text: formattedDate },
            { class: "forecastTemp", text: "Temp: " + tempVal + tempUnit },
            { class: "weatherIconForecast", icon: forecastData.condition.icon },
        ];
    });
}

function makeForecast(city, tempUnit, type) {
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
            fetchPromises.push(fetchForecastDaily(i, city, tempUnit));
        }
    } else {
        for (let i = 1; i < 24; i++) {
            fetchPromises.push(fetchForecastHourly(i, city, tempUnit));
        }
    }

    return Promise.all(fetchPromises)
        .then((results) => {
            results.forEach((forecastData) => {
                const forecastCard = document.createElement("div");
                forecastCard.classList.add("forecastCard");

                forecastData.forEach((item) => {
                    if (item.class === "weatherIconForecast") {
                        const weatherIconForecast = document.createElement("img");
                        weatherIconForecast.classList.add(item.class)
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQXNCOztBQUV0QjtBQUNBLE1BQU0sOEJBQThCO0FBQ3BDLE1BQU07QUFDTjs7QUFFQTtBQUNBLE1BQU0saUNBQWlDO0FBQ3ZDLE1BQU07QUFDTjs7QUFFQTtBQUNBLE1BQU0sK0JBQStCO0FBQ3JDLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJJQUEySSxhQUFhO0FBQ3hKO0FBQ0E7QUFDQSx1REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLHVLQUF1SyxhQUFhO0FBQ3BMO0FBQ0E7QUFDQSx1REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxvRkFBb0Y7QUFDbEcsY0FBYyx3Q0FBd0M7QUFDdEQsY0FBYyx3Q0FBd0M7QUFDdEQsY0FBYyxzRkFBc0Y7QUFDcEcsY0FBYyw2REFBNkQ7QUFDM0UsY0FBYztBQUNkO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYywyQ0FBMkM7QUFDekQsY0FBYyw4REFBOEQ7QUFDNUUsY0FBYyxpREFBaUQ7QUFDL0QsY0FBYyw0RkFBNEY7QUFDMUcsY0FBYyxpREFBaUQ7QUFDL0QsY0FBYyw0RkFBNEY7QUFDMUcsY0FBYyw2Q0FBNkM7QUFDM0QsY0FBYztBQUNkO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsNENBQTRDO0FBQzFELGNBQWMsa0VBQWtFO0FBQ2hGLGNBQWMsaUVBQWlFO0FBQy9FLGNBQWMscUVBQXFFO0FBQ25GO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyw0Q0FBNEM7QUFDMUQsY0FBYyw0REFBNEQ7QUFDMUUsY0FBYyxpRUFBaUU7QUFDL0U7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQSxhQUFhOztBQUViO0FBQ0EsU0FBUztBQUNULEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5wcm9qZWN0LXdlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2RpbnByb2plY3Qtd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGlucHJvamVjdC13ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHRmXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbioge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHZ3O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA5MHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vcjQud2FsbHBhcGVyZmxhcmUuY29tL3dhbGxwYXBlci81MDAvMTk4LzQ2My9waXhlbC1hcnQtZGlnaXRhbC1hcnQtcGl4ZWxhdGVkLXBpeGVscy13YWxscGFwZXItYjk4MGY4M2RmMTdhZGQ0YjI2NzdkOGNmNjA5MTI2OGQuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5ib2R5OjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi8qIEhlYWRlciAmIE5hdmlnYXRpb24gKi9cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDBweCAzMnB4O1xufVxuXG4uc2l0ZVRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCAxMnB4O1xufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxubmF2ID4gKiwgLnNlYXJjaEJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZzogM3B4IDdweDtcbiAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uc2VhcmNoQ29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA4cHg7XG59XG5cbi5zZWFyY2hCb3gsIC5zZWFyY2hCdG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4uc2VhcmNoQm94IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc2VhcmNoQnRuIHtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5uYXZJdGVtLCAuc2VhcmNoQnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogZWFzZSAwLjNzO1xufVxuXG4ubmF2SXRlbTpob3ZlciwgLnNlYXJjaEJ0bjpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5kaXZpZGVyIHtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuXG4uY2hvc2VuVW5pdCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi8qIENvbnRlbnQgKi9cbi5jb250ZW50e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NSUgMzUlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBDdXJyZW50IEluZm9ybWF0aW9uICovXG4uY3VyckluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMjZweCAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmN1cnJJbmZvTGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZzogMjZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xufVxuXG4uY2l0eU5hbWUge1xuICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2l0eURhdGV7XG5cbn1cblxuLmNpdHlUaW1le1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jaXR5VGVtcHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNpdHlXZWF0aGVye1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLndlYXRoZXJJY29uIHtcbiAgICB3aWR0aDogMTI4cHg7XG4gICAgaGVpZ2h0OiAxMjhweDtcbn1cblxuLmN1cnJJbmZvUmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6IDI2cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4ucmlnaHRJbmZvVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLnJpZ2h0SW5mb05vIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLyogRm9yZWNhc3QgSW5mb3JtYXRpb24gKi9cbi5mb3JlY2FzdFNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmZvcmVjYXN0T3B0IHtcblxufVxuXG4uZm9yZWNhc3RDYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cbi5mb3JlY2FzdENhcmQgPiAqIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9yZWNhc3REYXRlIHtcblxufVxuXG4uZm9yZWNhc3RNYXhUZW1wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5mb3JlY2FzdE1pblRlbXAge1xuXG59XG5cbi5mb3JlY2FzdFdlYXRoZXIge1xuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QiwwREFBa0U7SUFDbEUsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixrS0FBa0s7SUFDbEssc0JBQXNCO0lBQ3RCLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLHVGQUF1RjtJQUN2RixXQUFXO0FBQ2Y7O0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUEsWUFBWTtBQUNaO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCOztBQUVBLHdCQUF3QjtBQUN4QjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLG1CQUFtQjtBQUN2Qjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4vZm9udHMvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggOTB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3I0LndhbGxwYXBlcmZsYXJlLmNvbS93YWxscGFwZXIvNTAwLzE5OC80NjMvcGl4ZWwtYXJ0LWRpZ2l0YWwtYXJ0LXBpeGVsYXRlZC1waXhlbHMtd2FsbHBhcGVyLWI5ODBmODNkZjE3YWRkNGIyNjc3ZDhjZjYwOTEyNjhkLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJvZHk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwJSwgcmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLyogSGVhZGVyICYgTmF2aWdhdGlvbiAqL1xcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMHB4IDMycHg7XFxufVxcblxcbi5zaXRlVGl0bGUge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgcGFkZGluZzogMHB4IDEycHg7XFxufVxcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbm5hdiA+ICosIC5zZWFyY2hCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xcbiAgICBtYXJnaW46IDBweCA1cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaENvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLnNlYXJjaEJveCwgLnNlYXJjaEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi5zZWFyY2hCb3gge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnNlYXJjaEJ0biB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXZJdGVtLCAuc2VhcmNoQnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuM3M7XFxufVxcblxcbi5uYXZJdGVtOmhvdmVyLCAuc2VhcmNoQnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLmRpdmlkZXIge1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4uY2hvc2VuVW5pdCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi8qIENvbnRlbnQgKi9cXG4uY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjUlIDM1JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIEN1cnJlbnQgSW5mb3JtYXRpb24gKi9cXG4uY3VyckluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDI2cHggMHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uY3VyckluZm9MZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAyNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1heC13aWR0aDogNzIwcHg7XFxufVxcblxcbi5jaXR5TmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogNDZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmNpdHlEYXRle1xcblxcbn1cXG5cXG4uY2l0eVRpbWV7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5jaXR5VGVtcHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uY2l0eVdlYXRoZXJ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLndlYXRoZXJJY29uIHtcXG4gICAgd2lkdGg6IDEyOHB4O1xcbiAgICBoZWlnaHQ6IDEyOHB4O1xcbn1cXG5cXG4uY3VyckluZm9SaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgcGFkZGluZzogMjZweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLnJpZ2h0SW5mb1RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4ucmlnaHRJbmZvTm8ge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi8qIEZvcmVjYXN0IEluZm9ybWF0aW9uICovXFxuLmZvcmVjYXN0U2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjZweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgY29sdW1uLWdhcDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLmZvcmVjYXN0T3B0IHtcXG5cXG59XFxuXFxuLmZvcmVjYXN0Q2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDk1JTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4uZm9yZWNhc3RDYXJkID4gKiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5mb3JlY2FzdERhdGUge1xcblxcbn1cXG5cXG4uZm9yZWNhc3RNYXhUZW1wIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3RNaW5UZW1wIHtcXG5cXG59XFxuXFxuLmZvcmVjYXN0V2VhdGhlciB7XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5jb25zdCB0ZW1wVW5pdEl0ZW1zID0gW1xuICAgIHsgY2xhc3M6IFwiY2Vsc2l1c1wiLCB0ZXh0OiBcIsKwQ1wiIH0sXG4gICAgeyBjbGFzczogXCJmYWhyZW5oZWl0XCIsIHRleHQ6IFwiwrBGXCIgfVxuXTtcblxuY29uc3Qgc3BlZWRVbml0SXRlbXMgPSBbXG4gICAgeyBjbGFzczogXCJraWxvbWV0ZXJzXCIsIHRleHQ6IFwia21cIiB9LFxuICAgIHsgY2xhc3M6IFwibWlsZXNcIiwgdGV4dDogXCJtaVwiIH1cbl07XG5cbmNvbnN0IGZvcmVjYXN0T3B0ID0gW1xuICAgIHsgY2xhc3M6IFwiZGFpbHlcIiwgdGV4dDogXCJEYWlseVwiIH0sXG4gICAgeyBjbGFzczogXCJob3VybHlcIiwgdGV4dDogXCJIb3VybHlcIiB9XG5dO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0eVwiKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdHlcIiwgXCJ0b3JvbnRvXCIpXG4gICAgfVxuXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlbXBVbml0XCIpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGVtcFVuaXRcIiwgXCLCsENcIilcbiAgICB9XG5cbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3BlZWRVbml0XCIpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3BlZWRVbml0XCIsIFwia21cIilcbiAgICB9XG5cbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9yZWNhc3RcIikpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb3JlY2FzdFwiLCBcImRhaWx5XCIpXG4gICAgfVxuXG4gICAgY3JlYXRlTmF2SXRlbShcImZvcmVjYXN0T3B0XCIsIGZvcmVjYXN0T3B0KTtcbiAgICBjcmVhdGVOYXZJdGVtKFwidGVtcFVuaXRcIiwgdGVtcFVuaXRJdGVtcyk7XG4gICAgY3JlYXRlTmF2SXRlbShcInNwZWVkVW5pdFwiLCBzcGVlZFVuaXRJdGVtcyk7XG4gICAgbWFrZUN1cnJJbmZvKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0eVwiKSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZW1wVW5pdFwiKSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzcGVlZFVuaXRcIikpO1xuICAgIG1ha2VGb3JlY2FzdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlcIiksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcFVuaXRcIiksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9yZWNhc3RcIikpO1xuICAgIHNlYXJjaEZ1bmN0aW9uKCk7XG4gICAgc3dpdGNoRm9yZWNhc3QoKTtcbiAgICBzd2l0Y2hUZW1wKCk7XG4gICAgc3dpdGNoU3BlZWQoKTtcbiAgICBjaG9zZW5Vbml0KCk7XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlTmF2SXRlbShjb250YWluZXIsIGl0ZW1zKSB7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdWwuY2xhc3NMaXN0LmFkZChjb250YWluZXIpO1xuXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJuYXZJdGVtXCIpO1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKGl0ZW0uY2xhc3MpO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IGl0ZW0udGV4dDtcblxuICAgICAgICB1bC5hcHBlbmQobGkpO1xuXG4gICAgICAgIGlmIChpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBkaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJkaXZpZGVyXCIpO1xuICAgICAgICAgICAgdWwuYXBwZW5kKGRpdmlkZXIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpLmFwcGVuZCh1bCk7XG59XG5cbmZ1bmN0aW9uIGNob3NlblVuaXQoKSB7XG4gICAgY29uc3QgdW5pdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdkl0ZW1cIik7XG5cbiAgICB1bml0cy5mb3JFYWNoKCh1bml0KSA9PiB7XG4gICAgICAgIHVuaXQuY2xhc3NMaXN0LnJlbW92ZShcImNob3NlblVuaXRcIik7XG4gICAgfSlcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZvcmVjYXN0XCIpID09PSBcImRhaWx5XCIpIHtcbiAgICAgICAgdW5pdHNbMF0uY2xhc3NMaXN0LmFkZChcImNob3NlblVuaXRcIilcbiAgICB9IGVsc2Uge1xuICAgICAgICB1bml0c1sxXS5jbGFzc0xpc3QuYWRkKFwiY2hvc2VuVW5pdFwiKVxuICAgIH1cblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlbXBVbml0XCIpID09PSBcIsKwQ1wiKSB7XG4gICAgICAgIHVuaXRzWzJdLmNsYXNzTGlzdC5hZGQoXCJjaG9zZW5Vbml0XCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdW5pdHNbM10uY2xhc3NMaXN0LmFkZChcImNob3NlblVuaXRcIilcbiAgICB9XG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzcGVlZFVuaXRcIikgPT09IFwia21cIikge1xuICAgICAgICB1bml0c1s0XS5jbGFzc0xpc3QuYWRkKFwiY2hvc2VuVW5pdFwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHVuaXRzWzVdLmNsYXNzTGlzdC5hZGQoXCJjaG9zZW5Vbml0XCIpXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQm94XCIpO1xuICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoQnRuXCIpO1xuXG4gICAgc2VhcmNoQnRuLm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHNlYXJjaEJveC52YWx1ZS50cmltKCkpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJldkNpdHlcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXR5XCIpKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0eVwiLCBzZWFyY2hCb3gudmFsdWUpO1xuXG4gICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgc2VhcmNoQm94LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGF3YWl0IG1ha2VDdXJySW5mbyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlcIiksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcFVuaXRcIiksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3BlZWRVbml0XCIpKTtcbiAgICAgICAgICAgIGF3YWl0IG1ha2VGb3JlY2FzdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlcIiksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcFVuaXRcIiksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9yZWNhc3RcIikpOyAgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN3aXRjaEZvcmVjYXN0KCkge1xuICAgIGNvbnN0IGZvcmVjYXN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RTZWN0aW9uXCIpO1xuICAgIGNvbnN0IGRhaWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYWlseVwiKTtcbiAgICBjb25zdCBob3VybHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseVwiKTtcblxuICAgIGRhaWx5Lm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb3JlY2FzdFwiLCBcImRhaWx5XCIpO1xuXG4gICAgICAgIGZvcmVjYXN0U2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2hvc2VuVW5pdCgpO1xuICAgICAgICBhd2FpdCBtYWtlRm9yZWNhc3QobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXR5XCIpLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlbXBVbml0XCIpLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZvcmVjYXN0XCIpKTtcbiAgICB9XG5cbiAgICBob3VybHkub25jbGljayA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZvcmVjYXN0XCIsIFwiaG91cmx5XCIpO1xuXG4gICAgICAgIGZvcmVjYXN0U2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2hvc2VuVW5pdCgpO1xuICAgICAgICBhd2FpdCBtYWtlRm9yZWNhc3QobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXR5XCIpLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlbXBVbml0XCIpLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZvcmVjYXN0XCIpKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN3aXRjaFRlbXAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICBjb25zdCBDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZWxzaXVzXCIpO1xuICAgIGNvbnN0IEYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhaHJlbmhlaXRcIik7XG5cbiAgICBDLm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0ZW1wVW5pdFwiLCBcIsKwQ1wiKTtcblxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjaG9zZW5Vbml0KCk7XG4gICAgICAgIGF3YWl0IG1ha2VDdXJySW5mbyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlcIiksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcFVuaXRcIiksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3BlZWRVbml0XCIpKTtcbiAgICAgICAgYXdhaXQgbWFrZUZvcmVjYXN0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0eVwiKSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZW1wVW5pdFwiKSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb3JlY2FzdFwiKSk7XG4gICAgfVxuXG4gICAgRi5vbmNsaWNrID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGVtcFVuaXRcIiwgXCLCsEZcIik7XG5cbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2hvc2VuVW5pdCgpO1xuICAgICAgICBhd2FpdCBtYWtlQ3VyckluZm8obG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXR5XCIpLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlbXBVbml0XCIpLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNwZWVkVW5pdFwiKSk7XG4gICAgICAgIGF3YWl0IG1ha2VGb3JlY2FzdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlcIiksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcFVuaXRcIiksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9yZWNhc3RcIikpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc3dpdGNoU3BlZWQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICBjb25zdCBLTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua2lsb21ldGVyc1wiKTtcbiAgICBjb25zdCBNSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlsZXNcIik7XG5cbiAgICBLTS5vbmNsaWNrID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3BlZWRVbml0XCIsIFwia21cIik7XG5cbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2hvc2VuVW5pdCgpO1xuICAgICAgICBhd2FpdCBtYWtlQ3VyckluZm8obG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXR5XCIpLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlbXBVbml0XCIpLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNwZWVkVW5pdFwiKSk7XG4gICAgICAgIGF3YWl0IG1ha2VGb3JlY2FzdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlcIiksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcFVuaXRcIiksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9yZWNhc3RcIikpO1xuICAgIH1cblxuICAgIE1JLm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzcGVlZFVuaXRcIiwgXCJtaVwiKTtcblxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjaG9zZW5Vbml0KCk7XG4gICAgICAgIGF3YWl0IG1ha2VDdXJySW5mbyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdHlcIiksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcFVuaXRcIiksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3BlZWRVbml0XCIpKTtcbiAgICAgICAgYXdhaXQgbWFrZUZvcmVjYXN0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0eVwiKSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZW1wVW5pdFwiKSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb3JlY2FzdFwiKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmZXRjaFJlcXVlc3QoY2l0eSkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MTRmNmU2NzBiOWNhNDZmY2FmMjIwMzY1NTIzMTExMCZxPVwiICsgY2l0eSArIFwiJmRheXM9NyZhcWk9bm8mYWxlcnRzPW5vXCIsIHttb2RlOiAnY29ycyd9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRGZXRjaCgpO1xuICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEZldGNoKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MTRmNmU2NzBiOWNhNDZmY2FmMjIwMzY1NTIzMTExMCZxPVwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmV2Q2l0eVwiKSArIFwiJmRheXM9NyZhcWk9bm8mYWxlcnRzPW5vXCIsIHttb2RlOiAnY29ycyd9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0eVwiLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByZXZDaXR5XCIpKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmZXRjaExlZnRJbmZvKGNpdHksIHRlbXBVbml0KSB7XG4gICAgcmV0dXJuIGZldGNoUmVxdWVzdChjaXR5KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsVGltZUVwb2NoID0gcmVzcG9uc2UubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoICogMTAwMDtcbiAgICAgICAgY29uc3QgbG9jYWxUaW1lRGF0ZSA9IG5ldyBEYXRlKGxvY2FsVGltZUVwb2NoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBsb2NhbFRpbWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBsb2NhbFRpbWVEYXRlLnRvTG9jYWxlVGltZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgIHRpbWVab25lTmFtZTogJ3Nob3J0J1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdGVtcFZhbCA9IHJlc3BvbnNlLmN1cnJlbnQudGVtcF9jO1xuICAgICAgICBsZXQgZmVlbHNWYWwgPSByZXNwb25zZS5jdXJyZW50LmZlZWxzbGlrZV9jO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRlbXBVbml0ID09PSBcIsKwRlwiKSB7XG4gICAgICAgICAgICB0ZW1wVmFsID0gcmVzcG9uc2UuY3VycmVudC50ZW1wX2Y7XG4gICAgICAgICAgICBmZWVsc1ZhbCA9IHJlc3BvbnNlLmN1cnJlbnQuZmVlbHNsaWtlX2Y7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgY2xhc3M6IFwiY2l0eU5hbWVcIiwgdGV4dDogcmVzcG9uc2UubG9jYXRpb24ubmFtZSArIFwiLCBcIiArIHJlc3BvbnNlLmxvY2F0aW9uLmNvdW50cnkgfSxcbiAgICAgICAgICAgIHsgY2xhc3M6IFwiY2l0eURhdGVcIiwgdGV4dDogZm9ybWF0dGVkRGF0ZSB9LFxuICAgICAgICAgICAgeyBjbGFzczogXCJjaXR5VGltZVwiLCB0ZXh0OiBmb3JtYXR0ZWRUaW1lIH0sXG4gICAgICAgICAgICB7IGNsYXNzOiBcImNpdHlUZW1wXCIsIHRleHQ6IHRlbXBWYWwgKyB0ZW1wVW5pdCArIFwiIHwgRmVlbHMgTGlrZSBcIiArIGZlZWxzVmFsICsgdGVtcFVuaXQgfSxcbiAgICAgICAgICAgIHsgY2xhc3M6IFwiY2l0eVdlYXRoZXJcIiwgdGV4dDogcmVzcG9uc2UuY3VycmVudC5jb25kaXRpb24udGV4dCB9LFxuICAgICAgICAgICAgeyBjbGFzczogXCJ3ZWF0aGVySWNvblwiLCBpY29uOiByZXNwb25zZS5jdXJyZW50LmNvbmRpdGlvbi5pY29uIH1cbiAgICAgICAgXTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hSaWdodEluZm8oY2l0eSwgc3BlZWQpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXF1ZXN0KGNpdHkpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IHNwZWVkVmFsID0gcmVzcG9uc2UuY3VycmVudC53aW5kX2twaDtcbiAgICAgICAgXG4gICAgICAgIGlmIChzcGVlZCA9PT0gXCJtaVwiKSB7XG4gICAgICAgICAgICBzcGVlZFZhbCA9IHJlc3BvbnNlLmN1cnJlbnQud2luZF9tcGg7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgY2xhc3M6IFwicmlnaHRJbmZvVGl0bGVcIiwgdGV4dDogXCJIdW1pZGl0eVwiIH0sXG4gICAgICAgICAgICB7IGNsYXNzOiBcInJpZ2h0SW5mb05vXCIsIHRleHQ6IHJlc3BvbnNlLmN1cnJlbnQuaHVtaWRpdHkgKyBcIiAlXCIgfSxcbiAgICAgICAgICAgIHsgY2xhc3M6IFwicmlnaHRJbmZvVGl0bGVcIiwgdGV4dDogXCJDaGFuY2Ugb2YgUmFpblwiIH0sXG4gICAgICAgICAgICB7IGNsYXNzOiBcInJpZ2h0SW5mb05vXCIsIHRleHQ6IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV93aWxsX2l0X3JhaW4gKyBcIiAlXCIgfSxcbiAgICAgICAgICAgIHsgY2xhc3M6IFwicmlnaHRJbmZvVGl0bGVcIiwgdGV4dDogXCJDaGFuY2Ugb2YgU25vd1wiIH0sXG4gICAgICAgICAgICB7IGNsYXNzOiBcInJpZ2h0SW5mb05vXCIsIHRleHQ6IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV93aWxsX2l0X3Nub3cgKyBcIiAlXCIgfSxcbiAgICAgICAgICAgIHsgY2xhc3M6IFwicmlnaHRJbmZvVGl0bGVcIiwgdGV4dDogXCJXaW5kIFNwZWVkXCIgfSxcbiAgICAgICAgICAgIHsgY2xhc3M6IFwicmlnaHRJbmZvTm9cIiwgdGV4dDogc3BlZWRWYWwgKyBcIiBcIiArIHNwZWVkICsgXCIvaFwiIH1cbiAgICAgICAgXTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZUN1cnJJbmZvKGNpdHksIHRlbXBVbml0LCBzcGVlZCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICBjb25zdCBjdXJySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGN1cnJJbmZvLmNsYXNzTGlzdC5hZGQoXCJjdXJySW5mb1wiKTtcblxuICAgIGN1cnJJbmZvLmlubmVySFRNTCA9IGBgO1xuXG4gICAgY29uc3QgY3VyckluZm9MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgY3VyckluZm9MZWZ0LmNsYXNzTGlzdC5hZGQoXCJjdXJySW5mb0xlZnRcIik7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2ZldGNoTGVmdEluZm8oY2l0eSwgdGVtcFVuaXQpLCBmZXRjaFJpZ2h0SW5mbyhjaXR5LCBzcGVlZCldKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICAgICAgY29uc3QgbGVmdEluZm9SZXN1bHQgPSByZXN1bHRzWzBdO1xuICAgICAgICAgICAgY29uc3QgcmlnaHRJbmZvUmVzdWx0ID0gcmVzdWx0c1sxXTtcblxuICAgICAgICAgICAgbGVmdEluZm9SZXN1bHQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNvbnRhaW5lci5zcmMgPSBpdGVtLmljb247XG5cbiAgICAgICAgICAgICAgICAgICAgY3VyckluZm9MZWZ0LmFwcGVuZChpY29uQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGl0ZW0uY2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gaXRlbS50ZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJJbmZvTGVmdC5hcHBlbmQodGV4dENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJJbmZvUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgICAgIGN1cnJJbmZvUmlnaHQuY2xhc3NMaXN0LmFkZChcImN1cnJJbmZvUmlnaHRcIik7XG5cbiAgICAgICAgICAgIHJpZ2h0SW5mb1Jlc3VsdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGl0ZW0uY2xhc3MpO1xuICAgICAgICAgICAgICAgIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSBpdGVtLnRleHQ7XG5cbiAgICAgICAgICAgICAgICBjdXJySW5mb1JpZ2h0LmFwcGVuZCh0ZXh0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjdXJySW5mby5hcHBlbmQoY3VyckluZm9MZWZ0LCBjdXJySW5mb1JpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kKGN1cnJJbmZvKTtcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIGZldGNoRm9yZWNhc3REYWlseShudW0sIGNpdHksIHRlbXBVbml0KSB7XG4gICAgcmV0dXJuIGZldGNoUmVxdWVzdChjaXR5KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBmb3JlY2FzdERhdGEgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVtudW1dO1xuXG4gICAgICAgIGNvbnN0IGxvY2FsVGltZURhdGUgPSBuZXcgRGF0ZShmb3JlY2FzdERhdGEuZGF0ZSk7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGxvY2FsVGltZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgICAgICAgIHdlZWtkYXk6ICdzaG9ydCcsXG4gICAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdGVtcFZhbE1heCA9IGZvcmVjYXN0RGF0YS5kYXkubWF4dGVtcF9jO1xuICAgICAgICBsZXQgdGVtcFZhbE1pbiA9IGZvcmVjYXN0RGF0YS5kYXkubWludGVtcF9jXG4gICAgICAgIFxuICAgICAgICBpZiAodGVtcFVuaXQgPT09IFwiwrBGXCIpIHtcbiAgICAgICAgICAgIHRlbXBWYWxNYXggPSBmb3JlY2FzdERhdGEuZGF5Lm1heHRlbXBfZjtcbiAgICAgICAgICAgIHRlbXBWYWxNaW4gPSBmb3JlY2FzdERhdGEuZGF5Lm1pbnRlbXBfZjtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgeyBjbGFzczogXCJmb3JlY2FzdERhdGVcIiwgdGV4dDogZm9ybWF0dGVkRGF0ZSB9LFxuICAgICAgICAgICAgeyBjbGFzczogXCJmb3JlY2FzdE1heFRlbXBcIiwgdGV4dDogXCJIaWdoOiBcIiArIHRlbXBWYWxNYXggKyB0ZW1wVW5pdCB9LFxuICAgICAgICAgICAgeyBjbGFzczogXCJmb3JlY2FzdE1pblRlbXBcIiwgdGV4dDogXCJMb3c6IFwiICsgdGVtcFZhbE1pbiArIHRlbXBVbml0IH0sXG4gICAgICAgICAgICB7IGNsYXNzOiBcIndlYXRoZXJJY29uRm9yZWNhc3RcIiwgaWNvbjogZm9yZWNhc3REYXRhLmRheS5jb25kaXRpb24uaWNvbiB9LFxuICAgICAgICBdO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmZXRjaEZvcmVjYXN0SG91cmx5KG51bSwgY2l0eSwgdGVtcFVuaXQpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXF1ZXN0KGNpdHkpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IGZvcmVjYXN0RGF0YSA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbbnVtXTtcblxuICAgICAgICBjb25zdCBsb2NhbFRpbWVFcG9jaCA9IGZvcmVjYXN0RGF0YS50aW1lX2Vwb2NoICogMTAwMDtcblxuICAgICAgICBjb25zdCBsb2NhbFRpbWVEYXRlID0gbmV3IERhdGUobG9jYWxUaW1lRXBvY2gpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBsb2NhbFRpbWVEYXRlLnRvTG9jYWxlVGltZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICAgICAgICBob3VyOiAnbnVtZXJpYydcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHRlbXBWYWwgPSBmb3JlY2FzdERhdGEudGVtcF9jO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRlbXBVbml0ID09PSBcIsKwRlwiKSB7XG4gICAgICAgICAgICB0ZW1wVmFsID0gZm9yZWNhc3REYXRhLnRlbXBfZjtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgeyBjbGFzczogXCJmb3JlY2FzdERhdGVcIiwgdGV4dDogZm9ybWF0dGVkRGF0ZSB9LFxuICAgICAgICAgICAgeyBjbGFzczogXCJmb3JlY2FzdFRlbXBcIiwgdGV4dDogXCJUZW1wOiBcIiArIHRlbXBWYWwgKyB0ZW1wVW5pdCB9LFxuICAgICAgICAgICAgeyBjbGFzczogXCJ3ZWF0aGVySWNvbkZvcmVjYXN0XCIsIGljb246IGZvcmVjYXN0RGF0YS5jb25kaXRpb24uaWNvbiB9LFxuICAgICAgICBdO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlRm9yZWNhc3QoY2l0eSwgdGVtcFVuaXQsIHR5cGUpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgbGV0IGZvcmVjYXN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RTZWN0aW9uXCIpO1xuICAgIGlmICghZm9yZWNhc3RTZWN0aW9uKSB7XG4gICAgICAgIGZvcmVjYXN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBmb3JlY2FzdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0U2VjdGlvblwiKTtcbiAgICAgICAgY29udGVudC5hcHBlbmQoZm9yZWNhc3RTZWN0aW9uKTtcbiAgICB9XG5cbiAgICBmb3JlY2FzdFNlY3Rpb24uaW5uZXJIVE1MID0gYGA7XG5cbiAgICBjb25zdCBmZXRjaFByb21pc2VzID0gW107XG4gICAgaWYgKHR5cGUgPT09IFwiZGFpbHlcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgZmV0Y2hQcm9taXNlcy5wdXNoKGZldGNoRm9yZWNhc3REYWlseShpLCBjaXR5LCB0ZW1wVW5pdCkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgICAgICBmZXRjaFByb21pc2VzLnB1c2goZmV0Y2hGb3JlY2FzdEhvdXJseShpLCBjaXR5LCB0ZW1wVW5pdCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGZldGNoUHJvbWlzZXMpXG4gICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICByZXN1bHRzLmZvckVhY2goKGZvcmVjYXN0RGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgZm9yZWNhc3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdENhcmRcIik7XG5cbiAgICAgICAgICAgICAgICBmb3JlY2FzdERhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzcyA9PT0gXCJ3ZWF0aGVySWNvbkZvcmVjYXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJJY29uRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VhdGhlckljb25Gb3JlY2FzdC5jbGFzc0xpc3QuYWRkKGl0ZW0uY2xhc3MpXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWF0aGVySWNvbkZvcmVjYXN0LnNyYyA9IGl0ZW0uaWNvbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yZWNhc3RDYXJkLmFwcGVuZCh3ZWF0aGVySWNvbkZvcmVjYXN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JlY2FzdEl0ZW0uY2xhc3NMaXN0LmFkZChpdGVtLmNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmVjYXN0SXRlbS50ZXh0Q29udGVudCA9IGl0ZW0udGV4dDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yZWNhc3RDYXJkLmFwcGVuZChmb3JlY2FzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3JlY2FzdFNlY3Rpb24uYXBwZW5kKGZvcmVjYXN0Q2FyZCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29udGVudC5hcHBlbmQoZm9yZWNhc3RTZWN0aW9uKTtcbiAgICAgICAgfSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9