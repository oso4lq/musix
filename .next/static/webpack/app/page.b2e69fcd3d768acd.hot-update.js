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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CenterBlock.module.css */ \"(app-pages-browser)/./src/components/CenterBlock/CenterBlock.module.css\");\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_ContentPlaylist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/ContentPlaylist */ \"(app-pages-browser)/./src/components/ContentPlaylist/index.tsx\");\n/* harmony import */ var _components_FilterBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FilterBlock */ \"(app-pages-browser)/./src/components/FilterBlock/index.tsx\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api.tsx\");\n\n\n\n\n\n\n\nasync function CenterBlock() {\n    let playlistArray;\n    try {\n        playlistArray = await (0,_api__WEBPACK_IMPORTED_MODULE_5__.getTracks)();\n    } catch (error) {\n        console.error();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainCenterBlock), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlock)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockSearch), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().search)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchSvg),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                            href: \"/img/icon/sprite.svg#icon-search\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchText),\n                        type: \"search\",\n                        placeholder: \"Search\",\n                        name: \"search\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockH2),\n                children: \"Tracks\"\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBlock__WEBPACK_IMPORTED_MODULE_4__.FilterBlock, {}, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockContent), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistContent)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().contentTitle), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitle)),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitleCol), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().col01)),\n                                children: \"Track\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitleCol), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().col02)),\n                                children: \"Artist\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitleCol), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().col03)),\n                                children: \"Album\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitleCol), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().col04)),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitleSvg),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                        href: \"img/icon/sprite.svg#icon-watch\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentPlaylist__WEBPACK_IMPORTED_MODULE_3__.ContentPlaylist, {}, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = CenterBlock;\nvar _c;\n$RefreshReg$(_c, \"CenterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NlbnRlckJsb2NrL0NlbnRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDVTtBQUNVO0FBQ2dCO0FBQ1A7QUFDckI7QUFFbEMsZUFBZU07SUFDYixJQUFJQztJQUNKLElBQUk7UUFDRkEsZ0JBQWdCLE1BQU1GLCtDQUFTQTtJQUNqQyxFQUNBLE9BQU9HLE9BQU87UUFDWkMsUUFBUUQsS0FBSztJQUNmO0lBQ0EscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVdWLGlEQUFVQSxDQUFDQyxnRkFBc0IsRUFBRUEsNEVBQWtCOzswQkFDbkUsOERBQUNRO2dCQUFJQyxXQUFXVixpREFBVUEsQ0FBQ0Msa0ZBQXdCLEVBQUVBLHVFQUFhOztrQ0FDaEUsOERBQUNjO3dCQUFJTCxXQUFXVCwwRUFBZ0I7a0NBQzlCLDRFQUFDZ0I7NEJBQUlDLE1BQUs7Ozs7Ozs7Ozs7O2tDQUVaLDhEQUFDQzt3QkFDQ1QsV0FBV1QsMkVBQWlCO3dCQUM1Qm9CLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHVCw4REFBQ0M7Z0JBQUdkLFdBQVdULDhFQUFvQjswQkFBRTs7Ozs7OzBCQUNyQyw4REFBQ0UsZ0VBQVdBOzs7OzswQkFDWiw4REFBQ007Z0JBQ0NDLFdBQVdWLGlEQUFVQSxDQUNuQkMsbUZBQXlCLEVBQ3pCQSxnRkFBc0I7O2tDQUd4Qiw4REFBQ1E7d0JBQUlDLFdBQVdWLGlEQUFVQSxDQUFDQyw2RUFBbUIsRUFBRUEsOEVBQW9COzswQ0FDbEUsOERBQUNRO2dDQUFJQyxXQUFXVixpREFBVUEsQ0FBQ0MsaUZBQXVCLEVBQUVBLHNFQUFZOzBDQUFHOzs7Ozs7MENBR25FLDhEQUFDUTtnQ0FBSUMsV0FBV1YsaURBQVVBLENBQUNDLGlGQUF1QixFQUFFQSxzRUFBWTswQ0FBRzs7Ozs7OzBDQUduRSw4REFBQ1E7Z0NBQUlDLFdBQVdWLGlEQUFVQSxDQUFDQyxpRkFBdUIsRUFBRUEsc0VBQVk7MENBQUc7Ozs7OzswQ0FHbkUsOERBQUNRO2dDQUFJQyxXQUFXVixpREFBVUEsQ0FBQ0MsaUZBQXVCLEVBQUVBLHNFQUFZOzBDQUM5RCw0RUFBQ2M7b0NBQUlMLFdBQVdULGlGQUF1Qjs4Q0FDckMsNEVBQUNnQjt3Q0FBSUMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJaEIsOERBQUVoQix3RUFBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpCO0tBakRlRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DZW50ZXJCbG9jay9DZW50ZXJCbG9jay50c3g/MGZmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DZW50ZXJCbG9jay5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBDb250ZW50UGxheWxpc3QgfSBmcm9tIFwiQGNvbXBvbmVudHMvQ29udGVudFBsYXlsaXN0XCI7XG5pbXBvcnQgeyBGaWx0ZXJCbG9jayB9IGZyb20gXCJAL2NvbXBvbmVudHMvRmlsdGVyQmxvY2tcIjtcbmltcG9ydCB7IGdldFRyYWNrcyB9IGZyb20gXCJAL2FwaVwiO1xuXG5hc3luYyBmdW5jdGlvbiBDZW50ZXJCbG9jaygpIHtcbiAgbGV0IHBsYXlsaXN0QXJyYXk6IHRyYWNrVHlwZVtdO1xuICB0cnkge1xuICAgIHBsYXlsaXN0QXJyYXkgPSBhd2FpdCBnZXRUcmFja3MoKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5tYWluQ2VudGVyQmxvY2ssIHN0eWxlcy5jZW50ZXJCbG9jayl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNlbnRlckJsb2NrU2VhcmNoLCBzdHlsZXMuc2VhcmNoKX0+XG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoU3ZnfT5cbiAgICAgICAgICA8dXNlIGhyZWY9XCIvaW1nL2ljb24vc3ByaXRlLnN2ZyNpY29uLXNlYXJjaFwiPjwvdXNlPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoVGV4dH1cbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgbmFtZT1cInNlYXJjaFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJCbG9ja0gyfT5UcmFja3M8L2gyPlxuICAgICAgPEZpbHRlckJsb2NrIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBzdHlsZXMuY2VudGVyQmxvY2tDb250ZW50LFxuICAgICAgICAgIHN0eWxlcy5wbGF5bGlzdENvbnRlbnRcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNvbnRlbnRUaXRsZSwgc3R5bGVzLnBsYXlsaXN0VGl0bGUpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMucGxheWxpc3RUaXRsZUNvbCwgc3R5bGVzLmNvbDAxKX0+XG4gICAgICAgICAgICBUcmFja1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5wbGF5bGlzdFRpdGxlQ29sLCBzdHlsZXMuY29sMDIpfT5cbiAgICAgICAgICAgIEFydGlzdFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5wbGF5bGlzdFRpdGxlQ29sLCBzdHlsZXMuY29sMDMpfT5cbiAgICAgICAgICAgIEFsYnVtXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLnBsYXlsaXN0VGl0bGVDb2wsIHN0eWxlcy5jb2wwNCl9PlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy5wbGF5bGlzdFRpdGxlU3ZnfT5cbiAgICAgICAgICAgICAgPHVzZSBocmVmPVwiaW1nL2ljb24vc3ByaXRlLnN2ZyNpY29uLXdhdGNoXCI+PC91c2U+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwgQ29udGVudFBsYXlsaXN0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJDb250ZW50UGxheWxpc3QiLCJGaWx0ZXJCbG9jayIsImdldFRyYWNrcyIsIkNlbnRlckJsb2NrIiwicGxheWxpc3RBcnJheSIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsIm1haW5DZW50ZXJCbG9jayIsImNlbnRlckJsb2NrIiwiY2VudGVyQmxvY2tTZWFyY2giLCJzZWFyY2giLCJzdmciLCJzZWFyY2hTdmciLCJ1c2UiLCJocmVmIiwiaW5wdXQiLCJzZWFyY2hUZXh0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibmFtZSIsImgyIiwiY2VudGVyQmxvY2tIMiIsImNlbnRlckJsb2NrQ29udGVudCIsInBsYXlsaXN0Q29udGVudCIsImNvbnRlbnRUaXRsZSIsInBsYXlsaXN0VGl0bGUiLCJwbGF5bGlzdFRpdGxlQ29sIiwiY29sMDEiLCJjb2wwMiIsImNvbDAzIiwiY29sMDQiLCJwbGF5bGlzdFRpdGxlU3ZnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CenterBlock/CenterBlock.tsx\n"));

/***/ })

});