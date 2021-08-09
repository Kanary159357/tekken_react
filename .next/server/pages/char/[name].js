(function() {
var exports = {};
exports.id = "pages/char/[name]";
exports.ids = ["pages/char/[name]"];
exports.modules = {

/***/ "./components/Overlay.tsx":
/*!********************************!*\
  !*** ./components/Overlay.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\Overlay.tsx";



const OverlayWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_1__.Palette.overlay};
`;

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

/* harmony default export */ __webpack_exports__["default"] = (Overlay);

/***/ }),

/***/ "./components/PageComponents/CommandDescription.tsx":
/*!**********************************************************!*\
  !*** ./components/PageComponents/CommandDescription.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _img_Frame2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/Frame2.png */ "./img/Frame2.png");
/* harmony import */ var _img_Frame1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/Frame1.png */ "./img/Frame1.png");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Overlay */ "./components/Overlay.tsx");
/* harmony import */ var _styles_components_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/components/Icon */ "./styles/components/Icon.tsx");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\PageComponents\\CommandDescription.tsx";








const Animation = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
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
const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    position: fixed;
    left: calc(50% - 200px);
    top: 0;
    z-index: 2;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.tablet} {
        left: calc(50% - 175px);
    }
`;
const DescriptionWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    width: 400px;
    margin: 30px auto;
    padding: 10px 25px;
    border-radius: 16px;
    position: relative;
    background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.white_1};
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.tablet} {
        width: 300px;
    }
    .header {
        font-size: 40px;
        margin-bottom: 10px;
        font-weight: 800;
        text-align: center;
        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.tablet} {
            font-size: 30px;
        }
    }
    .description {
        font-size: 1em;
        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.desktop} {
            width: 100%;
        }
    }
    .command {
        margin-top: 30px;
        img {
            width: 150px;
            height: 150px;
            @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.tablet} {
                width: 125px;
                height: 125px;
            }
        }
    }
    .example {
        margin-top: 30px;
    }
`;
const Sentence = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    display: block;
    text-align: center;
    width: 100%;
    padding-top: 10px;
    font-size: 20px;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.tablet} {
        display: block;
        width: 100%;
    }
`;
const SmallHeader = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    height: 30px;
    display: inline-block;
    padding-left: 30px;
    font-weight: 800;
    font-size: 30px;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.tablet} {
        padding-left: 80px;
    }
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.mobile} {
        padding-left: 0;
    }
    &:after {
        content: '';
        display: block;
        bottom: 0;
        left: 50%;
        width: 0%;
        height: 2px;
        background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.red_1};
        transition: all ease-in-out 0.2s;
    }
    &:hover::after {
        width: 100%;
    }
`;
const Highlighted = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().span)`
    box-shadow: ${props => props.color ? props.color : _styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.black_2};
    background: ${props => props.color ? props.color : _styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.black_2};
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.FontColor.white};
`;
const ImageWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    justify-content: space-around;
    align-items: center;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.tablet} {
        justify-content: center;
    }
    .arrow {
        font-size: 50px;
        margin: 0 10px;
        color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.gray_1};
    }
`;
const DeleteButton = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 20px;
    right: 20px;
    text-align: center;
    color: black;
    cursor: pointer;
`;

const CommandDescription = ({
  func
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Animation, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DescriptionWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DeleteButton, {
        onClick: func,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_7__.default, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faTimes,
          color: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.black_1
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
            color: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.red_1,
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
            color: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.green_2,
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
            src: _img_Frame1_png__WEBPACK_IMPORTED_MODULE_5__.default,
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
            src: _img_Frame2_png__WEBPACK_IMPORTED_MODULE_4__.default,
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
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Overlay__WEBPACK_IMPORTED_MODULE_6__.default, {
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

/* harmony default export */ __webpack_exports__["default"] = (CommandDescription);

/***/ }),

/***/ "./components/PageComponents/Info.tsx":
/*!********************************************!*\
  !*** ./components/PageComponents/Info.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\PageComponents\\Info.tsx";



const InfoWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
    display: flex;
    height: 100%;
    width: 300px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.desktop} {
        height: 50px;
        line-height: 49px;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.black_1};
    }
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.tablet} {
        height: 100px;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }
    h2 {
        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.desktop} {
            margin: 0;
            font-size: 20px;
        }
    }

    .link {
        display: flex;
        flex-direction: column;
        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.desktop} {
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    }
    .info_img {
        text-align: center;
        color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.FontColor.black};
        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.desktop} {
            color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.FontColor.white};
        }
        img {
            width: 80%;
            @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.desktop} {
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
            color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.FontColor.black};
        }
        padding-bottom: 15px;
        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.desktop} {
            padding-left: 10px;
            padding-bottom: 0;
            &,
            &:active,
            &:link,
            &:visited {
                color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.FontColor.white};
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

        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.desktop} {
            width: 2em;
            height: 2em;
            text-align: center;
        }
        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.tablet} {
            width: 1.5em;
            height: 1.5em;
        }
        @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.mobile} {
            width: 1em;
            height: 1em;
        }
    }
`;

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

/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./components/PageComponents/Loading.tsx":
/*!***********************************************!*\
  !*** ./components/PageComponents/Loading.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingWithOverlay": function() { return /* binding */ LoadingWithOverlay; },
/* harmony export */   "LoadingWithoutOverlay": function() { return /* binding */ LoadingWithoutOverlay; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Overlay */ "./components/Overlay.tsx");


var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\PageComponents\\Loading.tsx";




const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    svg {
        z-index: 9999;
    }
`;
const WithoutWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    svg {
        z-index: 9999;
    }
`;

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
          stroke: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.red_1,
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Overlay__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

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
          stroke: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.red_1,
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



/***/ }),

/***/ "./components/PageComponents/Main.tsx":
/*!********************************************!*\
  !*** ./components/PageComponents/Main.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _TapComponents_TabControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TapComponents/TabControl */ "./components/TapComponents/TabControl.tsx");
/* harmony import */ var _TapComponents_TabPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TapComponents/TabPanel */ "./components/TapComponents/TabPanel.tsx");
/* harmony import */ var _TapComponents_TabInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TapComponents/TabInfo */ "./components/TapComponents/TabInfo.tsx");
/* harmony import */ var _utils_TableOrder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/TableOrder */ "./utils/TableOrder.ts");

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\PageComponents\\Main.tsx";







const MainWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
    display: flex;
    height: 100%;
    width: 100%;
    background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.white_1};

    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.desktop} {
        height: calc(100% - 50px);
    }
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.tablet} {
        height: calc(100% - 100px);
    }
`;
const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const Main = ({
  data,
  tableIndex,
  handleIndex
}) => {
  const PunishInfo = [{
    tag: {
      description: 'standing',
      detail: _utils_TableOrder__WEBPACK_IMPORTED_MODULE_7__.TableOrder.standing
    },
    header: '선자세 딜캐',
    columns: ['프레임', '커맨드', '데미지', '판정', '히트이득', '설명'],
    data: data.standing
  }, {
    tag: {
      description: 'up',
      detail: _utils_TableOrder__WEBPACK_IMPORTED_MODULE_7__.TableOrder.up
    },
    header: '앉은자세 딜캐',
    columns: ['프레임', '커맨드', '데미지', '판정', '히트이득', '설명'],
    data: data.up
  }];
  const ThrowInfo = [{
    tag: {
      description: 'Throw',
      detail: _utils_TableOrder__WEBPACK_IMPORTED_MODULE_7__.TableOrder.Throw
    },
    header: '잡기',
    columns: ['커맨드', '데미지', '프레임', '설명', '잡기풀기'],
    data: data.Throw
  }];
  const ComboInfo = [{
    tag: {
      description: 'combo',
      detail: _utils_TableOrder__WEBPACK_IMPORTED_MODULE_7__.TableOrder.combo
    },
    header: '콤보',
    columns: ['커맨드', '설명'],
    data: data.combo
  }, {
    tag: {
      description: 'Extrahit',
      detail: _utils_TableOrder__WEBPACK_IMPORTED_MODULE_7__.TableOrder.Extrahit
    },
    header: '추가타',
    columns: ['커맨드', '설명'],
    data: data.Extrahit
  }, {
    tag: {
      description: 'WallCombo',
      detail: _utils_TableOrder__WEBPACK_IMPORTED_MODULE_7__.TableOrder.WallCombo
    },
    header: '벽콤보',
    columns: ['커맨드', '설명'],
    data: data.WallCombo
  }];
  const PatternMainInfo = [{
    tag: {
      description: 'MainMove',
      detail: _utils_TableOrder__WEBPACK_IMPORTED_MODULE_7__.TableOrder.MainMove
    },
    header: '주력기',
    columns: ['커맨드', '별명', '데미지', '프레임', '가드프레임', '히트프레임', '판정', '설명'],
    data: data.MainMove
  }, {
    tag: {
      description: 'Pattern',
      detail: _utils_TableOrder__WEBPACK_IMPORTED_MODULE_7__.TableOrder.Pattern
    },
    header: '패턴/날먹',
    columns: ['커맨드', '설명', '파해'],
    data: data.Pattern
  }];
  const arr = ['딜레이캐치', '콤보', '잡기', '주력기, 패턴'];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainWrapper, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabControl__WEBPACK_IMPORTED_MODULE_4__.default, {
        handleIndex: handleIndex,
        value: tableIndex,
        arr: arr
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabPanel__WEBPACK_IMPORTED_MODULE_5__.default, {
        value: tableIndex,
        index: 0,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabInfo__WEBPACK_IMPORTED_MODULE_6__.default, {
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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabPanel__WEBPACK_IMPORTED_MODULE_5__.default, {
        value: tableIndex,
        index: 1,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabInfo__WEBPACK_IMPORTED_MODULE_6__.default, {
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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabPanel__WEBPACK_IMPORTED_MODULE_5__.default, {
        value: tableIndex,
        index: 2,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabInfo__WEBPACK_IMPORTED_MODULE_6__.default, {
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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabPanel__WEBPACK_IMPORTED_MODULE_5__.default, {
        value: tableIndex,
        index: 3,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TapComponents_TabInfo__WEBPACK_IMPORTED_MODULE_6__.default, {
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

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/TableComponents/Table.tsx":
/*!**********************************************!*\
  !*** ./components/TableComponents/Table.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableControl": function() { return /* binding */ TableControl; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableRow */ "./components/TableComponents/TableRow.tsx");
/* harmony import */ var _TableEdits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TableEdits */ "./components/TableComponents/TableEdits.tsx");
/* harmony import */ var _hooks_useInputValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useInputValue */ "./hooks/useInputValue.ts");
/* harmony import */ var _styles_components_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/components/Icon */ "./styles/components/Icon.tsx");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../context/UserContext */ "./context/UserContext.tsx");
/* harmony import */ var _context_ModalContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../context/ModalContext */ "./context/ModalContext.tsx");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\TableComponents\\Table.tsx";











const TableWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    margin-bottom: 20px;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_8__.Device.mobile} {
        font-size: 15px;
    }
`;
const TableContent = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().table)`
    width: 90%;
    border-collapse: collapse;
    border-radius: 10px;
    margin: 10px auto;

    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_8__.Device.desktop} {
        width: 100%;
    }
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_8__.Device.mobile} {
        width: 720px;
    }
`;
const TableHead = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().th)`
    text-align: left;
    padding: 10px;
    border-collapse: collapse;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_8__.Device.mobile} {
        padding: 5px;
    }
`;
const TableRow = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().tr)`
    margin-bottom: -1px;
    border: 1px solid ${_styles_theme__WEBPACK_IMPORTED_MODULE_8__.Palette.border_1};
    box-sizing: border-box;
`;
const TableControl = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().td)`
    width: 30px;
    text-align: center;
    cursor: pointer;
`;
const TableAdd = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().tr)`
    border: none;
    width: 100%;
    td {
        text-align: center;
        font-size: 2rem;
    }
`;

const Table = ({
  item
}) => {
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
  let router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
  const {
    name
  } = router.query;
  const colSpan = tag.detail.length;
  const modalDispatch = (0,_context_ModalContext__WEBPACK_IMPORTED_MODULE_10__.useModalDispatch)();
  const {
    0: edit,
    1: setEdit
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    values,
    setValue,
    handleChange
  } = (0,_hooks_useInputValue__WEBPACK_IMPORTED_MODULE_5__.default)(initialValue);
  const modalProps = {
    description: tag.description,
    values: values,
    charName: name
  };
  const user = (0,_context_UserContext__WEBPACK_IMPORTED_MODULE_9__.useUserData)();

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
      lineNumber: 109,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableContent, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableRow, {
          children: columns.map((column, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHead, {
            children: column
          }, header + index + column, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        children: [data.map((row, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_3__.default, {
          row: row,
          charName: name,
          tag: tag.description
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 25
        }, undefined)), edit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableRow, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableEdits__WEBPACK_IMPORTED_MODULE_4__.default, {
            setEdit: setEdit,
            values: values,
            handleChange: handleChange,
            charName: name,
            handleModal: handleModal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableAdd, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
            onClick: () => setEdit(true),
            colSpan: colSpan,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_6__.default, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPlus,
              color: _styles_theme__WEBPACK_IMPORTED_MODULE_8__.Palette.gray_1,
              hovercolor: _styles_theme__WEBPACK_IMPORTED_MODULE_8__.Palette.gray_2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Table));

/***/ }),

/***/ "./components/TableComponents/TableEdits.tsx":
/*!***************************************************!*\
  !*** ./components/TableComponents/TableEdits.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _styles_components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/components/Icon */ "./styles/components/Icon.tsx");


var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\TableComponents\\TableEdits.tsx";





const TableEditBox = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().td)`
    border-collapse: collapse;
    height: 70px;
`;
const Input = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().textarea)`
    width: 100%;
    min-width: 75px;
    display: block;
    height: 150px;
    border: none;
    border-left: 1px solid ${_styles_theme__WEBPACK_IMPORTED_MODULE_4__.Palette.gray_1};
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

const EditTableControl = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().td)`
    width: 30px;
    text-align: center;
    cursor: pointer;
    background-color: ${props => props.backcolor};
`;

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
      backcolor: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.Palette.green_1,
      onClick: handleModal,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_5__.default, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faCheck
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
      backcolor: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.Palette.red_1,
      onClick: () => setEdit(false),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_5__.default, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTimes
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

/* harmony default export */ __webpack_exports__["default"] = (TableEdits);

/***/ }),

/***/ "./components/TableComponents/TableRow.tsx":
/*!*************************************************!*\
  !*** ./components/TableComponents/TableRow.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_ModalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/ModalContext */ "./context/ModalContext.tsx");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/UserContext */ "./context/UserContext.tsx");
/* harmony import */ var _hooks_useInputValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useInputValue */ "./hooks/useInputValue.ts");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _styles_components_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/components/Icon */ "./styles/components/Icon.tsx");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Table */ "./components/TableComponents/Table.tsx");
/* harmony import */ var _TableEdits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TableEdits */ "./components/TableComponents/TableEdits.tsx");


var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\TableComponents\\TableRow.tsx";










const TableRow = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().tr)`
    margin-bottom: -1px;
    border-bottom: 1px solid #d1d1d1;
    box-sizing: border-box;
    height: 50px;
`;
const TableDataBox = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().td)`
    border-collapse: collapse;
    padding: 10px;
    overflow: hidden;
    max-width: 350px;

    min-width: ${props => props.isState ? '200px' : '50px'};
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_7__.Device.mobile} {
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

const TableRowData = ({
  row,
  charName,
  tag
}) => {
  const {
    0: edit,
    1: setEdit
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    values,
    handleChange,
    setValue
  } = (0,_hooks_useInputValue__WEBPACK_IMPORTED_MODULE_6__.default)(row);
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setValue(row);
    setEdit(false);
  }, [row, setValue]);
  const modalProps = {
    description: tag,
    oldvalues: row,
    values: values,
    charName: charName
  };
  const modalDispatch = (0,_context_ModalContext__WEBPACK_IMPORTED_MODULE_4__.useModalDispatch)();
  const user = (0,_context_UserContext__WEBPACK_IMPORTED_MODULE_5__.useUserData)();

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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableEdits__WEBPACK_IMPORTED_MODULE_10__.default, {
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
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_9__.TableControl, {
        onClick: () => setEdit(!edit),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_8__.default, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faEdit,
          color: _styles_theme__WEBPACK_IMPORTED_MODULE_7__.Palette.green_1,
          hovercolor: _styles_theme__WEBPACK_IMPORTED_MODULE_7__.Palette.green_2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_9__.TableControl, {
        onClick: handleDelete,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_8__.default, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faEraser,
          color: _styles_theme__WEBPACK_IMPORTED_MODULE_7__.Palette.red_1,
          hovercolor: _styles_theme__WEBPACK_IMPORTED_MODULE_7__.Palette.red_2
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

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo(TableRowData));

/***/ }),

/***/ "./components/TapComponents/TabControl.tsx":
/*!*************************************************!*\
  !*** ./components/TapComponents/TabControl.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\TapComponents\\TabControl.tsx";


const TabControlBox = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
    height: 70px;
    width: 500px;
    display: flex;
    justify-content: center;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.mobile} {
        width: 100%;
    }
`;
const TabControlItemBox = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
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
        background-color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Palette.red_1};
        transition: all ease-in-out 0.2s;
    }
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Device.mobile} {
        font-size: 15px;
    }
`;

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

/* harmony default export */ __webpack_exports__["default"] = (TabControl);

/***/ }),

/***/ "./components/TapComponents/TabInfo.tsx":
/*!**********************************************!*\
  !*** ./components/TapComponents/TabInfo.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TableComponents_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TableComponents/Table */ "./components/TableComponents/Table.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\TapComponents\\TabInfo.tsx";



const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
    display: flex;
    flex-direction: column;
    h2 {
        margin-left: 100px;
    }
