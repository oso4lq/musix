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

/***/ "(app-pages-browser)/./src/contexts/tracks-context.tsx":
/*!*****************************************!*\
  !*** ./src/contexts/tracks-context.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TracksContext: function() { return /* binding */ TracksContext; },\n/* harmony export */   TracksProvider: function() { return /* binding */ TracksProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// import { useNavigate } from \"react-router-dom\";\n// import { AppRoutes } from \"../lib/appRoutes\";\nconst TracksContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst TracksProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [tracks, setTracks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // let navigate = useNavigate();\n    const returnTrack = (data)=>{\n        setTracks(data.tasks);\n    // navigate(AppRoutes.HOME)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TracksContext.Provider, {\n        value: {\n            tracks,\n            setTracks,\n            returnTrack\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\contexts\\\\tracks-context.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TracksProvider, \"ttwljj/XbEgId5RGRDJ2QOTTzOQ=\");\n_c = TracksProvider;\nvar _c;\n$RefreshReg$(_c, \"TracksProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0cy90cmFja3MtY29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnRDtBQUNoRCxrREFBa0Q7QUFDbEQsZ0RBQWdEO0FBRXpDLE1BQU1FLDhCQUFnQkYsb0RBQWFBLENBQUMsTUFBTTtBQUUxQyxNQUFNRyxpQkFBaUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBRXZDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVyQyxnQ0FBZ0M7SUFFaEMsTUFBTU0sY0FBYyxDQUFDQztRQUNqQkYsVUFBVUUsS0FBS0MsS0FBSztJQUNwQiwyQkFBMkI7SUFDL0I7SUFFQSxxQkFDSSw4REFBQ1AsY0FBY1EsUUFBUTtRQUFDQyxPQUFPO1lBQUVOO1lBQVFDO1lBQVdDO1FBQVk7a0JBQzNESDs7Ozs7O0FBR2IsRUFBRTtHQWhCV0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL3RyYWNrcy1jb250ZXh0LnRzeD84YTg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuLy8gaW1wb3J0IHsgQXBwUm91dGVzIH0gZnJvbSBcIi4uL2xpYi9hcHBSb3V0ZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUcmFja3NDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBjb25zdCBUcmFja3NQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbdHJhY2tzLCBzZXRUcmFja3NdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgLy8gbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuXHJcbiAgICBjb25zdCByZXR1cm5UcmFjayA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0VHJhY2tzKGRhdGEudGFza3MpO1xyXG4gICAgICAgIC8vIG5hdmlnYXRlKEFwcFJvdXRlcy5IT01FKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRyYWNrc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdHJhY2tzLCBzZXRUcmFja3MsIHJldHVyblRyYWNrIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9UcmFja3NDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiVHJhY2tzQ29udGV4dCIsIlRyYWNrc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0cmFja3MiLCJzZXRUcmFja3MiLCJyZXR1cm5UcmFjayIsImRhdGEiLCJ0YXNrcyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/contexts/tracks-context.tsx\n"));

/***/ })

});