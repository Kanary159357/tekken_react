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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhci9bbmFtZV0udHN4Il0sIm5hbWVzIjpbIkNoYXJXcmFwIiwic3R5bGVkIiwiRGV2aWNlIiwiRGVzY3JpcHRpb25CdXR0b24iLCJDaGFyIiwicm91dGVyIiwidXNlUm91dGVyIiwibmFtZSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImNoYXJOYW1lIiwiY2hhclByb3BzIiwibG9hZGluZyIsInVzZURCRGF0YSIsInRlbXBEaXNwYXRjaCIsInVzZURCRGlzcGF0Y2giLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidXNlU3RhdGUiLCJ0YWJsZUluZGV4Iiwic2V0VGFibGVJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFNQSxNQUFNQSxRQUFRLEdBQUdDLDBEQUFXO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYUMseURBQWU7QUFDNUI7QUFDQTtBQUNBLENBUkE7S0FBTUYsUTtBQVVOLE1BQU1HLGlCQUFpQixHQUFHRiwwREFBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYUMseURBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsQ0FWQTs7QUFZQSxNQUFNRSxJQUFJLEdBQUcsTUFBTTtBQUFBOztBQUNmLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBV0YsTUFBTSxDQUFDRyxLQUF4QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWjtBQUNBLFFBQU07QUFBRUMsYUFBRjtBQUFhQztBQUFiLE1BQXlCQyw2REFBUyxFQUF4QztBQUNBLFFBQU1DLFlBQVksR0FBR0MsaUVBQWEsRUFBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLCtDQUFRLENBQUMsS0FBRCxDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkYsK0NBQVEsQ0FBQyxDQUFELENBQTVDO0FBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUksc0JBQ0ksOERBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUE0QkgsQ0FqREQ7O0dBQU1mLEk7VUFDYUUsa0QsRUFHZ0JRLHlELEVBQ1ZFLDZEOzs7TUFMbkJaLEk7QUFtRE4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhci9bbmFtZV0uM2JhMzVhM2QyNDM1Y2M1Yjg2MzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEluZm8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9JbmZvJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9NYWluJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlREJEYXRhLCB1c2VEQkRpc3BhdGNoIH0gZnJvbSAnLi4vLi4vY29udGV4dC9EQkNvbnRleHQnO1xyXG5pbXBvcnQgeyBMb2FkRGF0YSB9IGZyb20gJy4uLy4uL2NvbnRleHQvREJDb250ZXh0RnVuYyc7XHJcbmltcG9ydCB7IERldmljZSwgUGFsZXR0ZSB9IGZyb20gJy4uLy4uL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCB7IExvYWRpbmdXaXRob3V0T3ZlcmxheSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZUNvbXBvbmVudHMvTG9hZGluZyc7XHJcbmltcG9ydCBDb21tYW5kRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9Db21tYW5kRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgQ3VzdG9tSWNvbiBmcm9tICcuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9JY29uJztcclxuaW1wb3J0IHsgZmFRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5jb25zdCBDaGFyV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRGVzY3JpcHRpb25CdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UuZGVza3RvcH0ge1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBuYW1lIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhjaGFyTmFtZSk7XHJcbiAgICBjb25zdCB7IGNoYXJQcm9wcywgbG9hZGluZyB9ID0gdXNlREJEYXRhKCk7XHJcbiAgICBjb25zdCB0ZW1wRGlzcGF0Y2ggPSB1c2VEQkRpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt0YWJsZUluZGV4LCBzZXRUYWJsZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgLyp1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIExvYWREYXRhKGNoYXJOYW1lIGFzIHN0cmluZywgdGVtcERpc3BhdGNoKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgICB9LCBbY2hhck5hbWVdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZXNjcmlwdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXREZXNjcmlwdGlvbihmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5kZXggPSB1c2VDYWxsYmFjaygoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldFRhYmxlSW5kZXgoaW5kZXgpO1xyXG4gICAgfSwgW10pOyovXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2hhcldyYXA+XHJcbiAgICAgICAgICAgIHsvKjxEZXNjcmlwdGlvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREZXNjcmlwdGlvbih0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tSWNvbiBpY29uPXtmYVF1ZXN0aW9uQ2lyY2xlfSBjb2xvcj17UGFsZXR0ZS5ncmF5XzF9IC8+XHJcbiAgICAgICAgICAgIDwvRGVzY3JpcHRpb25CdXR0b24+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmdXaXRob3V0T3ZlcmxheSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWFuZERlc2NyaXB0aW9uIGZ1bmM9e2hhbmRsZURlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2NoYXJQcm9wcz8uSW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2NoYXJOYW1lIGFzIHN0cmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2NoYXJQcm9wcyF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUluZGV4PXt0YWJsZUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5kZXg9e2hhbmRsZUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsnaGknfSovfVxyXG4gICAgICAgIDwvQ2hhcldyYXA+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==