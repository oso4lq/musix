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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Main/Main */ \"(app-pages-browser)/./src/components/Main/Main.tsx\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.js */ \"(app-pages-browser)/./src/api.js\");\n/* harmony import */ var _hooks_useTracks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useTracks */ \"(app-pages-browser)/./src/hooks/useTracks.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    // const { userData } = useUser();\n    // const { theme } = useGlobal();\n    // useEffect(() => {\n    //   window.localStorage.setItem(\"theme\", theme);\n    // }, [theme]);\n    // const { returnTrack } = useTracks();\n    //  Loader\n    const [tracks, setTracks] = _hooks_useTracks__WEBPACK_IMPORTED_MODULE_4__.useTracks;\n    const [isLoaded, setIsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.getTracks)().then((data)=>{\n            // returnTrack(data);\n            setTracks(data);\n        }).then(()=>{\n            setIsLoaded(true);\n        }).catch((error)=>{\n            setHasError(true);\n            console.warn(error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main_Main__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                isLoaded: isLoaded\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 41,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 40,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 39,\n        columnNumber: 7\n    }, this);\n}\n_s(Home, \"G4A2CaWhFOlfuMLy9IfnJJqjYa0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFeUM7QUFDRjtBQUNLO0FBQ047QUFDUTtBQUUvQixTQUFTTTs7SUFFdEIsa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsaURBQWlEO0lBQ2pELGVBQWU7SUFFYix1Q0FBdUM7SUFFekMsVUFBVTtJQUNWLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSCx1REFBU0E7SUFDckMsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6Q0QsZ0RBQVNBLENBQUM7UUFDUkUsa0RBQVNBLEdBQ05TLElBQUksQ0FBQyxDQUFDQztZQUNMLHFCQUFxQjtZQUNyQk4sVUFBVU07UUFDWixHQUNDRCxJQUFJLENBQUM7WUFDSkgsWUFBWTtRQUNkLEdBQ0NLLEtBQUssQ0FBQyxDQUFDQztZQUNOSixZQUFZO1lBQ1pLLFFBQVFDLElBQUksQ0FBQ0Y7UUFDZjtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDRztRQUFJQyxXQUFXbkIsaUVBQWM7a0JBQzVCLDRFQUFDa0I7WUFBSUMsV0FBV25CLG1FQUFnQjtzQkFDOUIsNEVBQUNELDZEQUFJQTtnQkFBQ1MsVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUI7R0FwQ3dCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IE1haW4gZnJvbSBcIkBjb21wb25lbnRzL01haW4vTWFpblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldFRyYWNrcyB9IGZyb20gJy4uL2FwaS5qcyc7XG5pbXBvcnQgeyB1c2VUcmFja3MgfSBmcm9tIFwiQC9ob29rcy91c2VUcmFja3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICAvLyBjb25zdCB7IHVzZXJEYXRhIH0gPSB1c2VVc2VyKCk7XG4gIC8vIGNvbnN0IHsgdGhlbWUgfSA9IHVzZUdsb2JhbCgpO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHRoZW1lKTtcbiAgLy8gfSwgW3RoZW1lXSk7XG5cbiAgICAvLyBjb25zdCB7IHJldHVyblRyYWNrIH0gPSB1c2VUcmFja3MoKTtcblxuICAvLyAgTG9hZGVyXG4gIGNvbnN0IFt0cmFja3MsIHNldFRyYWNrc10gPSB1c2VUcmFja3M7XG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGFzRXJyb3IsIHNldEhhc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRUcmFja3MoKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgLy8gcmV0dXJuVHJhY2soZGF0YSk7XG4gICAgICAgIHNldFRyYWNrcyhkYXRhKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGVkKHRydWUpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgc2V0SGFzRXJyb3IodHJ1ZSk7XG4gICAgICAgIGNvbnNvbGUud2FybihlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPE1haW4gaXNMb2FkZWQ9e2lzTG9hZGVkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk1haW4iLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldFRyYWNrcyIsInVzZVRyYWNrcyIsIkhvbWUiLCJ0cmFja3MiLCJzZXRUcmFja3MiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwiaGFzRXJyb3IiLCJzZXRIYXNFcnJvciIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/contexts/tracks-context.tsx":
/*!*****************************************!*\
  !*** ./src/contexts/tracks-context.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TracksContext: function() { return /* binding */ TracksContext; },\n/* harmony export */   TracksProvider: function() { return /* binding */ TracksProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// import { useNavigate } from \"react-router-dom\";\n// import { AppRoutes } from \"../lib/appRoutes\";\nconst TracksContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst TracksProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [tracks, setTracks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // let navigate = useNavigate();\n    const returnTrack = (data)=>{\n        setTracks(data.tracks);\n    // navigate(AppRoutes.HOME)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TracksContext.Provider, {\n        value: {\n            tracks,\n            setTracks,\n            returnTrack\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\contexts\\\\tracks-context.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TracksProvider, \"ttwljj/XbEgId5RGRDJ2QOTTzOQ=\");\n_c = TracksProvider;\nvar _c;\n$RefreshReg$(_c, \"TracksProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0cy90cmFja3MtY29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnRDtBQUNoRCxrREFBa0Q7QUFDbEQsZ0RBQWdEO0FBRXpDLE1BQU1FLDhCQUFnQkYsb0RBQWFBLENBQUMsTUFBTTtBQUUxQyxNQUFNRyxpQkFBaUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBRXZDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVyQyxnQ0FBZ0M7SUFFaEMsTUFBTU0sY0FBYyxDQUFDQztRQUNqQkYsVUFBVUUsS0FBS0gsTUFBTTtJQUNyQiwyQkFBMkI7SUFDL0I7SUFFQSxxQkFDSSw4REFBQ0gsY0FBY08sUUFBUTtRQUFDQyxPQUFPO1lBQUVMO1lBQVFDO1lBQVdDO1FBQVk7a0JBQzNESDs7Ozs7O0FBR2IsRUFBRTtHQWhCV0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL3RyYWNrcy1jb250ZXh0LnRzeD84YTg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuLy8gaW1wb3J0IHsgQXBwUm91dGVzIH0gZnJvbSBcIi4uL2xpYi9hcHBSb3V0ZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUcmFja3NDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBjb25zdCBUcmFja3NQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbdHJhY2tzLCBzZXRUcmFja3NdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgLy8gbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgICBjb25zdCByZXR1cm5UcmFjayA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0VHJhY2tzKGRhdGEudHJhY2tzKTtcclxuICAgICAgICAvLyBuYXZpZ2F0ZShBcHBSb3V0ZXMuSE9NRSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUcmFja3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRyYWNrcywgc2V0VHJhY2tzLCByZXR1cm5UcmFjayB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvVHJhY2tzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn07Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlRyYWNrc0NvbnRleHQiLCJUcmFja3NQcm92aWRlciIsImNoaWxkcmVuIiwidHJhY2tzIiwic2V0VHJhY2tzIiwicmV0dXJuVHJhY2siLCJkYXRhIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/contexts/tracks-context.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/hooks/useTracks.tsx":
/*!*********************************!*\
  !*** ./src/hooks/useTracks.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useTracks: function() { return /* binding */ useTracks; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_tracks_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/tracks-context */ \"(app-pages-browser)/./src/contexts/tracks-context.tsx\");\nvar _s = $RefreshSig$();\n\n\nconst useTracks = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_tracks_context__WEBPACK_IMPORTED_MODULE_1__.TracksContext);\n};\n_s(useTracks, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VUcmFja3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtDO0FBQ3dCO0FBRW5ELE1BQU1FLFlBQVk7O0lBQ3JCLE9BQU9GLGlEQUFVQSxDQUFDQyxtRUFBYUE7QUFDbkMsRUFBQztHQUZZQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlVHJhY2tzLnRzeD9kZGVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBUcmFja3NDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL3RyYWNrcy1jb250ZXh0XCJcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VUcmFja3MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChUcmFja3NDb250ZXh0KVxyXG59Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJUcmFja3NDb250ZXh0IiwidXNlVHJhY2tzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useTracks.tsx\n"));

/***/ })

});