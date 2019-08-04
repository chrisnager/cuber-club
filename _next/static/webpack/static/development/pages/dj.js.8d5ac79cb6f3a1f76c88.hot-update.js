webpackHotUpdate("static/development/pages/dj.js",{

/***/ "./components/player/index.tsx":
/*!*************************************!*\
  !*** ./components/player/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_cube_sounds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/cube-sounds */ "./constants/cube-sounds/index.ts");
/* harmony import */ var _constants_move_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/move-map */ "./constants/move-map/index.ts");
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../track */ "./components/track/index.tsx");



var _jsxFileName = "/Users/chrisnager/Dropbox/Chris/Projects/cube-api/components/player/index.tsx";






function Player(_ref) {
  var isHighlighted = _ref.isHighlighted;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      paused = _useState2[0],
      setPaused = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      position = _useState4[0],
      setPosition = _useState4[1];

  var tracksLength = 16;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var interval = setInterval(function () {
      setPosition(function (position) {
        return position === tracksLength - 1 ? 0 : position + 1;
      });
    }, 500);
    if (paused) clearInterval(interval);
    return function () {
      clearInterval(interval);
    };
  }, [setPosition, paused]);

  var handleLeftClick = function handleLeftClick() {
    setPosition(position - 1);
  };

  var handleRightClick = function handleRightClick() {
    setPosition(position + 1);
  };

  var handlePlayPause = function handlePlayPause() {
    setPaused(!paused);
  };

  var handleInputChange = function handleInputChange(_ref2) {
    var value = _ref2.target.value;
    setPosition(+value);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2949437920",
    __self: this
  }, "div.jsx-2949437920{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc25hZ2VyL0Ryb3Bib3gvQ2hyaXMvUHJvamVjdHMvY3ViZS1hcGkvY29tcG9uZW50cy9wbGF5ZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDa0IsQUFHd0IsMEVBQ2lCLG1IQUNoQyIsImZpbGUiOiIvVXNlcnMvY2hyaXNuYWdlci9Ecm9wYm94L0NocmlzL1Byb2plY3RzL2N1YmUtYXBpL2NvbXBvbmVudHMvcGxheWVyL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjdWJlU291bmRzIGZyb20gJy4uLy4uL2NvbnN0YW50cy9jdWJlLXNvdW5kcydcbmltcG9ydCBtb3ZlTWFwIGZyb20gJy4uLy4uL2NvbnN0YW50cy9tb3ZlLW1hcCdcbmltcG9ydCBUcmFjayBmcm9tICcuLi90cmFjaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKHsgaXNIaWdobGlnaHRlZCB9KSB7XG4gIGNvbnN0IFtwYXVzZWQsIHNldFBhdXNlZF0gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc3QgdHJhY2tzTGVuZ3RoID0gMTZcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0UG9zaXRpb24ocG9zaXRpb24gPT4gKHBvc2l0aW9uID09PSB0cmFja3NMZW5ndGggLSAxID8gMCA6IHBvc2l0aW9uICsgMSkpXG4gICAgfSwgNTAwKVxuXG4gICAgaWYgKHBhdXNlZCkgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKVxuICAgIH1cbiAgfSwgW3NldFBvc2l0aW9uLCBwYXVzZWRdKVxuXG4gIGNvbnN0IGhhbmRsZUxlZnRDbGljayA9ICgpID0+IHtcbiAgICBzZXRQb3NpdGlvbihwb3NpdGlvbiAtIDEpXG4gIH1cblxuICBjb25zdCBoYW5kbGVSaWdodENsaWNrID0gKCkgPT4ge1xuICAgIHNldFBvc2l0aW9uKHBvc2l0aW9uICsgMSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVBsYXlQYXVzZSA9ICgpID0+IHtcbiAgICBzZXRQYXVzZWQoIXBhdXNlZClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgIHNldFBvc2l0aW9uKCt2YWx1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPGhyIC8+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyFwYXVzZWR9IG9uQ2xpY2s9e2hhbmRsZUxlZnRDbGlja30+XG4gICAgICAgICAgTGVmdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQbGF5UGF1c2V9PntwYXVzZWQgPyAnUGxheScgOiAnUGF1c2UnfTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXshcGF1c2VkfSBvbkNsaWNrPXtoYW5kbGVSaWdodENsaWNrfT5cbiAgICAgICAgICBSaWdodFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY29sU3Bhbj17Mn0gLz5cbiAgICAgICAgICAgIDx0aCBjb2xTcGFuPXt0cmFja3NMZW5ndGh9PlxuICAgICAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9eyFwYXVzZWR9IHR5cGU9XCJyYW5nZVwiIG1heD17dHJhY2tzTGVuZ3RoIC0gMX0gdmFsdWU9e3Bvc2l0aW9ufSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIGNvbFNwYW49ezJ9IC8+XG4gICAgICAgICAgICA8dGggY29sU3Bhbj17dHJhY2tzTGVuZ3RofT5cbiAgICAgICAgICAgICAgPGlucHV0IGRpc2FibGVkPXshcGF1c2VkfSB0eXBlPVwicmFuZ2VcIiBtYXg9e3RyYWNrc0xlbmd0aCAtIDF9IHZhbHVlPXtwb3NpdGlvbn0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge09iamVjdC5rZXlzKG1vdmVNYXApLm1hcChjdWJlU291bmQgPT4gKFxuICAgICAgICAgICAgPFRyYWNrXG4gICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cbiAgICAgICAgICAgICAgbW92ZT17Y3ViZVNvdW5kfVxuICAgICAgICAgICAgICBsYWJlbD17bW92ZU1hcFtjdWJlU291bmRdfVxuICAgICAgICAgICAgICBzb3VuZD17Y3ViZVNvdW5kc1ttb3ZlTWFwW2N1YmVTb3VuZF1dfVxuICAgICAgICAgICAgICB7Li4ueyB0cmFja3NMZW5ndGgsIHBvc2l0aW9uLCBpc0hpZ2hsaWdodGVkIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/chrisnager/Dropbox/Chris/Projects/cube-api/components/player/index.tsx */"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    disabled: !paused,
    onClick: handleLeftClick,
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Left"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: handlePlayPause,
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, paused ? 'Play' : 'Pause'), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    disabled: !paused,
    onClick: handleRightClick,
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Right")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("thead", {
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    colSpan: 2,
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    colSpan: tracksLength,
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    disabled: !paused,
    type: "range",
    max: tracksLength - 1,
    value: position,
    onChange: handleInputChange,
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    colSpan: 2,
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    colSpan: tracksLength,
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    disabled: !paused,
    type: "range",
    max: tracksLength - 1,
    value: position,
    onChange: handleInputChange,
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody", {
    className: "jsx-2949437920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(_constants_move_map__WEBPACK_IMPORTED_MODULE_6__["default"]).map(function (cubeSound) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_track__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: Math.random(),
      move: cubeSound,
      label: _constants_move_map__WEBPACK_IMPORTED_MODULE_6__["default"][cubeSound],
      sound: _constants_cube_sounds__WEBPACK_IMPORTED_MODULE_5__["default"][_constants_move_map__WEBPACK_IMPORTED_MODULE_6__["default"][cubeSound]]
    }, {
      tracksLength: tracksLength,
      position: position,
      isHighlighted: isHighlighted
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }));
  }))));
}

/***/ })

})
//# sourceMappingURL=dj.js.8d5ac79cb6f3a1f76c88.hot-update.js.map