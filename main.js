/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  /*COLORS*/\n  --principal-color: #011628;\n  --secondary-color: #03395a;\n  --tertiary-color: #da0754;\n  --cancel-color: #df2828;\n  --hover-color: #ffffff;\n  --background-color: #f1f1f1;\n  --background-dark-color: #ebe8e8;\n  --header-footer-color: #0f2d40;\n  --gradient: linear-gradient(\n    90deg,\n    rgba(15, 45, 64, 1) 0%,\n    rgba(25, 71, 89, 1) 100%\n  );\n  --tex-color-principal: #2e2e2e;\n  --tex-color-description: #636363;\n  --icon-color: #2b2b2b;\n  --shadow: 0px 0px 25px -10px black;\n\n  /*SIZE*/\n  --icon-size: 25px;\n  --radius: 15px;\n  --input-height: 25px;\n  --text-size-principal: 20px;\n  --text-size-secondary: 17px;\n  --text-size-description: 14px;\n  --padding: 15px;\n  --margin: 15px;\n  --gap: 15px;\n  --gap-min: 7px;\n  --logo-size: 50px;\n  --border-size: 3px;\n}\n\nbody {\n  background-color: var(--background-color);\n  margin: 0;\n  height: 100dvh;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr auto;\n  font-family: Arial, Helvetica, sans-serif;\n}\np,\nh1,\nh2,\nh3,\nh4 {\n  margin: 0;\n  color: var(--background-color);\n}\nsvg {\n  height: 25px;\n  fill: var(--tex-color-principal);\n}\n\nheader {\n  background: var(--principal-color);\n  grid-column: 1 / -1;\n  display: grid;\n  align-content: center;\n  justify-content: center;\n  box-shadow: var(--shadow);\n  border-bottom: var(--border-size) solid var(--tertiary-color);\n  z-index: 30;\n  > div {\n    display: grid;\n    grid-template-columns: auto auto auto;\n    align-items: center;\n    margin: var(--margin);\n  }\n  svg {\n    height: var(--logo-size);\n    fill: var(--background-color);\n  }\n  p {\n    font-size: calc(var(--logo-size) * 0.7);\n    margin: 0;\n    font-weight: bold;\n  }\n  #logo-left {\n    color: var(--tertiary-color);\n  }\n  #logo-right {\n    color: var(--background-color);\n  }\n}\n\nmain {\n  background-image: linear-gradient(\n    300.4deg,\n    rgba(12, 20, 69, 1) -16.9%,\n    rgba(71, 30, 84, 1) 119.9%\n  );\n  display: grid;\n  align-content: center;\n  justify-content: center;\n  #content {\n  }\n  .game-board-container {\n    height: 500px;\n    width: 500px;\n    display: grid;\n    grid-template-columns: repeat(20, 1fr);\n    grid-template-rows: repeat(20, 1fr);\n    border-radius: var(--radius);\n    border: 3px solid var(--tertiary-color);\n    overflow: hidden;\n    gap: 2px;\n    button {\n      background-color: rgb(1, 22, 40, 0);\n      border: 1px solid var(--principal-color);\n    }\n    button:hover {\n      background-color: rgb(255, 255, 255, 0.25);\n      cursor: crosshair;\n    }\n    .ship {\n      background-color: rgb(1, 22, 40);\n    }\n    .ship-area {\n      background-color: rgb(255, 255, 255, 0.1);\n    }\n  }\n}\n\nfooter {\n  grid-column: 1 / -1;\n  display: grid;\n  align-content: center;\n  justify-content: center;\n  background-color: var(--principal-color);\n  > div {\n    display: grid;\n    grid-template-columns: auto auto;\n    align-items: center;\n    margin: calc(var(--margin) / 4);\n  }\n  svg {\n    height: 25px;\n    fill: var(--tertiary-color);\n  }\n  p {\n    font-size: var(--tex-color-description);\n    color: var(--tertiary-color);\n    margin: 0;\n    font-weight: bold;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/game-board-obj.js":
/*!*******************************!*\
  !*** ./src/game-board-obj.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard)\n/* harmony export */ });\nclass GameBoard {\n  constructor(size = 20) {\n    if (size < 6) {\n      //6 IS THE MINIUM SIZE ALLOW OR AUTO PLACE SHIP FUNCTION ENTER IN A INFINITE LOOP\n      size = 10;\n    }\n    this.size = size;\n    this.coordinates = new Map();\n    this.ships = [];\n  }\n  showGameBoard() {\n    let line = \"\";\n    for (let i = 0; i < this.size; i++) {\n      for (let j = 0; j < this.size; j++) {\n        let coordValue = this.coordinates.get(this.fromArrayToCoords([i, j]));\n        if (coordValue === undefined) {\n          line += \"-\";\n        }\n        if (coordValue === \"attacked-already\") {\n          line += \"X\";\n        }\n        if (coordValue === \"missed-attack\") {\n          line += \"*\";\n        }\n        if (coordValue === \"ship-area\") {\n          line += \"/\";\n        }\n        if (\n          (coordValue !== undefined) &\n          (coordValue !== \"attacked-already\") &\n          (coordValue !== \"missed-attack\") &\n          (coordValue !== \"ship-area\")\n        ) {\n          line += \"O\";\n        }\n      }\n      line += \"\\n\";\n    }\n    console.log(line);\n    console.log(\"\\n\");\n  }\n  receiveAttack(arrayCoords) {\n    let coords = this.fromArrayToCoords([arrayCoords[0], arrayCoords[1]]);\n    if (\n      this.coordinates.has(coords) &\n      (this.coordinates.get(coords) !== \"attacked-already\") &\n      (this.coordinates.get(coords) !== \"missed-attack\") &\n      (this.coordinates.get(coords) !== \"ship-area\")\n    ) {\n      this.coordinates.get(coords).hit();\n      this.coordinates.set(coords, \"attacked-already\");\n    } else if (\n      (this.coordinates.has(coords) === false) |\n      (this.coordinates.get(coords) === \"ship-area\")\n    ) {\n      this.coordinates.set(coords, \"missed-attack\");\n    }\n  }\n  placeShip(ship, arrayCoords, defaultPosition = true) {\n    if (\n      this.isPlaceAvailableForPlacing(ship.length, arrayCoords, defaultPosition)\n    ) {\n      for (let index = 0; index < ship.length; index++) {\n        let coords = undefined;\n        if (defaultPosition) {\n          coords = this.fromArrayToCoords([\n            arrayCoords[0],\n            arrayCoords[1] + index,\n          ]);\n        } else {\n          coords = this.fromArrayToCoords([\n            arrayCoords[0] + index,\n            arrayCoords[1],\n          ]);\n        }\n        this.coordinates.set(coords, ship);\n      }\n      this.placeShipArea(\n        ship.length,\n        [arrayCoords[0], arrayCoords[1]],\n        defaultPosition,\n      );\n      this.ships.push(ship);\n    }\n  }\n  placeShipArea(shipSize, arrayCoords, defaultPosition) {\n    let startCoord = [];\n    let endCoord = [];\n\n    startCoord = [arrayCoords[0] - 1, arrayCoords[1] - 1];\n    if (defaultPosition) {\n      endCoord = [arrayCoords[0] + 2, arrayCoords[1] + shipSize + 1];\n    } else {\n      endCoord = [arrayCoords[0] + shipSize + 1, arrayCoords[1] + 2];\n    }\n    for (let i = startCoord[0]; i < endCoord[0]; i++) {\n      for (let j = startCoord[1]; j < endCoord[1]; j++) {\n        let coords = this.fromArrayToCoords([i, j]);\n        if (!this.coordinates.has(coords)) {\n          this.coordinates.set(coords, \"ship-area\");\n        }\n      }\n    }\n  }\n  isPlaceAvailableForPlacing(shipSize, arrayCoords, defaultPosition = true) {\n    let placeIsAvailable = true;\n    for (let index = 0; index < shipSize; index++) {\n      let coords = undefined;\n      if (defaultPosition) {\n        coords = this.fromArrayToCoords([\n          arrayCoords[0],\n          arrayCoords[1] + index,\n        ]);\n      } else {\n        coords = this.fromArrayToCoords([\n          arrayCoords[0] + index,\n          arrayCoords[1],\n        ]);\n      }\n      if (this.coordinates.has(coords)) {\n        placeIsAvailable = false;\n      }\n    }\n    if (\n      (arrayCoords[0] + shipSize > this.size) |\n      ((arrayCoords[1] > this.size) & !defaultPosition) |\n      ((arrayCoords[0] > this.size) |\n        ((arrayCoords[1] + shipSize > this.size) & defaultPosition))\n    ) {\n      placeIsAvailable = false;\n    }\n    return placeIsAvailable;\n  }\n  isPlaceAvailableForAttack(arrayCoords) {\n    if (\n      (arrayCoords[0] >= 0) &\n      (arrayCoords[0] < this.size) &\n      (arrayCoords[1] >= 0) &\n      (arrayCoords[1] < this.size)\n    ) {\n      let coords = this.fromArrayToCoords([arrayCoords[0], arrayCoords[1]]);\n      if (\n        (this.coordinates.get(coords) !== \"missed-attack\") &\n        (this.coordinates.get(coords) !== \"attacked-already\")\n      ) {\n        return true;\n      } else {\n        return false;\n      }\n    } else {\n      return false;\n    }\n  }\n  thisCoordinateHasBeenAttack(arrayCoords) {\n    let coords = this.fromArrayToCoords([arrayCoords[0], arrayCoords[1]]);\n    if (this.coordinates.get(coords) === \"attacked-already\") {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  fromArrayToCoords(coords) {\n    return \"x:\" + coords[0] + \",y:\" + coords[1];\n  }\n  isAllShipsSunk() {\n    for (let index = 0; index < this.ships.length; index++) {\n      if (!this.ships[index].isSunk()) {\n        return false;\n      }\n    }\n    return true;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/game-board-obj.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _player_obj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-obj */ \"./src/player-obj.js\");\n/* harmony import */ var _load_game_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-game-board */ \"./src/load-game-board.js\");\n\n\n\n/*\nconst player1 = new Player();\nconst player2 = new Player();\nplayer1.autoPlaceAllShips();\nplayer2.autoPlaceAllShips();\nplayer1.addEnemyGameBoard(player2.gameBoard);\nplayer2.addEnemyGameBoard(player1.gameBoard);\nlet numBattles = 0;\nwhile (\n  !player1.enemyGameBoard.isAllShipsSunk() &\n  !player2.enemyGameBoard.isAllShipsSunk()\n) {\n  player1.autoAttack();\n  player2.autoAttack();\n  numBattles += 1;\n  player1.enemyGameBoard.showGameBoard();\n  player2.enemyGameBoard.showGameBoard();\n}\n*/\nconst player1 = new _player_obj__WEBPACK_IMPORTED_MODULE_1__.Player();\nplayer1.autoPlaceAllShips();\n\nconst $container = document.querySelector(\".game-board-container\");\n(0,_load_game_board__WEBPACK_IMPORTED_MODULE_2__.loadGameBoard)(player1.gameBoard, $container);\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/load-game-board.js":
/*!********************************!*\
  !*** ./src/load-game-board.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadGameBoard: () => (/* binding */ loadGameBoard)\n/* harmony export */ });\nfunction loadGameBoard(gameBoard, $container) {\n  for (let i = 0; i < gameBoard.size; i++) {\n    for (let j = 0; j < gameBoard.size; j++) {\n      let $coordBox = document.createElement(\"button\");\n      if (gameBoard.coordinates.has(gameBoard.fromArrayToCoords([i, j]))) {\n        if (\n          gameBoard.coordinates.get(gameBoard.fromArrayToCoords([i, j])) ===\n          \"ship-area\"\n        ) {\n          $coordBox.classList.add(\"ship-area\");\n        } else {\n          $coordBox.classList.add(\"ship\");\n        }\n      }\n      $container.appendChild($coordBox);\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/load-game-board.js?");

/***/ }),

/***/ "./src/player-obj.js":
/*!***************************!*\
  !*** ./src/player-obj.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _game_board_obj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-board-obj */ \"./src/game-board-obj.js\");\n/* harmony import */ var _ship_obj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship-obj */ \"./src/ship-obj.js\");\n\n\n\nfunction getRandomInt(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive\n}\nfunction randomBoolean() {\n  return Math.random() < 0.5;\n}\n\nclass Player {\n  constructor(name = \"user\", numShips = 4) {\n    this.name = name;\n    this.gameBoard = new _game_board_obj__WEBPACK_IMPORTED_MODULE_0__.GameBoard();\n    this.enemyGameBoard = undefined;\n    this.ships = [];\n    this.futuresAttacks = [];\n    this.lastHit = [];\n    for (let index = 0; index < numShips; index++) {\n      this.ships.push(new _ship_obj__WEBPACK_IMPORTED_MODULE_1__.Ship(2 + index));\n    }\n  }\n  addEnemyGameBoard(enemyGameBoard) {\n    this.enemyGameBoard = enemyGameBoard;\n  }\n  autoPlaceAllShips() {\n    let numRepetition = 0; //to prevent infinite loops if there is no place available\n    for (let index = 0; index < this.ships.length; index++) {\n      let arrayCoords = [];\n      let orientation = false;\n      do {\n        arrayCoords = [\n          getRandomInt(0, this.gameBoard.size - 1 - index),\n          getRandomInt(0, this.gameBoard.size - 1 - index),\n        ];\n        orientation = randomBoolean();\n        numRepetition += 1;\n      } while (\n        !this.gameBoard.isPlaceAvailableForPlacing(\n          this.ships[index].length,\n          arrayCoords,\n          orientation,\n        ) &\n        (numRepetition < 300)\n      );\n      if (numRepetition >= 300) {\n        this.gameBoard.coordinates.clear();\n        break;\n      }\n      this.gameBoard.placeShip(this.ships[index], arrayCoords, orientation);\n    }\n    if (numRepetition >= 300) {\n      this.autoPlaceAllShips();\n    }\n  }\n  getRandomAttackCoordinate() {\n    let x = getRandomInt(0, this.enemyGameBoard.size);\n    let y = getRandomInt(0, this.enemyGameBoard.size);\n    if (((x % 2 === 0) & (y % 2 !== 0)) | ((x % 2 !== 0) & (y % 2 === 0))) {\n      if (randomBoolean()) {\n        y += 1;\n      } else {\n        y -= 1;\n      }\n    }\n    return [x, y];\n  }\n  checkBestAttack(arrayCoords) {\n    let nextBestAttack = [];\n    //Compare that there are come attack one block close\n    if (\n      (this.enemyGameBoard.coordinates.get(\n        this.enemyGameBoard.fromArrayToCoords([\n          arrayCoords[0],\n          arrayCoords[1] + 1,\n        ]),\n      ) ===\n        \"attacked-already\") |\n      (this.enemyGameBoard.coordinates.get(\n        this.enemyGameBoard.fromArrayToCoords([\n          arrayCoords[0],\n          arrayCoords[1] - 1,\n        ]),\n      ) ===\n        \"attacked-already\") |\n      (this.enemyGameBoard.coordinates.get(\n        this.enemyGameBoard.fromArrayToCoords([\n          arrayCoords[0] + 1,\n          arrayCoords[1],\n        ]),\n      ) ===\n        \"attacked-already\") |\n      (this.enemyGameBoard.coordinates.get(\n        this.enemyGameBoard.fromArrayToCoords([\n          arrayCoords[0] - 1,\n          arrayCoords[1],\n        ]),\n      ) ===\n        \"attacked-already\")\n    ) {\n      //compare that there are a previous horizontal attack\n      if (\n        (this.enemyGameBoard.coordinates.get(\n          this.enemyGameBoard.fromArrayToCoords([\n            arrayCoords[0],\n            arrayCoords[1] + 1,\n          ]),\n        ) ===\n          \"attacked-already\") |\n        (this.enemyGameBoard.coordinates.get(\n          this.enemyGameBoard.fromArrayToCoords([\n            arrayCoords[0],\n            arrayCoords[1] - 1,\n          ]),\n        ) ===\n          \"attacked-already\")\n      ) {\n        for (let index = 1; index < 5; index++) {\n          if (\n            this.enemyGameBoard.coordinates.get(\n              this.enemyGameBoard.fromArrayToCoords([\n                arrayCoords[0],\n                arrayCoords[1] - index,\n              ]),\n            ) === \"missed-attack\"\n          ) {\n            break;\n          }\n          if (\n            (this.enemyGameBoard.coordinates.get(\n              this.enemyGameBoard.fromArrayToCoords([\n                arrayCoords[0],\n                arrayCoords[1] - index,\n              ]),\n            ) !==\n              \"attacked-already\") &\n            (this.enemyGameBoard.coordinates.get(\n              this.enemyGameBoard.fromArrayToCoords([\n                arrayCoords[0],\n                arrayCoords[1] + index,\n              ]),\n            ) !==\n              \"missed-attack\")\n          ) {\n            nextBestAttack.push([arrayCoords[0], arrayCoords[1] - index]);\n            break;\n          }\n        }\n        for (let index = 1; index < 5; index++) {\n          if (\n            this.enemyGameBoard.coordinates.get(\n              this.enemyGameBoard.fromArrayToCoords([\n                arrayCoords[0],\n                arrayCoords[1] + index,\n              ]),\n            ) === \"missed-attack\"\n          ) {\n            break;\n          }\n          if (\n            (this.enemyGameBoard.coordinates.get(\n              this.enemyGameBoard.fromArrayToCoords([\n                arrayCoords[0],\n                arrayCoords[1] + index,\n              ]),\n            ) !==\n              \"attacked-already\") &\n            (this.enemyGameBoard.coordinates.get(\n              this.enemyGameBoard.fromArrayToCoords([\n                arrayCoords[0],\n                arrayCoords[1] + index,\n              ]),\n            ) !==\n              \"missed-attack\")\n          ) {\n            nextBestAttack.push([arrayCoords[0], arrayCoords[1] + index]);\n            break;\n          }\n        }\n        //compare that there are a previous vertical attack\n      } else if (\n        (this.enemyGameBoard.coordinates.get(\n          this.enemyGameBoard.fromArrayToCoords([\n            arrayCoords[0] + 1,\n            arrayCoords[1],\n          ]),\n        ) ===\n          \"attacked-already\") |\n        (this.enemyGameBoard.coordinates.get(\n          this.enemyGameBoard.fromArrayToCoords([\n            arrayCoords[0] - 1,\n            arrayCoords[1],\n          ]),\n        ) ===\n          \"attacked-already\")\n      ) {\n        for (let index = 1; index < 5; index++) {\n          if (\n            this.enemyGameBoard.coordinates.get(\n              this.enemyGameBoard.fromArrayToCoords([\n                arrayCoords[0] - index,\n                arrayCoords[1],\n              ]),\n            ) === \"missed-attack\"\n          ) {\n            break;\n          }\n          if (\n            (this.enemyGameBoard.coordinates.get(\n              this.enemyGameBoard.fromArrayToCoords([\n                arrayCoords[0] - index,\n                arrayCoords[1],\n              ]),\n            ) !==\n              \"attacked-already\") &\n            (this.enemyGameBoard.coordinates.get(\n              this.enemyGameBoard.fromArrayToCoords([\n                arrayCoords[0] - index,\n                arrayCoords[1],\n              ]),\n            ) !==\n              \"missed-attack\")\n          ) {\n            nextBestAttack.push([arrayCoords[0] - index, arrayCoords[1]]);\n            break;\n          }\n        }\n        for (let index = 1; index < 5; index++) {\n          if (\n            this.enemyGameBoard.coordinates.get(\n              this.enemyGameBoard.fromArrayToCoords([\n                arrayCoords[0] + index,\n                arrayCoords[1],\n              ]),\n            ) === \"missed-attack\"\n          ) {\n            break;\n          }\n          if (\n            (this.enemyGameBoard.coordinates.get(\n              this.enemyGameBoard.fromArrayToCoords([\n                arrayCoords[0] + index,\n                arrayCoords[1],\n              ]),\n            ) !==\n              \"attacked-already\") &\n            (this.enemyGameBoard.coordinates.get(\n              this.enemyGameBoard.fromArrayToCoords([\n                arrayCoords[0] + index,\n                arrayCoords[1],\n              ]),\n            ) !==\n              \"missed-attack\")\n          ) {\n            nextBestAttack.push([arrayCoords[0] + index, arrayCoords[1]]);\n            break;\n          }\n        }\n      }\n    } else {\n      nextBestAttack = [\n        [arrayCoords[0], arrayCoords[1] - 1],\n        [arrayCoords[0], arrayCoords[1] + 1],\n        [arrayCoords[0] - 1, arrayCoords[1]],\n        [arrayCoords[0] + 1, arrayCoords[1]],\n      ];\n    }\n    return nextBestAttack;\n  }\n  autoAttack() {\n    let arrayCoords = [];\n    do {\n      if (this.futuresAttacks.length > 0) {\n        arrayCoords = this.futuresAttacks.shift();\n      } else {\n        arrayCoords = this.getRandomAttackCoordinate();\n      }\n    } while (!this.enemyGameBoard.isPlaceAvailableForAttack(arrayCoords));\n    this.enemyGameBoard.receiveAttack(arrayCoords);\n    if (this.enemyGameBoard.thisCoordinateHasBeenAttack(arrayCoords)) {\n      this.futuresAttacks = this.checkBestAttack(arrayCoords);\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/player-obj.js?");

/***/ }),

/***/ "./src/ship-obj.js":
/*!*************************!*\
  !*** ./src/ship-obj.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.numHits = 0;\n  }\n  hit() {\n    if (this.isSunk() === false) {\n      this.numHits += 1;\n    }\n  }\n  isSunk() {\n    if (this.numHits < this.length) {\n      return false;\n    } else {\n      return true;\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/ship-obj.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;