/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/base/base.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/base/base.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 100px 1fr 100px;\n  grid-template-columns: 200px 1fr;\n  height: 100%\n}\n\n\n.header {\n  grid-column: 1 / -1;\n\n  color: #ffffff;\n  background-color: #7d0084;\n}\n\n.heading {\n  text-align: center;\n}\n\n.content {\n  flex: 1;\n  background-color: #f4e7ff;\n}\n\n\n.footer {\n  grid-column: 1 / -1;\n  background-color: #ffc0cb;\n}\n\n.copyright {\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/base/base.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,gCAAgC;EAChC;AACF;;;AAGA;EACE,mBAAmB;;EAEnB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,yBAAyB;AAC3B;;;AAGA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["html, body {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 100px 1fr 100px;\n  grid-template-columns: 200px 1fr;\n  height: 100%\n}\n\n\n.header {\n  grid-column: 1 / -1;\n\n  color: #ffffff;\n  background-color: #7d0084;\n}\n\n.heading {\n  text-align: center;\n}\n\n.content {\n  flex: 1;\n  background-color: #f4e7ff;\n}\n\n\n.footer {\n  grid-column: 1 / -1;\n  background-color: #ffc0cb;\n}\n\n.copyright {\n  text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/content.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/content.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".project-contents {\n  margin: 20px;\n  padding: 30px;\n  border-radius: 10px;\n  background-color: #e9d5ff;\n}\n\n\n.project-contents__project-header {\n  max-width: 1000px;\n}\n.project-header__title {\n  display: block;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  max-width: 700px;\n  font-size: 50px;\n  font-weight: 800;\n}\n.project-header__title:focus {\n  background-color: #0001;\n  border-bottom: 1px solid #000;\n  margin-bottom: -1px;\n}\n\n.project-header__description {\n  resize: none;\n  width: 600px;\n  height: 80px;\n  border: none;\n  background-color: transparent;\n  color: #444;\n  outline-offset: 5px;\n}\n.project-header__description:focus {\n  outline-width: 1px;\n  background-color: #0001;\n}\n.project-header__description::-webkit-scrollbar {\n  display: none;\n}\n\n.project-contents__todo-adder {\n  display: flex;\n  gap: 30px;\n  max-width: 1000px;\n}\n\n.project-contents__delete-project-btn {\n  display: block;\n  margin-left: auto;\n  padding: 5px 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #581c87;\n  font-size: 12px;\n  color: #fff;\n  cursor: pointer; \n  opacity: 0.2;\n}\n.project-contents__delete-project-btn:hover {\n  opacity: 1;\n}\n\n.todo-adder__new-project-input {\n  flex: 1;\n  border: none;\n  border-bottom: 1px solid #000;\n  background-color: #0001;\n  outline: none;\n  font-size: 24px;\n}\n.todo-adder__new-project-btn {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  background-color: #581c87;\n  font-size: 20px;\n  color: #fff;\n  cursor: pointer; \n}\n.todo-adder__new-project-btn:active {\n  background-color: #9333ea;\n}\n\n\n.project-contents__todo-list {\n  list-style: none;\n  padding: 0;\n}\n\n.todo-list__todo-item {\n  display: flex;\n  align-items: center;\n  max-width: 800px;\n  font-size: 20px;\n  gap: 40px;\n}\n.todo-list__todo-item + .todo-list__todo-item {\n  margin-top: 1em;\n}\n\n.todo-item__left-side {\n  flex: 1;\n  display: flex;\n  gap: 20px;\n}\n.todo-item__right-side {\n  display: flex;\n  gap: 20px;\n}\n.todo-item__title {\n  flex: 1;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: inherit;\n}\n.todo-item__title:focus {\n  background-color: #0001;\n  border-bottom: 1px solid #000;\n  margin-bottom: -1px;\n}\n\n.todo-item__check {\n  width: 20px;\n  height: 20px;\n  accent-color: #9333ea;\n}\n\n.todo-item__due-time {\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n.todo-item__due-time:focus {\n  background-color: #0001;\n  border-bottom: 1px solid #000;\n  margin-bottom: -1px;\n}\n\n.todo-item__delete-btn {\n  opacity: 0.2;\n  border: none;\n  border-radius: 50%;\n  background-color: #581c87;\n  color: #fff;\n  cursor: pointer;\n}\n.todo-list__todo-item:hover .todo-item__delete-btn {\n  opacity: 1;\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/content.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;;AAGA;EACE,iBAAiB;AACnB;AACA;EACE,cAAc;EACd,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,uBAAuB;EACvB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,6BAA6B;EAC7B,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,uBAAuB;AACzB;AACA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;EACf,WAAW;EACX,eAAe;EACf,YAAY;AACd;AACA;EACE,UAAU;AACZ;;AAEA;EACE,OAAO;EACP,YAAY;EACZ,6BAA6B;EAC7B,uBAAuB;EACvB,aAAa;EACb,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;EACf,WAAW;EACX,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;;;AAGA;EACE,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,SAAS;AACX;AACA;EACE,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,SAAS;AACX;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,OAAO;EACP,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,uBAAuB;EACvB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,aAAa;AACf;AACA;EACE,uBAAuB;EACvB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,eAAe;AACjB;AACA;EACE,UAAU;AACZ","sourcesContent":[".project-contents {\n  margin: 20px;\n  padding: 30px;\n  border-radius: 10px;\n  background-color: #e9d5ff;\n}\n\n\n.project-contents__project-header {\n  max-width: 1000px;\n}\n.project-header__title {\n  display: block;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  max-width: 700px;\n  font-size: 50px;\n  font-weight: 800;\n}\n.project-header__title:focus {\n  background-color: #0001;\n  border-bottom: 1px solid #000;\n  margin-bottom: -1px;\n}\n\n.project-header__description {\n  resize: none;\n  width: 600px;\n  height: 80px;\n  border: none;\n  background-color: transparent;\n  color: #444;\n  outline-offset: 5px;\n}\n.project-header__description:focus {\n  outline-width: 1px;\n  background-color: #0001;\n}\n.project-header__description::-webkit-scrollbar {\n  display: none;\n}\n\n.project-contents__todo-adder {\n  display: flex;\n  gap: 30px;\n  max-width: 1000px;\n}\n\n.project-contents__delete-project-btn {\n  display: block;\n  margin-left: auto;\n  padding: 5px 10px;\n  border: none;\n  border-radius: 5px;\n  background-color: #581c87;\n  font-size: 12px;\n  color: #fff;\n  cursor: pointer; \n  opacity: 0.2;\n}\n.project-contents__delete-project-btn:hover {\n  opacity: 1;\n}\n\n.todo-adder__new-project-input {\n  flex: 1;\n  border: none;\n  border-bottom: 1px solid #000;\n  background-color: #0001;\n  outline: none;\n  font-size: 24px;\n}\n.todo-adder__new-project-btn {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  background-color: #581c87;\n  font-size: 20px;\n  color: #fff;\n  cursor: pointer; \n}\n.todo-adder__new-project-btn:active {\n  background-color: #9333ea;\n}\n\n\n.project-contents__todo-list {\n  list-style: none;\n  padding: 0;\n}\n\n.todo-list__todo-item {\n  display: flex;\n  align-items: center;\n  max-width: 800px;\n  font-size: 20px;\n  gap: 40px;\n}\n.todo-list__todo-item + .todo-list__todo-item {\n  margin-top: 1em;\n}\n\n.todo-item__left-side {\n  flex: 1;\n  display: flex;\n  gap: 20px;\n}\n.todo-item__right-side {\n  display: flex;\n  gap: 20px;\n}\n.todo-item__title {\n  flex: 1;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: inherit;\n}\n.todo-item__title:focus {\n  background-color: #0001;\n  border-bottom: 1px solid #000;\n  margin-bottom: -1px;\n}\n\n.todo-item__check {\n  width: 20px;\n  height: 20px;\n  accent-color: #9333ea;\n}\n\n.todo-item__due-time {\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n.todo-item__due-time:focus {\n  background-color: #0001;\n  border-bottom: 1px solid #000;\n  margin-bottom: -1px;\n}\n\n.todo-item__delete-btn {\n  opacity: 0.2;\n  border: none;\n  border-radius: 50%;\n  background-color: #581c87;\n  color: #fff;\n  cursor: pointer;\n}\n.todo-list__todo-item:hover .todo-item__delete-btn {\n  opacity: 1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/sidebar.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/sidebar.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sidebar {\n  padding: 50px 0;\n  background-color: #8b5cf6;\n}\n\n\n.project-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n\n.new-project-btn {\n  border: none;\n  background-color: #fff4;\n  color: #fff;\n  cursor: pointer;\n}\n.new-project-btn:active {\n  background-color: #aaa4;\n}\n.new-project-btn::after {\n  content: \"+\";\n  font-size: 2em;\n}\n\n\n.new-project-btn,\n.project-list__project {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  height: 40px;\n  width: 100%;\n  padding: 10px 10px 10px 20px;\n  font-weight: 800;\n}\n\n\n.project-list__project{\n  color: #fff;\n  cursor: pointer;\n}\n.project-list__project:hover {\n  background-color: #7c3aed;\n}\n/* it was necessary to use two classes to override  \nbgc from `.project-list__project:hover` selector*/\n.project-list__project.project-list__project--selected {\n  border-top: 1px solid #000;\n  border-bottom: 1px solid #000;\n  background-color: #6d28d9;\n}\n\n\n.project-list__delete-btn {\n  visibility: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 1.5em;\n  width: 1.5em;\n  border: none;\n  border-radius: 50%;\n  background-color: #fff8;\n  color: red;\n  cursor: pointer;\n}\n.project-list__project:hover .project-list__delete-btn {\n  visibility: visible;\n}\n\n.project-list__delete-btn:active  {\n  background-color: #ddd8;\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/sidebar.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,yBAAyB;AAC3B;;;AAGA;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,yCAAyC;AAC3C;;;AAGA;EACE,YAAY;EACZ,uBAAuB;EACvB,WAAW;EACX,eAAe;AACjB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,cAAc;AAChB;;;AAGA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,4BAA4B;EAC5B,gBAAgB;AAClB;;;AAGA;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;AACA;iDACiD;AACjD;EACE,0BAA0B;EAC1B,6BAA6B;EAC7B,yBAAyB;AAC3B;;;AAGA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,UAAU;EACV,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":[".sidebar {\n  padding: 50px 0;\n  background-color: #8b5cf6;\n}\n\n\n.project-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n\n.new-project-btn {\n  border: none;\n  background-color: #fff4;\n  color: #fff;\n  cursor: pointer;\n}\n.new-project-btn:active {\n  background-color: #aaa4;\n}\n.new-project-btn::after {\n  content: \"+\";\n  font-size: 2em;\n}\n\n\n.new-project-btn,\n.project-list__project {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  height: 40px;\n  width: 100%;\n  padding: 10px 10px 10px 20px;\n  font-weight: 800;\n}\n\n\n.project-list__project{\n  color: #fff;\n  cursor: pointer;\n}\n.project-list__project:hover {\n  background-color: #7c3aed;\n}\n/* it was necessary to use two classes to override  \nbgc from `.project-list__project:hover` selector*/\n.project-list__project.project-list__project--selected {\n  border-top: 1px solid #000;\n  border-bottom: 1px solid #000;\n  background-color: #6d28d9;\n}\n\n\n.project-list__delete-btn {\n  visibility: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 1.5em;\n  width: 1.5em;\n  border: none;\n  border-radius: 50%;\n  background-color: #fff8;\n  color: red;\n  cursor: pointer;\n}\n.project-list__project:hover .project-list__delete-btn {\n  visibility: visible;\n}\n\n.project-list__delete-btn:active  {\n  background-color: #ddd8;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/base/base.css":
/*!***************************!*\
  !*** ./src/base/base.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./base.css */ "./node_modules/css-loader/dist/cjs.js!./src/base/base.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/stylesheets/content.css":
/*!*************************************!*\
  !*** ./src/stylesheets/content.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./content.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/content.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/stylesheets/sidebar.css":
/*!*************************************!*\
  !*** ./src/stylesheets/sidebar.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/sidebar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/base/base.js":
/*!**************************!*\
  !*** ./src/base/base.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContent": () => (/* binding */ createContent),
