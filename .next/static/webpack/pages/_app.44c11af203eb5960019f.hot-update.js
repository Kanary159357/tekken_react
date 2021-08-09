self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Overlay.tsx":
/*!********************************!*\
  !*** ./components/Overlay.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\Overlay.tsx";



const OverlayWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Palette.overlay};
`;
_c = OverlayWrapper;

const Overlay = ({
  func
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OverlayWrapper, {
    onClick: func
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 12
  }, undefined);
};

_c2 = Overlay;
/* harmony default export */ __webpack_exports__["default"] = (Overlay);

var _c, _c2;

$RefreshReg$(_c, "OverlayWrapper");
$RefreshReg$(_c2, "Overlay");

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

/***/ "./components/PageComponents/CommandDescription.tsx":
/*!**********************************************************!*\
  !*** ./components/PageComponents/CommandDescription.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _img_Frame2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/Frame2.png */ "./img/Frame2.png");
/* harmony import */ var _img_Frame1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/Frame1.png */ "./img/Frame1.png");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Overlay */ "./components/Overlay.tsx");
/* harmony import */ var _styles_components_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/components/Icon */ "./styles/components/Icon.tsx");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\PageComponents\\CommandDescription.tsx";








const Animation = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div`
    animation: fadeInAnimation 0.3s;

    @keyframes fadeInAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
_c = Animation;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div`
    position: fixed;
    left: calc(50% - 200px);
    top: 0;
    z-index: 2;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.tablet} {
        left: calc(50% - 175px);
    }
`;
_c2 = Wrapper;
const DescriptionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div`
    width: 400px;
    margin: 30px auto;
    padding: 10px 25px;
    border-radius: 16px;
    position: relative;
    background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Palette.white_1};
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.tablet} {
        width: 300px;
    }
    .header {
        font-size: 40px;
        margin-bottom: 10px;
        font-weight: 800;
        text-align: center;
        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.tablet} {
            font-size: 30px;
        }
    }
    .description {
        font-size: 1em;
        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.desktop} {
            width: 100%;
        }
    }
    .command {
        margin-top: 30px;
        img {
            width: 150px;
            height: 150px;
            @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.tablet} {
                width: 125px;
                height: 125px;
            }
        }
    }
    .example {
        margin-top: 30px;
    }
`;
_c3 = DescriptionWrapper;
const Sentence = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div`
    display: block;
    text-align: center;
    width: 100%;
    padding-top: 10px;
    font-size: 20px;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.tablet} {
        display: block;
        width: 100%;
    }
`;
_c4 = Sentence;
const SmallHeader = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div`
    height: 30px;
    display: inline-block;
    padding-left: 30px;
    font-weight: 800;
    font-size: 30px;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.tablet} {
        padding-left: 80px;
    }
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.mobile} {
        padding-left: 0;
    }
    &:after {
        content: '';
        display: block;
        bottom: 0;
        left: 50%;
        width: 0%;
        height: 2px;
        background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Palette.red_1};
        transition: all ease-in-out 0.2s;
    }
    &:hover::after {
        width: 100%;
    }
`;
_c5 = SmallHeader;
const Highlighted = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.span`
    box-shadow: ${props => props.color ? props.color : _styles_theme__WEBPACK_IMPORTED_MODULE_2__.Palette.black_2};
    background: ${props => props.color ? props.color : _styles_theme__WEBPACK_IMPORTED_MODULE_2__.Palette.black_2};
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.FontColor.white};
`;
_c6 = Highlighted;
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    justify-content: space-around;
    align-items: center;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.tablet} {
        justify-content: center;
    }
    .arrow {
        font-size: 50px;
        margin: 0 10px;
        color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Palette.gray_1};
    }
`;
_c7 = ImageWrapper;
const DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 20px;
    right: 20px;
    text-align: center;
    color: black;
    cursor: pointer;
`;
_c8 = DeleteButton;

const CommandDescription = ({
  func
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Animation, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DescriptionWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DeleteButton, {
        onClick: func,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_6__.default, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faTimes,
          color: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.Palette.black_1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "header",
        children: "\uCEE4\uB9E8\uB4DC \uC77D\uB294\uBC95"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "description",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallHeader, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Highlighted, {
            color: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.Palette.red_1,
            children: "\uBC84\uD2BC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sentence, {
          children: " LP = \uC67C\uC190, RP = \uC624\uB978\uC190"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sentence, {
          children: "LK = \uC67C\uBC1C, RK = \uC624\uB978\uBC1C "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sentence, {
          children: [" AL = LP+LK, ", '  ', "AR = RP+RK "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sentence, {
          children: [" AP = LP+RP, ", '  ', "AK = LK+ RK "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "command",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallHeader, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Highlighted, {
            color: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.Palette.green_2,
            children: "\uB808\uBC84"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sentence, {
          children: " \uC22B\uC790\uB294 \uB808\uBC84\uC758 \uBC29\uD5A5\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4 "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _img_Frame1_png__WEBPACK_IMPORTED_MODULE_4__.default,
            alt: 'numberpad'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "arrow",
            children: '=>'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _img_Frame2_png__WEBPACK_IMPORTED_MODULE_3__.default,
            alt: 'arrows'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "example",
        children: "\uB530\uB77C\uC11C 3RP\uB294 \uC624\uB978\uCABD \uC544\uB798 \uB300\uAC01\uC120\uC73C\uB85C \uB808\uBC84\uB97C \uBC00\uACE0 \uC624\uB978\uC190\uC744 \uB204\uB974\uB77C\uB294 \uC758\uBBF8\uC785\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 145,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Overlay__WEBPACK_IMPORTED_MODULE_5__.default, {
    func: func
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 177,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 144,
  columnNumber: 5
}, undefined);

_c9 = CommandDescription;
/* harmony default export */ __webpack_exports__["default"] = (CommandDescription);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Animation");
$RefreshReg$(_c2, "Wrapper");
$RefreshReg$(_c3, "DescriptionWrapper");
$RefreshReg$(_c4, "Sentence");
$RefreshReg$(_c5, "SmallHeader");
$RefreshReg$(_c6, "Highlighted");
$RefreshReg$(_c7, "ImageWrapper");
$RefreshReg$(_c8, "DeleteButton");
$RefreshReg$(_c9, "CommandDescription");

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

/***/ "./components/PageComponents/Info.tsx":
/*!********************************************!*\
  !*** ./components/PageComponents/Info.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\PageComponents\\Info.tsx";



const InfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
    display: flex;
    height: 100%;
    width: 300px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.desktop} {
        height: 50px;
        line-height: 49px;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Palette.black_1};
    }
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.tablet} {
        height: 100px;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }
    h2 {
        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.desktop} {
            margin: 0;
            font-size: 20px;
        }
    }

    .link {
        display: flex;
        flex-direction: column;
        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.desktop} {
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    }
    .info_img {
        text-align: center;
        color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.FontColor.black};
        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.desktop} {
            color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.FontColor.white};
        }
        img {
            width: 80%;
            @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.desktop} {
                display: none;
            }
        }
    }
    .link a {
        display: flex;
        text-decoration: none;
        align-items: center;
        &,
        &:active,
        &:link,
        &:visited {
            color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.FontColor.black};
        }
        padding-bottom: 15px;
        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.desktop} {
            padding-left: 10px;
            padding-bottom: 0;
            &,
            &:active,
            &:link,
            &:visited {
                color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.FontColor.white};
            }
        }
    }

    .link a img {
        display: flex;
        width: 1.5em;
        height: 1.5em;
        align-items: center;
        margin-left: 10px;
        border-radius: 30%;
        margin-right: 10px;

        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.desktop} {
            width: 2em;
            height: 2em;
            text-align: center;
        }
        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.tablet} {
            width: 1.5em;
            height: 1.5em;
        }
        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.mobile} {
            width: 1em;
            height: 1em;
        }
    }
`;
_c = InfoWrapper;

const Info = ({
  data,
  name
}) => {
  const info = data === undefined ? null : data[0];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InfoWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "info_img",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: process.env.PUBLIC_URL + `/img/${name}.png`,
        alt: "char"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "link",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: info === null || info === void 0 ? void 0 : info.punish,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: process.env.PUBLIC_URL + `/img/youtube.png`,
          alt: "youtube"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, undefined), "\uB51C\uCE90"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: info === null || info === void 0 ? void 0 : info.combo,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: process.env.PUBLIC_URL + `/img/youtube.png`,
          alt: "youtube"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, undefined), "\uCF64\uBCF4"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: info === null || info === void 0 ? void 0 : info.dc,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: process.env.PUBLIC_URL + `/img/dc.png`,
          alt: "dc"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, undefined), "\uCCA0\uB9C8\uAC24 \uCE90\uB9AD\uD130 \uD301"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 9
  }, undefined);
};

_c2 = Info;
/* harmony default export */ __webpack_exports__["default"] = (Info);

var _c, _c2;

$RefreshReg$(_c, "InfoWrapper");
$RefreshReg$(_c2, "Info");

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

/***/ "./components/PageComponents/Loading.tsx":
/*!***********************************************!*\
  !*** ./components/PageComponents/Loading.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingWithOverlay": function() { return /* binding */ LoadingWithOverlay; },
/* harmony export */   "LoadingWithoutOverlay": function() { return /* binding */ LoadingWithoutOverlay; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Overlay */ "./components/Overlay.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\PageComponents\\Loading.tsx";




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    svg {
        z-index: 9999;
    }
`;
_c = Wrapper;
const WithoutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    svg {
        z-index: 9999;
    }
`;
_c2 = WithoutWrapper;

const LoadingWithOverlay = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100px",
        height: "100px",
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
          cx: "50",
          cy: "50",
          fill: "none",
          stroke: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.Palette.red_1,
          strokeWidth: "10",
          r: "35",
          strokeDasharray: "164.93361431346415 56.97787143782138",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            repeatCount: "indefinite",
            dur: "1s",
            values: "0 50 50;360 50 50",
            keyTimes: "0;1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Overlay__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_c3 = LoadingWithOverlay;

const LoadingWithoutOverlay = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WithoutWrapper, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100px",
        height: "100px",
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
          cx: "50",
          cy: "50",
          fill: "none",
          stroke: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.Palette.red_1,
          strokeWidth: "10",
          r: "35",
          strokeDasharray: "164.93361431346415 56.97787143782138",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            repeatCount: "indefinite",
            dur: "1s",
            values: "0 50 50;360 50 50",
            keyTimes: "0;1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

_c4 = LoadingWithoutOverlay;


var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "WithoutWrapper");
$RefreshReg$(_c3, "LoadingWithOverlay");
$RefreshReg$(_c4, "LoadingWithoutOverlay");

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

/***/ "./components/PageComponents/Main.tsx":
/*!********************************************!*\
  !*** ./components/PageComponents/Main.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _TapComponents_TabControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TapComponents/TabControl */ "./components/TapComponents/TabControl.tsx");
/* harmony import */ var _TapComponents_TabPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TapComponents/TabPanel */ "./components/TapComponents/TabPanel.tsx");
/* harmony import */ var _TapComponents_TabInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TapComponents/TabInfo */ "./components/TapComponents/TabInfo.tsx");
/* harmony import */ var _utils_TableOrder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/TableOrder */ "./utils/TableOrder.ts");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\PageComponents\\Main.tsx";







const MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div`
    display: flex;
    height: 100%;
    width: 100%;
    background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Palette.white_1};

    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.desktop} {
        height: calc(100% - 50px);
    }
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.tablet} {
        height: calc(100% - 100px);
    }
`;
_c = MainWrapper;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;
_c2 = Wrapper;

const Main = ({
  data,
  tableIndex,
  handleIndex
}) => {
  const PunishInfo = [{
    tag: {
      description: 'standing',
      detail: _utils_TableOrder__WEBPACK_IMPORTED_MODULE_6__.TableOrder.standing
    },
    header: '선자세 딜캐',
    columns: ['프레임', '커맨드', '데미지', '판정', '히트이득', '설명'],
    data: data.standing
  }, {
    tag: {
      description: 'up',
      detail: _utils_TableOrder__WEBPACK_IMPORTED_MODULE_6__.TableOrder.up
    },
    header: '앉은자세 딜캐',
    columns: ['프레임', '커맨드', '데미지', '판정', '히트이득', '설명'],
    data: data.up
  }];
  const ThrowInfo = [{
    tag: {
      description: 'Throw',
      detail: _utils_TableOrder__WEBPACK_IMPORTED_MODULE_6__.TableOrder.Throw
    },
    header: '잡기',
    columns: ['커맨드', '데미지', '프레임', '설명', '잡기풀기'],
    data: data.Throw
  }];
  const ComboInfo = [{
    tag: {
      description: 'combo',
      detail: _utils_TableOrder__WEBPACK_IMPORTED_MODULE_6__.TableOrder.combo
    },
    header: '콤보',
    columns: ['커맨드', '설명'],
    data: data.combo
  }, {
    tag: {
      description: 'Extrahit',
      detail: _utils_TableOrder__WEBPACK_IMPORTED_MODULE_6__.TableOrder.Extrahit
    },
    header: '추가타',
    columns: ['커맨드', '설명'],
    data: data.Extrahit
  }, {
    tag: {
      description: 'WallCombo',
      detail: _utils_TableOrder__WEBPACK_IMPORTED_MODULE_6__.TableOrder.WallCombo
    },
    header: '벽콤보',
    columns: ['커맨드', '설명'],
    data: data.WallCombo
  }];
  const PatternMainInfo = [{
    tag: {
      description: 'MainMove',
      detail: _utils_TableOrder__WEBPACK_IMPORTED_MODULE_6__.TableOrder.MainMove
    },
    header: '주력기',
    columns: ['커맨드', '별명', '데미지', '프레임', '가드프레임', '히트프레임', '판정', '설명'],
    data: data.MainMove
  }, {
    tag: {
      description: 'Pattern',
      detail: _utils_TableOrder__WEBPACK_IMPORTED_MODULE_6__.TableOrder.Pattern
    },
    header: '패턴/날먹',
    columns: ['커맨드', '설명', '파해'],
    data: data.Pattern
  }];
  const arr = ['딜레이캐치', '콤보', '잡기', '주력기, 패턴'];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainWrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabControl__WEBPACK_IMPORTED_MODULE_3__.default, {
        handleIndex: handleIndex,
        value: tableIndex,
        arr: arr
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabPanel__WEBPACK_IMPORTED_MODULE_4__.default, {
        value: tableIndex,
        index: 0,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabInfo__WEBPACK_IMPORTED_MODULE_5__.default, {
          data: PunishInfo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabPanel__WEBPACK_IMPORTED_MODULE_4__.default, {
        value: tableIndex,
        index: 1,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabInfo__WEBPACK_IMPORTED_MODULE_5__.default, {
          data: ComboInfo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabPanel__WEBPACK_IMPORTED_MODULE_4__.default, {
        value: tableIndex,
        index: 2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabInfo__WEBPACK_IMPORTED_MODULE_5__.default, {
          data: ThrowInfo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabPanel__WEBPACK_IMPORTED_MODULE_4__.default, {
        value: tableIndex,
        index: 3,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabInfo__WEBPACK_IMPORTED_MODULE_5__.default, {
          data: PatternMainInfo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 9
  }, undefined);
};

_c3 = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c, _c2, _c3;

$RefreshReg$(_c, "MainWrapper");
$RefreshReg$(_c2, "Wrapper");
$RefreshReg$(_c3, "Main");

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

/***/ "./components/TableComponents/Table.tsx":
/*!**********************************************!*\
  !*** ./components/TableComponents/Table.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableControl": function() { return /* binding */ TableControl; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableRow */ "./components/TableComponents/TableRow.tsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _TableEdits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableEdits */ "./components/TableComponents/TableEdits.tsx");
/* harmony import */ var _hooks_useInputValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useInputValue */ "./hooks/useInputValue.ts");
/* harmony import */ var _styles_components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/components/Icon */ "./styles/components/Icon.tsx");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/UserContext */ "./context/UserContext.tsx");
/* harmony import */ var _context_ModalContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/ModalContext */ "./context/ModalContext.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\TableComponents\\Table.tsx",
    _s = $RefreshSig$();












const TableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div`
    margin-bottom: 20px;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_6__.Device.mobile} {
        font-size: 15px;
    }
`;
_c = TableWrapper;
const TableContent = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.table`
    width: 90%;
    border-collapse: collapse;
    border-radius: 10px;
    margin: 10px auto;

    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_6__.Device.desktop} {
        width: 100%;
    }
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_6__.Device.mobile} {
        width: 720px;
    }
`;
_c2 = TableContent;
const TableHead = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.th`
    text-align: left;
    padding: 10px;
    border-collapse: collapse;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_6__.Device.mobile} {
        padding: 5px;
    }
`;
_c3 = TableHead;
const TableRow = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.tr`
    margin-bottom: -1px;
    border: 1px solid ${_styles_theme__WEBPACK_IMPORTED_MODULE_6__.Palette.border_1};
    box-sizing: border-box;
`;
_c4 = TableRow;
const TableControl = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.td`
    width: 30px;
    text-align: center;
    cursor: pointer;
`;
const TableAdd = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.tr`
    border: none;
    width: 100%;
    td {
        text-align: center;
        font-size: 2rem;
    }
`;
_c5 = TableAdd;

const Table = ({
  item
}) => {
  _s();

  const {
    header,
    columns,
    data,
    tag
  } = item;
  const initialValue = tag.detail.reduce((acc, cur) => {
    acc[cur] = '';
    return acc;
  }, {});
  let {
    char
  } = (0,react_router__WEBPACK_IMPORTED_MODULE_10__.useParams)();
  const charName = char.substring(1);
  const colSpan = tag.detail.length;
  const modalDispatch = (0,_context_ModalContext__WEBPACK_IMPORTED_MODULE_8__.useModalDispatch)();
  const {
    0: edit,
    1: setEdit
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    values,
    setValue,
    handleChange
  } = (0,_hooks_useInputValue__WEBPACK_IMPORTED_MODULE_4__.default)(initialValue);
  const modalProps = {
    description: tag.description,
    values: values,
    charName: charName
  };
  const user = (0,_context_UserContext__WEBPACK_IMPORTED_MODULE_7__.useUserData)();

  const handleModal = () => {
    if (user !== null) {
      modalDispatch({
        type: 'ADD',
        payload: modalProps
      });
    } else {
      modalDispatch({
        type: 'NOTUSER'
      });
    }

    setEdit(false);
    setValue(initialValue);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableContent, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableRow, {
          children: columns.map((column, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHead, {
            children: column
          }, header + index + column, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [data.map((row, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_2__.default, {
          row: row,
          charName: charName,
          tag: tag.description
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 25
        }, undefined)), edit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableRow, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableEdits__WEBPACK_IMPORTED_MODULE_3__.default, {
            setEdit: setEdit,
            values: values,
            handleChange: handleChange,
            charName: charName,
            handleModal: handleModal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableAdd, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            onClick: () => setEdit(true),
            colSpan: colSpan,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_5__.default, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faPlus,
              color: _styles_theme__WEBPACK_IMPORTED_MODULE_6__.Palette.gray_1,
              hovercolor: _styles_theme__WEBPACK_IMPORTED_MODULE_6__.Palette.gray_2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 9
  }, undefined);
};

_s(Table, "EOz9nn0Phxi8tuQjZDLOSeoNBSk=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_10__.useParams, _context_ModalContext__WEBPACK_IMPORTED_MODULE_8__.useModalDispatch, _hooks_useInputValue__WEBPACK_IMPORTED_MODULE_4__.default, _context_UserContext__WEBPACK_IMPORTED_MODULE_7__.useUserData];
});

_c6 = Table;
/* harmony default export */ __webpack_exports__["default"] = (_c7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Table));

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "TableWrapper");
$RefreshReg$(_c2, "TableContent");
$RefreshReg$(_c3, "TableHead");
$RefreshReg$(_c4, "TableRow");
$RefreshReg$(_c5, "TableAdd");
$RefreshReg$(_c6, "Table");
$RefreshReg$(_c7, "%default%");

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

/***/ "./components/TableComponents/TableEdits.tsx":
/*!***************************************************!*\
  !*** ./components/TableComponents/TableEdits.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _styles_components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/components/Icon */ "./styles/components/Icon.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\TableComponents\\TableEdits.tsx";





const TableEditBox = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.td`
    border-collapse: collapse;
    height: 70px;
`;
_c = TableEditBox;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.textarea`
    width: 100%;
    min-width: 75px;
    display: block;
    height: 150px;
    border: none;
    border-left: 1px solid ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Palette.gray_1};
    margin-left: -1px;
    padding: 10px 5px;
    font-size: 14px;
    resize: none;
    overflow: auto;
    font: inherit;
    box-sizing: border-box;
    &:focus {
        outline: none;
    }
    &::-webkit-scrollbar {
        width: 0em;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(104, 104, 104, 0.3);
    }

    &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
    }
`;
_c2 = Input;

const TableEdit = ({
  value,
  name,
  handleChange
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableEditBox, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {
      placeholder: "\uC785\uB825",
      value: value,
      name: name,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, undefined);
};

_c3 = TableEdit;
const EditTableControl = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.td`
    width: 30px;
    text-align: center;
    cursor: pointer;
    background-color: ${props => props.backcolor};
`;
_c4 = EditTableControl;

const TableEdits = ({
  values,
  charName,
  handleChange,
  setEdit,
  handleModal
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [Object.entries(values).map(([key, value]) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableEdit, {
      value: value,
      name: key,
      handleChange: handleChange
    }, key + charName, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EditTableControl, {
      backcolor: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.Palette.green_1,
      onClick: handleModal,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_3__.default, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCheck
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EditTableControl, {
      backcolor: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.Palette.red_1,
      onClick: () => setEdit(false),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_3__.default, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTimes
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_c5 = TableEdits;
/* harmony default export */ __webpack_exports__["default"] = (TableEdits);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "TableEditBox");
$RefreshReg$(_c2, "Input");
$RefreshReg$(_c3, "TableEdit");
$RefreshReg$(_c4, "EditTableControl");
$RefreshReg$(_c5, "TableEdits");

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

/***/ "./components/TableComponents/TableRow.tsx":
/*!*************************************************!*\
  !*** ./components/TableComponents/TableRow.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_ModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/ModalContext */ "./context/ModalContext.tsx");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/UserContext */ "./context/UserContext.tsx");
/* harmony import */ var _hooks_useInputValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useInputValue */ "./hooks/useInputValue.ts");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _styles_components_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/components/Icon */ "./styles/components/Icon.tsx");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Table */ "./components/TableComponents/Table.tsx");
/* harmony import */ var _TableEdits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TableEdits */ "./components/TableComponents/TableEdits.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\TableComponents\\TableRow.tsx",
    _s = $RefreshSig$();











const TableRow = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.tr`
    margin-bottom: -1px;
    border-bottom: 1px solid #d1d1d1;
    box-sizing: border-box;
    height: 50px;
`;
_c = TableRow;
const TableDataBox = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.td`
    border-collapse: collapse;
    padding: 10px;
    overflow: hidden;
    max-width: 350px;

    min-width: ${props => props.isState ? '200px' : '50px'};
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_5__.Device.mobile} {
        padding: 2px;
    }
    div {
        height: ${props => props.toggle ? '100%  ' : '100%'};
        overflow-wrap: break-word;
        white-space: pre-wrap;
        vertical-align: middle;
        word-break: normal;
    }
`;
_c2 = TableDataBox;

const TableData = ({
  content,
  toggle,
  isState
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableDataBox, {
    toggle: toggle,
    isState: isState,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, undefined);
};

_c3 = TableData;

const TableRowData = ({
  row,
  charName,
  tag
}) => {
  _s();

  const {
    0: edit,
    1: setEdit
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    values,
    handleChange,
    setValue
  } = (0,_hooks_useInputValue__WEBPACK_IMPORTED_MODULE_4__.default)(row);
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setValue(row);
    setEdit(false);
  }, [row, setValue]);
  const modalProps = {
    description: tag,
    oldvalues: row,
    values: values,
    charName: charName
  };
  const modalDispatch = (0,_context_ModalContext__WEBPACK_IMPORTED_MODULE_2__.useModalDispatch)();
  const user = (0,_context_UserContext__WEBPACK_IMPORTED_MODULE_3__.useUserData)();

  const handleDelete = () => {
    if (user !== null) modalDispatch({
      type: 'DELETE',
      payload: modalProps
    });else modalDispatch({
      type: 'NOTUSER'
    });
    setValue(row);
    setEdit(false);
  };

  const handleUpdate = () => {
    console.log(modalProps);
    if (user !== null) modalDispatch({
      type: 'EDIT',
      payload: modalProps
    });else modalDispatch({
      type: 'NOTUSER'
    });
    setValue(row);
    setEdit(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableRow, {
    onClick: () => setToggle(!toggle),
    children: edit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableEdits__WEBPACK_IMPORTED_MODULE_8__.default, {
        setEdit: setEdit,
        values: values,
        handleChange: handleChange,
        charName: charName,
        handleModal: handleUpdate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }, undefined)
    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [Object.entries(row).map(([key, value], i) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableData, {
          content: value,
          toggle: toggle,
          isState: false
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 29
        }, undefined);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_7__.TableControl, {
        onClick: () => setEdit(!edit),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_6__.default, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faEdit,
          color: _styles_theme__WEBPACK_IMPORTED_MODULE_5__.Palette.green_1,
          hovercolor: _styles_theme__WEBPACK_IMPORTED_MODULE_5__.Palette.green_2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_7__.TableControl, {
        onClick: handleDelete,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_6__.default, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faEraser,
          color: _styles_theme__WEBPACK_IMPORTED_MODULE_5__.Palette.red_1,
          hovercolor: _styles_theme__WEBPACK_IMPORTED_MODULE_5__.Palette.red_2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 21
      }, undefined)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 9
  }, undefined);
};

_s(TableRowData, "2vfanGAefILYnIqDL9fK0b3wKj4=", false, function () {
  return [_hooks_useInputValue__WEBPACK_IMPORTED_MODULE_4__.default, _context_ModalContext__WEBPACK_IMPORTED_MODULE_2__.useModalDispatch, _context_UserContext__WEBPACK_IMPORTED_MODULE_3__.useUserData];
});

_c4 = TableRowData;
/* harmony default export */ __webpack_exports__["default"] = (_c5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(TableRowData));

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "TableRow");
$RefreshReg$(_c2, "TableDataBox");
$RefreshReg$(_c3, "TableData");
$RefreshReg$(_c4, "TableRowData");
$RefreshReg$(_c5, "%default%");

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

/***/ "./components/TapComponents/TabControl.tsx":
/*!*************************************************!*\
  !*** ./components/TapComponents/TabControl.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\TapComponents\\TabControl.tsx";


const TabControlBox = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
    height: 70px;
    width: 500px;
    display: flex;
    justify-content: center;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Device.mobile} {
        width: 100%;
    }
`;
_c = TabControlBox;
const TabControlItemBox = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
    flex: 1 0;
    text-align: center;
    line-height: 70px;
    cursor: pointer;
    &::after {
        content: '';
        display: block;
        width: ${props => props.selected ? '100%' : '0%'};
        height: 2px;
        left: 50%;
        bottom: 0;
        background-color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Palette.red_1};
        transition: all ease-in-out 0.2s;
    }
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Device.mobile} {
        font-size: 15px;
    }
`;
_c2 = TabControlItemBox;

const TabControlItem = props => {
  const {
    content,
    handleIndex,
    index,
    selected
  } = props;

  const handleChange = () => {
    handleIndex(index);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabControlItemBox, {
    selected: selected,
    onClick: handleChange,
    children: content
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, undefined);
};

_c3 = TabControlItem;

const TabControl = ({
  value,
  handleIndex,
  arr
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabControlBox, {
    children: arr.map((item, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabControlItem, {
        selected: index === value,
        content: item,
        handleIndex: handleIndex,
        index: index
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }, undefined);
};

_c4 = TabControl;
/* harmony default export */ __webpack_exports__["default"] = (TabControl);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "TabControlBox");
$RefreshReg$(_c2, "TabControlItemBox");
$RefreshReg$(_c3, "TabControlItem");
$RefreshReg$(_c4, "TabControl");

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

/***/ "./components/TapComponents/TabInfo.tsx":
/*!**********************************************!*\
  !*** ./components/TapComponents/TabInfo.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TableComponents_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TableComponents/Table */ "./components/TableComponents/Table.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\TapComponents\\TabInfo.tsx";



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
    display: flex;
    flex-direction: column;
    h2 {
        margin-left: 100px;
    }
`;
_c = Wrapper;

const TabInfo = ({
  data
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
    children: data.map((item, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableComponents_Table__WEBPACK_IMPORTED_MODULE_1__.default, {
        item: item
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 24
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, undefined);
};

_c2 = TabInfo;
/* harmony default export */ __webpack_exports__["default"] = (TabInfo);

var _c, _c2;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "TabInfo");

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

/***/ "./components/TapComponents/TabPanel.tsx":
/*!***********************************************!*\
  !*** ./components/TapComponents/TabPanel.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\TapComponents\\TabPanel.tsx";

const TabPanelBlock = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
    ${({
  shown
}) => shown ? `width:100%;  height:90%;` : 'width:0%'};
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;
_c = TabPanelBlock;

function TabPanel(props) {
  const {
    children,
    value,
    index
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabPanelBlock, {
    id: `vertical-tabpanel-${index}`,
    "aria-labelledby": `vertical-tab-${index}`,
    shown: value === index,
    children: value === index && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [children, " "]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

_c2 = TabPanel;
/* harmony default export */ __webpack_exports__["default"] = (TabPanel);

var _c, _c2;

$RefreshReg$(_c, "TabPanelBlock");
$RefreshReg$(_c2, "TabPanel");

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

/***/ "./context/DBContextFunc.ts":
/*!**********************************!*\
  !*** ./context/DBContextFunc.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadData": function() { return /* binding */ LoadData; },
/* harmony export */   "Rename": function() { return /* binding */ Rename; },
/* harmony export */   "AddNewCharacter": function() { return /* binding */ AddNewCharacter; },
/* harmony export */   "AddNewProps": function() { return /* binding */ AddNewProps; },
/* harmony export */   "AddData": function() { return /* binding */ AddData; },
/* harmony export */   "DeleteData": function() { return /* binding */ DeleteData; },
/* harmony export */   "EditData": function() { return /* binding */ EditData; },
/* harmony export */   "AddProperty": function() { return /* binding */ AddProperty; },
/* harmony export */   "RemoveProperty": function() { return /* binding */ RemoveProperty; }
/* harmony export */ });
/* harmony import */ var C_Users_kkkk_Documents_GitHub_Made_tekken_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _firebaseInit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebaseInit */ "./firebaseInit.tsx");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _utils_TableOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/TableOrder */ "./utils/TableOrder.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_kkkk_Documents_GitHub_Made_tekken_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




async function LoadData(char, dispatch) {
  const sortbyKey = (a, b) => {
    if (a.hasOwnProperty('frame') && b.hasOwnProperty('frame')) {
      if (a['frame'] === b['frame']) {
        return a['command'] < b['command'] ? -1 : 1;
      } else {
        return parseInt(a['frame']) < parseInt(b['frame']) ? -1 : 1;
      }
    } else {
      return a['command'] < b['command'] ? 1 : -1;
    }
  };

  const sortbyCounter = (a, b) => {
    const av = a['command'].includes('(C)');
    const bv = b['command'].includes('(C)');

    if (av === bv) {
      return a['command'] < b['command'] ? -1 : 1;
    } else if (av === false) {
      return -1;
    } else {
      return 1;
    }
  };

  const order = (arr, category) => {
    const orderByContent = category => {
      const order = _utils_TableOrder__WEBPACK_IMPORTED_MODULE_3__.TableOrder[category];
      return function (a, b) {
        return order.indexOf(a) - order.indexOf(b);
      };
    };

    return arr.map(cur => Object.keys(cur).sort(orderByContent(category)).reduce((obj, key) => {
      obj[key] = cur[key];
      return obj;
    }, {}));
  };

  dispatch({
    type: 'LOADING'
  });

  try {
    const data = await _firebaseInit__WEBPACK_IMPORTED_MODULE_1__.default.collection('Character').doc(char).get().then(snap => {
      return snap.data();
    });
    const newObj = Object.keys(data).reduce((acc, cur) => {
      if (cur === 'Info') {
        acc[cur] = data[cur];
        return acc;
      }

      if (['Extrahit', 'combo', 'WallCombo', 'Pattern', 'MainMove', 'Throw'].includes(cur)) {
        acc[cur] = order(data[cur], cur).sort(sortbyCounter); // 알파벳순 카운터순
      } else if (['standing', 'up'].includes(cur)) {
        acc[cur] = order(data[cur], cur).sort(sortbyKey); //프레임순
      }

      return acc;
    }, {});
    console.log(data['combo']);
    console.log(newObj['combo']);
    dispatch({
      type: 'LOADED',
      payload: newObj
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: 'ERROR',
      error: err
    });
  }
}
_c = LoadData;

async function UpdateHistory(char, data, uid, type) {
  try {
    const history = {
      char: char,
      data: data,
      time: firebase__WEBPACK_IMPORTED_MODULE_2__.default.firestore.Timestamp.fromDate(new Date())
    };
    const document = await _firebaseInit__WEBPACK_IMPORTED_MODULE_1__.default.collection('User').doc(uid).get();

    if (document.exists && document) {
      await document.ref.update({
        [type]: firebase__WEBPACK_IMPORTED_MODULE_2__.default.firestore.FieldValue.arrayUnion(history)
      });
    } else {
      await _firebaseInit__WEBPACK_IMPORTED_MODULE_1__.default.collection('User').doc(uid).set({
        [type]: [history]
      });
    }
  } catch {
    console.log('유저 히스토리 업데이트 실패');
  }
}

_c2 = UpdateHistory;

async function AddFunc(char, data, tag) {
  try {
    await _firebaseInit__WEBPACK_IMPORTED_MODULE_1__.default.collection('Character').doc(char).update({
      [tag]: firebase__WEBPACK_IMPORTED_MODULE_2__.default.firestore.FieldValue.arrayUnion(data)
    });
  } catch (err) {
    alert('정보를 추가하는데 실패했습니다');
    console.log('에러정보 ' + err);
  }
}

_c3 = AddFunc;

async function DeleteFunc(char, data, tag) {
  try {
    await _firebaseInit__WEBPACK_IMPORTED_MODULE_1__.default.collection('Character').doc(char).update({
      [tag]: firebase__WEBPACK_IMPORTED_MODULE_2__.default.firestore.FieldValue.arrayRemove(data)
    });
  } catch (err) {
    alert('정보를 삭제하는데 실패했습니다');
    console.log('에러정보 ' + err);
  }
}

_c4 = DeleteFunc;

async function UpdateCharsFunc(order, category) {
  async function UpdatePropsFunc(order, id, category) {
    try {
      const data = await _firebaseInit__WEBPACK_IMPORTED_MODULE_1__.default.collection('Character').doc(id).get().then(snap => {
        return snap.data();
      });
      const newData = order(data[category]);

      try {
        await _firebaseInit__WEBPACK_IMPORTED_MODULE_1__.default.collection('Character').doc(id).update({
          [category]: newData
        });
      } catch (err) {
        alert(id + '의 정보를 받아오는데 실패했습니다');
        console.log('에러 정보' + err);
      }
    } catch (err) {
      alert(id + '의 정보를 업데이트하는데 실패했습니다');
      console.log('에러 정보' + err);
    }
  }

  try {
    const documents = await _firebaseInit__WEBPACK_IMPORTED_MODULE_1__.default.collection('Character').get();
    documents.forEach(document => {
      UpdatePropsFunc(order, document.id, category);
    });
  } catch (err) {
    alert('캐릭터들의 정보를 받아오는데 실패했습니다');
    console.log('에러 정보' + err);
  }
}

_c5 = UpdateCharsFunc;

async function UpdatePropsFunc(id, property) {
  try {
    try {
      await _firebaseInit__WEBPACK_IMPORTED_MODULE_1__.default.collection('Character').doc(id).update({
        [property]: []
      });
    } catch (err) {
      alert(id + '의 정보를 받아오는데 실패했습니다');
      console.log('에러 정보' + err);
    }
  } catch (err) {
    alert(id + '의 정보를 업데이트하는데 실패했습니다');
    console.log('에러 정보' + err);
  }
}

_c6 = UpdatePropsFunc;
async function Rename() {
  const data = await _firebaseInit__WEBPACK_IMPORTED_MODULE_1__.default.collection('Character').doc('Cladio').get().then(snap => {
    return snap.data();
  });
  await _firebaseInit__WEBPACK_IMPORTED_MODULE_1__.default.collection('Character').doc('Claudio').set(data);
}
_c7 = Rename;
async function AddNewCharacter() {
  const name = 'Leroy';

  try {
    await _firebaseInit__WEBPACK_IMPORTED_MODULE_1__.default.collection('Character').doc(name).set({});
    const arr = ['MainMove', 'standing', 'up', 'Throw', 'combo', 'WallCombo', 'Extrahit', 'Pattern', 'Info'];
    arr.forEach(item => {
      UpdatePropsFunc(name, item);
    });
  } catch (err) {
    alert('실패');
  }
}
_c8 = AddNewCharacter;
async function AddNewProps() {
  try {
    const documents = await _firebaseInit__WEBPACK_IMPORTED_MODULE_1__.default.collection('Character').get();
    documents.forEach(document => {
      UpdatePropsFunc(document.id, 'MainMove');
    });
  } catch (err) {
    alert('캐릭터들의 정보를 받아오는데 실패했습니다');
    console.log('에러 정보' + err);
  }
}
_c9 = AddNewProps;
const AddData = async (tag, data, char, uid) => {
  await AddFunc(char, data, tag);
  await UpdateHistory(char, data, uid, 'ADD');
};
_c10 = AddData;
async function DeleteData(tag, data, char, uid) {
  await DeleteFunc(char, data, tag);
  await UpdateHistory(char, data, uid, 'Delete');
}
_c11 = DeleteData;
async function EditData(tag, old, newData, char, uid) {
  await DeleteFunc(char, old, tag);
  await AddFunc(char, newData, tag);
  await UpdateHistory(char, {
    old,
    newData
  }, uid, 'Edit');
}
_c12 = EditData;
async function AddProperty(category, property) {
  const order = data => {
    return data.map(item => {
      return item.hasOwnProperty(property) ? item : _objectSpread(_objectSpread({}, item), {}, {
        [property]: ''
      });
    });
  };

  UpdateCharsFunc(order, category);
}
_c13 = AddProperty;
async function RemoveProperty(category, property) {
  const order = data => {
    return data.map(item => {
      return Object.keys(item).filter(key => key !== property).reduce((acc, cur) => {
        acc[cur] = item[cur];
        return acc;
      }, {});
    });
  };

  UpdateCharsFunc(order, category);
}
_c14 = RemoveProperty;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;

$RefreshReg$(_c, "LoadData");
$RefreshReg$(_c2, "UpdateHistory");
$RefreshReg$(_c3, "AddFunc");
$RefreshReg$(_c4, "DeleteFunc");
$RefreshReg$(_c5, "UpdateCharsFunc");
$RefreshReg$(_c6, "UpdatePropsFunc");
$RefreshReg$(_c7, "Rename");
$RefreshReg$(_c8, "AddNewCharacter");
$RefreshReg$(_c9, "AddNewProps");
$RefreshReg$(_c10, "AddData");
$RefreshReg$(_c11, "DeleteData");
$RefreshReg$(_c12, "EditData");
$RefreshReg$(_c13, "AddProperty");
$RefreshReg$(_c14, "RemoveProperty");

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

/***/ "./hooks/useInputValue.ts":
/*!********************************!*\
  !*** ./hooks/useInputValue.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useEditValue; }
/* harmony export */ });
/* harmony import */ var C_Users_kkkk_Documents_GitHub_Made_tekken_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_kkkk_Documents_GitHub_Made_tekken_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function useEditValue(initialValue) {
  _s();

  const {
    0: values,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValue);

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setValue(_objectSpread(_objectSpread({}, values), {}, {
      [name]: value
    }));
  };

  return {
    values,
    handleChange,
    setValue
  };
}

_s(useEditValue, "SXMz8pajd0lWMI0U+ULQ5Tz86Bo=");

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
/* harmony import */ var _char__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./char */ "./pages/char.tsx");
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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_char__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
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
/* harmony import */ var _components_PageComponents_Info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageComponents/Info */ "./components/PageComponents/Info.tsx");
/* harmony import */ var _components_PageComponents_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PageComponents/Main */ "./components/PageComponents/Main.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_DBContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/DBContext */ "./context/DBContext.tsx");
/* harmony import */ var _context_DBContextFunc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/DBContextFunc */ "./context/DBContextFunc.ts");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _components_PageComponents_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PageComponents/Loading */ "./components/PageComponents/Loading.tsx");
/* harmony import */ var _components_PageComponents_CommandDescription__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PageComponents/CommandDescription */ "./components/PageComponents/CommandDescription.tsx");
/* harmony import */ var _styles_components_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/components/Icon */ "./styles/components/Icon.tsx");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\pages\\char.tsx",
    _s = $RefreshSig$();













const CharWrap = styled_components__WEBPACK_IMPORTED_MODULE_11__.default.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_7__.Device.desktop} {
        flex-direction: column;
    }
`;
_c = CharWrap;
const DescriptionButton = styled_components__WEBPACK_IMPORTED_MODULE_11__.default.div`
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 30px;
    cursor: pointer;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_7__.Device.desktop} {
        top: 5px;
        right: 20px;
    }
`;
_c2 = DescriptionButton;

const Char = () => {
  _s();

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    charName
  } = router.query;
  const {
    charProps,
    loading
  } = (0,_context_DBContext__WEBPACK_IMPORTED_MODULE_5__.useDBData)();
  const tempDispatch = (0,_context_DBContext__WEBPACK_IMPORTED_MODULE_5__.useDBDispatch)();
  const {
    0: description,
    1: setDescription
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: tableIndex,
    1: setTableIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_context_DBContextFunc__WEBPACK_IMPORTED_MODULE_6__.LoadData)(charName, tempDispatch); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charName]);
  const handleDescription = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setDescription(false);
  }, []);
  const handleIndex = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(index => {
    setTableIndex(index);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CharWrap, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DescriptionButton, {
      onClick: () => setDescription(true),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_10__.default, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faQuestionCircle,
        color: _styles_theme__WEBPACK_IMPORTED_MODULE_7__.Palette.gray_1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, undefined), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageComponents_Loading__WEBPACK_IMPORTED_MODULE_8__.LoadingWithoutOverlay, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageComponents_CommandDescription__WEBPACK_IMPORTED_MODULE_9__.default, {
        func: handleDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageComponents_Info__WEBPACK_IMPORTED_MODULE_2__.default, {
          data: charProps === null || charProps === void 0 ? void 0 : charProps.Info,
          name: charName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageComponents_Main__WEBPACK_IMPORTED_MODULE_3__.default, {
          data: charProps,
          tableIndex: tableIndex,
          handleIndex: handleIndex
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 25
        }, undefined)]
      }, void 0, true)]
    }, void 0, true), 'hi']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, undefined);
};

