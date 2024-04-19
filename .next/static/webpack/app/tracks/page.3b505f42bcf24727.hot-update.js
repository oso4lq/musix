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

/***/ "(app-pages-browser)/./src/components/Nav/Nav.tsx":
/*!************************************!*\
  !*** ./src/components/Nav/Nav.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks */ \"(app-pages-browser)/./src/hooks.ts\");\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Nav.module.css */ \"(app-pages-browser)/./src/components/Nav/Nav.module.css\");\n/* harmony import */ var _Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Nav_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Nav() {\n    _s();\n    const [isOpened, setIsOpened] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const toggleMenu = ()=>{\n        setIsOpened((prevState)=>!prevState);\n    };\n    const authState = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.auth.authState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainNav), (_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().navLogo), (_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        alt: \"logo\",\n                        width: 113,\n                        height: 17,\n                        className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().logoImage),\n                        src: \"/img/logo.png\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleMenu,\n                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().navBurger), (_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().burger), isOpened ? (_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().openNav) : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().burgerLine)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().burgerLine)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().burgerLine)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            isOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().navMenu), (_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().menu)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().menuList),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().menuItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"/\",\n                                className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().menuLink),\n                                children: \"Main\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().menuItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"/myplaylist\",\n                                className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().menuLink),\n                                children: \"My playlist\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, this),\n                        !authState && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().menuItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"/signin\",\n                                className: (_Nav_module_css__WEBPACK_IMPORTED_MODULE_6___default().menuLink),\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\Nav\\\\Nav.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Nav, \"F1eolC56RsOUIhX3ECqaam/7TWM=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdi9OYXYudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeUM7QUFDSDtBQUNGO0FBQ0w7QUFDRjtBQUNJO0FBRWxCLFNBQVNNOztJQUV0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7SUFDekMsTUFBTUksYUFBYTtRQUNqQkQsWUFBWSxDQUFDRSxZQUFjLENBQUNBO0lBQzlCO0lBRUEsTUFBTUMsWUFBWVgsc0RBQWNBLENBQUMsQ0FBQ1ksUUFBVUEsTUFBTUMsSUFBSSxDQUFDRixTQUFTO0lBRWhFLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXYixpREFBVUEsQ0FBQ0QsZ0VBQWMsRUFBRUEsNERBQVU7OzBCQUNuRCw4REFBQ2dCO2dCQUFJRixXQUFXYixpREFBVUEsQ0FBQ0QsZ0VBQWMsRUFBRUEsNkRBQVc7MEJBQ3BELDRFQUFDRyxpREFBSUE7b0JBQUNnQixNQUFLOzhCQUNULDRFQUFDakIsa0RBQUtBO3dCQUNKa0IsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUlIsV0FBV2Qsa0VBQWdCO3dCQUMzQndCLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSVYsOERBQUNSO2dCQUFJUyxTQUFTakI7Z0JBQVlNLFdBQVdiLGlEQUFVQSxDQUFDRCxrRUFBZ0IsRUFBRUEsK0RBQWEsRUFBRU0sV0FBV04sZ0VBQWMsR0FBRzs7a0NBQzNHLDhEQUFDNkI7d0JBQUtmLFdBQVdkLG1FQUFpQjs7Ozs7O2tDQUNsQyw4REFBQzZCO3dCQUFLZixXQUFXZCxtRUFBaUI7Ozs7OztrQ0FDbEMsOERBQUM2Qjt3QkFBS2YsV0FBV2QsbUVBQWlCOzs7Ozs7Ozs7Ozs7WUFHbENNLDBCQUNFLDhEQUFDVTtnQkFBSUYsV0FBV2IsaURBQVVBLENBQUNELGdFQUFjLEVBQUVBLDZEQUFXOzBCQUNwRCw0RUFBQ2lDO29CQUFHbkIsV0FBV2QsaUVBQWU7O3NDQUM1Qiw4REFBQ21DOzRCQUFHckIsV0FBV2QsaUVBQWU7c0NBQzVCLDRFQUFDRyxpREFBSUE7Z0NBQUNnQixNQUFLO2dDQUFJTCxXQUFXZCxpRUFBZTswQ0FBRTs7Ozs7Ozs7Ozs7c0NBSzdDLDhEQUFDbUM7NEJBQUdyQixXQUFXZCxpRUFBZTtzQ0FDNUIsNEVBQUNHLGlEQUFJQTtnQ0FBQ2dCLE1BQUs7Z0NBQWNMLFdBQVdkLGlFQUFlOzBDQUFFOzs7Ozs7Ozs7Ozt3QkFLdEQsQ0FBQ1UsMkJBQ0EsOERBQUN5Qjs0QkFBR3JCLFdBQVdkLGlFQUFlO3NDQUM1Qiw0RUFBQ0csaURBQUlBO2dDQUFDZ0IsTUFBSztnQ0FBVUwsV0FBV2QsaUVBQWU7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXbkU7R0F4RHdCSzs7UUFPSk4sa0RBQWNBOzs7S0FQVk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L05hdi50c3g/ZDg5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL2hvb2tzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL05hdi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XG5cbiAgY29uc3QgW2lzT3BlbmVkLCBzZXRJc09wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuZWQoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XG4gIH07XG5cbiAgY29uc3QgYXV0aFN0YXRlID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLmF1dGhTdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMubWFpbk5hdiwgc3R5bGVzLm5hdil9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLm5hdkxvZ28sIHN0eWxlcy5sb2dvKX0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgIHdpZHRoPXsxMTN9XG4gICAgICAgICAgICBoZWlnaHQ9ezE3fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9nb0ltYWdlfVxuICAgICAgICAgICAgc3JjPVwiL2ltZy9sb2dvLnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMubmF2QnVyZ2VyLCBzdHlsZXMuYnVyZ2VyLCBpc09wZW5lZCA/IHN0eWxlcy5vcGVuTmF2IDogXCJcIil9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJMaW5lfT48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlckxpbmV9Pjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VyTGluZX0+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICB7XG4gICAgICAgIGlzT3BlbmVkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMubmF2TWVudSwgc3R5bGVzLm1lbnUpfT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5tZW51TGlzdH0+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9e3N0eWxlcy5tZW51TGlua30+XG4gICAgICAgICAgICAgICAgICBNYWluXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teXBsYXlsaXN0XCIgY2xhc3NOYW1lPXtzdHlsZXMubWVudUxpbmt9PlxuICAgICAgICAgICAgICAgICAgTXkgcGxheWxpc3RcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgeyFhdXRoU3RhdGUgJiYgKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbX0+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVMaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgPC9uYXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQXBwU2VsZWN0b3IiLCJzdHlsZXMiLCJjbGFzc05hbWVzIiwiSW1hZ2UiLCJMaW5rIiwidXNlU3RhdGUiLCJOYXYiLCJpc09wZW5lZCIsInNldElzT3BlbmVkIiwidG9nZ2xlTWVudSIsInByZXZTdGF0ZSIsImF1dGhTdGF0ZSIsInN0YXRlIiwiYXV0aCIsIm5hdiIsImNsYXNzTmFtZSIsIm1haW5OYXYiLCJkaXYiLCJuYXZMb2dvIiwibG9nbyIsImhyZWYiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImxvZ29JbWFnZSIsInNyYyIsIm9uQ2xpY2siLCJuYXZCdXJnZXIiLCJidXJnZXIiLCJvcGVuTmF2Iiwic3BhbiIsImJ1cmdlckxpbmUiLCJuYXZNZW51IiwibWVudSIsInVsIiwibWVudUxpc3QiLCJsaSIsIm1lbnVJdGVtIiwibWVudUxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Nav/Nav.tsx\n"));

/***/ })

});