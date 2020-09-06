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
/* harmony import */ var _posts_posts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../posts/posts.js */ "./posts/posts.js");
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
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! framer */ "./node_modules/framer/build/framer.js", 7)).then(function (mod) {
    return mod.Frame;
  });
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! framer */ "./node_modules/framer/build/framer.js")];
    },
    modules: ['framer']
  }
});
var Stack = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! framer */ "./node_modules/framer/build/framer.js", 7)).then(function (mod) {
    return mod.Stack;
  });
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! framer */ "./node_modules/framer/build/framer.js")];
    },
    modules: ['framer']
  }
});
function ProjectsItems() {
  var _this = this;

  return __jsx(Stack, {
    size: 100,
    direction: "horizontal",
    alignment: "start",
    gap: "40",
    distribution: "start",
    x: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, _posts_posts_js__WEBPACK_IMPORTED_MODULE_3__["posts"].map(function (aPost) {
    return __jsx(Frame, {
      key: aPost.title,
      backgroundColor: "#180233",
      height: '50vh',
      width: '40vh',
      className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.project_item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.project_item_text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, aPost.title), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, aItem.type)), __jsx("img", {
      src: "/Min_projects.png",
      alt: "min",
      className: _projects_items_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img_min,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }));
  }));
}
/*
{items.map(aItem => (
        
        <Frame key={aItem.name} backgroundColor='#180233' height={'50vh'} width={'40vh'} className={styles.project_item}>
        
            
            <div className={styles.project_item_text}>
            <h3>{aItem.name}</h3>
            <h4>{aItem.type}</h4>
            </div>

            <img src='/Min_projects.png' alt='min' className={styles.img_min}></img>

        </Frame>
            
        ))}

*/

/***/ }),

/***/ "./posts/posts.js":
/*!************************!*\
  !*** ./posts/posts.js ***!
  \************************/
/*! exports provided: posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
var posts = [{
  title: 'Luli Gonzalez',
  type: 'Motion Graphics',
  thumbnail: 'luli_gonzalez_thumb.png',
  content: ['lg_photo1.png', 'lg_photo2.png', 'lg_photo3.png']
}, {
  title: 'Marti Benza',
  type: 'Motion Graphics',
  thumbnail: 'marti_benza_thumb.png',
  content: ['lg_photo1.png', 'lg_photo2.png', 'lg_photo3.png']
}, {
  title: 'Personal Portfolio',
  type: 'Web Develop',
  thumbnail: 'luli_gonzalez_thumb.png',
  content: ['lg_photo1.png', 'lg_photo2.png', 'lg_photo3.png']
}, {
  title: 'Paralax Background',
  type: 'Ux/Ui Desing',
  thumbnail: 'marti_benza_thumb.png',
  content: ['lg_photo1.png', 'lg_photo2.png', 'lg_photo3.png']
}, {
  title: 'Behanse Redisign',
  type: 'Ux/Ui Design',
  thumbnail: 'marti_benza_thumb.png',
  content: ['lg_photo1.png', 'lg_photo2.png', 'lg_photo3.png']
}];


/***/ })

})
//# sourceMappingURL=projects.js.6ecae4714a0c4f34530b.hot-update.js.map