_s(Char, "rVBgXw3nkV3KJjFkHv4CdP8ehv4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter, _context_DBContext__WEBPACK_IMPORTED_MODULE_5__.useDBData, _context_DBContext__WEBPACK_IMPORTED_MODULE_5__.useDBDispatch];
});

_c3 = Char;
/* harmony default export */ __webpack_exports__["default"] = (Char);

var _c, _c2, _c3;

$RefreshReg$(_c, "CharWrap");
$RefreshReg$(_c2, "DescriptionButton");
$RefreshReg$(_c3, "Char");

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

/***/ "./utils/TableOrder.ts":
/*!*****************************!*\
  !*** ./utils/TableOrder.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableOrder": function() { return /* binding */ TableOrder; },
/* harmony export */   "Category": function() { return /* binding */ Category; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const TableOrder = {
  standing: ['frame', 'command', 'damage', 'range', 'hitframe', 'state'],
  up: ['frame', 'command', 'damage', 'range', 'hitframe', 'state'],
  Throw: ['command', 'damage', 'frame', 'state', 'way'],
  combo: ['command', 'state'],
  Extrahit: ['command', 'state'],
  WallCombo: ['command', 'state'],
  MainMove: ['command', 'nickname', 'damage', 'frame', 'guardframe', 'hitframe', 'range', 'state'],
  Pattern: ['command', 'state', 'win']
};
const Category = ['MainMove', 'standing', 'up', 'Throw', 'combo', 'WallCombo', 'Extrahit', 'Pattern', 'Info'];

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

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBrowserHistory": function() { return /* binding */ createBrowserHistory; },
/* harmony export */   "createHashHistory": function() { return /* binding */ createHashHistory; },
/* harmony export */   "createMemoryHistory": function() { return /* binding */ createMemoryHistory; },
/* harmony export */   "createLocation": function() { return /* binding */ createLocation; },
/* harmony export */   "locationsAreEqual": function() { return /* binding */ locationsAreEqual; },
/* harmony export */   "parsePath": function() { return /* binding */ parsePath; },
/* harmony export */   "createPath": function() { return /* binding */ createPath; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/history/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/esm/resolve-pathname.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/esm/value-equal.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0,resolve_pathname__WEBPACK_IMPORTED_MODULE_1__.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0,value_equal__WEBPACK_IMPORTED_MODULE_2__.default)(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(prompt == null, 'A history supports only one prompt at a time') : 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__.default)(false, 'Browser history needs a DOM') : 0 : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_4__.default)(false, 'Hash history needs a DOM') : 0 : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(state === undefined, 'Hash history cannot push state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(state === undefined, 'Hash history cannot replace state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ "./node_modules/history/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/history/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/mini-create-react-context/dist/esm/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/mini-create-react-context/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (true) {
            (0,tiny_warning__WEBPACK_IMPORTED_MODULE_3__.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired), _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = (react__WEBPACK_IMPORTED_MODULE_0___default().createContext) || createReactContext;

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/mini-create-react-context/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/mini-create-react-context/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/mini-create-react-context/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/mini-create-react-context/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/mini-create-react-context/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./img/Frame1.png":
/*!************************!*\
  !*** ./img/Frame1.png ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/img/Frame1.aca45ab71c8f81b9dc7a5d4e378ccbf8.png","height":420,"width":420,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAT0lEQVR42jWMAQqAMAwD9//HKm4Kri2Jh2OEHuGgaenX5UmKFm7l2/ZF7APdkhLcYhkxKF1QQylERwwtHftFErQK8Y8+gjo1hUiXQwGnwh9+Zn4UVVpIoQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./img/Frame2.png":
/*!************************!*\
  !*** ./img/Frame2.png ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/img/Frame2.d7ea9c8fc86698815fcbc2ea49bd1551.png","height":420,"width":420,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEX////8/P3v7+/s7ePn5+fn5+bl5eXV1dX////8/P36+vr6+vnv7+/t7eTs7ePn5+fn5+bl5eXe3t7d3d3V1dX4CkA4AAAACHRSTlP+/v7+/v7+/rgCr24AAAA/SURBVHjaFcpBEoAgDATBFQQnEIUg/3+rZZ9brxOBL/lmDrYLmlkDxbB8H2dVTMuPlRD0w7r4cxm6kpZTg7Q+ZTkCmfa8xZcAAAAASUVORK5CYII="});

/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isarray = __webpack_require__(/*! isarray */ "./node_modules/path-to-regexp/node_modules/isarray/index.js")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "./node_modules/path-to-regexp/node_modules/isarray/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/path-to-regexp/node_modules/isarray/index.js ***!
  \*******************************************************************/
/***/ (function(module) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/react-router/esm/react-router.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/esm/react-router.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemoryRouter": function() { return /* binding */ MemoryRouter; },
/* harmony export */   "Prompt": function() { return /* binding */ Prompt; },
/* harmony export */   "Redirect": function() { return /* binding */ Redirect; },
/* harmony export */   "Route": function() { return /* binding */ Route; },
/* harmony export */   "Router": function() { return /* binding */ Router; },
/* harmony export */   "StaticRouter": function() { return /* binding */ StaticRouter; },
/* harmony export */   "Switch": function() { return /* binding */ Switch; },
/* harmony export */   "__HistoryContext": function() { return /* binding */ historyContext; },
/* harmony export */   "__RouterContext": function() { return /* binding */ context; },
/* harmony export */   "generatePath": function() { return /* binding */ generatePath; },
/* harmony export */   "matchPath": function() { return /* binding */ matchPath; },
/* harmony export */   "useHistory": function() { return /* binding */ useHistory; },
/* harmony export */   "useLocation": function() { return /* binding */ useLocation; },
/* harmony export */   "useParams": function() { return /* binding */ useParams; },
/* harmony export */   "useRouteMatch": function() { return /* binding */ useRouteMatch; },
/* harmony export */   "withRouter": function() { return /* binding */ withRouter; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-router/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var mini_create_react_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mini-create-react-context */ "./node_modules/mini-create-react-context/dist/esm/index.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-router/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-router/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__);













// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = (0,mini_create_react_context__WEBPACK_IMPORTED_MODULE_3__.default)();
  context.displayName = name;
  return context;
};

var historyContext =
/*#__PURE__*/
createNamedContext("Router-History");

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext$1 = function createNamedContext(name) {
  var context = (0,mini_create_react_context__WEBPACK_IMPORTED_MODULE_3__.default)();
  context.displayName = name;
  return context;
};

var context =
/*#__PURE__*/
createNamedContext$1("Router");

/**
 * The public API for putting history on context.
 */

var Router =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default().createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  Router.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    history: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
    staticContext: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(prevProps.history === this.props.history, "You cannot change <Router history>") : 0;
  };
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_10__.createMemoryHistory)(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  MemoryRouter.propTypes = {
    initialEntries: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
    initialIndex: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    keyLength: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
  };

  MemoryRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : 0;
  };
}

var Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You should not use <Prompt> outside a <Router>") : 0 : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (true) {
  var messageType = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]);
  Prompt.propTypes = {
    when: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp__WEBPACK_IMPORTED_MODULE_5___default().compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You should not use <Redirect> outside a <Router>") : 0 : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(prevProps.to);

        if (!(0,history__WEBPACK_IMPORTED_MODULE_10__.locationsAreEqual)(prevLocation, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (true) {
  Redirect.propTypes = {
    push: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    from: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    to: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_5___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You should not use <Route> outside a <Router>") : 0 : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : 0 : children : component ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : 0 : null);
    });
  };

  return Route;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  Route.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)]),
    component: function component(props, propName) {
      if (props[propName] && !(0,react_is__WEBPACK_IMPORTED_MODULE_6__.isValidElementType)(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    path: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string))]),
    render: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    sensitive: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    strict: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
  };

  Route.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : 0;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : 0;
  };
}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : (0,history__WEBPACK_IMPORTED_MODULE_10__.createPath)(location);
}

function staticHandler(methodName) {
  return function () {
      true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You cannot %s with <StaticRouter>", methodName) : 0 ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__.default)(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, (0,history__WEBPACK_IMPORTED_MODULE_10__.createLocation)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Router, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  StaticRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    context: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)])
  };

  StaticRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : 0;
  };
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context) {
      !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You should not use <Switch> outside a <Router>") : 0 : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_1___default().Children.forEach(_this.props.children, function (child) {
        if (match == null && react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

if (true) {
  Switch.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : 0;
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_9__.default)(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : 0;
  };
}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__.default)(props, ["wrappedComponentRef"]);

    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(context.Consumer, null, function (context) {
      !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You should not use <" + displayName + " /> outside a <Router>") : 0 : void 0;
      return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.default)({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (true) {
    C.propTypes = {
      wrappedComponentRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)])
    };
  }

  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default()(C, Component);
}

var useContext = (react__WEBPACK_IMPORTED_MODULE_1___default().useContext);
function useHistory() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You must use React >= 16.8 in order to use useHistory()") : 0 : void 0;
  }

  return useContext(historyContext);
}
function useLocation() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You must use React >= 16.8 in order to use useLocation()") : 0 : void 0;
  }

  return useContext(context).location;
}
function useParams() {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You must use React >= 16.8 in order to use useParams()") : 0 : void 0;
  }

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (true) {
    !(typeof useContext === "function") ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_11__.default)(false, "You must use React >= 16.8 in order to use useRouteMatch()") : 0 : void 0;
  }

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (true) {
  if (typeof window !== "undefined") {
    var global = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global[key] && global[key] !== "esm") {
      var initialBuildName = buildNames[global[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global[key] = "esm";
  }
}


//# sourceMappingURL=react-router.js.map


/***/ }),

