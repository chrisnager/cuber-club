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
  var bpm = 120;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var interval = setInterval(function () {
      setPosition(function (position) {
        return position === tracksLength - 1 ? 0 : position + 1;
      });
    }, bpm);
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
    className: "jsx-20785793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "20785793",
    __self: this
  }, "section.jsx-20785793{margin-top:2rem;}div.jsx-20785793{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpc25hZ2VyL0Ryb3Bib3gvQ2hyaXMvUHJvamVjdHMvY3ViZS1hcGkvY29tcG9uZW50cy9wbGF5ZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHMkIsQUFJSCxnQkFIZiwwREFJZ0MsbUhBQ2hDIiwiZmlsZSI6Ii9Vc2Vycy9jaHJpc25hZ2VyL0Ryb3Bib3gvQ2hyaXMvUHJvamVjdHMvY3ViZS1hcGkvY29tcG9uZW50cy9wbGF5ZXIvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGN1YmVTb3VuZHMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL2N1YmUtc291bmRzJ1xuaW1wb3J0IG1vdmVNYXAgZnJvbSAnLi4vLi4vY29uc3RhbnRzL21vdmUtbWFwJ1xuaW1wb3J0IFRyYWNrIGZyb20gJy4uL3RyYWNrJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIoeyBpc0hpZ2hsaWdodGVkIH0pIHtcbiAgY29uc3QgW3BhdXNlZCwgc2V0UGF1c2VkXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoMClcblxuICBjb25zdCB0cmFja3NMZW5ndGggPSAxNlxuICBjb25zdCBicG0gPSAxMjBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0UG9zaXRpb24ocG9zaXRpb24gPT4gKHBvc2l0aW9uID09PSB0cmFja3NMZW5ndGggLSAxID8gMCA6IHBvc2l0aW9uICsgMSkpXG4gICAgfSwgYnBtKVxuXG4gICAgaWYgKHBhdXNlZCkgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKVxuICAgIH1cbiAgfSwgW3NldFBvc2l0aW9uLCBwYXVzZWRdKVxuXG4gIGNvbnN0IGhhbmRsZUxlZnRDbGljayA9ICgpID0+IHtcbiAgICBzZXRQb3NpdGlvbihwb3NpdGlvbiAtIDEpXG4gIH1cblxuICBjb25zdCBoYW5kbGVSaWdodENsaWNrID0gKCkgPT4ge1xuICAgIHNldFBvc2l0aW9uKHBvc2l0aW9uICsgMSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVBsYXlQYXVzZSA9ICgpID0+IHtcbiAgICBzZXRQYXVzZWQoIXBhdXNlZClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xuICAgIHNldFBvc2l0aW9uKCt2YWx1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjb2xTcGFuPXsyfT5Nb3ZlczwvdGg+XG4gICAgICAgICAgICA8dGggY29sU3Bhbj17dHJhY2tzTGVuZ3RofT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXshcGF1c2VkfSBvbkNsaWNrPXtoYW5kbGVMZWZ0Q2xpY2t9PlxuICAgICAgICAgICAgICAgICAgeyc8J31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVBsYXlQYXVzZX0+e3BhdXNlZCA/ICdQbGF5JyA6ICdQYXVzZSd9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IXBhdXNlZH0gb25DbGljaz17aGFuZGxlUmlnaHRDbGlja30+XG4gICAgICAgICAgICAgICAgICB7Jz4nfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY29sU3Bhbj17Mn0+LS0tLS0tLS0tLS0tLTwvdGg+XG4gICAgICAgICAgICA8dGggY29sU3Bhbj17dHJhY2tzTGVuZ3RofT5cbiAgICAgICAgICAgICAgPGlucHV0IGRpc2FibGVkPXshcGF1c2VkfSB0eXBlPVwicmFuZ2VcIiBtYXg9e3RyYWNrc0xlbmd0aCAtIDF9IHZhbHVlPXtwb3NpdGlvbn0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge09iamVjdC5rZXlzKG1vdmVNYXApLm1hcChjdWJlU291bmQgPT4gKFxuICAgICAgICAgICAgPFRyYWNrXG4gICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cbiAgICAgICAgICAgICAgbW92ZT17Y3ViZVNvdW5kfVxuICAgICAgICAgICAgICBsYWJlbD17bW92ZU1hcFtjdWJlU291bmRdfVxuICAgICAgICAgICAgICBzb3VuZD17Y3ViZVNvdW5kc1ttb3ZlTWFwW2N1YmVTb3VuZF1dfVxuICAgICAgICAgICAgICB7Li4ueyB0cmFja3NMZW5ndGgsIHBvc2l0aW9uLCBpc0hpZ2hsaWdodGVkIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/chrisnager/Dropbox/Chris/Projects/cube-api/components/player/index.tsx */"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
    className: "jsx-20785793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("thead", {
    className: "jsx-20785793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    className: "jsx-20785793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    colSpan: 2,
    className: "jsx-20785793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Moves"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    colSpan: tracksLength,
    className: "jsx-20785793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-20785793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    disabled: !paused,
    onClick: handleLeftClick,
    className: "jsx-20785793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, '<'), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: handlePlayPause,
    className: "jsx-20785793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, paused ? 'Play' : 'Pause'), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    disabled: !paused,
    onClick: handleRightClick,
    className: "jsx-20785793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, '>')))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
    className: "jsx-20785793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    colSpan: 2,
    className: "jsx-20785793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "-------------"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    colSpan: tracksLength,
    className: "jsx-20785793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    disabled: !paused,
    type: "range",
    max: tracksLength - 1,
    value: position,
    onChange: handleInputChange,
    className: "jsx-20785793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody", {
    className: "jsx-20785793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
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
        lineNumber: 79
      },
      __self: this
    }));
  }))));
}

/***/ })

})
//# sourceMappingURL=dj.js.a22e155d0056f520fce0.hot-update.js.map