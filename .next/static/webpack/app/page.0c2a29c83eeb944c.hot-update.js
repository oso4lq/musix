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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProgressBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ProgressBar_ProgressBar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/ProgressBar/ProgressBar.module.css */ \"(app-pages-browser)/./src/components/ProgressBar/ProgressBar.module.css\");\n/* harmony import */ var _components_ProgressBar_ProgressBar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_ProgressBar_ProgressBar_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ProgressBar(param) {\n    let { max, value, onChange } = param;\n    const handleChange = (e)=>{\n        const newValue = e.target.value;\n        onChange(newValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        className: (_components_ProgressBar_ProgressBar_module_css__WEBPACK_IMPORTED_MODULE_1___default().styledProgressInput),\n        type: \"range\" // Тип элемента - ползунок\n        ,\n        min: \"0\" // Минимальное значение ползунка\n        ,\n        max: max,\n        value: value,\n        step: 0.01,\n        onChange: handleChange\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\ProgressBar\\\\ProgressBar.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = ProgressBar;\nvar _c;\n$RefreshReg$(_c, \"ProgressBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvRTtBQU1yRCxTQUFTQyxZQUFZLEtBQStCO1FBQS9CLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQVMsR0FBL0I7SUFDaEMsTUFBTUMsZUFBZSxDQUFDQztRQUNsQixNQUFNQyxXQUFXRCxFQUFFRSxNQUFNLENBQUNMLEtBQUs7UUFDL0JDLFNBQVNHO0lBQ2I7SUFDRixxQkFDRSw4REFBQ0U7UUFDQ0MsV0FBV1YsMkdBQTBCO1FBQ3JDWSxNQUFLLFFBQVEsMEJBQTBCOztRQUN2Q0MsS0FBSSxJQUFJLGdDQUFnQzs7UUFDeENYLEtBQUtBO1FBQ0xDLE9BQU9BO1FBQ1BXLE1BQU07UUFDTlYsVUFBVUM7Ozs7OztBQUdoQjtLQWhCd0JKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLnRzeD9hMmE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIkBjb21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLm1vZHVsZS5jc3NcIjtcbnR5cGUgUHJvcHMgPSB7XG4gIG1heDogbnVtYmVyO1xuICB2YWx1ZTogc3RyaW5nO1xuICBvbkNoYW5nZTogKCkgPT4gdm9pZDtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9ncmVzc0Jhcih7IG1heCwgdmFsdWUsIG9uQ2hhbmdlIH06IFByb3BzKSB7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICBvbkNoYW5nZShuZXdWYWx1ZSlcbiAgICB9XG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdHlsZWRQcm9ncmVzc0lucHV0fSAvLyDQn9GA0LjQvNC10L3QtdC90LjQtSDRgdGC0LjQu9C10Lkg0Log0L/QvtC70LfRg9C90LrRg1xuICAgICAgdHlwZT1cInJhbmdlXCIgLy8g0KLQuNC/INGN0LvQtdC80LXQvdGC0LAgLSDQv9C+0LvQt9GD0L3QvtC6XG4gICAgICBtaW49XCIwXCIgLy8g0JzQuNC90LjQvNCw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1INC/0L7Qu9C30YPQvdC60LBcbiAgICAgIG1heD17bWF4fSAvLyDQnNCw0LrRgdC40LzQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSwg0LfQsNCy0LjRgdC40YIg0L7RgiDQtNC70LjRgtC10LvRjNC90L7RgdGC0Lgg0LDRg9C00LjQvlxuICAgICAgdmFsdWU9e3ZhbHVlfSAvLyDQotC10LrRg9GJ0LXQtSDQt9C90LDRh9C10L3QuNC1INC/0L7Qu9C30YPQvdC60LBcbiAgICAgIHN0ZXA9ezAuMDF9IC8vINCo0LDQsyDQuNC30LzQtdC90LXQvdC40Y8g0LfQvdCw0YfQtdC90LjRj1xuICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLy8g0J7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8g0LjQt9C80LXQvdC10L3QuNGPXG4gICAgLz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJQcm9ncmVzc0JhciIsIm1heCIsInZhbHVlIiwib25DaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmV3VmFsdWUiLCJ0YXJnZXQiLCJpbnB1dCIsImNsYXNzTmFtZSIsInN0eWxlZFByb2dyZXNzSW5wdXQiLCJ0eXBlIiwibWluIiwic3RlcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProgressBar/ProgressBar.tsx\n"));

/***/ })

});