/* harmony export */   "createFooter": () => (/* binding */ createFooter),
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createSideBar": () => (/* binding */ createSideBar)
/* harmony export */ });
// Set of function that create base element of the website
// such as header, footer etc


function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const heading = document.createElement('h1');
  heading.textContent = 'To-do List';
  heading.classList.add('heading');
  header.appendChild(heading);
  
  return header;
}


function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement('p');
  copyright.textContent = 'Created by Thor';
  copyright.classList.add('copyright')

  footer.appendChild(copyright);
  
  return footer;
}

function createSideBar() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  sidebar.id = 'sidebar';
  
  return sidebar
}

function createContent() {
  const content = document.createElement('main');
  content.classList.add('content');
  content.id = 'content';
  
  return content;
}

/***/ }),

/***/ "./src/base/pageLoader.js":
/*!********************************!*\
  !*** ./src/base/pageLoader.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/base/base.js");
/* harmony import */ var _base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.css */ "./src/base/base.css");



const header = _base__WEBPACK_IMPORTED_MODULE_0__.createHeader();
const sidebar = _base__WEBPACK_IMPORTED_MODULE_0__.createSideBar();
const content = _base__WEBPACK_IMPORTED_MODULE_0__.createContent();
const footer = _base__WEBPACK_IMPORTED_MODULE_0__.createFooter();

document.body.append(header);
document.body.append(sidebar);
document.body.append(content);
document.body.append(footer);


/***/ }),

/***/ "./src/modules/DOMManipulator.js":
/*!***************************************!*\
  !*** ./src/modules/DOMManipulator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_pageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/pageLoader */ "./src/base/pageLoader.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/modules/pubsub.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todo */ "./src/modules/Todo.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility */ "./src/modules/utility.js");
/* harmony import */ var _stylesheets_sidebar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stylesheets/sidebar.css */ "./src/stylesheets/sidebar.css");
/* harmony import */ var _stylesheets_content_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stylesheets/content.css */ "./src/stylesheets/content.css");








// object that handle content section of DOM:
// displaying project,
const content = (() => {
  const content = document.getElementById('content');

  function _createDOMTodo(projectId, todo) {
    const title = document.createElement('input');
    title.classList.add('todo-item__title')
    title.value = todo.title;
  
    const check = document.createElement('input');
    check.classList.add('todo-item__check')
    check.type = 'checkbox';
    check.checked = todo.done;

    const dueTime = document.createElement('input');
    dueTime.classList.add('todo-item__due-time');
    dueTime.type = 'date';
    dueTime.valueAsDate = todo.dueTime;
  
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo-item__delete-btn')
    deleteBtn.textContent = 'x';
  
    deleteBtn.addEventListener('click', 
      () => _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('todo removed', projectId, todo.id));
  
    const DOMTodo = document.createElement('li');
    DOMTodo.classList.add('todo-list__todo-item');


    const todoItemLeftSide = document.createElement('div');
    todoItemLeftSide.classList.add('todo-item__left-side');
    todoItemLeftSide.append(check, title);

    const todoItemRightSide = document.createElement('div');
    todoItemRightSide.classList.add('todo-item__right-side');
    todoItemRightSide.append(dueTime, deleteBtn);

    DOMTodo.append(todoItemLeftSide, todoItemRightSide);
    DOMTodo.dataset.id = todo.id;


    title.addEventListener('change', () => {
      _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('todo-name changed', projectId, todo.id, title.value);
    })

    check.addEventListener('change', () => {
      _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('todo-check-status changed', projectId, todo.id, check.checked);
    })

    dueTime.addEventListener('change', () => {
      _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('todo-due-time changed', projectId, todo.id, dueTime.valueAsDate);
    })
  
    return DOMTodo
  }

  function _createDOMProject(project) {
    const DOMProject = document.createElement('div');
    DOMProject.classList.add('project-contents')
  
    const newTodoInput = document.createElement('input');
    newTodoInput.classList.add('todo-adder__new-project-input');
    newTodoInput.placeholder = "what are you going to do?"
    newTodoInput.addEventListener('keypress', (e) => {
      if (e.key == 'Enter') {
        newTodoAddBtn.click();
      }
    })
    const newTodoAddBtn = document.createElement('button')
    newTodoAddBtn.textContent = 'Add';
    newTodoAddBtn.classList.add('todo-adder__new-project-btn')
    newTodoAddBtn.addEventListener('click', () => {
      if (!newTodoInput.value)
        return
  
      const newTodoTitle = newTodoInput.value;
      const newTodo = new _Todo__WEBPACK_IMPORTED_MODULE_3__["default"](newTodoTitle);
      _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('todo added', project.id, newTodo);
  
      newTodoInput.value = "";
    })
  
  
    const title = document.createElement("input");
    title.value = project.title;
    title.classList.add('project-header__title');
    title.addEventListener('change', () => {
      _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('project-name changed', project.id, title.value)
    })
    
    const description = document.createElement('textarea');
    description.value = project.description;
    description.classList.add('project-header__description')
    description.addEventListener('change', () => {
      _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('project-description changed', project.id, description.value)
    })

    const todoList = (function() {
      const todoList = document.createElement('ul');
      todoList.classList.add('project-contents__todo-list');
  
      project.todos.forEach(todo => {
        const DOMTodo =  _createDOMTodo(project.id, todo);
        todoList.appendChild(DOMTodo);
        console.log('todo is added')
      });
  
      return todoList
    })();
  
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('project-contents__delete-project-btn')
    deleteBtn.textContent = 'Delete Project';
  
    deleteBtn.addEventListener('click', 
      () => _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('project removed', project.id));

    const todoAdder = document.createElement('div');
    todoAdder.append(newTodoInput, newTodoAddBtn);
    todoAdder.classList.add('project-contents__todo-adder')
    
    const header = document.createElement('div');
    header.append(title, description);
    header.classList.add('project-contents__project-header')

    DOMProject.append(
      header,
      todoAdder,
      todoList,
      deleteBtn,
      );
  
    DOMProject.dataset.id = project.id;
  
    return DOMProject
  }
  
  function viewProject(project) {
    const DOMProject = _createDOMProject(project);
  
    content.appendChild(DOMProject);
  }

  function removeProject(id) {
    const unwantedProject = content.querySelector(`[data-id="${id}"]`);
    if (unwantedProject)
      unwantedProject.remove();
  }
  
  function clear() {
    content.textContent = "";
  }
  
  _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('project added', (project) => {
    clear();
    viewProject(project);
  });
  
  _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('project passed', (project) => {
    clear();
    viewProject(project);
  });

  _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('todo added', (projectId, todo) => {
    const project = document.querySelector(`[data-id="${projectId}"] ul`);
    const wrappedTodo = _createDOMTodo(projectId, todo);
    project.prepend(wrappedTodo);
  });

  _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('todo removed', (projectId, todoId) => {
    document.querySelector(`[data-id="${todoId}"]`).remove();
  })

  _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('project removed', removeProject);
  
  return { viewProject, clear }
})();


