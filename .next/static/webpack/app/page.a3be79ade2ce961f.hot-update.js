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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlayListItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayListItem.module.css */ \"(app-pages-browser)/./src/components/PlayListItem/PlayListItem.module.css\");\n/* harmony import */ var _PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction PlayListItem(param) {\n    let { name, time, author, album, setTrack } = param;\n    // let minutes = Math.floor(e.duration_in_seconds / 60);\n    // let seconds = (e.duration_in_seconds % 60).toString().padStart(2, \"0\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: setTrack,\n        className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().playlistItem),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().playlistTrack), (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().track)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTitle),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTitleImage),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTitleSvg),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                    href: \"/img/icon/sprite.svg#icon-note\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: setTrack,\n                            className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTitle),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackText),\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: setTrack,\n                    className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackAuthor),\n                    children: author\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: setTrack,\n                    className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackAlbum),\n                    children: album\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTime),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTimeText),\n                            children: time\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: (_PlayListItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackTimeSvg),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                href: \"/img/icon/sprite.svg#icon-like\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\PlayListItem\\\\PlayListItem.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = PlayListItem;\nvar _c;\n$RefreshReg$(_c, \"PlayListItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1BsYXlMaXN0SXRlbS9QbGF5TGlzdEl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNxQjtBQUNYO0FBVXJCLFNBQVNHLGFBQWEsS0FNakI7UUFOaUIsRUFDbkNDLElBQUksRUFDSkMsSUFBSSxFQUNKQyxNQUFNLEVBQ05DLEtBQUssRUFDTEMsUUFBUSxFQUNVLEdBTmlCO0lBUW5DLHdEQUF3RDtJQUN4RCwwRUFBMEU7SUFFMUUscUJBQ0UsOERBQUNDO1FBQUlDLFNBQVNGO1FBQVVHLFdBQVdWLDhFQUFtQjtrQkFDcEQsNEVBQUNRO1lBQUlFLFdBQVdULGlEQUFVQSxDQUFDRCwrRUFBb0IsRUFBRUEsdUVBQVk7OzhCQUMzRCw4REFBQ1E7b0JBQUlFLFdBQVdWLDRFQUFpQjs7c0NBQy9CLDhEQUFDUTs0QkFBSUUsV0FBV1YsaUZBQXNCO3NDQUNwQyw0RUFBQ2dCO2dDQUFJTixXQUFXViwrRUFBb0I7MENBQ2xDLDRFQUFDa0I7b0NBQUlDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR2QsOERBQUNYOzRCQUFJQyxTQUFTRjs0QkFBVUcsV0FBV1YsNEVBQWlCO3NDQUVsRCw0RUFBQ29CO2dDQUFLVixXQUFXViwyRUFBZ0I7MENBQUdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJeEMsOERBQUNLO29CQUFJQyxTQUFTRjtvQkFBVUcsV0FBV1YsNkVBQWtCOzhCQUVsREs7Ozs7Ozs4QkFHSCw4REFBQ0c7b0JBQUlDLFNBQVNGO29CQUFVRyxXQUFXViw0RUFBaUI7OEJBRWpETTs7Ozs7OzhCQUdILDhEQUFDRTtvQkFBSUUsV0FBV1YsMkVBQWdCOztzQ0FDOUIsOERBQUNvQjs0QkFBS1YsV0FBV1YsK0VBQW9CO3NDQUFHSTs7Ozs7O3NDQUN4Qyw4REFBQ1k7NEJBQUlOLFdBQVdWLDhFQUFtQjtzQ0FDakMsNEVBQUNrQjtnQ0FBSUMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QjtLQTdDd0JqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QbGF5TGlzdEl0ZW0vUGxheUxpc3RJdGVtLnRzeD9iOTVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUGxheUxpc3RJdGVtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbnR5cGUgUGxheUxpc3RJdGVtUHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdGltZTogbnVtYmVyO1xuICBhdXRob3I6IHN0cmluZztcbiAgYWxidW06IHN0cmluZztcbiAgc2V0VHJhY2s6ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5TGlzdEl0ZW0oe1xuICBuYW1lLFxuICB0aW1lLFxuICBhdXRob3IsXG4gIGFsYnVtLFxuICBzZXRUcmFjayxcbn06IFBsYXlMaXN0SXRlbVByb3BzKSB7XG5cbiAgLy8gbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKGUuZHVyYXRpb25faW5fc2Vjb25kcyAvIDYwKTtcbiAgLy8gbGV0IHNlY29uZHMgPSAoZS5kdXJhdGlvbl9pbl9zZWNvbmRzICUgNjApLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXtzZXRUcmFja30gY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RJdGVtfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5wbGF5bGlzdFRyYWNrLCBzdHlsZXMudHJhY2spfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmFja1RpdGxlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrVGl0bGVJbWFnZX0+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrVGl0bGVTdmd9PlxuICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIvaW1nL2ljb24vc3ByaXRlLnN2ZyNpY29uLW5vdGVcIj48L3VzZT5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgb25DbGljaz17c2V0VHJhY2t9IGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrVGl0bGV9PlxuICAgICAgICAgICAgey8qIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrVGl0bGVMaW5rfSBocmVmPVwiaHR0cDovL1wiPiAqL31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrVGV4dH0+e25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgey8qIDwvYT4gKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3NldFRyYWNrfSBjbGFzc05hbWU9e3N0eWxlcy50cmFja0F1dGhvcn0+XG4gICAgICAgICAgey8qIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrQXV0aG9yTGlua30gaHJlZj1cImh0dHA6Ly9cIj4gKi99XG4gICAgICAgICAge2F1dGhvcn1cbiAgICAgICAgICB7LyogPC9hPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgb25DbGljaz17c2V0VHJhY2t9IGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrQWxidW19PlxuICAgICAgICAgIHsvKiA8YSBjbGFzc05hbWU9e3N0eWxlcy50cmFja0FsYnVtTGlua30gaHJlZj1cImh0dHA6Ly9cIj4gKi99XG4gICAgICAgICAge2FsYnVtfVxuICAgICAgICAgIHsvKiA8L2E+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmFja1RpbWV9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrVGltZVRleHR9Pnt0aW1lfTwvc3Bhbj5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrVGltZVN2Z30+XG4gICAgICAgICAgICA8dXNlIGhyZWY9XCIvaW1nL2ljb24vc3ByaXRlLnN2ZyNpY29uLWxpa2VcIj48L3VzZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsImNsYXNzTmFtZXMiLCJQbGF5TGlzdEl0ZW0iLCJuYW1lIiwidGltZSIsImF1dGhvciIsImFsYnVtIiwic2V0VHJhY2siLCJkaXYiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwicGxheWxpc3RJdGVtIiwicGxheWxpc3RUcmFjayIsInRyYWNrIiwidHJhY2tUaXRsZSIsInRyYWNrVGl0bGVJbWFnZSIsInN2ZyIsInRyYWNrVGl0bGVTdmciLCJ1c2UiLCJocmVmIiwic3BhbiIsInRyYWNrVGV4dCIsInRyYWNrQXV0aG9yIiwidHJhY2tBbGJ1bSIsInRyYWNrVGltZSIsInRyYWNrVGltZVRleHQiLCJ0cmFja1RpbWVTdmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PlayListItem/PlayListItem.tsx\n"));

/***/ })

});