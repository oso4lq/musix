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

/***/ "(app-pages-browser)/./src/components/BarVolume/BarVolume.tsx":
/*!************************************************!*\
  !*** ./src/components/BarVolume/BarVolume.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BarVolume; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BarVolume.module.css */ \"(app-pages-browser)/./src/components/BarVolume/BarVolume.module.css\");\n/* harmony import */ var _BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction BarVolume(param) {\n    let { handleVolume } = param;\n    _s();\n    const [volume, setVolume] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const onChange = (e)=>{\n        let newVolume = e.target.value;\n        setVolume(newVolume);\n        handleVolume(+newVolume);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().barVolume), (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volume)),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volumeContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volumeImage),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volumeSvg),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                            href: \"/img/icon/sprite.svg#icon-volume\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volumeProgress), (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default()._btn)),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: volume,\n                        onChange: onChange,\n                        step: 1,\n                        min: 0,\n                        max: 100,\n                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volumeProgressLine), (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default()._btn)),\n                        type: \"range\",\n                        name: \"range\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(BarVolume, \"p306ilFFF9pN4cYlXegW+5jSiws=\");\n_c = BarVolume;\nvar _c;\n$RefreshReg$(_c, \"BarVolume\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0JhclZvbHVtZS9CYXJWb2x1bWUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDUjtBQUNIO0FBRWxCLFNBQVNHLFVBQVUsS0FBZ0I7UUFBaEIsRUFBRUMsWUFBWSxFQUFFLEdBQWhCOztJQUVoQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUM7SUFDckMsTUFBTUssV0FBVyxDQUFDQztRQUNoQixJQUFJQyxZQUFZRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7UUFDOUJMLFVBQVVHO1FBQ1ZMLGFBQWEsQ0FBQ0s7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBV1osaURBQVVBLENBQUNELHdFQUFnQixFQUFFQSxxRUFBYTtrQkFDeEQsNEVBQUNZO1lBQUlDLFdBQVdiLDRFQUFvQjs7OEJBQ2xDLDhEQUFDWTtvQkFBSUMsV0FBV2IsMEVBQWtCOzhCQUNoQyw0RUFBQ2lCO3dCQUFJSixXQUFXYix3RUFBZ0I7a0NBQzlCLDRFQUFDbUI7NEJBQUlDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNSO29CQUFJQyxXQUFXWixpREFBVUEsQ0FBQ0QsNkVBQXFCLEVBQUVBLG1FQUFXOzhCQUMzRCw0RUFBQ3VCO3dCQUNDWixPQUFPTjt3QkFDUEUsVUFBVUE7d0JBQ1ZpQixNQUFNO3dCQUNOQyxLQUFLO3dCQUNMQyxLQUFLO3dCQUNMYixXQUFXWixpREFBVUEsQ0FBQ0QsaUZBQXlCLEVBQUVBLG1FQUFXO3dCQUM1RDRCLE1BQUs7d0JBQ0xDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakI7R0FoQ3dCMUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmFyVm9sdW1lL0JhclZvbHVtZS50c3g/NWQ4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0JhclZvbHVtZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFyVm9sdW1lKHsgaGFuZGxlVm9sdW1lIH0pIHtcblxuICBjb25zdCBbdm9sdW1lLCBzZXRWb2x1bWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgbmV3Vm9sdW1lID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0Vm9sdW1lKG5ld1ZvbHVtZSk7XG4gICAgaGFuZGxlVm9sdW1lKCtuZXdWb2x1bWUpXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYmFyVm9sdW1lLCBzdHlsZXMudm9sdW1lKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvbHVtZUNvbnRlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvbHVtZUltYWdlfT5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzLnZvbHVtZVN2Z30+XG4gICAgICAgICAgICA8dXNlIGhyZWY9XCIvaW1nL2ljb24vc3ByaXRlLnN2ZyNpY29uLXZvbHVtZVwiPjwvdXNlPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLnZvbHVtZVByb2dyZXNzLCBzdHlsZXMuX2J0bil9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3ZvbHVtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIHN0ZXA9ezF9XG4gICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICBtYXg9ezEwMH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMudm9sdW1lUHJvZ3Jlc3NMaW5lLCBzdHlsZXMuX2J0bil9XG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgbmFtZT1cInJhbmdlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsImNsYXNzTmFtZXMiLCJ1c2VTdGF0ZSIsIkJhclZvbHVtZSIsImhhbmRsZVZvbHVtZSIsInZvbHVtZSIsInNldFZvbHVtZSIsIm9uQ2hhbmdlIiwiZSIsIm5ld1ZvbHVtZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmFyVm9sdW1lIiwidm9sdW1lQ29udGVudCIsInZvbHVtZUltYWdlIiwic3ZnIiwidm9sdW1lU3ZnIiwidXNlIiwiaHJlZiIsInZvbHVtZVByb2dyZXNzIiwiX2J0biIsImlucHV0Iiwic3RlcCIsIm1pbiIsIm1heCIsInZvbHVtZVByb2dyZXNzTGluZSIsInR5cGUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/BarVolume/BarVolume.tsx\n"));

/***/ })

});