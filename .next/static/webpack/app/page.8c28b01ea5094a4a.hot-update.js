"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/PlayListItem/PlayListItem.tsx":
/*!******************************************************!*\
  !*** ./src/components/PlayListItem/PlayListItem.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlayListItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayListItem.module.css */ \"(app-pages-browser)/./src/components/PlayListItem/PlayListItem.module.css\");\n/* harmony import */ var _PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction PlayListItem(param) {\n    let { name, time, author, album, setTrack } = param;\n    let minutes = Math.floor(time / 60);\n    let seconds = (time % 60).toString().padStart(2, \"0\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: setTrack,\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().playlistItem), (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().playlistTrack), (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().track)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTitle),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTitleImage),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTitleSvg),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                href: \"/img/icon/sprite.svg#icon-note\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTitle),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackText), (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTextLeft)),\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackAuthor),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackText), (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTextSecondary)),\n                    children: author\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackAlbum),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackText), (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTextSecondary)),\n                    children: album\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTime),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackText), (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTextSecondary), (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTextRight)),\n                    children: \"\".concat(minutes, \":\").concat(seconds)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = PlayListItem;\nvar _c;\n$RefreshReg$(_c, \"PlayListItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1BsYXlMaXN0SXRlbS9QbGF5TGlzdEl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNxQjtBQUNYO0FBVXJCLFNBQVNHLGFBQWEsS0FNakI7UUFOaUIsRUFDbkNDLElBQUksRUFDSkMsSUFBSSxFQUNKQyxNQUFNLEVBQ05DLEtBQUssRUFDTEMsUUFBUSxFQUNVLEdBTmlCO0lBUW5DLElBQUlDLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ04sT0FBTztJQUNoQyxJQUFJTyxVQUFVLENBQUNQLE9BQU8sRUFBQyxFQUFHUSxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHO0lBRWpELHFCQUNFLDhEQUFDQztRQUFJQyxTQUFTUjtRQUFVUyxXQUFXZixpREFBVUEsQ0FBQ0QsOEVBQW1CLEVBQUVBLCtFQUFvQixFQUFFQSx1RUFBWTs7MEJBQ25HLDhEQUFDYztnQkFBSUUsV0FBV2hCLDRFQUFpQjs7a0NBQy9CLDhEQUFDYzt3QkFBSUUsV0FBV2hCLGlGQUFzQjtrQ0FDcEMsNEVBQUNzQjs0QkFBSU4sV0FBV2hCLCtFQUFvQjtzQ0FDbEMsNEVBQUN3QjtnQ0FBSUMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQ1g7d0JBQUlFLFdBQVdoQiw0RUFBaUI7a0NBQy9CLDRFQUFDMEI7NEJBQUtWLFdBQVdmLGlEQUFVQSxDQUFDRCwyRUFBZ0IsRUFBRUEsK0VBQW9CO3NDQUFJRzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzFFLDhEQUFDVztnQkFBSUUsV0FBV2hCLDZFQUFrQjswQkFDaEMsNEVBQUMwQjtvQkFBS1YsV0FBV2YsaURBQVVBLENBQUNELDJFQUFnQixFQUFFQSxvRkFBeUI7OEJBQUlLOzs7Ozs7Ozs7OzswQkFFN0UsOERBQUNTO2dCQUFJRSxXQUFXaEIsNEVBQWlCOzBCQUMvQiw0RUFBQzBCO29CQUFLVixXQUFXZixpREFBVUEsQ0FBQ0QsMkVBQWdCLEVBQUVBLG9GQUF5Qjs4QkFBSU07Ozs7Ozs7Ozs7OzBCQUU3RSw4REFBQ1E7Z0JBQUlFLFdBQVdoQiwyRUFBZ0I7MEJBQzlCLDRFQUFDMEI7b0JBQUtWLFdBQVdmLGlEQUFVQSxDQUFDRCwyRUFBZ0IsRUFBRUEsb0ZBQXlCLEVBQUVBLGdGQUFxQjs4QkFDM0YsR0FBY1csT0FBWEgsU0FBUSxLQUFXLE9BQVJHOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QjtLQXBDd0JUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BsYXlMaXN0SXRlbS9QbGF5TGlzdEl0ZW0udHN4P2I5NWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9QbGF5TGlzdEl0ZW0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxudHlwZSBQbGF5TGlzdEl0ZW1Qcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICB0aW1lOiBudW1iZXI7XG4gIGF1dGhvcjogc3RyaW5nO1xuICBhbGJ1bTogc3RyaW5nO1xuICBzZXRUcmFjazogKCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXlMaXN0SXRlbSh7XG4gIG5hbWUsXG4gIHRpbWUsXG4gIGF1dGhvcixcbiAgYWxidW0sXG4gIHNldFRyYWNrLFxufTogUGxheUxpc3RJdGVtUHJvcHMpIHtcblxuICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcbiAgbGV0IHNlY29uZHMgPSAodGltZSAlIDYwKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgb25DbGljaz17c2V0VHJhY2t9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMucGxheWxpc3RJdGVtLCBzdHlsZXMucGxheWxpc3RUcmFjaywgc3R5bGVzLnRyYWNrKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrVGl0bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrVGl0bGVJbWFnZX0+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy50cmFja1RpdGxlU3ZnfT5cbiAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9pbWcvaWNvbi9zcHJpdGUuc3ZnI2ljb24tbm90ZVwiPjwvdXNlPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmFja1RpdGxlfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLnRyYWNrVGV4dCwgc3R5bGVzLnRyYWNrVGV4dExlZnQpfT57bmFtZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrQXV0aG9yfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy50cmFja1RleHQsIHN0eWxlcy50cmFja1RleHRTZWNvbmRhcnkpfT57YXV0aG9yfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmFja0FsYnVtfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy50cmFja1RleHQsIHN0eWxlcy50cmFja1RleHRTZWNvbmRhcnkpfT57YWxidW19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrVGltZX0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMudHJhY2tUZXh0LCBzdHlsZXMudHJhY2tUZXh0U2Vjb25kYXJ5LCBzdHlsZXMudHJhY2tUZXh0UmlnaHQpfT5cbiAgICAgICAgICB7YCR7bWludXRlc306JHtzZWNvbmRzfWB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiY2xhc3NOYW1lcyIsIlBsYXlMaXN0SXRlbSIsIm5hbWUiLCJ0aW1lIiwiYXV0aG9yIiwiYWxidW0iLCJzZXRUcmFjayIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImRpdiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJwbGF5bGlzdEl0ZW0iLCJwbGF5bGlzdFRyYWNrIiwidHJhY2siLCJ0cmFja1RpdGxlIiwidHJhY2tUaXRsZUltYWdlIiwic3ZnIiwidHJhY2tUaXRsZVN2ZyIsInVzZSIsImhyZWYiLCJzcGFuIiwidHJhY2tUZXh0IiwidHJhY2tUZXh0TGVmdCIsInRyYWNrQXV0aG9yIiwidHJhY2tUZXh0U2Vjb25kYXJ5IiwidHJhY2tBbGJ1bSIsInRyYWNrVGltZSIsInRyYWNrVGV4dFJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PlayListItem/PlayListItem.tsx\n"));

/***/ })

});