webpackHotUpdate(2,{

/***/ "./components/projects/projects_items/projects_items.js":
/*!**************************************************************!*\
  !*** ./components/projects/projects_items/projects_items.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectsItems; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _projects_items_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects_items.module.css */ "./components/projects/projects_items/projects_items.module.css");
/* harmony import */ var _projects_items_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_projects_items_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _posts_posts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../posts/posts.js */ "./posts/posts.js");
/* harmony import */ var _window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../window/window_dimensions.js */ "./components/window/window_dimensions.js");
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer */ "./node_modules/framer/build/framer.js");
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _projects_items_animation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects_items_animation.js */ "./components/projects/projects_items/projects_items_animation.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");

var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/projects/projects_items/projects_items.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







 // TBR: No necesito importar dinamicamente.
//const Frame = dynamic( () => import('framer').then((mod) => mod.Frame), { ssr: false } );
//const Stack = dynamic( () => import('framer').then((mod) => mod.Stack), { ssr: false } );
//const useMotionValue = dynamic( () => import('framer').then((mod) => mod.useMotionValue), { ssr: false } );

function ProjectsItems() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      ssrDone = _useState[0],
      setSsrDone = _useState[1];

  var position = Object(framer__WEBPACK_IMPORTED_MODULE_6__["useMotionValue"])(0);
  var i = 1;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setSsrDone(true);
  }, []); // width consts

  var widthLayer = Math.min(Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_5__["getWindowWidth"])(), 1920);
  var widthItem = 40 * 0.01 * Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_5__["getWindowHeight"])();
  var widthItemAndGap = widthItem + 40;
  var lengthItems = _posts_posts_js__WEBPACK_IMPORTED_MODULE_4__["posts"].length;
  var widthSliderTotal = (lengthItems - 1) * widthItemAndGap + widthItem;
  var widthSlider = (widthLayer - 400) * 0.92; // slider controller

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(100),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      xOffset = _React$useState2[0],
      setXOffset = _React$useState2[1];

  var itemsPosition = Object(framer__WEBPACK_IMPORTED_MODULE_6__["useTransform"])(position, [0, widthSlider], [100, 100 - (widthSliderTotal - (widthLayer - 400))]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_6__["Frame"], {
    name: "Mask",
    overflow: "hidden",
    height: "52vh",
    width: widthLayer - 200,
    x: -100,
    backgroundColor: "#200a48",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
    size: 100,
    direction: "horizontal",
    top: "2vh",
    alignment: "start",
    gap: "40",
    distribution: "start",
    x: xOffset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, _posts_posts_js__WEBPACK_IMPORTED_MODULE_4__["posts"].map(function (aPost) {
    return __jsx(framer__WEBPACK_IMPORTED_MODULE_6__["Frame"], {
      exit: "exit",
      initial: "initial",
      animate: "animate",
      whileHover: "whileHover",
      whileTap: "whileTap",
      variants: Object(_projects_items_animation_js__WEBPACK_IMPORTED_MODULE_7__["itemAnimation"])(i),
      key: i++,
      backgroundColor: "#180233",
      height: '50vh',
      width: '40vh',
      className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.project_item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.project_item_text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }, aPost.title), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, aPost.type)), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].img, {
      exit: "exit",
      initial: "initial",
      animate: "animate",
      variants: Object(_projects_items_animation_js__WEBPACK_IMPORTED_MODULE_7__["imgItemAnimation"])(i),
      src: "/project_items/default_thumb_projects.png",
      alt: "min",
      className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img_min,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }));
  }))), __jsx(framer__WEBPACK_IMPORTED_MODULE_6__["Frame"], {
    name: "Mask Izq",
    width: 120,
    backgroundColor: "#200a48",
    height: "62vh",
    x: -180,
    y: "-2.5vh",
    style: {
      filter: 'blur(15px)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }), __jsx(framer__WEBPACK_IMPORTED_MODULE_6__["Frame"], {
    name: "Mask Der",
    width: 120,
    backgroundColor: "#200a48",
    height: "62vh",
    x: widthLayer - 340,
    y: "-2.5vh",
    style: {
      filter: 'blur(15px)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }), __jsx(framer__WEBPACK_IMPORTED_MODULE_6__["Frame"], {
    name: 'Rail',
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: Object(_projects_items_animation_js__WEBPACK_IMPORTED_MODULE_7__["sliderAnimation"])(),
    width: widthLayer - 400,
    height: '1.6vh',
    radius: 0,
    position: "relative",
    left: '0px',
    background: "rgba(255,255,255,.1)",
    top: '55vh',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_6__["Frame"], {
    name: 'Knob',
    width: '8%',
    height: '1.6vh',
    radius: 0,
    position: "relative",
    left: '0%',
    background: "rgba(255,255,255,.1)",
    drag: "x",
    dragConstraints: {
      left: 0,
      right: (widthLayer - 400) * 0.92
    },
    dragElastic: 0,
    dragMomentum: false,
    x: position,
    onDrag: function onDrag() {
      setXOffset(itemsPosition.get());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  })));
}

/***/ })

})
//# sourceMappingURL=2.09df4b00e497cf25b6cb.hot-update.js.map