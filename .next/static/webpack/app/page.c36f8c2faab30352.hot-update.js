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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Main/Main */ \"(app-pages-browser)/./src/components/Main/Main.tsx\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ \"(app-pages-browser)/./src/api.tsx\");\n/* harmony import */ var _contexts_tracks_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/tracks-context */ \"(app-pages-browser)/./src/contexts/tracks-context.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    // const { userData } = useUser();\n    // const { theme } = useGlobal();\n    // useEffect(() => {\n    //   window.localStorage.setItem(\"theme\", theme);\n    // }, [theme]);\n    // const { returnTrack } = useTracks();\n    //  Loader\n    // const { returnTrack } = useTracks();\n    // const [isLoaded, setIsLoaded] = useState(false);\n    const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_api__WEBPACK_IMPORTED_MODULE_3__.getTracks)()// .then((data) => {\n        //   returnTrack(data);\n        //   returnTrack(data);\n        // })\n        // .then(() => {\n        //   setIsLoaded(true);\n        // })\n        .catch((error)=>{\n            setHasError(true);\n            console.warn(error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_tracks_context__WEBPACK_IMPORTED_MODULE_4__.TracksProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main_Main__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Y10BwSn8jQ4wQtRAtRxoscEk2KA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFeUM7QUFDRjtBQUNLO0FBQ1Q7QUFFd0I7QUFFNUMsU0FBU007O0lBRXRCLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFFakMsb0JBQW9CO0lBQ3BCLGlEQUFpRDtJQUNqRCxlQUFlO0lBRWYsdUNBQXVDO0lBRXZDLFVBQVU7SUFDVix1Q0FBdUM7SUFDdkMsbURBQW1EO0lBQ25ELE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN6Q0QsZ0RBQVNBLENBQUM7UUFDUkUsK0NBQVNBLEVBQ1Asb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsS0FBSztRQUNMLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsS0FBSztTQUNKSyxLQUFLLENBQUMsQ0FBQ0M7WUFDTkYsWUFBWTtZQUNaRyxRQUFRQyxJQUFJLENBQUNGO1FBQ2Y7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0wsb0VBQWNBO2tCQUNiLDRFQUFDUTtZQUFJQyxXQUFXYixpRUFBYztzQkFDNUIsNEVBQUNZO2dCQUFJQyxXQUFXYixtRUFBZ0I7MEJBQzlCLDRFQUFDRCw2REFBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2Y7R0F2Q3dCTTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IE1haW4gZnJvbSBcIkBjb21wb25lbnRzL01haW4vTWFpblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldFRyYWNrcyB9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQgeyB1c2VUcmFja3MgfSBmcm9tIFwiQC9ob29rcy91c2VUcmFja3NcIjtcbmltcG9ydCB7IFRyYWNrc1Byb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dHMvdHJhY2tzLWNvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAvLyBjb25zdCB7IHVzZXJEYXRhIH0gPSB1c2VVc2VyKCk7XG4gIC8vIGNvbnN0IHsgdGhlbWUgfSA9IHVzZUdsb2JhbCgpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgdGhlbWUpO1xuICAvLyB9LCBbdGhlbWVdKTtcblxuICAvLyBjb25zdCB7IHJldHVyblRyYWNrIH0gPSB1c2VUcmFja3MoKTtcblxuICAvLyAgTG9hZGVyXG4gIC8vIGNvbnN0IHsgcmV0dXJuVHJhY2sgfSA9IHVzZVRyYWNrcygpO1xuICAvLyBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hhc0Vycm9yLCBzZXRIYXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VHJhY2tzKClcbiAgICAgIC8vIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvLyAgIHJldHVyblRyYWNrKGRhdGEpO1xuICAgICAgLy8gICByZXR1cm5UcmFjayhkYXRhKTtcbiAgICAgIC8vIH0pXG4gICAgICAvLyAudGhlbigoKSA9PiB7XG4gICAgICAvLyAgIHNldElzTG9hZGVkKHRydWUpO1xuICAgICAgLy8gfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgc2V0SGFzRXJyb3IodHJ1ZSk7XG4gICAgICAgIGNvbnNvbGUud2FybihlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFRyYWNrc1Byb3ZpZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9UcmFja3NQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJNYWluIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRUcmFja3MiLCJUcmFja3NQcm92aWRlciIsIkhvbWUiLCJoYXNFcnJvciIsInNldEhhc0Vycm9yIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});