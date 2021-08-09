self["webpackHotUpdate_N_E"]("pages/_app",{

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9EQkNvbnRleHQudHN4Iiwid2VicGFjazovL19OX0UvLi9jb250ZXh0L0RCQ29udGV4dEZ1bmMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGFyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvVGFibGVPcmRlci50cyJdLCJuYW1lcyI6WyJJbml0aWFsU3RhdGUiLCJjaGFyUHJvcHMiLCJzdGFuZGluZyIsInVwIiwiY29tYm8iLCJXYWxsQ29tYm8iLCJUaHJvdyIsIkV4dHJhaGl0IiwiSW5mbyIsIlBhdHRlcm4iLCJNYWluTW92ZSIsImxvYWRpbmciLCJlcnJvciIsIkRhdGFDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkRhdGFEaXNwYXRjaENvbnRleHQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIlN0YXRlUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVzZURCRGF0YSIsImRhdGEiLCJ1c2VDb250ZXh0IiwiRXJyb3IiLCJ1c2VEQkRpc3BhdGNoIiwiTG9hZERhdGEiLCJjaGFyIiwic29ydGJ5S2V5IiwiYSIsImIiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcnNlSW50Iiwic29ydGJ5Q291bnRlciIsImF2IiwiaW5jbHVkZXMiLCJidiIsIm9yZGVyIiwiYXJyIiwiY2F0ZWdvcnkiLCJvcmRlckJ5Q29udGVudCIsIlRhYmxlT3JkZXIiLCJpbmRleE9mIiwibWFwIiwiY3VyIiwiT2JqZWN0Iiwia2V5cyIsInNvcnQiLCJyZWR1Y2UiLCJvYmoiLCJrZXkiLCJkYiIsImRvYyIsImdldCIsInRoZW4iLCJzbmFwIiwibmV3T2JqIiwiYWNjIiwiY29uc29sZSIsImxvZyIsImVyciIsIlVwZGF0ZUhpc3RvcnkiLCJ1aWQiLCJoaXN0b3J5IiwidGltZSIsImZpcmViYXNlIiwiRGF0ZSIsImRvY3VtZW50IiwiZXhpc3RzIiwicmVmIiwidXBkYXRlIiwic2V0IiwiQWRkRnVuYyIsInRhZyIsImFsZXJ0IiwiRGVsZXRlRnVuYyIsIlVwZGF0ZUNoYXJzRnVuYyIsIlVwZGF0ZVByb3BzRnVuYyIsImlkIiwibmV3RGF0YSIsImRvY3VtZW50cyIsImZvckVhY2giLCJwcm9wZXJ0eSIsIlJlbmFtZSIsIkFkZE5ld0NoYXJhY3RlciIsIm5hbWUiLCJpdGVtIiwiQWRkTmV3UHJvcHMiLCJBZGREYXRhIiwiRGVsZXRlRGF0YSIsIkVkaXREYXRhIiwib2xkIiwiQWRkUHJvcGVydHkiLCJSZW1vdmVQcm9wZXJ0eSIsImZpbHRlciIsIldyYXBwZXIiLCJzdHlsZWQiLCJQYWdlQ29udGVudCIsIkRldmljZSIsIk1lbnVCdXR0b25CbG9jayIsIkN1c3RvbUljb24iLCJPdmVybGF5IiwiUGFsZXR0ZSIsInByb3BzIiwidG9nZ2xlIiwiQXBwIiwic2V0VG9nZ2xlIiwidXNlU3RhdGUiLCJoYW5kbGVUb2dnbGUiLCJ1c2VDYWxsYmFjayIsImZhVGltZXMiLCJmYUJhcnMiLCJDaGFyV3JhcCIsIkRlc2NyaXB0aW9uQnV0dG9uIiwiQ2hhciIsInJvdXRlciIsInVzZVJvdXRlciIsImNoYXJOYW1lIiwicXVlcnkiLCJ0ZW1wRGlzcGF0Y2giLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidGFibGVJbmRleCIsInNldFRhYmxlSW5kZXgiLCJ1c2VFZmZlY3QiLCJoYW5kbGVEZXNjcmlwdGlvbiIsImhhbmRsZUluZGV4IiwiaW5kZXgiLCJDYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQSxNQUFNQSxZQUF3QixHQUFHO0FBQzdCQyxXQUFTLEVBQUU7QUFDUEMsWUFBUSxFQUFFLEVBREg7QUFFUEMsTUFBRSxFQUFFLEVBRkc7QUFHUEMsU0FBSyxFQUFFLEVBSEE7QUFJUEMsYUFBUyxFQUFFLEVBSko7QUFLUEMsU0FBSyxFQUFFLEVB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QixFQU1wQixXQU5vQixFQU9wQixVQVBvQixFQVFwQixTQVJvQixFQVNwQixNQVRvQixDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmE5MjlhY2ZjMWY4MDk3NjJjNGE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgRGlzcGF0Y2gsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoYXJQcm9wcyB9IGZyb20gJy4uL3R5cGVzL0NoYXJQcm9wcyc7XHJcblxyXG5pbnRlcmZhY2UgU3RhdGVQcm9wcyB7XHJcbiAgICBjaGFyUHJvcHM6IENoYXJQcm9wcztcclxuICAgIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBlcnJvcjogYW55O1xyXG59XHJcblxyXG5jb25zdCBJbml0aWFsU3RhdGU6IFN0YXRlUHJvcHMgPSB7XHJcbiAgICBjaGFyUHJvcHM6IHtcclxuICAgICAgICBzdGFuZGluZzogW10sXHJcbiAgICAgICAgdXA6IFtdLFxyXG4gICAgICAgIGNvbWJvOiBbXSxcclxuICAgICAgICBXYWxsQ29tYm86IFtdLFxyXG4gICAgICAgIFRocm93OiBbXSxcclxuICAgICAgICBFeHRyYWhpdDogW10sXHJcbiAgICAgICAgSW5mbzogW10sXHJcbiAgICAgICAgUGF0dGVybjogW10sXHJcbiAgICAgICAgTWFpbk1vdmU6IFtdLFxyXG4gICAgfSxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG50eXBlIEFjdGlvbiA9XHJcbiAgICB8IHsgdHlwZTogJ0xPQURFRCc7IHBheWxvYWQ6IENoYXJQcm9wcyB9XHJcbiAgICB8IHsgdHlwZTogJ0xPQURJTkcnIH1cclxuICAgIHwgeyB0eXBlOiAnQUREJyB9XHJcbiAgICB8IHsgdHlwZTogJ0VSUk9SJzsgZXJyb3I6IGFueSB9O1xyXG5cclxuZXhwb3J0IHR5cGUgU3RhdGVEaXNwYXRjaCA9IERpc3BhdGNoPEFjdGlvbj47XHJcblxyXG5jb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U3RhdGVQcm9wcyB8IG51bGw+KG51bGwpO1xyXG5jb25zdCBEYXRhRGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxTdGF0ZURpc3BhdGNoIHwgbnVsbD4obnVsbCk7XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlOiBTdGF0ZVByb3BzLCBhY3Rpb246IEFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0xPQURFRCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNoYXJQcm9wczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdMT0FESU5HJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlICdFUlJPUic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3RhdGVQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgSW5pdGlhbFN0YXRlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XHJcbiAgICAgICAgICAgIDxEYXRhRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvRGF0YURpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlREJEYXRhKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG4gICAgaWYgKCFkYXRhKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIFByb3ZpZGVyJyk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlREJEaXNwYXRjaCgpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEYXRhRGlzcGF0Y2hDb250ZXh0KTtcclxuICAgIGlmICghZGlzcGF0Y2gpIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgUHJvdmlkZXInKTtcclxuICAgIHJldHVybiBkaXNwYXRjaDtcclxufVxyXG4iLCJpbXBvcnQgZGIgZnJvbSAnLi4vZmlyZWJhc2VJbml0JztcclxuaW1wb3J0IHsgQ2hhclByb3BzIH0gZnJvbSAnLi4vdHlwZXMvQ2hhclByb3BzJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuaW1wb3J0IHsgU3RhdGVEaXNwYXRjaCB9IGZyb20gJy4vREJDb250ZXh0JztcclxuaW1wb3J0IHsgVGFibGVPcmRlciB9IGZyb20gJy4uL3V0aWxzL1RhYmxlT3JkZXInO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gTG9hZERhdGEoY2hhcjogc3RyaW5nLCBkaXNwYXRjaDogU3RhdGVEaXNwYXRjaCkge1xyXG4gICAgY29uc3Qgc29ydGJ5S2V5ID0gKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoJ2ZyYW1lJykgJiYgYi5oYXNPd25Qcm9wZXJ0eSgnZnJhbWUnKSkge1xyXG4gICAgICAgICAgICBpZiAoYVsnZnJhbWUnXSA9PT0gYlsnZnJhbWUnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbJ2NvbW1hbmQnXSA8IGJbJ2NvbW1hbmQnXSA/IC0xIDogMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChhWydmcmFtZSddKSA8IHBhcnNlSW50KGJbJ2ZyYW1lJ10pID8gLTEgOiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFbJ2NvbW1hbmQnXSA8IGJbJ2NvbW1hbmQnXSA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNvcnRieUNvdW50ZXIgPSAoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBhdiA9IGFbJ2NvbW1hbmQnXS5pbmNsdWRlcygnKEMpJyk7XHJcbiAgICAgICAgY29uc3QgYnYgPSBiWydjb21tYW5kJ10uaW5jbHVkZXMoJyhDKScpO1xyXG4gICAgICAgIGlmIChhdiA9PT0gYnYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFbJ2NvbW1hbmQnXSA8IGJbJ2NvbW1hbmQnXSA/IC0xIDogMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGF2ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9yZGVyID0gKGFycjogYW55W10sIGNhdGVnb3J5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBvcmRlckJ5Q29udGVudCA9IChjYXRlZ29yeTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyID0gVGFibGVPcmRlcltjYXRlZ29yeV07XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYTogYW55LCBiOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcmRlci5pbmRleE9mKGEpIC0gb3JkZXIuaW5kZXhPZihiKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBhcnIubWFwKChjdXI6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pID0+XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGN1cilcclxuICAgICAgICAgICAgICAgIC5zb3J0KG9yZGVyQnlDb250ZW50KGNhdGVnb3J5KSlcclxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKG9iajogYW55LCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gY3VyW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgICAgIH0sIHt9KVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPQURJTkcnIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGJcclxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ0NoYXJhY3RlcicpXHJcbiAgICAgICAgICAgIC5kb2MoY2hhcilcclxuICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgIC50aGVuKChzbmFwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25hcC5kYXRhKCkgYXMgQ2hhclByb3BzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBuZXdPYmogPSBPYmplY3Qua2V5cyhkYXRhKS5yZWR1Y2UoKGFjYzogYW55LCBjdXI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY3VyID09PSAnSW5mbycpIHtcclxuICAgICAgICAgICAgICAgIGFjY1tjdXJdID0gZGF0YVtjdXJdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0V4dHJhaGl0JyxcclxuICAgICAgICAgICAgICAgICAgICAnY29tYm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdXYWxsQ29tYm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXR0ZXJuJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWFpbk1vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdUaHJvdycsXHJcbiAgICAgICAgICAgICAgICBdLmluY2x1ZGVzKGN1cilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBhY2NbY3VyXSA9IG9yZGVyKGRhdGFbY3VyXSwgY3VyKS5zb3J0KHNvcnRieUNvdW50ZXIpOyAvLyDslYztjIzrsrPsiJwg7Lm07Jq07YSw7IicXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoWydzdGFuZGluZycsICd1cCddLmluY2x1ZGVzKGN1cikpIHtcclxuICAgICAgICAgICAgICAgIGFjY1tjdXJdID0gb3JkZXIoZGF0YVtjdXJdLCBjdXIpLnNvcnQoc29ydGJ5S2V5KTsgLy/tlITroIjsnoTsiJxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhWydjb21ibyddKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdPYmpbJ2NvbWJvJ10pO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPQURFRCcsIHBheWxvYWQ6IG5ld09iaiB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnRVJST1InLCBlcnJvcjogZXJyIH0pO1xyXG4gICAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIFVwZGF0ZUhpc3RvcnkoXHJcbiAgICBjaGFyOiBzdHJpbmcsXHJcbiAgICBkYXRhOiBPYmplY3QsXHJcbiAgICB1aWQ6IHN0cmluZyxcclxuICAgIHR5cGU6IHN0cmluZ1xyXG4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IHtcclxuICAgICAgICAgICAgY2hhcjogY2hhcixcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgdGltZTogZmlyZWJhc2UuZmlyZXN0b3JlLlRpbWVzdGFtcC5mcm9tRGF0ZShuZXcgRGF0ZSgpKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50ID0gYXdhaXQgZGIuY29sbGVjdGlvbignVXNlcicpLmRvYyh1aWQpLmdldCgpO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5leGlzdHMgJiYgZG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgYXdhaXQgZG9jdW1lbnQucmVmLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBbdHlwZV06IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLmFycmF5VW5pb24oaGlzdG9yeSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRiXHJcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbignVXNlcicpXHJcbiAgICAgICAgICAgICAgICAuZG9jKHVpZClcclxuICAgICAgICAgICAgICAgIC5zZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIFt0eXBlXTogW2hpc3RvcnldLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+ycoOyggCDtnojsiqTthqDrpqwg7JeF642w7J207Yq4IOyLpO2MqCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBZGRGdW5jKGNoYXI6IHN0cmluZywgZGF0YTogT2JqZWN0LCB0YWc6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbignQ2hhcmFjdGVyJylcclxuICAgICAgICAgICAgLmRvYyhjaGFyKVxyXG4gICAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIFt0YWddOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5hcnJheVVuaW9uKGRhdGEpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGFsZXJ0KCfsoJXrs7Trpbwg7LaU6rCA7ZWY64qU642wIOyLpO2MqO2WiOyKteuLiOuLpCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfsl5Drn6zsoJXrs7QgJyArIGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZUZ1bmMoY2hhcjogc3RyaW5nLCBkYXRhOiBPYmplY3QsIHRhZzogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiXHJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdDaGFyYWN0ZXInKVxyXG4gICAgICAgICAgICAuZG9jKGNoYXIpXHJcbiAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgW3RhZ106IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLmFycmF5UmVtb3ZlKGRhdGEpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGFsZXJ0KCfsoJXrs7Trpbwg7IKt7KCc7ZWY64qU642wIOyLpO2MqO2WiOyKteuLiOuLpCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfsl5Drn6zsoJXrs7QgJyArIGVycik7XHJcbiAgICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gVXBkYXRlQ2hhcnNGdW5jKG9yZGVyOiBhbnksIGNhdGVnb3J5OiBzdHJpbmcpIHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIFVwZGF0ZVByb3BzRnVuYyhvcmRlcjogYW55LCBpZDogc3RyaW5nLCBjYXRlZ29yeTogc3RyaW5nKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiXHJcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbignQ2hhcmFjdGVyJylcclxuICAgICAgICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgICAgIC50aGVuKChzbmFwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuYXAuZGF0YSgpIGFzIENoYXJQcm9wcztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gb3JkZXIoZGF0YVtjYXRlZ29yeV0pO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGJcclxuICAgICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbignQ2hhcmFjdGVyJylcclxuICAgICAgICAgICAgICAgICAgICAuZG9jKGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2F0ZWdvcnldOiBuZXdEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGlkICsgJ+ydmCDsoJXrs7Trpbwg67Cb7JWE7Jik64qU642wIOyLpO2MqO2WiOyKteuLiOuLpCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+yXkOufrCDsoJXrs7QnICsgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydChpZCArICfsnZgg7KCV67O066W8IOyXheuNsOydtO2KuO2VmOuKlOuNsCDsi6TtjKjtlojsirXri4jri6QnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+yXkOufrCDsoJXrs7QnICsgZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdDaGFyYWN0ZXInKS5nZXQoKTtcclxuICAgICAgICBkb2N1bWVudHMuZm9yRWFjaCgoZG9jdW1lbnQpID0+IHtcclxuICAgICAgICAgICAgVXBkYXRlUHJvcHNGdW5jKG9yZGVyLCBkb2N1bWVudC5pZCwgY2F0ZWdvcnkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgYWxlcnQoJ+y6kOumre2EsOuTpOydmCDsoJXrs7Trpbwg67Cb7JWE7Jik64qU642wIOyLpO2MqO2WiOyKteuLiOuLpCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfsl5Drn6wg7KCV67O0JyArIGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFVwZGF0ZVByb3BzRnVuYyhpZDogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRiXHJcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbignQ2hhcmFjdGVyJylcclxuICAgICAgICAgICAgICAgIC5kb2MoaWQpXHJcbiAgICAgICAgICAgICAgICAudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBbcHJvcGVydHldOiBbXSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydChpZCArICfsnZgg7KCV67O066W8IOuwm+yVhOyYpOuKlOuNsCDsi6TtjKjtlojsirXri4jri6QnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+yXkOufrCDsoJXrs7QnICsgZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBhbGVydChpZCArICfsnZgg7KCV67O066W8IOyXheuNsOydtO2KuO2VmOuKlOuNsCDsi6TtjKjtlojsirXri4jri6QnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygn7JeQ65+sIOygleuztCcgKyBlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUmVuYW1lKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oJ0NoYXJhY3RlcicpXHJcbiAgICAgICAgLmRvYygnQ2xhZGlvJylcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigoc25hcCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc25hcC5kYXRhKCkgYXMgQ2hhclByb3BzO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ0NoYXJhY3RlcicpLmRvYygnQ2xhdWRpbycpLnNldChkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEFkZE5ld0NoYXJhY3RlcigpIHtcclxuICAgIGNvbnN0IG5hbWUgPSAnTGVyb3knO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdDaGFyYWN0ZXInKS5kb2MobmFtZSkuc2V0KHt9KTtcclxuICAgICAgICBjb25zdCBhcnIgPSBbXHJcbiAgICAgICAgICAgICdNYWluTW92ZScsXHJcbiAgICAgICAgICAgICdzdGFuZGluZycsXHJcbiAgICAgICAgICAgICd1cCcsXHJcbiAgICAgICAgICAgICdUaHJvdycsXHJcbiAgICAgICAgICAgICdjb21ibycsXHJcbiAgICAgICAgICAgICdXYWxsQ29tYm8nLFxyXG4gICAgICAgICAgICAnRXh0cmFoaXQnLFxyXG4gICAgICAgICAgICAnUGF0dGVybicsXHJcbiAgICAgICAgICAgICdJbmZvJyxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIFVwZGF0ZVByb3BzRnVuYyhuYW1lLCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGFsZXJ0KCfsi6TtjKgnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEFkZE5ld1Byb3BzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkb2N1bWVudHMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdDaGFyYWN0ZXInKS5nZXQoKTtcclxuICAgICAgICBkb2N1bWVudHMuZm9yRWFjaCgoZG9jdW1lbnQpID0+IHtcclxuICAgICAgICAgICAgVXBkYXRlUHJvcHNGdW5jKGRvY3VtZW50LmlkLCAnTWFpbk1vdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGFsZXJ0KCfsupDrpq3thLDrk6TsnZgg7KCV67O066W8IOuwm+yVhOyYpOuKlOuNsCDsi6TtjKjtlojsirXri4jri6QnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygn7JeQ65+sIOygleuztCcgKyBlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWRkRGF0YSA9IGFzeW5jIChcclxuICAgIHRhZzogc3RyaW5nLFxyXG4gICAgZGF0YTogT2JqZWN0LFxyXG4gICAgY2hhcjogc3RyaW5nLFxyXG4gICAgdWlkOiBzdHJpbmdcclxuKSA9PiB7XHJcbiAgICBhd2FpdCBBZGRGdW5jKGNoYXIsIGRhdGEsIHRhZyk7XHJcbiAgICBhd2FpdCBVcGRhdGVIaXN0b3J5KGNoYXIsIGRhdGEsIHVpZCwgJ0FERCcpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERlbGV0ZURhdGEoXHJcbiAgICB0YWc6IHN0cmluZyxcclxuICAgIGRhdGE6IE9iamVjdCxcclxuICAgIGNoYXI6IHN0cmluZyxcclxuICAgIHVpZDogc3RyaW5nXHJcbikge1xyXG4gICAgYXdhaXQgRGVsZXRlRnVuYyhjaGFyLCBkYXRhLCB0YWcpO1xyXG4gICAgYXdhaXQgVXBkYXRlSGlzdG9yeShjaGFyLCBkYXRhLCB1aWQsICdEZWxldGUnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEVkaXREYXRhKFxyXG4gICAgdGFnOiBzdHJpbmcsXHJcbiAgICBvbGQ6IE9iamVjdCxcclxuICAgIG5ld0RhdGE6IE9iamVjdCxcclxuICAgIGNoYXI6IHN0cmluZyxcclxuICAgIHVpZDogc3RyaW5nXHJcbikge1xyXG4gICAgYXdhaXQgRGVsZXRlRnVuYyhjaGFyLCBvbGQsIHRhZyk7XHJcbiAgICBhd2FpdCBBZGRGdW5jKGNoYXIsIG5ld0RhdGEsIHRhZyk7XHJcbiAgICBhd2FpdCBVcGRhdGVIaXN0b3J5KGNoYXIsIHsgb2xkLCBuZXdEYXRhIH0sIHVpZCwgJ0VkaXQnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEFkZFByb3BlcnR5KGNhdGVnb3J5OiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG9yZGVyID0gKGRhdGE6IE9iamVjdFtdKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmhhc093blByb3BlcnR5KHByb3BlcnR5KVxyXG4gICAgICAgICAgICAgICAgPyBpdGVtXHJcbiAgICAgICAgICAgICAgICA6IHsgLi4uaXRlbSwgW3Byb3BlcnR5XTogJycgfTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBVcGRhdGVDaGFyc0Z1bmMob3JkZXIsIGNhdGVnb3J5KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFJlbW92ZVByb3BlcnR5KGNhdGVnb3J5OiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG9yZGVyID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYXRhLm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhpdGVtKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBrZXkgIT09IHByb3BlcnR5KVxyXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjOiBhbnksIGN1cikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY1tjdXJdID0gaXRlbVtjdXJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICB9LCB7fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgVXBkYXRlQ2hhcnNGdW5jKG9yZGVyLCBjYXRlZ29yeSk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUNvbXBvbmVudHMvU2lkZWJhcic7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIGZhQmFycyxcclxuICAgIGZhVGltZXMsXHJcbiAgICBJY29uRGVmaW5pdGlvbixcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy9HbG9iYWxTdHlsZSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsJztcclxuaW1wb3J0IEN1c3RvbUljb24gZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvSWNvbic7XHJcbmltcG9ydCB7IERldmljZSwgUGFsZXR0ZSB9IGZyb20gJy4uL3N0eWxlcy90aGVtZSc7XHJcbmltcG9ydCBDaGFyIGZyb20gJy4vY2hhcic7XHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcclxuYDtcclxuXHJcbmNvbnN0IFBhZ2VDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XHJcbiAgICBsZWZ0OiAyNDBweDtcclxuICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBNZW51UHJvcHMge1xyXG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcclxuICAgIGljb246IEljb25EZWZpbml0aW9uO1xyXG59XHJcblxyXG5jb25zdCBNZW51QnV0dG9uQmxvY2sgPSBzdHlsZWQoQ3VzdG9tSWNvbik8TWVudVByb3BzPmBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2PHsgdG9nZ2xlOiBib29sZWFuIH0+YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTY7XHJcbiAgICBiYWNrZ3JvdW5kOiAke1BhbGV0dGUub3ZlcmxheX07XHJcbiAgICB2aXNpYmlsaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLnRvZ2dsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nKX07XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dGl0bGU+Nk4yM1JQPC90aXRsZT5cclxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVCdXR0b25CbG9ja1xyXG4gICAgICAgICAgICAgICAgICAgIGljb249e3RvZ2dsZSA/IGZhVGltZXMgOiBmYUJhcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIHRvZ2dsZT17dG9nZ2xlfSBoYW5kbGVUb2dnbGU9e2hhbmRsZVRvZ2dsZX0gLz5cclxuICAgICAgICAgICAgICAgIDxPdmVybGF5IHRvZ2dsZT17dG9nZ2xlfSBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFBhZ2VDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFyPjwvQ2hhcj5cclxuICAgICAgICAgICAgICAgIDwvUGFnZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvV3JhcHBlcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5mbyBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL0luZm8nO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL01haW4nO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VEQkRhdGEsIHVzZURCRGlzcGF0Y2ggfSBmcm9tICcuLi9jb250ZXh0L0RCQ29udGV4dCc7XHJcbmltcG9ydCB7IExvYWREYXRhIH0gZnJvbSAnLi4vY29udGV4dC9EQkNvbnRleHRGdW5jJztcclxuaW1wb3J0IHsgRGV2aWNlLCBQYWxldHRlIH0gZnJvbSAnLi4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IHsgTG9hZGluZ1dpdGhvdXRPdmVybGF5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9Mb2FkaW5nJztcclxuaW1wb3J0IENvbW1hbmREZXNjcmlwdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL0NvbW1hbmREZXNjcmlwdGlvbic7XHJcbmltcG9ydCBDdXN0b21JY29uIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0ljb24nO1xyXG5pbXBvcnQgeyBmYVF1ZXN0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmNvbnN0IENoYXJXcmFwID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UuZGVza3RvcH0ge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBEZXNjcmlwdGlvbkJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBDaGFyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGNoYXJOYW1lIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCB7IGNoYXJQcm9wcywgbG9hZGluZyB9ID0gdXNlREJEYXRhKCk7XHJcbiAgICBjb25zdCB0ZW1wRGlzcGF0Y2ggPSB1c2VEQkRpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt0YWJsZUluZGV4LCBzZXRUYWJsZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBMb2FkRGF0YShjaGFyTmFtZSBhcyBzdHJpbmcsIHRlbXBEaXNwYXRjaCk7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgfSwgW2NoYXJOYW1lXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVzY3JpcHRpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oZmFsc2UpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUluZGV4ID0gdXNlQ2FsbGJhY2soKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRUYWJsZUluZGV4KGluZGV4KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDaGFyV3JhcD5cclxuICAgICAgICAgICAgey8qPERlc2NyaXB0aW9uQnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERlc2NyaXB0aW9uKHRydWUpfT5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21JY29uIGljb249e2ZhUXVlc3Rpb25DaXJjbGV9IGNvbG9yPXtQYWxldHRlLmdyYXlfMX0gLz5cclxuICAgICAgICAgICAgPC9EZXNjcmlwdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8TG9hZGluZ1dpdGhvdXRPdmVybGF5IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tYW5kRGVzY3JpcHRpb24gZnVuYz17aGFuZGxlRGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y2hhclByb3BzPy5JbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y2hhck5hbWUgYXMgc3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y2hhclByb3BzIX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlSW5kZXg9e3RhYmxlSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbmRleD17aGFuZGxlSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeydoaSd9Ki99XHJcbiAgICAgICAgPC9DaGFyV3JhcD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyO1xyXG4iLCJleHBvcnQgY29uc3QgVGFibGVPcmRlcjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB9ID0ge1xyXG4gICAgc3RhbmRpbmc6IFsnZnJhbWUnLCAnY29tbWFuZCcsICdkYW1hZ2UnLCAncmFuZ2UnLCAnaGl0ZnJhbWUnLCAnc3RhdGUnXSxcclxuICAgIHVwOiBbJ2ZyYW1lJywgJ2NvbW1hbmQnLCAnZGFtYWdlJywgJ3JhbmdlJywgJ2hpdGZyYW1lJywgJ3N0YXRlJ10sXHJcbiAgICBUaHJvdzogWydjb21tYW5kJywgJ2RhbWFnZScsICdmcmFtZScsICdzdGF0ZScsICd3YXknXSxcclxuICAgIGNvbWJvOiBbJ2NvbW1hbmQnLCAnc3RhdGUnXSxcclxuICAgIEV4dHJhaGl0OiBbJ2NvbW1hbmQnLCAnc3RhdGUnXSxcclxuICAgIFdhbGxDb21ibzogWydjb21tYW5kJywgJ3N0YXRlJ10sXHJcbiAgICBNYWluTW92ZTogW1xyXG4gICAgICAgICdjb21tYW5kJyxcclxuICAgICAgICAnbmlja25hbWUnLFxyXG4gICAgICAgICdkYW1hZ2UnLFxyXG4gICAgICAgICdmcmFtZScsXHJcbiAgICAgICAgJ2d1YXJkZnJhbWUnLFxyXG4gICAgICAgICdoaXRmcmFtZScsXHJcbiAgICAgICAgJ3JhbmdlJyxcclxuICAgICAgICAnc3RhdGUnLFxyXG4gICAgXSxcclxuICAgIFBhdHRlcm46IFsnY29tbWFuZCcsICdzdGF0ZScsICd3aW4nXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeSA9IFtcclxuICAgICdNYWluTW92ZScsXHJcbiAgICAnc3RhbmRpbmcnLFxyXG4gICAgJ3VwJyxcclxuICAgICdUaHJvdycsXHJcbiAgICAnY29tYm8nLFxyXG4gICAgJ1dhbGxDb21ibycsXHJcbiAgICAnRXh0cmFoaXQnLFxyXG4gICAgJ1BhdHRlcm4nLFxyXG4gICAgJ0luZm8nLFxyXG5dO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9