// object that handle sidebar section of DOM:
// display project list items,
// select desired project by click,
const sidebar = (() => {
  const sidebar = document.getElementById('sidebar');

    function createNewProjectBtn() {
      console.log('new proj')
      const newProjectBtn = document.createElement('button');
      newProjectBtn.classList.add('new-project-btn')
      newProjectBtn.textContent = "New Project";
      newProjectBtn.addEventListener('click', () => {
        _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('project added', new _Project__WEBPACK_IMPORTED_MODULE_2__["default"]("TEST PROJECT",'You should finish this project by tomorrow' ))
      })
      return newProjectBtn
    }

    function createDOMProjectList(){
      const wrapperDOMProjectList = document.createElement('div')
      const DOMProjectList = document.createElement('ul');
      DOMProjectList.classList.add('project-list');
  
      
      const addProject = (project) => {
        const projectName  = document.createElement('span');
        projectName.textContent = project.title;
        
        const wrapper = (0,_utility__WEBPACK_IMPORTED_MODULE_4__.WrapInLi)(projectName, {
          'data-id': project.id,
        });
        wrapper.classList.add('project-list__project');
        
        const highlightProject = () => {
          DOMProjectList.querySelectorAll('li').forEach((wrapper) => {
            wrapper.classList.remove('project-list__project--selected')
          })
          wrapper.classList.add('project-list__project--selected')
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('project-list__delete-btn')
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', 
        () => _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('project removed', project.id));
        
        wrapper.append(deleteBtn)

        wrapper.addEventListener('click', (e) => {
          // prevent requesting project when clicking on delete button, 
          // which reside inside the wrapper
          if (e.target == deleteBtn)
            return
          
          highlightProject()
          

          _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].publish('project requested', project.id)
        })
        
        highlightProject()
        DOMProjectList.prepend(wrapper);
      }

      const removeProject = (id) => {
        const unwantedProject = DOMProjectList.querySelector(`[data-id="${id}"]`);
        if (unwantedProject)
          unwantedProject.remove();
      }
    
      _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('project added', addProject);
      _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('project removed', removeProject);
      _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('project-name changed', (projectId, newName) => {
        console.log('renamed')
        const targetProject = DOMProjectList
        .querySelector(`[data-id="${projectId}"] span`);
        targetProject.textContent = newName;
      })
      _pubsub__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('project restored', addProject);

      return DOMProjectList
    }

    function viewProjectManager() {
      const projectManager = document.createElement('div')
      projectManager.classList.add('project-manager');
      projectManager.append(
        createNewProjectBtn(),
        createDOMProjectList(),
        );
      sidebar.append(projectManager);
    }
    
    viewProjectManager();


})();


/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./src/modules/Todo.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ "./src/modules/utility.js");



class Project {
  constructor(title, description, id) {
    this.title = title;
    this.description = description;
    this.todos = [];
    Object.defineProperty(this, 'id', {
      value: id != undefined? id : (0,_utility__WEBPACK_IMPORTED_MODULE_1__.getNewId)(),
      writable: false,
    })
  }

  addTodo(todo) {
    if (todo instanceof _Todo__WEBPACK_IMPORTED_MODULE_0__["default"])
      this.todos.push(todo)
  }
  
  removeTodo(todoId) {
    const todoIndex = this.todos.findIndex((todo) => todo.id == todoId);
    if (todoIndex >= 0) {
      this.todos.splice(todoIndex, 1);
      return true;
    }
  }
}

/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/modules/utility.js");


class Todo  {
  constructor(title, priority = 0, done, id, dueTime) {
    this.title = title;
    this.done = done || false;
    this.dueTime = dueTime || new Date();
    this.priority = priority;
    Object.defineProperty(this, 'id', {
      value: id != undefined? id : (0,_utility__WEBPACK_IMPORTED_MODULE_0__.getNewId)(),
      writable: false,
      enumerable: true,
    })
  }
}

/***/ }),

/***/ "./src/modules/pubsub.js":
/*!*******************************!*\
  !*** ./src/modules/pubsub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pubsub = (function() {
  const events = {};

  function publish(event, ...args) {
    if (!events[event]) {
      return
    }
    events[event].forEach(handler => handler(...args))
  }


  function subscribe(event, handler) {
    if (!events[event]) {
      events[event] = [];
    }

    events[event].push(handler);
  }


  function unsubscribe(event, handler) {
    const indexOfUnsubscribed = events[event].indexOf(handler);

    if (indexOfUnsubscribed > 0) 
      events[event].splice(indexOfUnsubscribed, 1);
  }

  return {publish, subscribe, unsubscribe}
 })();

 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubsub);

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ "./src/modules/Todo.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub */ "./src/modules/pubsub.js");




const storageManager = (() => {
  function _storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
  }

  let _storageType = "sessionStorage";
  function _getStorage() {
    if (_storageAvailable(_storageType))
      return window[_storageType];
  }

  function _getProjectAsJSON(projectId) {
    return _getStorage()[projectId];
  }

  function store(project) {
    const storage = _getStorage();
    storage[project.id] = JSON.stringify(project);
  }

  function remove(projectId) {
    const storage = _getStorage();
    storage.removeItem(projectId);
  }

  function revive(projectId) {
    const projectJSON = _getProjectAsJSON(projectId);
    if (!projectJSON) {
      console.log(`project by id = ${projectId} cannot be accessed`);
      return
    }

    console.log('projectJSON', projectJSON)
    const projectData = JSON.parse(projectJSON);

    const project = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](
      projectData.title,
      projectData.description,
      projectId,
    );
    
    projectData.todos.forEach(todoData => {
      console.log("todo is restored")
      const todo = new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"](
        todoData.title,
        todoData.priority,
        todoData.done,
        todoData.id,
        new Date(todoData.dueTime),
        );
      project.addTodo(todo);
    })

    return project
  }

  return {store, remove, revive}
})();


_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('project added', (project) => {
  storageManager.store(project);
})


_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('project removed',(projectId) => {
  storageManager.remove(projectId);
})


_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('todo removed', (projectId, todoId) => {
  const targetProject = storageManager.revive(projectId);
  targetProject.removeTodo(todoId);
  storageManager.store(targetProject);
})


_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('todo added', (projectId, todo) => {
  console.log(todo)
  const targetProject = storageManager.revive(projectId);
  targetProject.addTodo(todo);
  storageManager.store(targetProject);
})


_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('project requested', (projectId) => {
  _pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('project passed', storageManager.revive(projectId))
})


_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('project-description changed', (projectId, newDescription) => {
  const targetProject = storageManager.revive(projectId);
  targetProject.description = newDescription;
  storageManager.store(targetProject);
})


