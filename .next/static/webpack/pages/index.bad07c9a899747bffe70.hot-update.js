self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_kkkk_Documents_GitHub_Made_tekken_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_DBContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/DBContext */ "./context/DBContext.tsx");
/* harmony import */ var _context_ModalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/ModalContext */ "./context/ModalContext.tsx");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/UserContext */ "./context/UserContext.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_kkkk_Documents_GitHub_Made_tekken_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






const AppProvider = ({
  contexts,
  children
}) => contexts.reduce((prev, context) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(context, {
  children: prev
}), children);

_c = AppProvider;

const App = ({
  Component,
  pageProps
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppProvider, {
  contexts: [_context_DBContext__WEBPACK_IMPORTED_MODULE_3__.StateProvider, _context_ModalContext__WEBPACK_IMPORTED_MODULE_4__.ModalProvider, _context_UserContext__WEBPACK_IMPORTED_MODULE_5__.default],
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 21,
  columnNumber: 5
}, undefined);

_c2 = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c, _c2;

$RefreshReg$(_c, "AppProvider");
$RefreshReg$(_c2, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiQXBwUHJvdmlkZXIiLCJjb250ZXh0cyIsImNoaWxkcmVuIiwicmVkdWNlIiwicHJldiIsImNvbnRleHQiLCJSZWFjdCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIlN0YXRlUHJvdmlkZXIiLCJNb2RhbFByb3ZpZGVyIiwiVXNlclByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUNqQkMsVUFEaUI7QUFFakJDO0FBRmlCLENBQUQsS0FPaEJELFFBQVEsQ0FBQ0UsTUFBVCxDQUNJLENBQUNDLElBQUQsRUFBWUMsT0FBWixrQkFDSUMsMERBQUEsQ0FBb0JELE9BQXBCLEVBQTZCO0FBQ3pCSCxVQUFRLEVBQUVFO0FBRGUsQ0FBN0IsQ0FGUixFQUtJRixRQUxKLENBUEo7O0tBQU1GLFc7O0FBZU4sTUFBTU8sR0FBRyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsa0JBQ1IsOERBQUMsV0FBRDtBQUFhLFVBQVEsRUFBRSxDQUFDQyw2REFBRCxFQUFnQkMsZ0VBQWhCLEVBQStCQyx5REFBL0IsQ0FBdkI7QUFBQSx5QkFDSSw4REFBQyxTQUFELG9CQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7O01BQU1GLEc7QUFNTiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYWQwN2M5YTg5OTc0N2JmZmU3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU3RhdGVQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvREJDb250ZXh0JztcclxuaW1wb3J0IHsgTW9kYWxQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvTW9kYWxDb250ZXh0JztcclxuaW1wb3J0IFVzZXJQcm92aWRlciBmcm9tICcuLi9jb250ZXh0L1VzZXJDb250ZXh0JztcclxuY29uc3QgQXBwUHJvdmlkZXIgPSAoe1xyXG4gICAgY29udGV4dHMsXHJcbiAgICBjaGlsZHJlbixcclxufToge1xyXG4gICAgY29udGV4dHM6IGFueTtcclxuICAgIGNoaWxkcmVuOiBhbnk7XHJcbn0pID0+XHJcbiAgICBjb250ZXh0cy5yZWR1Y2UoXHJcbiAgICAgICAgKHByZXY6IGFueSwgY29udGV4dDogYW55KSA9PlxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbnRleHQsIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBwcmV2LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICBjaGlsZHJlblxyXG4gICAgKTtcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IChcclxuICAgIDxBcHBQcm92aWRlciBjb250ZXh0cz17W1N0YXRlUHJvdmlkZXIsIE1vZGFsUHJvdmlkZXIsIFVzZXJQcm92aWRlcl19PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQXBwUHJvdmlkZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=