`;

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

/* harmony default export */ __webpack_exports__["default"] = (TabInfo);

/***/ }),

/***/ "./components/TapComponents/TabPanel.tsx":
/*!***********************************************!*\
  !*** ./components/TapComponents/TabPanel.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\TapComponents\\TabPanel.tsx";

const TabPanelBlock = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
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

/* harmony default export */ __webpack_exports__["default"] = (TabPanel);

/***/ }),

/***/ "./context/DBContext.tsx":
/*!*******************************!*\
  !*** ./context/DBContext.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateProvider": function() { return /* binding */ StateProvider; },
/* harmony export */   "useDBData": function() { return /* binding */ useDBData; },
/* harmony export */   "useDBDispatch": function() { return /* binding */ useDBDispatch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\context\\DBContext.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


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
const DataContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const DataDispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);

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
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, InitialState);
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
function useDBData() {
  const data = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DataContext);
  if (!data) throw new Error('Cannot find Provider');
  return data;
}
function useDBDispatch() {
  const dispatch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DataDispatchContext);
  if (!dispatch) throw new Error('Cannot find Provider');
  return dispatch;
}

/***/ }),

/***/ "./context/DBContextFunc.ts":
/*!**********************************!*\
  !*** ./context/DBContextFunc.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _firebaseInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebaseInit */ "./firebaseInit.tsx");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_TableOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/TableOrder */ "./utils/TableOrder.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




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
      const order = _utils_TableOrder__WEBPACK_IMPORTED_MODULE_2__.TableOrder[category];
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
    const data = await _firebaseInit__WEBPACK_IMPORTED_MODULE_0__.default.collection('Character').doc(char).get().then(snap => {
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

async function UpdateHistory(char, data, uid, type) {
  try {
    const history = {
      char: char,
      data: data,
      time: firebase__WEBPACK_IMPORTED_MODULE_1___default().firestore.Timestamp.fromDate(new Date())
    };
    const document = await _firebaseInit__WEBPACK_IMPORTED_MODULE_0__.default.collection('User').doc(uid).get();

    if (document.exists && document) {
      await document.ref.update({
        [type]: firebase__WEBPACK_IMPORTED_MODULE_1___default().firestore.FieldValue.arrayUnion(history)
      });
    } else {
      await _firebaseInit__WEBPACK_IMPORTED_MODULE_0__.default.collection('User').doc(uid).set({
        [type]: [history]
      });
    }
  } catch {
    console.log('유저 히스토리 업데이트 실패');
  }
}

async function AddFunc(char, data, tag) {
  try {
    await _firebaseInit__WEBPACK_IMPORTED_MODULE_0__.default.collection('Character').doc(char).update({
      [tag]: firebase__WEBPACK_IMPORTED_MODULE_1___default().firestore.FieldValue.arrayUnion(data)
    });
  } catch (err) {
    alert('정보를 추가하는데 실패했습니다');
    console.log('에러정보 ' + err);
  }
}

async function DeleteFunc(char, data, tag) {
  try {
    await _firebaseInit__WEBPACK_IMPORTED_MODULE_0__.default.collection('Character').doc(char).update({
      [tag]: firebase__WEBPACK_IMPORTED_MODULE_1___default().firestore.FieldValue.arrayRemove(data)
    });
  } catch (err) {
    alert('정보를 삭제하는데 실패했습니다');
    console.log('에러정보 ' + err);
  }
}

async function UpdateCharsFunc(order, category) {
  async function UpdatePropsFunc(order, id, category) {
    try {
      const data = await _firebaseInit__WEBPACK_IMPORTED_MODULE_0__.default.collection('Character').doc(id).get().then(snap => {
        return snap.data();
      });
      const newData = order(data[category]);

      try {
        await _firebaseInit__WEBPACK_IMPORTED_MODULE_0__.default.collection('Character').doc(id).update({
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
    const documents = await _firebaseInit__WEBPACK_IMPORTED_MODULE_0__.default.collection('Character').get();
    documents.forEach(document => {
      UpdatePropsFunc(order, document.id, category);
    });
  } catch (err) {
    alert('캐릭터들의 정보를 받아오는데 실패했습니다');
    console.log('에러 정보' + err);
  }
}

async function UpdatePropsFunc(id, property) {
  try {
    try {
      await _firebaseInit__WEBPACK_IMPORTED_MODULE_0__.default.collection('Character').doc(id).update({
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

async function Rename() {
  const data = await _firebaseInit__WEBPACK_IMPORTED_MODULE_0__.default.collection('Character').doc('Cladio').get().then(snap => {
    return snap.data();
  });
  await _firebaseInit__WEBPACK_IMPORTED_MODULE_0__.default.collection('Character').doc('Claudio').set(data);
}
async function AddNewCharacter() {
  const name = 'Leroy';

  try {
    await _firebaseInit__WEBPACK_IMPORTED_MODULE_0__.default.collection('Character').doc(name).set({});
    const arr = ['MainMove', 'standing', 'up', 'Throw', 'combo', 'WallCombo', 'Extrahit', 'Pattern', 'Info'];
    arr.forEach(item => {
      UpdatePropsFunc(name, item);
    });
  } catch (err) {
    alert('실패');
  }
}
async function AddNewProps() {
  try {
    const documents = await _firebaseInit__WEBPACK_IMPORTED_MODULE_0__.default.collection('Character').get();
    documents.forEach(document => {
      UpdatePropsFunc(document.id, 'MainMove');
    });
  } catch (err) {
    alert('캐릭터들의 정보를 받아오는데 실패했습니다');
    console.log('에러 정보' + err);
  }
}
const AddData = async (tag, data, char, uid) => {
  await AddFunc(char, data, tag);
  await UpdateHistory(char, data, uid, 'ADD');
};
async function DeleteData(tag, data, char, uid) {
  await DeleteFunc(char, data, tag);
  await UpdateHistory(char, data, uid, 'Delete');
}
async function EditData(tag, old, newData, char, uid) {
  await DeleteFunc(char, old, tag);
  await AddFunc(char, newData, tag);
  await UpdateHistory(char, {
    old,
    newData
  }, uid, 'Edit');
}
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

/***/ }),

/***/ "./context/ModalContext.tsx":
/*!**********************************!*\
  !*** ./context/ModalContext.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalProvider": function() { return /* binding */ ModalProvider; },
/* harmony export */   "useModalData": function() { return /* binding */ useModalData; },
/* harmony export */   "useModalDispatch": function() { return /* binding */ useModalDispatch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\context\\ModalContext.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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

const ModalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const ModalDispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
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
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
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
function useModalData() {
  const data = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ModalContext);
  if (!data) throw new Error('Cannot find Provider');
  return data;
}
function useModalDispatch() {
  const data = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ModalDispatchContext);
  if (!data) throw new Error('Cannot find Provider');
  return data;
}

/***/ }),

/***/ "./context/UserContext.tsx":
/*!*********************************!*\
  !*** ./context/UserContext.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useUserData": function() { return /* binding */ useUserData; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebaseInit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebaseInit */ "./firebaseInit.tsx");

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\context\\UserContext.tsx";


const UserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);

const UserProvider = ({
  children
}) => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    _firebaseInit__WEBPACK_IMPORTED_MODULE_2__.auth.onAuthStateChanged(async tempUser => {
      if (tempUser === null) {
        setUser(null);
      } else {
        const {
          uid,
          displayName,
          email,
          photoURL
        } = tempUser;
        setUser({
          uid,
          displayName,
          email,
          photoURL
        });
      }
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {
    value: user,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (UserProvider);
function useUserData() {
  const data = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);
  return data;
}

/***/ }),

/***/ "./firebaseInit.tsx":
/*!**************************!*\
  !*** ./firebaseInit.tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": function() { return /* binding */ auth; },
/* harmony export */   "signInWithGoogle": function() { return /* binding */ signInWithGoogle; },
/* harmony export */   "logOut": function() { return /* binding */ logOut; }
/* harmony export */ });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);



if (!(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {
  firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp({
    apiKey: 'AIzaSyDI3lUc4QjYBdRUaTVqI6r0neyocpSuW40',
    authDomain: 'tekken-info.firebaseapp.com',
    databaseURL: 'https://tekken-info-default-rtdb.firebaseio.com',
    projectId: 'tekken-info',
    storageBucket: 'tekken-info.appspot.com',
    messagingSenderId: '482493151012',
    appId: '1:482493151012:web:cc3227418248134488a5b1'
  });
} else {
  firebase__WEBPACK_IMPORTED_MODULE_0___default().app();
}

const db = firebase__WEBPACK_IMPORTED_MODULE_0___default().firestore();
/* harmony default export */ __webpack_exports__["default"] = (db);
const auth = firebase__WEBPACK_IMPORTED_MODULE_0___default().auth();
const googleProvider = new (firebase__WEBPACK_IMPORTED_MODULE_0___default().auth.GoogleAuthProvider)();
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

/***/ }),

/***/ "./hooks/useInputValue.ts":
/*!********************************!*\
  !*** ./hooks/useInputValue.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useEditValue; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function useEditValue(initialValue) {
  const {
    0: values,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);

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

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/char/[name].tsx":
/*!*******************************!*\
  !*** ./pages/char/[name].tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PageComponents_Info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PageComponents/Info */ "./components/PageComponents/Info.tsx");
/* harmony import */ var _components_PageComponents_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PageComponents/Main */ "./components/PageComponents/Main.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_DBContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/DBContext */ "./context/DBContext.tsx");
/* harmony import */ var _context_DBContextFunc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/DBContextFunc */ "./context/DBContextFunc.ts");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _components_PageComponents_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/PageComponents/Loading */ "./components/PageComponents/Loading.tsx");
/* harmony import */ var _components_PageComponents_CommandDescription__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/PageComponents/CommandDescription */ "./components/PageComponents/CommandDescription.tsx");
/* harmony import */ var _styles_components_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/components/Icon */ "./styles/components/Icon.tsx");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\pages\\char\\[name].tsx";












const CharWrap = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_8__.Device.desktop} {
        flex-direction: column;
    }
`;
const DescriptionButton = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 30px;
    cursor: pointer;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_8__.Device.desktop} {
        top: 5px;
        right: 20px;
    }
`;

const Char = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    name
  } = router.query;
  console.log(name);
  const {
    charProps,
    loading
  } = (0,_context_DBContext__WEBPACK_IMPORTED_MODULE_6__.useDBData)();
  const tempDispatch = (0,_context_DBContext__WEBPACK_IMPORTED_MODULE_6__.useDBDispatch)();
  const {
    0: description,
    1: setDescription
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: tableIndex,
    1: setTableIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_context_DBContextFunc__WEBPACK_IMPORTED_MODULE_7__.LoadData)(name, tempDispatch); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);
  const handleDescription = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setDescription(false);
  }, []);
  const handleIndex = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(index => {
    setTableIndex(index);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CharWrap, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DescriptionButton, {
      onClick: () => setDescription(true),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_11__.default, {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faQuestionCircle,
        color: _styles_theme__WEBPACK_IMPORTED_MODULE_8__.Palette.gray_1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, undefined), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageComponents_Loading__WEBPACK_IMPORTED_MODULE_9__.LoadingWithoutOverlay, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageComponents_CommandDescription__WEBPACK_IMPORTED_MODULE_10__.default, {
        func: handleDescription
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageComponents_Info__WEBPACK_IMPORTED_MODULE_2__.default, {
          data: charProps === null || charProps === void 0 ? void 0 : charProps.Info,
          name: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageComponents_Main__WEBPACK_IMPORTED_MODULE_3__.default, {
          data: charProps,
          tableIndex: tableIndex,
          handleIndex: handleIndex
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 25
        }, undefined)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Char);

/***/ }),

/***/ "./styles/components/Icon.tsx":
/*!************************************!*\
  !*** ./styles/components/Icon.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\styles\\components\\Icon.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon)`
    color: ${props => props.color || '#ffffff'};
    cursor: ${props => props.pointer && 'pointer'};
    &:hover {
        color: ${props => props.hovercolor};
    }
