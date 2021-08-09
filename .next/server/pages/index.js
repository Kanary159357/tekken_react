(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/PageComponents/ContactForm.tsx":
/*!***************************************************!*\
  !*** ./components/PageComponents/ContactForm.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _styles_components_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/components/Icon */ "./styles/components/Icon.tsx");

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\PageComponents\\ContactForm.tsx";




const Form = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    margin-left: auto;
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.tablet} {
        margin-top: 30px;
        width: 100%;
        height: 300px;
        flex-direction: row;
    }
`;
const FormItem = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    width: 125px;
    height: 150px;
    cursor: pointer;
    div {
        box-shadow: 3px 4px 2px -2px #b8b8b8;
        width: 100px;
        height: 100px;
        background: ${props => props.color ? props.color : _styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.red_1};
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.1s ease-in-out;
        font-size: 40px;
    }
    div:hover {
        transform: scale(1.01);
    }
    p {
        padding-left: 10px;
    }
    a {
        &,
        &:visited,
        &:active {
            text-decoration: none;
            color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.FontColor.black};
        }
    }
`;

const ContactForm = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormItem, {
      color: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.red_1,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://forms.gle/Dz5QWXdzrskYXJjm7",
        target: "_blank",
        rel: "noreferrer",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_4__.default, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faBug
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\uBC84\uADF8\uB9AC\uD3EC\uD2B8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormItem, {
      color: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.green_1,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://forms.gle/ZRnAUuoNbMiGjZu8A",
        target: "_blank",
        rel: "noreferrer",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_4__.default, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faBullhorn
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\uAC74\uC758\uC0AC\uD56D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormItem, {
      color: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.gray_1,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "mailto:ddasfasd123@gmail.com",
        target: "_blank",
        rel: "noreferrer",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_4__.default, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faEnvelope
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\uC815\uBCF4 \uBCF5\uAD6C \uBC0F \uAE30\uD0C0 \uBB38\uC758"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./components/PageComponents/PatchNote.tsx":
/*!*************************************************!*\
  !*** ./components/PageComponents/PatchNote.tsx ***!
  \*************************************************/
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

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\PageComponents\\PatchNote.tsx";



const PatchItemBox = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
    padding: 10px;
    width: 100%;
`;
const PatchDate = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)``;
const PatchContent = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
    overflow-wrap: break-word;
    width: 100%;
`;

const PatchItem = ({
  content
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PatchItemBox, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PatchDate, {
      children: content.date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PatchContent, {
      children: content.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined);
};

const PatchMonthBox = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
    width: 500px;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.tablet} {
        width: 90%;
    }
    .month {
        font-size: 20px;
    }
    .contents {
        opacity: ${props => props.toggle ? 1 : 0};
        height: ${props => props.toggle ? 'auto' : '0'};
        overflow: hidden;
        transition: all 1s ease-out;
    }
`;

const PatchMonth = ({
  item
}) => {
  const [month, contents] = item;
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PatchMonthBox, {
    toggle: toggle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "month",
      onClick: () => setToggle(!toggle),
      children: month
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "contents",
      children: contents.map((content, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PatchItem, {
          content: content
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, undefined);
};

const PatchNoteWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
    width: 80%;
    margin: 0 auto;
`;
const PatchList = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const PatchHeader = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
    font-size: 30px;
`;
const Notes = {
  '2021-7': [{
    date: '~2021-07-13',
    content: '개행 가능하게 수정, 파쿰람 무한 로딩 수정, 모바일뷰 가독성 개선 '
  }, {
    date: '2021-07-24',
    content: '관련 캐릭 링크 클릭 불가능한 버그 수정'
  }]
};

const PatchNote = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PatchNoteWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PatchHeader, {
      children: "\uD328\uCE58\uB178\uD2B8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PatchList, {
      children: Object.entries(Notes).map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PatchMonth, {
          item: item
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 28
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PatchNote);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _components_PageComponents_PatchNote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PageComponents/PatchNote */ "./components/PageComponents/PatchNote.tsx");
/* harmony import */ var _components_PageComponents_ContactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PageComponents/ContactForm */ "./components/PageComponents/ContactForm.tsx");

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\pages\\index.tsx";





const HomeWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.tablet} {
        height: auto;
    }
`;
const Head = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    width: 100%;
    height: 300px;
    text-align: center;
    background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Palette.black_2};
    top: 0;
`;
const MainHead = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    font-size: 50px;
    padding-top: 100px;
    font-weight: 900;
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.FontColor.white};
`;
const SubHead = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().p)`
    color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.FontColor.white};
    padding-top: 40px;
    font-size: 20px;
    margin: 0;
`;
const Content = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    width: 100%;
    background-color: #fff;
    display: flex;
    margin-top: 50px;
    justify-content: space-around;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.tablet} {
        margin-top: 50px;
        flex-direction: column;
    }
`;
const ContentWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    width: calc(100% - 200px);
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Device.tablet} {
        width: 100%;
    }
`;

const Index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HomeWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Head, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainHead, {
        children: "6N23RP"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubHead, {
        children: "Tekken 7 FR Information"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageComponents_PatchNote__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageComponents_ContactForm__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL0NvbnRhY3RGb3JtLnRzeCIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL1BhdGNoTm90ZS50c3giLCJ3ZWJwYWNrOi8vdGVra2VuX3JlYWN0Ly4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL3N0eWxlcy9jb21wb25lbnRzL0ljb24udHN4Iiwid2VicGFjazovL3Rla2tlbl9yZWFjdC8uL3N0eWxlcy90aGVtZS50cyIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly90ZWtrZW5fcmVhY3QvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Rla2tlbl9yZWFjdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3Rla2tlbl9yZWFjdC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiRm9ybSIsInN0eWxlZCIsIkRldmljZSIsIkZvcm1JdGVtIiwicHJvcHMiLCJjb2xvciIsIlBhbGV0dGUiLCJGb250Q29sb3IiLCJDb250YWN0Rm9ybSIsImZhQnVnIiwiZmFCdWxsaG9ybiIsImZhRW52ZWxvcGUiLCJQYXRjaEl0ZW1Cb3giLCJQYXRjaERhdGUiLCJQYXRjaENvbnRlbnQiLCJQYXRjaEl0ZW0iLCJjb250ZW50IiwiZGF0ZSIsIlBhdGNoTW9udGhCb3giLCJ0b2dnbGUiLCJQYXRjaE1vbnRoIiwiaXRlbSIsIm1vbnRoIiwiY29udGVudHMiLCJzZXRUb2dnbGUiLCJ1c2VTdGF0ZSIsIm1hcCIsImluZGV4IiwiUGF0Y2hOb3RlV3JhcHBlciIsIlBhdGNoTGlzdCIsIlBhdGNoSGVhZGVyIiwiTm90ZXMiLCJQYXRjaE5vdGUiLCJPYmplY3QiLCJlbnRyaWVzIiwiSG9tZVdyYXBwZXIiLCJIZWFkIiwiTWFpbkhlYWQiLCJTdWJIZWFkIiwiQ29udGVudCIsIkNvbnRlbnRXcmFwcGVyIiwiSW5kZXgiLCJJY29uV3JhcHBlciIsIkZvbnRBd2Vzb21lSWNvbiIsInBvaW50ZXIiLCJob3ZlcmNvbG9yIiwiQ3VzdG9tSWNvbiIsIlJlYWN0IiwiY2FsY1JlbSIsInNpemUiLCJGb250U2l6ZSIsInNtYWxsIiwiYmlnIiwiYmFzZSIsImJsYWNrIiwid2hpdGUiLCJCcmVha1BvaW50IiwibW9iaWxlIiwidGFibGV0IiwiZGVza3RvcCIsImJsYWNrXzEiLCJibGFja18yIiwid2hpdGVfMSIsIndoaXRlXzIiLCJib3JkZXJfMSIsInJlZF8xIiwicmVkXzIiLCJyZWRfMyIsImdyZWVuXzEiLCJncmVlbl8yIiwiZ3JheV8xIiwiZ3JheV8yIiwiZ3JheV8zIiwib3ZlcmxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLDhEQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYUMsd0RBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZEE7QUFnQkEsTUFBTUMsUUFBUSxHQUFHRiw4REFBK0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBdUJHLEtBQUQsSUFBWUEsS0FBSyxDQUFDQyxLQUFOLEdBQWNELEtBQUssQ0FBQ0MsS0FBcEIsR0FBNEJDLHdEQUFlO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQkMs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Ozs7O0FDekJQLCtEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIGZhRW52ZWxvcGUsXHJcbiAgICBmYUJ1ZyxcclxuICAgIGZhQnVsbGhvcm4sXHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFBhbGV0dGUsIEZvbnRDb2xvciwgRGV2aWNlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IEN1c3RvbUljb24gZnJvbSAnLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvSWNvbic7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UudGFibGV0fSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtSXRlbSA9IHN0eWxlZC5kaXY8eyBjb2xvcj86IHN0cmluZyB9PmBcclxuICAgIHdpZHRoOiAxMjVweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXYge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDNweCA0cHggMnB4IC0ycHggI2I4YjhiODtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gKHByb3BzLmNvbG9yID8gcHJvcHMuY29sb3IgOiBQYWxldHRlLnJlZF8xKX07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgZGl2OmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgICAgJixcclxuICAgICAgICAmOnZpc2l0ZWQsXHJcbiAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke0ZvbnRDb2xvci5ibGFja307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8Rm9ybUl0ZW0gY29sb3I9e1BhbGV0dGUucmVkXzF9PlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb3Jtcy5nbGUvRHo1UVdYZHpyc2tZWEpqbTdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUljb24gaWNvbj17ZmFCdWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+67KE6re466as7Y+s7Yq4PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0Zvcm1JdGVtPlxyXG4gICAgICAgICAgICA8Rm9ybUl0ZW0gY29sb3I9e1BhbGV0dGUuZ3JlZW5fMX0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Zvcm1zLmdsZS9aUm5BVXVvTmJNaUdqWnU4QVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tSWNvbiBpY29uPXtmYUJ1bGxob3JufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPuqxtOydmOyCrO2VrTwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9Gb3JtSXRlbT5cclxuICAgICAgICAgICAgPEZvcm1JdGVtIGNvbG9yPXtQYWxldHRlLmdyYXlfMX0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86ZGRhc2Zhc2QxMjNAZ21haWwuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21JY29uIGljb249e2ZhRW52ZWxvcGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+7KCV67O0IOuzteq1rCDrsI8g6riw7YOAIOusuOydmDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9Gb3JtSXRlbT5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERldmljZSB9IGZyb20gJy4uLy4uL3N0eWxlcy90aGVtZSc7XHJcbmNvbnN0IFBhdGNoSXRlbUJveCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBQYXRjaERhdGUgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG5jb25zdCBQYXRjaENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgUGF0Y2hJdGVtID0gKHsgY29udGVudCB9OiB7IGNvbnRlbnQ6IFBhdGNoSW50ZXJmYWNlIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBhdGNoSXRlbUJveD5cclxuICAgICAgICAgICAgPFBhdGNoRGF0ZT57Y29udGVudC5kYXRlfTwvUGF0Y2hEYXRlPlxyXG4gICAgICAgICAgICA8UGF0Y2hDb250ZW50Pntjb250ZW50LmNvbnRlbnR9PC9QYXRjaENvbnRlbnQ+XHJcbiAgICAgICAgPC9QYXRjaEl0ZW1Cb3g+XHJcbiAgICApO1xyXG59O1xyXG5jb25zdCBQYXRjaE1vbnRoQm94ID0gc3R5bGVkLmRpdjx7IHRvZ2dsZTogYm9vbGVhbiB9PmBcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIEBtZWRpYSAke0RldmljZS50YWJsZXR9IHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLm1vbnRoIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudHMge1xyXG4gICAgICAgIG9wYWNpdHk6ICR7KHByb3BzKSA9PiAocHJvcHMudG9nZ2xlID8gMSA6IDApfTtcclxuICAgICAgICBoZWlnaHQ6ICR7KHByb3BzKSA9PiAocHJvcHMudG9nZ2xlID8gJ2F1dG8nIDogJzAnKX07XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBQYXRjaE1vbnRoID0gKHtcclxuICAgIGl0ZW0sXHJcbn06IHtcclxuICAgIGl0ZW06IFttb250aDogc3RyaW5nLCBjb250ZW50czogUGF0Y2hJbnRlcmZhY2VbXV07XHJcbn0pID0+IHtcclxuICAgIGNvbnN0IFttb250aCwgY29udGVudHNdID0gaXRlbTtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQYXRjaE1vbnRoQm94IHRvZ2dsZT17dG9nZ2xlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb250aFwiIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSghdG9nZ2xlKX0+XHJcbiAgICAgICAgICAgICAgICB7bW9udGh9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRzXCI+XHJcbiAgICAgICAgICAgICAgICB7Y29udGVudHMubWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXRjaEl0ZW0gY29udGVudD17Y29udGVudH0ga2V5PXtpbmRleH0+PC9QYXRjaEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BhdGNoTW9udGhCb3g+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgUGF0Y2hOb3RlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbmA7XHJcblxyXG5jb25zdCBQYXRjaExpc3QgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcbmNvbnN0IFBhdGNoSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuYDtcclxuXHJcbmNvbnN0IE5vdGVzOiBSZWNvcmQ8c3RyaW5nLCBQYXRjaEludGVyZmFjZVtdPiA9IHtcclxuICAgICcyMDIxLTcnOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRlOiAnfjIwMjEtMDctMTMnLFxyXG4gICAgICAgICAgICBjb250ZW50OlxyXG4gICAgICAgICAgICAgICAgJ+qwnO2WiSDqsIDriqXtlZjqsowg7IiY7KCVLCDtjIzsv7Drnowg66y07ZWcIOuhnOuUqSDsiJjsoJUsIOuqqOuwlOydvOu3sCDqsIDrj4XshLEg6rCc7ISgICcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGU6ICcyMDIxLTA3LTI0JyxcclxuICAgICAgICAgICAgY29udGVudDogJ+q0gOugqCDsupDrpq0g66eB7YGsIO2BtOumrSDrtojqsIDriqXtlZwg67KE6re4IOyImOyglScsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5pbnRlcmZhY2UgUGF0Y2hJbnRlcmZhY2Uge1xyXG4gICAgZGF0ZTogc3RyaW5nO1xyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBQYXRjaE5vdGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQYXRjaE5vdGVXcmFwcGVyPlxyXG4gICAgICAgICAgICA8UGF0Y2hIZWFkZXI+7Yyo7LmY64W47Yq4PC9QYXRjaEhlYWRlcj5cclxuICAgICAgICAgICAgPFBhdGNoTGlzdD5cclxuICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhOb3RlcykubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8UGF0Y2hNb250aCBrZXk9e2luZGV4fSBpdGVtPXtpdGVtfSAvPjtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1BhdGNoTGlzdD5cclxuICAgICAgICA8L1BhdGNoTm90ZVdyYXBwZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0Y2hOb3RlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgUGFsZXR0ZSwgRm9udENvbG9yLCBEZXZpY2UgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xyXG5cclxuaW1wb3J0IFBhdGNoTm90ZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL1BhdGNoTm90ZSc7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL0NvbnRhY3RGb3JtJztcclxuXHJcbmNvbnN0IEhvbWVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgQG1lZGlhICR7RGV2aWNlLnRhYmxldH0ge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYWQgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogJHtQYWxldHRlLmJsYWNrXzJ9O1xyXG4gICAgdG9wOiAwO1xyXG5gO1xyXG5jb25zdCBNYWluSGVhZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6ICR7Rm9udENvbG9yLndoaXRlfTtcclxuYDtcclxuXHJcbmNvbnN0IFN1YkhlYWQgPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiAke0ZvbnRDb2xvci53aGl0ZX07XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMDtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIEBtZWRpYSAke0RldmljZS50YWJsZXR9IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xyXG4gICAgQG1lZGlhICR7RGV2aWNlLnRhYmxldH0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIb21lV3JhcHBlcj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8TWFpbkhlYWQ+Nk4yM1JQPC9NYWluSGVhZD5cclxuICAgICAgICAgICAgICAgIDxTdWJIZWFkPlRla2tlbiA3IEZSIEluZm9ybWF0aW9uPC9TdWJIZWFkPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKjxTaXRlRGVzY3JpcHRpb24gLz4qL31cclxuICAgICAgICAgICAgICAgICAgICA8UGF0Y2hOb3RlIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIC8+XHJcbiAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICA8L0hvbWVXcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJpbXBvcnQgeyBJY29uRGVmaW5pdGlvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW50ZXJmYWNlIEljb25Qcm9wcyB7XHJcbiAgICBpY29uOiBJY29uRGVmaW5pdGlvbjtcclxuICAgIGNvbG9yPzogc3RyaW5nO1xyXG4gICAgcG9pbnRlcj86IGJvb2xlYW47XHJcbiAgICBob3ZlcmNvbG9yPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZChGb250QXdlc29tZUljb24pPEljb25Qcm9wcz5gXHJcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yIHx8ICcjZmZmZmZmJ307XHJcbiAgICBjdXJzb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5wb2ludGVyICYmICdwb2ludGVyJ307XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmhvdmVyY29sb3J9O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ3VzdG9tSWNvbiA9IChwcm9wczogSWNvblByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPEljb25XcmFwcGVyIHsuLi5wcm9wc30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEN1c3RvbUljb24pO1xyXG4iLCJjb25zdCBjYWxjUmVtID0gKHNpemU6IG51bWJlcikgPT4gYCR7c2l6ZSAvIDE2fXJlbWA7XHJcblxyXG5leHBvcnQgY29uc3QgRm9udFNpemUgPSB7XHJcbiAgICBzbWFsbDogY2FsY1JlbSgxMiksXHJcbiAgICBiaWc6IGNhbGNSZW0oMTYpLFxyXG4gICAgYmFzZTogY2FsY1JlbSgxNCksXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRm9udENvbG9yID0ge1xyXG4gICAgYmxhY2s6ICcjMzMzMzMzJyxcclxuICAgIHdoaXRlOiAnI2ZmZmZmZicsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQnJlYWtQb2ludCA9IHtcclxuICAgIG1vYmlsZTogJzcyMHB4JyxcclxuICAgIHRhYmxldDogJzc2OHB4JyxcclxuICAgIGRlc2t0b3A6ICcxMTQwcHgnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERldmljZSA9IHtcclxuICAgIG1vYmlsZTogYChtYXgtd2lkdGg6ICR7QnJlYWtQb2ludC5tb2JpbGV9KWAsXHJcbiAgICB0YWJsZXQ6IGAobWF4LXdpZHRoOiAke0JyZWFrUG9pbnQudGFibGV0fSlgLFxyXG4gICAgZGVza3RvcDogYChtYXgtd2lkdGg6ICR7QnJlYWtQb2ludC5kZXNrdG9wfSlgLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhbGV0dGUgPSB7XHJcbiAgICBibGFja18xOiAnIzIxMjUyOScsXHJcbiAgICBibGFja18yOiAnIzMzMzMzMycsXHJcbiAgICB3aGl0ZV8xOiAnI2ZmZmZmZicsXHJcbiAgICB3aGl0ZV8yOiAnI2VmZWZlZicsXHJcbiAgICBib3JkZXJfMTogJyNkMWQxZDEnLFxyXG4gICAgcmVkXzE6ICcjZmY5MzdkJyxcclxuICAgIHJlZF8yOiAnI2IzNTQ0MCcsXHJcbiAgICByZWRfMzogJyNiMzNhMjAnLFxyXG4gICAgZ3JlZW5fMTogJyNiMWUzNmYnLFxyXG4gICAgZ3JlZW5fMjogJyM5M2FkNzQnLFxyXG4gICAgZ3JheV8xOiAnI2M5YzljOScsXHJcbiAgICBncmF5XzI6ICcjOGE4YThhJyxcclxuICAgIGdyYXlfMzogJyM1MjUyNTInLFxyXG4gICAgb3ZlcmxheTogJ3JnYmEoMCwgMCwgMCwgMC42KScsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==