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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Main/Main */ \"(app-pages-browser)/./src/components/Main/Main.tsx\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.js */ \"(app-pages-browser)/./src/api.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    // const { userData } = useUser();\n    // const { returnTask } = useTasks();\n    // const { theme } = useGlobal();\n    // useEffect(() => {\n    //   window.localStorage.setItem(\"theme\", theme);\n    // }, [theme]);\n    //  Loader\n    const [cards, setTracks] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [isLoaded, setIsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.getTracks)().then((data)=>{\n            // returnTask(data);\n            setTracks(data.tasks);\n        }).then(()=>{\n            setIsLoaded(false);\n        }).catch((error)=>{\n            setHasError(true);\n            console.warn(error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main_Main__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                isLoader: isLoaded\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ZgdPh6YROrbwS5ZZd6zdu+YGZy8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUV5QztBQUNGO0FBQ0s7QUFDUDtBQUd0QixTQUFTSzs7SUFFdEIsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyxpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCLGlEQUFpRDtJQUNqRCxlQUFlO0lBRWYsVUFBVTtJQUNWLE1BQU0sQ0FBQ0MsT0FBT0MsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNwQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDRCxnREFBU0EsQ0FBQztRQUNSRSxrREFBU0EsR0FDTlEsSUFBSSxDQUFDLENBQUNDO1lBQ0wsb0JBQW9CO1lBQ3BCTixVQUFVTSxLQUFLQyxLQUFLO1FBQ3RCLEdBQ0NGLElBQUksQ0FBQztZQUNKSCxZQUFZO1FBQ2QsR0FDQ00sS0FBSyxDQUFDLENBQUNDO1lBQ05MLFlBQVk7WUFDWk0sUUFBUUMsSUFBSSxDQUFDRjtRQUNmO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVduQixpRUFBYztrQkFDNUIsNEVBQUNrQjtZQUFJQyxXQUFXbkIsbUVBQWdCO3NCQUM5Qiw0RUFBQ0QsNkRBQUlBO2dCQUFDdUIsVUFBVWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEI7R0FuQ3dCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IE1haW4gZnJvbSBcIkBjb21wb25lbnRzL01haW4vTWFpblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldFRyYWNrc30gZnJvbSAnLi4vYXBpLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIC8vIGNvbnN0IHsgdXNlckRhdGEgfSA9IHVzZVVzZXIoKTtcbiAgLy8gY29uc3QgeyByZXR1cm5UYXNrIH0gPSB1c2VUYXNrcygpO1xuICAvLyBjb25zdCB7IHRoZW1lIH0gPSB1c2VHbG9iYWwoKTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCB0aGVtZSk7XG4gIC8vIH0sIFt0aGVtZV0pO1xuXG4gIC8vICBMb2FkZXJcbiAgY29uc3QgW2NhcmRzLCBzZXRUcmFja3NdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtoYXNFcnJvciwgc2V0SGFzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFRyYWNrcygpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAvLyByZXR1cm5UYXNrKGRhdGEpO1xuICAgICAgICBzZXRUcmFja3MoZGF0YS50YXNrcyk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRJc0xvYWRlZChmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBzZXRIYXNFcnJvcih0cnVlKTtcbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8TWFpbiBpc0xvYWRlcj17aXNMb2FkZWR9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk1haW4iLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldFRyYWNrcyIsIkhvbWUiLCJjYXJkcyIsInNldFRyYWNrcyIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJoYXNFcnJvciIsInNldEhhc0Vycm9yIiwidGhlbiIsImRhdGEiLCJ0YXNrcyIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJjb250YWluZXIiLCJpc0xvYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});