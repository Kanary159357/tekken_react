self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_DBContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/DBContext */ "./context/DBContext.tsx");
/* harmony import */ var _context_DBContextFunc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/DBContextFunc */ "./context/DBContextFunc.ts");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\pages\\char.tsx",
    _s = $RefreshSig$();







const CharWrap = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_5__.Device.desktop} {
        flex-direction: column;
    }
`;
_c = CharWrap;
const DescriptionButton = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div`
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 30px;
    cursor: pointer;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_5__.Device.desktop} {
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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_context_DBContextFunc__WEBPACK_IMPORTED_MODULE_4__.LoadData)(charName, tempDispatch); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charName]);
  const handleDescription = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setDescription(false);
  }, []);
  const handleIndex = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(index => {
    setTableIndex(index);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CharWrap, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, undefined);
};

_s(Char, "rVBgXw3nkV3KJjFkHv4CdP8ehv4=", false, function () {
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

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9EQkNvbnRleHRGdW5jLnRzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL1RhYmxlT3JkZXIudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcyJdLCJuYW1lcyI6WyJMb2FkRGF0YSIsImNoYXIiLCJkaXNwYXRjaCIsInNvcnRieUtleSIsImEiLCJiIiwiaGFzT3duUHJvcGVydHkiLCJwYXJzZUludCIsInNvcnRieUNvdW50ZXIiLCJhdiIsImluY2x1ZGVzIiwiYnYiLCJvcmRlciIsImFyciIsImNhdGVnb3J5Iiwib3JkZXJCeUNvbnRlbnQiLCJUYWJsZU9yZGVyIiwiaW5kZXhPZiIsIm1hcCIsImN1ciIsIk9iamVjdCIsImtleXMiLCJzb3J0IiwicmVkdWNlIiwib2JqIiwia2V5IiwidHlwZSIsImRhdGEiLCJkYiIsImRvYyIsImdldCIsInRoZW4iLCJzbmFwIiwibmV3T2JqIiwiYWNjIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJlcnIiLCJlcnJvciIsIlVwZGF0ZUhpc3RvcnkiLCJ1aWQiLCJoaXN0b3J5IiwidGltZSIsImZpcmViYXNlIiwiRGF0ZSIsImRvY3VtZW50IiwiZXhpc3RzIiwicmVmIiwidXBkYXRlIiwic2V0IiwiQWRkRnVuYyIsInRhZyIsImFsZXJ0IiwiRGVsZXRlRnVuYyIsIlVwZGF0ZUNoYXJzRnVuYyIsIlVwZGF0ZVByb3BzRnVuYyIsImlkIiwibmV3RGF0YSIsImRvY3VtZW50cyIsImZvckVhY2giLCJwcm9wZXJ0eSIsIlJlbmFtZSIsIkFkZE5ld0NoYXJhY3RlciIsIm5hbWUiLCJpdGVtIiwiQWRkTmV3UHJvcHMiLCJBZGREYXRhIiwiRGVsZXRlRGF0YSIsIkVkaXREYXRhIiwib2xkIiwiQWRkUHJvcGVydHkiLCJSZW1vdmVQcm9wZXJ0eSIsImZpbHRlciIsIldyYXBwZXIiLCJzdHlsZWQiLCJQYWdlQ29udGVudCIsIkRldmljZSIsIk1lbnVCdXR0b25CbG9jayIsIkN1c3RvbUljb24iLCJPdmVybGF5IiwiUGFsZXR0ZSIsInByb3BzIiwidG9nZ2xlIiwiQXBwIiwic2V0VG9nZ2xlIiwidXNlU3RhdGUiLCJoYW5kbGVUb2dnbGUiLCJ1c2VDYWxsYmFjayIsImZhVGltZXMiLCJmYUJhcnMiLCJDaGFyV3JhcCIsIkRlc2NyaXB0aW9uQnV0dG9uIiwiQ2hhciIsInJvdXRlciIsInVzZVJvdXRlciIsImNoYXJOYW1lIiwicXVlcnkiLCJjaGFyUHJvcHMiLCJsb2FkaW5nIiwidXNlREJEYXRhIiwidGVtcERpc3BhdGNoIiwidXNlREJEaXNwYXRjaCIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJ0YWJsZUluZGV4Iiwic2V0VGFibGVJbmRleCIsInVzZUVmZmVjdCIsImhhbmRsZURlc2NyaXB0aW9uIiwiaGFuZGxlSW5kZXgiLCJpbmRleCIsInN0YW5kaW5nIiwidXAiLCJUaHJvdyIsImNvbWJvIiwiRXh0cmFoaXQiLCJXYWxsQ29tYm8iLCJNYWluTW92ZSIsIlBhdHRlcm4iLCJDYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDTyxlQUFlQSxRQUFmLENBQXdCQyxJQUF4QixFQUFzQ0MsUUFBdEMsRUFBK0Q7QUFDbEUsUUFBTUMsU0FBUyxHQUFHLENBQUNDLENBQUQsRUFBU0MsQ0FBVCxLQUFvQjtBQUNsQyxRQUFJRCxDQUFDLENBQUNFLGNBQUYsQ0FBaUIsT0FBakIsS0FBNkJELENBQUMsQ0FBQ0MsY0FBRixDQUFpQixPQUFqQixDQUFqQyxFQUE0RDtBQUN4RCxVQUFJRixDQUFDLENBQUMsT0FBRCxDQUFELEtBQWVDLENBQUMsQ0FBQyxPQUFELENBQXBCLEVBQStCO0FBQzNCLGVBQU9ELENBQUMsQ0FBQyxTQUFELENBQUQsR0FBZUMs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LE9BUk0sQ0FQeUM7QUFpQm5EQyxTQUFPLEVBQUUsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixLQUFyQjtBQWpCMEMsQ0FBaEQ7QUFvQkEsTUFBTUMsUUFBUSxHQUFHLENBQ3BCLFVBRG9CLEVBRXBCLFVBRm9CLEVBR3BCLElBSG9CLEVBSXBCLE9BSm9CLEVBS3BCLE9BTG9CLEVBTXBCLFdBTm9CLEVBT3BCLFVBUG9CLEVBUXBCLFNBUm9CLEVBU3BCLE1BVG9CLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQlAsNkdBQWdEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE5MjlhY2ZjMWY4MDk3NjJjNGE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnLi4vZmlyZWJhc2VJbml0JztcclxuaW1wb3J0IHsgQ2hhclByb3BzIH0gZnJvbSAnLi4vdHlwZXMvQ2hhclByb3BzJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuaW1wb3J0IHsgU3RhdGVEaXNwYXRjaCB9IGZyb20gJy4vREJDb250ZXh0JztcclxuaW1wb3J0IHsgVGFibGVPcmRlciB9IGZyb20gJy4uL3V0aWxzL1RhYmxlT3JkZXInO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gTG9hZERhdGEoY2hhcjogc3RyaW5nLCBkaXNwYXRjaDogU3RhdGVEaXNwYXRjaCkge1xyXG4gICAgY29uc3Qgc29ydGJ5S2V5ID0gKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoJ2ZyYW1lJykgJiYgYi5oYXNPd25Qcm9wZXJ0eSgnZnJhbWUnKSkge1xyXG4gICAgICAgICAgICBpZiAoYVsnZnJhbWUnXSA9PT0gYlsnZnJhbWUnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbJ2NvbW1hbmQnXSA8IGJbJ2NvbW1hbmQnXSA/IC0xIDogMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChhWydmcmFtZSddKSA8IHBhcnNlSW50KGJbJ2ZyYW1lJ10pID8gLTEgOiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFbJ2NvbW1hbmQnXSA8IGJbJ2NvbW1hbmQnXSA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNvcnRieUNvdW50ZXIgPSAoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBhdiA9IGFbJ2NvbW1hbmQnXS5pbmNsdWRlcygnKEMpJyk7XHJcbiAgICAgICAgY29uc3QgYnYgPSBiWydjb21tYW5kJ10uaW5jbHVkZXMoJyhDKScpO1xyXG4gICAgICAgIGlmIChhdiA9PT0gYnYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFbJ2NvbW1hbmQnXSA8IGJbJ2NvbW1hbmQnXSA/IC0xIDogMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGF2ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9yZGVyID0gKGFycjogYW55W10sIGNhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBvcmRlckJ5Q29udGVudCA9IChjYXRlZ29yeTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyID0gVGFibGVPcmRlcltjYXRlZ29yeV07XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYTogYW55LCBiOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcmRlci5pbmRleE9mKGEpIC0gb3JkZXIuaW5kZXhPZihiKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBhcnIubWFwKChjdXI6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pID0+XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGN1cilcclxuICAgICAgICAgICAgICAgIC5zb3J0KG9yZGVyQnlDb250ZW50KGNhdGVnb3J5KSlcclxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKG9iajogYW55LCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gY3VyW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgICAgIH0sIHt9KVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPQURJTkcnIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ0NoYXJhY3RlcicpXHJcbiAgICAgICAgICAgIC5kb2MoY2hhcilcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKChzbmFwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25hcC5kYXRhKCkgYXMgQ2hhclByb3BzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBuZXdPYmogPSBPYmplY3Qua2V5cyhkYXRhKS5yZWR1Y2UoKGFjYzogYW55LCBjdXI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY3VyID09PSAnSW5mbycpIHtcclxuICAgICAgICAgICAgICAgIGFjY1tjdXJdID0gZGF0YVtjdXJdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0V4dHJhaGl0JyxcclxuICAgICAgICAgICAgICAgICAgICAnY29tYm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdXYWxsQ29tYm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXR0ZXJuJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWFpbk1vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaHJvdycsXHJcbiAgICAgICAgICAgICAgICBdLmluY2x1ZGVzKGN1cilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBhY2NbY3VyXSA9IG9yZGVyKGRhdGFbY3VyXSwgY3VyKS5zb3J0KHNvcnRieUNvdW50ZXIpOyAvLyDslYztjIzrsrPsiJwg7Lm07Jq07YSw7IicXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoWydzdGFuZGluZycsICd1cCddLmluY2x1ZGVzKGN1cikpIHtcclxuICAgICAgICAgICAgICAgIGFjY1tjdXJdID0gb3JkZXIoZGF0YVtjdXJdLCBjdXIpLnNvcnQoc29ydGJ5S2V5KTsgLy/tlITroIjsnoTsiJxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhWydjb21ibyddKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdPYmpbJ2NvbWJvJ10pO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPQURFRCcsIHBheWxvYWQ6IG5ld09iaiB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnRVJST1InLCBlcnJvcjogZXJyIH0pO1xyXG4gICAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIFVwZGF0ZUhpc3RvcnkoXHJcbiAgICBjaGFyOiBzdHJpbmcsXHJcbiAgICBkYXRhOiBPYmplY3QsXHJcbiAgICB1aWQ6IHN0cmluZyxcclxuICAgIHR5cGU6IHN0cmluZ1xyXG4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IHtcclxuICAgICAgICAgICAgY2hhcjogY2hhcixcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgdGltZTogZmlyZWJhc2UuZmlyZXN0b3JlLlRpbWVzdGFtcC5mcm9tRGF0ZShuZXcgRGF0ZSgpKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50ID0gYXdhaXQgZGIuY29sbGVjdGlvbignVXNlcicpLmRvYyh1aWQpLmdldCgpO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5leGlzdHMgJiYgZG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgYXdhaXQgZG9jdW1lbnQucmVmLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBbdHlwZV06IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLmFycmF5VW5pb24oaGlzdG9yeSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRiXHJcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbignVXNlcicpXHJcbiAgICAgICAgICAgICAgICAuZG9jKHVpZClcclxuICAgICAgICAgICAgICAgIC5zZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIFt0eXBlXTogW2hpc3RvcnldLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+ycoOyggCDtnojsiqTthqDrpqwg7JeF642w7J207Yq4IOyLpO2MqCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBZGRGdW5jKGNoYXI6IHN0cmluZywgZGF0YTogT2JqZWN0LCB0YWc6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbignQ2hhcmFjdGVyJylcclxuICAgICAgICAgICAgLmRvYyhjaGFyKVxyXG4gICAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIFt0YWddOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5hcnJheVVuaW9uKGRhdGEpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGFsZXJ0KCfsoJXrs7Trpbwg7LaU6rCA7ZWY64qU642wIOyLpO2MqO2WiOyKteuLiOuLpCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfsl5Drn6zsoJXrs7QgJyArIGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZUZ1bmMoY2hhcjogc3RyaW5nLCBkYXRhOiBPYmplY3QsIHRhZzogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdDaGFyYWN0ZXInKVxyXG4gICAgICAgICAgICAuZG9jKGNoYXIpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgW3RhZ106IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLmFycmF5UmVtb3ZlKGRhdGEpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGFsZXJ0KCfsoJXrs7Trpbwg7IKt7KCc7ZWY64qU642wIOyLpO2MqO2WiOyKteuLiOuLpCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfsl5Drn6zsoJXrs7QgJyArIGVycik7XHJcbiAgICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gVXBkYXRlQ2hhcnNGdW5jKG9yZGVyOiBhbnksIGNhdGVnb3J5OiBzdHJpbmcpIHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIFVwZGF0ZVByb3BzRnVuYyhvcmRlcjogYW55LCBpZDogc3RyaW5nLCBjYXRlZ29yeTogc3RyaW5nKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiXHJcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbignQ2hhcmFjdGVyJylcclxuICAgICAgICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgICAgIC50aGVuKChzbmFwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuYXAuZGF0YSgpIGFzIENoYXJQcm9wcztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gb3JkZXIoZGF0YVtjYXRlZ29yeV0pO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGJcclxuICAgICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbignQ2hhcmFjdGVyJylcclxuICAgICAgICAgICAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2F0ZWdvcnldOiBuZXdEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGlkICsgJ+ydmCDsoJXrs7Trpbwg67Cb7JWE7Jik64qU642wIOyLpO2MqO2WiOyKteuLiOuLpCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+yXkOufrCDsoJXrs7QnICsgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydChpZCArICfsnZgg7KCV67O066W8IOyXheuNsOydtO2KuO2VmOuKlOuNsCDsi6TtjKjtlojsirXri4jri6QnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+yXkOufrCDsoJXrs7QnICsgZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdDaGFyYWN0ZXInKS5nZXQoKTtcclxuICAgICAgICBkb2N1bWVudHMuZm9yRWFjaCgoZG9jdW1lbnQpID0+IHtcclxuICAgICAgICAgICAgVXBkYXRlUHJvcHNGdW5jKG9yZGVyLCBkb2N1bWVudC5pZCwgY2F0ZWdvcnkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoJ+y6kOumre2EsOuTpOydmCDsoJXrs7Trpbwg67Cb7JWE7Jik64qU642wIOyLpO2MqO2WiOyKteuLiOuLpCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfsl5Drn6wg7KCV67O0JyArIGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFVwZGF0ZVByb3BzRnVuYyhpZDogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRiXHJcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbignQ2hhcmFjdGVyJylcclxuICAgICAgICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBbcHJvcGVydHldOiBbXSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydChpZCArICfsnZgg7KCV67O066W8IOuwm+yVhOyYpOuKlOuNsCDsi6TtjKjtlojsirXri4jri6QnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+yXkOufrCDsoJXrs7QnICsgZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBhbGVydChpZCArICfsnZgg7KCV67O066W8IOyXheuNsOydtO2KuO2VmOuKlOuNsCDsi6TtjKjtlojsirXri4jri6QnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygn7JeQ65+sIOygleuztCcgKyBlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUmVuYW1lKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oJ0NoYXJhY3RlcicpXHJcbiAgICAgICAgLmRvYygnQ2xhZGlvJylcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoc25hcCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc25hcC5kYXRhKCkgYXMgQ2hhclByb3BzO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ0NoYXJhY3RlcicpLmRvYygnQ2xhdWRpbycpLnNldChkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEFkZE5ld0NoYXJhY3RlcigpIHtcclxuICAgIGNvbnN0IG5hbWUgPSAnTGVyb3knO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdDaGFyYWN0ZXInKS5kb2MobmFtZSkuc2V0KHt9KTtcclxuICAgICAgICBjb25zdCBhcnIgPSBbXHJcbiAgICAgICAgICAgICdNYWluTW92ZScsXHJcbiAgICAgICAgICAgICdzdGFuZGluZycsXHJcbiAgICAgICAgICAgICd1cCcsXHJcbiAgICAgICAgICAgICdUaHJvdycsXHJcbiAgICAgICAgICAgICdjb21ibycsXHJcbiAgICAgICAgICAgICdXYWxsQ29tYm8nLFxyXG4gICAgICAgICAgICAnRXh0cmFoaXQnLFxyXG4gICAgICAgICAgICAnUGF0dGVybicsXHJcbiAgICAgICAgICAgICdJbmZvJyxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIFVwZGF0ZVByb3BzRnVuYyhuYW1lLCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGFsZXJ0KCfsi6TtjKgnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEFkZE5ld1Byb3BzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdDaGFyYWN0ZXInKS5nZXQoKTtcclxuICAgICAgICBkb2N1bWVudHMuZm9yRWFjaCgoZG9jdW1lbnQpID0+IHtcclxuICAgICAgICAgICAgVXBkYXRlUHJvcHNGdW5jKGRvY3VtZW50LmlkLCAnTWFpbk1vdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGFsZXJ0KCfsupDrpq3thLDrk6TsnZgg7KCV67O066W8IOuwm+yVhOyYpOuKlOuNsCDsi6TtjKjtlojsirXri4jri6QnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygn7JeQ65+sIOygleuztCcgKyBlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWRkRGF0YSA9IGFzeW5jIChcclxuICAgIHRhZzogc3RyaW5nLFxyXG4gICAgZGF0YTogT2JqZWN0LFxyXG4gICAgY2hhcjogc3RyaW5nLFxyXG4gICAgdWlkOiBzdHJpbmdcclxuKSA9PiB7XHJcbiAgICBhd2FpdCBBZGRGdW5jKGNoYXIsIGRhdGEsIHRhZyk7XHJcbiAgICBhd2FpdCBVcGRhdGVIaXN0b3J5KGNoYXIsIGRhdGEsIHVpZCwgJ0FERCcpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERlbGV0ZURhdGEoXHJcbiAgICB0YWc6IHN0cmluZyxcclxuICAgIGRhdGE6IE9iamVjdCxcclxuICAgIGNoYXI6IHN0cmluZyxcclxuICAgIHVpZDogc3RyaW5nXHJcbikge1xyXG4gICAgYXdhaXQgRGVsZXRlRnVuYyhjaGFyLCBkYXRhLCB0YWcpO1xyXG4gICAgYXdhaXQgVXBkYXRlSGlzdG9yeShjaGFyLCBkYXRhLCB1aWQsICdEZWxldGUnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEVkaXREYXRhKFxyXG4gICAgdGFnOiBzdHJpbmcsXHJcbiAgICBvbGQ6IE9iamVjdCxcclxuICAgIG5ld0RhdGE6IE9iamVjdCxcclxuICAgIGNoYXI6IHN0cmluZyxcclxuICAgIHVpZDogc3RyaW5nXHJcbikge1xyXG4gICAgYXdhaXQgRGVsZXRlRnVuYyhjaGFyLCBvbGQsIHRhZyk7XHJcbiAgICBhd2FpdCBBZGRGdW5jKGNoYXIsIG5ld0RhdGEsIHRhZyk7XHJcbiAgICBhd2FpdCBVcGRhdGVIaXN0b3J5KGNoYXIsIHsgb2xkLCBuZXdEYXRhIH0sIHVpZCwgJ0VkaXQnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEFkZFByb3BlcnR5KGNhdGVnb3J5OiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG9yZGVyID0gKGRhdGE6IE9iamVjdFtdKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmhhc093blByb3BlcnR5KHByb3BlcnR5KVxyXG4gICAgICAgICAgICAgICAgPyBpdGVtXHJcbiAgICAgICAgICAgICAgICA6IHsgLi4uaXRlbSwgW3Byb3BlcnR5XTogJycgfTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVcGRhdGVDaGFyc0Z1bmMob3JkZXIsIGNhdGVnb3J5KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFJlbW92ZVByb3BlcnR5KGNhdGVnb3J5OiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG9yZGVyID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYXRhLm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhpdGVtKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBrZXkgIT09IHByb3BlcnR5KVxyXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjOiBhbnksIGN1cikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY1tjdXJdID0gaXRlbVtjdXJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICB9LCB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVXBkYXRlQ2hhcnNGdW5jKG9yZGVyLCBjYXRlZ29yeSk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUNvbXBvbmVudHMvU2lkZWJhcic7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIGZhQmFycyxcclxuICAgIGZhVGltZXMsXHJcbiAgICBJY29uRGVmaW5pdGlvbixcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy9HbG9iYWxTdHlsZSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsJztcclxuaW1wb3J0IEN1c3RvbUljb24gZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvSWNvbic7XHJcbmltcG9ydCB7IERldmljZSwgUGFsZXR0ZSB9IGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCBDaGFyIGZyb20gJy4vY2hhcic7XHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuYDtcclxuXHJcbmNvbnN0IFBhZ2VDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBNZW51UHJvcHMge1xyXG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcclxuICAgIGljb246IEljb25EZWZpbml0aW9uO1xyXG59XHJcblxyXG5jb25zdCBNZW51QnV0dG9uQmxvY2sgPSBzdHlsZWQoQ3VzdG9tSWNvbik8TWVudVByb3BzPmBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2PHsgdG9nZ2xlOiBib29sZWFuIH0+YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTY7XHJcbiAgICBiYWNrZ3JvdW5kOiAke1BhbGV0dGUub3ZlcmxheX07XHJcbiAgICB2aXNpYmlsaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLnRvZ2dsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nKX07XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dGl0bGU+Nk4yM1JQPC90aXRsZT5cclxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVCdXR0b25CbG9ja1xyXG4gICAgICAgICAgICAgICAgICAgIGljb249e3RvZ2dsZSA/IGZhVGltZXMgOiBmYUJhcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIHRvZ2dsZT17dG9nZ2xlfSBoYW5kbGVUb2dnbGU9e2hhbmRsZVRvZ2dsZX0gLz5cclxuICAgICAgICAgICAgICAgIDxPdmVybGF5IHRvZ2dsZT17dG9nZ2xlfSBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFBhZ2VDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFyPjwvQ2hhcj5cclxuICAgICAgICAgICAgICAgIDwvUGFnZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvV3JhcHBlcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5mbyBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL0luZm8nO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL01haW4nO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VEQkRhdGEsIHVzZURCRGlzcGF0Y2ggfSBmcm9tICcuLi9jb250ZXh0L0RCQ29udGV4dCc7XHJcbmltcG9ydCB7IExvYWREYXRhIH0gZnJvbSAnLi4vY29udGV4dC9EQkNvbnRleHRGdW5jJztcclxuaW1wb3J0IHsgRGV2aWNlLCBQYWxldHRlIH0gZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IHsgTG9hZGluZ1dpdGhvdXRPdmVybGF5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9Mb2FkaW5nJztcclxuaW1wb3J0IENvbW1hbmREZXNjcmlwdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL0NvbW1hbmREZXNjcmlwdGlvbic7XHJcbmltcG9ydCBDdXN0b21JY29uIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0ljb24nO1xyXG5pbXBvcnQgeyBmYVF1ZXN0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmNvbnN0IENoYXJXcmFwID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UuZGVza3RvcH0ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBEZXNjcmlwdGlvbkJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBDaGFyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGNoYXJOYW1lIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCB7IGNoYXJQcm9wcywgbG9hZGluZyB9ID0gdXNlREJEYXRhKCk7XHJcbiAgICBjb25zdCB0ZW1wRGlzcGF0Y2ggPSB1c2VEQkRpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt0YWJsZUluZGV4LCBzZXRUYWJsZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBMb2FkRGF0YShjaGFyTmFtZSBhcyBzdHJpbmcsIHRlbXBEaXNwYXRjaCk7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgfSwgW2NoYXJOYW1lXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVzY3JpcHRpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oZmFsc2UpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUluZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRUYWJsZUluZGV4KGluZGV4KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDaGFyV3JhcD5cclxuICAgICAgICAgICAgey8qPERlc2NyaXB0aW9uQnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERlc2NyaXB0aW9uKHRydWUpfT5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21JY29uIGljb249e2ZhUXVlc3Rpb25DaXJjbGV9IGNvbG9yPXtQYWxldHRlLmdyYXlfMX0gLz5cclxuICAgICAgICAgICAgPC9EZXNjcmlwdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8TG9hZGluZ1dpdGhvdXRPdmVybGF5IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tYW5kRGVzY3JpcHRpb24gZnVuYz17aGFuZGxlRGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y2hhclByb3BzPy5JbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y2hhck5hbWUgYXMgc3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y2hhclByb3BzIX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSW5kZXg9e3RhYmxlSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbmRleD17aGFuZGxlSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeydoaSd9Ki99XHJcbiAgICAgICAgPC9DaGFyV3JhcD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyO1xyXG4iLCJleHBvcnQgY29uc3QgVGFibGVPcmRlcjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB9ID0ge1xyXG4gICAgc3RhbmRpbmc6IFsnZnJhbWUnLCAnY29tbWFuZCcsICdkYW1hZ2UnLCAncmFuZ2UnLCAnaGl0ZnJhbWUnLCAnc3RhdGUnXSxcclxuICAgIHVwOiBbJ2ZyYW1lJywgJ2NvbW1hbmQnLCAnZGFtYWdlJywgJ3JhbmdlJywgJ2hpdGZyYW1lJywgJ3N0YXRlJ10sXHJcbiAgICBUaHJvdzogWydjb21tYW5kJywgJ2RhbWFnZScsICdmcmFtZScsICdzdGF0ZScsICd3YXknXSxcclxuICAgIGNvbWJvOiBbJ2NvbW1hbmQnLCAnc3RhdGUnXSxcclxuICAgIEV4dHJhaGl0OiBbJ2NvbW1hbmQnLCAnc3RhdGUnXSxcclxuICAgIFdhbGxDb21ibzogWydjb21tYW5kJywgJ3N0YXRlJ10sXHJcbiAgICBNYWluTW92ZTogW1xyXG4gICAgICAgICdjb21tYW5kJyxcclxuICAgICAgICAnbmlja25hbWUnLFxyXG4gICAgICAgICdkYW1hZ2UnLFxyXG4gICAgICAgICdmcmFtZScsXHJcbiAgICAgICAgJ2d1YXJkZnJhbWUnLFxyXG4gICAgICAgICdoaXRmcmFtZScsXHJcbiAgICAgICAgJ3JhbmdlJyxcclxuICAgICAgICAnc3RhdGUnLFxyXG4gICAgXSxcclxuICAgIFBhdHRlcm46IFsnY29tbWFuZCcsICdzdGF0ZScsICd3aW4nXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeSA9IFtcclxuICAgICdNYWluTW92ZScsXHJcbiAgICAnc3RhbmRpbmcnLFxyXG4gICAgJ3VwJyxcclxuICAgICdUaHJvdycsXHJcbiAgICAnY29tYm8nLFxyXG4gICAgJ1dhbGxDb21ibycsXHJcbiAgICAnRXh0cmFoaXQnLFxyXG4gICAgJ1BhdHRlcm4nLFxyXG4gICAgJ0luZm8nLFxyXG5dO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvcm91dGVyJylcbiJdLCJzb3VyY2VSb290IjoiIn0=