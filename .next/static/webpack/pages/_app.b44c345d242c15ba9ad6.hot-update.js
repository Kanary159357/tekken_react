self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/PageComponents/Sidebar.tsx":
/*!***********************************************!*\
  !*** ./components/PageComponents/Sidebar.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserProfile */ "./components/PageComponents/UserProfile.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.ts");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\kkkk\\Documents\\GitHub\\Made\\tekken_react\\components\\PageComponents\\Sidebar.tsx";





const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div`
    width: 240px;
    background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_4__.Palette.black_1};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    overflow-y: auto;
    -ms-overflow-style: none;
    flex-direction: column;
    transition: all 0.1s;

    ::-webkit-scrollbar {
        display: none;
    }

    @media ${_styles_theme__WEBPACK_IMPORTED_MODULE_4__.Device.desktop} {
        width: 240px;
        left: ${props => props.toggle ? '0' : '-240px'};
        z-index: 997;
    }

    .Main {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
            text-decoration: none;
            color: #fff;
        }
    }
`;
_c = Wrapper;
const SideItemLink = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.li`
    display: flex;
    padding: 0;
    a {
        width: 100%;
        padding-left: 30px;
        color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_4__.FontColor.white};
        line-height: 3;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        &:active,
        &:link,
        &:hover {
            color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_4__.FontColor.white};
        }
    }
    &:hover {
        background: ${_styles_theme__WEBPACK_IMPORTED_MODULE_4__.Palette.black_2};
        color: ${_styles_theme__WEBPACK_IMPORTED_MODULE_4__.FontColor.white};
    }
`;
_c2 = SideItemLink;

const SidebarItem = ({
  path,
  handleToggle
}) => {
  const checkedPath = path.replace('_', ' ');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SideItemLink, {
    onClick: handleToggle,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: `/char/${checkedPath}`,
      children: checkedPath
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }, undefined);
};

_c3 = SidebarItem;
const CharNames = ['Akuma', 'Alisa', 'Anna', 'ArmorKing', 'Asuka', 'Bob', 'Bryan', 'Claudio', 'DevilJin', 'Dragunov', 'Eddy', 'Eliza', 'Feng', 'Fahkumram', 'Ganryu', 'Geese', 'Gigas', 'Heihachi', 'Hworang', 'Jack7', 'Jin', 'Josie', 'Julia', 'Katarina', 'Kazumi', 'Kazuya', 'King', 'Kuma', 'Kunimitsu', 'Lars', 'Law', 'Lee', 'Lei', 'Leo', 'Leroy', 'Lidia', 'Lili', 'Lucky', 'Marduk', 'MasterRaven', 'Miguel', 'Negan', 'Nina', 'Noctis', 'Paul', 'Shaheen', 'Steve', 'Xiaoyu', 'Yoshimitsu', 'Zafina'];

const Sidebar = ({
  toggle,
  handleToggle
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
    toggle: toggle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "Main",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/",
        children: "6N23RP.COM"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserProfile__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }, undefined), CharNames.map((element, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarItem, {
        handleToggle: handleToggle,
        path: element
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 21
      }, undefined);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 9
  }, undefined);
};

