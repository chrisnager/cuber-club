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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_cube_sounds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/cube-sounds */ "./constants/cube-sounds/index.ts");
/* harmony import */ var _constants_move_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/move-map */ "./constants/move-map/index.ts");
/* harmony import */ var _player_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../player-head */ "./components/player-head/index.tsx");
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../track */ "./components/track/index.tsx");



var _jsxFileName = "/Users/chrisnager/Dropbox/Chris/Projects/cube-api/components/player/index.tsx";






function Player(_ref) {
  var isHighlighted = _ref.isHighlighted;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      paused = _useState2[0],
      setPaused = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      position = _useState4[0],
      setPosition = _useState4[1];

  var tracksLength = 16;
  var bpm = 120;
  var msPerBeat = 1000 * 60 / bpm;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var interval = setInterval(function () {
      setPosition(function (position) {
        return position === tracksLength - 1 ? 0 : position + 1;
      });
    }, msPerBeat);
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

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "player",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_player_head__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    tracksLength: tracksLength,
    paused: paused,
    handleLeftClick: handleLeftClick,
    handlePlayPause: handlePlayPause,
    handleRightClick: handleRightClick,
    position: position,
    handleInputChange: handleInputChange
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_constants_move_map__WEBPACK_IMPORTED_MODULE_5__["default"]).map(function (cubeSound) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_track__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      key: Math.random(),
      move: cubeSound,
      label: _constants_move_map__WEBPACK_IMPORTED_MODULE_5__["default"][cubeSound],
      sound: _constants_cube_sounds__WEBPACK_IMPORTED_MODULE_4__["default"][_constants_move_map__WEBPACK_IMPORTED_MODULE_5__["default"][cubeSound]]
    }, {
      tracksLength: tracksLength,
      position: position,
      isHighlighted: isHighlighted
    }, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }));
  }))));
}

/***/ })

})
//# sourceMappingURL=dj.js.aaf129e3f40ab7e83e50.hot-update.js.map