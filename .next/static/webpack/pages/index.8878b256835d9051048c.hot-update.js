self["webpackHotUpdate_N_E"]("pages/index",{

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


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXIvW25hbWVdLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvcm91dGVyLmpzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJQYWdlQ29udGVudCIsIkRldmljZSIsIk1lbnVCdXR0b25CbG9jayIsIkN1c3RvbUljb24iLCJPdmVybGF5IiwiUGFsZXR0ZSIsInByb3BzIiwidG9nZ2xlIiwiQXBwIiwic2V0VG9nZ2xlIiwidXNlU3RhdGUiLCJoYW5kbGVUb2dnbGUiLCJ1c2VDYWxsYmFjayIsImZhVGltZXMiLCJmYUJhcnMiLCJDaGFyV3JhcCIsIkRlc2NyaXB0aW9uQnV0dG9uIiwiQ2hhciIsInJvdXRlciIsInVzZVJvdXRlciIsImNoYXJOYW1lIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiY2hhclByb3BzIiwibG9hZGluZyIsInVzZURCRGF0YSIsInRlbXBEaXNwYXRjaCIsInVzZURCRGlzcGF0Y2giLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidGFibGVJbmRleCIsInNldFRhYmxlSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxPQUFPLEdBQUdDLDBEQUFXO0FBQzNCO0FBQ0EsQ0FGQTtLQUFNRCxPO0FBSU4sTUFBTUUsV0FBVyxHQUFHRCwwREFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWFFLHlEQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLENBVEE7TUFBTUQsVztBQWdCTixNQUFNRSxlQUFlLEdBQUdILDBEQUFNLENBQUNJLDREQUFELENBQXdCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhRix5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Qk8seUQsRUFDVkUsNkQ7OztNQUxuQlgsSTtBQW1ETiwrREFBZUEsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RkEsNkdBQWdEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg4NzhiMjU2ODM1ZDkwNTEwNDhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9TaWRlYmFyJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgZmFCYXJzLFxyXG4gICAgZmFUaW1lcyxcclxuICAgIEljb25EZWZpbml0aW9uLFxyXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSAnLi4vc3R5bGVzL0dsb2JhbFN0eWxlJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwnO1xyXG5pbXBvcnQgQ3VzdG9tSWNvbiBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9JY29uJztcclxuaW1wb3J0IHsgRGV2aWNlLCBQYWxldHRlIH0gZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IENoYXIgZnJvbSAnLi9jaGFyL1tuYW1lXSc7XHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuYDtcclxuXHJcbmNvbnN0IFBhZ2VDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBNZW51UHJvcHMge1xyXG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcclxuICAgIGljb246IEljb25EZWZpbml0aW9uO1xyXG59XHJcblxyXG5jb25zdCBNZW51QnV0dG9uQmxvY2sgPSBzdHlsZWQoQ3VzdG9tSWNvbik8TWVudVByb3BzPmBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2PHsgdG9nZ2xlOiBib29sZWFuIH0+YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTY7XHJcbiAgICBiYWNrZ3JvdW5kOiAke1BhbGV0dGUub3ZlcmxheX07XHJcbiAgICB2aXNpYmlsaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLnRvZ2dsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nKX07XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dGl0bGU+Nk4yM1JQPC90aXRsZT5cclxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVCdXR0b25CbG9ja1xyXG4gICAgICAgICAgICAgICAgICAgIGljb249e3RvZ2dsZSA/IGZhVGltZXMgOiBmYUJhcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIHRvZ2dsZT17dG9nZ2xlfSBoYW5kbGVUb2dnbGU9e2hhbmRsZVRvZ2dsZX0gLz5cclxuICAgICAgICAgICAgICAgIDxPdmVybGF5IHRvZ2dsZT17dG9nZ2xlfSBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFBhZ2VDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFyIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhZ2VDb250ZW50PlxyXG4gICAgICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEluZm8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9JbmZvJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9NYWluJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlREJEYXRhLCB1c2VEQkRpc3BhdGNoIH0gZnJvbSAnLi4vLi4vY29udGV4dC9EQkNvbnRleHQnO1xyXG5pbXBvcnQgeyBMb2FkRGF0YSB9IGZyb20gJy4uLy4uL2NvbnRleHQvREJDb250ZXh0RnVuYyc7XHJcbmltcG9ydCB7IERldmljZSwgUGFsZXR0ZSB9IGZyb20gJy4uLy4uL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCB7IExvYWRpbmdXaXRob3V0T3ZlcmxheSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZUNvbXBvbmVudHMvTG9hZGluZyc7XHJcbmltcG9ydCBDb21tYW5kRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9Db21tYW5kRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgQ3VzdG9tSWNvbiBmcm9tICcuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9JY29uJztcclxuaW1wb3J0IHsgZmFRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5jb25zdCBDaGFyV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRGVzY3JpcHRpb25CdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UuZGVza3RvcH0ge1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBjaGFyTmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2coY2hhck5hbWUpO1xyXG4gICAgY29uc3QgeyBjaGFyUHJvcHMsIGxvYWRpbmcgfSA9IHVzZURCRGF0YSgpO1xyXG4gICAgY29uc3QgdGVtcERpc3BhdGNoID0gdXNlREJEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdGFibGVJbmRleCwgc2V0VGFibGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIC8qdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBMb2FkRGF0YShjaGFyTmFtZSBhcyBzdHJpbmcsIHRlbXBEaXNwYXRjaCk7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgfSwgW2NoYXJOYW1lXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVzY3JpcHRpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oZmFsc2UpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUluZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRUYWJsZUluZGV4KGluZGV4KTtcclxuICAgIH0sIFtdKTsqL1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENoYXJXcmFwPlxyXG4gICAgICAgICAgICB7Lyo8RGVzY3JpcHRpb25CdXR0b24gb25DbGljaz17KCkgPT4gc2V0RGVzY3JpcHRpb24odHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbUljb24gaWNvbj17ZmFRdWVzdGlvbkNpcmNsZX0gY29sb3I9e1BhbGV0dGUuZ3JheV8xfSAvPlxyXG4gICAgICAgICAgICA8L0Rlc2NyaXB0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgIDxMb2FkaW5nV2l0aG91dE92ZXJsYXkgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1hbmREZXNjcmlwdGlvbiBmdW5jPXtoYW5kbGVEZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtjaGFyUHJvcHM/LkluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjaGFyTmFtZSBhcyBzdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtjaGFyUHJvcHMhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVJbmRleD17dGFibGVJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUluZGV4PXtoYW5kbGVJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7J2hpJ30qL31cclxuICAgICAgICA8L0NoYXJXcmFwPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==