_c4 = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (_c5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Sidebar));

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "SideItemLink");
$RefreshReg$(_c3, "SidebarItem");
$RefreshReg$(_c4, "Sidebar");
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9TaWRlYmFyLnRzeCJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiUGFsZXR0ZSIsIkRldmljZSIsInByb3BzIiwidG9nZ2xlIiwiU2lkZUl0ZW1MaW5rIiwiRm9udENvbG9yIiwiU2lkZWJhckl0ZW0iLCJwYXRoIiwiaGFuZGxlVG9nZ2xlIiwiY2hlY2tlZFBhdGgiLCJyZXBsYWNlIiwiQ2hhck5hbWVzIiwiU2lkZWJhciIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLE9BQU8sR0FBR0MsMERBQWdDO0FBQ2hEO0FBQ0Esa0JBQWtCQywwREFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhQyx5REFBZTtBQUM1QjtBQUNBLGdCQUFpQkMsS0FBRCxJQUFZQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxHQUFmLEdBQXFCLFFBQVU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FsQ0E7S0FBTUwsTztBQW9DTixNQUFNTSxZQUFZLEdBQUdMLHlEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUJNLDBEQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQkEsMERBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQkwsMERBQWdCO0FBQ3RDLGlCQUFpQkssMERBQWdCO0FBQ2pDO0FBQ0EsQ0FyQkE7TUFBTUQsWTs7QUE0Qk4sTUFBTUUsV0FBVyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQUQsS0FBdUM7QUFDdkQsUUFBTUMsV0FBVyxHQUFHRixJQUFJLENBQUNHLE9BQUwsQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLENBQXBCO0FBRUEsc0JBQ0ksOERBQUMsWUFBRDtBQUFjLFdBQU8sRUFBRUYsWUFBdkI7QUFBQSwyQkFDSSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRyxTQUFRQyxXQUFZLEVBQWpDO0FBQUEsZ0JBQXFDQTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0FSRDs7TUFBTUgsVztBQWNOLE1BQU1LLFNBQVMsR0FBRyxDQUNkLE9BRGMsRUFFZCxPQUZjLEVBR2QsTUFIYyxFQUlkLFdBSmMsRUFLZCxPQUxjLEVBTWQsS0FOYyxFQU9kLE9BUGMsRUFRZCxTQVJjLEVBU2QsVUFUYyxFQVVkLFVBVmMsRUFXZCxNQVhjLEVBWWQsT0FaYyxFQWFkLE1BYmMsRUFjZCxXQWRjLEVBZWQsUUFmYyxFQWdCZCxPQWhCYyxFQWlCZCxPQWpCYyxFQWtCZCxVQWxCYyxFQW1CZCxTQW5CYyxFQW9CZCxPQXBCYyxFQXFCZCxLQXJCYyxFQXNCZCxPQXRCYyxFQXVCZCxPQXZCYyxFQXdCZCxVQXhCYyxFQXlCZCxRQXpCYyxFQTBCZCxRQTFCYyxFQTJCZCxNQTNCYyxFQTRCZCxNQTVCYyxFQTZCZCxXQTdCYyxFQThCZCxNQTlCYyxFQStCZCxLQS9CYyxFQWdDZCxLQWhDYyxFQWlDZCxLQWpDYyxFQWtDZCxLQWxDYyxFQW1DZCxPQW5DYyxFQW9DZCxPQXBDYyxFQXFDZCxNQXJDYyxFQXNDZCxPQXRDYyxFQXVDZCxRQXZDYyxFQXdDZCxhQXhDYyxFQXlDZCxRQXpDYyxFQTBDZCxPQTFDYyxFQTJDZCxNQTNDYyxFQTRDZCxRQTVDYyxFQTZDZCxNQTdDYyxFQThDZCxTQTlDYyxFQStDZCxPQS9DYyxFQWdEZCxRQWhEYyxFQWlEZCxZQWpEYyxFQWtEZCxRQWxEYyxDQUFsQjs7QUFxREEsTUFBTUMsT0FBTyxHQUFHLENBQUM7QUFBRVQsUUFBRjtBQUFVSztBQUFWLENBQUQsS0FBcUM7QUFDakQsc0JBQ0ksOERBQUMsT0FBRDtBQUFTLFVBQU0sRUFBRUwsTUFBakI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsNkJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLEVBS0tRLFNBQVMsQ0FBQ0UsR0FBVixDQUFjLENBQUNDLE9BQUQsRUFBVUMsS0FBVixLQUFvQjtBQUMvQiwwQkFDSSw4REFBQyxXQUFEO0FBQ0ksb0JBQVksRUFBRVAsWUFEbEI7QUFFSSxZQUFJLEVBQUVNO0FBRlYsU0FHU0MsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBT0gsS0FSQSxDQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBaUJILENBbEJEOztNQUFNSCxPO0FBb0JOLCtEQUFlLG1CQUFBSSxpREFBQSxDQUFXSixPQUFYLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iNDRjMzQ1ZDI0MmMxNWJhOWFkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuL1VzZXJQcm9maWxlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgRGV2aWNlLCBGb250Q29sb3IsIFBhbGV0dGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvdGhlbWUnO1xyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjx7IHRvZ2dsZTogYm9vbGVhbiB9PmBcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICR7UGFsZXR0ZS5ibGFja18xfTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG5cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhICR7RGV2aWNlLmRlc2t0b3B9IHtcclxuICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgbGVmdDogJHsocHJvcHMpID0+IChwcm9wcy50b2dnbGUgPyAnMCcgOiAnLTI0MHB4Jyl9O1xyXG4gICAgICAgIHotaW5kZXg6IDk5NztcclxuICAgIH1cclxuXHJcbiAgICAuTWFpbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2lkZUl0ZW1MaW5rID0gc3R5bGVkLmxpYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBhIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6ICR7Rm9udENvbG9yLndoaXRlfTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMztcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICY6YWN0aXZlLFxyXG4gICAgICAgICY6bGluayxcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICR7Rm9udENvbG9yLndoaXRlfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAke1BhbGV0dGUuYmxhY2tfMn07XHJcbiAgICAgICAgY29sb3I6ICR7Rm9udENvbG9yLndoaXRlfTtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBpdGVtUHJvcHMge1xyXG4gICAgcGF0aDogc3RyaW5nO1xyXG4gICAgaGFuZGxlVG9nZ2xlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBTaWRlYmFySXRlbSA9ICh7IHBhdGgsIGhhbmRsZVRvZ2dsZSB9OiBpdGVtUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGNoZWNrZWRQYXRoID0gcGF0aC5yZXBsYWNlKCdfJywgJyAnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTaWRlSXRlbUxpbmsgb25DbGljaz17aGFuZGxlVG9nZ2xlfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jaGFyLyR7Y2hlY2tlZFBhdGh9YH0+e2NoZWNrZWRQYXRofTwvTGluaz5cclxuICAgICAgICA8L1NpZGVJdGVtTGluaz5cclxuICAgICk7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgdG9nZ2xlOiBib29sZWFuO1xyXG4gICAgaGFuZGxlVG9nZ2xlOiAoKSA9PiB2b2lkO1xyXG59XHJcbmNvbnN0IENoYXJOYW1lcyA9IFtcclxuICAgICdBa3VtYScsXHJcbiAgICAnQWxpc2EnLFxyXG4gICAgJ0FubmEnLFxyXG4gICAgJ0FybW9yS2luZycsXHJcbiAgICAnQXN1a2EnLFxyXG4gICAgJ0JvYicsXHJcbiAgICAnQnJ5YW4nLFxyXG4gICAgJ0NsYXVkaW8nLFxyXG4gICAgJ0RldmlsSmluJyxcclxuICAgICdEcmFndW5vdicsXHJcbiAgICAnRWRkeScsXHJcbiAgICAnRWxpemEnLFxyXG4gICAgJ0ZlbmcnLFxyXG4gICAgJ0ZhaGt1bXJhbScsXHJcbiAgICAnR2Fucnl1JyxcclxuICAgICdHZWVzZScsXHJcbiAgICAnR2lnYXMnLFxyXG4gICAgJ0hlaWhhY2hpJyxcclxuICAgICdId29yYW5nJyxcclxuICAgICdKYWNrNycsXHJcbiAgICAnSmluJyxcclxuICAgICdKb3NpZScsXHJcbiAgICAnSnVsaWEnLFxyXG4gICAgJ0thdGFyaW5hJyxcclxuICAgICdLYXp1bWknLFxyXG4gICAgJ0thenV5YScsXHJcbiAgICAnS2luZycsXHJcbiAgICAnS3VtYScsXHJcbiAgICAnS3VuaW1pdHN1JyxcclxuICAgICdMYXJzJyxcclxuICAgICdMYXcnLFxyXG4gICAgJ0xlZScsXHJcbiAgICAnTGVpJyxcclxuICAgICdMZW8nLFxyXG4gICAgJ0xlcm95JyxcclxuICAgICdMaWRpYScsXHJcbiAgICAnTGlsaScsXHJcbiAgICAnTHVja3knLFxyXG4gICAgJ01hcmR1aycsXHJcbiAgICAnTWFzdGVyUmF2ZW4nLFxyXG4gICAgJ01pZ3VlbCcsXHJcbiAgICAnTmVnYW4nLFxyXG4gICAgJ05pbmEnLFxyXG4gICAgJ05vY3RpcycsXHJcbiAgICAnUGF1bCcsXHJcbiAgICAnU2hhaGVlbicsXHJcbiAgICAnU3RldmUnLFxyXG4gICAgJ1hpYW95dScsXHJcbiAgICAnWW9zaGltaXRzdScsXHJcbiAgICAnWmFmaW5hJyxcclxuXTtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoeyB0b2dnbGUsIGhhbmRsZVRvZ2dsZSB9OiBQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V3JhcHBlciB0b2dnbGU9e3RvZ2dsZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj42TjIzUlAuQ09NPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFVzZXJQcm9maWxlIC8+XHJcbiAgICAgICAgICAgIHtDaGFyTmFtZXMubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhckl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVG9nZ2xlPXtoYW5kbGVUb2dnbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9e2VsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNpZGViYXIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9