_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('project-name changed', (projectId, newName) => {
  const targetProject = storageManager.revive(projectId);
  targetProject.title = newName;
  storageManager.store(targetProject);
})


_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('todo-name changed', (projectId, todoId, newName) => {
  const targetProject = storageManager.revive(projectId);
  const targetTodo = targetProject.todos.find(todo => todo.id == todoId);
  targetTodo.title = newName;
  storageManager.store(targetProject);
})


_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('todo-check-status changed', (projectId, todoId, isChecked) => {
  const targetProject = storageManager.revive(projectId);
  const targetTodo = targetProject.todos.find(todo => todo.id == todoId);
  targetTodo.done = isChecked;
  storageManager.store(targetProject);
})


_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('todo-due-time changed', (projectId, todoId, dueTime) => {
  const targetProject = storageManager.revive(projectId);
  const targetTodo = targetProject.todos.find(todo => todo.id == todoId);
  targetTodo.dueTime = dueTime;
  storageManager.store(targetProject);
})


window.addEventListener('DOMContentLoaded', () => {
  const projectsIDs = Object.keys(sessionStorage);
  
  projectsIDs.forEach(projectId => {
    const project = storageManager.revive(projectId);
    _pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].publish('project restored', project);
  })
})

/***/ }),

/***/ "./src/modules/utility.js":
/*!********************************!*\
  !*** ./src/modules/utility.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapInLi": () => (/* binding */ WrapInLi),
/* harmony export */   "getNewId": () => (/* binding */ getNewId)
/* harmony export */ });
const getNewId = () => {
  const id = Math.floor(Math.random()*Number.MAX_SAFE_INTEGER);
  console.log(id)
  return id;
};