/***/ "./node_modules/react-router/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-router/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/react-router/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-router/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/react-router/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/react-router/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/react-router/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/react-router/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-router/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
/*!***************************************************************!*\
  !*** ./node_modules/resolve-pathname/esm/resolve-pathname.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);


/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./node_modules/value-equal/esm/value-equal.js":
/*!*****************************************************!*\
  !*** ./node_modules/value-equal/esm/value-equal.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PdmVybGF5LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9Db21tYW5kRGVzY3JpcHRpb24udHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL0luZm8udHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL0xvYWRpbmcudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL01haW4udHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RhYmxlQ29tcG9uZW50cy9UYWJsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFibGVDb21wb25lbnRzL1RhYmxlRWRpdHMudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RhYmxlQ29tcG9uZW50cy9UYWJsZVJvdy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFwQ29tcG9uZW50cy9UYWJDb250cm9sLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYXBDb21wb25lbnRzL1RhYkluZm8udHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RhcENvbXBvbmVudHMvVGFiUGFuZWwudHN4Iiwid2VicGFjazovL19OX0UvLi9jb250ZXh0L0RCQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvREJDb250ZXh0RnVuYy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9Nb2RhbENvbnRleHQudHN4Iiwid2VicGFjazovL19OX0UvLi9ob29rcy91c2VJbnB1dFZhbHVlLnRzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL1RhYmxlT3JkZXIudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2VzbS9oaXN0b3J5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pbmktY3JlYXRlLXJlYWN0LWNvbnRleHQvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taW5pLWNyZWF0ZS1yZWFjdC1jb250ZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWluaS1jcmVhdGUtcmVhY3QtY29udGV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2ltZy9GcmFtZTEucG5nIiwid2VicGFjazovL19OX0UvLi9pbWcvRnJhbWUyLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcGF0aC10by1yZWdleHAvbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXNtL3JlYWN0LXJvdXRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2VzbS9yZXNvbHZlLXBhdGhuYW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdGlueS1pbnZhcmlhbnQvZGlzdC90aW55LWludmFyaWFudC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90aW55LXdhcm5pbmcvZGlzdC90aW55LXdhcm5pbmcuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvZXNtL3ZhbHVlLWVxdWFsLmpzIl0sIm5hbWVzIjpbIk92ZXJsYXlXcmFwcGVyIiwic3R5bGVkIiwiUGFsZXR0ZSIsIk92ZXJsYXkiLCJmdW5jIiwiQW5pbWF0aW9uIiwiV3JhcHBlciIsIkRldmljZSIsIkRlc2NyaXB0aW9uV3JhcHBlciIsIlNlbnRlbmNlIiwiU21hbGxIZWFkZXIiLCJIaWdobGlnaHRlZCIsInByb3BzIiwiY29sb3IiLCJGb250Q29sb3IiLCJJbWFnZVdyYXBwZXIiLCJEZWxldGVCdXR0b24iLCJDb21tYW5kRGVzY3JpcHRpb24iLCJmYVRpbWVzIiwiYmxhY2tfMSIsImZyYW1lMSIsImZyYW1lMiIsIkluZm9XcmFwcGVyIiwiSW5mbyIsImRhdGEiLCJuYW1lIiwiaW5mbyIsInVuZGVmaW5lZCIsInByb2Nlc3MiLCJlbnYiLCJQVUJMSUNfVVJMIiwicHVuaXNoIiwiY29tYm8iLCJkYyIsIldpdGhvdXRXcmFwcGVyIiwiTG9hZGluZ1dpdGhPdmVybGF5IiwiTG9hZGluZ1dpdGhvdXRPdmVybGF5IiwiTWFpbldyYXBwZXIiLCJNYWluIiwidGFibGVJbmRleCIsImhhbmRsZUluZGV4IiwiUHVuaXNoSW5mbyIsInRhZyIsImRlc2NyaXB0aW9uIiwiZGV0YWlsIiwiVGFibGVPcmRlciIsInN0YW5kaW5nIiwiaGVhZGVyIiwiY29sdW1ucyIsInVwIiwiVGhyb3dJbmZvIiwiVGhyb3ciLCJDb21ib0luZm8iLCJFeHRyYWhpdCIsIldhbGxDb21ibyIsIlBhdHRlcm5NYWluSW5mbyIsIk1haW5Nb3ZlIiwiUGF0dGVybiIsImFyciIsIlRhYmxlV3JhcHBlciIsIlRhYmxlQ29udGVudCIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiVGFibGVDb250cm9sIiwiVGFibGVBZGQiLCJUYWJsZSIsIml0ZW0iLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJjaGFyIiwidXNlUGFyYW1zIiwiY2hhck5hbWUiLCJzdWJzdHJpbmciLCJjb2xTcGFuIiwibGVuZ3RoIiwibW9kYWxEaXNwYXRjaCIsInVzZU1vZGFsRGlzcGF0Y2giLCJlZGl0Iiwic2V0RWRpdCIsInVzZVN0YXRlIiwidmFsdWVzIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJ1c2VFZGl0VmFsdWUiLCJtb2RhbFByb3BzIiwidXNlciIsInVzZVVzZXJEYXRhIiwiaGFuZGxlTW9kYWwiLCJ0eXBlIiwicGF5bG9hZCIsIm1hcCIsImNvbHVtbiIsImluZGV4Iiwicm93IiwiZmFQbHVzIiwiZ3JheV8yIiwiUmVhY3QiLCJUYWJsZUVkaXRCb3giLCJJbnB1dCIsIlRhYmxlRWRpdCIsInZhbHVlIiwiRWRpdFRhYmxlQ29udHJvbCIsImJhY2tjb2xvciIsIlRhYmxlRWRpdHMiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwiZmFDaGVjayIsIlRhYmxlRGF0YUJveCIsImlzU3RhdGUiLCJ0b2dnbGUiLCJUYWJsZURhdGEiLCJjb250ZW50IiwiVGFibGVSb3dEYXRhIiwic2V0VG9nZ2xlIiwidXNlRWZmZWN0Iiwib2xkdmFsdWVzIiwiaGFuZGxlRGVsZXRlIiwiaGFuZGxlVXBkYXRlIiwiY29uc29sZSIsImxvZyIsImkiLCJmYUVkaXQiLCJncmVlbl8yIiwiZmFFcmFzZXIiLCJyZWRfMiIsIlRhYkNvbnRyb2xCb3giLCJUYWJDb250cm9sSXRlbUJveCIsInNlbGVjdGVkIiwiVGFiQ29udHJvbEl0ZW0iLCJUYWJDb250cm9sIiwiVGFiSW5mbyIsIlRhYlBhbmVsQmxvY2siLCJzaG93biIsIlRhYlBhbmVsIiwiY2hpbGRyZW4iLCJJbml0aWFsU3RhdGUiLCJjaGFyUHJvcHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJEYXRhQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJEYXRhRGlzcGF0Y2hDb250ZXh0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiU3RhdGVQcm92aWRlciIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVzZURCRGF0YSIsInVzZUNvbnRleHQiLCJFcnJvciIsInVzZURCRGlzcGF0Y2giLCJMb2FkRGF0YSIsInNvcnRieUtleSIsImEiLCJiIiwiaGFzT3duUHJvcGVydHkiLCJwYXJzZUludCIsInNvcnRieUNvdW50ZXIiLCJhdiIsImluY2x1ZGVzIiwiYnYiLCJvcmRlciIsImNhdGVnb3J5Iiwib3JkZXJCeUNvbnRlbnQiLCJpbmRleE9mIiwia2V5cyIsInNvcnQiLCJvYmoiLCJkYiIsImRvYyIsImdldCIsInRoZW4iLCJzbmFwIiwibmV3T2JqIiwiZXJyIiwiVXBkYXRlSGlzdG9yeSIsInVpZCIsImhpc3RvcnkiLCJ0aW1lIiwiZmlyZWJhc2UiLCJEYXRlIiwiZG9jdW1lbnQiLCJleGlzdHMiLCJyZWYiLCJ1cGRhdGUiLCJzZXQiLCJBZGRGdW5jIiwiYWxlcnQiLCJEZWxldGVGdW5jIiwiVXBkYXRlQ2hhcnNGdW5jIiwiVXBkYXRlUHJvcHNGdW5jIiwiaWQiLCJuZXdEYXRhIiwiZG9jdW1lbnRzIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiUmVuYW1lIiwiQWRkTmV3Q2hhcmFjdGVyIiwiQWRkTmV3UHJvcHMiLCJBZGREYXRhIiwiRGVsZXRlRGF0YSIsIkVkaXREYXRhIiwib2xkIiwiQWRkUHJvcGVydHkiLCJSZW1vdmVQcm9wZXJ0eSIsImZpbHRlciIsIm9wZW4iLCJtb2RhbEFjdGlvbiIsIk1vZGFsQ29udGV4dCIsIk1vZGFsRGlzcGF0Y2hDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwiTW9kYWxQcm92aWRlciIsInVzZU1vZGFsRGF0YSIsImUiLCJ0YXJnZXQiLCJQYWdlQ29udGVudCIsIk1lbnVCdXR0b25CbG9jayIsIkN1c3RvbUljb24iLCJBcHAiLCJoYW5kbGVUb2dnbGUiLCJ1c2VDYWxsYmFjayIsImZhQmFycyIsIkNoYXJXcmFwIiwiRGVzY3JpcHRpb25CdXR0b24iLCJDaGFyIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJ0ZW1wRGlzcGF0Y2giLCJzZXREZXNjcmlwdGlvbiIsInNldFRhYmxlSW5kZXgiLCJoYW5kbGVEZXNjcmlwdGlvbiIsImZhUXVlc3Rpb25DaXJjbGUiLCJncmF5XzEiLCJDYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBR0MsMERBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCQywwREFBZ0I7QUFDbEMsQ0FSQTtLQUFNRixjOztBQVVOLE1BQU1HLE9BQU8sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFxQztBQUNqRCxzQkFBTyw4REFBQyxjQUFEO0FBQWdCLFdBQU8sRUFBRUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsQ0FGRDs7TUFBTUQsTztBQUlOLCtEQUFlQSxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxRQUFRO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsTUFBTTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsK0RBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDMUUvQixtQkFBbUIsYUFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDWnpCLG1CQUFtQixhQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsK0RBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbkJ2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVDQUF1QztBQUN2QztBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLCtEQUFlLFVBQVUsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQ0YzExYWYyMDNlYjU5NjAwMTlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWxldHRlIH0gZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBPdmVybGF5V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogJHtQYWxldHRlLm92ZXJsYXl9O1xyXG5gO1xyXG5cclxuY29uc3QgT3ZlcmxheSA9ICh7IGZ1bmMgfTogeyBmdW5jPzogKCkgPT4gdm9pZCB9KSA9PiB7XHJcbiAgICByZXR1cm4gPE92ZXJsYXlXcmFwcGVyIG9uQ2xpY2s9e2Z1bmN9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3ZlcmxheTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERldmljZSwgUGFsZXR0ZSwgRm9udENvbG9yIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IGZyYW1lMiBmcm9tICcuLi8uLi9pbWcvRnJhbWUyLnBuZyc7XHJcbmltcG9ydCBmcmFtZTEgZnJvbSAnLi4vLi4vaW1nL0ZyYW1lMS5wbmcnO1xyXG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuLi9PdmVybGF5JztcclxuaW1wb3J0IEN1c3RvbUljb24gZnJvbSAnLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvSWNvbic7XHJcbmltcG9ydCB7IGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5cclxuY29uc3QgQW5pbWF0aW9uID0gc3R5bGVkLmRpdmBcclxuICAgIGFuaW1hdGlvbjogZmFkZUluQW5pbWF0aW9uIDAuM3M7XHJcblxyXG4gICAgQGtleWZyYW1lcyBmYWRlSW5BbmltYXRpb24ge1xyXG4gICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDIwMHB4KTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UudGFibGV0fSB7XHJcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxNzVweCk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBEZXNjcmlwdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogJHtQYWxldHRlLndoaXRlXzF9O1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLnRhYmxldH0ge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIEBtZWRpYSAke0RldmljZS50YWJsZXR9IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbW1hbmQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBAbWVkaWEgJHtEZXZpY2UudGFibGV0fSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTI1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmV4YW1wbGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbmA7XHJcbmNvbnN0IFNlbnRlbmNlID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIEBtZWRpYSAke0RldmljZS50YWJsZXR9IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuYDtcclxuY29uc3QgU21hbGxIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIEBtZWRpYSAke0RldmljZS50YWJsZXR9IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UubW9iaWxlfSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHtQYWxldHRlLnJlZF8xfTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4ycztcclxuICAgIH1cclxuICAgICY6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEhpZ2hsaWdodGVkID0gc3R5bGVkLnNwYW48eyBjb2xvcj86IHN0cmluZyB9PmBcclxuICAgIGJveC1zaGFkb3c6ICR7KHByb3BzKSA9PiAocHJvcHMuY29sb3IgPyBwcm9wcy5jb2xvciA6IFBhbGV0dGUuYmxhY2tfMil9O1xyXG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IChwcm9wcy5jb2xvciA/IHByb3BzLmNvbG9yIDogUGFsZXR0ZS5ibGFja18yKX07XHJcbiAgICBjb2xvcjogJHtGb250Q29sb3Iud2hpdGV9O1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UudGFibGV0fSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYXJyb3cge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICBjb2xvcjogJHtQYWxldHRlLmdyYXlfMX07XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBEZWxldGVCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuY29uc3QgQ29tbWFuZERlc2NyaXB0aW9uID0gKHsgZnVuYyB9OiB7IGZ1bmM/OiAoKSA9PiB2b2lkIH0pID0+IChcclxuICAgIDxBbmltYXRpb24+XHJcbiAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxEZXNjcmlwdGlvbldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uIG9uQ2xpY2s9e2Z1bmN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDdXN0b21JY29uIGljb249e2ZhVGltZXN9IGNvbG9yPXtQYWxldHRlLmJsYWNrXzF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0RlbGV0ZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+7Luk66eo65OcIOydveuKlOuylTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbWFsbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhpZ2hsaWdodGVkIGNvbG9yPXtQYWxldHRlLnJlZF8xfT7rsoTtirw8L0hpZ2hsaWdodGVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU21hbGxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbnRlbmNlPiBMUCA9IOyZvOyGkCwgUlAgPSDsmKTrpbjshpA8L1NlbnRlbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZW50ZW5jZT5MSyA9IOyZvOuwnCwgUksgPSDsmKTrpbjrsJwgPC9TZW50ZW5jZT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VudGVuY2U+IEFMID0gTFArTEssIHsnICAnfUFSID0gUlArUksgPC9TZW50ZW5jZT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VudGVuY2U+IEFQID0gTFArUlAsIHsnICAnfUFLID0gTEsrIFJLIDwvU2VudGVuY2U+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWFuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbWFsbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhpZ2hsaWdodGVkIGNvbG9yPXtQYWxldHRlLmdyZWVuXzJ9PuugiOuyhDwvSGlnaGxpZ2h0ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbWFsbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VudGVuY2U+IOyIq+yekOuKlCDroIjrsoTsnZgg67Cp7Zal7J2EIOydmOuvuO2VqeuLiOuLpCA8L1NlbnRlbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmcmFtZTF9IGFsdD17J251bWJlcnBhZCd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIj57Jz0+J308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZyYW1lMn0gYWx0PXsnYXJyb3dzJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg65Sw65287IScIDNSUOuKlCDsmKTrpbjsqr0g7JWE656YIOuMgOqwgeyEoOycvOuhnCDroIjrsoTrpbwg67CA6rOgIOyYpOuluOyGkOydhFxyXG4gICAgICAgICAgICAgICAgICAgIOuIhOultOudvOuKlCDsnZjrr7jsnoXri4jri6QuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9EZXNjcmlwdGlvbldyYXBwZXI+XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgICAgIDxPdmVybGF5IGZ1bmM9e2Z1bmN9IC8+XHJcbiAgICA8L0FuaW1hdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1hbmREZXNjcmlwdGlvbjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbmZvUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcy9DaGFyUHJvcHMnO1xyXG5pbXBvcnQgeyBEZXZpY2UsIEZvbnRDb2xvciwgUGFsZXR0ZSB9IGZyb20gJy4uLy4uL3N0eWxlcy90aGVtZSc7XHJcbmNvbnN0IEluZm9XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ5cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAke1BhbGV0dGUuYmxhY2tfMX07XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UudGFibGV0fSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgaDIge1xyXG4gICAgICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubGluayB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbmZvX2ltZyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAke0ZvbnRDb2xvci5ibGFja307XHJcbiAgICAgICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICAgICAgY29sb3I6ICR7Rm9udENvbG9yLndoaXRlfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGluayBhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICYsXHJcbiAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgJjpsaW5rLFxyXG4gICAgICAgICY6dmlzaXRlZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke0ZvbnRDb2xvci5ibGFja307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICYsXHJcbiAgICAgICAgICAgICY6YWN0aXZlLFxyXG4gICAgICAgICAgICAmOmxpbmssXHJcbiAgICAgICAgICAgICY6dmlzaXRlZCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtGb250Q29sb3Iud2hpdGV9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5saW5rIGEgaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxLjVlbTtcclxuICAgICAgICBoZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuXHJcbiAgICAgICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICAgICAgd2lkdGg6IDJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhICR7RGV2aWNlLnRhYmxldH0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMS41ZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMS41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAke0RldmljZS5tb2JpbGV9IHtcclxuICAgICAgICAgICAgd2lkdGg6IDFlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIEluZm9JbnRlcmZhY2Uge1xyXG4gICAgZGF0YTogSW5mb1Byb3BzW10gfCB1bmRlZmluZWQ7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEluZm8gPSAoeyBkYXRhLCBuYW1lIH06IEluZm9JbnRlcmZhY2UpID0+IHtcclxuICAgIGNvbnN0IGluZm8gPSBkYXRhID09PSB1bmRlZmluZWQgPyBudWxsIDogZGF0YVswXTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEluZm9XcmFwcGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9faW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9pbWcvJHtuYW1lfS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImNoYXJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxoMj57bmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17aW5mbz8ucHVuaXNofVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9pbWcveW91dHViZS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ5b3V0dWJlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIOuUnOy6kFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9e2luZm8/LmNvbWJvfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvaW1nL3lvdXR1YmUucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwieW91dHViZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICDsvaTrs7RcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPXtpbmZvPy5kY30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL2ltZy9kYy5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJkY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICDssqDrp4jqsKQg7LqQ66at7YSwIO2MgVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0luZm9XcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZm87XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBQYWxldHRlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi4vT3ZlcmxheSc7XHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgc3ZnIHtcclxuICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgV2l0aG91dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgc3ZnIHtcclxuICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG9hZGluZ1dpdGhPdmVybGF5ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3g9XCI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN5PVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT17UGFsZXR0ZS5yZWRfMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHI9XCIzNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheT1cIjE2NC45MzM2MTQzMTM0NjQxNSA1Ni45Nzc4NzE0Mzc4MjEzOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicm90YXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9XCIwIDUwIDUwOzM2MCA1MCA1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGVUcmFuc2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgICAgICAgICA8T3ZlcmxheSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IExvYWRpbmdXaXRob3V0T3ZlcmxheSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFdpdGhvdXRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjeD1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3k9XCI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPXtQYWxldHRlLnJlZF8xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcj1cIjM1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiMTY0LjkzMzYxNDMxMzQ2NDE1IDU2Ljk3Nzg3MTQzNzgyMTM4XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyb3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz1cIjAgNTAgNTA7MzYwIDUwIDUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvYW5pbWF0ZVRyYW5zZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L1dpdGhvdXRXcmFwcGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IHsgTG9hZGluZ1dpdGhPdmVybGF5LCBMb2FkaW5nV2l0aG91dE92ZXJsYXkgfTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoYXJQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzL0NoYXJQcm9wcyc7XHJcbmltcG9ydCB7IERldmljZSwgUGFsZXR0ZSB9IGZyb20gJy4uLy4uL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCBUYWJDb250cm9sIGZyb20gJy4uL1RhcENvbXBvbmVudHMvVGFiQ29udHJvbCc7XHJcbmltcG9ydCBUYWJQYW5lbCBmcm9tICcuLi9UYXBDb21wb25lbnRzL1RhYlBhbmVsJztcclxuaW1wb3J0IFRhYkluZm8gZnJvbSAnLi4vVGFwQ29tcG9uZW50cy9UYWJJbmZvJztcclxuaW1wb3J0IHsgVGFibGVPcmRlciB9IGZyb20gJy4uLy4uL3V0aWxzL1RhYmxlT3JkZXInO1xyXG5jb25zdCBNYWluV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAke1BhbGV0dGUud2hpdGVfMX07XHJcblxyXG4gICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhICR7RGV2aWNlLnRhYmxldH0ge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmludGVyZmFjZSBNYWluUHJvcHMge1xyXG4gICAgZGF0YTogQ2hhclByb3BzO1xyXG4gICAgdGFibGVJbmRleDogbnVtYmVyO1xyXG4gICAgaGFuZGxlSW5kZXg6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBNYWluID0gKHsgZGF0YSwgdGFibGVJbmRleCwgaGFuZGxlSW5kZXggfTogTWFpblByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBQdW5pc2hJbmZvID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFnOiB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3N0YW5kaW5nJyxcclxuICAgICAgICAgICAgICAgIGRldGFpbDogVGFibGVPcmRlci5zdGFuZGluZyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGVhZGVyOiAn7ISg7J6Q7IS4IOuUnOy6kCcsXHJcbiAgICAgICAgICAgIGNvbHVtbnM6IFsn7ZSE66CI7J6EJywgJ+y7pOunqOuTnCcsICfrjbDrr7jsp4AnLCAn7YyQ7KCVJywgJ+2eiO2KuOydtOuTnScsICfshKTrqoUnXSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YS5zdGFuZGluZyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFnOiB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3VwJyxcclxuICAgICAgICAgICAgICAgIGRldGFpbDogVGFibGVPcmRlci51cCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGVhZGVyOiAn7JWJ7J2A7J6Q7IS4IOuUnOy6kCcsXHJcbiAgICAgICAgICAgIGNvbHVtbnM6IFsn7ZSE66CI7J6EJywgJ+y7pOunqOuTnCcsICfrjbDrr7jsp4AnLCAn7YyQ7KCVJywgJ+2eiO2KuOydtOuTnScsICfshKTrqoUnXSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YS51cCxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBUaHJvd0luZm8gPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0YWc6IHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhyb3cnLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBUYWJsZU9yZGVyLlRocm93LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoZWFkZXI6ICfsnqHquLAnLFxyXG4gICAgICAgICAgICBjb2x1bW5zOiBbJ+y7pOunqOuTnCcsICfrjbDrr7jsp4AnLCAn7ZSE66CI7J6EJywgJ+yEpOuqhScsICfsnqHquLDtkoDquLAnXSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YS5UaHJvdyxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBDb21ib0luZm8gPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0YWc6IHsgZGVzY3JpcHRpb246ICdjb21ibycsIGRldGFpbDogVGFibGVPcmRlci5jb21ibyB9LFxyXG4gICAgICAgICAgICBoZWFkZXI6ICfsvaTrs7QnLFxyXG4gICAgICAgICAgICBjb2x1bW5zOiBbJ+y7pOunqOuTnCcsICfshKTrqoUnXSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YS5jb21ibyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFnOiB7IGRlc2NyaXB0aW9uOiAnRXh0cmFoaXQnLCBkZXRhaWw6IFRhYmxlT3JkZXIuRXh0cmFoaXQgfSxcclxuICAgICAgICAgICAgaGVhZGVyOiAn7LaU6rCA7YOAJyxcclxuICAgICAgICAgICAgY29sdW1uczogWyfsu6Trp6jrk5wnLCAn7ISk66qFJ10sXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEuRXh0cmFoaXQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhZzogeyBkZXNjcmlwdGlvbjogJ1dhbGxDb21ibycsIGRldGFpbDogVGFibGVPcmRlci5XYWxsQ29tYm8gfSxcclxuICAgICAgICAgICAgaGVhZGVyOiAn67K97L2k67O0JyxcclxuICAgICAgICAgICAgY29sdW1uczogWyfsu6Trp6jrk5wnLCAn7ISk66qFJ10sXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEuV2FsbENvbWJvLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IFBhdHRlcm5NYWluSW5mbyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhZzoge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdNYWluTW92ZScsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IFRhYmxlT3JkZXIuTWFpbk1vdmUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhlYWRlcjogJ+yjvOugpeq4sCcsXHJcbiAgICAgICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAgICAgICfsu6Trp6jrk5wnLFxyXG4gICAgICAgICAgICAgICAgJ+uzhOuqhScsXHJcbiAgICAgICAgICAgICAgICAn642w66+47KeAJyxcclxuICAgICAgICAgICAgICAgICftlITroIjsnoQnLFxyXG4gICAgICAgICAgICAgICAgJ+qwgOuTnO2UhOugiOyehCcsXHJcbiAgICAgICAgICAgICAgICAn7Z6I7Yq47ZSE66CI7J6EJyxcclxuICAgICAgICAgICAgICAgICftjJDsoJUnLFxyXG4gICAgICAgICAgICAgICAgJ+yEpOuqhScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEuTWFpbk1vdmUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhZzogeyBkZXNjcmlwdGlvbjogJ1BhdHRlcm4nLCBkZXRhaWw6IFRhYmxlT3JkZXIuUGF0dGVybiB9LFxyXG4gICAgICAgICAgICBoZWFkZXI6ICftjKjthLQv64Kg66i5JyxcclxuICAgICAgICAgICAgY29sdW1uczogWyfsu6Trp6jrk5wnLCAn7ISk66qFJywgJ+2MjO2VtCddLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLlBhdHRlcm4sXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgYXJyID0gWyfrlJzroIjsnbTsupDsuZgnLCAn7L2k67O0JywgJ+yeoeq4sCcsICfso7zroKXquLAsIO2MqO2EtCddO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW5XcmFwcGVyPlxyXG4gICAgICAgICAgICA8V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxUYWJDb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5kZXg9e2hhbmRsZUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YWJsZUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGFycj17YXJyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dGFibGVJbmRleH0gaW5kZXg9ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJJbmZvIGRhdGE9e1B1bmlzaEluZm99IC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt0YWJsZUluZGV4fSBpbmRleD17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkluZm8gZGF0YT17Q29tYm9JbmZvfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dGFibGVJbmRleH0gaW5kZXg9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJJbmZvIGRhdGE9e1Rocm93SW5mb30gLz5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9e3RhYmxlSW5kZXh9IGluZGV4PXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiSW5mbyBkYXRhPXtQYXR0ZXJuTWFpbkluZm99IC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICAgICAgPC9NYWluV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgVGFibGVJdGVtUHJvcHMgfSBmcm9tICcuLi9UYXBDb21wb25lbnRzL1RhYkluZm8nO1xyXG5pbXBvcnQgVGFibGVSb3dEYXRhIGZyb20gJy4vVGFibGVSb3cnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgVGFibGVFZGl0cyBmcm9tICcuL1RhYmxlRWRpdHMnO1xyXG5pbXBvcnQgdXNlRWRpdFZhbHVlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUlucHV0VmFsdWUnO1xyXG5pbXBvcnQgQ3VzdG9tSWNvbiBmcm9tICcuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9JY29uJztcclxuaW1wb3J0IHsgZmFQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgRGV2aWNlLCBQYWxldHRlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IHsgdXNlVXNlckRhdGEgfSBmcm9tICcuLi8uLi9jb250ZXh0L1VzZXJDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlTW9kYWxEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2NvbnRleHQvTW9kYWxDb250ZXh0JztcclxuXHJcbmNvbnN0IFRhYmxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLm1vYmlsZX0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFRhYmxlQ29udGVudCA9IHN0eWxlZC50YWJsZWBcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG5cclxuICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UubW9iaWxlfSB7XHJcbiAgICAgICAgd2lkdGg6IDcyMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGFibGVIZWFkID0gc3R5bGVkLnRoYFxyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLm1vYmlsZX0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuYDtcclxuY29uc3QgVGFibGVSb3cgPSBzdHlsZWQudHJgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtQYWxldHRlLmJvcmRlcl8xfTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBUYWJsZUNvbnRyb2wgPSBzdHlsZWQudGRgXHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuY29uc3QgVGFibGVBZGQgPSBzdHlsZWQudHJgXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIGRhdGFQcm9wcyB7XHJcbiAgICBpdGVtOiBUYWJsZUl0ZW1Qcm9wcztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSB0YWdQcm9wZXJ0eSB7XHJcbiAgICBjb21tYW5kPzogc3RyaW5nO1xyXG4gICAgZnJhbWU/OiBzdHJpbmc7XHJcbiAgICBkYW1hZ2U/OiBzdHJpbmc7XHJcbiAgICB3YXk/OiBzdHJpbmc7XHJcbiAgICBzdGF0ZT86IHN0cmluZztcclxuICAgIHJhbmdlPzogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFRhYmxlID0gKHsgaXRlbSB9OiBkYXRhUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgaGVhZGVyLCBjb2x1bW5zLCBkYXRhLCB0YWcgfSA9IGl0ZW07XHJcbiAgICBjb25zdCBpbml0aWFsVmFsdWU6IHRhZ1Byb3BlcnR5ID0gdGFnLmRldGFpbC5yZWR1Y2UoKGFjYzogYW55LCBjdXIpID0+IHtcclxuICAgICAgICBhY2NbY3VyXSA9ICcnO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCB7fSk7XHJcbiAgICBsZXQgeyBjaGFyIH06IHsgY2hhcjogc3RyaW5nIH0gPSB1c2VQYXJhbXMoKTtcclxuICAgIGNvbnN0IGNoYXJOYW1lID0gY2hhci5zdWJzdHJpbmcoMSk7XHJcbiAgICBjb25zdCBjb2xTcGFuID0gdGFnLmRldGFpbC5sZW5ndGg7XHJcbiAgICBjb25zdCBtb2RhbERpc3BhdGNoID0gdXNlTW9kYWxEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW2VkaXQsIHNldEVkaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgeyB2YWx1ZXMsIHNldFZhbHVlLCBoYW5kbGVDaGFuZ2UgfSA9IHVzZUVkaXRWYWx1ZShpbml0aWFsVmFsdWUpO1xyXG4gICAgY29uc3QgbW9kYWxQcm9wcyA9IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogdGFnLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHZhbHVlczogdmFsdWVzLFxyXG4gICAgICAgIGNoYXJOYW1lOiBjaGFyTmFtZSxcclxuICAgIH07XHJcbiAgICBjb25zdCB1c2VyID0gdXNlVXNlckRhdGEoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodXNlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBtb2RhbERpc3BhdGNoKHsgdHlwZTogJ0FERCcsIHBheWxvYWQ6IG1vZGFsUHJvcHMgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW9kYWxEaXNwYXRjaCh7IHR5cGU6ICdOT1RVU0VSJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RWRpdChmYWxzZSk7XHJcbiAgICAgICAgc2V0VmFsdWUoaW5pdGlhbFZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGFibGVXcmFwcGVyPlxyXG4gICAgICAgICAgICA8aDI+e2hlYWRlcn08L2gyPlxyXG4gICAgICAgICAgICA8VGFibGVDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkIGtleT17aGVhZGVyICsgaW5kZXggKyBjb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChyb3c6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3dEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93PXtyb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyTmFtZT17Y2hhck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc9e3RhZy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICB7ZWRpdCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlRWRpdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0PXtzZXRFZGl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17dmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJOYW1lPXtjaGFyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb2RhbD17aGFuZGxlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUFkZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KHRydWUpfSBjb2xTcGFuPXtjb2xTcGFufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtmYVBsdXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtQYWxldHRlLmdyYXlfMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJjb2xvcj17UGFsZXR0ZS5ncmF5XzJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVBZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGVDb250ZW50PlxyXG4gICAgICAgIDwvVGFibGVXcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oVGFibGUpO1xyXG4iLCJpbXBvcnQgeyBmYUNoZWNrLCBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBQYWxldHRlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IEN1c3RvbUljb24gZnJvbSAnLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvSWNvbic7XHJcblxyXG5jb25zdCBUYWJsZUVkaXRCb3ggPSBzdHlsZWQudGRgXHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQudGV4dGFyZWFgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogNzVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHtQYWxldHRlLmdyYXlfMX07XHJcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBmb250OiBpbmhlcml0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDBlbTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDEwNCwgMTA0LCAxMDQsIDAuMyk7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xyXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgRWRpdFByb3BzIHtcclxuICAgIHZhbHVlOiBhbnk7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBoYW5kbGVDaGFuZ2U6IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgVGFibGVFZGl0ID0gKHsgdmFsdWUsIG5hbWUsIGhhbmRsZUNoYW5nZSB9OiBFZGl0UHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYmxlRWRpdEJveD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyeheugpVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L1RhYmxlRWRpdEJveD5cclxuICAgICk7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgdmFsdWVzOiBPYmplY3Q7XHJcbiAgICBjaGFyTmFtZTogc3RyaW5nO1xyXG4gICAgaGFuZGxlQ2hhbmdlOiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHZvaWQ7XHJcbiAgICBzZXRFZGl0OiAob3BlbjogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIGhhbmRsZU1vZGFsOiAoKSA9PiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IEVkaXRUYWJsZUNvbnRyb2wgPSBzdHlsZWQudGQ8eyBiYWNrY29sb3I/OiBzdHJpbmcgfT5gXHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5iYWNrY29sb3J9O1xyXG5gO1xyXG5cclxuY29uc3QgVGFibGVFZGl0cyA9ICh7XHJcbiAgICB2YWx1ZXMsXHJcbiAgICBjaGFyTmFtZSxcclxuICAgIGhhbmRsZUNoYW5nZSxcclxuICAgIHNldEVkaXQsXHJcbiAgICBoYW5kbGVNb2RhbCxcclxufTogUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHZhbHVlcykubWFwKChba2V5LCB2YWx1ZV0pID0+IChcclxuICAgICAgICAgICAgICAgIDxUYWJsZUVkaXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17a2V5ICsgY2hhck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIDxFZGl0VGFibGVDb250cm9sIGJhY2tjb2xvcj17UGFsZXR0ZS5ncmVlbl8xfSBvbkNsaWNrPXtoYW5kbGVNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tSWNvbiBpY29uPXtmYUNoZWNrfSAvPlxyXG4gICAgICAgICAgICA8L0VkaXRUYWJsZUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxFZGl0VGFibGVDb250cm9sXHJcbiAgICAgICAgICAgICAgICBiYWNrY29sb3I9e1BhbGV0dGUucmVkXzF9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KGZhbHNlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbUljb24gaWNvbj17ZmFUaW1lc30gLz5cclxuICAgICAgICAgICAgPC9FZGl0VGFibGVDb250cm9sPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlRWRpdHM7XHJcbiIsImltcG9ydCB7IGZhRWRpdCwgZmFFcmFzZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZU1vZGFsRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9jb250ZXh0L01vZGFsQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZVVzZXJEYXRhIH0gZnJvbSAnLi4vLi4vY29udGV4dC9Vc2VyQ29udGV4dCc7XHJcbmltcG9ydCB1c2VFZGl0VmFsdWUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSW5wdXRWYWx1ZSc7XHJcbmltcG9ydCB7IFBhbGV0dGUsIERldmljZSB9IGZyb20gJy4uLy4uL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCBDdXN0b21JY29uIGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL0ljb24nO1xyXG5pbXBvcnQgeyBUYWJsZUNvbnRyb2wsIHRhZ1Byb3BlcnR5IH0gZnJvbSAnLi9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUVkaXRzIGZyb20gJy4vVGFibGVFZGl0cyc7XHJcbmNvbnN0IFRhYmxlUm93ID0gc3R5bGVkLnRyYFxyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkMWQxO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogNTBweDtcclxuYDtcclxuY29uc3QgVGFibGVEYXRhQm94ID0gc3R5bGVkLnRkPHsgdG9nZ2xlOiBib29sZWFuOyBpc1N0YXRlOiBib29sZWFuIH0+YFxyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuXHJcbiAgICBtaW4td2lkdGg6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNTdGF0ZSA/ICcyMDBweCcgOiAnNTBweCcpfTtcclxuICAgIEBtZWRpYSAke0RldmljZS5tb2JpbGV9IHtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIGhlaWdodDogJHsocHJvcHMpID0+IChwcm9wcy50b2dnbGUgPyAnMTAwJSAgJyA6ICcxMDAlJyl9O1xyXG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd29yZC1icmVhazogbm9ybWFsO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGFibGVEYXRhID0gKHtcclxuICAgIGNvbnRlbnQsXHJcbiAgICB0b2dnbGUsXHJcbiAgICBpc1N0YXRlLFxyXG59OiB7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICB0b2dnbGU6IGJvb2xlYW47XHJcbiAgICBpc1N0YXRlOiBib29sZWFuO1xyXG59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUYWJsZURhdGFCb3ggdG9nZ2xlPXt0b2dnbGV9IGlzU3RhdGU9e2lzU3RhdGV9PlxyXG4gICAgICAgICAgICA8ZGl2Pntjb250ZW50fTwvZGl2PlxyXG4gICAgICAgIDwvVGFibGVEYXRhQm94PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmludGVyZmFjZSBSb3dQcm9wcyB7XHJcbiAgICByb3c6IHRhZ1Byb3BlcnR5O1xyXG4gICAgY2hhck5hbWU6IHN0cmluZztcclxuICAgIHRhZzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUYWJsZVJvd0RhdGEgPSAoeyByb3csIGNoYXJOYW1lLCB0YWcgfTogUm93UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgdmFsdWVzLCBoYW5kbGVDaGFuZ2UsIHNldFZhbHVlIH0gPSB1c2VFZGl0VmFsdWUocm93KTtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKHJvdyk7XHJcbiAgICAgICAgc2V0RWRpdChmYWxzZSk7XHJcbiAgICB9LCBbcm93LCBzZXRWYWx1ZV0pO1xyXG5cclxuICAgIGNvbnN0IG1vZGFsUHJvcHMgPSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IHRhZyxcclxuICAgICAgICBvbGR2YWx1ZXM6IHJvdyxcclxuICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcclxuICAgICAgICBjaGFyTmFtZTogY2hhck5hbWUsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbW9kYWxEaXNwYXRjaCA9IHVzZU1vZGFsRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VVc2VyRGF0YSgpO1xyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyICE9PSBudWxsKVxyXG4gICAgICAgICAgICBtb2RhbERpc3BhdGNoKHsgdHlwZTogJ0RFTEVURScsIHBheWxvYWQ6IG1vZGFsUHJvcHMgfSk7XHJcbiAgICAgICAgZWxzZSBtb2RhbERpc3BhdGNoKHsgdHlwZTogJ05PVFVTRVInIH0pO1xyXG4gICAgICAgIHNldFZhbHVlKHJvdyk7XHJcbiAgICAgICAgc2V0RWRpdChmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vZGFsUHJvcHMpO1xyXG4gICAgICAgIGlmICh1c2VyICE9PSBudWxsKSBtb2RhbERpc3BhdGNoKHsgdHlwZTogJ0VESVQnLCBwYXlsb2FkOiBtb2RhbFByb3BzIH0pO1xyXG4gICAgICAgIGVsc2UgbW9kYWxEaXNwYXRjaCh7IHR5cGU6ICdOT1RVU0VSJyB9KTtcclxuICAgICAgICBzZXRWYWx1ZShyb3cpO1xyXG4gICAgICAgIHNldEVkaXQoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUYWJsZVJvdyBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoIXRvZ2dsZSl9PlxyXG4gICAgICAgICAgICB7ZWRpdCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlRWRpdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdD17c2V0RWRpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt2YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyTmFtZT17Y2hhck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vZGFsPXtoYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMocm93KS5tYXAoKFtrZXksIHZhbHVlXSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RvZ2dsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1N0YXRlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRyb2wgb25DbGljaz17KCkgPT4gc2V0RWRpdCghZWRpdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFFZGl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e1BhbGV0dGUuZ3JlZW5fMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyY29sb3I9e1BhbGV0dGUuZ3JlZW5fMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvQ3VzdG9tSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDb250cm9sIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtmYUVyYXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtQYWxldHRlLnJlZF8xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJjb2xvcj17UGFsZXR0ZS5yZWRfMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvQ3VzdG9tSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhUYWJsZVJvd0RhdGEpO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGV2aWNlLCBQYWxldHRlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lJztcclxuXHJcbmNvbnN0IFRhYkNvbnRyb2xCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLm1vYmlsZX0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGFiQ29udHJvbEl0ZW1Cb3ggPSBzdHlsZWQuZGl2PHsgc2VsZWN0ZWQ6IGJvb2xlYW4gfT5gXHJcbiAgICBmbGV4OiAxIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogJHsocHJvcHMpID0+IChwcm9wcy5zZWxlY3RlZCA/ICcxMDAlJyA6ICcwJScpfTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7UGFsZXR0ZS5yZWRfMX07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UubW9iaWxlfSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGFiQ29udHJvbEl0ZW0gPSAocHJvcHM6IHtcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIGhhbmRsZUluZGV4OiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICBzZWxlY3RlZDogYm9vbGVhbjtcclxufSkgPT4ge1xyXG4gICAgY29uc3QgeyBjb250ZW50LCBoYW5kbGVJbmRleCwgaW5kZXgsIHNlbGVjdGVkIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBoYW5kbGVJbmRleChpbmRleCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGFiQ29udHJvbEl0ZW1Cb3ggc2VsZWN0ZWQ9e3NlbGVjdGVkfSBvbkNsaWNrPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICA8L1RhYkNvbnRyb2xJdGVtQm94PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRhYkNvbnRyb2wgPSAoe1xyXG4gICAgdmFsdWUsXHJcbiAgICBoYW5kbGVJbmRleCxcclxuICAgIGFycixcclxufToge1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIGhhbmRsZUluZGV4OiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICAgIGFycjogc3RyaW5nW107XHJcbn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYkNvbnRyb2xCb3g+XHJcbiAgICAgICAgICAgIHthcnIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8VGFiQ29udHJvbEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2luZGV4ID09PSB2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5kZXg9e2hhbmRsZUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvVGFiQ29udHJvbEJveD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJDb250cm9sO1xyXG4iLCJpbXBvcnQgVGFibGUgZnJvbSAnLi4vVGFibGVDb21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7XHJcbiAgICBDb21ibyxcclxuICAgIEV4dHJhaGl0LFxyXG4gICAgSW5mb1Byb3BzLFxyXG4gICAgTWFpbk1vdmUsXHJcbiAgICBQYXR0ZXJuLFxyXG4gICAgU3RhbmRpbmcsXHJcbiAgICBUaHJvdyxcclxuICAgIFVwLFxyXG4gICAgV2FsbENvbWJvLFxyXG59IGZyb20gJy4uLy4uL3R5cGVzL0NoYXJQcm9wcyc7XHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIFRhYkluZm9Qcm9wcyB7XHJcbiAgICBkYXRhOiBUYWJsZUl0ZW1Qcm9wc1tdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVJdGVtUHJvcHMge1xyXG4gICAgaGVhZGVyOiBzdHJpbmc7XHJcbiAgICBjb2x1bW5zOiBzdHJpbmdbXTtcclxuICAgIGRhdGE6XHJcbiAgICAgICAgfCBTdGFuZGluZ1tdXHJcbiAgICAgICAgfCBVcFtdXHJcbiAgICAgICAgfCBDb21ib1tdXHJcbiAgICAgICAgfCBXYWxsQ29tYm9bXVxyXG4gICAgICAgIHwgVGhyb3dbXVxyXG4gICAgICAgIHwgRXh0cmFoaXRbXVxyXG4gICAgICAgIHwgSW5mb1Byb3BzW11cclxuICAgICAgICB8IFBhdHRlcm5bXVxyXG4gICAgICAgIHwgTWFpbk1vdmVbXTtcclxuICAgIHRhZzogeyBkZXNjcmlwdGlvbjogc3RyaW5nOyBkZXRhaWw6IHN0cmluZ1tdIH07XHJcbn1cclxuXHJcbmNvbnN0IFRhYkluZm8gPSAoeyBkYXRhIH06IFRhYkluZm9Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V3JhcHBlcj5cclxuICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUYWJsZSBrZXk9e2luZGV4fSBpdGVtPXtpdGVtfSAvPjtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYkluZm87XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgVGFiUGFuZWxCbG9jayA9IHN0eWxlZC5kaXY8eyBzaG93bjogYm9vbGVhbiB9PmBcclxuICAgICR7KHsgc2hvd24gfSkgPT4gKHNob3duID8gYHdpZHRoOjEwMCU7ICBoZWlnaHQ6OTAlO2AgOiAnd2lkdGg6MCUnKX07XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSovXHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgUGFuZWxQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogYW55O1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzOiBQYW5lbFByb3BzKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXggfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYlBhbmVsQmxvY2tcclxuICAgICAgICAgICAgaWQ9e2B2ZXJ0aWNhbC10YWJwYW5lbC0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT17YHZlcnRpY2FsLXRhYi0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIHNob3duPXt2YWx1ZSA9PT0gaW5kZXh9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7dmFsdWUgPT09IGluZGV4ICYmIDw+e2NoaWxkcmVufSA8Lz59XHJcbiAgICAgICAgPC9UYWJQYW5lbEJsb2NrPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiUGFuZWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCBEaXNwYXRjaCwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhclByb3BzIH0gZnJvbSAnLi4vdHlwZXMvQ2hhclByb3BzJztcclxuXHJcbmludGVyZmFjZSBTdGF0ZVByb3BzIHtcclxuICAgIGNoYXJQcm9wczogQ2hhclByb3BzO1xyXG4gICAgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIGVycm9yOiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IEluaXRpYWxTdGF0ZTogU3RhdGVQcm9wcyA9IHtcclxuICAgIGNoYXJQcm9wczoge1xyXG4gICAgICAgIHN0YW5kaW5nOiBbXSxcclxuICAgICAgICB1cDogW10sXHJcbiAgICAgICAgY29tYm86IFtdLFxyXG4gICAgICAgIFdhbGxDb21ibzogW10sXHJcbiAgICAgICAgVGhyb3c6IFtdLFxyXG4gICAgICAgIEV4dHJhaGl0OiBbXSxcclxuICAgICAgICBJbmZvOiBbXSxcclxuICAgICAgICBQYXR0ZXJuOiBbXSxcclxuICAgICAgICBNYWluTW92ZTogW10sXHJcbiAgICB9LFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbnR5cGUgQWN0aW9uID1cclxuICAgIHwgeyB0eXBlOiAnTE9BREVEJzsgcGF5bG9hZDogQ2hhclByb3BzIH1cclxuICAgIHwgeyB0eXBlOiAnTE9BRElORycgfVxyXG4gICAgfCB7IHR5cGU6ICdBREQnIH1cclxuICAgIHwgeyB0eXBlOiAnRVJST1InOyBlcnJvcjogYW55IH07XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0ZURpc3BhdGNoID0gRGlzcGF0Y2g8QWN0aW9uPjtcclxuXHJcbmNvbnN0IERhdGFDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxTdGF0ZVByb3BzIHwgbnVsbD4obnVsbCk7XHJcbmNvbnN0IERhdGFEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFN0YXRlRGlzcGF0Y2ggfCBudWxsPihudWxsKTtcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU6IFN0YXRlUHJvcHMsIGFjdGlvbjogQWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnTE9BREVEJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhclByb3BzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0xPQURJTkcnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0VSUk9SJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdGF0ZVByb3ZpZGVyKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBJbml0aWFsU3RhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgICAgICAgPERhdGFEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9EYXRhRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VEQkRhdGEoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgICBpZiAoIWRhdGEpIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgUHJvdmlkZXInKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VEQkRpc3BhdGNoKCkge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KERhdGFEaXNwYXRjaENvbnRleHQpO1xyXG4gICAgaWYgKCFkaXNwYXRjaCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBQcm92aWRlcicpO1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoO1xyXG59XHJcbiIsImltcG9ydCBkYiBmcm9tICcuLi9maXJlYmFzZUluaXQnO1xyXG5pbXBvcnQgeyBDaGFyUHJvcHMgfSBmcm9tICcuLi90eXBlcy9DaGFyUHJvcHMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBTdGF0ZURpc3BhdGNoIH0gZnJvbSAnLi9EQkNvbnRleHQnO1xyXG5pbXBvcnQgeyBUYWJsZU9yZGVyIH0gZnJvbSAnLi4vdXRpbHMvVGFibGVPcmRlcic7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBMb2FkRGF0YShjaGFyOiBzdHJpbmcsIGRpc3BhdGNoOiBTdGF0ZURpc3BhdGNoKSB7XHJcbiAgICBjb25zdCBzb3J0YnlLZXkgPSAoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eSgnZnJhbWUnKSAmJiBiLmhhc093blByb3BlcnR5KCdmcmFtZScpKSB7XHJcbiAgICAgICAgICAgIGlmIChhWydmcmFtZSddID09PSBiWydmcmFtZSddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYVsnY29tbWFuZCddIDwgYlsnY29tbWFuZCddID8gLTEgOiAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGFbJ2ZyYW1lJ10pIDwgcGFyc2VJbnQoYlsnZnJhbWUnXSkgPyAtMSA6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYVsnY29tbWFuZCddIDwgYlsnY29tbWFuZCddID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc29ydGJ5Q291bnRlciA9IChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF2ID0gYVsnY29tbWFuZCddLmluY2x1ZGVzKCcoQyknKTtcclxuICAgICAgICBjb25zdCBidiA9IGJbJ2NvbW1hbmQnXS5pbmNsdWRlcygnKEMpJyk7XHJcbiAgICAgICAgaWYgKGF2ID09PSBidikge1xyXG4gICAgICAgICAgICByZXR1cm4gYVsnY29tbWFuZCddIDwgYlsnY29tbWFuZCddID8gLTEgOiAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXYgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb3JkZXIgPSAoYXJyOiBhbnlbXSwgY2F0ZWdvcnk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9yZGVyQnlDb250ZW50ID0gKGNhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb3JkZXIgPSBUYWJsZU9yZGVyW2NhdGVnb3J5XTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhOiBhbnksIGI6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yZGVyLmluZGV4T2YoYSkgLSBvcmRlci5pbmRleE9mKGIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGFyci5tYXAoKGN1cjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkgPT5cclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY3VyKVxyXG4gICAgICAgICAgICAgICAgLnNvcnQob3JkZXJCeUNvbnRlbnQoY2F0ZWdvcnkpKVxyXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgob2JqOiBhbnksIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSBjdXJba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICAgICAgfSwge30pXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnTE9BRElORycgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbignQ2hhcmFjdGVyJylcclxuICAgICAgICAgICAgLmRvYyhjaGFyKVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4oKHNuYXApID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmFwLmRhdGEoKSBhcyBDaGFyUHJvcHM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG5ld09iaiA9IE9iamVjdC5rZXlzKGRhdGEpLnJlZHVjZSgoYWNjOiBhbnksIGN1cjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXIgPT09ICdJbmZvJykge1xyXG4gICAgICAgICAgICAgICAgYWNjW2N1cl0gPSBkYXRhW2N1cl07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAnRXh0cmFoaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjb21ibycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1dhbGxDb21ibycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BhdHRlcm4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdNYWluTW92ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Rocm93JyxcclxuICAgICAgICAgICAgICAgIF0uaW5jbHVkZXMoY3VyKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGFjY1tjdXJdID0gb3JkZXIoZGF0YVtjdXJdLCBjdXIpLnNvcnQoc29ydGJ5Q291bnRlcik7IC8vIOyVjO2MjOuys+yInCDsubTsmrTthLDsiJxcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChbJ3N0YW5kaW5nJywgJ3VwJ10uaW5jbHVkZXMoY3VyKSkge1xyXG4gICAgICAgICAgICAgICAgYWNjW2N1cl0gPSBvcmRlcihkYXRhW2N1cl0sIGN1cikuc29ydChzb3J0YnlLZXkpOyAvL+2UhOugiOyehOyInFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFbJ2NvbWJvJ10pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld09ialsnY29tYm8nXSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTE9BREVEJywgcGF5bG9hZDogbmV3T2JqIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdFUlJPUicsIGVycm9yOiBlcnIgfSk7XHJcbiAgICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gVXBkYXRlSGlzdG9yeShcclxuICAgIGNoYXI6IHN0cmluZyxcclxuICAgIGRhdGE6IE9iamVjdCxcclxuICAgIHVpZDogc3RyaW5nLFxyXG4gICAgdHlwZTogc3RyaW5nXHJcbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0ge1xyXG4gICAgICAgICAgICBjaGFyOiBjaGFyLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICB0aW1lOiBmaXJlYmFzZS5maXJlc3RvcmUuVGltZXN0YW1wLmZyb21EYXRlKG5ldyBEYXRlKCkpLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdVc2VyJykuZG9jKHVpZCkuZ2V0KCk7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmV4aXN0cyAmJiBkb2N1bWVudCkge1xyXG4gICAgICAgICAgICBhd2FpdCBkb2N1bWVudC5yZWYudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIFt0eXBlXTogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuYXJyYXlVbmlvbihoaXN0b3J5KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXdhaXQgZGJcclxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdVc2VyJylcclxuICAgICAgICAgICAgICAgIC5kb2ModWlkKVxyXG4gICAgICAgICAgICAgICAgLnNldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgW3R5cGVdOiBbaGlzdG9yeV0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn7Jyg7KCAIO2eiOyKpO2GoOumrCDsl4XrjbDsnbTtirgg7Iuk7YyoJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkZEZ1bmMoY2hhcjogc3RyaW5nLCBkYXRhOiBPYmplY3QsIHRhZzogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdDaGFyYWN0ZXInKVxyXG4gICAgICAgICAgICAuZG9jKGNoYXIpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgW3RhZ106IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLmFycmF5VW5pb24oZGF0YSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoJ+ygleuztOulvCDstpTqsIDtlZjripTrjbAg7Iuk7Yyo7ZaI7Iq164uI64ukJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+yXkOufrOygleuztCAnICsgZXJyKTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlRnVuYyhjaGFyOiBzdHJpbmcsIGRhdGE6IE9iamVjdCwgdGFnOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ0NoYXJhY3RlcicpXHJcbiAgICAgICAgICAgIC5kb2MoY2hhcilcclxuICAgICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBbdGFnXTogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuYXJyYXlSZW1vdmUoZGF0YSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoJ+ygleuztOulvCDsgq3soJztlZjripTrjbAg7Iuk7Yyo7ZaI7Iq164uI64ukJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+yXkOufrOygleuztCAnICsgZXJyKTtcclxuICAgIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBVcGRhdGVDaGFyc0Z1bmMob3JkZXI6IGFueSwgY2F0ZWdvcnk6IHN0cmluZykge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gVXBkYXRlUHJvcHNGdW5jKG9yZGVyOiBhbnksIGlkOiBzdHJpbmcsIGNhdGVnb3J5OiBzdHJpbmcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGJcclxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdDaGFyYWN0ZXInKVxyXG4gICAgICAgICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHNuYXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25hcC5kYXRhKCkgYXMgQ2hhclByb3BzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBvcmRlcihkYXRhW2NhdGVnb3J5XSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkYlxyXG4gICAgICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdDaGFyYWN0ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjYXRlZ29yeV06IG5ld0RhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoaWQgKyAn7J2YIOygleuztOulvCDrsJvslYTsmKTripTrjbAg7Iuk7Yyo7ZaI7Iq164uI64ukJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn7JeQ65+sIOygleuztCcgKyBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGlkICsgJ+ydmCDsoJXrs7Trpbwg7JeF642w7J207Yq47ZWY64qU642wIOyLpO2MqO2WiOyKteuLiOuLpCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7JeQ65+sIOygleuztCcgKyBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50cyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ0NoYXJhY3RlcicpLmdldCgpO1xyXG4gICAgICAgIGRvY3VtZW50cy5mb3JFYWNoKChkb2N1bWVudCkgPT4ge1xyXG4gICAgICAgICAgICBVcGRhdGVQcm9wc0Z1bmMob3JkZXIsIGRvY3VtZW50LmlkLCBjYXRlZ29yeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBhbGVydCgn7LqQ66at7YSw65Ok7J2YIOygleuztOulvCDrsJvslYTsmKTripTrjbAg7Iuk7Yyo7ZaI7Iq164uI64ukJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+yXkOufrCDsoJXrs7QnICsgZXJyKTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gVXBkYXRlUHJvcHNGdW5jKGlkOiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZGJcclxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdDaGFyYWN0ZXInKVxyXG4gICAgICAgICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIFtwcm9wZXJ0eV06IFtdLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGlkICsgJ+ydmCDsoJXrs7Trpbwg67Cb7JWE7Jik64qU642wIOyLpO2MqO2WiOyKteuLiOuLpCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7JeQ65+sIOygleuztCcgKyBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGFsZXJ0KGlkICsgJ+ydmCDsoJXrs7Trpbwg7JeF642w7J207Yq47ZWY64qU642wIOyLpO2MqO2WiOyKteuLiOuLpCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfsl5Drn6wg7KCV67O0JyArIGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBSZW5hbWUoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZGJcclxuICAgICAgICAuY29sbGVjdGlvbignQ2hhcmFjdGVyJylcclxuICAgICAgICAuZG9jKCdDbGFkaW8nKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChzbmFwKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzbmFwLmRhdGEoKSBhcyBDaGFyUHJvcHM7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbignQ2hhcmFjdGVyJykuZG9jKCdDbGF1ZGlvJykuc2V0KGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQWRkTmV3Q2hhcmFjdGVyKCkge1xyXG4gICAgY29uc3QgbmFtZSA9ICdMZXJveSc7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ0NoYXJhY3RlcicpLmRvYyhuYW1lKS5zZXQoe30pO1xyXG4gICAgICAgIGNvbnN0IGFyciA9IFtcclxuICAgICAgICAgICAgJ01haW5Nb3ZlJyxcclxuICAgICAgICAgICAgJ3N0YW5kaW5nJyxcclxuICAgICAgICAgICAgJ3VwJyxcclxuICAgICAgICAgICAgJ1Rocm93JyxcclxuICAgICAgICAgICAgJ2NvbWJvJyxcclxuICAgICAgICAgICAgJ1dhbGxDb21ibycsXHJcbiAgICAgICAgICAgICdFeHRyYWhpdCcsXHJcbiAgICAgICAgICAgICdQYXR0ZXJuJyxcclxuICAgICAgICAgICAgJ0luZm8nLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgVXBkYXRlUHJvcHNGdW5jKG5hbWUsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoJ+yLpO2MqCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQWRkTmV3UHJvcHMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50cyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ0NoYXJhY3RlcicpLmdldCgpO1xyXG4gICAgICAgIGRvY3VtZW50cy5mb3JFYWNoKChkb2N1bWVudCkgPT4ge1xyXG4gICAgICAgICAgICBVcGRhdGVQcm9wc0Z1bmMoZG9jdW1lbnQuaWQsICdNYWluTW92ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoJ+y6kOumre2EsOuTpOydmCDsoJXrs7Trpbwg67Cb7JWE7Jik64qU642wIOyLpO2MqO2WiOyKteuLiOuLpCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfsl5Drn6wg7KCV67O0JyArIGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBZGREYXRhID0gYXN5bmMgKFxyXG4gICAgdGFnOiBzdHJpbmcsXHJcbiAgICBkYXRhOiBPYmplY3QsXHJcbiAgICBjaGFyOiBzdHJpbmcsXHJcbiAgICB1aWQ6IHN0cmluZ1xyXG4pID0+IHtcclxuICAgIGF3YWl0IEFkZEZ1bmMoY2hhciwgZGF0YSwgdGFnKTtcclxuICAgIGF3YWl0IFVwZGF0ZUhpc3RvcnkoY2hhciwgZGF0YSwgdWlkLCAnQUREJyk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gRGVsZXRlRGF0YShcclxuICAgIHRhZzogc3RyaW5nLFxyXG4gICAgZGF0YTogT2JqZWN0LFxyXG4gICAgY2hhcjogc3RyaW5nLFxyXG4gICAgdWlkOiBzdHJpbmdcclxuKSB7XHJcbiAgICBhd2FpdCBEZWxldGVGdW5jKGNoYXIsIGRhdGEsIHRhZyk7XHJcbiAgICBhd2FpdCBVcGRhdGVIaXN0b3J5KGNoYXIsIGRhdGEsIHVpZCwgJ0RlbGV0ZScpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gRWRpdERhdGEoXHJcbiAgICB0YWc6IHN0cmluZyxcclxuICAgIG9sZDogT2JqZWN0LFxyXG4gICAgbmV3RGF0YTogT2JqZWN0LFxyXG4gICAgY2hhcjogc3RyaW5nLFxyXG4gICAgdWlkOiBzdHJpbmdcclxuKSB7XHJcbiAgICBhd2FpdCBEZWxldGVGdW5jKGNoYXIsIG9sZCwgdGFnKTtcclxuICAgIGF3YWl0IEFkZEZ1bmMoY2hhciwgbmV3RGF0YSwgdGFnKTtcclxuICAgIGF3YWl0IFVwZGF0ZUhpc3RvcnkoY2hhciwgeyBvbGQsIG5ld0RhdGEgfSwgdWlkLCAnRWRpdCcpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQWRkUHJvcGVydHkoY2F0ZWdvcnk6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgb3JkZXIgPSAoZGF0YTogT2JqZWN0W10pID0+IHtcclxuICAgICAgICByZXR1cm4gZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaGFzT3duUHJvcGVydHkocHJvcGVydHkpXHJcbiAgICAgICAgICAgICAgICA/IGl0ZW1cclxuICAgICAgICAgICAgICAgIDogeyAuLi5pdGVtLCBbcHJvcGVydHldOiAnJyB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFVwZGF0ZUNoYXJzRnVuYyhvcmRlciwgY2F0ZWdvcnkpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUmVtb3ZlUHJvcGVydHkoY2F0ZWdvcnk6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgb3JkZXIgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChrZXkpID0+IGtleSAhPT0gcHJvcGVydHkpXHJcbiAgICAgICAgICAgICAgICAucmVkdWNlKChhY2M6IGFueSwgY3VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjW2N1cl0gPSBpdGVtW2N1cl07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgICAgIH0sIHt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVcGRhdGVDaGFyc0Z1bmMob3JkZXIsIGNhdGVnb3J5KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgRGlzcGF0Y2gsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFQcm9wcyB7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgdmFsdWVzOiBPYmplY3Q7XHJcbiAgICBvbGR2YWx1ZXM/OiBPYmplY3Q7XHJcbiAgICBjaGFyTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTW9kYWxQcm9wcyB7XHJcbiAgICBtb2RhbEFjdGlvbjogYW55O1xyXG4gICAgcHJvcHM6IFBhcmFQcm9wcztcclxuICAgIG9wZW46IGJvb2xlYW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU6IE1vZGFsUHJvcHMsIGFjdGlvbjogQWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnU0VUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlbjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnQUREJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsQWN0aW9uOiAnYWRkJyxcclxuICAgICAgICAgICAgICAgIHByb3BzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnREVMRVRFJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsQWN0aW9uOiAnZGVsZXRlJyxcclxuICAgICAgICAgICAgICAgIHByb3BzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnRURJVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbEFjdGlvbjogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgcHJvcHM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdOT1RVU0VSJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbW9kYWxBY3Rpb246ICdub3R1c2VyJyxcclxuICAgICAgICAgICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFjdGlvbiA9XHJcbiAgICB8IHsgdHlwZTogJ1NFVCc7IHBheWxvYWQ6IGFueSB9XHJcbiAgICB8IHsgdHlwZTogJ0FERCc7IHBheWxvYWQ6IFBhcmFQcm9wcyB9XHJcbiAgICB8IHsgdHlwZTogJ0RFTEVURSc7IHBheWxvYWQ6IFBhcmFQcm9wcyB9XHJcbiAgICB8IHsgdHlwZTogJ0VESVQnOyBwYXlsb2FkOiBQYXJhUHJvcHMgfVxyXG4gICAgfCB7IHR5cGU6ICdOT1RVU0VSJyB9O1xyXG5cclxudHlwZSBNb2RhbERpc3BhdGNoID0gRGlzcGF0Y2g8QWN0aW9uPjtcclxuXHJcbmNvbnN0IE1vZGFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8TW9kYWxQcm9wcyB8IG51bGw+KG51bGwpO1xyXG5jb25zdCBNb2RhbERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8TW9kYWxEaXNwYXRjaCB8IG51bGw+KG51bGwpO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBNb2RhbFByb3BzID0ge1xyXG4gICAgbW9kYWxBY3Rpb246ICdhZGQnLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgdmFsdWVzOiAnJyxcclxuICAgICAgICBjaGFyTmFtZTogJycsXHJcbiAgICB9LFxyXG4gICAgb3BlbjogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTW9kYWxQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICAgICAgICA8TW9kYWxEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9Nb2RhbERpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICA8L01vZGFsQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNb2RhbERhdGEoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG4gICAgaWYgKCFkYXRhKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIFByb3ZpZGVyJyk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1vZGFsRGlzcGF0Y2goKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdXNlQ29udGV4dChNb2RhbERpc3BhdGNoQ29udGV4dCk7XHJcbiAgICBpZiAoIWRhdGEpIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgUHJvdmlkZXInKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRWRpdFZhbHVlKGluaXRpYWxWYWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc2V0VmFsdWUoe1xyXG4gICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICBzZXRWYWx1ZSxcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUNvbXBvbmVudHMvU2lkZWJhcic7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIGZhQmFycyxcclxuICAgIGZhVGltZXMsXHJcbiAgICBJY29uRGVmaW5pdGlvbixcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy9HbG9iYWxTdHlsZSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsJztcclxuaW1wb3J0IEN1c3RvbUljb24gZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvSWNvbic7XHJcbmltcG9ydCB7IERldmljZSwgUGFsZXR0ZSB9IGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCBDaGFyIGZyb20gJy4vY2hhcic7XHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuYDtcclxuXHJcbmNvbnN0IFBhZ2VDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBNZW51UHJvcHMge1xyXG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcclxuICAgIGljb246IEljb25EZWZpbml0aW9uO1xyXG59XHJcblxyXG5jb25zdCBNZW51QnV0dG9uQmxvY2sgPSBzdHlsZWQoQ3VzdG9tSWNvbik8TWVudVByb3BzPmBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2PHsgdG9nZ2xlOiBib29sZWFuIH0+YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTY7XHJcbiAgICBiYWNrZ3JvdW5kOiAke1BhbGV0dGUub3ZlcmxheX07XHJcbiAgICB2aXNpYmlsaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLnRvZ2dsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nKX07XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dGl0bGU+Nk4yM1JQPC90aXRsZT5cclxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVCdXR0b25CbG9ja1xyXG4gICAgICAgICAgICAgICAgICAgIGljb249e3RvZ2dsZSA/IGZhVGltZXMgOiBmYUJhcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIHRvZ2dsZT17dG9nZ2xlfSBoYW5kbGVUb2dnbGU9e2hhbmRsZVRvZ2dsZX0gLz5cclxuICAgICAgICAgICAgICAgIDxPdmVybGF5IHRvZ2dsZT17dG9nZ2xlfSBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFBhZ2VDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFyIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhZ2VDb250ZW50PlxyXG4gICAgICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9JbmZvJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9NYWluJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlREJEYXRhLCB1c2VEQkRpc3BhdGNoIH0gZnJvbSAnLi4vY29udGV4dC9EQkNvbnRleHQnO1xyXG5pbXBvcnQgeyBMb2FkRGF0YSB9IGZyb20gJy4uL2NvbnRleHQvREJDb250ZXh0RnVuYyc7XHJcbmltcG9ydCB7IERldmljZSwgUGFsZXR0ZSB9IGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCB7IExvYWRpbmdXaXRob3V0T3ZlcmxheSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUNvbXBvbmVudHMvTG9hZGluZyc7XHJcbmltcG9ydCBDb21tYW5kRGVzY3JpcHRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9Db21tYW5kRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgQ3VzdG9tSWNvbiBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9JY29uJztcclxuaW1wb3J0IHsgZmFRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5jb25zdCBDaGFyV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRGVzY3JpcHRpb25CdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UuZGVza3RvcH0ge1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBjaGFyTmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgeyBjaGFyUHJvcHMsIGxvYWRpbmcgfSA9IHVzZURCRGF0YSgpO1xyXG4gICAgY29uc3QgdGVtcERpc3BhdGNoID0gdXNlREJEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdGFibGVJbmRleCwgc2V0VGFibGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgTG9hZERhdGEoY2hhck5hbWUgYXMgc3RyaW5nLCB0ZW1wRGlzcGF0Y2gpO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICAgIH0sIFtjaGFyTmFtZV0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlc2NyaXB0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldERlc2NyaXB0aW9uKGZhbHNlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbmRleCA9IHVzZUNhbGxiYWNrKChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0VGFibGVJbmRleChpbmRleCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2hhcldyYXA+XHJcbiAgICAgICAgICAgIDxEZXNjcmlwdGlvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREZXNjcmlwdGlvbih0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tSWNvbiBpY29uPXtmYVF1ZXN0aW9uQ2lyY2xlfSBjb2xvcj17UGFsZXR0ZS5ncmF5XzF9IC8+XHJcbiAgICAgICAgICAgIDwvRGVzY3JpcHRpb25CdXR0b24+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPExvYWRpbmdXaXRob3V0T3ZlcmxheSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWFuZERlc2NyaXB0aW9uIGZ1bmM9e2hhbmRsZURlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2NoYXJQcm9wcz8uSW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2NoYXJOYW1lIGFzIHN0cmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2NoYXJQcm9wcyF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUluZGV4PXt0YWJsZUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5kZXg9e2hhbmRsZUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsnaGknfVxyXG4gICAgICAgIDwvQ2hhcldyYXA+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcjtcclxuIiwiZXhwb3J0IGNvbnN0IFRhYmxlT3JkZXI6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfSA9IHtcclxuICAgIHN0YW5kaW5nOiBbJ2ZyYW1lJywgJ2NvbW1hbmQnLCAnZGFtYWdlJywgJ3JhbmdlJywgJ2hpdGZyYW1lJywgJ3N0YXRlJ10sXHJcbiAgICB1cDogWydmcmFtZScsICdjb21tYW5kJywgJ2RhbWFnZScsICdyYW5nZScsICdoaXRmcmFtZScsICdzdGF0ZSddLFxyXG4gICAgVGhyb3c6IFsnY29tbWFuZCcsICdkYW1hZ2UnLCAnZnJhbWUnLCAnc3RhdGUnLCAnd2F5J10sXHJcbiAgICBjb21ibzogWydjb21tYW5kJywgJ3N0YXRlJ10sXHJcbiAgICBFeHRyYWhpdDogWydjb21tYW5kJywgJ3N0YXRlJ10sXHJcbiAgICBXYWxsQ29tYm86IFsnY29tbWFuZCcsICdzdGF0ZSddLFxyXG4gICAgTWFpbk1vdmU6IFtcclxuICAgICAgICAnY29tbWFuZCcsXHJcbiAgICAgICAgJ25pY2tuYW1lJyxcclxuICAgICAgICAnZGFtYWdlJyxcclxuICAgICAgICAnZnJhbWUnLFxyXG4gICAgICAgICdndWFyZGZyYW1lJyxcclxuICAgICAgICAnaGl0ZnJhbWUnLFxyXG4gICAgICAgICdyYW5nZScsXHJcbiAgICAgICAgJ3N0YXRlJyxcclxuICAgIF0sXHJcbiAgICBQYXR0ZXJuOiBbJ2NvbW1hbmQnLCAnc3RhdGUnLCAnd2luJ10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnkgPSBbXHJcbiAgICAnTWFpbk1vdmUnLFxyXG4gICAgJ3N0YW5kaW5nJyxcclxuICAgICd1cCcsXHJcbiAgICAnVGhyb3cnLFxyXG4gICAgJ2NvbWJvJyxcclxuICAgICdXYWxsQ29tYm8nLFxyXG4gICAgJ0V4dHJhaGl0JyxcclxuICAgICdQYXR0ZXJuJyxcclxuICAgICdJbmZvJyxcclxuXTtcclxuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHJlc29sdmVQYXRobmFtZSBmcm9tICdyZXNvbHZlLXBhdGhuYW1lJztcbmltcG9ydCB2YWx1ZUVxdWFsIGZyb20gJ3ZhbHVlLWVxdWFsJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50JztcblxuZnVuY3Rpb24gYWRkTGVhZGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLycgPyBwYXRoIDogJy8nICsgcGF0aDtcbn1cbmZ1bmN0aW9uIHN0cmlwTGVhZGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLycgPyBwYXRoLnN1YnN0cigxKSA6IHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlbmFtZShwYXRoLCBwcmVmaXgpIHtcbiAgcmV0dXJuIHBhdGgudG9Mb3dlckNhc2UoKS5pbmRleE9mKHByZWZpeC50b0xvd2VyQ2FzZSgpKSA9PT0gMCAmJiAnLz8jJy5pbmRleE9mKHBhdGguY2hhckF0KHByZWZpeC5sZW5ndGgpKSAhPT0gLTE7XG59XG5mdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gaGFzQmFzZW5hbWUocGF0aCwgcHJlZml4KSA/IHBhdGguc3Vic3RyKHByZWZpeC5sZW5ndGgpIDogcGF0aDtcbn1cbmZ1bmN0aW9uIHN0cmlwVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdChwYXRoLmxlbmd0aCAtIDEpID09PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5mdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICB2YXIgcGF0aG5hbWUgPSBwYXRoIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuICB2YXIgaGFzaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignIycpO1xuXG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cihoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG5cbiAgaWYgKHNlYXJjaEluZGV4ICE9PSAtMSkge1xuICAgIHNlYXJjaCA9IHBhdGhuYW1lLnN1YnN0cihzZWFyY2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgc2VhcmNoSW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBzZWFyY2ggPT09ICc/JyA/ICcnIDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2ggPT09ICcjJyA/ICcnIDogaGFzaFxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuICB2YXIgcGF0aCA9IHBhdGhuYW1lIHx8ICcvJztcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2ggIT09ICc/JykgcGF0aCArPSBzZWFyY2guY2hhckF0KDApID09PSAnPycgPyBzZWFyY2ggOiBcIj9cIiArIHNlYXJjaDtcbiAgaWYgKGhhc2ggJiYgaGFzaCAhPT0gJyMnKSBwYXRoICs9IGhhc2guY2hhckF0KDApID09PSAnIycgPyBoYXNoIDogXCIjXCIgKyBoYXNoO1xuICByZXR1cm4gcGF0aDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGtleSwgY3VycmVudExvY2F0aW9uKSB7XG4gIHZhciBsb2NhdGlvbjtcblxuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gVHdvLWFyZyBmb3JtOiBwdXNoKHBhdGgsIHN0YXRlKVxuICAgIGxvY2F0aW9uID0gcGFyc2VQYXRoKHBhdGgpO1xuICAgIGxvY2F0aW9uLnN0YXRlID0gc3RhdGU7XG4gIH0gZWxzZSB7XG4gICAgLy8gT25lLWFyZyBmb3JtOiBwdXNoKGxvY2F0aW9uKVxuICAgIGxvY2F0aW9uID0gX2V4dGVuZHMoe30sIHBhdGgpO1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gdW5kZWZpbmVkKSBsb2NhdGlvbi5wYXRobmFtZSA9ICcnO1xuXG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5jaGFyQXQoMCkgIT09ICc/JykgbG9jYXRpb24uc2VhcmNoID0gJz8nICsgbG9jYXRpb24uc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5zZWFyY2ggPSAnJztcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLmhhc2guY2hhckF0KDApICE9PSAnIycpIGxvY2F0aW9uLmhhc2ggPSAnIycgKyBsb2NhdGlvbi5oYXNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlICE9PSB1bmRlZmluZWQgJiYgbG9jYXRpb24uc3RhdGUgPT09IHVuZGVmaW5lZCkgbG9jYXRpb24uc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbG9jYXRpb24ucGF0aG5hbWUgPSBkZWNvZGVVUkkobG9jYXRpb24ucGF0aG5hbWUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBVUklFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFVSSUVycm9yKCdQYXRobmFtZSBcIicgKyBsb2NhdGlvbi5wYXRobmFtZSArICdcIiBjb3VsZCBub3QgYmUgZGVjb2RlZC4gJyArICdUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgYW4gaW52YWxpZCBwZXJjZW50LWVuY29kaW5nLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkpIGxvY2F0aW9uLmtleSA9IGtleTtcblxuICBpZiAoY3VycmVudExvY2F0aW9uKSB7XG4gICAgLy8gUmVzb2x2ZSBpbmNvbXBsZXRlL3JlbGF0aXZlIHBhdGhuYW1lIHJlbGF0aXZlIHRvIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5wYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSByZXNvbHZlUGF0aG5hbWUobG9jYXRpb24ucGF0aG5hbWUsIGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gcHJpb3IgbG9jYXRpb24gYW5kIHBhdGhuYW1lIGlzIGVtcHR5LCBzZXQgaXQgdG8gL1xuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gJy8nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsb2NhdGlvbjtcbn1cbmZ1bmN0aW9uIGxvY2F0aW9uc0FyZUVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiYgYS5zZWFyY2ggPT09IGIuc2VhcmNoICYmIGEuaGFzaCA9PT0gYi5oYXNoICYmIGEua2V5ID09PSBiLmtleSAmJiB2YWx1ZUVxdWFsKGEuc3RhdGUsIGIuc3RhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpIHtcbiAgdmFyIHByb21wdCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gc2V0UHJvbXB0KG5leHRQcm9tcHQpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHByb21wdCA9PSBudWxsLCAnQSBoaXN0b3J5IHN1cHBvcnRzIG9ubHkgb25lIHByb21wdCBhdCBhIHRpbWUnKSA6IHZvaWQgMDtcbiAgICBwcm9tcHQgPSBuZXh0UHJvbXB0O1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocHJvbXB0ID09PSBuZXh0UHJvbXB0KSBwcm9tcHQgPSBudWxsO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgLy8gVE9ETzogSWYgYW5vdGhlciB0cmFuc2l0aW9uIHN0YXJ0cyB3aGlsZSB3ZSdyZSBzdGlsbCBjb25maXJtaW5nXG4gICAgLy8gdGhlIHByZXZpb3VzIG9uZSwgd2UgbWF5IGVuZCB1cCBpbiBhIHdlaXJkIHN0YXRlLiBGaWd1cmUgb3V0IHRoZVxuICAgIC8vIGJlc3Qgd2F5IHRvIGhhbmRsZSB0aGlzLlxuICAgIGlmIChwcm9tcHQgIT0gbnVsbCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHR5cGVvZiBwcm9tcHQgPT09ICdmdW5jdGlvbicgPyBwcm9tcHQobG9jYXRpb24sIGFjdGlvbikgOiBwcm9tcHQ7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGdldFVzZXJDb25maXJtYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBnZXRVc2VyQ29uZmlybWF0aW9uKHJlc3VsdCwgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsICdBIGhpc3RvcnkgbmVlZHMgYSBnZXRVc2VyQ29uZmlybWF0aW9uIGZ1bmN0aW9uIGluIG9yZGVyIHRvIHVzZSBhIHByb21wdCBtZXNzYWdlJykgOiB2b2lkIDA7XG4gICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBmYWxzZSBmcm9tIGEgdHJhbnNpdGlvbiBob29rIHRvIGNhbmNlbCB0aGUgdHJhbnNpdGlvbi5cbiAgICAgICAgY2FsbGJhY2socmVzdWx0ICE9PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcblxuICBmdW5jdGlvbiBhcHBlbmRMaXN0ZW5lcihmbikge1xuICAgIHZhciBpc0FjdGl2ZSA9IHRydWU7XG5cbiAgICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgIGlmIChpc0FjdGl2ZSkgZm4uYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGxpc3RlbmVyO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeUxpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0UHJvbXB0OiBzZXRQcm9tcHQsXG4gICAgY29uZmlybVRyYW5zaXRpb25UbzogY29uZmlybVRyYW5zaXRpb25UbyxcbiAgICBhcHBlbmRMaXN0ZW5lcjogYXBwZW5kTGlzdGVuZXIsXG4gICAgbm90aWZ5TGlzdGVuZXJzOiBub3RpZnlMaXN0ZW5lcnNcbiAgfTtcbn1cblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5mdW5jdGlvbiBnZXRDb25maXJtYXRpb24obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sod2luZG93LmNvbmZpcm0obWVzc2FnZSkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWFsZXJ0XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaXMgc3VwcG9ydGVkLiBUYWtlbiBmcm9tIE1vZGVybml6ci5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC1yb3V0ZXIvaXNzdWVzLzU4NlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBicm93c2VyIGZpcmVzIHBvcHN0YXRlIG9uIGhhc2ggY2hhbmdlLlxuICogSUUxMCBhbmQgSUUxMSBkbyBub3QuXG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSA9PT0gLTE7XG59XG4vKipcbiAqIFJldHVybnMgZmFsc2UgaWYgdXNpbmcgZ28obikgd2l0aCBoYXNoIGhpc3RvcnkgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA9PT0gLTE7XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIGdpdmVuIHBvcHN0YXRlIGV2ZW50IGlzIGFuIGV4dHJhbmVvdXMgV2ViS2l0IGV2ZW50LlxuICogQWNjb3VudHMgZm9yIHRoZSBmYWN0IHRoYXQgQ2hyb21lIG9uIGlPUyBmaXJlcyByZWFsIHBvcHN0YXRlIGV2ZW50c1xuICogY29udGFpbmluZyB1bmRlZmluZWQgc3RhdGUgd2hlbiBwcmVzc2luZyB0aGUgYmFjayBidXR0b24uXG4gKi9cblxuZnVuY3Rpb24gaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0NyaU9TJykgPT09IC0xO1xufVxuXG52YXIgUG9wU3RhdGVFdmVudCA9ICdwb3BzdGF0ZSc7XG52YXIgSGFzaENoYW5nZUV2ZW50ID0gJ2hhc2hjaGFuZ2UnO1xuXG5mdW5jdGlvbiBnZXRIaXN0b3J5U3RhdGUoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LnN0YXRlIHx8IHt9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSUUgMTEgc29tZXRpbWVzIHRocm93cyB3aGVuIGFjY2Vzc2luZyB3aW5kb3cuaGlzdG9yeS5zdGF0ZVxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RUcmFpbmluZy9oaXN0b3J5L3B1bGwvMjg5XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG4vKipcbiAqIENyZWF0ZXMgYSBoaXN0b3J5IG9iamVjdCB0aGF0IHVzZXMgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGluY2x1ZGluZ1xuICogcHVzaFN0YXRlLCByZXBsYWNlU3RhdGUsIGFuZCB0aGUgcG9wc3RhdGUgZXZlbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeShwcm9wcykge1xuICBpZiAocHJvcHMgPT09IHZvaWQgMCkge1xuICAgIHByb3BzID0ge307XG4gIH1cblxuICAhY2FuVXNlRE9NID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnQnJvd3NlciBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICB2YXIgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB2YXIgY2FuVXNlSGlzdG9yeSA9IHN1cHBvcnRzSGlzdG9yeSgpO1xuICB2YXIgbmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIgPSAhc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSgpO1xuICB2YXIgX3Byb3BzID0gcHJvcHMsXG4gICAgICBfcHJvcHMkZm9yY2VSZWZyZXNoID0gX3Byb3BzLmZvcmNlUmVmcmVzaCxcbiAgICAgIGZvcmNlUmVmcmVzaCA9IF9wcm9wcyRmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGZvcmNlUmVmcmVzaCxcbiAgICAgIF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9IF9wcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9PT0gdm9pZCAwID8gZ2V0Q29uZmlybWF0aW9uIDogX3Byb3BzJGdldFVzZXJDb25maXJtLFxuICAgICAgX3Byb3BzJGtleUxlbmd0aCA9IF9wcm9wcy5rZXlMZW5ndGgsXG4gICAgICBrZXlMZW5ndGggPSBfcHJvcHMka2V5TGVuZ3RoID09PSB2b2lkIDAgPyA2IDogX3Byb3BzJGtleUxlbmd0aDtcbiAgdmFyIGJhc2VuYW1lID0gcHJvcHMuYmFzZW5hbWUgPyBzdHJpcFRyYWlsaW5nU2xhc2goYWRkTGVhZGluZ1NsYXNoKHByb3BzLmJhc2VuYW1lKSkgOiAnJztcblxuICBmdW5jdGlvbiBnZXRET01Mb2NhdGlvbihoaXN0b3J5U3RhdGUpIHtcbiAgICB2YXIgX3JlZiA9IGhpc3RvcnlTdGF0ZSB8fCB7fSxcbiAgICAgICAga2V5ID0gX3JlZi5rZXksXG4gICAgICAgIHN0YXRlID0gX3JlZi5zdGF0ZTtcblxuICAgIHZhciBfd2luZG93JGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLFxuICAgICAgICBwYXRobmFtZSA9IF93aW5kb3ckbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaCA9IF93aW5kb3ckbG9jYXRpb24uc2VhcmNoLFxuICAgICAgICBoYXNoID0gX3dpbmRvdyRsb2NhdGlvbi5oYXNoO1xuICAgIHZhciBwYXRoID0gcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIWJhc2VuYW1lIHx8IGhhc0Jhc2VuYW1lKHBhdGgsIGJhc2VuYW1lKSwgJ1lvdSBhcmUgYXR0ZW1wdGluZyB0byB1c2UgYSBiYXNlbmFtZSBvbiBhIHBhZ2Ugd2hvc2UgVVJMIHBhdGggZG9lcyBub3QgYmVnaW4gJyArICd3aXRoIHRoZSBiYXNlbmFtZS4gRXhwZWN0ZWQgcGF0aCBcIicgKyBwYXRoICsgJ1wiIHRvIGJlZ2luIHdpdGggXCInICsgYmFzZW5hbWUgKyAnXCIuJykgOiB2b2lkIDA7XG4gICAgaWYgKGJhc2VuYW1lKSBwYXRoID0gc3RyaXBCYXNlbmFtZShwYXRoLCBiYXNlbmFtZSk7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwga2V5TGVuZ3RoKTtcbiAgfVxuXG4gIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9IGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKCk7XG5cbiAgZnVuY3Rpb24gc2V0U3RhdGUobmV4dFN0YXRlKSB7XG4gICAgX2V4dGVuZHMoaGlzdG9yeSwgbmV4dFN0YXRlKTtcblxuICAgIGhpc3RvcnkubGVuZ3RoID0gZ2xvYmFsSGlzdG9yeS5sZW5ndGg7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVBvcFN0YXRlKGV2ZW50KSB7XG4gICAgLy8gSWdub3JlIGV4dHJhbmVvdXMgcG9wc3RhdGUgZXZlbnRzIGluIFdlYktpdC5cbiAgICBpZiAoaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudChldmVudCkpIHJldHVybjtcbiAgICBoYW5kbGVQb3AoZ2V0RE9NTG9jYXRpb24oZXZlbnQuc3RhdGUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG4gICAgaGFuZGxlUG9wKGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKSk7XG4gIH1cblxuICB2YXIgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gaGFuZGxlUG9wKGxvY2F0aW9uKSB7XG4gICAgaWYgKGZvcmNlTmV4dFBvcCkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG4gICAgICBzZXRTdGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYWN0aW9uID0gJ1BPUCc7XG4gICAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldmVydFBvcChsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJldmVydFBvcChmcm9tTG9jYXRpb24pIHtcbiAgICB2YXIgdG9Mb2NhdGlvbiA9IGhpc3RvcnkubG9jYXRpb247IC8vIFRPRE86IFdlIGNvdWxkIHByb2JhYmx5IG1ha2UgdGhpcyBtb3JlIHJlbGlhYmxlIGJ5XG4gICAgLy8ga2VlcGluZyBhIGxpc3Qgb2Yga2V5cyB3ZSd2ZSBzZWVuIGluIHNlc3Npb25TdG9yYWdlLlxuICAgIC8vIEluc3RlYWQsIHdlIGp1c3QgZGVmYXVsdCB0byAwIGZvciBrZXlzIHdlIGRvbid0IGtub3cuXG5cbiAgICB2YXIgdG9JbmRleCA9IGFsbEtleXMuaW5kZXhPZih0b0xvY2F0aW9uLmtleSk7XG4gICAgaWYgKHRvSW5kZXggPT09IC0xKSB0b0luZGV4ID0gMDtcbiAgICB2YXIgZnJvbUluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGZyb21Mb2NhdGlvbi5rZXkpO1xuICAgIGlmIChmcm9tSW5kZXggPT09IC0xKSBmcm9tSW5kZXggPSAwO1xuICAgIHZhciBkZWx0YSA9IHRvSW5kZXggLSBmcm9tSW5kZXg7XG5cbiAgICBpZiAoZGVsdGEpIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IHRydWU7XG4gICAgICBnbyhkZWx0YSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGluaXRpYWxMb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKTtcbiAgdmFyIGFsbEtleXMgPSBbaW5pdGlhbExvY2F0aW9uLmtleV07IC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGJhc2VuYW1lICsgY3JlYXRlUGF0aChsb2NhdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoKHBhdGgsIHN0YXRlKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKHR5cGVvZiBwYXRoID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byBwdXNoIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpIDogdm9pZCAwO1xuICAgIHZhciBhY3Rpb24gPSAnUFVTSCc7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgdmFyIGhyZWYgPSBjcmVhdGVIcmVmKGxvY2F0aW9uKTtcbiAgICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXksXG4gICAgICAgICAgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHN0YXRlOiBzdGF0ZVxuICAgICAgICB9LCBudWxsLCBocmVmKTtcblxuICAgICAgICBpZiAoZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YoaGlzdG9yeS5sb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIHZhciBuZXh0S2V5cyA9IGFsbEtleXMuc2xpY2UoMCwgcHJldkluZGV4ICsgMSk7XG4gICAgICAgICAgbmV4dEtleXMucHVzaChsb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIGFsbEtleXMgPSBuZXh0S2V5cztcbiAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHN0YXRlID09PSB1bmRlZmluZWQsICdCcm93c2VyIGhpc3RvcnkgY2Fubm90IHB1c2ggc3RhdGUgaW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBIVE1MNSBoaXN0b3J5JykgOiB2b2lkIDA7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCEodHlwZW9mIHBhdGggPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHJlcGxhY2Ugd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJykgOiB2b2lkIDA7XG4gICAgdmFyIGFjdGlvbiA9ICdSRVBMQUNFJztcbiAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG4gICAgICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgICAgdmFyIGtleSA9IGxvY2F0aW9uLmtleSxcbiAgICAgICAgICBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuXG4gICAgICBpZiAoY2FuVXNlSGlzdG9yeSkge1xuICAgICAgICBnbG9iYWxIaXN0b3J5LnJlcGxhY2VTdGF0ZSh7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGhpc3RvcnkubG9jYXRpb24ua2V5KTtcbiAgICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkgYWxsS2V5c1twcmV2SW5kZXhdID0gbG9jYXRpb24ua2V5O1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0Jyb3dzZXIgaGlzdG9yeSBjYW5ub3QgcmVwbGFjZSBzdGF0ZSBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEhUTUw1IGhpc3RvcnknKSA6IHZvaWQgMDtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoaHJlZik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnbyhuKSB7XG4gICAgZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBnbygtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgZ28oMSk7XG4gIH1cblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gY2hlY2tET01MaXN0ZW5lcnMoZGVsdGEpIHtcbiAgICBsaXN0ZW5lckNvdW50ICs9IGRlbHRhO1xuXG4gICAgaWYgKGxpc3RlbmVyQ291bnQgPT09IDEgJiYgZGVsdGEgPT09IDEpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFBvcFN0YXRlRXZlbnQsIGhhbmRsZVBvcFN0YXRlKTtcbiAgICAgIGlmIChuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lcikgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9IGVsc2UgaWYgKGxpc3RlbmVyQ291bnQgPT09IDApIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFBvcFN0YXRlRXZlbnQsIGhhbmRsZVBvcFN0YXRlKTtcbiAgICAgIGlmIChuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lcikgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaXNCbG9ja2VkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gYmxvY2socHJvbXB0KSB7XG4gICAgaWYgKHByb21wdCA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm9tcHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdW5ibG9jayA9IHRyYW5zaXRpb25NYW5hZ2VyLnNldFByb21wdChwcm9tcHQpO1xuXG4gICAgaWYgKCFpc0Jsb2NrZWQpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuICAgICAgaXNCbG9ja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzQmxvY2tlZCkge1xuICAgICAgICBpc0Jsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5ibG9jaygpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICB2YXIgdW5saXN0ZW4gPSB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZ2xvYmFsSGlzdG9yeS5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogaW5pdGlhbExvY2F0aW9uLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcbiAgcmV0dXJuIGhpc3Rvcnk7XG59XG5cbnZhciBIYXNoQ2hhbmdlRXZlbnQkMSA9ICdoYXNoY2hhbmdlJztcbnZhciBIYXNoUGF0aENvZGVycyA9IHtcbiAgaGFzaGJhbmc6IHtcbiAgICBlbmNvZGVQYXRoOiBmdW5jdGlvbiBlbmNvZGVQYXRoKHBhdGgpIHtcbiAgICAgIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJyEnID8gcGF0aCA6ICchLycgKyBzdHJpcExlYWRpbmdTbGFzaChwYXRoKTtcbiAgICB9LFxuICAgIGRlY29kZVBhdGg6IGZ1bmN0aW9uIGRlY29kZVBhdGgocGF0aCkge1xuICAgICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnIScgPyBwYXRoLnN1YnN0cigxKSA6IHBhdGg7XG4gICAgfVxuICB9LFxuICBub3NsYXNoOiB7XG4gICAgZW5jb2RlUGF0aDogc3RyaXBMZWFkaW5nU2xhc2gsXG4gICAgZGVjb2RlUGF0aDogYWRkTGVhZGluZ1NsYXNoXG4gIH0sXG4gIHNsYXNoOiB7XG4gICAgZW5jb2RlUGF0aDogYWRkTGVhZGluZ1NsYXNoLFxuICAgIGRlY29kZVBhdGg6IGFkZExlYWRpbmdTbGFzaFxuICB9XG59O1xuXG5mdW5jdGlvbiBzdHJpcEhhc2godXJsKSB7XG4gIHZhciBoYXNoSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICByZXR1cm4gaGFzaEluZGV4ID09PSAtMSA/IHVybCA6IHVybC5zbGljZSgwLCBoYXNoSW5kZXgpO1xufVxuXG5mdW5jdGlvbiBnZXRIYXNoUGF0aCgpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICB2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICB2YXIgaGFzaEluZGV4ID0gaHJlZi5pbmRleE9mKCcjJyk7XG4gIHJldHVybiBoYXNoSW5kZXggPT09IC0xID8gJycgOiBocmVmLnN1YnN0cmluZyhoYXNoSW5kZXggKyAxKTtcbn1cblxuZnVuY3Rpb24gcHVzaEhhc2hQYXRoKHBhdGgpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlSGFzaFBhdGgocGF0aCkge1xuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShzdHJpcEhhc2god2luZG93LmxvY2F0aW9uLmhyZWYpICsgJyMnICsgcGF0aCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhhc2hIaXN0b3J5KHByb3BzKSB7XG4gIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgcHJvcHMgPSB7fTtcbiAgfVxuXG4gICFjYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdIYXNoIGhpc3RvcnkgbmVlZHMgYSBET00nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHZhciBnbG9iYWxIaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG4gIHZhciBjYW5Hb1dpdGhvdXRSZWxvYWQgPSBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpO1xuICB2YXIgX3Byb3BzID0gcHJvcHMsXG4gICAgICBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPSBfcHJvcHMuZ2V0VXNlckNvbmZpcm1hdGlvbixcbiAgICAgIGdldFVzZXJDb25maXJtYXRpb24gPSBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPT09IHZvaWQgMCA/IGdldENvbmZpcm1hdGlvbiA6IF9wcm9wcyRnZXRVc2VyQ29uZmlybSxcbiAgICAgIF9wcm9wcyRoYXNoVHlwZSA9IF9wcm9wcy5oYXNoVHlwZSxcbiAgICAgIGhhc2hUeXBlID0gX3Byb3BzJGhhc2hUeXBlID09PSB2b2lkIDAgPyAnc2xhc2gnIDogX3Byb3BzJGhhc2hUeXBlO1xuICB2YXIgYmFzZW5hbWUgPSBwcm9wcy5iYXNlbmFtZSA/IHN0cmlwVHJhaWxpbmdTbGFzaChhZGRMZWFkaW5nU2xhc2gocHJvcHMuYmFzZW5hbWUpKSA6ICcnO1xuICB2YXIgX0hhc2hQYXRoQ29kZXJzJGhhc2hUID0gSGFzaFBhdGhDb2RlcnNbaGFzaFR5cGVdLFxuICAgICAgZW5jb2RlUGF0aCA9IF9IYXNoUGF0aENvZGVycyRoYXNoVC5lbmNvZGVQYXRoLFxuICAgICAgZGVjb2RlUGF0aCA9IF9IYXNoUGF0aENvZGVycyRoYXNoVC5kZWNvZGVQYXRoO1xuXG4gIGZ1bmN0aW9uIGdldERPTUxvY2F0aW9uKCkge1xuICAgIHZhciBwYXRoID0gZGVjb2RlUGF0aChnZXRIYXNoUGF0aCgpKTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCFiYXNlbmFtZSB8fCBoYXNCYXNlbmFtZShwYXRoLCBiYXNlbmFtZSksICdZb3UgYXJlIGF0dGVtcHRpbmcgdG8gdXNlIGEgYmFzZW5hbWUgb24gYSBwYWdlIHdob3NlIFVSTCBwYXRoIGRvZXMgbm90IGJlZ2luICcgKyAnd2l0aCB0aGUgYmFzZW5hbWUuIEV4cGVjdGVkIHBhdGggXCInICsgcGF0aCArICdcIiB0byBiZWdpbiB3aXRoIFwiJyArIGJhc2VuYW1lICsgJ1wiLicpIDogdm9pZCAwO1xuICAgIGlmIChiYXNlbmFtZSkgcGF0aCA9IHN0cmlwQmFzZW5hbWUocGF0aCwgYmFzZW5hbWUpO1xuICAgIHJldHVybiBjcmVhdGVMb2NhdGlvbihwYXRoKTtcbiAgfVxuXG4gIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9IGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKCk7XG5cbiAgZnVuY3Rpb24gc2V0U3RhdGUobmV4dFN0YXRlKSB7XG4gICAgX2V4dGVuZHMoaGlzdG9yeSwgbmV4dFN0YXRlKTtcblxuICAgIGhpc3RvcnkubGVuZ3RoID0gZ2xvYmFsSGlzdG9yeS5sZW5ndGg7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfVxuXG4gIHZhciBmb3JjZU5leHRQb3AgPSBmYWxzZTtcbiAgdmFyIGlnbm9yZVBhdGggPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGxvY2F0aW9uc0FyZUVxdWFsJCQxKGEsIGIpIHtcbiAgICByZXR1cm4gYS5wYXRobmFtZSA9PT0gYi5wYXRobmFtZSAmJiBhLnNlYXJjaCA9PT0gYi5zZWFyY2ggJiYgYS5oYXNoID09PSBiLmhhc2g7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuICAgIHZhciBwYXRoID0gZ2V0SGFzaFBhdGgoKTtcbiAgICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKHBhdGgpO1xuXG4gICAgaWYgKHBhdGggIT09IGVuY29kZWRQYXRoKSB7XG4gICAgICAvLyBFbnN1cmUgd2UgYWx3YXlzIGhhdmUgYSBwcm9wZXJseS1lbmNvZGVkIGhhc2guXG4gICAgICByZXBsYWNlSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbigpO1xuICAgICAgdmFyIHByZXZMb2NhdGlvbiA9IGhpc3RvcnkubG9jYXRpb247XG4gICAgICBpZiAoIWZvcmNlTmV4dFBvcCAmJiBsb2NhdGlvbnNBcmVFcXVhbCQkMShwcmV2TG9jYXRpb24sIGxvY2F0aW9uKSkgcmV0dXJuOyAvLyBBIGhhc2hjaGFuZ2UgZG9lc24ndCBhbHdheXMgPT0gbG9jYXRpb24gY2hhbmdlLlxuXG4gICAgICBpZiAoaWdub3JlUGF0aCA9PT0gY3JlYXRlUGF0aChsb2NhdGlvbikpIHJldHVybjsgLy8gSWdub3JlIHRoaXMgY2hhbmdlOyB3ZSBhbHJlYWR5IHNldFN0YXRlIGluIHB1c2gvcmVwbGFjZS5cblxuICAgICAgaWdub3JlUGF0aCA9IG51bGw7XG4gICAgICBoYW5kbGVQb3AobG9jYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVBvcChsb2NhdGlvbikge1xuICAgIGlmIChmb3JjZU5leHRQb3ApIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuICAgICAgc2V0U3RhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFjdGlvbiA9ICdQT1AnO1xuICAgICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXZlcnRQb3AobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXZlcnRQb3AoZnJvbUxvY2F0aW9uKSB7XG4gICAgdmFyIHRvTG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uOyAvLyBUT0RPOiBXZSBjb3VsZCBwcm9iYWJseSBtYWtlIHRoaXMgbW9yZSByZWxpYWJsZSBieVxuICAgIC8vIGtlZXBpbmcgYSBsaXN0IG9mIHBhdGhzIHdlJ3ZlIHNlZW4gaW4gc2Vzc2lvblN0b3JhZ2UuXG4gICAgLy8gSW5zdGVhZCwgd2UganVzdCBkZWZhdWx0IHRvIDAgZm9yIHBhdGhzIHdlIGRvbid0IGtub3cuXG5cbiAgICB2YXIgdG9JbmRleCA9IGFsbFBhdGhzLmxhc3RJbmRleE9mKGNyZWF0ZVBhdGgodG9Mb2NhdGlvbikpO1xuICAgIGlmICh0b0luZGV4ID09PSAtMSkgdG9JbmRleCA9IDA7XG4gICAgdmFyIGZyb21JbmRleCA9IGFsbFBhdGhzLmxhc3RJbmRleE9mKGNyZWF0ZVBhdGgoZnJvbUxvY2F0aW9uKSk7XG4gICAgaWYgKGZyb21JbmRleCA9PT0gLTEpIGZyb21JbmRleCA9IDA7XG4gICAgdmFyIGRlbHRhID0gdG9JbmRleCAtIGZyb21JbmRleDtcblxuICAgIGlmIChkZWx0YSkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gdHJ1ZTtcbiAgICAgIGdvKGRlbHRhKTtcbiAgICB9XG4gIH0gLy8gRW5zdXJlIHRoZSBoYXNoIGlzIGVuY29kZWQgcHJvcGVybHkgYmVmb3JlIGRvaW5nIGFueXRoaW5nIGVsc2UuXG5cblxuICB2YXIgcGF0aCA9IGdldEhhc2hQYXRoKCk7XG4gIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgocGF0aCk7XG4gIGlmIChwYXRoICE9PSBlbmNvZGVkUGF0aCkgcmVwbGFjZUhhc2hQYXRoKGVuY29kZWRQYXRoKTtcbiAgdmFyIGluaXRpYWxMb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKCk7XG4gIHZhciBhbGxQYXRocyA9IFtjcmVhdGVQYXRoKGluaXRpYWxMb2NhdGlvbildOyAvLyBQdWJsaWMgaW50ZXJmYWNlXG5cbiAgZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHZhciBiYXNlVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmFzZScpO1xuICAgIHZhciBocmVmID0gJyc7XG5cbiAgICBpZiAoYmFzZVRhZyAmJiBiYXNlVGFnLmdldEF0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICBocmVmID0gc3RyaXBIYXNoKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHJlZiArICcjJyArIGVuY29kZVBhdGgoYmFzZW5hbWUgKyBjcmVhdGVQYXRoKGxvY2F0aW9uKSk7XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoKHBhdGgsIHN0YXRlKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnSGFzaCBoaXN0b3J5IGNhbm5vdCBwdXNoIHN0YXRlOyBpdCBpcyBpZ25vcmVkJykgOiB2b2lkIDA7XG4gICAgdmFyIGFjdGlvbiA9ICdQVVNIJztcbiAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihwYXRoLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcbiAgICAgIHZhciBwYXRoID0gY3JlYXRlUGF0aChsb2NhdGlvbik7XG4gICAgICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKGJhc2VuYW1lICsgcGF0aCk7XG4gICAgICB2YXIgaGFzaENoYW5nZWQgPSBnZXRIYXNoUGF0aCgpICE9PSBlbmNvZGVkUGF0aDtcblxuICAgICAgaWYgKGhhc2hDaGFuZ2VkKSB7XG4gICAgICAgIC8vIFdlIGNhbm5vdCB0ZWxsIGlmIGEgaGFzaGNoYW5nZSB3YXMgY2F1c2VkIGJ5IGEgUFVTSCwgc28gd2UnZFxuICAgICAgICAvLyByYXRoZXIgc2V0U3RhdGUgaGVyZSBhbmQgaWdub3JlIHRoZSBoYXNoY2hhbmdlLiBUaGUgY2F2ZWF0IGhlcmVcbiAgICAgICAgLy8gaXMgdGhhdCBvdGhlciBoYXNoIGhpc3RvcmllcyBpbiB0aGUgcGFnZSB3aWxsIGNvbnNpZGVyIGl0IGEgUE9QLlxuICAgICAgICBpZ25vcmVQYXRoID0gcGF0aDtcbiAgICAgICAgcHVzaEhhc2hQYXRoKGVuY29kZWRQYXRoKTtcbiAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbFBhdGhzLmxhc3RJbmRleE9mKGNyZWF0ZVBhdGgoaGlzdG9yeS5sb2NhdGlvbikpO1xuICAgICAgICB2YXIgbmV4dFBhdGhzID0gYWxsUGF0aHMuc2xpY2UoMCwgcHJldkluZGV4ICsgMSk7XG4gICAgICAgIG5leHRQYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICBhbGxQYXRocyA9IG5leHRQYXRocztcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsICdIYXNoIGhpc3RvcnkgY2Fubm90IFBVU0ggdGhlIHNhbWUgcGF0aDsgYSBuZXcgZW50cnkgd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGhpc3Rvcnkgc3RhY2snKSA6IHZvaWQgMDtcbiAgICAgICAgc2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHN0YXRlID09PSB1bmRlZmluZWQsICdIYXNoIGhpc3RvcnkgY2Fubm90IHJlcGxhY2Ugc3RhdGU7IGl0IGlzIGlnbm9yZWQnKSA6IHZvaWQgMDtcbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgdmFyIHBhdGggPSBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgICAgIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgoYmFzZW5hbWUgKyBwYXRoKTtcbiAgICAgIHZhciBoYXNoQ2hhbmdlZCA9IGdldEhhc2hQYXRoKCkgIT09IGVuY29kZWRQYXRoO1xuXG4gICAgICBpZiAoaGFzaENoYW5nZWQpIHtcbiAgICAgICAgLy8gV2UgY2Fubm90IHRlbGwgaWYgYSBoYXNoY2hhbmdlIHdhcyBjYXVzZWQgYnkgYSBSRVBMQUNFLCBzbyB3ZSdkXG4gICAgICAgIC8vIHJhdGhlciBzZXRTdGF0ZSBoZXJlIGFuZCBpZ25vcmUgdGhlIGhhc2hjaGFuZ2UuIFRoZSBjYXZlYXQgaGVyZVxuICAgICAgICAvLyBpcyB0aGF0IG90aGVyIGhhc2ggaGlzdG9yaWVzIGluIHRoZSBwYWdlIHdpbGwgY29uc2lkZXIgaXQgYSBQT1AuXG4gICAgICAgIGlnbm9yZVBhdGggPSBwYXRoO1xuICAgICAgICByZXBsYWNlSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldkluZGV4ID0gYWxsUGF0aHMuaW5kZXhPZihjcmVhdGVQYXRoKGhpc3RvcnkubG9jYXRpb24pKTtcbiAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSBhbGxQYXRoc1twcmV2SW5kZXhdID0gcGF0aDtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnbyhuKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhjYW5Hb1dpdGhvdXRSZWxvYWQsICdIYXNoIGhpc3RvcnkgZ28obikgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZCBpbiB0aGlzIGJyb3dzZXInKSA6IHZvaWQgMDtcbiAgICBnbG9iYWxIaXN0b3J5LmdvKG4pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBjaGVja0RPTUxpc3RlbmVycyhkZWx0YSkge1xuICAgIGxpc3RlbmVyQ291bnQgKz0gZGVsdGE7XG5cbiAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMSAmJiBkZWx0YSA9PT0gMSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoSGFzaENoYW5nZUV2ZW50JDEsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoSGFzaENoYW5nZUV2ZW50JDEsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpc0Jsb2NrZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBibG9jayhwcm9tcHQpIHtcbiAgICBpZiAocHJvbXB0ID09PSB2b2lkIDApIHtcbiAgICAgIHByb21wdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB1bmJsb2NrID0gdHJhbnNpdGlvbk1hbmFnZXIuc2V0UHJvbXB0KHByb21wdCk7XG5cbiAgICBpZiAoIWlzQmxvY2tlZCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgICBpc0Jsb2NrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNCbG9ja2VkKSB7XG4gICAgICAgIGlzQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmJsb2NrKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHZhciB1bmxpc3RlbiA9IHRyYW5zaXRpb25NYW5hZ2VyLmFwcGVuZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSB7XG4gICAgbGVuZ3RoOiBnbG9iYWxIaXN0b3J5Lmxlbmd0aCxcbiAgICBhY3Rpb246ICdQT1AnLFxuICAgIGxvY2F0aW9uOiBpbml0aWFsTG9jYXRpb24sXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGJsb2NrOiBibG9jayxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xuICByZXR1cm4gaGlzdG9yeTtcbn1cblxuZnVuY3Rpb24gY2xhbXAobiwgbG93ZXJCb3VuZCwgdXBwZXJCb3VuZCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgbG93ZXJCb3VuZCksIHVwcGVyQm91bmQpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgaGlzdG9yeSBvYmplY3QgdGhhdCBzdG9yZXMgbG9jYXRpb25zIGluIG1lbW9yeS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbW9yeUhpc3RvcnkocHJvcHMpIHtcbiAgaWYgKHByb3BzID09PSB2b2lkIDApIHtcbiAgICBwcm9wcyA9IHt9O1xuICB9XG5cbiAgdmFyIF9wcm9wcyA9IHByb3BzLFxuICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IF9wcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgX3Byb3BzJGluaXRpYWxFbnRyaWVzID0gX3Byb3BzLmluaXRpYWxFbnRyaWVzLFxuICAgICAgaW5pdGlhbEVudHJpZXMgPSBfcHJvcHMkaW5pdGlhbEVudHJpZXMgPT09IHZvaWQgMCA/IFsnLyddIDogX3Byb3BzJGluaXRpYWxFbnRyaWVzLFxuICAgICAgX3Byb3BzJGluaXRpYWxJbmRleCA9IF9wcm9wcy5pbml0aWFsSW5kZXgsXG4gICAgICBpbml0aWFsSW5kZXggPSBfcHJvcHMkaW5pdGlhbEluZGV4ID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJGluaXRpYWxJbmRleCxcbiAgICAgIF9wcm9wcyRrZXlMZW5ndGggPSBfcHJvcHMua2V5TGVuZ3RoLFxuICAgICAga2V5TGVuZ3RoID0gX3Byb3BzJGtleUxlbmd0aCA9PT0gdm9pZCAwID8gNiA6IF9wcm9wcyRrZXlMZW5ndGg7XG4gIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9IGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKCk7XG5cbiAgZnVuY3Rpb24gc2V0U3RhdGUobmV4dFN0YXRlKSB7XG4gICAgX2V4dGVuZHMoaGlzdG9yeSwgbmV4dFN0YXRlKTtcblxuICAgIGhpc3RvcnkubGVuZ3RoID0gaGlzdG9yeS5lbnRyaWVzLmxlbmd0aDtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwga2V5TGVuZ3RoKTtcbiAgfVxuXG4gIHZhciBpbmRleCA9IGNsYW1wKGluaXRpYWxJbmRleCwgMCwgaW5pdGlhbEVudHJpZXMubGVuZ3RoIC0gMSk7XG4gIHZhciBlbnRyaWVzID0gaW5pdGlhbEVudHJpZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgIHJldHVybiB0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnID8gY3JlYXRlTG9jYXRpb24oZW50cnksIHVuZGVmaW5lZCwgY3JlYXRlS2V5KCkpIDogY3JlYXRlTG9jYXRpb24oZW50cnksIHVuZGVmaW5lZCwgZW50cnkua2V5IHx8IGNyZWF0ZUtleSgpKTtcbiAgfSk7IC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICB2YXIgY3JlYXRlSHJlZiA9IGNyZWF0ZVBhdGg7XG5cbiAgZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcHVzaCB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKSA6IHZvaWQgMDtcbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcbiAgICAgIHZhciBwcmV2SW5kZXggPSBoaXN0b3J5LmluZGV4O1xuICAgICAgdmFyIG5leHRJbmRleCA9IHByZXZJbmRleCArIDE7XG4gICAgICB2YXIgbmV4dEVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMuc2xpY2UoMCk7XG5cbiAgICAgIGlmIChuZXh0RW50cmllcy5sZW5ndGggPiBuZXh0SW5kZXgpIHtcbiAgICAgICAgbmV4dEVudHJpZXMuc3BsaWNlKG5leHRJbmRleCwgbmV4dEVudHJpZXMubGVuZ3RoIC0gbmV4dEluZGV4LCBsb2NhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0RW50cmllcy5wdXNoKGxvY2F0aW9uKTtcbiAgICAgIH1cblxuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICBpbmRleDogbmV4dEluZGV4LFxuICAgICAgICBlbnRyaWVzOiBuZXh0RW50cmllc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKHR5cGVvZiBwYXRoID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byByZXBsYWNlIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpIDogdm9pZCAwO1xuICAgIHZhciBhY3Rpb24gPSAnUkVQTEFDRSc7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgaGlzdG9yeS5lbnRyaWVzW2hpc3RvcnkuaW5kZXhdID0gbG9jYXRpb247XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ28obikge1xuICAgIHZhciBuZXh0SW5kZXggPSBjbGFtcChoaXN0b3J5LmluZGV4ICsgbiwgMCwgaGlzdG9yeS5lbnRyaWVzLmxlbmd0aCAtIDEpO1xuICAgIHZhciBhY3Rpb24gPSAnUE9QJztcbiAgICB2YXIgbG9jYXRpb24gPSBoaXN0b3J5LmVudHJpZXNbbmV4dEluZGV4XTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgaW5kZXg6IG5leHRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1pbWljIHRoZSBiZWhhdmlvciBvZiBET00gaGlzdG9yaWVzIGJ5XG4gICAgICAgIC8vIGNhdXNpbmcgYSByZW5kZXIgYWZ0ZXIgYSBjYW5jZWxsZWQgUE9QLlxuICAgICAgICBzZXRTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbkdvKG4pIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gaGlzdG9yeS5pbmRleCArIG47XG4gICAgcmV0dXJuIG5leHRJbmRleCA+PSAwICYmIG5leHRJbmRleCA8IGhpc3RvcnkuZW50cmllcy5sZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBibG9jayhwcm9tcHQpIHtcbiAgICBpZiAocHJvbXB0ID09PSB2b2lkIDApIHtcbiAgICAgIHByb21wdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHJldHVybiB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIH1cblxuICB2YXIgaGlzdG9yeSA9IHtcbiAgICBsZW5ndGg6IGVudHJpZXMubGVuZ3RoLFxuICAgIGFjdGlvbjogJ1BPUCcsXG4gICAgbG9jYXRpb246IGVudHJpZXNbaW5kZXhdLFxuICAgIGluZGV4OiBpbmRleCxcbiAgICBlbnRyaWVzOiBlbnRyaWVzLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjYW5HbzogY2FuR28sXG4gICAgYmxvY2s6IGJsb2NrLFxuICAgIGxpc3RlbjogbGlzdGVuXG4gIH07XG4gIHJldHVybiBoaXN0b3J5O1xufVxuXG5leHBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIGNyZWF0ZU1lbW9yeUhpc3RvcnksIGNyZWF0ZUxvY2F0aW9uLCBsb2NhdGlvbnNBcmVFcXVhbCwgcGFyc2VQYXRoLCBjcmVhdGVQYXRoIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcblxudmFyIE1BWF9TSUdORURfMzFfQklUX0lOVCA9IDEwNzM3NDE4MjM7XG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHt9O1xuXG5mdW5jdGlvbiBnZXRVbmlxdWVJZCgpIHtcbiAgdmFyIGtleSA9ICdfX2dsb2JhbF91bmlxdWVfaWRfXyc7XG4gIHJldHVybiBjb21tb25qc0dsb2JhbFtrZXldID0gKGNvbW1vbmpzR2xvYmFsW2tleV0gfHwgMCkgKyAxO1xufVxuXG5mdW5jdGlvbiBvYmplY3RJcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRFbWl0dGVyKHZhbHVlKSB7XG4gIHZhciBoYW5kbGVycyA9IFtdO1xuICByZXR1cm4ge1xuICAgIG9uOiBmdW5jdGlvbiBvbihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH0sXG4gICAgb2ZmOiBmdW5jdGlvbiBvZmYoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcnMgPSBoYW5kbGVycy5maWx0ZXIoZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgcmV0dXJuIGggIT09IGhhbmRsZXI7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3VmFsdWUsIGNoYW5nZWRCaXRzKSB7XG4gICAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlcih2YWx1ZSwgY2hhbmdlZEJpdHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW5bMF0gOiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVhY3RDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgdmFyIF9Qcm92aWRlciRjaGlsZENvbnRleCwgX0NvbnN1bWVyJGNvbnRleHRUeXBlO1xuXG4gIHZhciBjb250ZXh0UHJvcCA9ICdfX2NyZWF0ZS1yZWFjdC1jb250ZXh0LScgKyBnZXRVbmlxdWVJZCgpICsgJ19fJztcblxuICB2YXIgUHJvdmlkZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHNMb29zZShQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBQcm92aWRlcigpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX3RoaXMgPSBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgIF90aGlzLmVtaXR0ZXIgPSBjcmVhdGVFdmVudEVtaXR0ZXIoX3RoaXMucHJvcHMudmFsdWUpO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8gPSBQcm92aWRlci5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8uZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIHJldHVybiBfcmVmID0ge30sIF9yZWZbY29udGV4dFByb3BdID0gdGhpcy5lbWl0dGVyLCBfcmVmO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gbmV4dFByb3BzLnZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IG5leHRQcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIGNoYW5nZWRCaXRzO1xuXG4gICAgICAgIGlmIChvYmplY3RJcyhvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hhbmdlZEJpdHMgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoYW5nZWRCaXRzID0gdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSAnZnVuY3Rpb24nID8gY2FsY3VsYXRlQ2hhbmdlZEJpdHMob2xkVmFsdWUsIG5ld1ZhbHVlKSA6IE1BWF9TSUdORURfMzFfQklUX0lOVDtcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB3YXJuaW5nKChjaGFuZ2VkQml0cyAmIE1BWF9TSUdORURfMzFfQklUX0lOVCkgPT09IGNoYW5nZWRCaXRzLCAnY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IEV4cGVjdGVkIHRoZSByZXR1cm4gdmFsdWUgdG8gYmUgYSAnICsgJzMxLWJpdCBpbnRlZ2VyLiBJbnN0ZWFkIHJlY2VpdmVkOiAnICsgY2hhbmdlZEJpdHMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoYW5nZWRCaXRzIHw9IDA7XG5cbiAgICAgICAgICBpZiAoY2hhbmdlZEJpdHMgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5zZXQobmV4dFByb3BzLnZhbHVlLCBjaGFuZ2VkQml0cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb3ZpZGVyO1xuICB9KENvbXBvbmVudCk7XG5cbiAgUHJvdmlkZXIuY2hpbGRDb250ZXh0VHlwZXMgPSAoX1Byb3ZpZGVyJGNoaWxkQ29udGV4ID0ge30sIF9Qcm92aWRlciRjaGlsZENvbnRleFtjb250ZXh0UHJvcF0gPSBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIF9Qcm92aWRlciRjaGlsZENvbnRleCk7XG5cbiAgdmFyIENvbnN1bWVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICAgIF9pbmhlcml0c0xvb3NlKENvbnN1bWVyLCBfQ29tcG9uZW50Mik7XG5cbiAgICBmdW5jdGlvbiBDb25zdW1lcigpIHtcbiAgICAgIHZhciBfdGhpczI7XG5cbiAgICAgIF90aGlzMiA9IF9Db21wb25lbnQyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgIF90aGlzMi5zdGF0ZSA9IHtcbiAgICAgICAgdmFsdWU6IF90aGlzMi5nZXRWYWx1ZSgpXG4gICAgICB9O1xuXG4gICAgICBfdGhpczIub25VcGRhdGUgPSBmdW5jdGlvbiAobmV3VmFsdWUsIGNoYW5nZWRCaXRzKSB7XG4gICAgICAgIHZhciBvYnNlcnZlZEJpdHMgPSBfdGhpczIub2JzZXJ2ZWRCaXRzIHwgMDtcblxuICAgICAgICBpZiAoKG9ic2VydmVkQml0cyAmIGNoYW5nZWRCaXRzKSAhPT0gMCkge1xuICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogX3RoaXMyLmdldFZhbHVlKClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzMjtcbiAgICB9XG5cbiAgICB2YXIgX3Byb3RvMiA9IENvbnN1bWVyLnByb3RvdHlwZTtcblxuICAgIF9wcm90bzIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gbmV4dFByb3BzLm9ic2VydmVkQml0cztcbiAgICAgIHRoaXMub2JzZXJ2ZWRCaXRzID0gb2JzZXJ2ZWRCaXRzID09PSB1bmRlZmluZWQgfHwgb2JzZXJ2ZWRCaXRzID09PSBudWxsID8gTUFYX1NJR05FRF8zMV9CSVRfSU5UIDogb2JzZXJ2ZWRCaXRzO1xuICAgIH07XG5cbiAgICBfcHJvdG8yLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXSkge1xuICAgICAgICB0aGlzLmNvbnRleHRbY29udGV4dFByb3BdLm9uKHRoaXMub25VcGRhdGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gdGhpcy5wcm9wcy5vYnNlcnZlZEJpdHM7XG4gICAgICB0aGlzLm9ic2VydmVkQml0cyA9IG9ic2VydmVkQml0cyA9PT0gdW5kZWZpbmVkIHx8IG9ic2VydmVkQml0cyA9PT0gbnVsbCA/IE1BWF9TSUdORURfMzFfQklUX0lOVCA6IG9ic2VydmVkQml0cztcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0pIHtcbiAgICAgICAgdGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXS5vZmYodGhpcy5vblVwZGF0ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90bzIuZ2V0VmFsdWUgPSBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbY29udGV4dFByb3BdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRbY29udGV4dFByb3BdLmdldCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvMi5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gb25seUNoaWxkKHRoaXMucHJvcHMuY2hpbGRyZW4pKHRoaXMuc3RhdGUudmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ29uc3VtZXI7XG4gIH0oQ29tcG9uZW50KTtcblxuICBDb25zdW1lci5jb250ZXh0VHlwZXMgPSAoX0NvbnN1bWVyJGNvbnRleHRUeXBlID0ge30sIF9Db25zdW1lciRjb250ZXh0VHlwZVtjb250ZXh0UHJvcF0gPSBQcm9wVHlwZXMub2JqZWN0LCBfQ29uc3VtZXIkY29udGV4dFR5cGUpO1xuICByZXR1cm4ge1xuICAgIFByb3ZpZGVyOiBQcm92aWRlcixcbiAgICBDb25zdW1lcjogQ29uc3VtZXJcbiAgfTtcbn1cblxudmFyIGluZGV4ID0gUmVhY3QuY3JlYXRlQ29udGV4dCB8fCBjcmVhdGVSZWFjdENvbnRleHQ7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2ltZy9GcmFtZTEuYWNhNDVhYjcxYzhmODFiOWRjN2E1ZDRlMzc4Y2NiZjgucG5nXCIsXCJoZWlnaHRcIjo0MjAsXCJ3aWR0aFwiOjQyMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBVDBsRVFWUjQyaldNQVFxQU1Bd0Q5Ly9IS200S3JpMkpoMk9FSHVHZ2Flblg1VW1LRm03bDIvWkY3QVBka2hMY1loa3hLRjFRUXlsRVJ3d3RIZnRGRXJRSzhZOCtnam8xaFVpWFF3R253aDkrWm40VVZWcElvUUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2ltZy9GcmFtZTIuZDdlYTljOGZjODY2OTg4MTVmY2JjMmVhNDliZDE1NTEucG5nXCIsXCJoZWlnaHRcIjo0MjAsXCJ3aWR0aFwiOjQyMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQU1BQUFEejBVNjVBQUFBUDFCTVZFWC8vLy84L1AzdjcrL3M3ZVBuNStmbjUrYmw1ZVhWMWRYLy8vLzgvUDM2K3ZyNit2bnY3Ky90N2VUczdlUG41K2ZuNStibDVlWGUzdDdkM2QzVjFkWDRDa0E0QUFBQUNIUlNUbFArL3Y3Ky92NysvcmdDcjI0QUFBQS9TVVJCVkhqYUZjcEJFb0FnREFUQkZRUW5FSVVnLzMrclpaOWJyeE9CTC9sbURyWUxtbGtEeGJCOEgyZFZUTXVQbFJEMHc3cjRjeG02a3BaVGc3UStaVGtDbWZhOHhaY0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsInZhciBpc2FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbi8qKlxuICogRXhwb3NlIGBwYXRoVG9SZWdleHBgLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGhUb1JlZ2V4cFxubW9kdWxlLmV4cG9ydHMucGFyc2UgPSBwYXJzZVxubW9kdWxlLmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGVcbm1vZHVsZS5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cy50b2tlbnNUb1JlZ0V4cCA9IHRva2Vuc1RvUmVnRXhwXG5cbi8qKlxuICogVGhlIG1haW4gcGF0aCBtYXRjaGluZyByZWdleHAgdXRpbGl0eS5cbiAqXG4gKiBAdHlwZSB7UmVnRXhwfVxuICovXG52YXIgUEFUSF9SRUdFWFAgPSBuZXcgUmVnRXhwKFtcbiAgLy8gTWF0Y2ggZXNjYXBlZCBjaGFyYWN0ZXJzIHRoYXQgd291bGQgb3RoZXJ3aXNlIGFwcGVhciBpbiBmdXR1cmUgbWF0Y2hlcy5cbiAgLy8gVGhpcyBhbGxvd3MgdGhlIHVzZXIgdG8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyB0aGF0IHdvbid0IHRyYW5zZm9ybS5cbiAgJyhcXFxcXFxcXC4pJyxcbiAgLy8gTWF0Y2ggRXhwcmVzcy1zdHlsZSBwYXJhbWV0ZXJzIGFuZCB1bi1uYW1lZCBwYXJhbWV0ZXJzIHdpdGggYSBwcmVmaXhcbiAgLy8gYW5kIG9wdGlvbmFsIHN1ZmZpeGVzLiBNYXRjaGVzIGFwcGVhciBhczpcbiAgLy9cbiAgLy8gXCIvOnRlc3QoXFxcXGQrKT9cIiA9PiBbXCIvXCIsIFwidGVzdFwiLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCBcIj9cIiwgdW5kZWZpbmVkXVxuICAvLyBcIi9yb3V0ZShcXFxcZCspXCIgID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gIC8vIFwiLypcIiAgICAgICAgICAgID0+IFtcIi9cIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIipcIl1cbiAgJyhbXFxcXC8uXSk/KD86KD86XFxcXDooXFxcXHcrKSg/OlxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpP3xcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKShbKyo/XSk/fChcXFxcKikpJ1xuXS5qb2luKCd8JyksICdnJylcblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshQXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlIChzdHIsIG9wdGlvbnMpIHtcbiAgdmFyIHRva2VucyA9IFtdXG4gIHZhciBrZXkgPSAwXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIHBhdGggPSAnJ1xuICB2YXIgZGVmYXVsdERlbGltaXRlciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nXG4gIHZhciByZXNcblxuICB3aGlsZSAoKHJlcyA9IFBBVEhfUkVHRVhQLmV4ZWMoc3RyKSkgIT0gbnVsbCkge1xuICAgIHZhciBtID0gcmVzWzBdXG4gICAgdmFyIGVzY2FwZWQgPSByZXNbMV1cbiAgICB2YXIgb2Zmc2V0ID0gcmVzLmluZGV4XG4gICAgcGF0aCArPSBzdHIuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICBpbmRleCA9IG9mZnNldCArIG0ubGVuZ3RoXG5cbiAgICAvLyBJZ25vcmUgYWxyZWFkeSBlc2NhcGVkIHNlcXVlbmNlcy5cbiAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgcGF0aCArPSBlc2NhcGVkWzFdXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhciBuZXh0ID0gc3RyW2luZGV4XVxuICAgIHZhciBwcmVmaXggPSByZXNbMl1cbiAgICB2YXIgbmFtZSA9IHJlc1szXVxuICAgIHZhciBjYXB0dXJlID0gcmVzWzRdXG4gICAgdmFyIGdyb3VwID0gcmVzWzVdXG4gICAgdmFyIG1vZGlmaWVyID0gcmVzWzZdXG4gICAgdmFyIGFzdGVyaXNrID0gcmVzWzddXG5cbiAgICAvLyBQdXNoIHRoZSBjdXJyZW50IHBhdGggb250byB0aGUgdG9rZW5zLlxuICAgIGlmIChwYXRoKSB7XG4gICAgICB0b2tlbnMucHVzaChwYXRoKVxuICAgICAgcGF0aCA9ICcnXG4gICAgfVxuXG4gICAgdmFyIHBhcnRpYWwgPSBwcmVmaXggIT0gbnVsbCAmJiBuZXh0ICE9IG51bGwgJiYgbmV4dCAhPT0gcHJlZml4XG4gICAgdmFyIHJlcGVhdCA9IG1vZGlmaWVyID09PSAnKycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBvcHRpb25hbCA9IG1vZGlmaWVyID09PSAnPycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBkZWxpbWl0ZXIgPSByZXNbMl0gfHwgZGVmYXVsdERlbGltaXRlclxuICAgIHZhciBwYXR0ZXJuID0gY2FwdHVyZSB8fCBncm91cFxuXG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgIHByZWZpeDogcHJlZml4IHx8ICcnLFxuICAgICAgZGVsaW1pdGVyOiBkZWxpbWl0ZXIsXG4gICAgICBvcHRpb25hbDogb3B0aW9uYWwsXG4gICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgIHBhcnRpYWw6IHBhcnRpYWwsXG4gICAgICBhc3RlcmlzazogISFhc3RlcmlzayxcbiAgICAgIHBhdHRlcm46IHBhdHRlcm4gPyBlc2NhcGVHcm91cChwYXR0ZXJuKSA6IChhc3RlcmlzayA/ICcuKicgOiAnW14nICsgZXNjYXBlU3RyaW5nKGRlbGltaXRlcikgKyAnXSs/JylcbiAgICB9KVxuICB9XG5cbiAgLy8gTWF0Y2ggYW55IGNoYXJhY3RlcnMgc3RpbGwgcmVtYWluaW5nLlxuICBpZiAoaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgcGF0aCArPSBzdHIuc3Vic3RyKGluZGV4KVxuICB9XG5cbiAgLy8gSWYgdGhlIHBhdGggZXhpc3RzLCBwdXNoIGl0IG9udG8gdGhlIGVuZC5cbiAgaWYgKHBhdGgpIHtcbiAgICB0b2tlbnMucHVzaChwYXRoKVxuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IWZ1bmN0aW9uKE9iamVjdD0sIE9iamVjdD0pfVxuICovXG5mdW5jdGlvbiBjb21waWxlIChzdHIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucylcbn1cblxuLyoqXG4gKiBQcmV0dGllciBlbmNvZGluZyBvZiBVUkkgcGF0aCBzZWdtZW50cy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bXFwvPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEVuY29kZSB0aGUgYXN0ZXJpc2sgcGFyYW1ldGVyLiBTaW1pbGFyIHRvIGBwcmV0dHlgLCBidXQgYWxsb3dzIHNsYXNoZXMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVBc3RlcmlzayAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uICh0b2tlbnMsIG9wdGlvbnMpIHtcbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gIHZhciBtYXRjaGVzID0gbmV3IEFycmF5KHRva2Vucy5sZW5ndGgpXG5cbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHBhdHRlcm5zIGJlZm9yZSBjb21waWxhdGlvbi5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHRva2Vuc1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1hdGNoZXNbaV0gPSBuZXcgUmVnRXhwKCdeKD86JyArIHRva2Vuc1tpXS5wYXR0ZXJuICsgJykkJywgZmxhZ3Mob3B0aW9ucykpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIG9wdHMpIHtcbiAgICB2YXIgcGF0aCA9ICcnXG4gICAgdmFyIGRhdGEgPSBvYmogfHwge31cbiAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge31cbiAgICB2YXIgZW5jb2RlID0gb3B0aW9ucy5wcmV0dHkgPyBlbmNvZGVVUklDb21wb25lbnRQcmV0dHkgOiBlbmNvZGVVUklDb21wb25lbnRcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGF0aCArPSB0b2tlblxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IGRhdGFbdG9rZW4ubmFtZV1cbiAgICAgIHZhciBzZWdtZW50XG5cbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgIC8vIFByZXBlbmQgcGFydGlhbCBzZWdtZW50IHByZWZpeGVzLlxuICAgICAgICAgIGlmICh0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBiZSBkZWZpbmVkJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNhcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCByZXBlYXQsIGJ1dCByZWNlaXZlZCBgJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSArICdgJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IGJlIGVtcHR5JylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSlcblxuICAgICAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgYCcgKyBKU09OLnN0cmluZ2lmeShzZWdtZW50KSArICdgJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXRoICs9IChqID09PSAwID8gdG9rZW4ucHJlZml4IDogdG9rZW4uZGVsaW1pdGVyKSArIHNlZ21lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHNlZ21lbnQgPSB0b2tlbi5hc3RlcmlzayA/IGVuY29kZUFzdGVyaXNrKHZhbHVlKSA6IGVuY29kZSh2YWx1ZSlcblxuICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgXCInICsgc2VnbWVudCArICdcIicpXG4gICAgICB9XG5cbiAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudFxuICAgIH1cblxuICAgIHJldHVybiBwYXRoXG4gIH1cbn1cblxuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXxcXC9cXFxcXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogRXNjYXBlIHRoZSBjYXB0dXJpbmcgZ3JvdXAgYnkgZXNjYXBpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBtZWFuaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gZ3JvdXBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlR3JvdXAgKGdyb3VwKSB7XG4gIHJldHVybiBncm91cC5yZXBsYWNlKC8oWz0hOiRcXC8oKV0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEF0dGFjaCB0aGUga2V5cyBhcyBhIHByb3BlcnR5IG9mIHRoZSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcmVcbiAqIEBwYXJhbSAge0FycmF5fSAgIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGF0dGFjaEtleXMgKHJlLCBrZXlzKSB7XG4gIHJlLmtleXMgPSBrZXlzXG4gIHJldHVybiByZVxufVxuXG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZsYWdzIChvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gJycgOiAnaSdcbn1cblxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAgKHBhdGgsIGtleXMpIHtcbiAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpXG5cbiAgaWYgKGdyb3Vwcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBuYW1lOiBpLFxuICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICByZXBlYXQ6IGZhbHNlLFxuICAgICAgICBwYXJ0aWFsOiBmYWxzZSxcbiAgICAgICAgYXN0ZXJpc2s6IGZhbHNlLFxuICAgICAgICBwYXR0ZXJuOiBudWxsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHBhdGgsIGtleXMpXG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgcGF0aFxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICB2YXIgcGFydHMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIHBhcnRzLnB1c2gocGF0aFRvUmVnZXhwKHBhdGhbaV0sIGtleXMsIG9wdGlvbnMpLnNvdXJjZSlcbiAgfVxuXG4gIHZhciByZWdleHAgPSBuZXcgUmVnRXhwKCcoPzonICsgcGFydHMuam9pbignfCcpICsgJyknLCBmbGFncyhvcHRpb25zKSlcblxuICByZXR1cm4gYXR0YWNoS2V5cyhyZWdleHAsIGtleXMpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvUmVnRXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgICAgICAgICB0b2tlbnNcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0ga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ0V4cCAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmICghaXNhcnJheShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSAvKiogQHR5cGUgeyFPYmplY3R9ICovIChrZXlzIHx8IG9wdGlvbnMpXG4gICAga2V5cyA9IFtdXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdFxuICB2YXIgZW5kID0gb3B0aW9ucy5lbmQgIT09IGZhbHNlXG4gIHZhciByb3V0ZSA9ICcnXG5cbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcodG9rZW4pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcodG9rZW4ucHJlZml4KVxuICAgICAgdmFyIGNhcHR1cmUgPSAnKD86JyArIHRva2VuLnBhdHRlcm4gKyAnKSdcblxuICAgICAga2V5cy5wdXNoKHRva2VuKVxuXG4gICAgICBpZiAodG9rZW4ucmVwZWF0KSB7XG4gICAgICAgIGNhcHR1cmUgKz0gJyg/OicgKyBwcmVmaXggKyBjYXB0dXJlICsgJykqJ1xuICAgICAgfVxuXG4gICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgY2FwdHVyZSA9ICcoPzonICsgcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpKT8nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKT8nXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyknXG4gICAgICB9XG5cbiAgICAgIHJvdXRlICs9IGNhcHR1cmVcbiAgICB9XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8ICcvJylcbiAgdmFyIGVuZHNXaXRoRGVsaW1pdGVyID0gcm91dGUuc2xpY2UoLWRlbGltaXRlci5sZW5ndGgpID09PSBkZWxpbWl0ZXJcblxuICAvLyBJbiBub24tc3RyaWN0IG1vZGUgd2UgYWxsb3cgYSBzbGFzaCBhdCB0aGUgZW5kIG9mIG1hdGNoLiBJZiB0aGUgcGF0aCB0b1xuICAvLyBtYXRjaCBhbHJlYWR5IGVuZHMgd2l0aCBhIHNsYXNoLCB3ZSByZW1vdmUgaXQgZm9yIGNvbnNpc3RlbmN5LiBUaGUgc2xhc2hcbiAgLy8gaXMgdmFsaWQgYXQgdGhlIGVuZCBvZiBhIHBhdGggbWF0Y2gsIG5vdCBpbiB0aGUgbWlkZGxlLiBUaGlzIGlzIGltcG9ydGFudFxuICAvLyBpbiBub24tZW5kaW5nIG1vZGUsIHdoZXJlIFwiL3Rlc3QvXCIgc2hvdWxkbid0IG1hdGNoIFwiL3Rlc3QvL3JvdXRlXCIuXG4gIGlmICghc3RyaWN0KSB7XG4gICAgcm91dGUgPSAoZW5kc1dpdGhEZWxpbWl0ZXIgPyByb3V0ZS5zbGljZSgwLCAtZGVsaW1pdGVyLmxlbmd0aCkgOiByb3V0ZSkgKyAnKD86JyArIGRlbGltaXRlciArICcoPz0kKSk/J1xuICB9XG5cbiAgaWYgKGVuZCkge1xuICAgIHJvdXRlICs9ICckJ1xuICB9IGVsc2Uge1xuICAgIC8vIEluIG5vbi1lbmRpbmcgbW9kZSwgd2UgbmVlZCB0aGUgY2FwdHVyaW5nIGdyb3VwcyB0byBtYXRjaCBhcyBtdWNoIGFzXG4gICAgLy8gcG9zc2libGUgYnkgdXNpbmcgYSBwb3NpdGl2ZSBsb29rYWhlYWQgdG8gdGhlIGVuZCBvciBuZXh0IHBhdGggc2VnbWVudC5cbiAgICByb3V0ZSArPSBzdHJpY3QgJiYgZW5kc1dpdGhEZWxpbWl0ZXIgPyAnJyA6ICcoPz0nICsgZGVsaW1pdGVyICsgJ3wkKSdcbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKG5ldyBSZWdFeHAoJ14nICsgcm91dGUsIGZsYWdzKG9wdGlvbnMpKSwga2V5cylcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICpcbiAqIEBwYXJhbSAgeyhzdHJpbmd8UmVnRXhwfEFycmF5KX0gcGF0aFxuICogQHBhcmFtICB7KEFycmF5fE9iamVjdCk9fSAgICAgICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWlzYXJyYXkoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKVxuICAgIGtleXMgPSBbXVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpKVxuICB9XG5cbiAgaWYgKGlzYXJyYXkocGF0aCkpIHtcbiAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cCgvKiogQHR5cGUgeyFBcnJheX0gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocGF0aCksIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cyksIG9wdGlvbnMpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZU1lbW9yeUhpc3RvcnksIGNyZWF0ZUxvY2F0aW9uLCBsb2NhdGlvbnNBcmVFcXVhbCwgY3JlYXRlUGF0aCB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCBjcmVhdGVDb250ZXh0IGZyb20gJ21pbmktY3JlYXRlLXJlYWN0LWNvbnRleHQnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgcGF0aFRvUmVnZXhwIGZyb20gJ3BhdGgtdG8tcmVnZXhwJztcbmltcG9ydCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuXG4vLyBUT0RPOiBSZXBsYWNlIHdpdGggUmVhY3QuY3JlYXRlQ29udGV4dCBvbmNlIHdlIGNhbiBhc3N1bWUgUmVhY3QgMTYrXG5cbnZhciBjcmVhdGVOYW1lZENvbnRleHQgPSBmdW5jdGlvbiBjcmVhdGVOYW1lZENvbnRleHQobmFtZSkge1xuICB2YXIgY29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbiAgY29udGV4dC5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxudmFyIGhpc3RvcnlDb250ZXh0ID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZU5hbWVkQ29udGV4dChcIlJvdXRlci1IaXN0b3J5XCIpO1xuXG4vLyBUT0RPOiBSZXBsYWNlIHdpdGggUmVhY3QuY3JlYXRlQ29udGV4dCBvbmNlIHdlIGNhbiBhc3N1bWUgUmVhY3QgMTYrXG5cbnZhciBjcmVhdGVOYW1lZENvbnRleHQkMSA9IGZ1bmN0aW9uIGNyZWF0ZU5hbWVkQ29udGV4dChuYW1lKSB7XG4gIHZhciBjb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuICBjb250ZXh0LmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG52YXIgY29udGV4dCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVOYW1lZENvbnRleHQkMShcIlJvdXRlclwiKTtcblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcHV0dGluZyBoaXN0b3J5IG9uIGNvbnRleHQuXG4gKi9cblxudmFyIFJvdXRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIFJvdXRlci5jb21wdXRlUm9vdE1hdGNoID0gZnVuY3Rpb24gY29tcHV0ZVJvb3RNYXRjaChwYXRobmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoOiBcIi9cIixcbiAgICAgIHVybDogXCIvXCIsXG4gICAgICBwYXJhbXM6IHt9LFxuICAgICAgaXNFeGFjdDogcGF0aG5hbWUgPT09IFwiL1wiXG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBSb3V0ZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvY2F0aW9uOiBwcm9wcy5oaXN0b3J5LmxvY2F0aW9uXG4gICAgfTsgLy8gVGhpcyBpcyBhIGJpdCBvZiBhIGhhY2suIFdlIGhhdmUgdG8gc3RhcnQgbGlzdGVuaW5nIGZvciBsb2NhdGlvblxuICAgIC8vIGNoYW5nZXMgaGVyZSBpbiB0aGUgY29uc3RydWN0b3IgaW4gY2FzZSB0aGVyZSBhcmUgYW55IDxSZWRpcmVjdD5zXG4gICAgLy8gb24gdGhlIGluaXRpYWwgcmVuZGVyLiBJZiB0aGVyZSBhcmUsIHRoZXkgd2lsbCByZXBsYWNlL3B1c2ggd2hlblxuICAgIC8vIHRoZXkgbW91bnQgYW5kIHNpbmNlIGNETSBmaXJlcyBpbiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cywgd2UgbWF5XG4gICAgLy8gZ2V0IGEgbmV3IGxvY2F0aW9uIGJlZm9yZSB0aGUgPFJvdXRlcj4gaXMgbW91bnRlZC5cblxuICAgIF90aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICBfdGhpcy5fcGVuZGluZ0xvY2F0aW9uID0gbnVsbDtcblxuICAgIGlmICghcHJvcHMuc3RhdGljQ29udGV4dCkge1xuICAgICAgX3RoaXMudW5saXN0ZW4gPSBwcm9wcy5oaXN0b3J5Lmxpc3RlbihmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgICAgaWYgKF90aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5fcGVuZGluZ0xvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5fcGVuZGluZ0xvY2F0aW9uKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9jYXRpb246IHRoaXMuX3BlbmRpbmdMb2NhdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnVubGlzdGVuKSB0aGlzLnVubGlzdGVuKCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBoaXN0b3J5OiB0aGlzLnByb3BzLmhpc3RvcnksXG4gICAgICAgIGxvY2F0aW9uOiB0aGlzLnN0YXRlLmxvY2F0aW9uLFxuICAgICAgICBtYXRjaDogUm91dGVyLmNvbXB1dGVSb290TWF0Y2godGhpcy5zdGF0ZS5sb2NhdGlvbi5wYXRobmFtZSksXG4gICAgICAgIHN0YXRpY0NvbnRleHQ6IHRoaXMucHJvcHMuc3RhdGljQ29udGV4dFxuICAgICAgfVxuICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoaGlzdG9yeUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuIHx8IG51bGwsXG4gICAgICB2YWx1ZTogdGhpcy5wcm9wcy5oaXN0b3J5XG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBSb3V0ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgaGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHN0YXRpY0NvbnRleHQ6IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIChwcmV2UHJvcHMpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHByZXZQcm9wcy5oaXN0b3J5ID09PSB0aGlzLnByb3BzLmhpc3RvcnksIFwiWW91IGNhbm5vdCBjaGFuZ2UgPFJvdXRlciBoaXN0b3J5PlwiKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgYSA8Um91dGVyPiB0aGF0IHN0b3JlcyBsb2NhdGlvbiBpbiBtZW1vcnkuXG4gKi9cblxudmFyIE1lbW9yeVJvdXRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShNZW1vcnlSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1lbW9yeVJvdXRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5oaXN0b3J5ID0gY3JlYXRlTWVtb3J5SGlzdG9yeShfdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE1lbW9yeVJvdXRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICAgIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIE1lbW9yeVJvdXRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBNZW1vcnlSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGluaXRpYWxFbnRyaWVzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgaW5pdGlhbEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGdldFVzZXJDb25maXJtYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgIGtleUxlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbiAgfTtcblxuICBNZW1vcnlSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8TWVtb3J5Um91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgTWVtb3J5Um91dGVyIGFzIFJvdXRlciB9YC5cIikgOiB2b2lkIDA7XG4gIH07XG59XG5cbnZhciBMaWZlY3ljbGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoTGlmZWN5Y2xlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBMaWZlY3ljbGUoKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IExpZmVjeWNsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Nb3VudCkgdGhpcy5wcm9wcy5vbk1vdW50LmNhbGwodGhpcywgdGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblVwZGF0ZSkgdGhpcy5wcm9wcy5vblVwZGF0ZS5jYWxsKHRoaXMsIHRoaXMsIHByZXZQcm9wcyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Vbm1vdW50KSB0aGlzLnByb3BzLm9uVW5tb3VudC5jYWxsKHRoaXMsIHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIExpZmVjeWNsZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcHJvbXB0aW5nIHRoZSB1c2VyIGJlZm9yZSBuYXZpZ2F0aW5nIGF3YXkgZnJvbSBhIHNjcmVlbi5cbiAqL1xuXG5mdW5jdGlvbiBQcm9tcHQoX3JlZikge1xuICB2YXIgbWVzc2FnZSA9IF9yZWYubWVzc2FnZSxcbiAgICAgIF9yZWYkd2hlbiA9IF9yZWYud2hlbixcbiAgICAgIHdoZW4gPSBfcmVmJHdoZW4gPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJHdoZW47XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgIWNvbnRleHQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IHNob3VsZCBub3QgdXNlIDxQcm9tcHQ+IG91dHNpZGUgYSA8Um91dGVyPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgaWYgKCF3aGVuIHx8IGNvbnRleHQuc3RhdGljQ29udGV4dCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1ldGhvZCA9IGNvbnRleHQuaGlzdG9yeS5ibG9jaztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMaWZlY3ljbGUsIHtcbiAgICAgIG9uTW91bnQ6IGZ1bmN0aW9uIG9uTW91bnQoc2VsZikge1xuICAgICAgICBzZWxmLnJlbGVhc2UgPSBtZXRob2QobWVzc2FnZSk7XG4gICAgICB9LFxuICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKHNlbGYsIHByZXZQcm9wcykge1xuICAgICAgICBpZiAocHJldlByb3BzLm1lc3NhZ2UgIT09IG1lc3NhZ2UpIHtcbiAgICAgICAgICBzZWxmLnJlbGVhc2UoKTtcbiAgICAgICAgICBzZWxmLnJlbGVhc2UgPSBtZXRob2QobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblVubW91bnQ6IGZ1bmN0aW9uIG9uVW5tb3VudChzZWxmKSB7XG4gICAgICAgIHNlbGYucmVsZWFzZSgpO1xuICAgICAgfSxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KTtcbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgdmFyIG1lc3NhZ2VUeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zdHJpbmddKTtcbiAgUHJvbXB0LnByb3BUeXBlcyA9IHtcbiAgICB3aGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtZXNzYWdlOiBtZXNzYWdlVHlwZS5pc1JlcXVpcmVkXG4gIH07XG59XG5cbnZhciBjYWNoZSA9IHt9O1xudmFyIGNhY2hlTGltaXQgPSAxMDAwMDtcbnZhciBjYWNoZUNvdW50ID0gMDtcblxuZnVuY3Rpb24gY29tcGlsZVBhdGgocGF0aCkge1xuICBpZiAoY2FjaGVbcGF0aF0pIHJldHVybiBjYWNoZVtwYXRoXTtcbiAgdmFyIGdlbmVyYXRvciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHBhdGgpO1xuXG4gIGlmIChjYWNoZUNvdW50IDwgY2FjaGVMaW1pdCkge1xuICAgIGNhY2hlW3BhdGhdID0gZ2VuZXJhdG9yO1xuICAgIGNhY2hlQ291bnQrKztcbiAgfVxuXG4gIHJldHVybiBnZW5lcmF0b3I7XG59XG4vKipcbiAqIFB1YmxpYyBBUEkgZm9yIGdlbmVyYXRpbmcgYSBVUkwgcGF0aG5hbWUgZnJvbSBhIHBhdGggYW5kIHBhcmFtZXRlcnMuXG4gKi9cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVBhdGgocGF0aCwgcGFyYW1zKSB7XG4gIGlmIChwYXRoID09PSB2b2lkIDApIHtcbiAgICBwYXRoID0gXCIvXCI7XG4gIH1cblxuICBpZiAocGFyYW1zID09PSB2b2lkIDApIHtcbiAgICBwYXJhbXMgPSB7fTtcbiAgfVxuXG4gIHJldHVybiBwYXRoID09PSBcIi9cIiA/IHBhdGggOiBjb21waWxlUGF0aChwYXRoKShwYXJhbXMsIHtcbiAgICBwcmV0dHk6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIG5hdmlnYXRpbmcgcHJvZ3JhbW1hdGljYWxseSB3aXRoIGEgY29tcG9uZW50LlxuICovXG5cbmZ1bmN0aW9uIFJlZGlyZWN0KF9yZWYpIHtcbiAgdmFyIGNvbXB1dGVkTWF0Y2ggPSBfcmVmLmNvbXB1dGVkTWF0Y2gsXG4gICAgICB0byA9IF9yZWYudG8sXG4gICAgICBfcmVmJHB1c2ggPSBfcmVmLnB1c2gsXG4gICAgICBwdXNoID0gX3JlZiRwdXNoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkcHVzaDtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAhY29udGV4dCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPFJlZGlyZWN0PiBvdXRzaWRlIGEgPFJvdXRlcj5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHZhciBoaXN0b3J5ID0gY29udGV4dC5oaXN0b3J5LFxuICAgICAgICBzdGF0aWNDb250ZXh0ID0gY29udGV4dC5zdGF0aWNDb250ZXh0O1xuICAgIHZhciBtZXRob2QgPSBwdXNoID8gaGlzdG9yeS5wdXNoIDogaGlzdG9yeS5yZXBsYWNlO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKGNvbXB1dGVkTWF0Y2ggPyB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBnZW5lcmF0ZVBhdGgodG8sIGNvbXB1dGVkTWF0Y2gucGFyYW1zKSA6IF9leHRlbmRzKHt9LCB0bywge1xuICAgICAgcGF0aG5hbWU6IGdlbmVyYXRlUGF0aCh0by5wYXRobmFtZSwgY29tcHV0ZWRNYXRjaC5wYXJhbXMpXG4gICAgfSkgOiB0byk7IC8vIFdoZW4gcmVuZGVyaW5nIGluIGEgc3RhdGljIGNvbnRleHQsXG4gICAgLy8gc2V0IHRoZSBuZXcgbG9jYXRpb24gaW1tZWRpYXRlbHkuXG5cbiAgICBpZiAoc3RhdGljQ29udGV4dCkge1xuICAgICAgbWV0aG9kKGxvY2F0aW9uKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExpZmVjeWNsZSwge1xuICAgICAgb25Nb3VudDogZnVuY3Rpb24gb25Nb3VudCgpIHtcbiAgICAgICAgbWV0aG9kKGxvY2F0aW9uKTtcbiAgICAgIH0sXG4gICAgICBvblVwZGF0ZTogZnVuY3Rpb24gb25VcGRhdGUoc2VsZiwgcHJldlByb3BzKSB7XG4gICAgICAgIHZhciBwcmV2TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihwcmV2UHJvcHMudG8pO1xuXG4gICAgICAgIGlmICghbG9jYXRpb25zQXJlRXF1YWwocHJldkxvY2F0aW9uLCBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHtcbiAgICAgICAgICBrZXk6IHByZXZMb2NhdGlvbi5rZXlcbiAgICAgICAgfSkpKSB7XG4gICAgICAgICAgbWV0aG9kKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRvOiB0b1xuICAgIH0pO1xuICB9KTtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBSZWRpcmVjdC5wcm9wVHlwZXMgPSB7XG4gICAgcHVzaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZnJvbTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0bzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWRcbiAgfTtcbn1cblxudmFyIGNhY2hlJDEgPSB7fTtcbnZhciBjYWNoZUxpbWl0JDEgPSAxMDAwMDtcbnZhciBjYWNoZUNvdW50JDEgPSAwO1xuXG5mdW5jdGlvbiBjb21waWxlUGF0aCQxKHBhdGgsIG9wdGlvbnMpIHtcbiAgdmFyIGNhY2hlS2V5ID0gXCJcIiArIG9wdGlvbnMuZW5kICsgb3B0aW9ucy5zdHJpY3QgKyBvcHRpb25zLnNlbnNpdGl2ZTtcbiAgdmFyIHBhdGhDYWNoZSA9IGNhY2hlJDFbY2FjaGVLZXldIHx8IChjYWNoZSQxW2NhY2hlS2V5XSA9IHt9KTtcbiAgaWYgKHBhdGhDYWNoZVtwYXRoXSkgcmV0dXJuIHBhdGhDYWNoZVtwYXRoXTtcbiAgdmFyIGtleXMgPSBbXTtcbiAgdmFyIHJlZ2V4cCA9IHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICByZWdleHA6IHJlZ2V4cCxcbiAgICBrZXlzOiBrZXlzXG4gIH07XG5cbiAgaWYgKGNhY2hlQ291bnQkMSA8IGNhY2hlTGltaXQkMSkge1xuICAgIHBhdGhDYWNoZVtwYXRoXSA9IHJlc3VsdDtcbiAgICBjYWNoZUNvdW50JDErKztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFB1YmxpYyBBUEkgZm9yIG1hdGNoaW5nIGEgVVJMIHBhdGhuYW1lIHRvIGEgcGF0aC5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1hdGNoUGF0aChwYXRobmFtZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgcGF0aDogb3B0aW9uc1xuICAgIH07XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgcGF0aCA9IF9vcHRpb25zLnBhdGgsXG4gICAgICBfb3B0aW9ucyRleGFjdCA9IF9vcHRpb25zLmV4YWN0LFxuICAgICAgZXhhY3QgPSBfb3B0aW9ucyRleGFjdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRleGFjdCxcbiAgICAgIF9vcHRpb25zJHN0cmljdCA9IF9vcHRpb25zLnN0cmljdCxcbiAgICAgIHN0cmljdCA9IF9vcHRpb25zJHN0cmljdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRzdHJpY3QsXG4gICAgICBfb3B0aW9ucyRzZW5zaXRpdmUgPSBfb3B0aW9ucy5zZW5zaXRpdmUsXG4gICAgICBzZW5zaXRpdmUgPSBfb3B0aW9ucyRzZW5zaXRpdmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkc2Vuc2l0aXZlO1xuICB2YXIgcGF0aHMgPSBbXS5jb25jYXQocGF0aCk7XG4gIHJldHVybiBwYXRocy5yZWR1Y2UoZnVuY3Rpb24gKG1hdGNoZWQsIHBhdGgpIHtcbiAgICBpZiAoIXBhdGggJiYgcGF0aCAhPT0gXCJcIikgcmV0dXJuIG51bGw7XG4gICAgaWYgKG1hdGNoZWQpIHJldHVybiBtYXRjaGVkO1xuXG4gICAgdmFyIF9jb21waWxlUGF0aCA9IGNvbXBpbGVQYXRoJDEocGF0aCwge1xuICAgICAgZW5kOiBleGFjdCxcbiAgICAgIHN0cmljdDogc3RyaWN0LFxuICAgICAgc2Vuc2l0aXZlOiBzZW5zaXRpdmVcbiAgICB9KSxcbiAgICAgICAgcmVnZXhwID0gX2NvbXBpbGVQYXRoLnJlZ2V4cCxcbiAgICAgICAga2V5cyA9IF9jb21waWxlUGF0aC5rZXlzO1xuXG4gICAgdmFyIG1hdGNoID0gcmVnZXhwLmV4ZWMocGF0aG5hbWUpO1xuICAgIGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xuICAgIHZhciB1cmwgPSBtYXRjaFswXSxcbiAgICAgICAgdmFsdWVzID0gbWF0Y2guc2xpY2UoMSk7XG4gICAgdmFyIGlzRXhhY3QgPSBwYXRobmFtZSA9PT0gdXJsO1xuICAgIGlmIChleGFjdCAmJiAhaXNFeGFjdCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAvLyB0aGUgcGF0aCB1c2VkIHRvIG1hdGNoXG4gICAgICB1cmw6IHBhdGggPT09IFwiL1wiICYmIHVybCA9PT0gXCJcIiA/IFwiL1wiIDogdXJsLFxuICAgICAgLy8gdGhlIG1hdGNoZWQgcG9ydGlvbiBvZiB0aGUgVVJMXG4gICAgICBpc0V4YWN0OiBpc0V4YWN0LFxuICAgICAgLy8gd2hldGhlciBvciBub3Qgd2UgbWF0Y2hlZCBleGFjdGx5XG4gICAgICBwYXJhbXM6IGtleXMucmVkdWNlKGZ1bmN0aW9uIChtZW1vLCBrZXksIGluZGV4KSB7XG4gICAgICAgIG1lbW9ba2V5Lm5hbWVdID0gdmFsdWVzW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICB9LCB7fSlcbiAgICB9O1xuICB9LCBudWxsKTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHJldHVybiBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPT09IDA7XG59XG5cbmZ1bmN0aW9uIGV2YWxDaGlsZHJlbkRldihjaGlsZHJlbiwgcHJvcHMsIHBhdGgpIHtcbiAgdmFyIHZhbHVlID0gY2hpbGRyZW4ocHJvcHMpO1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHZhbHVlICE9PSB1bmRlZmluZWQsIFwiWW91IHJldHVybmVkIGB1bmRlZmluZWRgIGZyb20gdGhlIGBjaGlsZHJlbmAgZnVuY3Rpb24gb2YgXCIgKyAoXCI8Um91dGVcIiArIChwYXRoID8gXCIgcGF0aD1cXFwiXCIgKyBwYXRoICsgXCJcXFwiXCIgOiBcIlwiKSArIFwiPiwgYnV0IHlvdSBcIikgKyBcInNob3VsZCBoYXZlIHJldHVybmVkIGEgUmVhY3QgZWxlbWVudCBvciBgbnVsbGBcIikgOiB2b2lkIDA7XG4gIHJldHVybiB2YWx1ZSB8fCBudWxsO1xufVxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgbWF0Y2hpbmcgYSBzaW5nbGUgcGF0aCBhbmQgcmVuZGVyaW5nLlxuICovXG5cblxudmFyIFJvdXRlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFJvdXRlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSb3V0ZSgpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUm91dGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0JDEpIHtcbiAgICAgICFjb250ZXh0JDEgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IHNob3VsZCBub3QgdXNlIDxSb3V0ZT4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgIHZhciBsb2NhdGlvbiA9IF90aGlzLnByb3BzLmxvY2F0aW9uIHx8IGNvbnRleHQkMS5sb2NhdGlvbjtcbiAgICAgIHZhciBtYXRjaCA9IF90aGlzLnByb3BzLmNvbXB1dGVkTWF0Y2ggPyBfdGhpcy5wcm9wcy5jb21wdXRlZE1hdGNoIC8vIDxTd2l0Y2g+IGFscmVhZHkgY29tcHV0ZWQgdGhlIG1hdGNoIGZvciB1c1xuICAgICAgOiBfdGhpcy5wcm9wcy5wYXRoID8gbWF0Y2hQYXRoKGxvY2F0aW9uLnBhdGhuYW1lLCBfdGhpcy5wcm9wcykgOiBjb250ZXh0JDEubWF0Y2g7XG5cbiAgICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCBjb250ZXh0JDEsIHtcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICBtYXRjaDogbWF0Y2hcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNvbXBvbmVudCA9IF90aGlzJHByb3BzLmNvbXBvbmVudCxcbiAgICAgICAgICByZW5kZXIgPSBfdGhpcyRwcm9wcy5yZW5kZXI7IC8vIFByZWFjdCB1c2VzIGFuIGVtcHR5IGFycmF5IGFzIGNoaWxkcmVuIGJ5XG4gICAgICAvLyBkZWZhdWx0LCBzbyB1c2UgbnVsbCBpZiB0aGF0J3MgdGhlIGNhc2UuXG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY2hpbGRyZW4gPSBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBwcm9wc1xuICAgICAgfSwgcHJvcHMubWF0Y2ggPyBjaGlsZHJlbiA/IHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gZXZhbENoaWxkcmVuRGV2KGNoaWxkcmVuLCBwcm9wcywgX3RoaXMucHJvcHMucGF0aCkgOiBjaGlsZHJlbihwcm9wcykgOiBjaGlsZHJlbiA6IGNvbXBvbmVudCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcykgOiByZW5kZXIgPyByZW5kZXIocHJvcHMpIDogbnVsbCA6IHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gZXZhbENoaWxkcmVuRGV2KGNoaWxkcmVuLCBwcm9wcywgX3RoaXMucHJvcHMucGF0aCkgOiBjaGlsZHJlbihwcm9wcykgOiBudWxsKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gUm91dGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgUm91dGUucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgICBjb21wb25lbnQ6IGZ1bmN0aW9uIGNvbXBvbmVudChwcm9wcywgcHJvcE5hbWUpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gJiYgIWlzVmFsaWRFbGVtZW50VHlwZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIHByb3AgJ2NvbXBvbmVudCcgc3VwcGxpZWQgdG8gJ1JvdXRlJzogdGhlIHByb3AgaXMgbm90IGEgdmFsaWQgUmVhY3QgY29tcG9uZW50XCIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZXhhY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHBhdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpXSksXG4gICAgcmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZW5zaXRpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHN0cmljdDogUHJvcFR5cGVzLmJvb2xcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKHRoaXMucHJvcHMuY2hpbGRyZW4gJiYgIWlzRW1wdHlDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuKSAmJiB0aGlzLnByb3BzLmNvbXBvbmVudCksIFwiWW91IHNob3VsZCBub3QgdXNlIDxSb3V0ZSBjb21wb25lbnQ+IGFuZCA8Um91dGUgY2hpbGRyZW4+IGluIHRoZSBzYW1lIHJvdXRlOyA8Um91dGUgY29tcG9uZW50PiB3aWxsIGJlIGlnbm9yZWRcIikgOiB2b2lkIDA7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKHRoaXMucHJvcHMuY2hpbGRyZW4gJiYgIWlzRW1wdHlDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuKSAmJiB0aGlzLnByb3BzLnJlbmRlciksIFwiWW91IHNob3VsZCBub3QgdXNlIDxSb3V0ZSByZW5kZXI+IGFuZCA8Um91dGUgY2hpbGRyZW4+IGluIHRoZSBzYW1lIHJvdXRlOyA8Um91dGUgcmVuZGVyPiB3aWxsIGJlIGlnbm9yZWRcIikgOiB2b2lkIDA7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKHRoaXMucHJvcHMuY29tcG9uZW50ICYmIHRoaXMucHJvcHMucmVuZGVyKSwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPFJvdXRlIGNvbXBvbmVudD4gYW5kIDxSb3V0ZSByZW5kZXI+IGluIHRoZSBzYW1lIHJvdXRlOyA8Um91dGUgcmVuZGVyPiB3aWxsIGJlIGlnbm9yZWRcIikgOiB2b2lkIDA7XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIChwcmV2UHJvcHMpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCEodGhpcy5wcm9wcy5sb2NhdGlvbiAmJiAhcHJldlByb3BzLmxvY2F0aW9uKSwgJzxSb3V0ZT4gZWxlbWVudHMgc2hvdWxkIG5vdCBjaGFuZ2UgZnJvbSB1bmNvbnRyb2xsZWQgdG8gY29udHJvbGxlZCAob3IgdmljZSB2ZXJzYSkuIFlvdSBpbml0aWFsbHkgdXNlZCBubyBcImxvY2F0aW9uXCIgcHJvcCBhbmQgdGhlbiBwcm92aWRlZCBvbmUgb24gYSBzdWJzZXF1ZW50IHJlbmRlci4nKSA6IHZvaWQgMDtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCEoIXRoaXMucHJvcHMubG9jYXRpb24gJiYgcHJldlByb3BzLmxvY2F0aW9uKSwgJzxSb3V0ZT4gZWxlbWVudHMgc2hvdWxkIG5vdCBjaGFuZ2UgZnJvbSBjb250cm9sbGVkIHRvIHVuY29udHJvbGxlZCAob3IgdmljZSB2ZXJzYSkuIFlvdSBwcm92aWRlZCBhIFwibG9jYXRpb25cIiBwcm9wIGluaXRpYWxseSBidXQgb21pdHRlZCBpdCBvbiBhIHN1YnNlcXVlbnQgcmVuZGVyLicpIDogdm9pZCAwO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09IFwiL1wiID8gcGF0aCA6IFwiL1wiICsgcGF0aDtcbn1cblxuZnVuY3Rpb24gYWRkQmFzZW5hbWUoYmFzZW5hbWUsIGxvY2F0aW9uKSB7XG4gIGlmICghYmFzZW5hbWUpIHJldHVybiBsb2NhdGlvbjtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBsb2NhdGlvbiwge1xuICAgIHBhdGhuYW1lOiBhZGRMZWFkaW5nU2xhc2goYmFzZW5hbWUpICsgbG9jYXRpb24ucGF0aG5hbWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0cmlwQmFzZW5hbWUoYmFzZW5hbWUsIGxvY2F0aW9uKSB7XG4gIGlmICghYmFzZW5hbWUpIHJldHVybiBsb2NhdGlvbjtcbiAgdmFyIGJhc2UgPSBhZGRMZWFkaW5nU2xhc2goYmFzZW5hbWUpO1xuICBpZiAobG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZihiYXNlKSAhPT0gMCkgcmV0dXJuIGxvY2F0aW9uO1xuICByZXR1cm4gX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7XG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cihiYXNlLmxlbmd0aClcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVSTChsb2NhdGlvbikge1xuICByZXR1cm4gdHlwZW9mIGxvY2F0aW9uID09PSBcInN0cmluZ1wiID8gbG9jYXRpb24gOiBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbn1cblxuZnVuY3Rpb24gc3RhdGljSGFuZGxlcihtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3UgY2Fubm90ICVzIHdpdGggPFN0YXRpY1JvdXRlcj5cIiwgbWV0aG9kTmFtZSkgOiBpbnZhcmlhbnQoZmFsc2UpIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG4vKipcbiAqIFRoZSBwdWJsaWMgdG9wLWxldmVsIEFQSSBmb3IgYSBcInN0YXRpY1wiIDxSb3V0ZXI+LCBzby1jYWxsZWQgYmVjYXVzZSBpdFxuICogY2FuJ3QgYWN0dWFsbHkgY2hhbmdlIHRoZSBjdXJyZW50IGxvY2F0aW9uLiBJbnN0ZWFkLCBpdCBqdXN0IHJlY29yZHNcbiAqIGxvY2F0aW9uIGNoYW5nZXMgaW4gYSBjb250ZXh0IG9iamVjdC4gVXNlZnVsIG1haW5seSBpbiB0ZXN0aW5nIGFuZFxuICogc2VydmVyLXJlbmRlcmluZyBzY2VuYXJpb3MuXG4gKi9cblxuXG52YXIgU3RhdGljUm91dGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFN0YXRpY1JvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3RhdGljUm91dGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX3RoaXMuaGFuZGxlUHVzaCA9IGZ1bmN0aW9uIChsb2NhdGlvbikge1xuICAgICAgcmV0dXJuIF90aGlzLm5hdmlnYXRlVG8obG9jYXRpb24sIFwiUFVTSFwiKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlUmVwbGFjZSA9IGZ1bmN0aW9uIChsb2NhdGlvbikge1xuICAgICAgcmV0dXJuIF90aGlzLm5hdmlnYXRlVG8obG9jYXRpb24sIFwiUkVQTEFDRVwiKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlTGlzdGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5vb3A7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUJsb2NrID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5vb3A7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdGF0aWNSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5uYXZpZ2F0ZVRvID0gZnVuY3Rpb24gbmF2aWdhdGVUbyhsb2NhdGlvbiwgYWN0aW9uKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgX3RoaXMkcHJvcHMkYmFzZW5hbWUgPSBfdGhpcyRwcm9wcy5iYXNlbmFtZSxcbiAgICAgICAgYmFzZW5hbWUgPSBfdGhpcyRwcm9wcyRiYXNlbmFtZSA9PT0gdm9pZCAwID8gXCJcIiA6IF90aGlzJHByb3BzJGJhc2VuYW1lLFxuICAgICAgICBfdGhpcyRwcm9wcyRjb250ZXh0ID0gX3RoaXMkcHJvcHMuY29udGV4dCxcbiAgICAgICAgY29udGV4dCA9IF90aGlzJHByb3BzJGNvbnRleHQgPT09IHZvaWQgMCA/IHt9IDogX3RoaXMkcHJvcHMkY29udGV4dDtcbiAgICBjb250ZXh0LmFjdGlvbiA9IGFjdGlvbjtcbiAgICBjb250ZXh0LmxvY2F0aW9uID0gYWRkQmFzZW5hbWUoYmFzZW5hbWUsIGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uKSk7XG4gICAgY29udGV4dC51cmwgPSBjcmVhdGVVUkwoY29udGV4dC5sb2NhdGlvbik7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgX3RoaXMkcHJvcHMyJGJhc2VuYW1lID0gX3RoaXMkcHJvcHMyLmJhc2VuYW1lLFxuICAgICAgICBiYXNlbmFtZSA9IF90aGlzJHByb3BzMiRiYXNlbmFtZSA9PT0gdm9pZCAwID8gXCJcIiA6IF90aGlzJHByb3BzMiRiYXNlbmFtZSxcbiAgICAgICAgX3RoaXMkcHJvcHMyJGNvbnRleHQgPSBfdGhpcyRwcm9wczIuY29udGV4dCxcbiAgICAgICAgY29udGV4dCA9IF90aGlzJHByb3BzMiRjb250ZXh0ID09PSB2b2lkIDAgPyB7fSA6IF90aGlzJHByb3BzMiRjb250ZXh0LFxuICAgICAgICBfdGhpcyRwcm9wczIkbG9jYXRpb24gPSBfdGhpcyRwcm9wczIubG9jYXRpb24sXG4gICAgICAgIGxvY2F0aW9uID0gX3RoaXMkcHJvcHMyJGxvY2F0aW9uID09PSB2b2lkIDAgPyBcIi9cIiA6IF90aGlzJHByb3BzMiRsb2NhdGlvbixcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzMiwgW1wiYmFzZW5hbWVcIiwgXCJjb250ZXh0XCIsIFwibG9jYXRpb25cIl0pO1xuXG4gICAgdmFyIGhpc3RvcnkgPSB7XG4gICAgICBjcmVhdGVIcmVmOiBmdW5jdGlvbiBjcmVhdGVIcmVmKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdTbGFzaChiYXNlbmFtZSArIGNyZWF0ZVVSTChwYXRoKSk7XG4gICAgICB9LFxuICAgICAgYWN0aW9uOiBcIlBPUFwiLFxuICAgICAgbG9jYXRpb246IHN0cmlwQmFzZW5hbWUoYmFzZW5hbWUsIGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uKSksXG4gICAgICBwdXNoOiB0aGlzLmhhbmRsZVB1c2gsXG4gICAgICByZXBsYWNlOiB0aGlzLmhhbmRsZVJlcGxhY2UsXG4gICAgICBnbzogc3RhdGljSGFuZGxlcihcImdvXCIpLFxuICAgICAgZ29CYWNrOiBzdGF0aWNIYW5kbGVyKFwiZ29CYWNrXCIpLFxuICAgICAgZ29Gb3J3YXJkOiBzdGF0aWNIYW5kbGVyKFwiZ29Gb3J3YXJkXCIpLFxuICAgICAgbGlzdGVuOiB0aGlzLmhhbmRsZUxpc3RlbixcbiAgICAgIGJsb2NrOiB0aGlzLmhhbmRsZUJsb2NrXG4gICAgfTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICBoaXN0b3J5OiBoaXN0b3J5LFxuICAgICAgc3RhdGljQ29udGV4dDogY29udGV4dFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gU3RhdGljUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFN0YXRpY1JvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29udGV4dDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pXG4gIH07XG5cbiAgU3RhdGljUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPFN0YXRpY1JvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IFN0YXRpY1JvdXRlciBhcyBSb3V0ZXIgfWAuXCIpIDogdm9pZCAwO1xuICB9O1xufVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciByZW5kZXJpbmcgdGhlIGZpcnN0IDxSb3V0ZT4gdGhhdCBtYXRjaGVzLlxuICovXG5cbnZhciBTd2l0Y2ggPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoU3dpdGNoLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTd2l0Y2goKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN3aXRjaC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8U3dpdGNoPiBvdXRzaWRlIGEgPFJvdXRlcj5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgdmFyIGxvY2F0aW9uID0gX3RoaXMucHJvcHMubG9jYXRpb24gfHwgY29udGV4dC5sb2NhdGlvbjtcbiAgICAgIHZhciBlbGVtZW50LCBtYXRjaDsgLy8gV2UgdXNlIFJlYWN0LkNoaWxkcmVuLmZvckVhY2ggaW5zdGVhZCBvZiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KCkuZmluZCgpXG4gICAgICAvLyBoZXJlIGJlY2F1c2UgdG9BcnJheSBhZGRzIGtleXMgdG8gYWxsIGNoaWxkIGVsZW1lbnRzIGFuZCB3ZSBkbyBub3Qgd2FudFxuICAgICAgLy8gdG8gdHJpZ2dlciBhbiB1bm1vdW50L3JlbW91bnQgZm9yIHR3byA8Um91dGU+cyB0aGF0IHJlbmRlciB0aGUgc2FtZVxuICAgICAgLy8gY29tcG9uZW50IGF0IGRpZmZlcmVudCBVUkxzLlxuXG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKF90aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKG1hdGNoID09IG51bGwgJiYgUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgZWxlbWVudCA9IGNoaWxkO1xuICAgICAgICAgIHZhciBwYXRoID0gY2hpbGQucHJvcHMucGF0aCB8fCBjaGlsZC5wcm9wcy5mcm9tO1xuICAgICAgICAgIG1hdGNoID0gcGF0aCA/IG1hdGNoUGF0aChsb2NhdGlvbi5wYXRobmFtZSwgX2V4dGVuZHMoe30sIGNoaWxkLnByb3BzLCB7XG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgICAgfSkpIDogY29udGV4dC5tYXRjaDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWF0Y2ggPyBSZWFjdC5jbG9uZUVsZW1lbnQoZWxlbWVudCwge1xuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgIGNvbXB1dGVkTWF0Y2g6IG1hdGNoXG4gICAgICB9KSA6IG51bGw7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFN3aXRjaDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBTd2l0Y2gucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdFxuICB9O1xuXG4gIFN3aXRjaC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKHByZXZQcm9wcykge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0aGlzLnByb3BzLmxvY2F0aW9uICYmICFwcmV2UHJvcHMubG9jYXRpb24pLCAnPFN3aXRjaD4gZWxlbWVudHMgc2hvdWxkIG5vdCBjaGFuZ2UgZnJvbSB1bmNvbnRyb2xsZWQgdG8gY29udHJvbGxlZCAob3IgdmljZSB2ZXJzYSkuIFlvdSBpbml0aWFsbHkgdXNlZCBubyBcImxvY2F0aW9uXCIgcHJvcCBhbmQgdGhlbiBwcm92aWRlZCBvbmUgb24gYSBzdWJzZXF1ZW50IHJlbmRlci4nKSA6IHZvaWQgMDtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCEoIXRoaXMucHJvcHMubG9jYXRpb24gJiYgcHJldlByb3BzLmxvY2F0aW9uKSwgJzxTd2l0Y2g+IGVsZW1lbnRzIHNob3VsZCBub3QgY2hhbmdlIGZyb20gY29udHJvbGxlZCB0byB1bmNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLiBZb3UgcHJvdmlkZWQgYSBcImxvY2F0aW9uXCIgcHJvcCBpbml0aWFsbHkgYnV0IG9taXR0ZWQgaXQgb24gYSBzdWJzZXF1ZW50IHJlbmRlci4nKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxuLyoqXG4gKiBBIHB1YmxpYyBoaWdoZXItb3JkZXIgY29tcG9uZW50IHRvIGFjY2VzcyB0aGUgaW1wZXJhdGl2ZSBBUElcbiAqL1xuXG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvbmVudCkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBcIndpdGhSb3V0ZXIoXCIgKyAoQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lKSArIFwiKVwiO1xuXG4gIHZhciBDID0gZnVuY3Rpb24gQyhwcm9wcykge1xuICAgIHZhciB3cmFwcGVkQ29tcG9uZW50UmVmID0gcHJvcHMud3JhcHBlZENvbXBvbmVudFJlZixcbiAgICAgICAgcmVtYWluaW5nUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wid3JhcHBlZENvbXBvbmVudFJlZlwiXSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgIWNvbnRleHQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IHNob3VsZCBub3QgdXNlIDxcIiArIGRpc3BsYXlOYW1lICsgXCIgLz4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHJlbWFpbmluZ1Byb3BzLCBjb250ZXh0LCB7XG4gICAgICAgIHJlZjogd3JhcHBlZENvbXBvbmVudFJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIEMuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgQy5XcmFwcGVkQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBDLnByb3BUeXBlcyA9IHtcbiAgICAgIHdyYXBwZWRDb21wb25lbnRSZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0XSlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGhvaXN0U3RhdGljcyhDLCBDb21wb25lbnQpO1xufVxuXG52YXIgdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQ7XG5mdW5jdGlvbiB1c2VIaXN0b3J5KCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgISh0eXBlb2YgdXNlQ29udGV4dCA9PT0gXCJmdW5jdGlvblwiKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3UgbXVzdCB1c2UgUmVhY3QgPj0gMTYuOCBpbiBvcmRlciB0byB1c2UgdXNlSGlzdG9yeSgpXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHJldHVybiB1c2VDb250ZXh0KGhpc3RvcnlDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIHVzZUxvY2F0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgISh0eXBlb2YgdXNlQ29udGV4dCA9PT0gXCJmdW5jdGlvblwiKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3UgbXVzdCB1c2UgUmVhY3QgPj0gMTYuOCBpbiBvcmRlciB0byB1c2UgdXNlTG9jYXRpb24oKVwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIH1cblxuICByZXR1cm4gdXNlQ29udGV4dChjb250ZXh0KS5sb2NhdGlvbjtcbn1cbmZ1bmN0aW9uIHVzZVBhcmFtcygpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICEodHlwZW9mIHVzZUNvbnRleHQgPT09IFwiZnVuY3Rpb25cIikgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IG11c3QgdXNlIFJlYWN0ID49IDE2LjggaW4gb3JkZXIgdG8gdXNlIHVzZVBhcmFtcygpXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHZhciBtYXRjaCA9IHVzZUNvbnRleHQoY29udGV4dCkubWF0Y2g7XG4gIHJldHVybiBtYXRjaCA/IG1hdGNoLnBhcmFtcyA6IHt9O1xufVxuZnVuY3Rpb24gdXNlUm91dGVNYXRjaChwYXRoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAhKHR5cGVvZiB1c2VDb250ZXh0ID09PSBcImZ1bmN0aW9uXCIpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBtdXN0IHVzZSBSZWFjdCA+PSAxNi44IGluIG9yZGVyIHRvIHVzZSB1c2VSb3V0ZU1hdGNoKClcIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICB9XG5cbiAgdmFyIGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgdmFyIG1hdGNoID0gdXNlQ29udGV4dChjb250ZXh0KS5tYXRjaDtcbiAgcmV0dXJuIHBhdGggPyBtYXRjaFBhdGgobG9jYXRpb24ucGF0aG5hbWUsIHBhdGgpIDogbWF0Y2g7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgZ2xvYmFsID0gd2luZG93O1xuICAgIHZhciBrZXkgPSBcIl9fcmVhY3Rfcm91dGVyX2J1aWxkX19cIjtcbiAgICB2YXIgYnVpbGROYW1lcyA9IHtcbiAgICAgIGNqczogXCJDb21tb25KU1wiLFxuICAgICAgZXNtOiBcIkVTIG1vZHVsZXNcIixcbiAgICAgIHVtZDogXCJVTURcIlxuICAgIH07XG5cbiAgICBpZiAoZ2xvYmFsW2tleV0gJiYgZ2xvYmFsW2tleV0gIT09IFwiZXNtXCIpIHtcbiAgICAgIHZhciBpbml0aWFsQnVpbGROYW1lID0gYnVpbGROYW1lc1tnbG9iYWxba2V5XV07XG4gICAgICB2YXIgc2Vjb25kYXJ5QnVpbGROYW1lID0gYnVpbGROYW1lc1tcImVzbVwiXTsgLy8gVE9ETzogQWRkIGxpbmsgdG8gYXJ0aWNsZSB0aGF0IGV4cGxhaW5zIGluIGRldGFpbCBob3cgdG8gYXZvaWRcbiAgICAgIC8vIGxvYWRpbmcgMiBkaWZmZXJlbnQgYnVpbGRzLlxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgYXJlIGxvYWRpbmcgdGhlIFwiICsgc2Vjb25kYXJ5QnVpbGROYW1lICsgXCIgYnVpbGQgb2YgUmVhY3QgUm91dGVyIFwiICsgKFwib24gYSBwYWdlIHRoYXQgaXMgYWxyZWFkeSBydW5uaW5nIHRoZSBcIiArIGluaXRpYWxCdWlsZE5hbWUgKyBcIiBcIikgKyBcImJ1aWxkLCBzbyB0aGluZ3Mgd29uJ3Qgd29yayByaWdodC5cIik7XG4gICAgfVxuXG4gICAgZ2xvYmFsW2tleV0gPSBcImVzbVwiO1xuICB9XG59XG5cbmV4cG9ydCB7IE1lbW9yeVJvdXRlciwgUHJvbXB0LCBSZWRpcmVjdCwgUm91dGUsIFJvdXRlciwgU3RhdGljUm91dGVyLCBTd2l0Y2gsIGhpc3RvcnlDb250ZXh0IGFzIF9fSGlzdG9yeUNvbnRleHQsIGNvbnRleHQgYXMgX19Sb3V0ZXJDb250ZXh0LCBnZW5lcmF0ZVBhdGgsIG1hdGNoUGF0aCwgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24sIHVzZVBhcmFtcywgdXNlUm91dGVNYXRjaCwgd2l0aFJvdXRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3Qtcm91dGVyLmpzLm1hcFxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImZ1bmN0aW9uIGlzQWJzb2x1dGUocGF0aG5hbWUpIHtcbiAgcmV0dXJuIHBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nO1xufVxuXG4vLyBBYm91dCAxLjV4IGZhc3RlciB0aGFuIHRoZSB0d28tYXJnIHZlcnNpb24gb2YgQXJyYXkjc3BsaWNlKClcbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKHZhciBpID0gaW5kZXgsIGsgPSBpICsgMSwgbiA9IGxpc3QubGVuZ3RoOyBrIDwgbjsgaSArPSAxLCBrICs9IDEpIHtcbiAgICBsaXN0W2ldID0gbGlzdFtrXTtcbiAgfVxuXG4gIGxpc3QucG9wKCk7XG59XG5cbi8vIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgaGVhdmlseSBvbiBub2RlJ3MgdXJsLnBhcnNlXG5mdW5jdGlvbiByZXNvbHZlUGF0aG5hbWUodG8sIGZyb20pIHtcbiAgaWYgKGZyb20gPT09IHVuZGVmaW5lZCkgZnJvbSA9ICcnO1xuXG4gIHZhciB0b1BhcnRzID0gKHRvICYmIHRvLnNwbGl0KCcvJykpIHx8IFtdO1xuICB2YXIgZnJvbVBhcnRzID0gKGZyb20gJiYgZnJvbS5zcGxpdCgnLycpKSB8fCBbXTtcblxuICB2YXIgaXNUb0FicyA9IHRvICYmIGlzQWJzb2x1dGUodG8pO1xuICB2YXIgaXNGcm9tQWJzID0gZnJvbSAmJiBpc0Fic29sdXRlKGZyb20pO1xuICB2YXIgbXVzdEVuZEFicyA9IGlzVG9BYnMgfHwgaXNGcm9tQWJzO1xuXG4gIGlmICh0byAmJiBpc0Fic29sdXRlKHRvKSkge1xuICAgIC8vIHRvIGlzIGFic29sdXRlXG4gICAgZnJvbVBhcnRzID0gdG9QYXJ0cztcbiAgfSBlbHNlIGlmICh0b1BhcnRzLmxlbmd0aCkge1xuICAgIC8vIHRvIGlzIHJlbGF0aXZlLCBkcm9wIHRoZSBmaWxlbmFtZVxuICAgIGZyb21QYXJ0cy5wb3AoKTtcbiAgICBmcm9tUGFydHMgPSBmcm9tUGFydHMuY29uY2F0KHRvUGFydHMpO1xuICB9XG5cbiAgaWYgKCFmcm9tUGFydHMubGVuZ3RoKSByZXR1cm4gJy8nO1xuXG4gIHZhciBoYXNUcmFpbGluZ1NsYXNoO1xuICBpZiAoZnJvbVBhcnRzLmxlbmd0aCkge1xuICAgIHZhciBsYXN0ID0gZnJvbVBhcnRzW2Zyb21QYXJ0cy5sZW5ndGggLSAxXTtcbiAgICBoYXNUcmFpbGluZ1NsYXNoID0gbGFzdCA9PT0gJy4nIHx8IGxhc3QgPT09ICcuLicgfHwgbGFzdCA9PT0gJyc7XG4gIH0gZWxzZSB7XG4gICAgaGFzVHJhaWxpbmdTbGFzaCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IGZyb21QYXJ0cy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHBhcnQgPSBmcm9tUGFydHNbaV07XG5cbiAgICBpZiAocGFydCA9PT0gJy4nKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgaWYgKCFtdXN0RW5kQWJzKSBmb3IgKDsgdXAtLTsgdXApIGZyb21QYXJ0cy51bnNoaWZ0KCcuLicpO1xuXG4gIGlmIChcbiAgICBtdXN0RW5kQWJzICYmXG4gICAgZnJvbVBhcnRzWzBdICE9PSAnJyAmJlxuICAgICghZnJvbVBhcnRzWzBdIHx8ICFpc0Fic29sdXRlKGZyb21QYXJ0c1swXSkpXG4gIClcbiAgICBmcm9tUGFydHMudW5zaGlmdCgnJyk7XG5cbiAgdmFyIHJlc3VsdCA9IGZyb21QYXJ0cy5qb2luKCcvJyk7XG5cbiAgaWYgKGhhc1RyYWlsaW5nU2xhc2ggJiYgcmVzdWx0LnN1YnN0cigtMSkgIT09ICcvJykgcmVzdWx0ICs9ICcvJztcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlUGF0aG5hbWU7XG4iLCJ2YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbnZhciBwcmVmaXggPSAnSW52YXJpYW50IGZhaWxlZCc7XG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByZWZpeCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihwcmVmaXggKyBcIjogXCIgKyAobWVzc2FnZSB8fCAnJykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbnZhcmlhbnQ7XG4iLCJ2YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbmZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghaXNQcm9kdWN0aW9uKSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0ZXh0ID0gXCJXYXJuaW5nOiBcIiArIG1lc3NhZ2U7XG5cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4odGV4dCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRocm93IEVycm9yKHRleHQpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2FybmluZztcbiIsImZ1bmN0aW9uIHZhbHVlT2Yob2JqKSB7XG4gIHJldHVybiBvYmoudmFsdWVPZiA/IG9iai52YWx1ZU9mKCkgOiBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YuY2FsbChvYmopO1xufVxuXG5mdW5jdGlvbiB2YWx1ZUVxdWFsKGEsIGIpIHtcbiAgLy8gVGVzdCBmb3Igc3RyaWN0IGVxdWFsaXR5IGZpcnN0LlxuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgLy8gT3RoZXJ3aXNlLCBpZiBlaXRoZXIgb2YgdGhlbSA9PSBudWxsIHRoZXkgYXJlIG5vdCBlcXVhbC5cbiAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgIHJldHVybiAoXG4gICAgICBBcnJheS5pc0FycmF5KGIpICYmXG4gICAgICBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiZcbiAgICAgIGEuZXZlcnkoZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlRXF1YWwoaXRlbSwgYltpbmRleF0pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgYiA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgYVZhbHVlID0gdmFsdWVPZihhKTtcbiAgICB2YXIgYlZhbHVlID0gdmFsdWVPZihiKTtcblxuICAgIGlmIChhVmFsdWUgIT09IGEgfHwgYlZhbHVlICE9PSBiKSByZXR1cm4gdmFsdWVFcXVhbChhVmFsdWUsIGJWYWx1ZSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgYSwgYikpLmV2ZXJ5KGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHZhbHVlRXF1YWwoYVtrZXldLCBiW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWx1ZUVxdWFsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==