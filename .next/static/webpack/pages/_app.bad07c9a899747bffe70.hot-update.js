self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/ModalContext.tsx":
/*!**********************************!*\
  !*** ./context/ModalContext.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalProvider": function() { return /* binding */ ModalProvider; },
/* harmony export */   "useModalData": function() { return /* binding */ useModalData; },
/* harmony export */   "useModalDispatch": function() { return /* binding */ useModalDispatch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_kkkk_Documents_GitHub_Made_tekken_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\context\\ModalContext.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_kkkk_Documents_GitHub_Made_tekken_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function reducer(state, action) {
  switch (action.type) {
    case 'SET':
      return _objectSpread(_objectSpread({}, state), {}, {
        open: action.payload
      });

    case 'ADD':
      return {
        modalAction: 'add',
        props: action.payload,
        open: true
      };

    case 'DELETE':
      return {
        modalAction: 'delete',
        props: action.payload,
        open: true
      };

    case 'EDIT':
      return {
        modalAction: 'edit',
        props: action.payload,
        open: true
      };

    case 'NOTUSER':
      return _objectSpread(_objectSpread({}, state), {}, {
        modalAction: 'notuser',
        open: true
      });
  }
}

const ModalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
const ModalDispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
const initialState = {
  modalAction: 'add',
  props: {
    description: '',
    values: '',
    charName: ''
  },
  open: false
};
function ModalProvider({
  children
}) {
  _s();

  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalContext.Provider, {
    value: state,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalDispatchContext.Provider, {
      value: dispatch,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, this);
}

_s(ModalProvider, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");

_c = ModalProvider;
function useModalData() {
  _s2();

  const data = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ModalContext);
  if (!data) throw new Error('Cannot find Provider');
  return data;
}

_s2(useModalData, "QDbvtl2XjZhCafbmMBOV/hNJip4=");

function useModalDispatch() {
  _s3();

  const data = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ModalDispatchContext);
  if (!data) throw new Error('Cannot find Provider');
  return data;
}

_s3(useModalDispatch, "QDbvtl2XjZhCafbmMBOV/hNJip4=");

var _c;

$RefreshReg$(_c, "ModalProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9Nb2RhbENvbnRleHQudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeCJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwib3BlbiIsInBheWxvYWQiLCJtb2RhbEFjdGlvbiIsInByb3BzIiwiTW9kYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIk1vZGFsRGlzcGF0Y2hDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZXMiLCJjaGFyTmFtZSIsIk1vZGFsUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVzZU1vZGFsRGF0YSIsImRhdGEiLCJ1c2VDb250ZXh0IiwiRXJyb3IiLCJ1c2VNb2RhbERpc3BhdGNoIiwiQXBwUHJvdmlkZXIiLCJjb250ZXh0cyIsInJlZHVjZSIsInByZXYiLCJjb250ZXh0IiwiUmVhY3QiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJTdGF0ZVByb3ZpZGVyIiwiVXNlclByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFlQSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUFvQ0MsTUFBcEMsRUFBb0Q7QUFDaEQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxLQUFMO0FBQ0ksNkNBQ09GLEtBRFA7QUFFSUcsWUFBSSxFQUFFRixNQUFNLENBQUNHO0FBRmpCOztBQUlKLFNBQUssS0FBTDtBQUNJLGFBQU87QUFDSEMsbUJBQVcsRUFBRSxLQURWO0FBRUhDLGFBQUssRUFBRUwsTUFBTSxDQUFDRyxPQUZYO0FBR0hELFlBQUksRUFBRTtBQUhILE9BQVA7O0FBS0osU0FBSyxRQUFMO0FBQ0ksYUFBTztBQUNIRSxtQkFBVyxFQUFFLFFBRFY7QUFFSEMsYUFBSyxFQUFFTCxNQUFNLENBQUNHLE9BRlg7QUFHSEQsWUFBSSxFQUFFO0FBSEgsT0FBUDs7QUFLSixTQUFLLE1BQUw7QUFDSSxhQUFPO0FBQ0hFLG1CQUFXLEVBQUUsTUFEVjtBQUVIQyxhQUFLLEVBQUVMLE1BQU0sQ0FBQ0csT0FGWDtBQUdIRCxZQUFJLEVBQUU7QUFISCxPQUFQOztBQUtKLFNBQUssU0FBTDtBQUNJLDZDQUNPSCxLQURQO0FBRUlLLG1CQUFXLEVBQUUsU0FGakI7QUFHSUYsWUFBSSxFQUFFO0FBSFY7QUF6QlI7QUErQkg7O0FBV0QsTUFBTUksWUFBWSxnQkFBR0Msb0RBQWEsQ0FBb0IsSUFBcEIsQ0FBbEM7QUFDQSxNQUFNQyxvQkFBb0IsZ0JBQUdELG9EQUFhLENBQXVCLElBQXZCLENBQTFDO0FBRUEsTUFBTUUsWUFBd0IsR0FBRztBQUM3QkwsYUFBVyxFQUFFLEtBRGdCO0FBRTdCQyxPQUFLLEVBQUU7QUFDSEssZUFBVyxFQUFFLEVBRFY7QUFFSEMsVUFBTSxFQUFFLEVBRkw7QUFHSEMsWUFBUSxFQUFFO0FBSFAsR0FGc0I7QUFPN0JWLE1BQUksRUFBRTtBQVB1QixDQUFqQztBQVVPLFNBQVNXLGFBQVQsQ0FBdUI7QUFBRUM7QUFBRixDQUF2QixFQUFvRTtBQUFBOztBQUN2RSxRQUFNO0FBQUEsT0FBQ2YsS0FBRDtBQUFBLE9BQVFnQjtBQUFSLE1BQW9CQyxpREFBVSxDQUFDbEIsT0FBRCxFQUFVVyxZQUFWLENBQXBDO0FBQ0Esc0JBQ0ksOERBQUMsWUFBRCxDQUFjLFFBQWQ7QUFBdUIsU0FBSyxFQUFFVixLQUE5QjtBQUFBLDJCQUNJLDhEQUFDLG9CQUFELENBQXNCLFFBQXRCO0FBQStCLFdBQUssRUFBRWdCLFFBQXRDO0FBQUEsZ0JBQ0tEO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IOztHQVRlRCxhOztLQUFBQSxhO0FBV1QsU0FBU0ksWUFBVCxHQUF3QjtBQUFBOztBQUMzQixRQUFNQyxJQUFJLEdBQUdDLGlEQUFVLENBQUNiLFlBQUQsQ0FBdkI7QUFDQSxNQUFJLENBQUNZLElBQUwsRUFBVyxNQUFNLElBQUlFLEtBQUosQ0FBVSxzQkFBVixDQUFOO0FBQ1gsU0FBT0YsSUFBUDtBQUNIOztJQUplRCxZOztBQU1ULFNBQVNJLGdCQUFULEdBQTRCO0FBQUE7O0FBQy9CLFFBQU1ILElBQUksR0FBR0MsaURBQVUsQ0FBQ1gsb0JBQUQsQ0FBdkI7QUFDQSxNQUFJLENBQUNVLElBQUwsRUFBVyxNQUFNLElBQUlFLEtBQUosQ0FBVSxzQkFBVixDQUFOO0FBQ1gsU0FBT0YsSUFBUDtBQUNIOztJQUplRyxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RmhCO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDO0FBQ2pCQyxVQURpQjtBQUVqQlQ7QUFGaUIsQ0FBRCxLQU9oQlMsUUFBUSxDQUFDQyxNQUFULENBQ0ksQ0FBQ0MsSUFBRCxFQUFZQyxPQUFaLGtCQUNJQywwREFBQSxDQUFvQkQsT0FBcEIsRUFBNkI7QUFDekJaLFVBQVEsRUFBRVc7QUFEZSxDQUE3QixDQUZSLEVBS0lYLFFBTEosQ0FQSjs7S0FBTVEsVzs7QUFlTixNQUFNTSxHQUFHLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxrQkFDUiw4REFBQyxXQUFEO0FBQWEsVUFBUSxFQUFFLENBQUNDLDZEQUFELEVBQWdCbEIsZ0VBQWhCLEVBQStCbUIseURBQS9CLENBQXZCO0FBQUEseUJBQ0ksOERBQUMsU0FBRCxvQkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKOztNQUFNRixHO0FBTU4sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iYWQwN2M5YTg5OTc0N2JmZmU3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIERpc3BhdGNoLCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXJhUHJvcHMge1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHZhbHVlczogT2JqZWN0O1xyXG4gICAgb2xkdmFsdWVzPzogT2JqZWN0O1xyXG4gICAgY2hhck5hbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE1vZGFsUHJvcHMge1xyXG4gICAgbW9kYWxBY3Rpb246IGFueTtcclxuICAgIHByb3BzOiBQYXJhUHJvcHM7XHJcbiAgICBvcGVuOiBib29sZWFuO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlOiBNb2RhbFByb3BzLCBhY3Rpb246IEFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ1NFVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9wZW46IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0FERCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbEFjdGlvbjogJ2FkZCcsXHJcbiAgICAgICAgICAgICAgICBwcm9wczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0RFTEVURSc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbEFjdGlvbjogJ2RlbGV0ZScsXHJcbiAgICAgICAgICAgICAgICBwcm9wczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0VESVQnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbW9kYWxBY3Rpb246ICdlZGl0JyxcclxuICAgICAgICAgICAgICAgIHByb3BzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnTk9UVVNFUic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1vZGFsQWN0aW9uOiAnbm90dXNlcicsXHJcbiAgICAgICAgICAgICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBY3Rpb24gPVxyXG4gICAgfCB7IHR5cGU6ICdTRVQnOyBwYXlsb2FkOiBhbnkgfVxyXG4gICAgfCB7IHR5cGU6ICdBREQnOyBwYXlsb2FkOiBQYXJhUHJvcHMgfVxyXG4gICAgfCB7IHR5cGU6ICdERUxFVEUnOyBwYXlsb2FkOiBQYXJhUHJvcHMgfVxyXG4gICAgfCB7IHR5cGU6ICdFRElUJzsgcGF5bG9hZDogUGFyYVByb3BzIH1cclxuICAgIHwgeyB0eXBlOiAnTk9UVVNFUicgfTtcclxuXHJcbnR5cGUgTW9kYWxEaXNwYXRjaCA9IERpc3BhdGNoPEFjdGlvbj47XHJcblxyXG5jb25zdCBNb2RhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0PE1vZGFsUHJvcHMgfCBudWxsPihudWxsKTtcclxuY29uc3QgTW9kYWxEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0PE1vZGFsRGlzcGF0Y2ggfCBudWxsPihudWxsKTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogTW9kYWxQcm9wcyA9IHtcclxuICAgIG1vZGFsQWN0aW9uOiAnYWRkJyxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIHZhbHVlczogJycsXHJcbiAgICAgICAgY2hhck5hbWU6ICcnLFxyXG4gICAgfSxcclxuICAgIG9wZW46IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1vZGFsUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgICAgICAgPE1vZGFsRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvTW9kYWxEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC9Nb2RhbENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTW9kYWxEYXRhKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcclxuICAgIGlmICghZGF0YSkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBQcm92aWRlcicpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNb2RhbERpc3BhdGNoKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHVzZUNvbnRleHQoTW9kYWxEaXNwYXRjaENvbnRleHQpO1xyXG4gICAgaWYgKCFkYXRhKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIFByb3ZpZGVyJyk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTdGF0ZVByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9EQkNvbnRleHQnO1xyXG5pbXBvcnQgeyBNb2RhbFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9Nb2RhbENvbnRleHQnO1xyXG5pbXBvcnQgVXNlclByb3ZpZGVyIGZyb20gJy4uL2NvbnRleHQvVXNlckNvbnRleHQnO1xyXG5jb25zdCBBcHBQcm92aWRlciA9ICh7XHJcbiAgICBjb250ZXh0cyxcclxuICAgIGNoaWxkcmVuLFxyXG59OiB7XHJcbiAgICBjb250ZXh0czogYW55O1xyXG4gICAgY2hpbGRyZW46IGFueTtcclxufSkgPT5cclxuICAgIGNvbnRleHRzLnJlZHVjZShcclxuICAgICAgICAocHJldjogYW55LCBjb250ZXh0OiBhbnkpID0+XHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29udGV4dCwge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHByZXYsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIGNoaWxkcmVuXHJcbiAgICApO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4gKFxyXG4gICAgPEFwcFByb3ZpZGVyIGNvbnRleHRzPXtbU3RhdGVQcm92aWRlciwgTW9kYWxQcm92aWRlciwgVXNlclByb3ZpZGVyXX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9BcHBQcm92aWRlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==