// wrap DOM-element in <li><li>
const WrapInLi = (DOMelement, attributes) => {
  const wrapper = document.createElement('li');
  wrapper.appendChild(DOMelement);

  if (attributes) {
    for(const [key, value] of Object.entries(attributes)) {
      wrapper.setAttribute(key, value)
    }
  }
  
  return wrapper;
}

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DOMManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOMManipulator */ "./src/modules/DOMManipulator.js");
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/storage */ "./src/modules/storage.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7O0FBR0QseURBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0QseURBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0QseURBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQWM7QUFDbEIsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hLTTtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2xCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05pQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9iYXNlL2Jhc2UuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXNoZWV0cy9jb250ZW50LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzaGVldHMvc2lkZWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYmFzZS9iYXNlLmNzcz9jYjM4Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXNoZWV0cy9jb250ZW50LmNzcz8wZjViIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXNoZWV0cy9zaWRlYmFyLmNzcz9lNGU2Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Jhc2UvYmFzZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYmFzZS9wYWdlTG9hZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0RPTU1hbmlwdWxhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy91dGlsaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDEwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICBoZWlnaHQ6IDEwMCVcXG59XFxuXFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcblxcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2QwMDg0O1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlN2ZmO1xcbn1cXG5cXG5cXG4uZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMGNiO1xcbn1cXG5cXG4uY29weXJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Jhc2UvYmFzZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsZ0NBQWdDO0VBQ2hDO0FBQ0Y7OztBQUdBO0VBQ0UsbUJBQW1COztFQUVuQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTztFQUNQLHlCQUF5QjtBQUMzQjs7O0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgMTAwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gIGhlaWdodDogMTAwJVxcbn1cXG5cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuXFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZDAwODQ7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGU3ZmY7XFxufVxcblxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMwY2I7XFxufVxcblxcbi5jb3B5cmlnaHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJvamVjdC1jb250ZW50cyB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWQ1ZmY7XFxufVxcblxcblxcbi5wcm9qZWN0LWNvbnRlbnRzX19wcm9qZWN0LWhlYWRlciB7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG59XFxuLnByb2plY3QtaGVhZGVyX190aXRsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG4ucHJvamVjdC1oZWFkZXJfX3RpdGxlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAxO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXJfX2Rlc2NyaXB0aW9uIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICM0NDQ7XFxuICBvdXRsaW5lLW9mZnNldDogNXB4O1xcbn1cXG4ucHJvamVjdC1oZWFkZXJfX2Rlc2NyaXB0aW9uOmZvY3VzIHtcXG4gIG91dGxpbmUtd2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAxO1xcbn1cXG4ucHJvamVjdC1oZWFkZXJfX2Rlc2NyaXB0aW9uOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1jb250ZW50c19fdG9kby1hZGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRlbnRzX19kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4MWM4NztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyOyBcXG4gIG9wYWNpdHk6IDAuMjtcXG59XFxuLnByb2plY3QtY29udGVudHNfX2RlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udG9kby1hZGRlcl9fbmV3LXByb2plY3QtaW5wdXQge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDE7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4udG9kby1hZGRlcl9fbmV3LXByb2plY3QtYnRuIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODFjODc7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjsgXFxufVxcbi50b2RvLWFkZGVyX19uZXctcHJvamVjdC1idG46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MzMzZWE7XFxufVxcblxcblxcbi5wcm9qZWN0LWNvbnRlbnRzX190b2RvLWxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi50b2RvLWxpc3RfX3RvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBnYXA6IDQwcHg7XFxufVxcbi50b2RvLWxpc3RfX3RvZG8taXRlbSArIC50b2RvLWxpc3RfX3RvZG8taXRlbSB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcblxcbi50b2RvLWl0ZW1fX2xlZnQtc2lkZSB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuLnRvZG8taXRlbV9fcmlnaHQtc2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4udG9kby1pdGVtX190aXRsZSB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG4udG9kby1pdGVtX190aXRsZTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG59XFxuXFxuLnRvZG8taXRlbV9fY2hlY2sge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBhY2NlbnQtY29sb3I6ICM5MzMzZWE7XFxufVxcblxcbi50b2RvLWl0ZW1fX2R1ZS10aW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRvZG8taXRlbV9fZHVlLXRpbWU6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDE7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XFxufVxcblxcbi50b2RvLWl0ZW1fX2RlbGV0ZS1idG4ge1xcbiAgb3BhY2l0eTogMC4yO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4MWM4NztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG9kby1saXN0X190b2RvLWl0ZW06aG92ZXIgLnRvZG8taXRlbV9fZGVsZXRlLWJ0biB7XFxuICBvcGFjaXR5OiAxO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvY29udGVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7OztBQUdBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsT0FBTztFQUNQLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDtBQUNBO0VBQ0UsT0FBTztFQUNQLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcm9qZWN0LWNvbnRlbnRzIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZDVmZjtcXG59XFxuXFxuXFxuLnByb2plY3QtY29udGVudHNfX3Byb2plY3QtaGVhZGVyIHtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbn1cXG4ucHJvamVjdC1oZWFkZXJfX3RpdGxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcbi5wcm9qZWN0LWhlYWRlcl9fdGl0bGU6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDE7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcl9fZGVzY3JpcHRpb24ge1xcbiAgcmVzaXplOiBub25lO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzQ0NDtcXG4gIG91dGxpbmUtb2Zmc2V0OiA1cHg7XFxufVxcbi5wcm9qZWN0LWhlYWRlcl9fZGVzY3JpcHRpb246Zm9jdXMge1xcbiAgb3V0bGluZS13aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDE7XFxufVxcbi5wcm9qZWN0LWhlYWRlcl9fZGVzY3JpcHRpb246Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRlbnRzX190b2RvLWFkZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMwcHg7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGVudHNfX2RlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTgxYzg3O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7IFxcbiAgb3BhY2l0eTogMC4yO1xcbn1cXG4ucHJvamVjdC1jb250ZW50c19fZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50b2RvLWFkZGVyX19uZXctcHJvamVjdC1pbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbi50b2RvLWFkZGVyX19uZXctcHJvamVjdC1idG4ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4MWM4NztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyOyBcXG59XFxuLnRvZG8tYWRkZXJfX25ldy1wcm9qZWN0LWJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkzMzNlYTtcXG59XFxuXFxuXFxuLnByb2plY3QtY29udGVudHNfX3RvZG8tbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnRvZG8tbGlzdF9fdG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGdhcDogNDBweDtcXG59XFxuLnRvZG8tbGlzdF9fdG9kby1pdGVtICsgLnRvZG8tbGlzdF9fdG9kby1pdGVtIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuXFxuLnRvZG8taXRlbV9fbGVmdC1zaWRlIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4udG9kby1pdGVtX19yaWdodC1zaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcbi50b2RvLWl0ZW1fX3RpdGxlIHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcbi50b2RvLWl0ZW1fX3RpdGxlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAxO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbn1cXG5cXG4udG9kby1pdGVtX19jaGVjayB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGFjY2VudC1jb2xvcjogIzkzMzNlYTtcXG59XFxuXFxuLnRvZG8taXRlbV9fZHVlLXRpbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4udG9kby1pdGVtX19kdWUtdGltZTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG59XFxuXFxuLnRvZG8taXRlbV9fZGVsZXRlLWJ0biB7XFxuICBvcGFjaXR5OiAwLjI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTgxYzg3O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b2RvLWxpc3RfX3RvZG8taXRlbTpob3ZlciAudG9kby1pdGVtX19kZWxldGUtYnRuIHtcXG4gIG9wYWNpdHk6IDE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaWRlYmFyIHtcXG4gIHBhZGRpbmc6IDUwcHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjVjZjY7XFxufVxcblxcblxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLm5ldy1wcm9qZWN0LWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmV3LXByb2plY3QtYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhNDtcXG59XFxuLm5ldy1wcm9qZWN0LWJ0bjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIitcXFwiO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcblxcbi5uZXctcHJvamVjdC1idG4sXFxuLnByb2plY3QtbGlzdF9fcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDIwcHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG5cXG4ucHJvamVjdC1saXN0X19wcm9qZWN0e1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9qZWN0LWxpc3RfX3Byb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjM2FlZDtcXG59XFxuLyogaXQgd2FzIG5lY2Vzc2FyeSB0byB1c2UgdHdvIGNsYXNzZXMgdG8gb3ZlcnJpZGUgIFxcbmJnYyBmcm9tIGAucHJvamVjdC1saXN0X19wcm9qZWN0OmhvdmVyYCBzZWxlY3RvciovXFxuLnByb2plY3QtbGlzdF9fcHJvamVjdC5wcm9qZWN0LWxpc3RfX3Byb2plY3QtLXNlbGVjdGVkIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQyOGQ5O1xcbn1cXG5cXG5cXG4ucHJvamVjdC1saXN0X19kZWxldGUtYnRuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgd2lkdGg6IDEuNWVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjg7XFxuICBjb2xvcjogcmVkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJvamVjdC1saXN0X19wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LWxpc3RfX2RlbGV0ZS1idG4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnByb2plY3QtbGlzdF9fZGVsZXRlLWJ0bjphY3RpdmUgIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvc2lkZWJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOzs7QUFHQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHlDQUF5QztBQUMzQzs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOzs7QUFHQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtpREFDaUQ7QUFDakQ7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zaWRlYmFyIHtcXG4gIHBhZGRpbmc6IDUwcHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjVjZjY7XFxufVxcblxcblxcbi5wcm9qZWN0LWxpc3Qge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLm5ldy1wcm9qZWN0LWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmV3LXByb2plY3QtYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhNDtcXG59XFxuLm5ldy1wcm9qZWN0LWJ0bjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIitcXFwiO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcblxcbi5uZXctcHJvamVjdC1idG4sXFxuLnByb2plY3QtbGlzdF9fcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDIwcHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG5cXG4ucHJvamVjdC1saXN0X19wcm9qZWN0e1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wcm9qZWN0LWxpc3RfX3Byb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjM2FlZDtcXG59XFxuLyogaXQgd2FzIG5lY2Vzc2FyeSB0byB1c2UgdHdvIGNsYXNzZXMgdG8gb3ZlcnJpZGUgIFxcbmJnYyBmcm9tIGAucHJvamVjdC1saXN0X19wcm9qZWN0OmhvdmVyYCBzZWxlY3RvciovXFxuLnByb2plY3QtbGlzdF9fcHJvamVjdC5wcm9qZWN0LWxpc3RfX3Byb2plY3QtLXNlbGVjdGVkIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmQyOGQ5O1xcbn1cXG5cXG5cXG4ucHJvamVjdC1saXN0X19kZWxldGUtYnRuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgd2lkdGg6IDEuNWVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjg7XFxuICBjb2xvcjogcmVkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucHJvamVjdC1saXN0X19wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LWxpc3RfX2RlbGV0ZS1idG4ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnByb2plY3QtbGlzdF9fZGVsZXRlLWJ0bjphY3RpdmUgIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250ZW50LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGViYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFNldCBvZiBmdW5jdGlvbiB0aGF0IGNyZWF0ZSBiYXNlIGVsZW1lbnQgb2YgdGhlIHdlYnNpdGVcbi8vIHN1Y2ggYXMgaGVhZGVyLCBmb290ZXIgZXRjXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdUby1kbyBMaXN0JztcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgXG4gIHJldHVybiBoZWFkZXI7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5IFRob3InO1xuICBjb3B5cmlnaHQuY2xhc3NMaXN0LmFkZCgnY29weXJpZ2h0JylcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcbiAgXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaWRlQmFyKCkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICBzaWRlYmFyLmlkID0gJ3NpZGViYXInO1xuICBcbiAgcmV0dXJuIHNpZGViYXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICBjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuICBcbiAgcmV0dXJuIGNvbnRlbnQ7XG59IiwiaW1wb3J0ICogYXMgYmFzZSBmcm9tICcuL2Jhc2UnXG5pbXBvcnQgJy4vYmFzZS5jc3MnXG5cbmNvbnN0IGhlYWRlciA9IGJhc2UuY3JlYXRlSGVhZGVyKCk7XG5jb25zdCBzaWRlYmFyID0gYmFzZS5jcmVhdGVTaWRlQmFyKCk7XG5jb25zdCBjb250ZW50ID0gYmFzZS5jcmVhdGVDb250ZW50KCk7XG5jb25zdCBmb290ZXIgPSBiYXNlLmNyZWF0ZUZvb3RlcigpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoc2lkZWJhcik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChjb250ZW50KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGZvb3Rlcik7XG4iLCJpbXBvcnQgJy4uL2Jhc2UvcGFnZUxvYWRlcidcbmltcG9ydCBwdWJzdWIgZnJvbSAnLi9wdWJzdWInXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9Ub2RvXCI7XG5pbXBvcnQgeyBXcmFwSW5MaSB9IGZyb20gJy4vdXRpbGl0eSc7XG5pbXBvcnQgJy4uL3N0eWxlc2hlZXRzL3NpZGViYXIuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzaGVldHMvY29udGVudC5jc3MnO1xuXG4vLyBvYmplY3QgdGhhdCBoYW5kbGUgY29udGVudCBzZWN0aW9uIG9mIERPTTpcbi8vIGRpc3BsYXlpbmcgcHJvamVjdCxcbmNvbnN0IGNvbnRlbnQgPSAoKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBmdW5jdGlvbiBfY3JlYXRlRE9NVG9kbyhwcm9qZWN0SWQsIHRvZG8pIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtX190aXRsZScpXG4gICAgdGl0bGUudmFsdWUgPSB0b2RvLnRpdGxlO1xuICBcbiAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2suY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtX19jaGVjaycpXG4gICAgY2hlY2sudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2suY2hlY2tlZCA9IHRvZG8uZG9uZTtcblxuICAgIGNvbnN0IGR1ZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGR1ZVRpbWUuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtX19kdWUtdGltZScpO1xuICAgIGR1ZVRpbWUudHlwZSA9ICdkYXRlJztcbiAgICBkdWVUaW1lLnZhbHVlQXNEYXRlID0gdG9kby5kdWVUaW1lO1xuICBcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtX19kZWxldGUtYnRuJylcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAneCc7XG4gIFxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxuICAgICAgKCkgPT4gcHVic3ViLnB1Ymxpc2goJ3RvZG8gcmVtb3ZlZCcsIHByb2plY3RJZCwgdG9kby5pZCkpO1xuICBcbiAgICBjb25zdCBET01Ub2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBET01Ub2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdF9fdG9kby1pdGVtJyk7XG5cblxuICAgIGNvbnN0IHRvZG9JdGVtTGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvSXRlbUxlZnRTaWRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbV9fbGVmdC1zaWRlJyk7XG4gICAgdG9kb0l0ZW1MZWZ0U2lkZS5hcHBlbmQoY2hlY2ssIHRpdGxlKTtcblxuICAgIGNvbnN0IHRvZG9JdGVtUmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0l0ZW1SaWdodFNpZGUuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtX19yaWdodC1zaWRlJyk7XG4gICAgdG9kb0l0ZW1SaWdodFNpZGUuYXBwZW5kKGR1ZVRpbWUsIGRlbGV0ZUJ0bik7XG5cbiAgICBET01Ub2RvLmFwcGVuZCh0b2RvSXRlbUxlZnRTaWRlLCB0b2RvSXRlbVJpZ2h0U2lkZSk7XG4gICAgRE9NVG9kby5kYXRhc2V0LmlkID0gdG9kby5pZDtcblxuXG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgcHVic3ViLnB1Ymxpc2goJ3RvZG8tbmFtZSBjaGFuZ2VkJywgcHJvamVjdElkLCB0b2RvLmlkLCB0aXRsZS52YWx1ZSk7XG4gICAgfSlcblxuICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHB1YnN1Yi5wdWJsaXNoKCd0b2RvLWNoZWNrLXN0YXR1cyBjaGFuZ2VkJywgcHJvamVjdElkLCB0b2RvLmlkLCBjaGVjay5jaGVja2VkKTtcbiAgICB9KVxuXG4gICAgZHVlVGltZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBwdWJzdWIucHVibGlzaCgndG9kby1kdWUtdGltZSBjaGFuZ2VkJywgcHJvamVjdElkLCB0b2RvLmlkLCBkdWVUaW1lLnZhbHVlQXNEYXRlKTtcbiAgICB9KVxuICBcbiAgICByZXR1cm4gRE9NVG9kb1xuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZURPTVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IERPTVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBET01Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGVudHMnKVxuICBcbiAgICBjb25zdCBuZXdUb2RvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5ld1RvZG9JbnB1dC5jbGFzc0xpc3QuYWRkKCd0b2RvLWFkZGVyX19uZXctcHJvamVjdC1pbnB1dCcpO1xuICAgIG5ld1RvZG9JbnB1dC5wbGFjZWhvbGRlciA9IFwid2hhdCBhcmUgeW91IGdvaW5nIHRvIGRvP1wiXG4gICAgbmV3VG9kb0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PSAnRW50ZXInKSB7XG4gICAgICAgIG5ld1RvZG9BZGRCdG4uY2xpY2soKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IG5ld1RvZG9BZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG5ld1RvZG9BZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICBuZXdUb2RvQWRkQnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8tYWRkZXJfX25ldy1wcm9qZWN0LWJ0bicpXG4gICAgbmV3VG9kb0FkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICghbmV3VG9kb0lucHV0LnZhbHVlKVxuICAgICAgICByZXR1cm5cbiAgXG4gICAgICBjb25zdCBuZXdUb2RvVGl0bGUgPSBuZXdUb2RvSW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8obmV3VG9kb1RpdGxlKTtcbiAgICAgIHB1YnN1Yi5wdWJsaXNoKCd0b2RvIGFkZGVkJywgcHJvamVjdC5pZCwgbmV3VG9kbyk7XG4gIFxuICAgICAgbmV3VG9kb0lucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9KVxuICBcbiAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGUudmFsdWUgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGVyX190aXRsZScpO1xuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0LW5hbWUgY2hhbmdlZCcsIHByb2plY3QuaWQsIHRpdGxlLnZhbHVlKVxuICAgIH0pXG4gICAgXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWhlYWRlcl9fZGVzY3JpcHRpb24nKVxuICAgIGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0LWRlc2NyaXB0aW9uIGNoYW5nZWQnLCBwcm9qZWN0LmlkLCBkZXNjcmlwdGlvbi52YWx1ZSlcbiAgICB9KVxuXG4gICAgY29uc3QgdG9kb0xpc3QgPSAoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRlbnRzX190b2RvLWxpc3QnKTtcbiAgXG4gICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGNvbnN0IERPTVRvZG8gPSAgX2NyZWF0ZURPTVRvZG8ocHJvamVjdC5pZCwgdG9kbyk7XG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKERPTVRvZG8pO1xuICAgICAgICBjb25zb2xlLmxvZygndG9kbyBpcyBhZGRlZCcpXG4gICAgICB9KTtcbiAgXG4gICAgICByZXR1cm4gdG9kb0xpc3RcbiAgICB9KSgpO1xuICBcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250ZW50c19fZGVsZXRlLXByb2plY3QtYnRuJylcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuICBcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcbiAgICAgICgpID0+IHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0IHJlbW92ZWQnLCBwcm9qZWN0LmlkKSk7XG5cbiAgICBjb25zdCB0b2RvQWRkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvQWRkZXIuYXBwZW5kKG5ld1RvZG9JbnB1dCwgbmV3VG9kb0FkZEJ0bik7XG4gICAgdG9kb0FkZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGVudHNfX3RvZG8tYWRkZXInKVxuICAgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5hcHBlbmQodGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250ZW50c19fcHJvamVjdC1oZWFkZXInKVxuXG4gICAgRE9NUHJvamVjdC5hcHBlbmQoXG4gICAgICBoZWFkZXIsXG4gICAgICB0b2RvQWRkZXIsXG4gICAgICB0b2RvTGlzdCxcbiAgICAgIGRlbGV0ZUJ0bixcbiAgICAgICk7XG4gIFxuICAgIERPTVByb2plY3QuZGF0YXNldC5pZCA9IHByb2plY3QuaWQ7XG4gIFxuICAgIHJldHVybiBET01Qcm9qZWN0XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHZpZXdQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBET01Qcm9qZWN0ID0gX2NyZWF0ZURPTVByb2plY3QocHJvamVjdCk7XG4gIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRE9NUHJvamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGlkKSB7XG4gICAgY29uc3QgdW53YW50ZWRQcm9qZWN0ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7aWR9XCJdYCk7XG4gICAgaWYgKHVud2FudGVkUHJvamVjdClcbiAgICAgIHVud2FudGVkUHJvamVjdC5yZW1vdmUoKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH1cbiAgXG4gIHB1YnN1Yi5zdWJzY3JpYmUoJ3Byb2plY3QgYWRkZWQnLCAocHJvamVjdCkgPT4ge1xuICAgIGNsZWFyKCk7XG4gICAgdmlld1Byb2plY3QocHJvamVjdCk7XG4gIH0pO1xuICBcbiAgcHVic3ViLnN1YnNjcmliZSgncHJvamVjdCBwYXNzZWQnLCAocHJvamVjdCkgPT4ge1xuICAgIGNsZWFyKCk7XG4gICAgdmlld1Byb2plY3QocHJvamVjdCk7XG4gIH0pO1xuXG4gIHB1YnN1Yi5zdWJzY3JpYmUoJ3RvZG8gYWRkZWQnLCAocHJvamVjdElkLCB0b2RvKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtwcm9qZWN0SWR9XCJdIHVsYCk7XG4gICAgY29uc3Qgd3JhcHBlZFRvZG8gPSBfY3JlYXRlRE9NVG9kbyhwcm9qZWN0SWQsIHRvZG8pO1xuICAgIHByb2plY3QucHJlcGVuZCh3cmFwcGVkVG9kbyk7XG4gIH0pO1xuXG4gIHB1YnN1Yi5zdWJzY3JpYmUoJ3RvZG8gcmVtb3ZlZCcsIChwcm9qZWN0SWQsIHRvZG9JZCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHt0b2RvSWR9XCJdYCkucmVtb3ZlKCk7XG4gIH0pXG5cbiAgcHVic3ViLnN1YnNjcmliZSgncHJvamVjdCByZW1vdmVkJywgcmVtb3ZlUHJvamVjdCk7XG4gIFxuICByZXR1cm4geyB2aWV3UHJvamVjdCwgY2xlYXIgfVxufSkoKTtcblxuXG4vLyBvYmplY3QgdGhhdCBoYW5kbGUgc2lkZWJhciBzZWN0aW9uIG9mIERPTTpcbi8vIGRpc3BsYXkgcHJvamVjdCBsaXN0IGl0ZW1zLFxuLy8gc2VsZWN0IGRlc2lyZWQgcHJvamVjdCBieSBjbGljayxcbmNvbnN0IHNpZGViYXIgPSAoKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RCdG4oKSB7XG4gICAgICBjb25zb2xlLmxvZygnbmV3IHByb2onKVxuICAgICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgbmV3UHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1idG4nKVxuICAgICAgbmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcbiAgICAgIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0IGFkZGVkJywgbmV3IFByb2plY3QoXCJURVNUIFBST0pFQ1RcIiwnWW91IHNob3VsZCBmaW5pc2ggdGhpcyBwcm9qZWN0IGJ5IHRvbW9ycm93JyApKVxuICAgICAgfSlcbiAgICAgIHJldHVybiBuZXdQcm9qZWN0QnRuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRE9NUHJvamVjdExpc3QoKXtcbiAgICAgIGNvbnN0IHdyYXBwZXJET01Qcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBjb25zdCBET01Qcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICBET01Qcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QnKTtcbiAgXG4gICAgICBcbiAgICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBXcmFwSW5MaShwcm9qZWN0TmFtZSwge1xuICAgICAgICAgICdkYXRhLWlkJzogcHJvamVjdC5pZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0X19wcm9qZWN0Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBoaWdobGlnaHRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICAgIERPTVByb2plY3RMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0LWxpc3RfX3Byb2plY3QtLXNlbGVjdGVkJylcbiAgICAgICAgICB9KVxuICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0X19wcm9qZWN0LS1zZWxlY3RlZCcpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdF9fZGVsZXRlLWJ0bicpXG4gICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG4gICAgICAgICgpID0+IHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0IHJlbW92ZWQnLCBwcm9qZWN0LmlkKSk7XG4gICAgICAgIFxuICAgICAgICB3cmFwcGVyLmFwcGVuZChkZWxldGVCdG4pXG5cbiAgICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgLy8gcHJldmVudCByZXF1ZXN0aW5nIHByb2plY3Qgd2hlbiBjbGlja2luZyBvbiBkZWxldGUgYnV0dG9uLCBcbiAgICAgICAgICAvLyB3aGljaCByZXNpZGUgaW5zaWRlIHRoZSB3cmFwcGVyXG4gICAgICAgICAgaWYgKGUudGFyZ2V0ID09IGRlbGV0ZUJ0bilcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIFxuICAgICAgICAgIGhpZ2hsaWdodFByb2plY3QoKVxuICAgICAgICAgIFxuXG4gICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3Byb2plY3QgcmVxdWVzdGVkJywgcHJvamVjdC5pZClcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIGhpZ2hsaWdodFByb2plY3QoKVxuICAgICAgICBET01Qcm9qZWN0TGlzdC5wcmVwZW5kKHdyYXBwZXIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHVud2FudGVkUHJvamVjdCA9IERPTVByb2plY3RMaXN0LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtpZH1cIl1gKTtcbiAgICAgICAgaWYgKHVud2FudGVkUHJvamVjdClcbiAgICAgICAgICB1bndhbnRlZFByb2plY3QucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgXG4gICAgICBwdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0IGFkZGVkJywgYWRkUHJvamVjdCk7XG4gICAgICBwdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0IHJlbW92ZWQnLCByZW1vdmVQcm9qZWN0KTtcbiAgICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3Byb2plY3QtbmFtZSBjaGFuZ2VkJywgKHByb2plY3RJZCwgbmV3TmFtZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVuYW1lZCcpXG4gICAgICAgIGNvbnN0IHRhcmdldFByb2plY3QgPSBET01Qcm9qZWN0TGlzdFxuICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3Byb2plY3RJZH1cIl0gc3BhbmApO1xuICAgICAgICB0YXJnZXRQcm9qZWN0LnRleHRDb250ZW50ID0gbmV3TmFtZTtcbiAgICAgIH0pXG4gICAgICBwdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0IHJlc3RvcmVkJywgYWRkUHJvamVjdCk7XG5cbiAgICAgIHJldHVybiBET01Qcm9qZWN0TGlzdFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZpZXdQcm9qZWN0TWFuYWdlcigpIHtcbiAgICAgIGNvbnN0IHByb2plY3RNYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHByb2plY3RNYW5hZ2VyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbWFuYWdlcicpO1xuICAgICAgcHJvamVjdE1hbmFnZXIuYXBwZW5kKFxuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0QnRuKCksXG4gICAgICAgIGNyZWF0ZURPTVByb2plY3RMaXN0KCksXG4gICAgICAgICk7XG4gICAgICBzaWRlYmFyLmFwcGVuZChwcm9qZWN0TWFuYWdlcik7XG4gICAgfVxuICAgIFxuICAgIHZpZXdQcm9qZWN0TWFuYWdlcigpO1xuXG5cbn0pKCk7XG4iLCJpbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8nXG5pbXBvcnQge2dldE5ld0lkfSBmcm9tICcuL3V0aWxpdHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGlkKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnRvZG9zID0gW107XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdpZCcsIHtcbiAgICAgIHZhbHVlOiBpZCAhPSB1bmRlZmluZWQ/IGlkIDogZ2V0TmV3SWQoKSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICB9KVxuICB9XG5cbiAgYWRkVG9kbyh0b2RvKSB7XG4gICAgaWYgKHRvZG8gaW5zdGFuY2VvZiBUb2RvKVxuICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pXG4gIH1cbiAgXG4gIHJlbW92ZVRvZG8odG9kb0lkKSB7XG4gICAgY29uc3QgdG9kb0luZGV4ID0gdGhpcy50b2Rvcy5maW5kSW5kZXgoKHRvZG8pID0+IHRvZG8uaWQgPT0gdG9kb0lkKTtcbiAgICBpZiAodG9kb0luZGV4ID49IDApIHtcbiAgICAgIHRoaXMudG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQge2dldE5ld0lkfSBmcm9tICcuL3V0aWxpdHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8gIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIHByaW9yaXR5ID0gMCwgZG9uZSwgaWQsIGR1ZVRpbWUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kb25lID0gZG9uZSB8fCBmYWxzZTtcbiAgICB0aGlzLmR1ZVRpbWUgPSBkdWVUaW1lIHx8IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaWQnLCB7XG4gICAgICB2YWx1ZTogaWQgIT0gdW5kZWZpbmVkPyBpZCA6IGdldE5ld0lkKCksXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIH0pXG4gIH1cbn0iLCJjb25zdCBwdWJzdWIgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGV2ZW50cyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICBpZiAoIWV2ZW50c1tldmVudF0pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBldmVudHNbZXZlbnRdLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyKC4uLmFyZ3MpKVxuICB9XG5cblxuICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICBpZiAoIWV2ZW50c1tldmVudF0pIHtcbiAgICAgIGV2ZW50c1tldmVudF0gPSBbXTtcbiAgICB9XG5cbiAgICBldmVudHNbZXZlbnRdLnB1c2goaGFuZGxlcik7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgY29uc3QgaW5kZXhPZlVuc3Vic2NyaWJlZCA9IGV2ZW50c1tldmVudF0uaW5kZXhPZihoYW5kbGVyKTtcblxuICAgIGlmIChpbmRleE9mVW5zdWJzY3JpYmVkID4gMCkgXG4gICAgICBldmVudHNbZXZlbnRdLnNwbGljZShpbmRleE9mVW5zdWJzY3JpYmVkLCAxKTtcbiAgfVxuXG4gIHJldHVybiB7cHVibGlzaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZX1cbiB9KSgpO1xuXG4gZXhwb3J0IGRlZmF1bHQgcHVic3ViIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vVG9kb1wiO1xuaW1wb3J0IHB1YnN1YiBmcm9tICcuL3B1YnN1Yic7XG5cbmNvbnN0IHN0b3JhZ2VNYW5hZ2VyID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gX3N0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIHZhciBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgIHZhciB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxuICB9XG5cbiAgbGV0IF9zdG9yYWdlVHlwZSA9IFwic2Vzc2lvblN0b3JhZ2VcIjtcbiAgZnVuY3Rpb24gX2dldFN0b3JhZ2UoKSB7XG4gICAgaWYgKF9zdG9yYWdlQXZhaWxhYmxlKF9zdG9yYWdlVHlwZSkpXG4gICAgICByZXR1cm4gd2luZG93W19zdG9yYWdlVHlwZV07XG4gIH1cblxuICBmdW5jdGlvbiBfZ2V0UHJvamVjdEFzSlNPTihwcm9qZWN0SWQpIHtcbiAgICByZXR1cm4gX2dldFN0b3JhZ2UoKVtwcm9qZWN0SWRdO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RvcmUocHJvamVjdCkge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBfZ2V0U3RvcmFnZSgpO1xuICAgIHN0b3JhZ2VbcHJvamVjdC5pZF0gPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZShwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBzdG9yYWdlID0gX2dldFN0b3JhZ2UoKTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdElkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJldml2ZShwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBwcm9qZWN0SlNPTiA9IF9nZXRQcm9qZWN0QXNKU09OKHByb2plY3RJZCk7XG4gICAgaWYgKCFwcm9qZWN0SlNPTikge1xuICAgICAgY29uc29sZS5sb2coYHByb2plY3QgYnkgaWQgPSAke3Byb2plY3RJZH0gY2Fubm90IGJlIGFjY2Vzc2VkYCk7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygncHJvamVjdEpTT04nLCBwcm9qZWN0SlNPTilcbiAgICBjb25zdCBwcm9qZWN0RGF0YSA9IEpTT04ucGFyc2UocHJvamVjdEpTT04pO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KFxuICAgICAgcHJvamVjdERhdGEudGl0bGUsXG4gICAgICBwcm9qZWN0RGF0YS5kZXNjcmlwdGlvbixcbiAgICAgIHByb2plY3RJZCxcbiAgICApO1xuICAgIFxuICAgIHByb2plY3REYXRhLnRvZG9zLmZvckVhY2godG9kb0RhdGEgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJ0b2RvIGlzIHJlc3RvcmVkXCIpXG4gICAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8oXG4gICAgICAgIHRvZG9EYXRhLnRpdGxlLFxuICAgICAgICB0b2RvRGF0YS5wcmlvcml0eSxcbiAgICAgICAgdG9kb0RhdGEuZG9uZSxcbiAgICAgICAgdG9kb0RhdGEuaWQsXG4gICAgICAgIG5ldyBEYXRlKHRvZG9EYXRhLmR1ZVRpbWUpLFxuICAgICAgICApO1xuICAgICAgcHJvamVjdC5hZGRUb2RvKHRvZG8pO1xuICAgIH0pXG5cbiAgICByZXR1cm4gcHJvamVjdFxuICB9XG5cbiAgcmV0dXJuIHtzdG9yZSwgcmVtb3ZlLCByZXZpdmV9XG59KSgpO1xuXG5cbnB1YnN1Yi5zdWJzY3JpYmUoJ3Byb2plY3QgYWRkZWQnLCAocHJvamVjdCkgPT4ge1xuICBzdG9yYWdlTWFuYWdlci5zdG9yZShwcm9qZWN0KTtcbn0pXG5cblxucHVic3ViLnN1YnNjcmliZSgncHJvamVjdCByZW1vdmVkJywocHJvamVjdElkKSA9PiB7XG4gIHN0b3JhZ2VNYW5hZ2VyLnJlbW92ZShwcm9qZWN0SWQpO1xufSlcblxuXG5wdWJzdWIuc3Vic2NyaWJlKCd0b2RvIHJlbW92ZWQnLCAocHJvamVjdElkLCB0b2RvSWQpID0+IHtcbiAgY29uc3QgdGFyZ2V0UHJvamVjdCA9IHN0b3JhZ2VNYW5hZ2VyLnJldml2ZShwcm9qZWN0SWQpO1xuICB0YXJnZXRQcm9qZWN0LnJlbW92ZVRvZG8odG9kb0lkKTtcbiAgc3RvcmFnZU1hbmFnZXIuc3RvcmUodGFyZ2V0UHJvamVjdCk7XG59KVxuXG5cbnB1YnN1Yi5zdWJzY3JpYmUoJ3RvZG8gYWRkZWQnLCAocHJvamVjdElkLCB0b2RvKSA9PiB7XG4gIGNvbnNvbGUubG9nKHRvZG8pXG4gIGNvbnN0IHRhcmdldFByb2plY3QgPSBzdG9yYWdlTWFuYWdlci5yZXZpdmUocHJvamVjdElkKTtcbiAgdGFyZ2V0UHJvamVjdC5hZGRUb2RvKHRvZG8pO1xuICBzdG9yYWdlTWFuYWdlci5zdG9yZSh0YXJnZXRQcm9qZWN0KTtcbn0pXG5cblxucHVic3ViLnN1YnNjcmliZSgncHJvamVjdCByZXF1ZXN0ZWQnLCAocHJvamVjdElkKSA9PiB7XG4gIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0IHBhc3NlZCcsIHN0b3JhZ2VNYW5hZ2VyLnJldml2ZShwcm9qZWN0SWQpKVxufSlcblxuXG5wdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0LWRlc2NyaXB0aW9uIGNoYW5nZWQnLCAocHJvamVjdElkLCBuZXdEZXNjcmlwdGlvbikgPT4ge1xuICBjb25zdCB0YXJnZXRQcm9qZWN0ID0gc3RvcmFnZU1hbmFnZXIucmV2aXZlKHByb2plY3RJZCk7XG4gIHRhcmdldFByb2plY3QuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgc3RvcmFnZU1hbmFnZXIuc3RvcmUodGFyZ2V0UHJvamVjdCk7XG59KVxuXG5cbnB1YnN1Yi5zdWJzY3JpYmUoJ3Byb2plY3QtbmFtZSBjaGFuZ2VkJywgKHByb2plY3RJZCwgbmV3TmFtZSkgPT4ge1xuICBjb25zdCB0YXJnZXRQcm9qZWN0ID0gc3RvcmFnZU1hbmFnZXIucmV2aXZlKHByb2plY3RJZCk7XG4gIHRhcmdldFByb2plY3QudGl0bGUgPSBuZXdOYW1lO1xuICBzdG9yYWdlTWFuYWdlci5zdG9yZSh0YXJnZXRQcm9qZWN0KTtcbn0pXG5cblxucHVic3ViLnN1YnNjcmliZSgndG9kby1uYW1lIGNoYW5nZWQnLCAocHJvamVjdElkLCB0b2RvSWQsIG5ld05hbWUpID0+IHtcbiAgY29uc3QgdGFyZ2V0UHJvamVjdCA9IHN0b3JhZ2VNYW5hZ2VyLnJldml2ZShwcm9qZWN0SWQpO1xuICBjb25zdCB0YXJnZXRUb2RvID0gdGFyZ2V0UHJvamVjdC50b2Rvcy5maW5kKHRvZG8gPT4gdG9kby5pZCA9PSB0b2RvSWQpO1xuICB0YXJnZXRUb2RvLnRpdGxlID0gbmV3TmFtZTtcbiAgc3RvcmFnZU1hbmFnZXIuc3RvcmUodGFyZ2V0UHJvamVjdCk7XG59KVxuXG5cbnB1YnN1Yi5zdWJzY3JpYmUoJ3RvZG8tY2hlY2stc3RhdHVzIGNoYW5nZWQnLCAocHJvamVjdElkLCB0b2RvSWQsIGlzQ2hlY2tlZCkgPT4ge1xuICBjb25zdCB0YXJnZXRQcm9qZWN0ID0gc3RvcmFnZU1hbmFnZXIucmV2aXZlKHByb2plY3RJZCk7XG4gIGNvbnN0IHRhcmdldFRvZG8gPSB0YXJnZXRQcm9qZWN0LnRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09IHRvZG9JZCk7XG4gIHRhcmdldFRvZG8uZG9uZSA9IGlzQ2hlY2tlZDtcbiAgc3RvcmFnZU1hbmFnZXIuc3RvcmUodGFyZ2V0UHJvamVjdCk7XG59KVxuXG5cbnB1YnN1Yi5zdWJzY3JpYmUoJ3RvZG8tZHVlLXRpbWUgY2hhbmdlZCcsIChwcm9qZWN0SWQsIHRvZG9JZCwgZHVlVGltZSkgPT4ge1xuICBjb25zdCB0YXJnZXRQcm9qZWN0ID0gc3RvcmFnZU1hbmFnZXIucmV2aXZlKHByb2plY3RJZCk7XG4gIGNvbnN0IHRhcmdldFRvZG8gPSB0YXJnZXRQcm9qZWN0LnRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09IHRvZG9JZCk7XG4gIHRhcmdldFRvZG8uZHVlVGltZSA9IGR1ZVRpbWU7XG4gIHN0b3JhZ2VNYW5hZ2VyLnN0b3JlKHRhcmdldFByb2plY3QpO1xufSlcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHNJRHMgPSBPYmplY3Qua2V5cyhzZXNzaW9uU3RvcmFnZSk7XG4gIFxuICBwcm9qZWN0c0lEcy5mb3JFYWNoKHByb2plY3RJZCA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHN0b3JhZ2VNYW5hZ2VyLnJldml2ZShwcm9qZWN0SWQpO1xuICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0IHJlc3RvcmVkJywgcHJvamVjdCk7XG4gIH0pXG59KSIsImV4cG9ydCBjb25zdCBnZXROZXdJZCA9ICgpID0+IHtcbiAgY29uc3QgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpO1xuICBjb25zb2xlLmxvZyhpZClcbiAgcmV0dXJuIGlkO1xufTtcblxuLy8gd3JhcCBET00tZWxlbWVudCBpbiA8bGk+PGxpPlxuZXhwb3J0IGNvbnN0IFdyYXBJbkxpID0gKERPTWVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoRE9NZWxlbWVudCk7XG5cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIHdyYXBwZXI7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9tb2R1bGVzL0RPTU1hbmlwdWxhdG9yJ1xuaW1wb3J0ICcuL21vZHVsZXMvc3RvcmFnZSciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=