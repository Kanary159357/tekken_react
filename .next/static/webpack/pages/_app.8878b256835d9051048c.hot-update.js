self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/DBContext.tsx":
/*!*******************************!*\
  !*** ./context/DBContext.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateProvider": function() { return /* binding */ StateProvider; },
/* harmony export */   "useDBData": function() { return /* binding */ useDBData; },
/* harmony export */   "useDBDispatch": function() { return /* binding */ useDBDispatch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_kkkk_Documents_GitHub_Made_tekken_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\context\\DBContext.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_kkkk_Documents_GitHub_Made_tekken_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


const InitialState = {
  charProps: {
    standing: [],
    up: [],
    combo: [],
    WallCombo: [],
    Throw: [],
    Extrahit: [],
    Info: [],
    Pattern: [],
    MainMove: []
  },
  loading: false,
  error: null
};
const DataContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
const DataDispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);

function reducer(state, action) {
  switch (action.type) {
    case 'LOADED':
      return _objectSpread(_objectSpread({}, state), {}, {
        charProps: action.payload,
        loading: false
      });

    case 'LOADING':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case 'ERROR':
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error
      });

    default:
      return state;
  }
}

function StateProvider({
  children
}) {
  _s();

  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, InitialState);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {
    value: state,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataDispatchContext.Provider, {
      value: dispatch,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 9
  }, this);
}

_s(StateProvider, "t2YXRAGqQS0gK432FYC+SFA/j9s=");

_c = StateProvider;
function useDBData() {
  _s2();

  const data = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(DataContext);
  if (!data) throw new Error('Cannot find Provider');
  return data;
}

_s2(useDBData, "QDbvtl2XjZhCafbmMBOV/hNJip4=");

function useDBDispatch() {
  _s3();

  const dispatch = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(DataDispatchContext);
  if (!dispatch) throw new Error('Cannot find Provider');
  return dispatch;
}

_s3(useDBDispatch, "kCU+r/6VuXUfg74P0SIOBSNFld8=");

var _c;

$RefreshReg$(_c, "StateProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_PageComponents_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageComponents/Sidebar */ "./components/PageComponents/Sidebar.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/GlobalStyle */ "./styles/GlobalStyle.ts");
/* harmony import */ var _styles_components_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/Icon */ "./styles/components/Icon.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _char_name___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./char/[name] */ "./pages/char/[name].tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\pages\\_app.tsx",
    _s = $RefreshSig$();










const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div`
    background: #e8e8e8;
`;
_c = Wrapper;
const PageContent = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div`
    position: absolute;
    height: 100%;
    width: calc(100% - 240px);
    left: 240px;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_5__.Device.desktop} {
        left: 0;
        width: 100%;
    }
`;
_c2 = PageContent;
const MenuButtonBlock = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_4__.default)`
    position: fixed;
    top: 15px;
    left: 20px;
    z-index: 999;
    font-size: 20px;
    color: #fff;
    visibility: hidden;
    cursor: pointer;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_5__.Device.desktop} {
        visibility: visible;
    }
`;
_c3 = MenuButtonBlock;
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div`
    width: 100%;
    position: fixed;
    height: 100%;
    z-index: 996;
    background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_5__.Palette.overlay};
    visibility: ${props => props.toggle ? 'visible' : 'hidden'};
`;
_c4 = Overlay;

