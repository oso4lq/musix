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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Main/Main */ \"(app-pages-browser)/./src/components/Main/Main.tsx\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\ngetTrack;\nfunction Home() {\n    _s();\n    // const { userData } = useUser();\n    // const { returnTask } = useTasks();\n    // const { theme } = useGlobal();\n    // useEffect(() => {\n    //   window.localStorage.setItem(\"theme\", theme);\n    // }, [theme]);\n    //  Loader\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [isLoaded, setIsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getTracks({\n            token: userData.token\n        }).then((data)=>{\n            returnTask(data);\n            setCards(data.tasks);\n        }).then(()=>{\n            setIsLoaded(false);\n        }).catch((error)=>{\n            setHasError(true);\n            console.warn(error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main_Main__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Q3YrmUloXSI3m1Z0d13d3KBvBEU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXlDO0FBQ0Y7QUFDSztBQUU1Q0k7QUFFZSxTQUFTQzs7SUFFdEIsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyxpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCLGlEQUFpRDtJQUNqRCxlQUFlO0lBRWYsVUFBVTtJQUNWLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDRCxnREFBU0EsQ0FBQztRQUNSVSxVQUFVO1lBQUVDLE9BQU9DLFNBQVNELEtBQUs7UUFBQyxHQUMvQkUsSUFBSSxDQUFDLENBQUNDO1lBQ0xDLFdBQVdEO1lBQ1hULFNBQVNTLEtBQUtFLEtBQUs7UUFDckIsR0FDQ0gsSUFBSSxDQUFDO1lBQ0pOLFlBQVk7UUFDZCxHQUNDVSxLQUFLLENBQUMsQ0FBQ0M7WUFDTlQsWUFBWTtZQUNaVSxRQUFRQyxJQUFJLENBQUNGO1FBQ2Y7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBV3ZCLGlFQUFjO2tCQUM1Qiw0RUFBQ3NCO1lBQUlDLFdBQVd2QixtRUFBZ0I7c0JBQzlCLDRFQUFDRCw2REFBSUE7Ozs7Ozs7Ozs7Ozs7OztBQUliO0dBbkN3Qks7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBNYWluIGZyb20gXCJAY29tcG9uZW50cy9NYWluL01haW5cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmdldFRyYWNrXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgLy8gY29uc3QgeyB1c2VyRGF0YSB9ID0gdXNlVXNlcigpO1xuICAvLyBjb25zdCB7IHJldHVyblRhc2sgfSA9IHVzZVRhc2tzKCk7XG4gIC8vIGNvbnN0IHsgdGhlbWUgfSA9IHVzZUdsb2JhbCgpO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHRoZW1lKTtcbiAgLy8gfSwgW3RoZW1lXSk7XG5cbiAgLy8gIExvYWRlclxuICBjb25zdCBbY2FyZHMsIHNldENhcmRzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaGFzRXJyb3IsIHNldEhhc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRUcmFja3MoeyB0b2tlbjogdXNlckRhdGEudG9rZW4gfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVyblRhc2soZGF0YSk7XG4gICAgICAgIHNldENhcmRzKGRhdGEudGFza3MpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0SXNMb2FkZWQoZmFsc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgc2V0SGFzRXJyb3IodHJ1ZSk7XG4gICAgICAgIGNvbnNvbGUud2FybihlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPE1haW4gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk1haW4iLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldFRyYWNrIiwiSG9tZSIsImNhcmRzIiwic2V0Q2FyZHMiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwiaGFzRXJyb3IiLCJzZXRIYXNFcnJvciIsImdldFRyYWNrcyIsInRva2VuIiwidXNlckRhdGEiLCJ0aGVuIiwiZGF0YSIsInJldHVyblRhc2siLCJ0YXNrcyIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});