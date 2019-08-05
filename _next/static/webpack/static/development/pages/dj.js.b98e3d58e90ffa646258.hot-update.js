webpackHotUpdate("static/development/pages/dj.js",{

/***/ "./components/player-head/index.tsx":
/*!******************************************!*\
  !*** ./components/player-head/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerHead; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/chrisnager/Dropbox/Chris/Projects/cube-api/components/player-head/index.tsx";

function PlayerHead(_ref) {
  var tracksLength = _ref.tracksLength,
      paused = _ref.paused,
      handleLeftClick = _ref.handleLeftClick,
      handlePlayPause = _ref.handlePlayPause,
      handleRightClick = _ref.handleRightClick,
      position = _ref.position,
      handleInputChange = _ref.handleInputChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    colSpan: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handlePlayPause,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, paused ? 'Play' : 'Pause')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    colSpan: tracksLength,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    disabled: !paused,
    onClick: handleLeftClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "\u21A4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    disabled: !paused,
    onClick: handleRightClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "\u21A6")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    colSpan: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Moves"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    colSpan: tracksLength,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    disabled: !paused,
    type: "range",
    max: tracksLength - 1,
    value: position,
    onChange: handleInputChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=dj.js.b98e3d58e90ffa646258.hot-update.js.map