function App() {
  _s();

  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const handleToggle = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setToggle(false);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "6N23RP"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__.GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuButtonBlock, {
        icon: toggle ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faTimes : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faBars,
        onClick: () => setToggle(!toggle)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageComponents_Sidebar__WEBPACK_IMPORTED_MODULE_1__.default, {
        toggle: toggle,
        handleToggle: handleToggle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Overlay, {
        toggle: toggle,
        onClick: handleToggle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageContent, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_char_name___WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(App, "nWdcqXUs2s1GceffrVKluZ6OxHk=");

_c5 = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "PageContent");
$RefreshReg$(_c3, "MenuButtonBlock");
$RefreshReg$(_c4, "Overlay");
$RefreshReg$(_c5, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/char/[name].tsx":
/*!*******************************!*\
  !*** ./pages/char/[name].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_DBContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/DBContext */ "./context/DBContext.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\pages\\char\\[name].tsx",
    _s = $RefreshSig$();






const CharWrap = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_4__.Device.desktop} {
        flex-direction: column;
    }
`;
_c = CharWrap;
const DescriptionButton = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div`
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 30px;
    cursor: pointer;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_4__.Device.desktop} {
        top: 5px;
        right: 20px;
    }
`;

const Char = () => {
  _s();

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    charName
  } = router.query;
  console.log(charName);
  const {
    charProps,
    loading
  } = (0,_context_DBContext__WEBPACK_IMPORTED_MODULE_3__.useDBData)();
  const tempDispatch = (0,_context_DBContext__WEBPACK_IMPORTED_MODULE_3__.useDBDispatch)();
  const {
    0: description,
    1: setDescription
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: tableIndex,
    1: setTableIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  /*useEffect(() => {
      LoadData(charName as string, tempDispatch);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charName]);
    const handleDescription = useCallback(() => {
      setDescription(false);
  }, []);
    const handleIndex = useCallback((index: number) => {
      setTableIndex(index);
  }, []);*/

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CharWrap, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, undefined);
};

_s(Char, "5A/gZK1yQvTKOCr/BAq4spxj9o8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, _context_DBContext__WEBPACK_IMPORTED_MODULE_3__.useDBData, _context_DBContext__WEBPACK_IMPORTED_MODULE_3__.useDBDispatch];
});

_c2 = Char;
/* harmony default export */ __webpack_exports__["default"] = (Char);

var _c, _c2;

$RefreshReg$(_c, "CharWrap");
$RefreshReg$(_c2, "Char");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9EQkNvbnRleHQudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhci9bbmFtZV0udHN4Il0sIm5hbWVzIjpbIkluaXRpYWxTdGF0ZSIsImNoYXJQcm9wcyIsInN0YW5kaW5nIiwidXAiLCJjb21ibyIsIldhbGxDb21ibyIsIlRocm93IiwiRXh0cmFoaXQiLCJJbmZvIiwiUGF0dGVybiIsIk1haW5Nb3ZlIiwibG9hZGluZyIsImVycm9yIiwiRGF0YUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRGF0YURpc3BhdGNoQ29udGV4dCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiU3RhdGVQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwidXNlREJEYXRhIiwiZGF0YSIsInVzZUNvbnRleHQiLCJFcnJvciIsInVzZURCRGlzcGF0Y2giLCJXcmFwcGVyIiwic3R5bGVkIiwiUGFnZUNvbnRlbnQiLCJEZXZpY2UiLCJNZW51QnV0dG9uQmxvY2siLCJDdXN0b21JY29uIiwiT3ZlcmxheSIsIlBhbGV0dGUiLCJwcm9wcyIsInRvZ2dsZSIsIkFwcCIsInNldFRvZ2dsZSIsInVzZVN0YXRlIiwiaGFuZGxlVG9nZ2xlIiwidXNlQ2FsbGJhY2siLCJmYVRpbWVzIiwiZmFCYXJzIiwiQ2hhcldyYXAiLCJEZXNjcmlwdGlvbkJ1dHRvbiIsIkNoYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjaGFyTmFtZSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInRlbXBEaXNwYXRjaCIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJ0YWJsZUluZGV4Iiwic2V0VGFibGVJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQSxNQUFNQSxZ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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODg3OGIyNTY4MzVkOTA1MTA0OGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCBEaXNwYXRjaCwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhclByb3BzIH0gZnJvbSAnLi4vdHlwZXMvQ2hhclByb3BzJztcclxuXHJcbmludGVyZmFjZSBTdGF0ZVByb3BzIHtcclxuICAgIGNoYXJQcm9wczogQ2hhclByb3BzO1xyXG4gICAgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIGVycm9yOiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IEluaXRpYWxTdGF0ZTogU3RhdGVQcm9wcyA9IHtcclxuICAgIGNoYXJQcm9wczoge1xyXG4gICAgICAgIHN0YW5kaW5nOiBbXSxcclxuICAgICAgICB1cDogW10sXHJcbiAgICAgICAgY29tYm86IFtdLFxyXG4gICAgICAgIFdhbGxDb21ibzogW10sXHJcbiAgICAgICAgVGhyb3c6IFtdLFxyXG4gICAgICAgIEV4dHJhaGl0OiBbXSxcclxuICAgICAgICBJbmZvOiBbXSxcclxuICAgICAgICBQYXR0ZXJuOiBbXSxcclxuICAgICAgICBNYWluTW92ZTogW10sXHJcbiAgICB9LFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbnR5cGUgQWN0aW9uID1cclxuICAgIHwgeyB0eXBlOiAnTE9BREVEJzsgcGF5bG9hZDogQ2hhclByb3BzIH1cclxuICAgIHwgeyB0eXBlOiAnTE9BRElORycgfVxyXG4gICAgfCB7IHR5cGU6ICdBREQnIH1cclxuICAgIHwgeyB0eXBlOiAnRVJST1InOyBlcnJvcjogYW55IH07XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0ZURpc3BhdGNoID0gRGlzcGF0Y2g8QWN0aW9uPjtcclxuXHJcbmNvbnN0IERhdGFDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxTdGF0ZVByb3BzIHwgbnVsbD4obnVsbCk7XHJcbmNvbnN0IERhdGFEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFN0YXRlRGlzcGF0Y2ggfCBudWxsPihudWxsKTtcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU6IFN0YXRlUHJvcHMsIGFjdGlvbjogQWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnTE9BREVEJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhclByb3BzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0xPQURJTkcnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0VSUk9SJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdGF0ZVByb3ZpZGVyKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBJbml0aWFsU3RhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgICAgICAgPERhdGFEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9EYXRhRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VEQkRhdGEoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgICBpZiAoIWRhdGEpIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgUHJvdmlkZXInKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VEQkRpc3BhdGNoKCkge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KERhdGFEaXNwYXRjaENvbnRleHQpO1xyXG4gICAgaWYgKCFkaXNwYXRjaCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBQcm92aWRlcicpO1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL1NpZGViYXInO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBmYUJhcnMsXHJcbiAgICBmYVRpbWVzLFxyXG4gICAgSWNvbkRlZmluaXRpb24sXHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgR2xvYmFsU3R5bGUgfSBmcm9tICcuLi9zdHlsZXMvR2xvYmFsU3R5bGUnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbCc7XHJcbmltcG9ydCBDdXN0b21JY29uIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0ljb24nO1xyXG5pbXBvcnQgeyBEZXZpY2UsIFBhbGV0dGUgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgQ2hhciBmcm9tICcuL2NoYXIvW25hbWVdJztcclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xyXG5gO1xyXG5cclxuY29uc3QgUGFnZUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0MHB4KTtcclxuICAgIGxlZnQ6IDI0MHB4O1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIE1lbnVQcm9wcyB7XHJcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xyXG4gICAgaWNvbjogSWNvbkRlZmluaXRpb247XHJcbn1cclxuXHJcbmNvbnN0IE1lbnVCdXR0b25CbG9jayA9IHN0eWxlZChDdXN0b21JY29uKTxNZW51UHJvcHM+YFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXY8eyB0b2dnbGU6IGJvb2xlYW4gfT5gXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5NjtcclxuICAgIGJhY2tncm91bmQ6ICR7UGFsZXR0ZS5vdmVybGF5fTtcclxuICAgIHZpc2liaWxpdHk6ICR7KHByb3BzKSA9PiAocHJvcHMudG9nZ2xlID8gJ3Zpc2libGUnIDogJ2hpZGRlbicpfTtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDx0aXRsZT42TjIzUlA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8TWVudUJ1dHRvbkJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17dG9nZ2xlID8gZmFUaW1lcyA6IGZhQmFyc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoIXRvZ2dsZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXIgdG9nZ2xlPXt0b2dnbGV9IGhhbmRsZVRvZ2dsZT17aGFuZGxlVG9nZ2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgPE92ZXJsYXkgdG9nZ2xlPXt0b2dnbGV9IG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8UGFnZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoYXIgLz5cclxuICAgICAgICAgICAgICAgIDwvUGFnZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvV3JhcHBlcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5mbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL0luZm8nO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL01haW4nO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VEQkRhdGEsIHVzZURCRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9jb250ZXh0L0RCQ29udGV4dCc7XHJcbmltcG9ydCB7IExvYWREYXRhIH0gZnJvbSAnLi4vLi4vY29udGV4dC9EQkNvbnRleHRGdW5jJztcclxuaW1wb3J0IHsgRGV2aWNlLCBQYWxldHRlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IHsgTG9hZGluZ1dpdGhvdXRPdmVybGF5IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9Mb2FkaW5nJztcclxuaW1wb3J0IENvbW1hbmREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL0NvbW1hbmREZXNjcmlwdGlvbic7XHJcbmltcG9ydCBDdXN0b21JY29uIGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL0ljb24nO1xyXG5pbXBvcnQgeyBmYVF1ZXN0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmNvbnN0IENoYXJXcmFwID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UuZGVza3RvcH0ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBEZXNjcmlwdGlvbkJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBDaGFyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGNoYXJOYW1lIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhjaGFyTmFtZSk7XHJcbiAgICBjb25zdCB7IGNoYXJQcm9wcywgbG9hZGluZyB9ID0gdXNlREJEYXRhKCk7XHJcbiAgICBjb25zdCB0ZW1wRGlzcGF0Y2ggPSB1c2VEQkRpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt0YWJsZUluZGV4LCBzZXRUYWJsZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgLyp1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIExvYWREYXRhKGNoYXJOYW1lIGFzIHN0cmluZywgdGVtcERpc3BhdGNoKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgICB9LCBbY2hhck5hbWVdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZXNjcmlwdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXREZXNjcmlwdGlvbihmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5kZXggPSB1c2VDYWxsYmFjaygoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldFRhYmxlSW5kZXgoaW5kZXgpO1xyXG4gICAgfSwgW10pOyovXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2hhcldyYXA+XHJcbiAgICAgICAgICAgIHsvKjxEZXNjcmlwdGlvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREZXNjcmlwdGlvbih0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tSWNvbiBpY29uPXtmYVF1ZXN0aW9uQ2lyY2xlfSBjb2xvcj17UGFsZXR0ZS5ncmF5XzF9IC8+XHJcbiAgICAgICAgICAgIDwvRGVzY3JpcHRpb25CdXR0b24+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmdXaXRob3V0T3ZlcmxheSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWFuZERlc2NyaXB0aW9uIGZ1bmM9e2hhbmRsZURlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2NoYXJQcm9wcz8uSW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2NoYXJOYW1lIGFzIHN0cmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2NoYXJQcm9wcyF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUluZGV4PXt0YWJsZUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5kZXg9e2hhbmRsZUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsnaGknfSovfVxyXG4gICAgICAgIDwvQ2hhcldyYXA+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==