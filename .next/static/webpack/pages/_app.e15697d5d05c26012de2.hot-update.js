self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_PageComponents_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageComponents/Sidebar */ "./components/PageComponents/Sidebar.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/GlobalStyle */ "./styles/GlobalStyle.ts");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.tsx");
/* harmony import */ var _context_ModalContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/ModalContext */ "./context/ModalContext.tsx");
/* harmony import */ var _styles_components_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/components/Icon */ "./styles/components/Icon.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\pages\\_app.tsx",
    _s = $RefreshSig$();











const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div`
    background: #e8e8e8;
`;
_c = Wrapper;
const PageContent = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div`
    position: absolute;
    height: 100%;
    width: calc(100% - 240px);
    left: 240px;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_7__.Device.desktop} {
        left: 0;
        width: 100%;
    }
`;
_c2 = PageContent;
const MenuButtonBlock = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.default)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_6__.default)`
    position: fixed;
    top: 15px;
    left: 20px;
    z-index: 999;
    font-size: 20px;
    color: #fff;
    visibility: hidden;
    cursor: pointer;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_7__.Device.desktop} {
        visibility: visible;
    }
`;
_c3 = MenuButtonBlock;
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div`
    width: 100%;
    position: fixed;
    height: 100%;
    z-index: 996;
    background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_7__.Palette.overlay};
    visibility: ${props => props.toggle ? 'visible' : 'hidden'};
`;
_c4 = Overlay;