`;

const CustomIcon = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconWrapper, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo(CustomIcon));

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FontSize": function() { return /* binding */ FontSize; },
/* harmony export */   "FontColor": function() { return /* binding */ FontColor; },
/* harmony export */   "BreakPoint": function() { return /* binding */ BreakPoint; },
/* harmony export */   "Device": function() { return /* binding */ Device; },
/* harmony export */   "Palette": function() { return /* binding */ Palette; }
/* harmony export */ });
const calcRem = size => `${size / 16}rem`;

const FontSize = {
  small: calcRem(12),
  big: calcRem(16),
  base: calcRem(14)
};
const FontColor = {
  black: '#333333',
  white: '#ffffff'
};
const BreakPoint = {
  mobile: '720px',
  tablet: '768px',
  desktop: '1140px'
};
const Device = {
  mobile: `(max-width: ${BreakPoint.mobile})`,
  tablet: `(max-width: ${BreakPoint.tablet})`,
  desktop: `(max-width: ${BreakPoint.desktop})`
};
const Palette = {
  black_1: '#212529',
  black_2: '#333333',
  white_1: '#ffffff',
  white_2: '#efefef',
  border_1: '#d1d1d1',
  red_1: '#ff937d',
  red_2: '#b35440',
  red_3: '#b33a20',
  green_1: '#b1e36f',
  green_2: '#93ad74',
  gray_1: '#c9c9c9',
  gray_2: '#8a8a8a',
  gray_3: '#525252',
  overlay: 'rgba(0, 0, 0, 0.6)'
};

/***/ }),

/***/ "./utils/TableOrder.ts":
/*!*****************************!*\
  !*** ./utils/TableOrder.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableOrder": function() { return /* binding */ TableOrder; },
/* harmony export */   "Category": function() { return /* binding */ Category; }
/* harmony export */ });
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

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");;

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/firestore");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/char/[name].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9jb21wb25lbnRzL092ZXJsYXkudHN4Iiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL2NvbXBvbmVudHMvUGFnZUNvbXBvbmVudHMvQ29tbWFuZERlc2NyaXB0aW9uLnRzeCIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL0luZm8udHN4Iiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL2NvbXBvbmVudHMvUGFnZUNvbXBvbmVudHMvTG9hZGluZy50c3giLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0Ly4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9NYWluLnRzeCIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9jb21wb25lbnRzL1RhYmxlQ29tcG9uZW50cy9UYWJsZS50c3giLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0Ly4vY29tcG9uZW50cy9UYWJsZUNvbXBvbmVudHMvVGFibGVFZGl0cy50c3giLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0Ly4vY29tcG9uZW50cy9UYWJsZUNvbXBvbmVudHMvVGFibGVSb3cudHN4Iiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL2NvbXBvbmVudHMvVGFwQ29tcG9uZW50cy9UYWJDb250cm9sLnRzeCIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9jb21wb25lbnRzL1RhcENvbXBvbmVudHMvVGFiSW5mby50c3giLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0Ly4vY29tcG9uZW50cy9UYXBDb21wb25lbnRzL1RhYlBhbmVsLnRzeCIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9jb250ZXh0L0RCQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0Ly4vY29udGV4dC9EQkNvbnRleHRGdW5jLnRzIiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL2NvbnRleHQvTW9kYWxDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9jb250ZXh0L1VzZXJDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9maXJlYmFzZUluaXQudHN4Iiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL2hvb2tzL3VzZUlucHV0VmFsdWUudHMiLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0Ly4vcGFnZXMvY2hhci9bbmFtZV0udHN4Iiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL3N0eWxlcy9jb21wb25lbnRzL0ljb24udHN4Iiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL3N0eWxlcy90aGVtZS50cyIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi91dGlscy9UYWJsZU9yZGVyLnRzIiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL2ltZy9GcmFtZTEucG5nIiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL2ltZy9GcmFtZTIucG5nIiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0L2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0L2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0L2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3Rla2tlbl9yZWFjdC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovL3Rla2tlbl9yZWFjdC9pZ25vcmVkfEM6XFxVc2Vyc1xca2tra1xcRG9jdW1lbnRzXFxHaXRIdWJcXE1hZGVcXHRla2tlbl9yZWFjdFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIk92ZXJsYXlXcmFwcGVyIiwic3R5bGVkIiwiUGFsZXR0ZSIsIk92ZXJsYXkiLCJmdW5jIiwiQW5pbWF0aW9uIiwiV3JhcHBlciIsIkRldmljZSIsIkRlc2NyaXB0aW9uV3JhcHBlciIsIlNlbnRlbmNlIiwiU21hbGxIZWFkZXIiLCJIaWdobGlnaHRlZCIsInByb3BzIiwiY29sb3IiLCJGb250Q29sb3IiLCJJbWFnZVdyYXBwZXIiLCJEZWxldGVCdXR0b24iLCJDb21tYW5kRGVzY3JpcHRpb24iLCJmYVRpbWVzIiwiYmxhY2tfMSIsImZyYW1lMSIsImZyYW1lMiIsIkluZm9XcmFwcGVyIiwiSW5mbyIsImRhdGEiLCJuYW1lIiwiaW5mbyIsInVuZGVmaW5lZCIsInByb2Nlc3MiLCJlbnYiLCJQVUJMSUNfVVJMIiwicHVuaXNoIiwiY29tYm8iLCJkYyIsIldpdGhvdXRXcmFwcGVyIiwiTG9hZGluZ1dpdGhPdmVybGF5IiwiTG9hZGluZ1dpdGhvdXRPdmVybGF5IiwiTWFpbldyYXBwZXIiLCJNYWluIiwidGFibGVJbmRleCIsImhhbmRsZUluZGV4IiwiUHVuaXNoSW5mbyIsInRhZyIsImRlc2NyaXB0aW9uIiwiZGV0YWlsIiwiVGFibGVPcmRlciIsInN0YW5kaW5nIiwiaGVhZGVyIiwiY29sdW1ucyIsInVwIiwiVGhyb3dJbmZvIiwiVGhyb3ciLCJDb21ib0luZm8iLCJFeHRyYWhpdCIsIldhbGxDb21ibyIsIlBhdHRlcm5NYWluSW5mbyIsIk1haW5Nb3ZlIiwiUGF0dGVybiIsImFyciIsIlRhYmxlV3JhcHBlciIsIlRhYmxlQ29udGVudCIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiVGFibGVDb250cm9sIiwiVGFibGVBZGQiLCJUYWJsZSIsIml0ZW0iLCJpbml0aWFsVmFsdWUiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImNvbFNwYW4iLCJsZW5ndGgiLCJtb2RhbERpc3BhdGNoIiwidXNlTW9kYWxEaXNwYXRjaCIsImVkaXQiLCJzZXRFZGl0IiwidXNlU3RhdGUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsInVzZUVkaXRWYWx1ZSIsIm1vZGFsUHJvcHMiLCJjaGFyTmFtZSIsInVzZXIiLCJ1c2VVc2VyRGF0YSIsImhhbmRsZU1vZGFsIiwidHlwZSIsInBheWxvYWQiLCJtYXAiLCJjb2x1bW4iLCJpbmRleCIsInJvdyIsImZhUGx1cyIsImdyYXlfMiIsIlJlYWN0IiwiVGFibGVFZGl0Qm94IiwiSW5wdXQiLCJUYWJsZUVkaXQiLCJ2YWx1ZSIsIkVkaXRUYWJsZUNvbnRyb2wiLCJiYWNrY29sb3IiLCJUYWJsZUVkaXRzIiwiT2JqZWN0IiwiZW50cmllcyIsImtleSIsImZhQ2hlY2siLCJUYWJsZURhdGFCb3giLCJpc1N0YXRlIiwidG9nZ2xlIiwiVGFibGVEYXRhIiwiY29udGVudCIsIlRhYmxlUm93RGF0YSIsInNldFRvZ2dsZSIsInVzZUVmZmVjdCIsIm9sZHZhbHVlcyIsImhhbmRsZURlbGV0ZSIsImhhbmRsZVVwZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJpIiwiZmFFZGl0IiwiZ3JlZW5fMiIsImZhRXJhc2VyIiwicmVkXzIiLCJUYWJDb250cm9sQm94IiwiVGFiQ29udHJvbEl0ZW1Cb3giLCJzZWxlY3RlZCIsIlRhYkNvbnRyb2xJdGVtIiwiVGFiQ29udHJvbCIsIlRhYkluZm8iLCJUYWJQYW5lbEJsb2NrIiwic2hvd24iLCJUYWJQYW5lbCIsImNoaWxkcmVuIiwiSW5pdGlhbFN0YXRlIiwiY2hhclByb3BzIiwibG9hZGluZyIsImVycm9yIiwiRGF0YUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRGF0YURpc3BhdGNoQ29udGV4dCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIlN0YXRlUHJvdmlkZXIiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJ1c2VEQkRhdGEiLCJ1c2VDb250ZXh0IiwiRXJyb3IiLCJ1c2VEQkRpc3BhdGNoIiwiTG9hZERhdGEiLCJjaGFyIiwic29ydGJ5S2V5IiwiYSIsImIiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcnNlSW50Iiwic29ydGJ5Q291bnRlciIsImF2IiwiaW5jbHVkZXMiLCJidiIsIm9yZGVyIiwiY2F0ZWdvcnkiLCJvcmRlckJ5Q29udGVudCIsImluZGV4T2YiLCJrZXlzIiwic29ydCIsIm9iaiIsImRiIiwiZG9jIiwiZ2V0IiwidGhlbiIsInNuYXAiLCJuZXdPYmoiLCJlcnIiLCJVcGRhdGVIaXN0b3J5IiwidWlkIiwiaGlzdG9yeSIsInRpbWUiLCJmaXJlYmFzZSIsIkRhdGUiLCJkb2N1bWVudCIsImV4aXN0cyIsInJlZiIsInVwZGF0ZSIsInNldCIsIkFkZEZ1bmMiLCJhbGVydCIsIkRlbGV0ZUZ1bmMiLCJVcGRhdGVDaGFyc0Z1bmMiLCJVcGRhdGVQcm9wc0Z1bmMiLCJpZCIsIm5ld0RhdGEiLCJkb2N1bWVudHMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJSZW5hbWUiLCJBZGROZXdDaGFyYWN0ZXIiLCJBZGROZXdQcm9wcyIsIkFkZERhdGEiLCJEZWxldGVEYXRhIiwiRWRpdERhdGEiLCJvbGQiLCJBZGRQcm9wZXJ0eSIsIlJlbW92ZVByb3BlcnR5IiwiZmlsdGVyIiwib3BlbiIsIm1vZGFsQWN0aW9uIiwiTW9kYWxDb250ZXh0IiwiTW9kYWxEaXNwYXRjaENvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJNb2RhbFByb3ZpZGVyIiwidXNlTW9kYWxEYXRhIiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJzZXRVc2VyIiwiYXV0aCIsInRlbXBVc2VyIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInBob3RvVVJMIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJnb29nbGVQcm92aWRlciIsInNpZ25JbldpdGhHb29nbGUiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJjYXRjaCIsImxvZ091dCIsInNpZ25PdXQiLCJtZXNzYWdlIiwiZSIsInRhcmdldCIsImV4cG9ydHMiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiY3JlYXRlRWxlbWVudCIsIndpbmRvdyIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiX3VudXNlZCIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJocmVmIiwiYXMiLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImRlZmluZVByb3BlcnR5IiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJwIiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJkZWZhdWx0IiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0IiwibG9hZFJvdXRlIiwicHJlZmV0Y2giLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIl9kZWZhdWx0IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcmVhY3QiLCJfcm91dGVyMiIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJncyIsImV2ZW50Iiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJpc0FycmF5Iiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsImxvY2FsZSIsInRvTG93ZXJDYXNlIiwic3BsaWNlIiwiam9pbiIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsImVtaXQiLCJldnRzIiwiZ2V0RG9tYWluTG9jYWxlIiwiYWRkTG9jYWxlIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJhZGRCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaXNMb2NhbFVSTCIsImludGVycG9sYXRlQXMiLCJyZXNvbHZlSHJlZiIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIl9fZXNNb2R1bGUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsImRvbWFpbkxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsIl8iLCJhc1BhdGhuYW1lIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJyZXBsYWNlIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwicmVzb2x2ZWRIcmVmIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJyZXNvbHZlZEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwib3B0aW9ucyIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJzaGFsbG93IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJ3YXJuIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieCIsInkiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsIl9pc1NzZyIsImlzU3NnIiwicHJpb3JpdHkiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiY2FsbCIsImRlc2MiLCJzbGFzaGVkUHJvdG9jb2xzIiwidXJsT2JqIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJpc05hTiIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJkZWxldGUiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX0FwcCRwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiQ2hhcldyYXAiLCJEZXNjcmlwdGlvbkJ1dHRvbiIsIkNoYXIiLCJ0ZW1wRGlzcGF0Y2giLCJzZXREZXNjcmlwdGlvbiIsInNldFRhYmxlSW5kZXgiLCJoYW5kbGVEZXNjcmlwdGlvbiIsInVzZUNhbGxiYWNrIiwiZmFRdWVzdGlvbkNpcmNsZSIsImdyYXlfMSIsIkljb25XcmFwcGVyIiwiRm9udEF3ZXNvbWVJY29uIiwicG9pbnRlciIsImhvdmVyY29sb3IiLCJDdXN0b21JY29uIiwiY2FsY1JlbSIsInNpemUiLCJGb250U2l6ZSIsInNtYWxsIiwiYmlnIiwiYmxhY2siLCJ3aGl0ZSIsIkJyZWFrUG9pbnQiLCJtb2JpbGUiLCJ0YWJsZXQiLCJkZXNrdG9wIiwiYmxhY2tfMiIsIndoaXRlXzEiLCJ3aGl0ZV8yIiwiYm9yZGVyXzEiLCJyZWRfMSIsInJlZF8zIiwiZ3JlZW5fMSIsImdyYXlfMyIsIm92ZXJsYXkiLCJDYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUdDLDhEQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQkMsMERBQWdCO0FBQ2xDLENBUkE7O0FBVUEsTUFBTUMsT0FBTyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXFDO0FBQ2pELHNCQUFPLDhEQUFDLGNBQUQ7QUFBZ0IsV0FBTyxFQUFFQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxDQUZEOztBQUlBLCtEQUFlRCxPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUUsU0FBUyxHQUFHSiw4REFBVztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWEE7QUFhQSxNQUFNSyxPQUFPLEdBQUdMLDhEQUFXO0FBQzNCO0FBQ0E7QUFDQTtB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aEIsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNqT2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsRUFBRSxrSkFBeUQ7QUFDM0Q7Ozs7Ozs7Ozs7OztBQ05BLCtEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9jaGFyL1tuYW1lXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhbGV0dGUgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE92ZXJsYXlXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiAke1BhbGV0dGUub3ZlcmxheX07XHJcbmA7XHJcblxyXG5jb25zdCBPdmVybGF5ID0gKHsgZnVuYyB9OiB7IGZ1bmM/OiAoKSA9PiB2b2lkIH0pID0+IHtcclxuICAgIHJldHVybiA8T3ZlcmxheVdyYXBwZXIgb25DbGljaz17ZnVuY30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVybGF5O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGV2aWNlLCBQYWxldHRlLCBGb250Q29sb3IgfSBmcm9tICcuLi8uLi9zdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgZnJhbWUyIGZyb20gJy4uLy4uL2ltZy9GcmFtZTIucG5nJztcclxuaW1wb3J0IGZyYW1lMSBmcm9tICcuLi8uLi9pbWcvRnJhbWUxLnBuZyc7XHJcbmltcG9ydCBPdmVybGF5IGZyb20gJy4uL092ZXJsYXknO1xyXG5pbXBvcnQgQ3VzdG9tSWNvbiBmcm9tICcuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9JY29uJztcclxuaW1wb3J0IHsgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5jb25zdCBBbmltYXRpb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW5BbmltYXRpb24gMC4zcztcclxuXHJcbiAgICBAa2V5ZnJhbWVzIGZhZGVJbkFuaW1hdGlvbiB7XHJcbiAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjAwcHgpO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIEBtZWRpYSAke0RldmljZS50YWJsZXR9IHtcclxuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDE3NXB4KTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IERlc2NyaXB0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAke1BhbGV0dGUud2hpdGVfMX07XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UudGFibGV0fSB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgQG1lZGlhICR7RGV2aWNlLnRhYmxldH0ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBAbWVkaWEgJHtEZXZpY2UuZGVza3RvcH0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29tbWFuZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIEBtZWRpYSAke0RldmljZS50YWJsZXR9IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZXhhbXBsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuYDtcclxuY29uc3QgU2VudGVuY2UgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLnRhYmxldH0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5gO1xyXG5jb25zdCBTbWFsbEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLnRhYmxldH0ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogODBweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAke0RldmljZS5tb2JpbGV9IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAke1BhbGV0dGUucmVkXzF9O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xyXG4gICAgfVxyXG4gICAgJjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgSGlnaGxpZ2h0ZWQgPSBzdHlsZWQuc3Bhbjx7IGNvbG9yPzogc3RyaW5nIH0+YFxyXG4gICAgYm94LXNoYWRvdzogJHsocHJvcHMpID0+IChwcm9wcy5jb2xvciA/IHByb3BzLmNvbG9yIDogUGFsZXR0ZS5ibGFja18yKX07XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gKHByb3BzLmNvbG9yID8gcHJvcHMuY29sb3IgOiBQYWxldHRlLmJsYWNrXzIpfTtcclxuICAgIGNvbG9yOiAke0ZvbnRDb2xvci53aGl0ZX07XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIEBtZWRpYSAke0RldmljZS50YWJsZXR9IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5hcnJvdyB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAke1BhbGV0dGUuZ3JheV8xfTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5jb25zdCBDb21tYW5kRGVzY3JpcHRpb24gPSAoeyBmdW5jIH06IHsgZnVuYz86ICgpID0+IHZvaWQgfSkgPT4gKFxyXG4gICAgPEFuaW1hdGlvbj5cclxuICAgICAgICA8V3JhcHBlcj5cclxuICAgICAgICAgICAgPERlc2NyaXB0aW9uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxEZWxldGVCdXR0b24gb25DbGljaz17ZnVuY30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUljb24gaWNvbj17ZmFUaW1lc30gY29sb3I9e1BhbGV0dGUuYmxhY2tfMX0gLz5cclxuICAgICAgICAgICAgICAgIDwvRGVsZXRlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj7su6Trp6jrk5wg7J2964qU67KVPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNtYWxsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlnaGxpZ2h0ZWQgY29sb3I9e1BhbGV0dGUucmVkXzF9PuuyhO2KvDwvSGlnaGxpZ2h0ZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbWFsbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VudGVuY2U+IExQID0g7Jm87IaQLCBSUCA9IOyYpOuluOyGkDwvU2VudGVuY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbnRlbmNlPkxLID0g7Jm867CcLCBSSyA9IOyYpOuluOuwnCA8L1NlbnRlbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZW50ZW5jZT4gQUwgPSBMUCtMSywgeycgICd9QVIgPSBSUCtSSyA8L1NlbnRlbmNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZW50ZW5jZT4gQVAgPSBMUCtSUCwgeycgICd9QUsgPSBMSysgUksgPC9TZW50ZW5jZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tYW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNtYWxsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlnaGxpZ2h0ZWQgY29sb3I9e1BhbGV0dGUuZ3JlZW5fMn0+66CI67KEPC9IaWdobGlnaHRlZD5cclxuICAgICAgICAgICAgICAgICAgICA8L1NtYWxsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZW50ZW5jZT4g7Iir7J6Q64qUIOugiOuyhOydmCDrsKntlqXsnYQg7J2Y66+47ZWp64uI64ukIDwvU2VudGVuY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZyYW1lMX0gYWx0PXsnbnVtYmVycGFkJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiPnsnPT4nfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnJhbWUyfSBhbHQ9eydhcnJvd3MnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICDrlLDrnbzshJwgM1JQ64qUIOyYpOuluOyqvSDslYTrnpgg64yA6rCB7ISg7Jy866GcIOugiOuyhOulvCDrsIDqs6Ag7Jik66W47IaQ7J2EXHJcbiAgICAgICAgICAgICAgICAgICAg64iE66W0652864qUIOydmOuvuOyeheuLiOuLpC5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Rlc2NyaXB0aW9uV3JhcHBlcj5cclxuICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICAgICAgPE92ZXJsYXkgZnVuYz17ZnVuY30gLz5cclxuICAgIDwvQW5pbWF0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWFuZERlc2NyaXB0aW9uO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEluZm9Qcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzL0NoYXJQcm9wcyc7XHJcbmltcG9ydCB7IERldmljZSwgRm9udENvbG9yLCBQYWxldHRlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lJztcclxuY29uc3QgSW5mb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UuZGVza3RvcH0ge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDlweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR7UGFsZXR0ZS5ibGFja18xfTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAke0RldmljZS50YWJsZXR9IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5saW5rIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmluZm9faW1nIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICR7Rm9udENvbG9yLmJsYWNrfTtcclxuICAgICAgICBAbWVkaWEgJHtEZXZpY2UuZGVza3RvcH0ge1xyXG4gICAgICAgICAgICBjb2xvcjogJHtGb250Q29sb3Iud2hpdGV9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBAbWVkaWEgJHtEZXZpY2UuZGVza3RvcH0ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5saW5rIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgJixcclxuICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAmOmxpbmssXHJcbiAgICAgICAgJjp2aXNpdGVkIHtcclxuICAgICAgICAgICAgY29sb3I6ICR7Rm9udENvbG9yLmJsYWNrfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgJixcclxuICAgICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAgICY6bGluayxcclxuICAgICAgICAgICAgJjp2aXNpdGVkIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAke0ZvbnRDb2xvci53aGl0ZX07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmsgYSBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xyXG4gICAgICAgIGhlaWdodDogMS41ZW07XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICBAbWVkaWEgJHtEZXZpY2UuZGVza3RvcH0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgJHtEZXZpY2UudGFibGV0fSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjVlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhICR7RGV2aWNlLm1vYmlsZX0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMWVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSW5mb0ludGVyZmFjZSB7XHJcbiAgICBkYXRhOiBJbmZvUHJvcHNbXSB8IHVuZGVmaW5lZDtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgSW5mbyA9ICh7IGRhdGEsIG5hbWUgfTogSW5mb0ludGVyZmFjZSkgPT4ge1xyXG4gICAgY29uc3QgaW5mbyA9IGRhdGEgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkYXRhWzBdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb19pbWdcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL2ltZy8ke25hbWV9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiY2hhclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGgyPntuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtpbmZvPy5wdW5pc2h9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBgL2ltZy95b3V0dWJlLnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInlvdXR1YmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAg65Sc7LqQXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj17aW5mbz8uY29tYm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9pbWcveW91dHViZS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ5b3V0dWJlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIOy9pOuztFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGhyZWY9e2luZm8/LmRjfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvaW1nL2RjLnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImRjXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIOyyoOuniOqwpCDsupDrpq3thLAg7YyBXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvSW5mb1dyYXBwZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mbztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFBhbGV0dGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuLi9PdmVybGF5JztcclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBzdmcge1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBXaXRob3V0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBzdmcge1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBMb2FkaW5nV2l0aE92ZXJsYXkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjeD1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3k9XCI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPXtQYWxldHRlLnJlZF8xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcj1cIjM1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiMTY0LjkzMzYxNDMxMzQ2NDE1IDU2Ljk3Nzg3MTQzNzgyMTM4XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyb3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz1cIjAgNTAgNTA7MzYwIDUwIDUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvYW5pbWF0ZVRyYW5zZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDxPdmVybGF5IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgTG9hZGluZ1dpdGhvdXRPdmVybGF5ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8V2l0aG91dFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN4PVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjeT1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9e1BhbGV0dGUucmVkXzF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByPVwiMzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk9XCIxNjQuOTMzNjE0MzEzNDY0MTUgNTYuOTc3ODcxNDM3ODIxMzhcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJvdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPVwiMCA1MCA1MDszNjAgNTAgNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9hbmltYXRlVHJhbnNmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvV2l0aG91dFdyYXBwZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgeyBMb2FkaW5nV2l0aE92ZXJsYXksIExvYWRpbmdXaXRob3V0T3ZlcmxheSB9O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhclByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMvQ2hhclByb3BzJztcclxuaW1wb3J0IHsgRGV2aWNlLCBQYWxldHRlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IFRhYkNvbnRyb2wgZnJvbSAnLi4vVGFwQ29tcG9uZW50cy9UYWJDb250cm9sJztcclxuaW1wb3J0IFRhYlBhbmVsIGZyb20gJy4uL1RhcENvbXBvbmVudHMvVGFiUGFuZWwnO1xyXG5pbXBvcnQgVGFiSW5mbyBmcm9tICcuLi9UYXBDb21wb25lbnRzL1RhYkluZm8nO1xyXG5pbXBvcnQgeyBUYWJsZU9yZGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvVGFibGVPcmRlcic7XHJcbmNvbnN0IE1haW5XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICR7UGFsZXR0ZS53aGl0ZV8xfTtcclxuXHJcbiAgICBAbWVkaWEgJHtEZXZpY2UuZGVza3RvcH0ge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UudGFibGV0fSB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIE1haW5Qcm9wcyB7XHJcbiAgICBkYXRhOiBDaGFyUHJvcHM7XHJcbiAgICB0YWJsZUluZGV4OiBudW1iZXI7XHJcbiAgICBoYW5kbGVJbmRleDogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IE1haW4gPSAoeyBkYXRhLCB0YWJsZUluZGV4LCBoYW5kbGVJbmRleCB9OiBNYWluUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFB1bmlzaEluZm8gPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0YWc6IHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnc3RhbmRpbmcnLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBUYWJsZU9yZGVyLnN0YW5kaW5nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoZWFkZXI6ICfshKDsnpDshLgg65Sc7LqQJyxcclxuICAgICAgICAgICAgY29sdW1uczogWyftlITroIjsnoQnLCAn7Luk66eo65OcJywgJ+uNsOuvuOyngCcsICftjJDsoJUnLCAn7Z6I7Yq47J2065OdJywgJ+yEpOuqhSddLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLnN0YW5kaW5nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0YWc6IHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAndXAnLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBUYWJsZU9yZGVyLnVwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoZWFkZXI6ICfslYnsnYDsnpDshLgg65Sc7LqQJyxcclxuICAgICAgICAgICAgY29sdW1uczogWyftlITroIjsnoQnLCAn7Luk66eo65OcJywgJ+uNsOuvuOyngCcsICftjJDsoJUnLCAn7Z6I7Yq47J2065OdJywgJ+yEpOuqhSddLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLnVwLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IFRocm93SW5mbyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhZzoge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaHJvdycsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IFRhYmxlT3JkZXIuVGhyb3csXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhlYWRlcjogJ+yeoeq4sCcsXHJcbiAgICAgICAgICAgIGNvbHVtbnM6IFsn7Luk66eo65OcJywgJ+uNsOuvuOyngCcsICftlITroIjsnoQnLCAn7ISk66qFJywgJ+yeoeq4sO2SgOq4sCddLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLlRocm93LFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IENvbWJvSW5mbyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhZzogeyBkZXNjcmlwdGlvbjogJ2NvbWJvJywgZGV0YWlsOiBUYWJsZU9yZGVyLmNvbWJvIH0sXHJcbiAgICAgICAgICAgIGhlYWRlcjogJ+y9pOuztCcsXHJcbiAgICAgICAgICAgIGNvbHVtbnM6IFsn7Luk66eo65OcJywgJ+yEpOuqhSddLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLmNvbWJvLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0YWc6IHsgZGVzY3JpcHRpb246ICdFeHRyYWhpdCcsIGRldGFpbDogVGFibGVPcmRlci5FeHRyYWhpdCB9LFxyXG4gICAgICAgICAgICBoZWFkZXI6ICfstpTqsIDtg4AnLFxyXG4gICAgICAgICAgICBjb2x1bW5zOiBbJ+y7pOunqOuTnCcsICfshKTrqoUnXSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YS5FeHRyYWhpdCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFnOiB7IGRlc2NyaXB0aW9uOiAnV2FsbENvbWJvJywgZGV0YWlsOiBUYWJsZU9yZGVyLldhbGxDb21ibyB9LFxyXG4gICAgICAgICAgICBoZWFkZXI6ICfrsr3svaTrs7QnLFxyXG4gICAgICAgICAgICBjb2x1bW5zOiBbJ+y7pOunqOuTnCcsICfshKTrqoUnXSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YS5XYWxsQ29tYm8sXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgUGF0dGVybk1haW5JbmZvID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFnOiB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ01haW5Nb3ZlJyxcclxuICAgICAgICAgICAgICAgIGRldGFpbDogVGFibGVPcmRlci5NYWluTW92ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGVhZGVyOiAn7KO866Cl6riwJyxcclxuICAgICAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICAgICAgJ+y7pOunqOuTnCcsXHJcbiAgICAgICAgICAgICAgICAn67OE66qFJyxcclxuICAgICAgICAgICAgICAgICfrjbDrr7jsp4AnLFxyXG4gICAgICAgICAgICAgICAgJ+2UhOugiOyehCcsXHJcbiAgICAgICAgICAgICAgICAn6rCA65Oc7ZSE66CI7J6EJyxcclxuICAgICAgICAgICAgICAgICftnojtirjtlITroIjsnoQnLFxyXG4gICAgICAgICAgICAgICAgJ+2MkOyglScsXHJcbiAgICAgICAgICAgICAgICAn7ISk66qFJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YS5NYWluTW92ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFnOiB7IGRlc2NyaXB0aW9uOiAnUGF0dGVybicsIGRldGFpbDogVGFibGVPcmRlci5QYXR0ZXJuIH0sXHJcbiAgICAgICAgICAgIGhlYWRlcjogJ+2MqO2EtC/rgqDrqLknLFxyXG4gICAgICAgICAgICBjb2x1bW5zOiBbJ+y7pOunqOuTnCcsICfshKTrqoUnLCAn7YyM7ZW0J10sXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEuUGF0dGVybixcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBhcnIgPSBbJ+uUnOugiOydtOy6kOy5mCcsICfsvaTrs7QnLCAn7J6h6riwJywgJ+yjvOugpeq4sCwg7Yyo7YS0J107XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWFpbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPFRhYkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbmRleD17aGFuZGxlSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RhYmxlSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyPXthcnJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt0YWJsZUluZGV4fSBpbmRleD17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkluZm8gZGF0YT17UHVuaXNoSW5mb30gLz5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9e3RhYmxlSW5kZXh9IGluZGV4PXsxfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiSW5mbyBkYXRhPXtDb21ib0luZm99IC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt0YWJsZUluZGV4fSBpbmRleD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkluZm8gZGF0YT17VGhyb3dJbmZvfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dGFibGVJbmRleH0gaW5kZXg9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJJbmZvIGRhdGE9e1BhdHRlcm5NYWluSW5mb30gLz5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDwvV3JhcHBlcj5cclxuICAgICAgICA8L01haW5XcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBUYWJsZUl0ZW1Qcm9wcyB9IGZyb20gJy4uL1RhcENvbXBvbmVudHMvVGFiSW5mbyc7XHJcbmltcG9ydCBUYWJsZVJvd0RhdGEgZnJvbSAnLi9UYWJsZVJvdyc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBUYWJsZUVkaXRzIGZyb20gJy4vVGFibGVFZGl0cyc7XHJcbmltcG9ydCB1c2VFZGl0VmFsdWUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSW5wdXRWYWx1ZSc7XHJcbmltcG9ydCBDdXN0b21JY29uIGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL0ljb24nO1xyXG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBEZXZpY2UsIFBhbGV0dGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgeyB1c2VVc2VyRGF0YSB9IGZyb20gJy4uLy4uL2NvbnRleHQvVXNlckNvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VNb2RhbERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vY29udGV4dC9Nb2RhbENvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcblxyXG5jb25zdCBUYWJsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIEBtZWRpYSAke0RldmljZS5tb2JpbGV9IHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBUYWJsZUNvbnRlbnQgPSBzdHlsZWQudGFibGVgXHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuXHJcbiAgICBAbWVkaWEgJHtEZXZpY2UuZGVza3RvcH0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhICR7RGV2aWNlLm1vYmlsZX0ge1xyXG4gICAgICAgIHdpZHRoOiA3MjBweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFRhYmxlSGVhZCA9IHN0eWxlZC50aGBcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIEBtZWRpYSAke0RldmljZS5tb2JpbGV9IHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbmA7XHJcbmNvbnN0IFRhYmxlUm93ID0gc3R5bGVkLnRyYFxyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7UGFsZXR0ZS5ib3JkZXJfMX07XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgVGFibGVDb250cm9sID0gc3R5bGVkLnRkYFxyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcbmNvbnN0IFRhYmxlQWRkID0gc3R5bGVkLnRyYFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBkYXRhUHJvcHMge1xyXG4gICAgaXRlbTogVGFibGVJdGVtUHJvcHM7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgdGFnUHJvcGVydHkge1xyXG4gICAgY29tbWFuZD86IHN0cmluZztcclxuICAgIGZyYW1lPzogc3RyaW5nO1xyXG4gICAgZGFtYWdlPzogc3RyaW5nO1xyXG4gICAgd2F5Pzogc3RyaW5nO1xyXG4gICAgc3RhdGU/OiBzdHJpbmc7XHJcbiAgICByYW5nZT86IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUYWJsZSA9ICh7IGl0ZW0gfTogZGF0YVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGhlYWRlciwgY29sdW1ucywgZGF0YSwgdGFnIH0gPSBpdGVtO1xyXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlOiB0YWdQcm9wZXJ0eSA9IHRhZy5kZXRhaWwucmVkdWNlKChhY2M6IGFueSwgY3VyKSA9PiB7XHJcbiAgICAgICAgYWNjW2N1cl0gPSAnJztcclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30pO1xyXG4gICAgbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBuYW1lIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBjb2xTcGFuID0gdGFnLmRldGFpbC5sZW5ndGg7XHJcbiAgICBjb25zdCBtb2RhbERpc3BhdGNoID0gdXNlTW9kYWxEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW2VkaXQsIHNldEVkaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgeyB2YWx1ZXMsIHNldFZhbHVlLCBoYW5kbGVDaGFuZ2UgfSA9IHVzZUVkaXRWYWx1ZShpbml0aWFsVmFsdWUpO1xyXG4gICAgY29uc3QgbW9kYWxQcm9wcyA9IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogdGFnLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHZhbHVlczogdmFsdWVzLFxyXG4gICAgICAgIGNoYXJOYW1lOiBuYW1lIGFzIHN0cmluZyxcclxuICAgIH07XHJcbiAgICBjb25zdCB1c2VyID0gdXNlVXNlckRhdGEoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodXNlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBtb2RhbERpc3BhdGNoKHsgdHlwZTogJ0FERCcsIHBheWxvYWQ6IG1vZGFsUHJvcHMgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW9kYWxEaXNwYXRjaCh7IHR5cGU6ICdOT1RVU0VSJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RWRpdChmYWxzZSk7XHJcbiAgICAgICAgc2V0VmFsdWUoaW5pdGlhbFZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGFibGVXcmFwcGVyPlxyXG4gICAgICAgICAgICA8aDI+e2hlYWRlcn08L2gyPlxyXG4gICAgICAgICAgICA8VGFibGVDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkIGtleT17aGVhZGVyICsgaW5kZXggKyBjb2x1bW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChyb3c6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3dEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93PXtyb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyTmFtZT17bmFtZSBhcyBzdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc9e3RhZy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICB7ZWRpdCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlRWRpdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0PXtzZXRFZGl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17dmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJOYW1lPXtuYW1lIGFzIHN0cmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb2RhbD17aGFuZGxlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUFkZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KHRydWUpfSBjb2xTcGFuPXtjb2xTcGFufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtmYVBsdXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtQYWxldHRlLmdyYXlfMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJjb2xvcj17UGFsZXR0ZS5ncmF5XzJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVBZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGVDb250ZW50PlxyXG4gICAgICAgIDwvVGFibGVXcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oVGFibGUpO1xyXG4iLCJpbXBvcnQgeyBmYUNoZWNrLCBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBQYWxldHRlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IEN1c3RvbUljb24gZnJvbSAnLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvSWNvbic7XHJcblxyXG5jb25zdCBUYWJsZUVkaXRCb3ggPSBzdHlsZWQudGRgXHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQudGV4dGFyZWFgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogNzVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHtQYWxldHRlLmdyYXlfMX07XHJcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBmb250OiBpbmhlcml0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDBlbTtcclxuICAgIH1cclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDEwNCwgMTA0LCAxMDQsIDAuMyk7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xyXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgRWRpdFByb3BzIHtcclxuICAgIHZhbHVlOiBhbnk7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBoYW5kbGVDaGFuZ2U6IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgVGFibGVFZGl0ID0gKHsgdmFsdWUsIG5hbWUsIGhhbmRsZUNoYW5nZSB9OiBFZGl0UHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYmxlRWRpdEJveD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyeheugpVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L1RhYmxlRWRpdEJveD5cclxuICAgICk7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgdmFsdWVzOiBPYmplY3Q7XHJcbiAgICBjaGFyTmFtZTogc3RyaW5nO1xyXG4gICAgaGFuZGxlQ2hhbmdlOiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHZvaWQ7XHJcbiAgICBzZXRFZGl0OiAob3BlbjogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIGhhbmRsZU1vZGFsOiAoKSA9PiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IEVkaXRUYWJsZUNvbnRyb2wgPSBzdHlsZWQudGQ8eyBiYWNrY29sb3I/OiBzdHJpbmcgfT5gXHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5iYWNrY29sb3J9O1xyXG5gO1xyXG5cclxuY29uc3QgVGFibGVFZGl0cyA9ICh7XHJcbiAgICB2YWx1ZXMsXHJcbiAgICBjaGFyTmFtZSxcclxuICAgIGhhbmRsZUNoYW5nZSxcclxuICAgIHNldEVkaXQsXHJcbiAgICBoYW5kbGVNb2RhbCxcclxufTogUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHZhbHVlcykubWFwKChba2V5LCB2YWx1ZV0pID0+IChcclxuICAgICAgICAgICAgICAgIDxUYWJsZUVkaXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17a2V5ICsgY2hhck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIDxFZGl0VGFibGVDb250cm9sIGJhY2tjb2xvcj17UGFsZXR0ZS5ncmVlbl8xfSBvbkNsaWNrPXtoYW5kbGVNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tSWNvbiBpY29uPXtmYUNoZWNrfSAvPlxyXG4gICAgICAgICAgICA8L0VkaXRUYWJsZUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxFZGl0VGFibGVDb250cm9sXHJcbiAgICAgICAgICAgICAgICBiYWNrY29sb3I9e1BhbGV0dGUucmVkXzF9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KGZhbHNlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbUljb24gaWNvbj17ZmFUaW1lc30gLz5cclxuICAgICAgICAgICAgPC9FZGl0VGFibGVDb250cm9sPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlRWRpdHM7XHJcbiIsImltcG9ydCB7IGZhRWRpdCwgZmFFcmFzZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZU1vZGFsRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9jb250ZXh0L01vZGFsQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZVVzZXJEYXRhIH0gZnJvbSAnLi4vLi4vY29udGV4dC9Vc2VyQ29udGV4dCc7XHJcbmltcG9ydCB1c2VFZGl0VmFsdWUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSW5wdXRWYWx1ZSc7XHJcbmltcG9ydCB7IFBhbGV0dGUsIERldmljZSB9IGZyb20gJy4uLy4uL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCBDdXN0b21JY29uIGZyb20gJy4uLy4uL3N0eWxlcy9jb21wb25lbnRzL0ljb24nO1xyXG5pbXBvcnQgeyBUYWJsZUNvbnRyb2wsIHRhZ1Byb3BlcnR5IH0gZnJvbSAnLi9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUVkaXRzIGZyb20gJy4vVGFibGVFZGl0cyc7XHJcbmNvbnN0IFRhYmxlUm93ID0gc3R5bGVkLnRyYFxyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkMWQxO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogNTBweDtcclxuYDtcclxuY29uc3QgVGFibGVEYXRhQm94ID0gc3R5bGVkLnRkPHsgdG9nZ2xlOiBib29sZWFuOyBpc1N0YXRlOiBib29sZWFuIH0+YFxyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuXHJcbiAgICBtaW4td2lkdGg6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNTdGF0ZSA/ICcyMDBweCcgOiAnNTBweCcpfTtcclxuICAgIEBtZWRpYSAke0RldmljZS5tb2JpbGV9IHtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIGhlaWdodDogJHsocHJvcHMpID0+IChwcm9wcy50b2dnbGUgPyAnMTAwJSAgJyA6ICcxMDAlJyl9O1xyXG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd29yZC1icmVhazogbm9ybWFsO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGFibGVEYXRhID0gKHtcclxuICAgIGNvbnRlbnQsXHJcbiAgICB0b2dnbGUsXHJcbiAgICBpc1N0YXRlLFxyXG59OiB7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICB0b2dnbGU6IGJvb2xlYW47XHJcbiAgICBpc1N0YXRlOiBib29sZWFuO1xyXG59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUYWJsZURhdGFCb3ggdG9nZ2xlPXt0b2dnbGV9IGlzU3RhdGU9e2lzU3RhdGV9PlxyXG4gICAgICAgICAgICA8ZGl2Pntjb250ZW50fTwvZGl2PlxyXG4gICAgICAgIDwvVGFibGVEYXRhQm94PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmludGVyZmFjZSBSb3dQcm9wcyB7XHJcbiAgICByb3c6IHRhZ1Byb3BlcnR5O1xyXG4gICAgY2hhck5hbWU6IHN0cmluZztcclxuICAgIHRhZzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUYWJsZVJvd0RhdGEgPSAoeyByb3csIGNoYXJOYW1lLCB0YWcgfTogUm93UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgdmFsdWVzLCBoYW5kbGVDaGFuZ2UsIHNldFZhbHVlIH0gPSB1c2VFZGl0VmFsdWUocm93KTtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKHJvdyk7XHJcbiAgICAgICAgc2V0RWRpdChmYWxzZSk7XHJcbiAgICB9LCBbcm93LCBzZXRWYWx1ZV0pO1xyXG5cclxuICAgIGNvbnN0IG1vZGFsUHJvcHMgPSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IHRhZyxcclxuICAgICAgICBvbGR2YWx1ZXM6IHJvdyxcclxuICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcclxuICAgICAgICBjaGFyTmFtZTogY2hhck5hbWUsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbW9kYWxEaXNwYXRjaCA9IHVzZU1vZGFsRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VVc2VyRGF0YSgpO1xyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyICE9PSBudWxsKVxyXG4gICAgICAgICAgICBtb2RhbERpc3BhdGNoKHsgdHlwZTogJ0RFTEVURScsIHBheWxvYWQ6IG1vZGFsUHJvcHMgfSk7XHJcbiAgICAgICAgZWxzZSBtb2RhbERpc3BhdGNoKHsgdHlwZTogJ05PVFVTRVInIH0pO1xyXG4gICAgICAgIHNldFZhbHVlKHJvdyk7XHJcbiAgICAgICAgc2V0RWRpdChmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vZGFsUHJvcHMpO1xyXG4gICAgICAgIGlmICh1c2VyICE9PSBudWxsKSBtb2RhbERpc3BhdGNoKHsgdHlwZTogJ0VESVQnLCBwYXlsb2FkOiBtb2RhbFByb3BzIH0pO1xyXG4gICAgICAgIGVsc2UgbW9kYWxEaXNwYXRjaCh7IHR5cGU6ICdOT1RVU0VSJyB9KTtcclxuICAgICAgICBzZXRWYWx1ZShyb3cpO1xyXG4gICAgICAgIHNldEVkaXQoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUYWJsZVJvdyBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoIXRvZ2dsZSl9PlxyXG4gICAgICAgICAgICB7ZWRpdCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlRWRpdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdD17c2V0RWRpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt2YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyTmFtZT17Y2hhck5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vZGFsPXtoYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMocm93KS5tYXAoKFtrZXksIHZhbHVlXSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RvZ2dsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1N0YXRlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRyb2wgb25DbGljaz17KCkgPT4gc2V0RWRpdCghZWRpdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFFZGl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e1BhbGV0dGUuZ3JlZW5fMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyY29sb3I9e1BhbGV0dGUuZ3JlZW5fMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvQ3VzdG9tSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDb250cm9sIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtmYUVyYXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtQYWxldHRlLnJlZF8xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJjb2xvcj17UGFsZXR0ZS5yZWRfMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvQ3VzdG9tSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhUYWJsZVJvd0RhdGEpO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGV2aWNlLCBQYWxldHRlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lJztcclxuXHJcbmNvbnN0IFRhYkNvbnRyb2xCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLm1vYmlsZX0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGFiQ29udHJvbEl0ZW1Cb3ggPSBzdHlsZWQuZGl2PHsgc2VsZWN0ZWQ6IGJvb2xlYW4gfT5gXHJcbiAgICBmbGV4OiAxIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogJHsocHJvcHMpID0+IChwcm9wcy5zZWxlY3RlZCA/ICcxMDAlJyA6ICcwJScpfTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7UGFsZXR0ZS5yZWRfMX07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UubW9iaWxlfSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGFiQ29udHJvbEl0ZW0gPSAocHJvcHM6IHtcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIGhhbmRsZUluZGV4OiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICBzZWxlY3RlZDogYm9vbGVhbjtcclxufSkgPT4ge1xyXG4gICAgY29uc3QgeyBjb250ZW50LCBoYW5kbGVJbmRleCwgaW5kZXgsIHNlbGVjdGVkIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBoYW5kbGVJbmRleChpbmRleCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGFiQ29udHJvbEl0ZW1Cb3ggc2VsZWN0ZWQ9e3NlbGVjdGVkfSBvbkNsaWNrPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICA8L1RhYkNvbnRyb2xJdGVtQm94PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFRhYkNvbnRyb2wgPSAoe1xyXG4gICAgdmFsdWUsXHJcbiAgICBoYW5kbGVJbmRleCxcclxuICAgIGFycixcclxufToge1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIGhhbmRsZUluZGV4OiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICAgIGFycjogc3RyaW5nW107XHJcbn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYkNvbnRyb2xCb3g+XHJcbiAgICAgICAgICAgIHthcnIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8VGFiQ29udHJvbEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2luZGV4ID09PSB2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5kZXg9e2hhbmRsZUluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvVGFiQ29udHJvbEJveD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJDb250cm9sO1xyXG4iLCJpbXBvcnQgVGFibGUgZnJvbSAnLi4vVGFibGVDb21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7XHJcbiAgICBDb21ibyxcclxuICAgIEV4dHJhaGl0LFxyXG4gICAgSW5mb1Byb3BzLFxyXG4gICAgTWFpbk1vdmUsXHJcbiAgICBQYXR0ZXJuLFxyXG4gICAgU3RhbmRpbmcsXHJcbiAgICBUaHJvdyxcclxuICAgIFVwLFxyXG4gICAgV2FsbENvbWJvLFxyXG59IGZyb20gJy4uLy4uL3R5cGVzL0NoYXJQcm9wcyc7XHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIFRhYkluZm9Qcm9wcyB7XHJcbiAgICBkYXRhOiBUYWJsZUl0ZW1Qcm9wc1tdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVJdGVtUHJvcHMge1xyXG4gICAgaGVhZGVyOiBzdHJpbmc7XHJcbiAgICBjb2x1bW5zOiBzdHJpbmdbXTtcclxuICAgIGRhdGE6XHJcbiAgICAgICAgfCBTdGFuZGluZ1tdXHJcbiAgICAgICAgfCBVcFtdXHJcbiAgICAgICAgfCBDb21ib1tdXHJcbiAgICAgICAgfCBXYWxsQ29tYm9bXVxyXG4gICAgICAgIHwgVGhyb3dbXVxyXG4gICAgICAgIHwgRXh0cmFoaXRbXVxyXG4gICAgICAgIHwgSW5mb1Byb3BzW11cclxuICAgICAgICB8IFBhdHRlcm5bXVxyXG4gICAgICAgIHwgTWFpbk1vdmVbXTtcclxuICAgIHRhZzogeyBkZXNjcmlwdGlvbjogc3RyaW5nOyBkZXRhaWw6IHN0cmluZ1tdIH07XHJcbn1cclxuXHJcbmNvbnN0IFRhYkluZm8gPSAoeyBkYXRhIH06IFRhYkluZm9Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V3JhcHBlcj5cclxuICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUYWJsZSBrZXk9e2luZGV4fSBpdGVtPXtpdGVtfSAvPjtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYkluZm87XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgVGFiUGFuZWxCbG9jayA9IHN0eWxlZC5kaXY8eyBzaG93bjogYm9vbGVhbiB9PmBcclxuICAgICR7KHsgc2hvd24gfSkgPT4gKHNob3duID8gYHdpZHRoOjEwMCU7ICBoZWlnaHQ6OTAlO2AgOiAnd2lkdGg6MCUnKX07XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSovXHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgUGFuZWxQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogYW55O1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzOiBQYW5lbFByb3BzKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXggfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYlBhbmVsQmxvY2tcclxuICAgICAgICAgICAgaWQ9e2B2ZXJ0aWNhbC10YWJwYW5lbC0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT17YHZlcnRpY2FsLXRhYi0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIHNob3duPXt2YWx1ZSA9PT0gaW5kZXh9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7dmFsdWUgPT09IGluZGV4ICYmIDw+e2NoaWxkcmVufSA8Lz59XHJcbiAgICAgICAgPC9UYWJQYW5lbEJsb2NrPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiUGFuZWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCBEaXNwYXRjaCwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhclByb3BzIH0gZnJvbSAnLi4vdHlwZXMvQ2hhclByb3BzJztcclxuXHJcbmludGVyZmFjZSBTdGF0ZVByb3BzIHtcclxuICAgIGNoYXJQcm9wczogQ2hhclByb3BzO1xyXG4gICAgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIGVycm9yOiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IEluaXRpYWxTdGF0ZTogU3RhdGVQcm9wcyA9IHtcclxuICAgIGNoYXJQcm9wczoge1xyXG4gICAgICAgIHN0YW5kaW5nOiBbXSxcclxuICAgICAgICB1cDogW10sXHJcbiAgICAgICAgY29tYm86IFtdLFxyXG4gICAgICAgIFdhbGxDb21ibzogW10sXHJcbiAgICAgICAgVGhyb3c6IFtdLFxyXG4gICAgICAgIEV4dHJhaGl0OiBbXSxcclxuICAgICAgICBJbmZvOiBbXSxcclxuICAgICAgICBQYXR0ZXJuOiBbXSxcclxuICAgICAgICBNYWluTW92ZTogW10sXHJcbiAgICB9LFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbnR5cGUgQWN0aW9uID1cclxuICAgIHwgeyB0eXBlOiAnTE9BREVEJzsgcGF5bG9hZDogQ2hhclByb3BzIH1cclxuICAgIHwgeyB0eXBlOiAnTE9BRElORycgfVxyXG4gICAgfCB7IHR5cGU6ICdBREQnIH1cclxuICAgIHwgeyB0eXBlOiAnRVJST1InOyBlcnJvcjogYW55IH07XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0ZURpc3BhdGNoID0gRGlzcGF0Y2g8QWN0aW9uPjtcclxuXHJcbmNvbnN0IERhdGFDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxTdGF0ZVByb3BzIHwgbnVsbD4obnVsbCk7XHJcbmNvbnN0IERhdGFEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0PFN0YXRlRGlzcGF0Y2ggfCBudWxsPihudWxsKTtcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU6IFN0YXRlUHJvcHMsIGFjdGlvbjogQWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnTE9BREVEJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhclByb3BzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0xPQURJTkcnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0VSUk9SJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdGF0ZVByb3ZpZGVyKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBJbml0aWFsU3RhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgICAgICAgPERhdGFEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9EYXRhRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VEQkRhdGEoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgICBpZiAoIWRhdGEpIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgUHJvdmlkZXInKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VEQkRpc3BhdGNoKCkge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KERhdGFEaXNwYXRjaENvbnRleHQpO1xyXG4gICAgaWYgKCFkaXNwYXRjaCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBQcm92aWRlcicpO1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoO1xyXG59XHJcbiIsImltcG9ydCBkYiBmcm9tICcuLi9maXJlYmFzZUluaXQnO1xyXG5pbXBvcnQgeyBDaGFyUHJvcHMgfSBmcm9tICcuLi90eXBlcy9DaGFyUHJvcHMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBTdGF0ZURpc3BhdGNoIH0gZnJvbSAnLi9EQkNvbnRleHQnO1xyXG5pbXBvcnQgeyBUYWJsZU9yZGVyIH0gZnJvbSAnLi4vdXRpbHMvVGFibGVPcmRlcic7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBMb2FkRGF0YShjaGFyOiBzdHJpbmcsIGRpc3BhdGNoOiBTdGF0ZURpc3BhdGNoKSB7XHJcbiAgICBjb25zdCBzb3J0YnlLZXkgPSAoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eSgnZnJhbWUnKSAmJiBiLmhhc093blByb3BlcnR5KCdmcmFtZScpKSB7XHJcbiAgICAgICAgICAgIGlmIChhWydmcmFtZSddID09PSBiWydmcmFtZSddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYVsnY29tbWFuZCddIDwgYlsnY29tbWFuZCddID8gLTEgOiAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGFbJ2ZyYW1lJ10pIDwgcGFyc2VJbnQoYlsnZnJhbWUnXSkgPyAtMSA6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYVsnY29tbWFuZCddIDwgYlsnY29tbWFuZCddID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc29ydGJ5Q291bnRlciA9IChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF2ID0gYVsnY29tbWFuZCddLmluY2x1ZGVzKCcoQyknKTtcclxuICAgICAgICBjb25zdCBidiA9IGJbJ2NvbW1hbmQnXS5pbmNsdWRlcygnKEMpJyk7XHJcbiAgICAgICAgaWYgKGF2ID09PSBidikge1xyXG4gICAgICAgICAgICByZXR1cm4gYVsnY29tbWFuZCddIDwgYlsnY29tbWFuZCddID8gLTEgOiAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXYgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb3JkZXIgPSAoYXJyOiBhbnlbXSwgY2F0ZWdvcnk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9yZGVyQnlDb250ZW50ID0gKGNhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb3JkZXIgPSBUYWJsZU9yZGVyW2NhdGVnb3J5XTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhOiBhbnksIGI6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yZGVyLmluZGV4T2YoYSkgLSBvcmRlci5pbmRleE9mKGIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGFyci5tYXAoKGN1cjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkgPT5cclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY3VyKVxyXG4gICAgICAgICAgICAgICAgLnNvcnQob3JkZXJCeUNvbnRlbnQoY2F0ZWdvcnkpKVxyXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgob2JqOiBhbnksIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSBjdXJba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICAgICAgfSwge30pXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnTE9BRElORycgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbignQ2hhcmFjdGVyJylcclxuICAgICAgICAgICAgLmRvYyhjaGFyKVxyXG4gICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgLnRoZW4oKHNuYXApID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmFwLmRhdGEoKSBhcyBDaGFyUHJvcHM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG5ld09iaiA9IE9iamVjdC5rZXlzKGRhdGEpLnJlZHVjZSgoYWNjOiBhbnksIGN1cjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXIgPT09ICdJbmZvJykge1xyXG4gICAgICAgICAgICAgICAgYWNjW2N1cl0gPSBkYXRhW2N1cl07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAnRXh0cmFoaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjb21ibycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1dhbGxDb21ibycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1BhdHRlcm4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdNYWluTW92ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Rocm93JyxcclxuICAgICAgICAgICAgICAgIF0uaW5jbHVkZXMoY3VyKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGFjY1tjdXJdID0gb3JkZXIoZGF0YVtjdXJdLCBjdXIpLnNvcnQoc29ydGJ5Q291bnRlcik7IC8vIOyVjO2MjOuys+yInCDsubTsmrTthLDsiJxcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChbJ3N0YW5kaW5nJywgJ3VwJ10uaW5jbHVkZXMoY3VyKSkge1xyXG4gICAgICAgICAgICAgICAgYWNjW2N1cl0gPSBvcmRlcihkYXRhW2N1cl0sIGN1cikuc29ydChzb3J0YnlLZXkpOyAvL+2UhOugiOyehOyInFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFbJ2NvbWJvJ10pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld09ialsnY29tYm8nXSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTE9BREVEJywgcGF5bG9hZDogbmV3T2JqIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdFUlJPUicsIGVycm9yOiBlcnIgfSk7XHJcbiAgICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gVXBkYXRlSGlzdG9yeShcclxuICAgIGNoYXI6IHN0cmluZyxcclxuICAgIGRhdGE6IE9iamVjdCxcclxuICAgIHVpZDogc3RyaW5nLFxyXG4gICAgdHlwZTogc3RyaW5nXHJcbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0ge1xyXG4gICAgICAgICAgICBjaGFyOiBjaGFyLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICB0aW1lOiBmaXJlYmFzZS5maXJlc3RvcmUuVGltZXN0YW1wLmZyb21EYXRlKG5ldyBEYXRlKCkpLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZG9jdW1lbnQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdVc2VyJykuZG9jKHVpZCkuZ2V0KCk7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmV4aXN0cyAmJiBkb2N1bWVudCkge1xyXG4gICAgICAgICAgICBhd2FpdCBkb2N1bWVudC5yZWYudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIFt0eXBlXTogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuYXJyYXlVbmlvbihoaXN0b3J5KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXdhaXQgZGJcclxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdVc2VyJylcclxuICAgICAgICAgICAgICAgIC5kb2ModWlkKVxyXG4gICAgICAgICAgICAgICAgLnNldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgW3R5cGVdOiBbaGlzdG9yeV0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn7Jyg7KCAIO2eiOyKpO2GoOumrCDsl4XrjbDsnbTtirgg7Iuk7YyoJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkZEZ1bmMoY2hhcjogc3RyaW5nLCBkYXRhOiBPYmplY3QsIHRhZzogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdDaGFyYWN0ZXInKVxyXG4gICAgICAgICAgICAuZG9jKGNoYXIpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgW3RhZ106IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLmFycmF5VW5pb24oZGF0YSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoJ+ygleuztOulvCDstpTqsIDtlZjripTrjbAg7Iuk7Yyo7ZaI7Iq164uI64ukJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+yXkOufrOygleuztCAnICsgZXJyKTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlRnVuYyhjaGFyOiBzdHJpbmcsIGRhdGE6IE9iamVjdCwgdGFnOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ0NoYXJhY3RlcicpXHJcbiAgICAgICAgICAgIC5kb2MoY2hhcilcclxuICAgICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBbdGFnXTogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuYXJyYXlSZW1vdmUoZGF0YSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoJ+ygleuztOulvCDsgq3soJztlZjripTrjbAg7Iuk7Yyo7ZaI7Iq164uI64ukJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+yXkOufrOygleuztCAnICsgZXJyKTtcclxuICAgIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiBVcGRhdGVDaGFyc0Z1bmMob3JkZXI6IGFueSwgY2F0ZWdvcnk6IHN0cmluZykge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gVXBkYXRlUHJvcHNGdW5jKG9yZGVyOiBhbnksIGlkOiBzdHJpbmcsIGNhdGVnb3J5OiBzdHJpbmcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGJcclxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdDaGFyYWN0ZXInKVxyXG4gICAgICAgICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHNuYXApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25hcC5kYXRhKCkgYXMgQ2hhclByb3BzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBvcmRlcihkYXRhW2NhdGVnb3J5XSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkYlxyXG4gICAgICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdDaGFyYWN0ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjYXRlZ29yeV06IG5ld0RhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoaWQgKyAn7J2YIOygleuztOulvCDrsJvslYTsmKTripTrjbAg7Iuk7Yyo7ZaI7Iq164uI64ukJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn7JeQ65+sIOygleuztCcgKyBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGlkICsgJ+ydmCDsoJXrs7Trpbwg7JeF642w7J207Yq47ZWY64qU642wIOyLpO2MqO2WiOyKteuLiOuLpCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7JeQ65+sIOygleuztCcgKyBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50cyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ0NoYXJhY3RlcicpLmdldCgpO1xyXG4gICAgICAgIGRvY3VtZW50cy5mb3JFYWNoKChkb2N1bWVudCkgPT4ge1xyXG4gICAgICAgICAgICBVcGRhdGVQcm9wc0Z1bmMob3JkZXIsIGRvY3VtZW50LmlkLCBjYXRlZ29yeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBhbGVydCgn7LqQ66at7YSw65Ok7J2YIOygleuztOulvCDrsJvslYTsmKTripTrjbAg7Iuk7Yyo7ZaI7Iq164uI64ukJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+yXkOufrCDsoJXrs7QnICsgZXJyKTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gVXBkYXRlUHJvcHNGdW5jKGlkOiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZGJcclxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdDaGFyYWN0ZXInKVxyXG4gICAgICAgICAgICAgICAgLmRvYyhpZClcclxuICAgICAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIFtwcm9wZXJ0eV06IFtdLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGlkICsgJ+ydmCDsoJXrs7Trpbwg67Cb7JWE7Jik64qU642wIOyLpO2MqO2WiOyKteuLiOuLpCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7JeQ65+sIOygleuztCcgKyBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGFsZXJ0KGlkICsgJ+ydmCDsoJXrs7Trpbwg7JeF642w7J207Yq47ZWY64qU642wIOyLpO2MqO2WiOyKteuLiOuLpCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfsl5Drn6wg7KCV67O0JyArIGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBSZW5hbWUoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZGJcclxuICAgICAgICAuY29sbGVjdGlvbignQ2hhcmFjdGVyJylcclxuICAgICAgICAuZG9jKCdDbGFkaW8nKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChzbmFwKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzbmFwLmRhdGEoKSBhcyBDaGFyUHJvcHM7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbignQ2hhcmFjdGVyJykuZG9jKCdDbGF1ZGlvJykuc2V0KGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQWRkTmV3Q2hhcmFjdGVyKCkge1xyXG4gICAgY29uc3QgbmFtZSA9ICdMZXJveSc7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ0NoYXJhY3RlcicpLmRvYyhuYW1lKS5zZXQoe30pO1xyXG4gICAgICAgIGNvbnN0IGFyciA9IFtcclxuICAgICAgICAgICAgJ01haW5Nb3ZlJyxcclxuICAgICAgICAgICAgJ3N0YW5kaW5nJyxcclxuICAgICAgICAgICAgJ3VwJyxcclxuICAgICAgICAgICAgJ1Rocm93JyxcclxuICAgICAgICAgICAgJ2NvbWJvJyxcclxuICAgICAgICAgICAgJ1dhbGxDb21ibycsXHJcbiAgICAgICAgICAgICdFeHRyYWhpdCcsXHJcbiAgICAgICAgICAgICdQYXR0ZXJuJyxcclxuICAgICAgICAgICAgJ0luZm8nLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgVXBkYXRlUHJvcHNGdW5jKG5hbWUsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoJ+yLpO2MqCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQWRkTmV3UHJvcHMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50cyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ0NoYXJhY3RlcicpLmdldCgpO1xyXG4gICAgICAgIGRvY3VtZW50cy5mb3JFYWNoKChkb2N1bWVudCkgPT4ge1xyXG4gICAgICAgICAgICBVcGRhdGVQcm9wc0Z1bmMoZG9jdW1lbnQuaWQsICdNYWluTW92ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoJ+y6kOumre2EsOuTpOydmCDsoJXrs7Trpbwg67Cb7JWE7Jik64qU642wIOyLpO2MqO2WiOyKteuLiOuLpCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfsl5Drn6wg7KCV67O0JyArIGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBZGREYXRhID0gYXN5bmMgKFxyXG4gICAgdGFnOiBzdHJpbmcsXHJcbiAgICBkYXRhOiBPYmplY3QsXHJcbiAgICBjaGFyOiBzdHJpbmcsXHJcbiAgICB1aWQ6IHN0cmluZ1xyXG4pID0+IHtcclxuICAgIGF3YWl0IEFkZEZ1bmMoY2hhciwgZGF0YSwgdGFnKTtcclxuICAgIGF3YWl0IFVwZGF0ZUhpc3RvcnkoY2hhciwgZGF0YSwgdWlkLCAnQUREJyk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gRGVsZXRlRGF0YShcclxuICAgIHRhZzogc3RyaW5nLFxyXG4gICAgZGF0YTogT2JqZWN0LFxyXG4gICAgY2hhcjogc3RyaW5nLFxyXG4gICAgdWlkOiBzdHJpbmdcclxuKSB7XHJcbiAgICBhd2FpdCBEZWxldGVGdW5jKGNoYXIsIGRhdGEsIHRhZyk7XHJcbiAgICBhd2FpdCBVcGRhdGVIaXN0b3J5KGNoYXIsIGRhdGEsIHVpZCwgJ0RlbGV0ZScpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gRWRpdERhdGEoXHJcbiAgICB0YWc6IHN0cmluZyxcclxuICAgIG9sZDogT2JqZWN0LFxyXG4gICAgbmV3RGF0YTogT2JqZWN0LFxyXG4gICAgY2hhcjogc3RyaW5nLFxyXG4gICAgdWlkOiBzdHJpbmdcclxuKSB7XHJcbiAgICBhd2FpdCBEZWxldGVGdW5jKGNoYXIsIG9sZCwgdGFnKTtcclxuICAgIGF3YWl0IEFkZEZ1bmMoY2hhciwgbmV3RGF0YSwgdGFnKTtcclxuICAgIGF3YWl0IFVwZGF0ZUhpc3RvcnkoY2hhciwgeyBvbGQsIG5ld0RhdGEgfSwgdWlkLCAnRWRpdCcpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQWRkUHJvcGVydHkoY2F0ZWdvcnk6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgb3JkZXIgPSAoZGF0YTogT2JqZWN0W10pID0+IHtcclxuICAgICAgICByZXR1cm4gZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaGFzT3duUHJvcGVydHkocHJvcGVydHkpXHJcbiAgICAgICAgICAgICAgICA/IGl0ZW1cclxuICAgICAgICAgICAgICAgIDogeyAuLi5pdGVtLCBbcHJvcGVydHldOiAnJyB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFVwZGF0ZUNoYXJzRnVuYyhvcmRlciwgY2F0ZWdvcnkpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUmVtb3ZlUHJvcGVydHkoY2F0ZWdvcnk6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZykge1xyXG4gICAgY29uc3Qgb3JkZXIgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChrZXkpID0+IGtleSAhPT0gcHJvcGVydHkpXHJcbiAgICAgICAgICAgICAgICAucmVkdWNlKChhY2M6IGFueSwgY3VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjW2N1cl0gPSBpdGVtW2N1cl07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgICAgIH0sIHt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVcGRhdGVDaGFyc0Z1bmMob3JkZXIsIGNhdGVnb3J5KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgRGlzcGF0Y2gsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFQcm9wcyB7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgdmFsdWVzOiBPYmplY3Q7XHJcbiAgICBvbGR2YWx1ZXM/OiBPYmplY3Q7XHJcbiAgICBjaGFyTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTW9kYWxQcm9wcyB7XHJcbiAgICBtb2RhbEFjdGlvbjogYW55O1xyXG4gICAgcHJvcHM6IFBhcmFQcm9wcztcclxuICAgIG9wZW46IGJvb2xlYW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU6IE1vZGFsUHJvcHMsIGFjdGlvbjogQWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnU0VUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3BlbjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnQUREJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsQWN0aW9uOiAnYWRkJyxcclxuICAgICAgICAgICAgICAgIHByb3BzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnREVMRVRFJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsQWN0aW9uOiAnZGVsZXRlJyxcclxuICAgICAgICAgICAgICAgIHByb3BzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSAnRURJVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbEFjdGlvbjogJ2VkaXQnLFxyXG4gICAgICAgICAgICAgICAgcHJvcHM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdOT1RVU0VSJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbW9kYWxBY3Rpb246ICdub3R1c2VyJyxcclxuICAgICAgICAgICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFjdGlvbiA9XHJcbiAgICB8IHsgdHlwZTogJ1NFVCc7IHBheWxvYWQ6IGFueSB9XHJcbiAgICB8IHsgdHlwZTogJ0FERCc7IHBheWxvYWQ6IFBhcmFQcm9wcyB9XHJcbiAgICB8IHsgdHlwZTogJ0RFTEVURSc7IHBheWxvYWQ6IFBhcmFQcm9wcyB9XHJcbiAgICB8IHsgdHlwZTogJ0VESVQnOyBwYXlsb2FkOiBQYXJhUHJvcHMgfVxyXG4gICAgfCB7IHR5cGU6ICdOT1RVU0VSJyB9O1xyXG5cclxudHlwZSBNb2RhbERpc3BhdGNoID0gRGlzcGF0Y2g8QWN0aW9uPjtcclxuXHJcbmNvbnN0IE1vZGFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8TW9kYWxQcm9wcyB8IG51bGw+KG51bGwpO1xyXG5jb25zdCBNb2RhbERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8TW9kYWxEaXNwYXRjaCB8IG51bGw+KG51bGwpO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBNb2RhbFByb3BzID0ge1xyXG4gICAgbW9kYWxBY3Rpb246ICdhZGQnLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgdmFsdWVzOiAnJyxcclxuICAgICAgICBjaGFyTmFtZTogJycsXHJcbiAgICB9LFxyXG4gICAgb3BlbjogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTW9kYWxQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICAgICAgICA8TW9kYWxEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9Nb2RhbERpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICA8L01vZGFsQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNb2RhbERhdGEoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG4gICAgaWYgKCFkYXRhKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIFByb3ZpZGVyJyk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1vZGFsRGlzcGF0Y2goKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdXNlQ29udGV4dChNb2RhbERpc3BhdGNoQ29udGV4dCk7XHJcbiAgICBpZiAoIWRhdGEpIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgUHJvdmlkZXInKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vZmlyZWJhc2VJbml0JztcclxuXHJcbmludGVyZmFjZSBVc2VyUHJvcHMge1xyXG4gICAgdWlkOiBzdHJpbmc7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBob3RvVVJMOiBzdHJpbmc7XHJcbn1cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFVzZXJQcm9wcyB8IG51bGw+KG51bGwpO1xyXG5cclxuY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXJQcm9wcyB8IG51bGw+KG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZChhc3luYyAodGVtcFVzZXI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGVtcFVzZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHVpZCwgZGlzcGxheU5hbWUsIGVtYWlsLCBwaG90b1VSTCB9ID0gdGVtcFVzZXI7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKHsgdWlkLCBkaXNwbGF5TmFtZSwgZW1haWwsIHBob3RvVVJMIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt1c2VyfT57Y2hpbGRyZW59PC9Vc2VyQ29udGV4dC5Qcm92aWRlcj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvdmlkZXI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVXNlckRhdGEoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICAgICAgICBhcGlLZXk6ICdBSXphU3lESTNsVWM0UWpZQmRSVWFUVnFJNnIwbmV5b2NwU3VXNDAnLFxyXG4gICAgICAgIGF1dGhEb21haW46ICd0ZWtrZW4taW5mby5maXJlYmFzZWFwcC5jb20nLFxyXG4gICAgICAgIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly90ZWtrZW4taW5mby1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20nLFxyXG4gICAgICAgIHByb2plY3RJZDogJ3Rla2tlbi1pbmZvJyxcclxuICAgICAgICBzdG9yYWdlQnVja2V0OiAndGVra2VuLWluZm8uYXBwc3BvdC5jb20nLFxyXG4gICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAnNDgyNDkzMTUxMDEyJyxcclxuICAgICAgICBhcHBJZDogJzE6NDgyNDkzMTUxMDEyOndlYjpjYzMyMjc0MTgyNDgxMzQ0ODhhNWIxJyxcclxuICAgIH0pO1xyXG59IGVsc2Uge1xyXG4gICAgZmlyZWJhc2UuYXBwKCk7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGRiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XHJcbmNvbnN0IGdvb2dsZVByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcbmV4cG9ydCBjb25zdCBzaWduSW5XaXRoR29vZ2xlID0gKCkgPT4ge1xyXG4gICAgYXV0aC5zaWduSW5XaXRoUmVkaXJlY3QoZ29vZ2xlUHJvdmlkZXIpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn7JWI64WV7ZWY7IS47JqUJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBhbGVydCgn66Gc6re47J24IOykkSDsmKTrpZgg67Cc7IOdLiDsl5Drn6wg7L2U65OcICcgKyBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ091dCA9ICgpID0+IHtcclxuICAgIGF1dGguc2lnbk91dCgpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2VkIG91dCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VFZGl0VmFsdWUoaW5pdGlhbFZhbHVlOiBhbnkpIHtcclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgICAgICBzZXRWYWx1ZSh7XHJcbiAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgIHNldFZhbHVlLFxyXG4gICAgfTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPWB3aXRoUm91dGVyKCR7bmFtZX0pYDt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplTG9jYWxlUGF0aD1ub3JtYWxpemVMb2NhbGVQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUsbG9jYWxlcyl7bGV0IGRldGVjdGVkTG9jYWxlOy8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuY29uc3QgcGF0aG5hbWVQYXJ0cz1wYXRobmFtZS5zcGxpdCgnLycpOyhsb2NhbGVzfHxbXSkuc29tZShsb2NhbGU9PntpZihwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCk9PT1sb2NhbGUudG9Mb3dlckNhc2UoKSl7ZGV0ZWN0ZWRMb2NhbGU9bG9jYWxlO3BhdGhuYW1lUGFydHMuc3BsaWNlKDEsMSk7cGF0aG5hbWU9cGF0aG5hbWVQYXJ0cy5qb2luKCcvJyl8fCcvJztyZXR1cm4gdHJ1ZTt9cmV0dXJuIGZhbHNlO30pO3JldHVybntwYXRobmFtZSxkZXRlY3RlZExvY2FsZX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1taXR0Oy8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qLyAvLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuZnVuY3Rpb24gbWl0dCgpe2NvbnN0IGFsbD1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybntvbih0eXBlLGhhbmRsZXIpezsoYWxsW3R5cGVdfHwoYWxsW3R5cGVdPVtdKSkucHVzaChoYW5kbGVyKTt9LG9mZih0eXBlLGhhbmRsZXIpe2lmKGFsbFt0eXBlXSl7YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKT4+PjAsMSk7fX0sZW1pdCh0eXBlLC4uLmV2dHMpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbjsoYWxsW3R5cGVdfHxbXSkuc2xpY2UoKS5tYXAoaGFuZGxlcj0+e2hhbmRsZXIoLi4uZXZ0cyk7fSk7fX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldERvbWFpbkxvY2FsZT1nZXREb21haW5Mb2NhbGU7ZXhwb3J0cy5hZGRMb2NhbGU9YWRkTG9jYWxlO2V4cG9ydHMuZGVsTG9jYWxlPWRlbExvY2FsZTtleHBvcnRzLmhhc0Jhc2VQYXRoPWhhc0Jhc2VQYXRoO2V4cG9ydHMuYWRkQmFzZVBhdGg9YWRkQmFzZVBhdGg7ZXhwb3J0cy5kZWxCYXNlUGF0aD1kZWxCYXNlUGF0aDtleHBvcnRzLmlzTG9jYWxVUkw9aXNMb2NhbFVSTDtleHBvcnRzLmludGVycG9sYXRlQXM9aW50ZXJwb2xhdGVBcztleHBvcnRzLnJlc29sdmVIcmVmPXJlc29sdmVIcmVmO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO3ZhciBfcm91dGVMb2FkZXI9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7dmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoPXJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO3ZhciBfbm9ybWFsaXplTG9jYWxlUGF0aD1yZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7dmFyIF9taXR0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL3V0aWxzXCIpO3ZhciBfaXNEeW5hbWljPXJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7dmFyIF9wYXJzZVJlbGF0aXZlVXJsPXJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO3ZhciBfcmVzb2x2ZVJld3JpdGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7dmFyIF9yb3V0ZU1hdGNoZXI9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTt2YXIgX3JvdXRlUmVnZXg9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O30vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2RldGVjdERvbWFpbkxvY2FsZT1yZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO31jb25zdCBiYXNlUGF0aD1wcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIfHwnJztmdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCl7cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSx7Y2FuY2VsbGVkOnRydWV9KTt9ZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLHByZWZpeCl7cmV0dXJuIHByZWZpeCYmcGF0aC5zdGFydHNXaXRoKCcvJyk/cGF0aD09PScvJz8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkocHJlZml4KTpgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCk9PT0nLyc/cGF0aC5zdWJzdHJpbmcoMSk6cGF0aH1gOnBhdGg7fWZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLGxvY2FsZSxsb2NhbGVzLGRvbWFpbkxvY2FsZXMpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2xvY2FsZT1sb2NhbGV8fCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGgsbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLGxvY2FsZSk7aWYoZGV0ZWN0ZWREb21haW4pe3JldHVybmBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRofHwnJ30ke2xvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke2xvY2FsZX1gfSR7cGF0aH1gO31yZXR1cm4gZmFsc2U7fXJldHVybiBmYWxzZTt9ZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsbG9jYWxlLGRlZmF1bHRMb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJmxvY2FsZSE9PWRlZmF1bHRMb2NhbGUmJiFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKSYmcGF0aExvd2VyIT09Jy8nK2xvY2FsZUxvd2VyP2FkZFBhdGhQcmVmaXgocGF0aCwnLycrbG9jYWxlKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsbG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiYocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJyl8fHBhdGhMb3dlcj09PScvJytsb2NhbGVMb3dlcik/KHBhdGhuYW1lLmxlbmd0aD09PWxvY2FsZS5sZW5ndGgrMT8nLyc6JycpK3BhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGgrMSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKXtjb25zdCBxdWVyeUluZGV4PXBhdGguaW5kZXhPZignPycpO2NvbnN0IGhhc2hJbmRleD1wYXRoLmluZGV4T2YoJyMnKTtpZihxdWVyeUluZGV4Pi0xfHxoYXNoSW5kZXg+LTEpe3BhdGg9cGF0aC5zdWJzdHJpbmcoMCxxdWVyeUluZGV4Pi0xP3F1ZXJ5SW5kZXg6aGFzaEluZGV4KTt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO3JldHVybiBwYXRoPT09YmFzZVBhdGh8fHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCsnLycpO31mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKXsvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xucmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCxiYXNlUGF0aCk7fWZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO2lmKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSlwYXRoPWAvJHtwYXRofWA7cmV0dXJuIHBhdGg7fS8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL2Z1bmN0aW9uIGlzTG9jYWxVUkwodXJsKXsvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG5pZih1cmwuc3RhcnRzV2l0aCgnLycpfHx1cmwuc3RhcnRzV2l0aCgnIycpfHx1cmwuc3RhcnRzV2l0aCgnPycpKXJldHVybiB0cnVlO3RyeXsvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbmNvbnN0IGxvY2F0aW9uT3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCByZXNvbHZlZD1uZXcgVVJMKHVybCxsb2NhdGlvbk9yaWdpbik7cmV0dXJuIHJlc29sdmVkLm9yaWdpbj09PWxvY2F0aW9uT3JpZ2luJiZoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7fWNhdGNoKF8pe3JldHVybiBmYWxzZTt9fWZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSl7bGV0IGludGVycG9sYXRlZFJvdXRlPScnO2NvbnN0IGR5bmFtaWNSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3QgZHluYW1pY0dyb3Vwcz1keW5hbWljUmVnZXguZ3JvdXBzO2NvbnN0IGR5bmFtaWNNYXRjaGVzPS8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbihhc1BhdGhuYW1lIT09cm91dGU/KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSk6JycpfHwvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbi8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbnF1ZXJ5O2ludGVycG9sYXRlZFJvdXRlPXJvdXRlO2NvbnN0IHBhcmFtcz1PYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtpZighcGFyYW1zLmV2ZXJ5KHBhcmFtPT57bGV0IHZhbHVlPWR5bmFtaWNNYXRjaGVzW3BhcmFtXXx8Jyc7Y29uc3R7cmVwZWF0LG9wdGlvbmFsfT1keW5hbWljR3JvdXBzW3BhcmFtXTsvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbi8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbmxldCByZXBsYWNlZD1gWyR7cmVwZWF0PycuLi4nOicnfSR7cGFyYW19XWA7aWYob3B0aW9uYWwpe3JlcGxhY2VkPWAkeyF2YWx1ZT8nLyc6Jyd9WyR7cmVwbGFjZWR9XWA7fWlmKHJlcGVhdCYmIUFycmF5LmlzQXJyYXkodmFsdWUpKXZhbHVlPVt2YWx1ZV07cmV0dXJuKG9wdGlvbmFsfHxwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykmJigvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbmludGVycG9sYXRlZFJvdXRlPWludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQscmVwZWF0P3ZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4vLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4vLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG5zZWdtZW50PT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudCkpLmpvaW4oJy8nKTplbmNvZGVVUklDb21wb25lbnQodmFsdWUpKXx8Jy8nKTt9KSl7aW50ZXJwb2xhdGVkUm91dGU9Jyc7Ly8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbi8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4vLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxufXJldHVybntwYXJhbXMscmVzdWx0OmludGVycG9sYXRlZFJvdXRlfTt9ZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl7Y29uc3QgZmlsdGVyZWRRdWVyeT17fTtPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaChrZXk9PntpZighcGFyYW1zLmluY2x1ZGVzKGtleSkpe2ZpbHRlcmVkUXVlcnlba2V5XT1xdWVyeVtrZXldO319KTtyZXR1cm4gZmlsdGVyZWRRdWVyeTt9LyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL2Z1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlcixocmVmLHJlc29sdmVBcyl7Ly8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbmxldCBiYXNlO2NvbnN0IHVybEFzU3RyaW5nPXR5cGVvZiBocmVmPT09J3N0cmluZyc/aHJlZjooMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKGhyZWYpO3RyeXtiYXNlPW5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpP3JvdXRlci5hc1BhdGg6cm91dGVyLnBhdGhuYW1lLCdodHRwOi8vbicpO31jYXRjaChfKXsvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuYmFzZT1uZXcgVVJMKCcvJywnaHR0cDovL24nKTt9Ly8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbmlmKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO310cnl7Y29uc3QgZmluYWxVcmw9bmV3IFVSTCh1cmxBc1N0cmluZyxiYXNlKTtmaW5hbFVybC5wYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkoZmluYWxVcmwucGF0aG5hbWUpO2xldCBpbnRlcnBvbGF0ZWRBcz0nJztpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShmaW5hbFVybC5wYXRobmFtZSkmJmZpbmFsVXJsLnNlYXJjaFBhcmFtcyYmcmVzb2x2ZUFzKXtjb25zdCBxdWVyeT0oMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtjb25zdHtyZXN1bHQscGFyYW1zfT1pbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLGZpbmFsVXJsLnBhdGhuYW1lLHF1ZXJ5KTtpZihyZXN1bHQpe2ludGVycG9sYXRlZEFzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOnJlc3VsdCxoYXNoOmZpbmFsVXJsLmhhc2gscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl9KTt9fS8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG5jb25zdCByZXNvbHZlZEhyZWY9ZmluYWxVcmwub3JpZ2luPT09YmFzZS5vcmlnaW4/ZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKTpmaW5hbFVybC5ocmVmO3JldHVybiByZXNvbHZlQXM/W3Jlc29sdmVkSHJlZixpbnRlcnBvbGF0ZWRBc3x8cmVzb2x2ZWRIcmVmXTpyZXNvbHZlZEhyZWY7fWNhdGNoKF8pe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9fWZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCl7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtyZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKT91cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpOnVybDt9ZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcix1cmwsYXMpey8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbmxldFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109cmVzb2x2ZUhyZWYocm91dGVyLHVybCx0cnVlKTtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IGhyZWZIYWRPcmlnaW49cmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtjb25zdCBhc0hhZE9yaWdpbj1yZXNvbHZlZEFzJiZyZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtyZXNvbHZlZEhyZWY9c3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtyZXNvbHZlZEFzPXJlc29sdmVkQXM/c3RyaXBPcmlnaW4ocmVzb2x2ZWRBcyk6cmVzb2x2ZWRBcztjb25zdCBwcmVwYXJlZFVybD1ocmVmSGFkT3JpZ2luP3Jlc29sdmVkSHJlZjphZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO2NvbnN0IHByZXBhcmVkQXM9YXM/c3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLGFzKSk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmO3JldHVybnt1cmw6cHJlcGFyZWRVcmwsYXM6YXNIYWRPcmlnaW4/cHJlcGFyZWRBczphZGRCYXNlUGF0aChwcmVwYXJlZEFzKX07fWZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpe2NvbnN0IGNsZWFuUGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKCgwLF9kZW5vcm1hbGl6ZVBhZ2VQYXRoLmRlbm9ybWFsaXplUGFnZVBhdGgpKHBhdGhuYW1lKSk7aWYoY2xlYW5QYXRobmFtZT09PScvNDA0J3x8Y2xlYW5QYXRobmFtZT09PScvX2Vycm9yJyl7cmV0dXJuIHBhdGhuYW1lO30vLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG5pZighcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbnBhZ2VzLnNvbWUocGFnZT0+e2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHBhZ2UpJiYoMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKXtwYXRobmFtZT1wYWdlO3JldHVybiB0cnVlO319KTt9cmV0dXJuKDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTt9Y29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb249cHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiYmdHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnJiYnc2Nyb2xsUmVzdG9yYXRpb24naW4gd2luZG93Lmhpc3RvcnkmJiEhZnVuY3Rpb24oKXt0cnl7bGV0IHY9J19fbmV4dCc7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xucmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odix2KSxzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLHRydWU7fWNhdGNoKG4pe319KCk7Y29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EPVN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7ZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMpe3JldHVybiBmZXRjaCh1cmwsey8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4vL1xuLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuLy8gPiBvcHRpb24uXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4vL1xuLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbi8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2Bcbi8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuY3JlZGVudGlhbHM6J3NhbWUtb3JpZ2luJ30pLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7aWYoYXR0ZW1wdHM+MSYmcmVzLnN0YXR1cz49NTAwKXtyZXR1cm4gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMtMSk7fWlmKHJlcy5zdGF0dXM9PT00MDQpe3JldHVybiByZXMuanNvbigpLnRoZW4oZGF0YT0+e2lmKGRhdGEubm90Rm91bmQpe3JldHVybntub3RGb3VuZDpTU0dfREFUQV9OT1RfRk9VTkR9O310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO30pO310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO31yZXR1cm4gcmVzLmpzb24oKTt9KTt9ZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZixpc1NlcnZlclJlbmRlcil7cmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXI/MzoxKS5jYXRjaChlcnI9PnsvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbi8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4vLyBsb29wLlxuaWYoIWlzU2VydmVyUmVuZGVyKXsoMCxfcm91dGVMb2FkZXIubWFya0Fzc2V0RXJyb3IpKGVycik7fXRocm93IGVycjt9KTt9Y2xhc3MgUm91dGVyey8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqLyAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbmNvbnN0cnVjdG9yKF9wYXRobmFtZSxfcXVlcnksX2FzLHtpbml0aWFsUHJvcHMscGFnZUxvYWRlcixBcHAsd3JhcEFwcCxDb21wb25lbnQsZXJyLHN1YnNjcmlwdGlvbixpc0ZhbGxiYWNrLGxvY2FsZSxsb2NhbGVzLGRlZmF1bHRMb2NhbGUsZG9tYWluTG9jYWxlcyxpc1ByZXZpZXd9KXt0aGlzLnJvdXRlPXZvaWQgMDt0aGlzLnBhdGhuYW1lPXZvaWQgMDt0aGlzLnF1ZXJ5PXZvaWQgMDt0aGlzLmFzUGF0aD12b2lkIDA7dGhpcy5iYXNlUGF0aD12b2lkIDA7dGhpcy5jb21wb25lbnRzPXZvaWQgMDt0aGlzLnNkYz17fTt0aGlzLnNkcj17fTt0aGlzLnN1Yj12b2lkIDA7dGhpcy5jbGM9dm9pZCAwO3RoaXMucGFnZUxvYWRlcj12b2lkIDA7dGhpcy5fYnBzPXZvaWQgMDt0aGlzLmV2ZW50cz12b2lkIDA7dGhpcy5fd3JhcEFwcD12b2lkIDA7dGhpcy5pc1Nzcj12b2lkIDA7dGhpcy5pc0ZhbGxiYWNrPXZvaWQgMDt0aGlzLl9pbkZsaWdodFJvdXRlPXZvaWQgMDt0aGlzLl9zaGFsbG93PXZvaWQgMDt0aGlzLmxvY2FsZT12b2lkIDA7dGhpcy5sb2NhbGVzPXZvaWQgMDt0aGlzLmRlZmF1bHRMb2NhbGU9dm9pZCAwO3RoaXMuZG9tYWluTG9jYWxlcz12b2lkIDA7dGhpcy5pc1JlYWR5PXZvaWQgMDt0aGlzLmlzUHJldmlldz12b2lkIDA7dGhpcy5pc0xvY2FsZURvbWFpbj12b2lkIDA7dGhpcy5faWR4PTA7dGhpcy5vblBvcFN0YXRlPWU9Pntjb25zdCBzdGF0ZT1lLnN0YXRlO2lmKCFzdGF0ZSl7Ly8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4vLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbi8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbi8vXG4vLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4vLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4vLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbmNvbnN0e3BhdGhuYW1lLHF1ZXJ5fT10aGlzO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgocGF0aG5hbWUpLHF1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSk7cmV0dXJuO31pZighc3RhdGUuX19OKXtyZXR1cm47fWxldCBmb3JjZWRTY3JvbGw7Y29uc3R7dXJsLGFzLG9wdGlvbnMsaWR4fT1zdGF0ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7aWYodGhpcy5faWR4IT09aWR4KXsvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkKXt9Ly8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e2NvbnN0IHY9c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK2lkeCk7Zm9yY2VkU2Nyb2xsPUpTT04ucGFyc2Uodik7fWNhdGNoKF91bnVzZWQyKXtmb3JjZWRTY3JvbGw9e3g6MCx5OjB9O319fX10aGlzLl9pZHg9aWR4O2NvbnN0e3BhdGhuYW1lfT0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpOy8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG5pZih0aGlzLmlzU3NyJiZhcz09PXRoaXMuYXNQYXRoJiZwYXRobmFtZT09PXRoaXMucGF0aG5hbWUpe3JldHVybjt9Ly8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbmlmKHRoaXMuX2JwcyYmIXRoaXMuX2JwcyhzdGF0ZSkpe3JldHVybjt9dGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLE9iamVjdC5hc3NpZ24oe30sb3B0aW9ucyx7c2hhbGxvdzpvcHRpb25zLnNoYWxsb3cmJnRoaXMuX3NoYWxsb3csbG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGV9KSxmb3JjZWRTY3JvbGwpO307Ly8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG50aGlzLnJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShfcGF0aG5hbWUpOy8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxudGhpcy5jb21wb25lbnRzPXt9Oy8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3Jcbi8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4vLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG5pZihfcGF0aG5hbWUhPT0nL19lcnJvcicpe3RoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXT17Q29tcG9uZW50LGluaXRpYWw6dHJ1ZSxwcm9wczppbml0aWFsUHJvcHMsZXJyLF9fTl9TU0c6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTRyxfX05fU1NQOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU1B9O310aGlzLmNvbXBvbmVudHNbJy9fYXBwJ109e0NvbXBvbmVudDpBcHAsc3R5bGVTaGVldHM6Wy8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9dfTsvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbnRoaXMuZXZlbnRzPVJvdXRlci5ldmVudHM7dGhpcy5wYWdlTG9hZGVyPXBhZ2VMb2FkZXI7dGhpcy5wYXRobmFtZT1fcGF0aG5hbWU7dGhpcy5xdWVyeT1fcXVlcnk7Ly8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbi8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG5jb25zdCBhdXRvRXhwb3J0RHluYW1pYz0oMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShfcGF0aG5hbWUpJiZzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDt0aGlzLmFzUGF0aD1hdXRvRXhwb3J0RHluYW1pYz9fcGF0aG5hbWU6X2FzO3RoaXMuYmFzZVBhdGg9YmFzZVBhdGg7dGhpcy5zdWI9c3Vic2NyaXB0aW9uO3RoaXMuY2xjPW51bGw7dGhpcy5fd3JhcEFwcD13cmFwQXBwOy8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbi8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG50aGlzLmlzU3NyPXRydWU7dGhpcy5pc0ZhbGxiYWNrPWlzRmFsbGJhY2s7dGhpcy5pc1JlYWR5PSEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwfHxzZWxmLl9fTkVYVF9EQVRBX18uZ2lwfHwhYXV0b0V4cG9ydER5bmFtaWMmJiFzZWxmLmxvY2F0aW9uLnNlYXJjaCYmIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO3RoaXMuaXNQcmV2aWV3PSEhaXNQcmV2aWV3O3RoaXMuaXNMb2NhbGVEb21haW49ZmFsc2U7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9bG9jYWxlO3RoaXMubG9jYWxlcz1sb2NhbGVzO3RoaXMuZGVmYXVsdExvY2FsZT1kZWZhdWx0TG9jYWxlO3RoaXMuZG9tYWluTG9jYWxlcz1kb21haW5Mb2NhbGVzO3RoaXMuaXNMb2NhbGVEb21haW49ISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyxzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTt9aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXsvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbmlmKF9hcy5zdWJzdHIoMCwyKSE9PScvLycpey8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4vLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbmNvbnN0IG9wdGlvbnM9e2xvY2FsZX07b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9X2FzIT09X3BhdGhuYW1lO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgoX3BhdGhuYW1lKSxxdWVyeTpfcXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpLG9wdGlvbnMpO313aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLHRoaXMub25Qb3BTdGF0ZSk7Ly8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbi8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuaWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3dpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uPSdtYW51YWwnO319fX1yZWxvYWQoKXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fS8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovYmFjaygpe3dpbmRvdy5oaXN0b3J5LmJhY2soKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3B1c2godXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pey8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbmlmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt0cnl7Ly8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkMyl7fX19Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcmVwbGFjZSh1cmwsYXMsb3B0aW9ucz17fSl7Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO31hc3luYyBjaGFuZ2UobWV0aG9kLHVybCxhcyxvcHRpb25zLGZvcmNlZFNjcm9sbCl7aWYoIWlzTG9jYWxVUkwodXJsKSl7d2luZG93LmxvY2F0aW9uLmhyZWY9dXJsO3JldHVybiBmYWxzZTt9Y29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWY9dXJsPT09YXN8fG9wdGlvbnMuX2h8fG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmOy8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG5pZihvcHRpb25zLl9oKXt0aGlzLmlzUmVhZHk9dHJ1ZTt9bGV0IGxvY2FsZUNoYW5nZT1vcHRpb25zLmxvY2FsZSE9PXRoaXMubG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPW9wdGlvbnMubG9jYWxlPT09ZmFsc2U/dGhpcy5kZWZhdWx0TG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmxvY2FsZTtpZih0eXBlb2Ygb3B0aW9ucy5sb2NhbGU9PT0ndW5kZWZpbmVkJyl7b3B0aW9ucy5sb2NhbGU9dGhpcy5sb2NhbGU7fWNvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtpZihsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKXt0aGlzLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO3BhcnNlZEFzLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt1cmw9YWRkQmFzZVBhdGgoKDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoaGFzQmFzZVBhdGgodXJsKT9kZWxCYXNlUGF0aCh1cmwpOnVybCx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTt9bGV0IGRpZE5hdmlnYXRlPWZhbHNlOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt2YXIgX3RoaXMkbG9jYWxlczsvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG5pZighKChfdGhpcyRsb2NhbGVzPXRoaXMubG9jYWxlcykhPW51bGwmJl90aGlzJGxvY2FsZXMuaW5jbHVkZXModGhpcy5sb2NhbGUpKSl7cGFyc2VkQXMucGF0aG5hbWU9YWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlKTt3aW5kb3cubG9jYXRpb24uaHJlZj0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1jb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLHVuZGVmaW5lZCx0aGlzLmxvY2FsZSk7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpey8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4vLyBjb3JyZWN0IGRvbWFpblxuaWYoIWRpZE5hdmlnYXRlJiZkZXRlY3RlZERvbWFpbiYmdGhpcy5pc0xvY2FsZURvbWFpbiYmc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSE9PWRldGVjdGVkRG9tYWluLmRvbWFpbil7Y29uc3QgYXNOb0Jhc2VQYXRoPWRlbEJhc2VQYXRoKGFzKTt3aW5kb3cubG9jYXRpb24uaHJlZj1gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGg9PT0nLyc/Jyc6YXNOb0Jhc2VQYXRofWB8fCcvJyl9YDsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1pZihkaWROYXZpZ2F0ZSl7cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fX1pZighb3B0aW9ucy5faCl7dGhpcy5pc1Nzcj1mYWxzZTt9Ly8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuaWYoX3V0aWxzLlNUKXtwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO31jb25zdHtzaGFsbG93PWZhbHNlfT1vcHRpb25zO2NvbnN0IHJvdXRlUHJvcHM9e3NoYWxsb3d9O2lmKHRoaXMuX2luRmxpZ2h0Um91dGUpe3RoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUscm91dGVQcm9wcyk7fWFzPWFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLG9wdGlvbnMubG9jYWxlLHRoaXMuZGVmYXVsdExvY2FsZSkpO2NvbnN0IGNsZWFuZWRBcz1kZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyx0aGlzLmxvY2FsZSk7dGhpcy5faW5GbGlnaHRSb3V0ZT1hczsvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG5pZighb3B0aW9ucy5faCYmdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSl7dGhpcy5hc1BhdGg9Y2xlYW5lZEFzO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTsvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xudGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO3RoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7dGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLG51bGwpO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZSxxdWVyeX09cGFyc2VkOy8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbi8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuLy8gd2hlbiByZXdyaXR0ZW4gdG9cbmxldCBwYWdlcyxyZXdyaXRlczt0cnl7cGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTt9Y2F0Y2goZXJyKXsvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3Rcbi8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9Ly8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2Vcbi8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbi8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbmlmKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykmJiFsb2NhbGVDaGFuZ2Upe21ldGhvZD0ncmVwbGFjZVN0YXRlJzt9Ly8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbi8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbmxldCByZXNvbHZlZEFzPWFzOy8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbi8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbi8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG5wYXRobmFtZT1wYXRobmFtZT8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoZGVsQmFzZVBhdGgocGF0aG5hbWUpKTpwYXRobmFtZTtpZihzaG91bGRSZXNvbHZlSHJlZiYmcGF0aG5hbWUhPT0nL19lcnJvcicpeztvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj10cnVlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9cmV3cml0ZXNSZXN1bHQuYXNQYXRoO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX19Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTtpZighaXNMb2NhbFVSTChhcykpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgK2BcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO313aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fXJlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLHRoaXMubG9jYWxlKTtpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShyb3V0ZSkpe2NvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHJlc29sdmVkQXMpO2NvbnN0IGFzUGF0aG5hbWU9cGFyc2VkQXMucGF0aG5hbWU7Y29uc3Qgcm91dGVSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3Qgcm91dGVNYXRjaD0oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikocm91dGVSZWdleCkoYXNQYXRobmFtZSk7Y29uc3Qgc2hvdWxkSW50ZXJwb2xhdGU9cm91dGU9PT1hc1BhdGhuYW1lO2NvbnN0IGludGVycG9sYXRlZEFzPXNob3VsZEludGVycG9sYXRlP2ludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSk6e307aWYoIXJvdXRlTWF0Y2h8fHNob3VsZEludGVycG9sYXRlJiYhaW50ZXJwb2xhdGVkQXMucmVzdWx0KXtjb25zdCBtaXNzaW5nUGFyYW1zPU9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW09PiFxdWVyeVtwYXJhbV0pO2lmKG1pc3NpbmdQYXJhbXMubGVuZ3RoPjApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGU/YEludGVycG9sYXRpbmcgaHJlZmA6YE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCtgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTt9dGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZT9gVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgOmBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApK2BSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGU/J2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnOidpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7fX1lbHNlIGlmKHNob3VsZEludGVycG9sYXRlKXthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKE9iamVjdC5hc3NpZ24oe30scGFyc2VkQXMse3BhdGhuYW1lOmludGVycG9sYXRlZEFzLnJlc3VsdCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksaW50ZXJwb2xhdGVkQXMucGFyYW1zKX0pKTt9ZWxzZXsvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuT2JqZWN0LmFzc2lnbihxdWVyeSxyb3V0ZU1hdGNoKTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7dHJ5e3ZhciBfc2VsZiRfX05FWFRfREFUQV9fJHAsX3NlbGYkX19ORVhUX0RBVEFfXyRwMixfb3B0aW9ucyRzY3JvbGw7bGV0IHJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpO2xldHtlcnJvcixwcm9wcyxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbzsvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbmlmKChfX05fU1NHfHxfX05fU1NQKSYmcHJvcHMpe2lmKHByb3BzLnBhZ2VQcm9wcyYmcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCl7Y29uc3QgZGVzdGluYXRpb249cHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDsvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuLy8gaXQncyBub3RcbmlmKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcGFyc2VkSHJlZj0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShkZXN0aW5hdGlvbik7cGFyc2VkSHJlZi5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUscGFnZXMpO2NvbnN0e3VybDpuZXdVcmwsYXM6bmV3QXN9PXByZXBhcmVVcmxBcyh0aGlzLGRlc3RpbmF0aW9uLGRlc3RpbmF0aW9uKTtyZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLG5ld1VybCxuZXdBcyxvcHRpb25zKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9ZGVzdGluYXRpb247cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fXRoaXMuaXNQcmV2aWV3PSEhcHJvcHMuX19OX1BSRVZJRVc7Ly8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuaWYocHJvcHMubm90Rm91bmQ9PT1TU0dfREFUQV9OT1RfRk9VTkQpe2xldCBub3RGb3VuZFJvdXRlO3RyeXthd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7bm90Rm91bmRSb3V0ZT0nLzQwNCc7fWNhdGNoKF8pe25vdEZvdW5kUm91dGU9Jy9fZXJyb3InO31yb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSxub3RGb3VuZFJvdXRlLHF1ZXJ5LGFzLHJlc29sdmVkQXMse3NoYWxsb3c6ZmFsc2V9KTt9fVJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsYXMscm91dGVQcm9wcyk7dGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBhcHBDb21wPXRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7d2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZD1hcHBDb21wLmdldEluaXRpYWxQcm9wcz09PWFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyYmIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO31pZihvcHRpb25zLl9oJiZwYXRobmFtZT09PScvX2Vycm9yJyYmKChfc2VsZiRfX05FWFRfREFUQV9fJHA9c2VsZi5fX05FWFRfREFUQV9fLnByb3BzKT09bnVsbD92b2lkIDA6KF9zZWxmJF9fTkVYVF9EQVRBX18kcDI9X3NlbGYkX19ORVhUX0RBVEFfXyRwLnBhZ2VQcm9wcyk9PW51bGw/dm9pZCAwOl9zZWxmJF9fTkVYVF9EQVRBX18kcDIuc3RhdHVzQ29kZSk9PT01MDAmJnByb3BzIT1udWxsJiZwcm9wcy5wYWdlUHJvcHMpey8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxucHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGU9NTAwO30vLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG5jb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlPW9wdGlvbnMuc2hhbGxvdyYmdGhpcy5yb3V0ZT09PXJvdXRlO2NvbnN0IHNob3VsZFNjcm9sbD0oX29wdGlvbnMkc2Nyb2xsPW9wdGlvbnMuc2Nyb2xsKSE9bnVsbD9fb3B0aW9ucyRzY3JvbGw6IWlzVmFsaWRTaGFsbG93Um91dGU7Y29uc3QgcmVzZXRTY3JvbGw9c2hvdWxkU2Nyb2xsP3t4OjAseTowfTpudWxsO2F3YWl0IHRoaXMuc2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGNsZWFuZWRBcyxyb3V0ZUluZm8sZm9yY2VkU2Nyb2xsIT1udWxsP2ZvcmNlZFNjcm9sbDpyZXNldFNjcm9sbCkuY2F0Y2goZT0+e2lmKGUuY2FuY2VsbGVkKWVycm9yPWVycm9yfHxlO2Vsc2UgdGhyb3cgZTt9KTtpZihlcnJvcil7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnJvcixjbGVhbmVkQXMscm91dGVQcm9wcyk7dGhyb3cgZXJyb3I7fWlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKHRoaXMubG9jYWxlKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZz10aGlzLmxvY2FsZTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWNhdGNoKGVycil7aWYoZXJyLmNhbmNlbGxlZCl7cmV0dXJuIGZhbHNlO310aHJvdyBlcnI7fX1jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0eXBlb2Ygd2luZG93Lmhpc3Rvcnk9PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtyZXR1cm47fWlmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdPT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7cmV0dXJuO319aWYobWV0aG9kIT09J3B1c2hTdGF0ZSd8fCgwLF91dGlscy5nZXRVUkwpKCkhPT1hcyl7dGhpcy5fc2hhbGxvdz1vcHRpb25zLnNoYWxsb3c7d2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7dXJsLGFzLG9wdGlvbnMsX19OOnRydWUsaWR4OnRoaXMuX2lkeD1tZXRob2QhPT0ncHVzaFN0YXRlJz90aGlzLl9pZHg6dGhpcy5faWR4KzF9LC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4nJyxhcyk7fX1hc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyxsb2FkRXJyb3JGYWlsKXtpZihlcnIuY2FuY2VsbGVkKXsvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xudGhyb3cgZXJyO31pZigoMCxfcm91dGVMb2FkZXIuaXNBc3NldEVycm9yKShlcnIpfHxsb2FkRXJyb3JGYWlsKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycixhcyxyb3V0ZVByb3BzKTsvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbi8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2Vcbi8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7Ly8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4vLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxudGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO310cnl7bGV0IENvbXBvbmVudDtsZXQgc3R5bGVTaGVldHM7bGV0IHByb3BzO2lmKHR5cGVvZiBDb21wb25lbnQ9PT0ndW5kZWZpbmVkJ3x8dHlwZW9mIHN0eWxlU2hlZXRzPT09J3VuZGVmaW5lZCcpezsoe3BhZ2U6Q29tcG9uZW50LHN0eWxlU2hlZXRzfT1hd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO31jb25zdCByb3V0ZUluZm89e3Byb3BzLENvbXBvbmVudCxzdHlsZVNoZWV0cyxlcnIsZXJyb3I6ZXJyfTtpZighcm91dGVJbmZvLnByb3BzKXt0cnl7cm91dGVJbmZvLnByb3BzPWF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCx7ZXJyLHBhdGhuYW1lLHF1ZXJ5fSk7fWNhdGNoKGdpcEVycil7Y29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxnaXBFcnIpO3JvdXRlSW5mby5wcm9wcz17fTt9fXJldHVybiByb3V0ZUluZm87fWNhdGNoKHJvdXRlSW5mb0Vycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsdHJ1ZSk7fX1hc3luYyBnZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKXt0cnl7Y29uc3QgZXhpc3RpbmdSb3V0ZUluZm89dGhpcy5jb21wb25lbnRzW3JvdXRlXTtpZihyb3V0ZVByb3BzLnNoYWxsb3cmJmV4aXN0aW5nUm91dGVJbmZvJiZ0aGlzLnJvdXRlPT09cm91dGUpe3JldHVybiBleGlzdGluZ1JvdXRlSW5mbzt9Y29uc3QgY2FjaGVkUm91dGVJbmZvPWV4aXN0aW5nUm91dGVJbmZvJiYnaW5pdGlhbCdpbiBleGlzdGluZ1JvdXRlSW5mbz91bmRlZmluZWQ6ZXhpc3RpbmdSb3V0ZUluZm87Y29uc3Qgcm91dGVJbmZvPWNhY2hlZFJvdXRlSW5mbz9jYWNoZWRSb3V0ZUluZm86YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXM9Pih7Q29tcG9uZW50OnJlcy5wYWdlLHN0eWxlU2hlZXRzOnJlcy5zdHlsZVNoZWV0cyxfX05fU1NHOnJlcy5tb2QuX19OX1NTRyxfX05fU1NQOnJlcy5tb2QuX19OX1NTUH0pKTtjb25zdHtDb21wb25lbnQsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0e2lzVmFsaWRFbGVtZW50VHlwZX09cmVxdWlyZSgncmVhY3QtaXMnKTtpZighaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpe3Rocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTt9fWxldCBkYXRhSHJlZjtpZihfX05fU1NHfHxfX05fU1NQKXtkYXRhSHJlZj10aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWUscXVlcnl9KSxyZXNvbHZlZEFzLF9fTl9TU0csdGhpcy5sb2NhbGUpO31jb25zdCBwcm9wcz1hd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHP3RoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpOl9fTl9TU1A/dGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZik6dGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG57cGF0aG5hbWUscXVlcnksYXNQYXRoOmFzLGxvY2FsZTp0aGlzLmxvY2FsZSxsb2NhbGVzOnRoaXMubG9jYWxlcyxkZWZhdWx0TG9jYWxlOnRoaXMuZGVmYXVsdExvY2FsZX0pKTtyb3V0ZUluZm8ucHJvcHM9cHJvcHM7dGhpcy5jb21wb25lbnRzW3JvdXRlXT1yb3V0ZUluZm87cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyk7fX1zZXQocm91dGUscGF0aG5hbWUscXVlcnksYXMsZGF0YSxyZXNldFNjcm9sbCl7dGhpcy5pc0ZhbGxiYWNrPWZhbHNlO3RoaXMucm91dGU9cm91dGU7dGhpcy5wYXRobmFtZT1wYXRobmFtZTt0aGlzLnF1ZXJ5PXF1ZXJ5O3RoaXMuYXNQYXRoPWFzO3JldHVybiB0aGlzLm5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKTt9LyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL2JlZm9yZVBvcFN0YXRlKGNiKXt0aGlzLl9icHM9Y2I7fW9ubHlBSGFzaENoYW5nZShhcyl7aWYoIXRoaXMuYXNQYXRoKXJldHVybiBmYWxzZTtjb25zdFtvbGRVcmxOb0hhc2gsb2xkSGFzaF09dGhpcy5hc1BhdGguc3BsaXQoJyMnKTtjb25zdFtuZXdVcmxOb0hhc2gsbmV3SGFzaF09YXMuc3BsaXQoJyMnKTsvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG5pZihuZXdIYXNoJiZvbGRVcmxOb0hhc2g9PT1uZXdVcmxOb0hhc2gmJm9sZEhhc2g9PT1uZXdIYXNoKXtyZXR1cm4gdHJ1ZTt9Ly8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuaWYob2xkVXJsTm9IYXNoIT09bmV3VXJsTm9IYXNoKXtyZXR1cm4gZmFsc2U7fS8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbi8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG5yZXR1cm4gb2xkSGFzaCE9PW5ld0hhc2g7fXNjcm9sbFRvSGFzaChhcyl7Y29uc3RbLGhhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5pZihoYXNoPT09Jyd8fGhhc2g9PT0ndG9wJyl7d2luZG93LnNjcm9sbFRvKDAsMCk7cmV0dXJuO30vLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuY29uc3QgaWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtpZihpZEVsKXtpZEVsLnNjcm9sbEludG9WaWV3KCk7cmV0dXJuO30vLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuY29uc3QgbmFtZUVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO2lmKG5hbWVFbCl7bmFtZUVsLnNjcm9sbEludG9WaWV3KCk7fX11cmxJc05ldyhhc1BhdGgpe3JldHVybiB0aGlzLmFzUGF0aCE9PWFzUGF0aDt9LyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9hc3luYyBwcmVmZXRjaCh1cmwsYXNQYXRoPXVybCxvcHRpb25zPXt9KXtsZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lfT1wYXJzZWQ7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYob3B0aW9ucy5sb2NhbGU9PT1mYWxzZSl7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7cGFyc2VkQXMucGF0aG5hbWU9bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtvcHRpb25zLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGU7YXNQYXRoPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO319Y29uc3QgcGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7bGV0IHJlc29sdmVkQXM9YXNQYXRoO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzUGF0aC5zdGFydHNXaXRoKCcvJykpe2xldCByZXdyaXRlczsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHBhcnNlZC5xdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSx0aGlzLmxvY2FsZSk7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTsvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7cmV0dXJuO31hd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbihpc1NzZz0+e3JldHVybiBpc1NzZz90aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwscmVzb2x2ZWRBcyx0cnVlLHR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnRoaXMubG9jYWxlKSk6ZmFsc2U7fSksdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHk/J2xvYWRQYWdlJzoncHJlZmV0Y2gnXShyb3V0ZSldKTt9YXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPXRoaXMuY2xjPSgpPT57Y2FuY2VsbGVkPXRydWU7fTtjb25zdCBjb21wb25lbnRSZXN1bHQ9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtpZihjYW5jZWxsZWQpe2NvbnN0IGVycm9yPW5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7ZXJyb3IuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyb3I7fWlmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31yZXR1cm4gY29tcG9uZW50UmVzdWx0O31fZ2V0RGF0YShmbil7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O3RoaXMuY2xjPWNhbmNlbDtyZXR1cm4gZm4oKS50aGVuKGRhdGE9PntpZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9aWYoY2FuY2VsbGVkKXtjb25zdCBlcnI9bmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7ZXJyLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycjt9cmV0dXJuIGRhdGE7fSk7fV9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOmNhY2hlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyYmIXRoaXMuaXNQcmV2aWV3JiZ0aGlzLnNkY1tjYWNoZUtleV0pe3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTt9cmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57dGhpcy5zZGNbY2FjaGVLZXldPWRhdGE7cmV0dXJuIGRhdGE7fSk7fV9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOnJlc291cmNlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZih0aGlzLnNkcltyZXNvdXJjZUtleV0pe3JldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07fXJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV09ZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3JldHVybiBkYXRhO30pLmNhdGNoKGVycj0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07dGhyb3cgZXJyO30pO31nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LGN0eCl7Y29uc3R7Q29tcG9uZW50OkFwcH09dGhpcy5jb21wb25lbnRzWycvX2FwcCddO2NvbnN0IEFwcFRyZWU9dGhpcy5fd3JhcEFwcChBcHApO2N0eC5BcHBUcmVlPUFwcFRyZWU7cmV0dXJuKDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKEFwcCx7QXBwVHJlZSxDb21wb25lbnQscm91dGVyOnRoaXMsY3R4fSk7fWFib3J0Q29tcG9uZW50TG9hZChhcyxyb3V0ZVByb3BzKXtpZih0aGlzLmNsYyl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxidWlsZENhbmNlbGxhdGlvbkVycm9yKCksYXMscm91dGVQcm9wcyk7dGhpcy5jbGMoKTt0aGlzLmNsYz1udWxsO319bm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpe3JldHVybiB0aGlzLnN1YihkYXRhLHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQscmVzZXRTY3JvbGwpO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtSb3V0ZXIuZXZlbnRzPSgwLF9taXR0LmRlZmF1bHQpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5mb3JtYXRVcmw9Zm9ybWF0VXJsO3ZhciBxdWVyeXN0cmluZz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuY29uc3Qgc2xhc2hlZFByb3RvY29scz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iail7bGV0e2F1dGgsaG9zdG5hbWV9PXVybE9iajtsZXQgcHJvdG9jb2w9dXJsT2JqLnByb3RvY29sfHwnJztsZXQgcGF0aG5hbWU9dXJsT2JqLnBhdGhuYW1lfHwnJztsZXQgaGFzaD11cmxPYmouaGFzaHx8Jyc7bGV0IHF1ZXJ5PXVybE9iai5xdWVyeXx8Jyc7bGV0IGhvc3Q9ZmFsc2U7YXV0aD1hdXRoP2VuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwnOicpKydAJzonJztpZih1cmxPYmouaG9zdCl7aG9zdD1hdXRoK3VybE9iai5ob3N0O31lbHNlIGlmKGhvc3RuYW1lKXtob3N0PWF1dGgrKH5ob3N0bmFtZS5pbmRleE9mKCc6Jyk/YFske2hvc3RuYW1lfV1gOmhvc3RuYW1lKTtpZih1cmxPYmoucG9ydCl7aG9zdCs9JzonK3VybE9iai5wb3J0O319aWYocXVlcnkmJnR5cGVvZiBxdWVyeT09PSdvYmplY3QnKXtxdWVyeT1TdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSkpO31sZXQgc2VhcmNoPXVybE9iai5zZWFyY2h8fHF1ZXJ5JiZgPyR7cXVlcnl9YHx8Jyc7aWYocHJvdG9jb2wmJnByb3RvY29sLnN1YnN0cigtMSkhPT0nOicpcHJvdG9jb2wrPSc6JztpZih1cmxPYmouc2xhc2hlc3x8KCFwcm90b2NvbHx8c2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkmJmhvc3QhPT1mYWxzZSl7aG9zdD0nLy8nKyhob3N0fHwnJyk7aWYocGF0aG5hbWUmJnBhdGhuYW1lWzBdIT09Jy8nKXBhdGhuYW1lPScvJytwYXRobmFtZTt9ZWxzZSBpZighaG9zdCl7aG9zdD0nJzt9aWYoaGFzaCYmaGFzaFswXSE9PScjJyloYXNoPScjJytoYXNoO2lmKHNlYXJjaCYmc2VhcmNoWzBdIT09Jz8nKXNlYXJjaD0nPycrc2VhcmNoO3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpO3NlYXJjaD1zZWFyY2gucmVwbGFjZSgnIycsJyUyMycpO3JldHVybmAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZT1pc0R5bmFtaWNSb3V0ZTsvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFPS9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO2Z1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKXtyZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGFyc2VSZWxhdGl2ZVVybD1wYXJzZVJlbGF0aXZlVXJsO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7LyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmwsYmFzZSl7Y29uc3QgZ2xvYmFsQmFzZT1uZXcgVVJMKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJz8naHR0cDovL24nOigwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSk7Y29uc3QgcmVzb2x2ZWRCYXNlPWJhc2U/bmV3IFVSTChiYXNlLGdsb2JhbEJhc2UpOmdsb2JhbEJhc2U7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLHNlYXJjaCxoYXNoLGhyZWYsb3JpZ2lufT1uZXcgVVJMKHVybCxyZXNvbHZlZEJhc2UpO2lmKG9yaWdpbiE9PWdsb2JhbEJhc2Uub3JpZ2luKXt0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKTt9cmV0dXJue3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLHNlYXJjaCxoYXNoLGhyZWY6aHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZWxhdGl2ZS11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5PXNlYXJjaFBhcmFtc1RvVXJsUXVlcnk7ZXhwb3J0cy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zPXVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM7ZXhwb3J0cy5hc3NpZ249YXNzaWduO2Z1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKXtjb25zdCBxdWVyeT17fTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+e2lmKHR5cGVvZiBxdWVyeVtrZXldPT09J3VuZGVmaW5lZCcpe3F1ZXJ5W2tleV09dmFsdWU7fWVsc2UgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSl7O3F1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7fWVsc2V7cXVlcnlba2V5XT1bcXVlcnlba2V5XSx2YWx1ZV07fX0pO3JldHVybiBxdWVyeTt9ZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbSl7aWYodHlwZW9mIHBhcmFtPT09J3N0cmluZyd8fHR5cGVvZiBwYXJhbT09PSdudW1iZXInJiYhaXNOYU4ocGFyYW0pfHx0eXBlb2YgcGFyYW09PT0nYm9vbGVhbicpe3JldHVybiBTdHJpbmcocGFyYW0pO31lbHNle3JldHVybicnO319ZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyh1cmxRdWVyeSl7Y29uc3QgcmVzdWx0PW5ldyBVUkxTZWFyY2hQYXJhbXMoKTtPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSx2YWx1ZV0pPT57aWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe3ZhbHVlLmZvckVhY2goaXRlbT0+cmVzdWx0LmFwcGVuZChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpO31lbHNle3Jlc3VsdC5zZXQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKTt9fSk7cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gYXNzaWduKHRhcmdldCwuLi5zZWFyY2hQYXJhbXNMaXN0KXtzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goc2VhcmNoUGFyYW1zPT57QXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKGtleT0+dGFyZ2V0LmRlbGV0ZShrZXkpKTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+dGFyZ2V0LmFwcGVuZChrZXksdmFsdWUpKTt9KTtyZXR1cm4gdGFyZ2V0O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5c3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVNYXRjaGVyPWdldFJvdXRlTWF0Y2hlcjtmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCl7Y29uc3R7cmUsZ3JvdXBzfT1yb3V0ZVJlZ2V4O3JldHVybiBwYXRobmFtZT0+e2NvbnN0IHJvdXRlTWF0Y2g9cmUuZXhlYyhwYXRobmFtZSk7aWYoIXJvdXRlTWF0Y2gpe3JldHVybiBmYWxzZTt9Y29uc3QgZGVjb2RlPXBhcmFtPT57dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO31jYXRjaChfKXtjb25zdCBlcnI9bmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7ZXJyLmNvZGU9J0RFQ09ERV9GQUlMRUQnO3Rocm93IGVycjt9fTtjb25zdCBwYXJhbXM9e307T2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKHNsdWdOYW1lPT57Y29uc3QgZz1ncm91cHNbc2x1Z05hbWVdO2NvbnN0IG09cm91dGVNYXRjaFtnLnBvc107aWYobSE9PXVuZGVmaW5lZCl7cGFyYW1zW3NsdWdOYW1lXT1+bS5pbmRleE9mKCcvJyk/bS5zcGxpdCgnLycpLm1hcChlbnRyeT0+ZGVjb2RlKGVudHJ5KSk6Zy5yZXBlYXQ/W2RlY29kZShtKV06ZGVjb2RlKG0pO319KTtyZXR1cm4gcGFyYW1zO307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZXhlY09uY2U9ZXhlY09uY2U7ZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbjtleHBvcnRzLmdldFVSTD1nZXRVUkw7ZXhwb3J0cy5nZXREaXNwbGF5TmFtZT1nZXREaXNwbGF5TmFtZTtleHBvcnRzLmlzUmVzU2VudD1pc1Jlc1NlbnQ7ZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzPWxvYWRHZXRJbml0aWFsUHJvcHM7ZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbj1mb3JtYXRXaXRoVmFsaWRhdGlvbjtleHBvcnRzLlNUPWV4cG9ydHMuU1A9ZXhwb3J0cy51cmxPYmplY3RLZXlzPXZvaWQgMDt2YXIgX2Zvcm1hdFVybD1yZXF1aXJlKFwiLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybFwiKTsvKipcbiAqIFV0aWxzXG4gKi9mdW5jdGlvbiBleGVjT25jZShmbil7bGV0IHVzZWQ9ZmFsc2U7bGV0IHJlc3VsdDtyZXR1cm4oLi4uYXJncyk9PntpZighdXNlZCl7dXNlZD10cnVlO3Jlc3VsdD1mbiguLi5hcmdzKTt9cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpe2NvbnN0e3Byb3RvY29sLGhvc3RuYW1lLHBvcnR9PXdpbmRvdy5sb2NhdGlvbjtyZXR1cm5gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0Pyc6Jytwb3J0OicnfWA7fWZ1bmN0aW9uIGdldFVSTCgpe2NvbnN0e2hyZWZ9PXdpbmRvdy5sb2NhdGlvbjtjb25zdCBvcmlnaW49Z2V0TG9jYXRpb25PcmlnaW4oKTtyZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7fWZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCl7cmV0dXJuIHR5cGVvZiBDb21wb25lbnQ9PT0nc3RyaW5nJz9Db21wb25lbnQ6Q29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb25lbnQubmFtZXx8J1Vua25vd24nO31mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKXtyZXR1cm4gcmVzLmZpbmlzaGVkfHxyZXMuaGVhZGVyc1NlbnQ7fWFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLGN0eCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBfQXBwJHByb3RvdHlwZTtpZigoX0FwcCRwcm90b3R5cGU9QXBwLnByb3RvdHlwZSkhPW51bGwmJl9BcHAkcHJvdG90eXBlLmdldEluaXRpYWxQcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fX0vLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG5jb25zdCByZXM9Y3R4LnJlc3x8Y3R4LmN0eCYmY3R4LmN0eC5yZXM7aWYoIUFwcC5nZXRJbml0aWFsUHJvcHMpe2lmKGN0eC5jdHgmJmN0eC5Db21wb25lbnQpey8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbnJldHVybntwYWdlUHJvcHM6YXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LGN0eC5jdHgpfTt9cmV0dXJue307fWNvbnN0IHByb3BzPWF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtpZihyZXMmJmlzUmVzU2VudChyZXMpKXtyZXR1cm4gcHJvcHM7fWlmKCFwcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoPT09MCYmIWN0eC5jdHgpe2NvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO319cmV0dXJuIHByb3BzO31jb25zdCB1cmxPYmplY3RLZXlzPVsnYXV0aCcsJ2hhc2gnLCdob3N0JywnaG9zdG5hbWUnLCdocmVmJywncGF0aCcsJ3BhdGhuYW1lJywncG9ydCcsJ3Byb3RvY29sJywncXVlcnknLCdzZWFyY2gnLCdzbGFzaGVzJ107ZXhwb3J0cy51cmxPYmplY3RLZXlzPXVybE9iamVjdEtleXM7ZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKHVybCE9PW51bGwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jyl7T2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleT0+e2lmKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpPT09LTEpe2NvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTt9fSk7fX1yZXR1cm4oMCxfZm9ybWF0VXJsLmZvcm1hdFVybCkodXJsKTt9Y29uc3QgU1A9dHlwZW9mIHBlcmZvcm1hbmNlIT09J3VuZGVmaW5lZCc7ZXhwb3J0cy5TUD1TUDtjb25zdCBTVD1TUCYmdHlwZW9mIHBlcmZvcm1hbmNlLm1hcms9PT0nZnVuY3Rpb24nJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZT09PSdmdW5jdGlvbic7ZXhwb3J0cy5TVD1TVDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEluZm8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9JbmZvJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9NYWluJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlREJEYXRhLCB1c2VEQkRpc3BhdGNoIH0gZnJvbSAnLi4vLi4vY29udGV4dC9EQkNvbnRleHQnO1xyXG5pbXBvcnQgeyBMb2FkRGF0YSB9IGZyb20gJy4uLy4uL2NvbnRleHQvREJDb250ZXh0RnVuYyc7XHJcbmltcG9ydCB7IERldmljZSwgUGFsZXR0ZSB9IGZyb20gJy4uLy4uL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCB7IExvYWRpbmdXaXRob3V0T3ZlcmxheSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZUNvbXBvbmVudHMvTG9hZGluZyc7XHJcbmltcG9ydCBDb21tYW5kRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9Db21tYW5kRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgQ3VzdG9tSWNvbiBmcm9tICcuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9JY29uJztcclxuaW1wb3J0IHsgZmFRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5jb25zdCBDaGFyV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRGVzY3JpcHRpb25CdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UuZGVza3RvcH0ge1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBuYW1lIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhuYW1lKTtcclxuICAgIGNvbnN0IHsgY2hhclByb3BzLCBsb2FkaW5nIH0gPSB1c2VEQkRhdGEoKTtcclxuICAgIGNvbnN0IHRlbXBEaXNwYXRjaCA9IHVzZURCRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RhYmxlSW5kZXgsIHNldFRhYmxlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIExvYWREYXRhKG5hbWUgYXMgc3RyaW5nLCB0ZW1wRGlzcGF0Y2gpO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICAgIH0sIFtuYW1lXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVzY3JpcHRpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oZmFsc2UpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUluZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRUYWJsZUluZGV4KGluZGV4KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDaGFyV3JhcD5cclxuICAgICAgICAgICAgPERlc2NyaXB0aW9uQnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERlc2NyaXB0aW9uKHRydWUpfT5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21JY29uIGljb249e2ZhUXVlc3Rpb25DaXJjbGV9IGNvbG9yPXtQYWxldHRlLmdyYXlfMX0gLz5cclxuICAgICAgICAgICAgPC9EZXNjcmlwdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8TG9hZGluZ1dpdGhvdXRPdmVybGF5IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tYW5kRGVzY3JpcHRpb24gZnVuYz17aGFuZGxlRGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5mbyBkYXRhPXtjaGFyUHJvcHM/LkluZm99IG5hbWU9e25hbWUgYXMgc3RyaW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y2hhclByb3BzIX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSW5kZXg9e3RhYmxlSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbmRleD17aGFuZGxlSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0NoYXJXcmFwPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXI7XHJcbiIsImltcG9ydCB7IEljb25EZWZpbml0aW9uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbnRlcmZhY2UgSWNvblByb3BzIHtcclxuICAgIGljb246IEljb25EZWZpbml0aW9uO1xyXG4gICAgY29sb3I/OiBzdHJpbmc7XHJcbiAgICBwb2ludGVyPzogYm9vbGVhbjtcclxuICAgIGhvdmVyY29sb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkKEZvbnRBd2Vzb21lSWNvbik8SWNvblByb3BzPmBcclxuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3IgfHwgJyNmZmZmZmYnfTtcclxuICAgIGN1cnNvcjogJHsocHJvcHMpID0+IHByb3BzLnBvaW50ZXIgJiYgJ3BvaW50ZXInfTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuaG92ZXJjb2xvcn07XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBDdXN0b21JY29uID0gKHByb3BzOiBJY29uUHJvcHMpID0+IHtcclxuICAgIHJldHVybiA8SWNvbldyYXBwZXIgey4uLnByb3BzfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ3VzdG9tSWNvbik7XHJcbiIsImNvbnN0IGNhbGNSZW0gPSAoc2l6ZTogbnVtYmVyKSA9PiBgJHtzaXplIC8gMTZ9cmVtYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb250U2l6ZSA9IHtcclxuICAgIHNtYWxsOiBjYWxjUmVtKDEyKSxcclxuICAgIGJpZzogY2FsY1JlbSgxNiksXHJcbiAgICBiYXNlOiBjYWxjUmVtKDE0KSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGb250Q29sb3IgPSB7XHJcbiAgICBibGFjazogJyMzMzMzMzMnLFxyXG4gICAgd2hpdGU6ICcjZmZmZmZmJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBCcmVha1BvaW50ID0ge1xyXG4gICAgbW9iaWxlOiAnNzIwcHgnLFxyXG4gICAgdGFibGV0OiAnNzY4cHgnLFxyXG4gICAgZGVza3RvcDogJzExNDBweCcsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRGV2aWNlID0ge1xyXG4gICAgbW9iaWxlOiBgKG1heC13aWR0aDogJHtCcmVha1BvaW50Lm1vYmlsZX0pYCxcclxuICAgIHRhYmxldDogYChtYXgtd2lkdGg6ICR7QnJlYWtQb2ludC50YWJsZXR9KWAsXHJcbiAgICBkZXNrdG9wOiBgKG1heC13aWR0aDogJHtCcmVha1BvaW50LmRlc2t0b3B9KWAsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUGFsZXR0ZSA9IHtcclxuICAgIGJsYWNrXzE6ICcjMjEyNTI5JyxcclxuICAgIGJsYWNrXzI6ICcjMzMzMzMzJyxcclxuICAgIHdoaXRlXzE6ICcjZmZmZmZmJyxcclxuICAgIHdoaXRlXzI6ICcjZWZlZmVmJyxcclxuICAgIGJvcmRlcl8xOiAnI2QxZDFkMScsXHJcbiAgICByZWRfMTogJyNmZjkzN2QnLFxyXG4gICAgcmVkXzI6ICcjYjM1NDQwJyxcclxuICAgIHJlZF8zOiAnI2IzM2EyMCcsXHJcbiAgICBncmVlbl8xOiAnI2IxZTM2ZicsXHJcbiAgICBncmVlbl8yOiAnIzkzYWQ3NCcsXHJcbiAgICBncmF5XzE6ICcjYzljOWM5JyxcclxuICAgIGdyYXlfMjogJyM4YThhOGEnLFxyXG4gICAgZ3JheV8zOiAnIzUyNTI1MicsXHJcbiAgICBvdmVybGF5OiAncmdiYSgwLCAwLCAwLCAwLjYpJyxcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IFRhYmxlT3JkZXI6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfSA9IHtcclxuICAgIHN0YW5kaW5nOiBbJ2ZyYW1lJywgJ2NvbW1hbmQnLCAnZGFtYWdlJywgJ3JhbmdlJywgJ2hpdGZyYW1lJywgJ3N0YXRlJ10sXHJcbiAgICB1cDogWydmcmFtZScsICdjb21tYW5kJywgJ2RhbWFnZScsICdyYW5nZScsICdoaXRmcmFtZScsICdzdGF0ZSddLFxyXG4gICAgVGhyb3c6IFsnY29tbWFuZCcsICdkYW1hZ2UnLCAnZnJhbWUnLCAnc3RhdGUnLCAnd2F5J10sXHJcbiAgICBjb21ibzogWydjb21tYW5kJywgJ3N0YXRlJ10sXHJcbiAgICBFeHRyYWhpdDogWydjb21tYW5kJywgJ3N0YXRlJ10sXHJcbiAgICBXYWxsQ29tYm86IFsnY29tbWFuZCcsICdzdGF0ZSddLFxyXG4gICAgTWFpbk1vdmU6IFtcclxuICAgICAgICAnY29tbWFuZCcsXHJcbiAgICAgICAgJ25pY2tuYW1lJyxcclxuICAgICAgICAnZGFtYWdlJyxcclxuICAgICAgICAnZnJhbWUnLFxyXG4gICAgICAgICdndWFyZGZyYW1lJyxcclxuICAgICAgICAnaGl0ZnJhbWUnLFxyXG4gICAgICAgICdyYW5nZScsXHJcbiAgICAgICAgJ3N0YXRlJyxcclxuICAgIF0sXHJcbiAgICBQYXR0ZXJuOiBbJ2NvbW1hbmQnLCAnc3RhdGUnLCAnd2luJ10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnkgPSBbXHJcbiAgICAnTWFpbk1vdmUnLFxyXG4gICAgJ3N0YW5kaW5nJyxcclxuICAgICd1cCcsXHJcbiAgICAnVGhyb3cnLFxyXG4gICAgJ2NvbWJvJyxcclxuICAgICdXYWxsQ29tYm8nLFxyXG4gICAgJ0V4dHJhaGl0JyxcclxuICAgICdQYXR0ZXJuJyxcclxuICAgICdJbmZvJyxcclxuXTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9pbWcvRnJhbWUxLmFjYTQ1YWI3MWM4ZjgxYjlkYzdhNWQ0ZTM3OGNjYmY4LnBuZ1wiLFwiaGVpZ2h0XCI6NDIwLFwid2lkdGhcIjo0MjAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVQwbEVRVlI0MmpXTUFRcUFNQXdEOS8vSEttNEtyaTJKaDJPRUh1R2dhZW5YNVVtS0ZtN2wyL1pGN0FQZGtoTGNZaGt4S0YxUVF5bEVSd3d0SGZ0RkVyUUs4WTgrZ2pvMWhVaVhRd0dud2g5K1puNFVWVnBJb1FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9pbWcvRnJhbWUyLmQ3ZWE5YzhmYzg2Njk4ODE1ZmNiYzJlYTQ5YmQxNTUxLnBuZ1wiLFwiaGVpZ2h0XCI6NDIwLFwid2lkdGhcIjo0MjAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FNQUFBRHowVTY1QUFBQVAxQk1WRVgvLy8vOC9QM3Y3Ky9zN2VQbjUrZm41K2JsNWVYVjFkWC8vLy84L1AzNit2cjYrdm52NysvdDdlVHM3ZVBuNStmbjUrYmw1ZVhlM3Q3ZDNkM1YxZFg0Q2tBNEFBQUFDSFJTVGxQKy92NysvdjcrL3JnQ3IyNEFBQUEvU1VSQlZIamFGY3BCRW9BZ0RBVEJGUVFuRUlVZy8zK3JaWjlicnhPQkwvbG1EcllMbWxrRHhiQjhIMmRWVE11UGxSRDB3N3I0Y3htNmtwWlRnN1ErWlRrQ21mYTh4WmNBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9