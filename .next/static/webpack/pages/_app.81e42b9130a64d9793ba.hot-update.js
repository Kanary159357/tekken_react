self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/char.tsx":
/*!************************!*\
  !*** ./pages/char.tsx ***!
  \************************/
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
/* harmony import */ var _context_DBContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/DBContext */ "./context/DBContext.tsx");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\pages\\char.tsx",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhci50c3giXSwibmFtZXMiOlsiQ2hhcldyYXAiLCJzdHlsZWQiLCJEZXZpY2UiLCJEZXNjcmlwdGlvbkJ1dHRvbiIsIkNoYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjaGFyTmFtZSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImNoYXJQcm9wcyIsImxvYWRpbmciLCJ1c2VEQkRhdGEiLCJ0ZW1wRGlzcGF0Y2giLCJ1c2VEQkRpc3BhdGNoIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInVzZVN0YXRlIiwidGFibGVJbmRleCIsInNldFRhYmxlSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBTUEsTUFBTUEsUUFBUSxHQUFHQywwREFBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWFDLHlEQUFlO0FBQzVCO0FBQ0E7QUFDQSxDQVJBO0tBQU1GLFE7QUFVTixNQUFNRyxpQkFBaUIsR0FBR0YsMERBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWFDLHlEQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLENBVkE7O0FBWUEsTUFBTUUsSUFBSSxHQUFHLE1BQU07QUFBQTs7QUFDZixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQWVGLE1BQU0sQ0FBQ0csS0FBNUI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILFFBQVo7QUFDQSxRQUFNO0FBQUVJLGFBQUY7QUFBYUM7QUFBYixNQUF5QkMsNkRBQVMsRUFBeEM7QUFDQSxRQUFNQyxZQUFZLEdBQUdDLGlFQUFhLEVBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQywrQ0FBUSxDQUFDLEtBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJGLCtDQUFRLENBQUMsQ0FBRCxDQUE1QztBQUNBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlJLHNCQUNJLDhEQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBNEJILENBakREOztHQUFNZCxJO1VBQ2FFLGtELEVBR2dCTyx5RCxFQUNWRSw2RDs7O01BTG5CWCxJO0FBbUROLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODFlNDJiOTEzMGE2NGQ5NzkzYmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9JbmZvJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9NYWluJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlREJEYXRhLCB1c2VEQkRpc3BhdGNoIH0gZnJvbSAnLi4vY29udGV4dC9EQkNvbnRleHQnO1xyXG5pbXBvcnQgeyBMb2FkRGF0YSB9IGZyb20gJy4uL2NvbnRleHQvREJDb250ZXh0RnVuYyc7XHJcbmltcG9ydCB7IERldmljZSwgUGFsZXR0ZSB9IGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCB7IExvYWRpbmdXaXRob3V0T3ZlcmxheSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUNvbXBvbmVudHMvTG9hZGluZyc7XHJcbmltcG9ydCBDb21tYW5kRGVzY3JpcHRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9Db21tYW5kRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgQ3VzdG9tSWNvbiBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9JY29uJztcclxuaW1wb3J0IHsgZmFRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5jb25zdCBDaGFyV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRGVzY3JpcHRpb25CdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UuZGVza3RvcH0ge1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBjaGFyTmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2coY2hhck5hbWUpO1xyXG4gICAgY29uc3QgeyBjaGFyUHJvcHMsIGxvYWRpbmcgfSA9IHVzZURCRGF0YSgpO1xyXG4gICAgY29uc3QgdGVtcERpc3BhdGNoID0gdXNlREJEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdGFibGVJbmRleCwgc2V0VGFibGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIC8qdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBMb2FkRGF0YShjaGFyTmFtZSBhcyBzdHJpbmcsIHRlbXBEaXNwYXRjaCk7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgfSwgW2NoYXJOYW1lXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVzY3JpcHRpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oZmFsc2UpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUluZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRUYWJsZUluZGV4KGluZGV4KTtcclxuICAgIH0sIFtdKTsqL1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENoYXJXcmFwPlxyXG4gICAgICAgICAgICB7Lyo8RGVzY3JpcHRpb25CdXR0b24gb25DbGljaz17KCkgPT4gc2V0RGVzY3JpcHRpb24odHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbUljb24gaWNvbj17ZmFRdWVzdGlvbkNpcmNsZX0gY29sb3I9e1BhbGV0dGUuZ3JheV8xfSAvPlxyXG4gICAgICAgICAgICA8L0Rlc2NyaXB0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgIDxMb2FkaW5nV2l0aG91dE92ZXJsYXkgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1hbmREZXNjcmlwdGlvbiBmdW5jPXtoYW5kbGVEZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtjaGFyUHJvcHM/LkluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjaGFyTmFtZSBhcyBzdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtjaGFyUHJvcHMhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVJbmRleD17dGFibGVJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUluZGV4PXtoYW5kbGVJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7J2hpJ30qL31cclxuICAgICAgICA8L0NoYXJXcmFwPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=