webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/projects/projects_items/projects_items.js":
/*!**************************************************************!*\
  !*** ./components/projects/projects_items/projects_items.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectsItems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects_items.module.css */ "./components/projects/projects_items/projects_items.module.css");
/* harmony import */ var _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_projects_items_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/projects/projects_items/projects_items.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var items = [{
  name: 'Name project 1',
  type: "Type project 1"
}, {
  name: 'Name project 2',
  type: "Type project 2"
}, {
  name: 'Name project 3',
  type: "Type project 3"
}, {
  name: 'Name project 4',
  type: "Type project 4"
}, {
  name: 'Name project 5',
  type: "Type project 5"
}];
var Frame = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../carrusel/carrusel */ "./components/projects/carrusel/carrusel.js")).then(function (mod) {
    return mod.Frame;
  });
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../carrusel/carrusel */ "./components/projects/carrusel/carrusel.js")];
    },
    modules: ['../carrusel/carrusel']
  }
});
function ProjectsItems() {
  var _this = this;

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, items.map(function (aItem) {
    return __jsx(Frame, {
      key: aItem.name,
      backgroundColor: "#180233",
      height: '50vh',
      width: '40vh',
      className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.project_item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.project_item_text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 15
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 15
      }
    }, aItem.name), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }
    }, aItem.type)), __jsx("img", {
      src: "/Min_projects.png",
      alt: "min",
      className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img_min,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }));
  }));
} //<Rail></Rail>

/***/ })

})
//# sourceMappingURL=projects.js.88993e63cae5fad511b3.hot-update.js.map