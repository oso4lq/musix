"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tracks/page",{

/***/ "(app-pages-browser)/./src/components/MainSlideBar/MainSlideBar.tsx":
/*!******************************************************!*\
  !*** ./src/components/MainSlideBar/MainSlideBar.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainSlideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _MainSlideBar_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MainSlideBar.module.css */ \"(app-pages-browser)/./src/components/MainSlideBar/MainSlideBar.module.css\");\n/* harmony import */ var _MainSlideBar_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_MainSlideBar_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _store_features_authSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/features/authSlice */ \"(app-pages-browser)/./src/store/features/authSlice.ts\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction MainSlideBar(param) {\n    let { isSideBar } = param;\n    _s();\n    const dispatcher = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const username = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.auth.authUserData.username);\n    const handleLogout = ()=>{\n        dispatcher((0,_store_features_authSlice__WEBPACK_IMPORTED_MODULE_5__.logOut)());\n    };\n    const handlePlaylistNumber = (number)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_6__.setPlaylistNumber)(number));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_MainSlideBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainSidebar), (_MainSlideBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().sidebar)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_MainSlideBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().sidebarPersonal),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_MainSlideBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().sidebarPersonalName),\n                        children: username ? username : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            href: \"/signin/\",\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 35\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_MainSlideBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().sidebarIcon),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>handleLogout(),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                    href: \"/img/icon/sprite.svg#logout\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            isSideBar && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_MainSlideBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().sidebarBlock),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_MainSlideBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().sidebarList),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_MainSlideBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().sidebarItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"/tracks/1\",\n                                onClick: ()=>handlePlaylistNumber(1),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    width: 250,\n                                    height: 150,\n                                    className: (_MainSlideBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().sidebarImage),\n                                    src: \"/img/playlist01.png\",\n                                    alt: \"day's playlist\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_MainSlideBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().sidebarItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"/tracks/2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    width: 250,\n                                    height: 150,\n                                    className: (_MainSlideBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().sidebarImage),\n                                    src: \"/img/playlist02.png\",\n                                    alt: \"day's playlist\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_MainSlideBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().sidebarItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"/tracks/3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    width: 250,\n                                    height: 150,\n                                    className: (_MainSlideBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().sidebarImage),\n                                    src: \"/img/playlist03.png\",\n                                    alt: \"day's playlist\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\MainSlideBar\\\\MainSlideBar.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(MainSlideBar, \"z3PxXpX+SZ1WoVq/e0+cSs9DeLM=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,\n        _hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = MainSlideBar;\nvar _c;\n$RefreshReg$(_c, \"MainSlideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01haW5TbGlkZUJhci9NYWluU2xpZGVCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeUQ7QUFDWDtBQUNWO0FBQ0w7QUFDRjtBQUN1QjtBQUNhO0FBTWxELFNBQVNRLGFBQWEsS0FBOEI7UUFBOUIsRUFBRUMsU0FBUyxFQUFtQixHQUE5Qjs7SUFFbkMsTUFBTUMsYUFBYVYsc0RBQWNBO0lBQ2pDLE1BQU1XLFdBQVdWLHNEQUFjQSxDQUFDLENBQUNXLFFBQVVBLE1BQU1DLElBQUksQ0FBQ0MsWUFBWSxDQUFDSCxRQUFRO0lBRTNFLE1BQU1JLGVBQWU7UUFDbkJMLFdBQVdKLGlFQUFNQTtJQUNuQjtJQUNBLE1BQU1VLHVCQUF1QixDQUFDQztRQUM1QlAsV0FBV0gsOEVBQWlCQSxDQUFDVTtJQUMvQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXaEIsaURBQVVBLENBQUNELDZFQUFrQixFQUFFQSx5RUFBYzs7MEJBQzNELDhEQUFDZ0I7Z0JBQUlDLFdBQVdqQixpRkFBc0I7O2tDQUNwQyw4REFBQ3FCO3dCQUFFSixXQUFXakIscUZBQTBCO2tDQUNyQ1MsV0FBV0EseUJBQVksOERBQUNOLGlEQUFJQTs0QkFBQ29CLE1BQU07c0NBQVk7Ozs7Ozs7Ozs7O2tDQUVsRCw4REFBQ1A7d0JBQUlDLFdBQVdqQiw2RUFBa0I7a0NBQ2hDLDRFQUFDZ0I7NEJBQUlTLFNBQVMsSUFBTVo7c0NBQ2xCLDRFQUFDYTswQ0FDQyw0RUFBQ0M7b0NBQUlKLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtqQmhCLDJCQUNDLDhEQUFDUztnQkFBSUMsV0FBV2pCLDhFQUFtQjswQkFDakMsNEVBQUNnQjtvQkFBSUMsV0FBV2pCLDZFQUFrQjs7c0NBQ2hDLDhEQUFDZ0I7NEJBQUlDLFdBQVdqQiw2RUFBa0I7c0NBQ2hDLDRFQUFDRyxpREFBSUE7Z0NBQ0hvQixNQUFNO2dDQUNORSxTQUFTLElBQU1YLHFCQUFxQjswQ0FFcEMsNEVBQUNaLGtEQUFLQTtvQ0FDSjZCLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JmLFdBQVdqQiw4RUFBbUI7b0NBQzlCa0MsS0FBSTtvQ0FDSkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJViw4REFBQ25COzRCQUFJQyxXQUFXakIsNkVBQWtCO3NDQUNoQyw0RUFBQ0csaURBQUlBO2dDQUNMb0IsTUFBTTswQ0FDSiw0RUFBQ3JCLGtEQUFLQTtvQ0FDSjZCLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JmLFdBQVdqQiw4RUFBbUI7b0NBQzlCa0MsS0FBSTtvQ0FDSkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJViw4REFBQ25COzRCQUFJQyxXQUFXakIsNkVBQWtCO3NDQUNoQyw0RUFBQ0csaURBQUlBO2dDQUFDb0IsTUFBTTswQ0FDViw0RUFBQ3JCLGtEQUFLQTtvQ0FDSjZCLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JmLFdBQVdqQiw4RUFBbUI7b0NBQzlCa0MsS0FBSTtvQ0FDSkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3RCO0dBdkV3QjdCOztRQUVIUixrREFBY0E7UUFDaEJDLGtEQUFjQTs7O0tBSFRPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW5TbGlkZUJhci9NYWluU2xpZGVCYXIudHN4P2ZlODYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvaG9va3NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTWFpblNsaWRlQmFyLm1vZHVsZS5jc3NcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgbG9nT3V0IH0gZnJvbSBcIkAvc3RvcmUvZmVhdHVyZXMvYXV0aFNsaWNlXCI7XG5pbXBvcnQgeyBzZXRQbGF5bGlzdE51bWJlciB9IGZyb20gXCJAL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlXCI7XG5cbnR5cGUgbWFpblNpZGVCYXJUeXBlID0ge1xuICBpc1NpZGVCYXI6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpblNsaWRlQmFyKHsgaXNTaWRlQmFyIH06IG1haW5TaWRlQmFyVHlwZSkge1xuXG4gIGNvbnN0IGRpc3BhdGNoZXIgPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBjb25zdCB1c2VybmFtZSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC5hdXRoVXNlckRhdGEudXNlcm5hbWUpO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaGVyKGxvZ091dCgpKTtcbiAgfVxuICBjb25zdCBoYW5kbGVQbGF5bGlzdE51bWJlciA9IChudW1iZXI6IG51bWJlcikgPT4ge1xuICAgIGRpc3BhdGNoZXIoc2V0UGxheWxpc3ROdW1iZXIobnVtYmVyKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5tYWluU2lkZWJhciwgc3R5bGVzLnNpZGViYXIpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhclBlcnNvbmFsfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhclBlcnNvbmFsTmFtZX0+XG4gICAgICAgICAge3VzZXJuYW1lID8gdXNlcm5hbWUgOiAoPExpbmsgaHJlZj17XCIvc2lnbmluL1wifT5TaWduIEluPC9MaW5rPil9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFySWNvbn0+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMb2dvdXQoKX0+XG4gICAgICAgICAgICA8c3ZnPlxuICAgICAgICAgICAgICA8dXNlIGhyZWY9XCIvaW1nL2ljb24vc3ByaXRlLnN2ZyNsb2dvdXRcIj48L3VzZT5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2lzU2lkZUJhciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhckJsb2NrfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJMaXN0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhckl0ZW19PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e1wiL3RyYWNrcy8xXCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGxheWxpc3ROdW1iZXIoMSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNTB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE1MH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJJbWFnZX1cbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvcGxheWxpc3QwMS5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiZGF5J3MgcGxheWxpc3RcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFySXRlbX0+XG4gICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICBocmVmPXtcIi90cmFja3MvMlwifT5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNTB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE1MH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJJbWFnZX1cbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvcGxheWxpc3QwMi5wbmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiZGF5J3MgcGxheWxpc3RcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFySXRlbX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3RyYWNrcy8zXCJ9PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezI1MH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTUwfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhckltYWdlfVxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9wbGF5bGlzdDAzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJkYXkncyBwbGF5bGlzdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwic3R5bGVzIiwiY2xhc3NOYW1lcyIsIkltYWdlIiwiTGluayIsImxvZ091dCIsInNldFBsYXlsaXN0TnVtYmVyIiwiTWFpblNsaWRlQmFyIiwiaXNTaWRlQmFyIiwiZGlzcGF0Y2hlciIsInVzZXJuYW1lIiwic3RhdGUiLCJhdXRoIiwiYXV0aFVzZXJEYXRhIiwiaGFuZGxlTG9nb3V0IiwiaGFuZGxlUGxheWxpc3ROdW1iZXIiLCJudW1iZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluU2lkZWJhciIsInNpZGViYXIiLCJzaWRlYmFyUGVyc29uYWwiLCJwIiwic2lkZWJhclBlcnNvbmFsTmFtZSIsImhyZWYiLCJzaWRlYmFySWNvbiIsIm9uQ2xpY2siLCJzdmciLCJ1c2UiLCJzaWRlYmFyQmxvY2siLCJzaWRlYmFyTGlzdCIsInNpZGViYXJJdGVtIiwid2lkdGgiLCJoZWlnaHQiLCJzaWRlYmFySW1hZ2UiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MainSlideBar/MainSlideBar.tsx\n"));

/***/ })

});