self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./firebaseInit.tsx":
/*!**************************!*\
  !*** ./firebaseInit.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": function() { return /* binding */ auth; },
/* harmony export */   "signInWithGoogle": function() { return /* binding */ signInWithGoogle; },
/* harmony export */   "logOut": function() { return /* binding */ logOut; }
/* harmony export */ });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



if (!firebase__WEBPACK_IMPORTED_MODULE_0__.default.apps.length) {
  firebase__WEBPACK_IMPORTED_MODULE_0__.default.initializeApp({
    apiKey: 'AIzaSyDI3lUc4QjYBdRUaTVqI6r0neyocpSuW40',
    authDomain: 'tekken-info.firebaseapp.com',
    databaseURL: 'https://tekken-info-default-rtdb.firebaseio.com',
    projectId: 'tekken-info',
    storageBucket: 'tekken-info.appspot.com',
    messagingSenderId: '482493151012',
    appId: '1:482493151012:web:cc3227418248134488a5b1'
  });
} else {
  firebase__WEBPACK_IMPORTED_MODULE_0__.default.app();
}

const db = firebase__WEBPACK_IMPORTED_MODULE_0__.default.firestore();
/* harmony default export */ __webpack_exports__["default"] = (db);
const auth = firebase__WEBPACK_IMPORTED_MODULE_0__.default.auth();
const googleProvider = new firebase__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider();
const signInWithGoogle = () => {
  auth.signInWithRedirect(googleProvider).then(() => {
    console.log('안녕하세요');
  }).catch(err => {
    console.log(err);
    alert('로그인 중 오류 발생. 에러 코드 ' + err);
  });
};
const logOut = () => {
  auth.signOut().then(() => {
    console.log('logged out');
  }).catch(error => {
    console.log(error.message);
  });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2VJbml0LnRzeCJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiZGIiLCJhdXRoIiwiZ29vZ2xlUHJvdmlkZXIiLCJzaWduSW5XaXRoR29vZ2xlIiwic2lnbkluV2l0aFJlZGlyZWN0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImFsZXJ0IiwibG9nT3V0Iiwic2lnbk91dCIsImVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFJLENBQUNBLHlEQUFMLEVBQTJCO0FBQ3ZCQSw2REFBQSxDQUF1QjtBQUNuQkMsVUFBTSxFQUFFLHlDQURXO0FBRW5CQyxjQUFVLEVBQUUsNkJBRk87QUFHbkJDLGVBQVcsRUFBRSxpREFITTtBQUluQkMsYUFBUyxFQUFFLGFBSlE7QUFLbkJDLGlCQUFhLEVBQUUseUJBTEk7QUFNbkJDLHFCQUFpQixFQUFFLGNBTkE7QUFPbkJDLFNBQUssRUFBRTtBQVBZLEdBQXZCO0FBU0gsQ0FWRCxNQVVPO0FBQ0hQLG1EQUFBO0FBQ0g7O0FBRUQsTUFBTVEsRUFBRSxHQUFHUix1REFBQSxFQUFYO0FBQ0EsK0RBQWVRLEVBQWY7QUFFTyxNQUFNQyxJQUFJLEdBQUdULGtEQUFBLEVBQWI7QUFDUCxNQUFNVSxjQUFjLEdBQUcsSUFBSVYscUVBQUosRUFBdkI7QUFDTyxNQUFNVyxnQkFBZ0IsR0FBRyxNQUFNO0FBQ2xDRixNQUFJLENBQUNHLGtCQUFMLENBQXdCRixjQUF4QixFQUNLRyxJQURMLENBQ1UsTUFBTTtBQUNSQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0gsR0FITCxFQUlLQyxLQUpMLENBSVlDLEdBQUQsSUFBUztBQUNaSCxXQUFPLENBQUNDLEdBQVIsQ0FBWUUsR0FBWjtBQUNBQyxTQUFLLENBQUMsd0JBQXdCRCxHQUF6QixDQUFMO0FBQ0gsR0FQTDtBQVFILENBVE07QUFXQSxNQUFNRSxNQUFNLEdBQUcsTUFBTTtBQUN4QlYsTUFBSSxDQUFDVyxPQUFMLEdBQ0tQLElBREwsQ0FDVSxNQUFNO0FBQ1JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDSCxHQUhMLEVBSUtDLEtBSkwsQ0FJWUssS0FBRCxJQUFXO0FBQ2RQLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTSxLQUFLLENBQUNDLE9BQWxCO0FBQ0gsR0FOTDtBQU9ILENBUk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kY2NhMWIxNDY0ZmM0NGM5OGExMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAgICAgYXBpS2V5OiAnQUl6YVN5REkzbFVjNFFqWUJkUlVhVFZxSTZyMG5leW9jcFN1VzQwJyxcclxuICAgICAgICBhdXRoRG9tYWluOiAndGVra2VuLWluZm8uZmlyZWJhc2VhcHAuY29tJyxcclxuICAgICAgICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vdGVra2VuLWluZm8tZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tJyxcclxuICAgICAgICBwcm9qZWN0SWQ6ICd0ZWtrZW4taW5mbycsXHJcbiAgICAgICAgc3RvcmFnZUJ1Y2tldDogJ3Rla2tlbi1pbmZvLmFwcHNwb3QuY29tJyxcclxuICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogJzQ4MjQ5MzE1MTAxMicsXHJcbiAgICAgICAgYXBwSWQ6ICcxOjQ4MjQ5MzE1MTAxMjp3ZWI6Y2MzMjI3NDE4MjQ4MTM0NDg4YTViMScsXHJcbiAgICB9KTtcclxufSBlbHNlIHtcclxuICAgIGZpcmViYXNlLmFwcCgpO1xyXG59XHJcblxyXG5jb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG5leHBvcnQgZGVmYXVsdCBkYjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5jb25zdCBnb29nbGVQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5leHBvcnQgY29uc3Qgc2lnbkluV2l0aEdvb2dsZSA9ICgpID0+IHtcclxuICAgIGF1dGguc2lnbkluV2l0aFJlZGlyZWN0KGdvb2dsZVByb3ZpZGVyKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+yViOuFle2VmOyEuOyalCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgYWxlcnQoJ+uhnOq3uOyduCDspJEg7Jik66WYIOuwnOyDnS4g7JeQ65+sIOy9lOuTnCAnICsgZXJyKTtcclxuICAgICAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dPdXQgPSAoKSA9PiB7XHJcbiAgICBhdXRoLnNpZ25PdXQoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2dlZCBvdXQnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=