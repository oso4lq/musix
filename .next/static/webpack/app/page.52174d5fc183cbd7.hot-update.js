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

/***/ "(app-pages-browser)/./src/components/CenterBlock/CenterBlock.tsx":
/*!****************************************************!*\
  !*** ./src/components/CenterBlock/CenterBlock.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CenterBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CenterBlock.module.css */ \"(app-pages-browser)/./src/components/CenterBlock/CenterBlock.module.css\");\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_FilterBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilterBlock */ \"(app-pages-browser)/./src/components/FilterBlock/index.tsx\");\n/* harmony import */ var _components_ContentPlaylist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/ContentPlaylist */ \"(app-pages-browser)/./src/components/ContentPlaylist/index.tsx\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CenterBlock(param) {\n    let { setTrack } = param;\n    _s();\n    const [trackList, setTrackList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_api__WEBPACK_IMPORTED_MODULE_5__.getTracks)().then((data)=>setTrackList(data));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainCenterBlock), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlock)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockSearch), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().search)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchSvg),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                            href: \"/img/icon/sprite.svg#icon-search\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchText),\n                        type: \"search\",\n                        placeholder: \"Search\",\n                        name: \"search\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockH2),\n                children: \"Tracks\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBlock__WEBPACK_IMPORTED_MODULE_3__.FilterBlock, {\n                trackList: trackList\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockContent), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistContent)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().contentTitle), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitle)),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitleCol), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().col01)),\n                                children: \"Track\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitleCol), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().col02)),\n                                children: \"Artist\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitleCol), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().col03)),\n                                children: \"Album\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitleCol), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().col04)),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitleSvg),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                        href: \"img/icon/sprite.svg#icon-watch\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentPlaylist__WEBPACK_IMPORTED_MODULE_4__.ContentPlaylist, {\n                        trackList: trackList,\n                        setTrack: setTrack\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(CenterBlock, \"QzuAtCVusbjDrl/mwYq5Q1WY+Kk=\");\n_c = CenterBlock;\nvar _c;\n$RefreshReg$(_c, \"CenterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NlbnRlckJsb2NrL0NlbnRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ1U7QUFDSztBQUNJO0FBQ087QUFDNUI7QUFPbkIsU0FBU1EsWUFBWSxLQUE4QjtRQUE5QixFQUFFQyxRQUFRLEVBQW9CLEdBQTlCOztJQUVsQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUM3Q0QsZ0RBQVNBLENBQUM7UUFDUkksK0NBQVNBLEdBQUdLLElBQUksQ0FBQyxDQUFDQyxPQUFTRixhQUFhRTtJQUMxQyxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV2YsaURBQVVBLENBQUNDLGdGQUFzQixFQUFFQSw0RUFBa0I7OzBCQUNuRSw4REFBQ2E7Z0JBQUlDLFdBQVdmLGlEQUFVQSxDQUFDQyxrRkFBd0IsRUFBRUEsdUVBQWE7O2tDQUNoRSw4REFBQ21CO3dCQUFJTCxXQUFXZCwwRUFBZ0I7a0NBQzlCLDRFQUFDcUI7NEJBQUlDLE1BQUs7Ozs7Ozs7Ozs7O2tDQUVaLDhEQUFDQzt3QkFDQ1QsV0FBV2QsMkVBQWlCO3dCQUM1QnlCLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHVCw4REFBQ0M7Z0JBQUdkLFdBQVdkLDhFQUFvQjswQkFBRTs7Ozs7OzBCQUNyQyw4REFBQ0ksZ0VBQVdBO2dCQUFDSyxXQUFXQTs7Ozs7OzBCQUN4Qiw4REFBQ0k7Z0JBQ0NDLFdBQVdmLGlEQUFVQSxDQUNuQkMsbUZBQXlCLEVBQ3pCQSxnRkFBc0I7O2tDQUd4Qiw4REFBQ2E7d0JBQUlDLFdBQVdmLGlEQUFVQSxDQUFDQyw2RUFBbUIsRUFBRUEsOEVBQW9COzswQ0FDbEUsOERBQUNhO2dDQUFJQyxXQUFXZixpREFBVUEsQ0FBQ0MsaUZBQXVCLEVBQUVBLHNFQUFZOzBDQUFHOzs7Ozs7MENBR25FLDhEQUFDYTtnQ0FBSUMsV0FBV2YsaURBQVVBLENBQUNDLGlGQUF1QixFQUFFQSxzRUFBWTswQ0FBRzs7Ozs7OzBDQUduRSw4REFBQ2E7Z0NBQUlDLFdBQVdmLGlEQUFVQSxDQUFDQyxpRkFBdUIsRUFBRUEsc0VBQVk7MENBQUc7Ozs7OzswQ0FHbkUsOERBQUNhO2dDQUFJQyxXQUFXZixpREFBVUEsQ0FBQ0MsaUZBQXVCLEVBQUVBLHNFQUFZOzBDQUM5RCw0RUFBQ21CO29DQUFJTCxXQUFXZCxpRkFBdUI7OENBQ3JDLDRFQUFDcUI7d0NBQUlDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR2QsOERBQUNUOzs7Ozs7Ozs7OztrQ0FFSCw4REFBQ1Isd0VBQWVBO3dCQUFDSSxXQUFXQTt3QkFBV0QsVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl6RDtHQWpEd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NlbnRlckJsb2NrL0NlbnRlckJsb2NrLnRzeD8wZmY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NlbnRlckJsb2NrLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaWx0ZXJCbG9jayB9IGZyb20gXCJAL2NvbXBvbmVudHMvRmlsdGVyQmxvY2tcIjtcbmltcG9ydCB7IENvbnRlbnRQbGF5bGlzdCB9IGZyb20gXCJAY29tcG9uZW50cy9Db250ZW50UGxheWxpc3RcIjtcbmltcG9ydCB7IGdldFRyYWNrcyB9IGZyb20gXCJAL2FwaVwiO1xuaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcblxudHlwZSBDZW50ZXJCbG9ja1Byb3BzID0ge1xuICBzZXRUcmFjazogKHBhcmFtOiB0cmFja1R5cGUpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDZW50ZXJCbG9jayh7IHNldFRyYWNrIH06IENlbnRlckJsb2NrUHJvcHMpIHtcblxuICBjb25zdCBbdHJhY2tMaXN0LCBzZXRUcmFja0xpc3RdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFRyYWNrcygpLnRoZW4oKGRhdGEpID0+IHNldFRyYWNrTGlzdChkYXRhKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5tYWluQ2VudGVyQmxvY2ssIHN0eWxlcy5jZW50ZXJCbG9jayl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNlbnRlckJsb2NrU2VhcmNoLCBzdHlsZXMuc2VhcmNoKX0+XG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoU3ZnfT5cbiAgICAgICAgICA8dXNlIGhyZWY9XCIvaW1nL2ljb24vc3ByaXRlLnN2ZyNpY29uLXNlYXJjaFwiPjwvdXNlPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoVGV4dH1cbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgbmFtZT1cInNlYXJjaFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJCbG9ja0gyfT5UcmFja3M8L2gyPlxuICAgICAgPEZpbHRlckJsb2NrIHRyYWNrTGlzdD17dHJhY2tMaXN0fSAvPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgc3R5bGVzLmNlbnRlckJsb2NrQ29udGVudCxcbiAgICAgICAgICBzdHlsZXMucGxheWxpc3RDb250ZW50XG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jb250ZW50VGl0bGUsIHN0eWxlcy5wbGF5bGlzdFRpdGxlKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLnBsYXlsaXN0VGl0bGVDb2wsIHN0eWxlcy5jb2wwMSl9PlxuICAgICAgICAgICAgVHJhY2tcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMucGxheWxpc3RUaXRsZUNvbCwgc3R5bGVzLmNvbDAyKX0+XG4gICAgICAgICAgICBBcnRpc3RcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMucGxheWxpc3RUaXRsZUNvbCwgc3R5bGVzLmNvbDAzKX0+XG4gICAgICAgICAgICBBbGJ1bVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5wbGF5bGlzdFRpdGxlQ29sLCBzdHlsZXMuY29sMDQpfT5cbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZVN2Z30+XG4gICAgICAgICAgICAgIDx1c2UgaHJlZj1cImltZy9pY29uL3Nwcml0ZS5zdmcjaWNvbi13YXRjaFwiPjwvdXNlPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDb250ZW50UGxheWxpc3QgdHJhY2tMaXN0PXt0cmFja0xpc3R9IHNldFRyYWNrPXtzZXRUcmFja30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmlsdGVyQmxvY2siLCJDb250ZW50UGxheWxpc3QiLCJnZXRUcmFja3MiLCJDZW50ZXJCbG9jayIsInNldFRyYWNrIiwidHJhY2tMaXN0Iiwic2V0VHJhY2tMaXN0IiwidGhlbiIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluQ2VudGVyQmxvY2siLCJjZW50ZXJCbG9jayIsImNlbnRlckJsb2NrU2VhcmNoIiwic2VhcmNoIiwic3ZnIiwic2VhcmNoU3ZnIiwidXNlIiwiaHJlZiIsImlucHV0Iiwic2VhcmNoVGV4dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJoMiIsImNlbnRlckJsb2NrSDIiLCJjZW50ZXJCbG9ja0NvbnRlbnQiLCJwbGF5bGlzdENvbnRlbnQiLCJjb250ZW50VGl0bGUiLCJwbGF5bGlzdFRpdGxlIiwicGxheWxpc3RUaXRsZUNvbCIsImNvbDAxIiwiY29sMDIiLCJjb2wwMyIsImNvbDA0IiwicGxheWxpc3RUaXRsZVN2ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CenterBlock/CenterBlock.tsx\n"));

/***/ })

});