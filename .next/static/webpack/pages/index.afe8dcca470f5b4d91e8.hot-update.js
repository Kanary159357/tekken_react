self["webpackHotUpdate_N_E"]("pages/index",{

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
      href: `/chardata/${checkedPath}`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlQ29tcG9uZW50cy9TaWRlYmFyLnRzeCJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiUGFsZXR0ZSIsIkRldmljZSIsInByb3BzIiwidG9nZ2xlIiwiU2lkZUl0ZW1MaW5rIiwiRm9udENvbG9yIiwiU2lkZWJhckl0ZW0iLCJwYXRoIiwiaGFuZGxlVG9nZ2xlIiwiY2hlY2tlZFBhdGgiLCJyZXBsYWNlIiwiQ2hhck5hbWVzIiwiU2lkZWJhciIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLE9BQU8sR0FBR0MsMERBQWdDO0FBQ2hEO0FBQ0Esa0JBQWtCQywwREFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhQyx5REFBZTtBQUM1QjtBQUNBLGdCQUFpQkMsS0FBRCxJQUFZQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxHQUFmLEdBQXFCLFFBQVU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FsQ0E7S0FBTUwsTztBQW9DTixNQUFNTSxZQUFZLEdBQUdMLHlEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUJNLDBEQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQkEsMERBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQkwsMERBQWdCO0FBQ3RDLGlCQUFpQkssMERBQWdCO0FBQ2pDO0FBQ0EsQ0FyQkE7TUFBTUQsWTs7QUE0Qk4sTUFBTUUsV0FBVyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQUQsS0FBdUM7QUFDdkQsUUFBTUMsV0FBVyxHQUFHRixJQUFJLENBQUNHLE9BQUwsQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLENBQXBCO0FBRUEsc0JBQ0ksOERBQUMsWUFBRDtBQUFjLFdBQU8sRUFBRUYsWUFBdkI7QUFBQSwyQkFDSSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRyxhQUFZQyxXQUFZLEVBQXJDO0FBQUEsZ0JBQXlDQTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0FSRDs7TUFBTUgsVztBQWNOLE1BQU1LLFNBQVMsR0FBRyxDQUNkLE9BRGMsRUFFZCxPQUZjLEVBR2QsTUFIYyxFQUlkLFdBSmMsRUFLZCxPQUxjLEVBTWQsS0FOYyxFQU9kLE9BUGMsRUFRZCxTQVJjLEVBU2QsVUFUYyxFQVVkLFVBVmMsRUFXZCxNQVhjLEVBWWQsT0FaYyxFQWFkLE1BYmMsRUFjZCxXQWRjLEVBZWQsUUFmYyxFQWdCZCxPQWhCYyxFQWlCZCxPQWpCYyxFQWtCZCxVQWxCYyxFQW1CZCxTQW5CYyxFQW9CZCxPQXBCYyxFQXFCZCxLQXJCYyxFQXNCZCxPQXRCYyxFQXVCZCxPQXZCYyxFQXdCZCxVQXhCYyxFQXlCZCxRQXpCYyxFQTBCZCxRQTFCYyxFQTJCZCxNQTNCYyxFQTRCZCxNQTVCYyxFQTZCZCxXQTdCYyxFQThCZCxNQTlCYyxFQStCZCxLQS9CYyxFQWdDZCxLQWhDYyxFQWlDZCxLQWpDYyxFQWtDZCxLQWxDYyxFQW1DZCxPQW5DYyxFQW9DZCxPQXBDYyxFQXFDZCxNQXJDYyxFQXNDZCxPQXRDYyxFQXVDZCxRQXZDYyxFQXdDZCxhQXhDYyxFQXlDZCxRQXpDYyxFQTBDZCxPQTFDYyxFQTJDZCxNQTNDYyxFQTRDZCxRQTVDYyxFQTZDZCxNQTdDYyxFQThDZCxTQTlDYyxFQStDZCxPQS9DYyxFQWdEZCxRQWhEYyxFQWlEZCxZQWpEYyxFQWtEZCxRQWxEYyxDQUFsQjs7QUFxREEsTUFBTUMsT0FBTyxHQUFHLENBQUM7QUFBRVQsUUFBRjtBQUFVSztBQUFWLENBQUQsS0FBcUM7QUFDakQsc0JBQ0ksOERBQUMsT0FBRDtBQUFTLFVBQU0sRUFBRUwsTUFBakI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsNkJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLEVBS0tRLFNBQVMsQ0FBQ0UsR0FBVixDQUFjLENBQUNDLE9BQUQsRUFBVUMsS0FBVixLQUFvQjtBQUMvQiwwQkFDSSw4REFBQyxXQUFEO0FBQ0ksb0JBQVksRUFBRVAsWUFEbEI7QUFFSSxZQUFJLEVBQUVNO0FBRlYsU0FHU0MsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBT0gsS0FSQSxDQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBaUJILENBbEJEOztNQUFNSCxPO0FBb0JOLCtEQUFlLG1CQUFBSSxpREFBQSxDQUFXSixPQUFYLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWZlOGRjY2E0NzBmNWI0ZDkxZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi9Vc2VyUHJvZmlsZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IERldmljZSwgRm9udENvbG9yLCBQYWxldHRlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lJztcclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8eyB0b2dnbGU6IGJvb2xlYW4gfT5gXHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAke1BhbGV0dGUuYmxhY2tfMX07XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcclxuXHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAke0RldmljZS5kZXNrdG9wfSB7XHJcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgIGxlZnQ6ICR7KHByb3BzKSA9PiAocHJvcHMudG9nZ2xlID8gJzAnIDogJy0yNDBweCcpfTtcclxuICAgICAgICB6LWluZGV4OiA5OTc7XHJcbiAgICB9XHJcblxyXG4gICAgLk1haW4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFNpZGVJdGVtTGluayA9IHN0eWxlZC5saWBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAke0ZvbnRDb2xvci53aGl0ZX07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAmOmxpbmssXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke0ZvbnRDb2xvci53aGl0ZX07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHtQYWxldHRlLmJsYWNrXzJ9O1xyXG4gICAgICAgIGNvbG9yOiAke0ZvbnRDb2xvci53aGl0ZX07XHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgaXRlbVByb3BzIHtcclxuICAgIHBhdGg6IHN0cmluZztcclxuICAgIGhhbmRsZVRvZ2dsZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgU2lkZWJhckl0ZW0gPSAoeyBwYXRoLCBoYW5kbGVUb2dnbGUgfTogaXRlbVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjaGVja2VkUGF0aCA9IHBhdGgucmVwbGFjZSgnXycsICcgJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2lkZUl0ZW1MaW5rIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhcmRhdGEvJHtjaGVja2VkUGF0aH1gfT57Y2hlY2tlZFBhdGh9PC9MaW5rPlxyXG4gICAgICAgIDwvU2lkZUl0ZW1MaW5rPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICB0b2dnbGU6IGJvb2xlYW47XHJcbiAgICBoYW5kbGVUb2dnbGU6ICgpID0+IHZvaWQ7XHJcbn1cclxuY29uc3QgQ2hhck5hbWVzID0gW1xyXG4gICAgJ0FrdW1hJyxcclxuICAgICdBbGlzYScsXHJcbiAgICAnQW5uYScsXHJcbiAgICAnQXJtb3JLaW5nJyxcclxuICAgICdBc3VrYScsXHJcbiAgICAnQm9iJyxcclxuICAgICdCcnlhbicsXHJcbiAgICAnQ2xhdWRpbycsXHJcbiAgICAnRGV2aWxKaW4nLFxyXG4gICAgJ0RyYWd1bm92JyxcclxuICAgICdFZGR5JyxcclxuICAgICdFbGl6YScsXHJcbiAgICAnRmVuZycsXHJcbiAgICAnRmFoa3VtcmFtJyxcclxuICAgICdHYW5yeXUnLFxyXG4gICAgJ0dlZXNlJyxcclxuICAgICdHaWdhcycsXHJcbiAgICAnSGVpaGFjaGknLFxyXG4gICAgJ0h3b3JhbmcnLFxyXG4gICAgJ0phY2s3JyxcclxuICAgICdKaW4nLFxyXG4gICAgJ0pvc2llJyxcclxuICAgICdKdWxpYScsXHJcbiAgICAnS2F0YXJpbmEnLFxyXG4gICAgJ0thenVtaScsXHJcbiAgICAnS2F6dXlhJyxcclxuICAgICdLaW5nJyxcclxuICAgICdLdW1hJyxcclxuICAgICdLdW5pbWl0c3UnLFxyXG4gICAgJ0xhcnMnLFxyXG4gICAgJ0xhdycsXHJcbiAgICAnTGVlJyxcclxuICAgICdMZWknLFxyXG4gICAgJ0xlbycsXHJcbiAgICAnTGVyb3knLFxyXG4gICAgJ0xpZGlhJyxcclxuICAgICdMaWxpJyxcclxuICAgICdMdWNreScsXHJcbiAgICAnTWFyZHVrJyxcclxuICAgICdNYXN0ZXJSYXZlbicsXHJcbiAgICAnTWlndWVsJyxcclxuICAgICdOZWdhbicsXHJcbiAgICAnTmluYScsXHJcbiAgICAnTm9jdGlzJyxcclxuICAgICdQYXVsJyxcclxuICAgICdTaGFoZWVuJyxcclxuICAgICdTdGV2ZScsXHJcbiAgICAnWGlhb3l1JyxcclxuICAgICdZb3NoaW1pdHN1JyxcclxuICAgICdaYWZpbmEnLFxyXG5dO1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICh7IHRvZ2dsZSwgaGFuZGxlVG9nZ2xlIH06IFByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXcmFwcGVyIHRvZ2dsZT17dG9nZ2xlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNYWluXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjZOMjNSUC5DT008L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VXNlclByb2ZpbGUgLz5cclxuICAgICAgICAgICAge0NoYXJOYW1lcy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFySXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUb2dnbGU9e2hhbmRsZVRvZ2dsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17ZWxlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2lkZWJhcik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=