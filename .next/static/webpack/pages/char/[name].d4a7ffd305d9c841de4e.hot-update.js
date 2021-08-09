self["webpackHotUpdate_N_E"]("pages/char/[name]",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableRow */ "./components/TableComponents/TableRow.tsx");
/* harmony import */ var _TableEdits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableEdits */ "./components/TableComponents/TableEdits.tsx");
/* harmony import */ var _hooks_useInputValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useInputValue */ "./hooks/useInputValue.ts");
/* harmony import */ var _styles_components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/components/Icon */ "./styles/components/Icon.tsx");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/UserContext */ "./context/UserContext.tsx");
/* harmony import */ var _context_ModalContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/ModalContext */ "./context/ModalContext.tsx");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\TableComponents\\Table.tsx",
    _s = $RefreshSig$();












const TableWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.div`
    margin-bottom: 20px;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_6__.Device.mobile} {
        font-size: 15px;
    }
`;
_c = TableWrapper;
const TableContent = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.table`
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
const TableHead = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.th`
    text-align: left;
    padding: 10px;
    border-collapse: collapse;
    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_6__.Device.mobile} {
        padding: 5px;
    }
`;
_c3 = TableHead;
const TableRow = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.tr`
    margin-bottom: -1px;
    border: 1px solid ${_styles_theme__WEBPACK_IMPORTED_MODULE_6__.Palette.border_1};
    box-sizing: border-box;
`;
_c4 = TableRow;
const TableControl = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.td`
    width: 30px;
    text-align: center;
    cursor: pointer;