function App() {
  _s();

  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    open
  } = (0,_context_ModalContext__WEBPACK_IMPORTED_MODULE_5__.useModalData)();
  const handleToggle = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setToggle(false);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "6N23RP"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__.GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuButtonBlock, {
        icon: toggle ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faTimes : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faBars,
        onClick: () => setToggle(!toggle)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageComponents_Sidebar__WEBPACK_IMPORTED_MODULE_1__.default, {
        toggle: toggle,
        handleToggle: handleToggle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Overlay, {
        toggle: toggle,
        onClick: handleToggle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageContent, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this), open && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 26
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(App, "zLKXbfCjpVmoQpzNfMMQdENqu9c=", false, function () {
  return [_context_ModalContext__WEBPACK_IMPORTED_MODULE_5__.useModalData];
});

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsIlBhZ2VDb250ZW50IiwiRGV2aWNlIiwiTWVudUJ1dHRvbkJsb2NrIiwiQ3VzdG9tSWNvbiIsIk92ZXJsYXkiLCJQYWxldHRlIiwicHJvcHMiLCJ0b2dnbGUiLCJBcHAiLCJzZXRUb2dnbGUiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJ1c2VNb2RhbERhdGEiLCJoYW5kbGVUb2dnbGUiLCJ1c2VDYWxsYmFjayIsImZhVGltZXMiLCJmYUJhcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxPQUFPLEdBQUdDLDBEQUFXO0FBQzNCO0FBQ0EsQ0FGQTtLQUFNRCxPO0FBSU4sTUFBTUUsV0FBVyxHQUFHRCwwREFBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWFFLHlEQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLENBVEE7TUFBTUQsVztBQWdCTixNQUFNRSxlQUFlLEdBQUdILDBEQUFNLENBQUNJLDREQUFELENBQXdCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhRix5REFBZTtBQUM1QjtBQUNBO0FBQ0EsQ0FaQTtNQUFNQyxlO0FBY04sTUFBTUUsT0FBTyxHQUFHTCwwREFBZ0M7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0JNLDBEQUFnQjtBQUNsQyxrQkFBbUJDLEtBQUQsSUFBWUEsS0FBSyxDQUFDQyxNQUFOLEdBQWUsU0FBZixHQUEyQixRQUFVO0FBQ25FLENBUEE7TUFBTUgsTzs7QUFTTixTQUFTSSxHQUFULEdBQWU7QUFBQTs7QUFDWCxRQUFNO0FBQUEsT0FBQ0QsTUFBRDtBQUFBLE9BQVNFO0FBQVQsTUFBc0JDLCtDQUFRLENBQUMsS0FBRCxDQUFwQztBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFXQyxtRUFBWSxFQUE3QjtBQUNBLFFBQU1DLFlBQVksR0FBR0Msa0RBQVcsQ0FBQyxNQUFNO0FBQ25DTCxhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0gsR0FGK0IsRUFFN0IsRUFGNkIsQ0FBaEM7QUFJQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSw4REFBQyxPQUFEO0FBQUEsOEJBQ0ksOERBQUMsZUFBRDtBQUNJLFlBQUksRUFBRUYsTUFBTSxHQUFHUSxzRUFBSCxHQUFhQyxxRUFEN0I7QUFFSSxlQUFPLEVBQUUsTUFBTVAsU0FBUyxDQUFDLENBQUNGLE1BQUY7QUFGNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBS0ksOERBQUMsdUVBQUQ7QUFBUyxjQUFNLEVBQUVBLE1BQWpCO0FBQXlCLG9CQUFZLEVBQUVNO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixlQU1JLDhEQUFDLE9BQUQ7QUFBUyxjQUFNLEVBQUVOLE1BQWpCO0FBQXlCLGVBQU8sRUFBRU07QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBUUksOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkosRUFTS0YsSUFBSSxpQkFBSSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQSxrQkFESjtBQWlCSDs7R0F4QlFILEc7VUFFWUksK0Q7OztNQUZaSixHO0FBMEJULCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTE1Njk3ZDVkMDVjMjYwMTJkZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL1NpZGViYXInO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBmYUJhcnMsXHJcbiAgICBmYVRpbWVzLFxyXG4gICAgSWNvbkRlZmluaXRpb24sXHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgR2xvYmFsU3R5bGUgfSBmcm9tICcuLi9zdHlsZXMvR2xvYmFsU3R5bGUnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbCc7XHJcbmltcG9ydCB7IHVzZU1vZGFsRGF0YSB9IGZyb20gJy4uL2NvbnRleHQvTW9kYWxDb250ZXh0JztcclxuaW1wb3J0IEN1c3RvbUljb24gZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvSWNvbic7XHJcbmltcG9ydCB7IERldmljZSwgUGFsZXR0ZSB9IGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuYDtcclxuXHJcbmNvbnN0IFBhZ2VDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBNZW51UHJvcHMge1xyXG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcclxuICAgIGljb246IEljb25EZWZpbml0aW9uO1xyXG59XHJcblxyXG5jb25zdCBNZW51QnV0dG9uQmxvY2sgPSBzdHlsZWQoQ3VzdG9tSWNvbik8TWVudVByb3BzPmBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2PHsgdG9nZ2xlOiBib29sZWFuIH0+YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTY7XHJcbiAgICBiYWNrZ3JvdW5kOiAke1BhbGV0dGUub3ZlcmxheX07XHJcbiAgICB2aXNpYmlsaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLnRvZ2dsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nKX07XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgeyBvcGVuIH0gPSB1c2VNb2RhbERhdGEoKTtcclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHRpdGxlPjZOMjNSUDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgICAgICA8V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uQmxvY2tcclxuICAgICAgICAgICAgICAgICAgICBpY29uPXt0b2dnbGUgPyBmYVRpbWVzIDogZmFCYXJzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSghdG9nZ2xlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2lkZWJhciB0b2dnbGU9e3RvZ2dsZX0gaGFuZGxlVG9nZ2xlPXtoYW5kbGVUb2dnbGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8T3ZlcmxheSB0b2dnbGU9e3RvZ2dsZX0gb25DbGljaz17aGFuZGxlVG9nZ2xlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxQYWdlQ29udGVudD48L1BhZ2VDb250ZW50PlxyXG4gICAgICAgICAgICAgICAge29wZW4gJiYgPE1vZGFsIC8+fVxyXG4gICAgICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=