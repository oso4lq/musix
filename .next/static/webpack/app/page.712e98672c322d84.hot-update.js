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

/***/ "(app-pages-browser)/./src/lib/formatTime.tsx":
/*!********************************!*\
  !*** ./src/lib/formatTime.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatTime: function() { return /* binding */ formatTime; }\n/* harmony export */ });\n// format duration in seconds to mins:secs\nconst formatTime = (time)=>{\n    if (time !== null) {\n        console.log(time);\n        const minutes = Math.floor(time / 60).toString().padStart(2, \"0\");\n        const seconds = Math.floor(time % 60).toString().padStart(2, \"0\");\n        return \"\".concat(minutes, \":\").concat(seconds);\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZm9ybWF0VGltZS50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFFLDBDQUEwQztBQUVyQyxNQUFNQSxhQUFhLENBQUNDO0lBQ3ZCLElBQUlBLFNBQVMsTUFBTTtRQUNmQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osTUFBTUcsVUFBVUMsS0FBS0MsS0FBSyxDQUFDTCxPQUFPLElBQUlNLFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUc7UUFDN0QsTUFBTUMsVUFBVUosS0FBS0MsS0FBSyxDQUFDTCxPQUFPLElBQUlNLFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUc7UUFDN0QsT0FBTyxHQUFjQyxPQUFYTCxTQUFRLEtBQVcsT0FBUks7SUFDekI7QUFDSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvZm9ybWF0VGltZS50c3g/ZDIzZiJdLCJzb3VyY2VzQ29udGVudCI6WyIgIC8vIGZvcm1hdCBkdXJhdGlvbiBpbiBzZWNvbmRzIHRvIG1pbnM6c2Vjc1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWUgPSAodGltZTogbnVtYmVyIHwgbnVsbCkgPT4ge1xyXG4gICAgaWYgKHRpbWUgIT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aW1lKTtcclxuICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWUgJSA2MCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgICAgICAgcmV0dXJuIGAke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xyXG4gICAgfVxyXG59OyJdLCJuYW1lcyI6WyJmb3JtYXRUaW1lIiwidGltZSIsImNvbnNvbGUiLCJsb2ciLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwidG9TdHJpbmciLCJwYWRTdGFydCIsInNlY29uZHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/formatTime.tsx\n"));

/***/ })

});