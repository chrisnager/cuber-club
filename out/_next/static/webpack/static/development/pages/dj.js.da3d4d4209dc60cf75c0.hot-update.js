webpackHotUpdate("static/development/pages/dj.js",{

/***/ "./components/main/index.tsx":
/*!***********************************!*\
  !*** ./components/main/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_giiker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../scripts/giiker */ "./scripts/giiker.js");
/* harmony import */ var _constants_cube_sounds__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/cube-sounds */ "./constants/cube-sounds/index.ts");
/* harmony import */ var _constants_move_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/move-map */ "./constants/move-map/index.ts");




var _jsxFileName = "/Users/chrisnager/Dropbox/Chris/Projects/cube-api/components/main/index.tsx";





function Main() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      isEnabled = _useState2[0],
      setsIsEnabled = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('Connect cube'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      label = _useState4[0],
      setLabel = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
      sequence = _useState6[0],
      setSequence = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
      isHighlighted = _useState8[0],
      setIsHighlighted = _useState8[1];

  var playSound = function playSound(move) {
    _constants_cube_sounds__WEBPACK_IMPORTED_MODULE_6__["default"][_constants_move_map__WEBPACK_IMPORTED_MODULE_7__["default"][move]].sound.play();
  };

  var handleConnectClick =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var giiker;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setsIsEnabled(false);
              _context.next = 3;
              return _scripts_giiker__WEBPACK_IMPORTED_MODULE_5__["default"].connect();

            case 3:
              giiker = _context.sent;
              setLabel('Connected');
              giiker.on('move', function (move) {
                // TODO: Update URL to include sequence
                // window.location.href += sequence
                console.log({
                  sequence: sequence
                });
                setSequence("".concat(sequence, " ").concat(move.notation));
                setIsHighlighted(move.notation);
                playSound(move.notation);
                setTimeout(function () {
                  setIsHighlighted(null);
                }, 500);
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleConnectClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: handleConnectClick,
    disabled: !isEnabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, label), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Your moves"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Hold cube with white on top and green facing you."), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "sequence",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, sequence), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Sounds"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: "sounds",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_constants_move_map__WEBPACK_IMPORTED_MODULE_7__["default"]).map(function (moveName) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      key: moveName,
      className: "".concat(moveName.replace("'", '-'), " ").concat(moveName === isHighlighted ? 'highlight' : ''),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, moveName), ": ", _constants_move_map__WEBPACK_IMPORTED_MODULE_7__["default"][moveName]);
  })));
}

/***/ })

})
//# sourceMappingURL=dj.js.da3d4d4209dc60cf75c0.hot-update.js.map