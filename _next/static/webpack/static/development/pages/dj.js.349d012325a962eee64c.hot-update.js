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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/chrisnager/Dropbox/Chris/Projects/cube-api/components/track/index.tsx";


function Track(_ref) {
  var move = _ref.move,
      label = _ref.label,
      tracksLength = _ref.tracksLength,
      sound = _ref.sound,
      position = _ref.position,
      isHighlighted = _ref.isHighlighted;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  if (checked) {
    sound.sound.play();
  }

  var handleCheckboxChange = function handleCheckboxChange(index) {
    setChecked(!checked);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    className: move === isHighlighted ? 'highlight' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, move)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    className: move === isHighlighted ? 'highlight' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, label), Array(tracksLength).fill(1).map(function (_, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Selection, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      sound: sound
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  }));
}

/***/ })

})
//# sourceMappingURL=dj.js.349d012325a962eee64c.hot-update.js.map