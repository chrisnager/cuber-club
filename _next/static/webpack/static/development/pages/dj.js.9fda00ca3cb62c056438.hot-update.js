webpackHotUpdate("static/development/pages/dj.js",{

/***/ "./components/track/index.tsx":
/*!************************************!*\
  !*** ./components/track/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Track; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selection */ "./components/selection/index.tsx");

var _jsxFileName = "/Users/chrisnager/Dropbox/Chris/Projects/cube-api/components/track/index.tsx";


function Track(_ref) {
  var move = _ref.move,
      label = _ref.label,
      tracksLength = _ref.tracksLength,
      sound = _ref.sound,
      isHighlighted = _ref.isHighlighted;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: move === isHighlighted ? 'highlight' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, move)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: move === isHighlighted ? 'highlight' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, label), Array(tracksLength).fill(1).map(function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_selection__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: move
    }, {
      sound: sound
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }));
  }));
}

/***/ })

})
//# sourceMappingURL=dj.js.9fda00ca3cb62c056438.hot-update.js.map