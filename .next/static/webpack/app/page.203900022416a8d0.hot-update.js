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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BarVolume; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _BarVolume_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarVolume.module.css */ \"(app-pages-browser)/./src/components/BarVolume/BarVolume.module.css\");\n/* harmony import */ var _BarVolume_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction BarVolume(param) {\n    let { handleVolume } = param;\n    _s();\n    const [volume, setVolume] = useState(\"\");\n    const onChange = (e)=>{\n        let newVolume = e.target.value;\n        setVolume(newVolume);\n        handleVolume(+newVolume);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_2___default().barVolume), (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_2___default().volume)),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_2___default().volumeContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_2___default().volumeImage),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_2___default().volumeSvg),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                            href: \"/img/icon/sprite.svg#icon-volume\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_2___default().volumeProgress), (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_2___default()._btn)),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_2___default().volumeProgressLine), (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_2___default()._btn)),\n                        type: \"range\",\n                        name: \"range\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(BarVolume, \"p306ilFFF9pN4cYlXegW+5jSiws=\");\n_c = BarVolume;\nvar _c;\n$RefreshReg$(_c, \"BarVolume\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0JhclZvbHVtZS9CYXJWb2x1bWUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ1I7QUFFckIsU0FBU0UsVUFBVSxLQUFnQjtRQUFoQixFQUFFQyxZQUFZLEVBQUUsR0FBaEI7O0lBQ2hDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHQyxTQUFTO0lBRXJDLE1BQU1DLFdBQVcsQ0FBQ0M7UUFDaEIsSUFBSUMsWUFBWUQsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO1FBQzlCTixVQUFVSTtRQUNWTixhQUFhLENBQUNNO0lBQ2hCO0lBQ0EscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVdaLGlEQUFVQSxDQUFDRCx3RUFBZ0IsRUFBRUEscUVBQWE7a0JBQ3hELDRFQUFDWTtZQUFJQyxXQUFXYiw0RUFBb0I7OzhCQUNsQyw4REFBQ1k7b0JBQUlDLFdBQVdiLDBFQUFrQjs4QkFDaEMsNEVBQUNpQjt3QkFBSUosV0FBV2Isd0VBQWdCO2tDQUM5Qiw0RUFBQ21COzRCQUFJQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUdkLDhEQUFDUjtvQkFBSUMsV0FBV1osaURBQVVBLENBQUNELDZFQUFxQixFQUFFQSxtRUFBVzs4QkFDM0QsNEVBQUN1Qjt3QkFDQ1YsV0FBV1osaURBQVVBLENBQUNELGlGQUF5QixFQUFFQSxtRUFBVzt3QkFDNUR5QixNQUFLO3dCQUNMQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCO0dBMUJ3QnhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0JhclZvbHVtZS9CYXJWb2x1bWUudHN4PzVkODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9CYXJWb2x1bWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFyVm9sdW1lKHsgaGFuZGxlVm9sdW1lIH0pIHtcbiAgY29uc3QgW3ZvbHVtZSwgc2V0Vm9sdW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgbmV3Vm9sdW1lID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0Vm9sdW1lKG5ld1ZvbHVtZSk7XG4gICAgaGFuZGxlVm9sdW1lKCtuZXdWb2x1bWUpXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmJhclZvbHVtZSwgc3R5bGVzLnZvbHVtZSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b2x1bWVDb250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b2x1bWVJbWFnZX0+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy52b2x1bWVTdmd9PlxuICAgICAgICAgICAgPHVzZSBocmVmPVwiL2ltZy9pY29uL3Nwcml0ZS5zdmcjaWNvbi12b2x1bWVcIj48L3VzZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy52b2x1bWVQcm9ncmVzcywgc3R5bGVzLl9idG4pfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMudm9sdW1lUHJvZ3Jlc3NMaW5lLCBzdHlsZXMuX2J0bil9XG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgbmFtZT1cInJhbmdlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsImNsYXNzTmFtZXMiLCJCYXJWb2x1bWUiLCJoYW5kbGVWb2x1bWUiLCJ2b2x1bWUiLCJzZXRWb2x1bWUiLCJ1c2VTdGF0ZSIsIm9uQ2hhbmdlIiwiZSIsIm5ld1ZvbHVtZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmFyVm9sdW1lIiwidm9sdW1lQ29udGVudCIsInZvbHVtZUltYWdlIiwic3ZnIiwidm9sdW1lU3ZnIiwidXNlIiwiaHJlZiIsInZvbHVtZVByb2dyZXNzIiwiX2J0biIsImlucHV0Iiwidm9sdW1lUHJvZ3Jlc3NMaW5lIiwidHlwZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/BarVolume/BarVolume.tsx\n"));

/***/ })

});