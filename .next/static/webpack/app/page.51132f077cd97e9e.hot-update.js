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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CenterBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CenterBlock.module.css */ \"(app-pages-browser)/./src/components/CenterBlock/CenterBlock.module.css\");\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ContentPlaylist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/ContentPlaylist */ \"(app-pages-browser)/./src/components/ContentPlaylist/index.tsx\");\n/* harmony import */ var _components_FilterBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FilterBlock */ \"(app-pages-browser)/./src/components/FilterBlock/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CenterBlock() {\n    _s();\n    const [tracks, setTracks] = useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getData().then((data)=>setTracks(data));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainCenterBlock), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().centerBlock)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().centerBlockSearch), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().search)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchSvg),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                            href: \"/img/icon/sprite.svg#icon-search\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchText),\n                        type: \"search\",\n                        placeholder: \"Search\",\n                        name: \"search\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().centerBlockH2),\n                children: \"Tracks\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBlock__WEBPACK_IMPORTED_MODULE_4__.FilterBlock, {}, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().centerBlockContent), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().playlistContent)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().contentTitle), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().playlistTitle)),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().playlistTitleCol), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().col01)),\n                                children: \"Track\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().playlistTitleCol), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().col02)),\n                                children: \"Artist\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().playlistTitleCol), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().col03)),\n                                children: \"Album\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().playlistTitleCol), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().col04)),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().playlistTitleSvg),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                        href: \"img/icon/sprite.svg#icon-watch\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentPlaylist__WEBPACK_IMPORTED_MODULE_3__.ContentPlaylist, {}, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(CenterBlock, \"f0kRKS0z35esRkLUBB+Oc19rjkA=\");\n_c = CenterBlock;\nvar _c;\n$RefreshReg$(_c, \"CenterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NlbnRlckJsb2NrL0NlbnRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDVTtBQUNMO0FBQ3FCO0FBQ1A7QUFNeEMsU0FBU007O0lBRXRCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHQyxTQUFTLEVBQUU7SUFDdkNOLGdEQUFTQSxDQUFDO1FBQ1JPLFVBQVVDLElBQUksQ0FBQyxDQUFDQyxPQUFTSixVQUFVSTtJQUNyQyxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV2QsaURBQVVBLENBQUNDLGdGQUFzQixFQUFFQSw0RUFBa0I7OzBCQUNuRSw4REFBQ1k7Z0JBQUlDLFdBQVdkLGlEQUFVQSxDQUFDQyxrRkFBd0IsRUFBRUEsdUVBQWE7O2tDQUNoRSw4REFBQ2tCO3dCQUFJTCxXQUFXYiwwRUFBZ0I7a0NBQzlCLDRFQUFDb0I7NEJBQUlDLE1BQUs7Ozs7Ozs7Ozs7O2tDQUVaLDhEQUFDQzt3QkFDQ1QsV0FBV2IsMkVBQWlCO3dCQUM1QndCLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHVCw4REFBQ0M7Z0JBQUdkLFdBQVdiLDhFQUFvQjswQkFBRTs7Ozs7OzBCQUNyQyw4REFBQ0ksZ0VBQVdBOzs7OzswQkFDWiw4REFBQ1E7Z0JBQ0NDLFdBQVdkLGlEQUFVQSxDQUNuQkMsbUZBQXlCLEVBQ3pCQSxnRkFBc0I7O2tDQUd4Qiw4REFBQ1k7d0JBQUlDLFdBQVdkLGlEQUFVQSxDQUFDQyw2RUFBbUIsRUFBRUEsOEVBQW9COzswQ0FDbEUsOERBQUNZO2dDQUFJQyxXQUFXZCxpREFBVUEsQ0FBQ0MsaUZBQXVCLEVBQUVBLHNFQUFZOzBDQUFHOzs7Ozs7MENBR25FLDhEQUFDWTtnQ0FBSUMsV0FBV2QsaURBQVVBLENBQUNDLGlGQUF1QixFQUFFQSxzRUFBWTswQ0FBRzs7Ozs7OzBDQUduRSw4REFBQ1k7Z0NBQUlDLFdBQVdkLGlEQUFVQSxDQUFDQyxpRkFBdUIsRUFBRUEsc0VBQVk7MENBQUc7Ozs7OzswQ0FHbkUsOERBQUNZO2dDQUFJQyxXQUFXZCxpREFBVUEsQ0FBQ0MsaUZBQXVCLEVBQUVBLHNFQUFZOzBDQUM5RCw0RUFBQ2tCO29DQUFJTCxXQUFXYixpRkFBdUI7OENBQ3JDLDRFQUFDb0I7d0NBQUlDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWhCLDhEQUFFbEIsd0VBQWVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl6QjtHQWhEd0JFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NlbnRlckJsb2NrL0NlbnRlckJsb2NrLnRzeD8wZmY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NlbnRlckJsb2NrLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRlbnRQbGF5bGlzdCB9IGZyb20gXCJAY29tcG9uZW50cy9Db250ZW50UGxheWxpc3RcIjtcbmltcG9ydCB7IEZpbHRlckJsb2NrIH0gZnJvbSBcIkAvY29tcG9uZW50cy9GaWx0ZXJCbG9ja1wiO1xuXG50eXBlIFByb3BzID0ge1xuICBzZXRUcmFjazogKHBhcmFtOiB0cmFja1R5cGUpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDZW50ZXJCbG9jaygpIHtcblxuICBjb25zdCBbdHJhY2tzLCBzZXRUcmFja3NdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldERhdGEoKS50aGVuKChkYXRhKSA9PiBzZXRUcmFja3MoZGF0YSkpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMubWFpbkNlbnRlckJsb2NrLCBzdHlsZXMuY2VudGVyQmxvY2spfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja1NlYXJjaCwgc3R5bGVzLnNlYXJjaCl9PlxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaFN2Z30+XG4gICAgICAgICAgPHVzZSBocmVmPVwiL2ltZy9pY29uL3Nwcml0ZS5zdmcjaWNvbi1zZWFyY2hcIj48L3VzZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaFRleHR9XG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyQmxvY2tIMn0+VHJhY2tzPC9oMj5cbiAgICAgIDxGaWx0ZXJCbG9jayAvPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgc3R5bGVzLmNlbnRlckJsb2NrQ29udGVudCxcbiAgICAgICAgICBzdHlsZXMucGxheWxpc3RDb250ZW50XG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jb250ZW50VGl0bGUsIHN0eWxlcy5wbGF5bGlzdFRpdGxlKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLnBsYXlsaXN0VGl0bGVDb2wsIHN0eWxlcy5jb2wwMSl9PlxuICAgICAgICAgICAgVHJhY2tcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMucGxheWxpc3RUaXRsZUNvbCwgc3R5bGVzLmNvbDAyKX0+XG4gICAgICAgICAgICBBcnRpc3RcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMucGxheWxpc3RUaXRsZUNvbCwgc3R5bGVzLmNvbDAzKX0+XG4gICAgICAgICAgICBBbGJ1bVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5wbGF5bGlzdFRpdGxlQ29sLCBzdHlsZXMuY29sMDQpfT5cbiAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZVN2Z30+XG4gICAgICAgICAgICAgIDx1c2UgaHJlZj1cImltZy9pY29uL3Nwcml0ZS5zdmcjaWNvbi13YXRjaFwiPjwvdXNlPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IENvbnRlbnRQbGF5bGlzdCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsInN0eWxlcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwiQ29udGVudFBsYXlsaXN0IiwiRmlsdGVyQmxvY2siLCJDZW50ZXJCbG9jayIsInRyYWNrcyIsInNldFRyYWNrcyIsInVzZVN0YXRlIiwiZ2V0RGF0YSIsInRoZW4iLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbkNlbnRlckJsb2NrIiwiY2VudGVyQmxvY2siLCJjZW50ZXJCbG9ja1NlYXJjaCIsInNlYXJjaCIsInN2ZyIsInNlYXJjaFN2ZyIsInVzZSIsImhyZWYiLCJpbnB1dCIsInNlYXJjaFRleHQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwiaDIiLCJjZW50ZXJCbG9ja0gyIiwiY2VudGVyQmxvY2tDb250ZW50IiwicGxheWxpc3RDb250ZW50IiwiY29udGVudFRpdGxlIiwicGxheWxpc3RUaXRsZSIsInBsYXlsaXN0VGl0bGVDb2wiLCJjb2wwMSIsImNvbDAyIiwiY29sMDMiLCJjb2wwNCIsInBsYXlsaXN0VGl0bGVTdmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CenterBlock/CenterBlock.tsx\n"));

/***/ })

});