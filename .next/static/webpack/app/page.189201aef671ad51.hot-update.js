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

/***/ "(app-pages-browser)/./src/components/ProgressBar/ProgressBar.tsx":
/*!****************************************************!*\
  !*** ./src/components/ProgressBar/ProgressBar.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProgressBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ProgressBar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBar.module.css */ \"(app-pages-browser)/./src/components/ProgressBar/ProgressBar.module.css\");\n/* harmony import */ var _ProgressBar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProgressBar_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ProgressBar(param) {\n    let { max, value, onChange } = param;\n    const handleChange = (e)=>{\n        const newValue = e.target.value;\n        onChange(newValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        className: (_ProgressBar_module_css__WEBPACK_IMPORTED_MODULE_1___default().styledProgressInput),\n        type: \"range\",\n        min: \"0\",\n        max: max,\n        value: value,\n        step: 0.01,\n        onChange: handleChange\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ProgressBar\\\\ProgressBar.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = ProgressBar;\nvar _c;\n$RefreshReg$(_c, \"ProgressBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztBQU0vQixTQUFTQyxZQUFZLEtBQStCO1FBQS9CLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQVMsR0FBL0I7SUFDbEMsTUFBTUMsZUFBZSxDQUFDQztRQUNwQixNQUFNQyxXQUFXRCxFQUFFRSxNQUFNLENBQUNMLEtBQUs7UUFDL0JDLFNBQVNHO0lBQ1g7SUFDQSxxQkFDRSw4REFBQ0U7UUFDQ0MsV0FBV1Ysb0ZBQTBCO1FBQ3JDWSxNQUFLO1FBQ0xDLEtBQUk7UUFDSlgsS0FBS0E7UUFDTEMsT0FBT0E7UUFDUFcsTUFBTTtRQUNOVixVQUFVQzs7Ozs7O0FBR2hCO0tBaEJ3QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvUHJvZ3Jlc3NCYXIudHN4P2EyYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Qcm9ncmVzc0Jhci5tb2R1bGUuY3NzXCI7XG50eXBlIFByb3BzID0ge1xuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nO1xuICBtYXg6IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2dyZXNzQmFyKHsgbWF4LCB2YWx1ZSwgb25DaGFuZ2UgfTogUHJvcHMpIHtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICBvbkNoYW5nZShuZXdWYWx1ZSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxpbnB1dFxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGVkUHJvZ3Jlc3NJbnB1dH1cbiAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICBtaW49XCIwXCJcbiAgICAgIG1heD17bWF4fVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgc3RlcD17MC4wMX1cbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgLz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJQcm9ncmVzc0JhciIsIm1heCIsInZhbHVlIiwib25DaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmV3VmFsdWUiLCJ0YXJnZXQiLCJpbnB1dCIsImNsYXNzTmFtZSIsInN0eWxlZFByb2dyZXNzSW5wdXQiLCJ0eXBlIiwibWluIiwic3RlcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProgressBar/ProgressBar.tsx\n"));

/***/ })

});