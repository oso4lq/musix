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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BarVolume; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BarVolume.module.css */ \"(app-pages-browser)/./src/components/BarVolume/BarVolume.module.css\");\n/* harmony import */ var _BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction BarVolume(param) {\n    let { handleVolume } = param;\n    _s();\n    const [volume, setVolume] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const onChange = (e)=>{\n        let newVolume = e.target.value;\n        setVolume(newVolume);\n        handleVolume(+newVolume);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().barVolume), (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volume)),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volumeContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volumeImage),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volumeSvg),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                            href: \"/img/icon/sprite.svg#icon-volume\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volumeProgress),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volumeProgressLine)),\n                        type: \"range\",\n                        name: \"range\",\n                        min: 0,\n                        value: volume,\n                        max: 100,\n                        onChange: onChange,\n                        step: 1\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(BarVolume, \"p306ilFFF9pN4cYlXegW+5jSiws=\");\n_c = BarVolume;\nvar _c;\n$RefreshReg$(_c, \"BarVolume\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0JhclZvbHVtZS9CYXJWb2x1bWUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDUjtBQUNIO0FBTWxCLFNBQVNHLFVBQVUsS0FBZ0M7UUFBaEMsRUFBRUMsWUFBWSxFQUFrQixHQUFoQzs7SUFFaEMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1LLFdBQVcsQ0FBQ0M7UUFDaEIsSUFBSUMsWUFBWUQsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO1FBQzlCTCxVQUFVRztRQUNWTCxhQUFhLENBQUNLO0lBQ2hCO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVdaLGlEQUFVQSxDQUFDRCx3RUFBZ0IsRUFBRUEscUVBQWE7a0JBQ3hELDRFQUFDWTtZQUFJQyxXQUFXYiw0RUFBb0I7OzhCQUNsQyw4REFBQ1k7b0JBQUlDLFdBQVdiLDBFQUFrQjs4QkFDaEMsNEVBQUNpQjt3QkFBSUosV0FBV2Isd0VBQWdCO2tDQUM5Qiw0RUFBQ21COzRCQUFJQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUdkLDhEQUFDUjtvQkFBSUMsV0FBV2IsNkVBQXFCOzhCQUNuQyw0RUFBQ3NCO3dCQUNDVCxXQUFXWixpREFBVUEsQ0FBQ0QsaUZBQXlCO3dCQUMvQ3dCLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLEtBQUs7d0JBQ0xmLE9BQU9OO3dCQUNQc0IsS0FBSzt3QkFDTHBCLFVBQVVBO3dCQUNWcUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQjtHQWhDd0J6QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CYXJWb2x1bWUvQmFyVm9sdW1lLnRzeD81ZDgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQmFyVm9sdW1lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIEJhclZvbHVtZVByb3BzID0ge1xuICBoYW5kbGVWb2x1bWU6IGFueTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhclZvbHVtZSh7IGhhbmRsZVZvbHVtZSB9OiBCYXJWb2x1bWVQcm9wcykge1xuXG4gIGNvbnN0IFt2b2x1bWUsIHNldFZvbHVtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgbGV0IG5ld1ZvbHVtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldFZvbHVtZShuZXdWb2x1bWUpO1xuICAgIGhhbmRsZVZvbHVtZSgrbmV3Vm9sdW1lKVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmJhclZvbHVtZSwgc3R5bGVzLnZvbHVtZSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b2x1bWVDb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b2x1bWVJbWFnZX0+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy52b2x1bWVTdmd9PlxuICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ltZy9pY29uL3Nwcml0ZS5zdmcjaWNvbi12b2x1bWVcIj48L3VzZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm9sdW1lUHJvZ3Jlc3N9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy52b2x1bWVQcm9ncmVzc0xpbmUpfVxuICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgIG5hbWU9XCJyYW5nZVwiXG4gICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICB2YWx1ZT17dm9sdW1lfVxuICAgICAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBzdGVwPXsxfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsInVzZVN0YXRlIiwiQmFyVm9sdW1lIiwiaGFuZGxlVm9sdW1lIiwidm9sdW1lIiwic2V0Vm9sdW1lIiwib25DaGFuZ2UiLCJlIiwibmV3Vm9sdW1lIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJiYXJWb2x1bWUiLCJ2b2x1bWVDb250ZW50Iiwidm9sdW1lSW1hZ2UiLCJzdmciLCJ2b2x1bWVTdmciLCJ1c2UiLCJocmVmIiwidm9sdW1lUHJvZ3Jlc3MiLCJpbnB1dCIsInZvbHVtZVByb2dyZXNzTGluZSIsInR5cGUiLCJuYW1lIiwibWluIiwibWF4Iiwic3RlcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/BarVolume/BarVolume.tsx\n"));

/***/ })

});