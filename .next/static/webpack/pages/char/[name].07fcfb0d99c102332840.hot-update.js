self["webpackHotUpdate_N_E"]("pages/char/[name]",{

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
    name
  } = router.query;
  console.log(name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhci9bbmFtZV0udHN4Il0sIm5hbWVzIjpbIkNoYXJXcmFwIiwic3R5bGVkIiwiRGV2aWNlIiwiRGVzY3JpcHRpb25CdXR0b24iLCJDaGFyIiwicm91dGVyIiwidXNlUm91dGVyIiwibmFtZSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImNoYXJQcm9wcyIsImxvYWRpbmciLCJ1c2VEQkRhdGEiLCJ0ZW1wRGlzcGF0Y2giLCJ1c2VEQkRpc3BhdGNoIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInVzZVN0YXRlIiwidGFibGVJbmRleCIsInNldFRhYmxlSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBTUEsTUFBTUEsUUFBUSxHQUFHQywwREFBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWFDLHlEQUFlO0FBQzVCO0FBQ0E7QUFDQSxDQVJBO0tBQU1GLFE7QUFVTixNQUFNRyxpQkFBaUIsR0FBR0YsMERBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWFDLHlEQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLENBVkE7O0FBWUEsTUFBTUUsSUFBSSxHQUFHLE1BQU07QUFBQTs7QUFDZixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVdGLE1BQU0sQ0FBQ0csS0FBeEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQSxRQUFNO0FBQUVJLGFBQUY7QUFBYUM7QUFBYixNQUF5QkMsNkRBQVMsRUFBeEM7QUFDQSxRQUFNQyxZQUFZLEdBQUdDLGlFQUFhLEVBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQywrQ0FBUSxDQUFDLEtBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJGLCtDQUFRLENBQUMsQ0FBRCxDQUE1QztBQUNBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlJLHNCQUNJLDhEQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBNEJILENBakREOztHQUFNZCxJO1VBQ2FFLGtELEVBR2dCTyx5RCxFQUNWRSw2RDs7O01BTG5CWCxJO0FBbUROLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXIvW25hbWVdLjA3ZmNmYjBkOTljMTAyMzMyODQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbmZvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZUNvbXBvbmVudHMvSW5mbyc7XHJcbmltcG9ydCBNYWluIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZUNvbXBvbmVudHMvTWFpbic7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZURCRGF0YSwgdXNlREJEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2NvbnRleHQvREJDb250ZXh0JztcclxuaW1wb3J0IHsgTG9hZERhdGEgfSBmcm9tICcuLi8uLi9jb250ZXh0L0RCQ29udGV4dEZ1bmMnO1xyXG5pbXBvcnQgeyBEZXZpY2UsIFBhbGV0dGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgeyBMb2FkaW5nV2l0aG91dE92ZXJsYXkgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL0xvYWRpbmcnO1xyXG5pbXBvcnQgQ29tbWFuZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZUNvbXBvbmVudHMvQ29tbWFuZERlc2NyaXB0aW9uJztcclxuaW1wb3J0IEN1c3RvbUljb24gZnJvbSAnLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvSWNvbic7XHJcbmltcG9ydCB7IGZhUXVlc3Rpb25DaXJjbGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5cclxuY29uc3QgQ2hhcldyYXAgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IERlc2NyaXB0aW9uQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICByaWdodDogMjBweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IENoYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgbmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2cobmFtZSk7XHJcbiAgICBjb25zdCB7IGNoYXJQcm9wcywgbG9hZGluZyB9ID0gdXNlREJEYXRhKCk7XHJcbiAgICBjb25zdCB0ZW1wRGlzcGF0Y2ggPSB1c2VEQkRpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt0YWJsZUluZGV4LCBzZXRUYWJsZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgLyp1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIExvYWREYXRhKGNoYXJOYW1lIGFzIHN0cmluZywgdGVtcERpc3BhdGNoKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgICB9LCBbY2hhck5hbWVdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZXNjcmlwdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXREZXNjcmlwdGlvbihmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5kZXggPSB1c2VDYWxsYmFjaygoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldFRhYmxlSW5kZXgoaW5kZXgpO1xyXG4gICAgfSwgW10pOyovXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2hhcldyYXA+XHJcbiAgICAgICAgICAgIHsvKjxEZXNjcmlwdGlvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREZXNjcmlwdGlvbih0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tSWNvbiBpY29uPXtmYVF1ZXN0aW9uQ2lyY2xlfSBjb2xvcj17UGFsZXR0ZS5ncmF5XzF9IC8+XHJcbiAgICAgICAgICAgIDwvRGVzY3JpcHRpb25CdXR0b24+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmdXaXRob3V0T3ZlcmxheSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWFuZERlc2NyaXB0aW9uIGZ1bmM9e2hhbmRsZURlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2NoYXJQcm9wcz8uSW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2NoYXJOYW1lIGFzIHN0cmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2NoYXJQcm9wcyF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUluZGV4PXt0YWJsZUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5kZXg9e2hhbmRsZUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsnaGknfSovfVxyXG4gICAgICAgIDwvQ2hhcldyYXA+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==