`;
const TableAdd = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.tr`
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
  let router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  const {
    name
  } = router.query;
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
    charName: name
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
        children: [data.map((row, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableRow__WEBPACK_IMPORTED_MODULE_2__.default, {
          row: row,
          charName: name,
          tag: tag.description
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 25
        }, undefined)), edit ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableRow, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TableEdits__WEBPACK_IMPORTED_MODULE_3__.default, {
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
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_components_Icon__WEBPACK_IMPORTED_MODULE_5__.default, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faPlus,
              color: _styles_theme__WEBPACK_IMPORTED_MODULE_6__.Palette.gray_1,
              hovercolor: _styles_theme__WEBPACK_IMPORTED_MODULE_6__.Palette.gray_2
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

_s(Table, "b5q+sGPtR1ZIUFh6VDCx5CXvK70=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__.useRouter, _context_ModalContext__WEBPACK_IMPORTED_MODULE_8__.useModalDispatch, _hooks_useInputValue__WEBPACK_IMPORTED_MODULE_4__.default, _context_UserContext__WEBPACK_IMPORTED_MODULE_7__.useUserData];
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZUNvbXBvbmVudHMvVGFibGUudHN4Il0sIm5hbWVzIjpbIlRhYmxlV3JhcHBlciIsInN0eWxlZCIsIkRldmljZSIsIlRhYmxlQ29udGVudCIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiUGFsZXR0ZSIsIlRhYmxlQ29udHJvbCIsIlRhYmxlQWRkIiwiVGFibGUiLCJpdGVtIiwiaGVhZGVyIiwiY29sdW1ucyIsImRhdGEiLCJ0YWciLCJpbml0aWFsVmFsdWUiLCJkZXRhaWwiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJuYW1lIiwicXVlcnkiLCJjb2xTcGFuIiwibGVuZ3RoIiwibW9kYWxEaXNwYXRjaCIsInVzZU1vZGFsRGlzcGF0Y2giLCJlZGl0Iiwic2V0RWRpdCIsInVzZVN0YXRlIiwidmFsdWVzIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJ1c2VFZGl0VmFsdWUiLCJtb2RhbFByb3BzIiwiZGVzY3JpcHRpb24iLCJjaGFyTmFtZSIsInVzZXIiLCJ1c2VVc2VyRGF0YSIsImhhbmRsZU1vZGFsIiwidHlwZSIsInBheWxvYWQiLCJtYXAiLCJjb2x1bW4iLCJpbmRleCIsInJvdyIsImZhUGx1cyIsImdyYXlfMiIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MsMkRBQVc7QUFDaEM7QUFDQSxhQUFhQyx3REFBYztBQUMzQjtBQUNBO0FBQ0EsQ0FMQTtLQUFNRixZO0FBT04sTUFBTUcsWUFBWSxHQUFHRiw2REFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYUMseURBQWU7QUFDNUI7QUFDQTtBQUNBLGFBQWFBLHdEQUFjO0FBQzNCO0FBQ0E7QUFDQSxD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QUcsQ0FBQ3NCO0FBSmIsV0FDU1MsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURILENBREwsRUFTS2pCLElBQUksZ0JBQ0QsOERBQUMsUUFBRDtBQUFBLGlDQUNJLDhEQUFDLGdEQUFEO0FBQ0ksbUJBQU8sRUFBRUMsT0FEYjtBQUVJLGtCQUFNLEVBQUVFLE1BRlo7QUFHSSx3QkFBWSxFQUFFRSxZQUhsQjtBQUlJLG9CQUFRLEVBQUVYLElBSmQ7QUFLSSx1QkFBVyxFQUFFa0I7QUFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREMsZ0JBV0QsOERBQUMsUUFBRDtBQUFBLGlDQUNJO0FBQUksbUJBQU8sRUFBRSxNQUFNWCxPQUFPLENBQUMsSUFBRCxDQUExQjtBQUFrQyxtQkFBTyxFQUFFTCxPQUEzQztBQUFBLG1DQUNJLDhEQUFDLDREQUFEO0FBQ0ksa0JBQUksRUFBRXVCLHNFQURWO0FBRUksbUJBQUssRUFBRXpDLHlEQUZYO0FBR0ksd0JBQVUsRUFBRUEseURBQWMwQztBQUg5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBcEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUErQ0gsQ0E1RUQ7O0dBQU12QyxLO1VBTVdZLDhELEVBR1NNLG1FLEVBRXFCTyx5RCxFQU05QkssNkQ7OztNQWpCWDlCLEs7QUE4RU4sK0RBQWUsbUJBQUF3QyxpREFBQSxDQUFXeEMsS0FBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXIvW25hbWVdLmQ0YTdmZmQzMDVkOWM4NDFkZTRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgVGFibGVJdGVtUHJvcHMgfSBmcm9tICcuLi9UYXBDb21wb25lbnRzL1RhYkluZm8nO1xyXG5pbXBvcnQgVGFibGVSb3dEYXRhIGZyb20gJy4vVGFibGVSb3cnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgVGFibGVFZGl0cyBmcm9tICcuL1RhYmxlRWRpdHMnO1xyXG5pbXBvcnQgdXNlRWRpdFZhbHVlIGZyb20gJy4uLy4uL2hvb2tzL3VzZUlucHV0VmFsdWUnO1xyXG5pbXBvcnQgQ3VzdG9tSWNvbiBmcm9tICcuLi8uLi9zdHlsZXMvY29tcG9uZW50cy9JY29uJztcclxuaW1wb3J0IHsgZmFQbHVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgRGV2aWNlLCBQYWxldHRlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IHsgdXNlVXNlckRhdGEgfSBmcm9tICcuLi8uLi9jb250ZXh0L1VzZXJDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlTW9kYWxEaXNwYXRjaCB9IGZyb20gJy4uLy4uL2NvbnRleHQvTW9kYWxDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5cclxuY29uc3QgVGFibGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UubW9iaWxlfSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGFibGVDb250ZW50ID0gc3R5bGVkLnRhYmxlYFxyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcblxyXG4gICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAke0RldmljZS5tb2JpbGV9IHtcclxuICAgICAgICB3aWR0aDogNzIwcHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBUYWJsZUhlYWQgPSBzdHlsZWQudGhgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBAbWVkaWEgJHtEZXZpY2UubW9iaWxlfSB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5jb25zdCBUYWJsZVJvdyA9IHN0eWxlZC50cmBcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke1BhbGV0dGUuYm9yZGVyXzF9O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFRhYmxlQ29udHJvbCA9IHN0eWxlZC50ZGBcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5jb25zdCBUYWJsZUFkZCA9IHN0eWxlZC50cmBcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgZGF0YVByb3BzIHtcclxuICAgIGl0ZW06IFRhYmxlSXRlbVByb3BzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHRhZ1Byb3BlcnR5IHtcclxuICAgIGNvbW1hbmQ/OiBzdHJpbmc7XHJcbiAgICBmcmFtZT86IHN0cmluZztcclxuICAgIGRhbWFnZT86IHN0cmluZztcclxuICAgIHdheT86IHN0cmluZztcclxuICAgIHN0YXRlPzogc3RyaW5nO1xyXG4gICAgcmFuZ2U/OiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgVGFibGUgPSAoeyBpdGVtIH06IGRhdGFQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBoZWFkZXIsIGNvbHVtbnMsIGRhdGEsIHRhZyB9ID0gaXRlbTtcclxuICAgIGNvbnN0IGluaXRpYWxWYWx1ZTogdGFnUHJvcGVydHkgPSB0YWcuZGV0YWlsLnJlZHVjZSgoYWNjOiBhbnksIGN1cikgPT4ge1xyXG4gICAgICAgIGFjY1tjdXJdID0gJyc7XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KTtcclxuICAgIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgbmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgY29sU3BhbiA9IHRhZy5kZXRhaWwubGVuZ3RoO1xyXG4gICAgY29uc3QgbW9kYWxEaXNwYXRjaCA9IHVzZU1vZGFsRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgdmFsdWVzLCBzZXRWYWx1ZSwgaGFuZGxlQ2hhbmdlIH0gPSB1c2VFZGl0VmFsdWUoaW5pdGlhbFZhbHVlKTtcclxuICAgIGNvbnN0IG1vZGFsUHJvcHMgPSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IHRhZy5kZXNjcmlwdGlvbixcclxuICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcclxuICAgICAgICBjaGFyTmFtZTogbmFtZSBhcyBzdHJpbmcsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdXNlciA9IHVzZVVzZXJEYXRhKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbW9kYWxEaXNwYXRjaCh7IHR5cGU6ICdBREQnLCBwYXlsb2FkOiBtb2RhbFByb3BzIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1vZGFsRGlzcGF0Y2goeyB0eXBlOiAnTk9UVVNFUicgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEVkaXQoZmFsc2UpO1xyXG4gICAgICAgIHNldFZhbHVlKGluaXRpYWxWYWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYmxlV3JhcHBlcj5cclxuICAgICAgICAgICAgPGgyPntoZWFkZXJ9PC9oMj5cclxuICAgICAgICAgICAgPFRhYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZCBrZXk9e2hlYWRlciArIGluZGV4ICsgY29sdW1ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgocm93OiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93RGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdz17cm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhck5hbWU9e25hbWUgYXMgc3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnPXt0YWcuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAge2VkaXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUVkaXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdD17c2V0RWRpdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyTmFtZT17bmFtZSBhcyBzdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW9kYWw9e2hhbmRsZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVBZGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgb25DbGljaz17KCkgPT4gc2V0RWRpdCh0cnVlKX0gY29sU3Bhbj17Y29sU3Bhbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFQbHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17UGFsZXR0ZS5ncmF5XzF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyY29sb3I9e1BhbGV0dGUuZ3JheV8yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQWRkPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L1RhYmxlQ29udGVudD5cclxuICAgICAgICA8L1RhYmxlV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFRhYmxlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==